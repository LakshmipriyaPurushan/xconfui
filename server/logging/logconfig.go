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
package logging

import (
	"github.com/rdkcentral/xconfui/server/common"
	log "github.com/sirupsen/logrus"
)

func InitLogging(sc *common.ServerConfig) {
	log.SetFormatter(&log.JSONFormatter{
		TimestampFormat: common.LoggingTimeFormat,
		FieldMap: log.FieldMap{
			log.FieldKeyTime: "timestamp",
		},
	})

	logLevel := log.InfoLevel
	if parsed, err := log.ParseLevel(sc.GetString("xconfadminui.log.level")); err == nil {
		logLevel = parsed
	}
	log.SetLevel(logLevel)
	if sc.GetBoolean("xconfadminui.log.set_report_caller") {
		log.SetReportCaller(true)
	}
}
