/*
 * If not stated otherwise in this file or this component's LICENSE file the
 * following copyright and licenses apply:
 *
 * Copyright 2024 RDK Management
 *
 * Licensed under the Apache License, Version 2.0 (the License);
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
 */
package server

import (
	"fmt"
	"html/template"
	"net/http"
	"net/http/httputil"
	"net/url"

	log "github.com/sirupsen/logrus"
)

func RouteAdminUIApi(mux *http.ServeMux, ProxyRequestHandler func(http.ResponseWriter, *http.Request)) {
	mux.HandleFunc("/provider", ProxyRequestHandler)
	mux.HandleFunc("/auth/", ProxyRequestHandler)
	mux.HandleFunc("/acl/auth", ProxyRequestHandler)
	mux.HandleFunc("/environment/", ProxyRequestHandler)
	mux.HandleFunc("/environment", ProxyRequestHandler)

	mux.HandleFunc("/model/", ProxyRequestHandler)
	mux.HandleFunc("/model", ProxyRequestHandler)

	mux.HandleFunc("/genericnamespacedlist/", ProxyRequestHandler)
	mux.HandleFunc("/genericnamespacedlist", ProxyRequestHandler)

	mux.HandleFunc("/firmwareconfig/", ProxyRequestHandler)
	mux.HandleFunc("/firmwareconfig", ProxyRequestHandler)

	mux.HandleFunc("/activationMinimumVersion/", ProxyRequestHandler)
	mux.HandleFunc("/activationMinimumVersion", ProxyRequestHandler)

	mux.HandleFunc("/firmwarerule/", ProxyRequestHandler)
	mux.HandleFunc("/firmwarerule", ProxyRequestHandler)

	mux.HandleFunc("/firmwareruletemplate/", ProxyRequestHandler)
	mux.HandleFunc("/firmwareruletemplate", ProxyRequestHandler)

	mux.HandleFunc("/percentfilter/", ProxyRequestHandler)
	mux.HandleFunc("/percentfilter", ProxyRequestHandler)

	mux.HandleFunc("/roundrobinfilter/", ProxyRequestHandler)
	mux.HandleFunc("/roundrobinfilter", ProxyRequestHandler)

	mux.HandleFunc("/reportpage/", ProxyRequestHandler)
	mux.HandleFunc("/reportpage", ProxyRequestHandler)

	mux.HandleFunc("/log/", ProxyRequestHandler)
	mux.HandleFunc("/log", ProxyRequestHandler)

	mux.HandleFunc("/dcm/", ProxyRequestHandler)
	mux.HandleFunc("/dcm", ProxyRequestHandler)

	mux.HandleFunc("/setting/", ProxyRequestHandler)
	mux.HandleFunc("/setting", ProxyRequestHandler)
	mux.HandleFunc("/settings/", ProxyRequestHandler)
	mux.HandleFunc("/settings", ProxyRequestHandler)

	mux.HandleFunc("/telemetry/", ProxyRequestHandler)
	mux.HandleFunc("/telemetry", ProxyRequestHandler)

	mux.HandleFunc("/rfc/", ProxyRequestHandler)
	mux.HandleFunc("/rfc", ProxyRequestHandler)

	mux.HandleFunc("/change/", ProxyRequestHandler)
	mux.HandleFunc("/change", ProxyRequestHandler)

	mux.HandleFunc("/telemetrytwo/", ProxyRequestHandler)
	mux.HandleFunc("/telemetrytwo", ProxyRequestHandler)

	mux.HandleFunc("/changelog/", ProxyRequestHandler)
	mux.HandleFunc("/changelog", ProxyRequestHandler)

	mux.HandleFunc("/stats/", ProxyRequestHandler)
	mux.HandleFunc("/stats", ProxyRequestHandler)

	mux.HandleFunc("/penetrationdata/", ProxyRequestHandler)

	mux.HandleFunc("/config/", ProxyRequestHandler)
	mux.HandleFunc("/lockdownsettings/", ProxyRequestHandler)
}

func RouteStaticResources(mux *http.ServeMux, webRoot string) {
	appDir := fmt.Sprintf("%s/app", webRoot)
	fsApp := http.FileServer(http.Dir(appDir))
	mux.Handle("/app/", http.StripPrefix("/app/", fsApp))

	imgDir := fmt.Sprintf("%s/img", webRoot)
	fsImg := http.FileServer(http.Dir(imgDir))
	mux.Handle("/img/", http.StripPrefix("/img/", fsImg))
}

func RouteBaseApi(mux *http.ServeMux) {
	mux.HandleFunc("/monitor", MonitorHandler)
	mux.HandleFunc("/healthz", HealthZHandler)
	mux.HandleFunc("/version", VersionHandler)
	mux.HandleFunc("/config", ServerConfigHandler)
}

func RenderTemplate(w http.ResponseWriter, webRoot, tmpl string) {
	fileName := fmt.Sprintf("%s/templates/%s", webRoot, tmpl)
	parsedTemplate, err := template.ParseFiles(fileName)
	if err != nil {
		log.Errorf("Template parsing error: %v", err)
	}
	err = parsedTemplate.Execute(w, nil)
	if err != nil {
		log.Errorf("Template executing error: %v", err)
	}
}

func NewProxyToBackend(targetHost string) *httputil.ReverseProxy {
	url, err := url.Parse(targetHost)
	if err != nil {
		log.Errorf("Proxy error: %v", err)
		panic(err)
	}
	return httputil.NewSingleHostReverseProxy(url)
}

func ProxyRequestHandler(proxy *httputil.ReverseProxy) func(http.ResponseWriter, *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {
		r.Header.Set("X-Request-ID", "adminui")
		proxy.ServeHTTP(w, r)
	}
}
