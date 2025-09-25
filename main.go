/**
 * Copyright 2024 Comcast Cable Communications Management, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */
package main

import (
	"flag"
	"fmt"
	"net/http"
	"os"
	"strings"

	"github.com/rdkcentral/xconfui/app"
	"github.com/rdkcentral/xconfui/server"
	"github.com/rdkcentral/xconfui/server/common"
	"github.com/rdkcentral/xconfui/server/logging"
	log "github.com/sirupsen/logrus"
)

const defaultConfigFile = "/app/xconfadminui/xconfadminui.conf"

var webRoot string

func main() {
	configFile := flag.String("f", defaultConfigFile, "config file")
	flag.Parse()

	sc, err := common.NewServerConfig(*configFile)
	if err != nil {
		log.Fatal(err)
	}

	common.SetServerConfig(sc)

	logFile := sc.GetString("xconfadminui.log.file")
	if len(logFile) > 0 {
		file, err := os.OpenFile(logFile, os.O_APPEND|os.O_CREATE|os.O_RDWR, 0666)
		if err != nil {
			fmt.Printf("ERROR opening file: %v", err)
			panic(err)
		}
		defer file.Close()

		log.SetOutput(file)
		logging.InitLogging(sc)
	} else {
		log.SetOutput(os.Stdout)
	}

	webRoot = sc.GetString("xconfadminui.server.web_root")
	if webRoot == "" {
		panic("server.web_root property must be set")
	} else {
		webRoot = strings.TrimSuffix(webRoot, "/")
	}
	log.Info(fmt.Sprintf("Web server document root: %s", webRoot))

	mux := http.NewServeMux()
	mux.HandleFunc("/", Index)

	backendUrlStr := sc.GetString("xconfadminui.webconfigadmin.host")
	proxy := server.NewProxyToBackend(backendUrlStr)

	server.RouteAdminUIApi(mux, server.ProxyRequestHandler(proxy))
	server.RouteBaseApi(mux)
	server.RouteStaticImages(mux, webRoot)
	app.RouteUiFiles(mux)

	port := sc.GetString("xconfadminui.server.port")
	log.Fatal(http.ListenAndServe(port, mux))
}

func Index(w http.ResponseWriter, r *http.Request) {
	server.RenderTemplate(w, webRoot, "index.html")
}
