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
(function() {
    'use strict';

    angular
        .module('app.changeLog')
        .factory('changeLogService', service);

    service.$inject=['$http'];

    function service($http) {
        var API_URL = 'changelog';

        return {
            getChangeLog : getChangeLog,
            countAndSaveOperationsNumber: countAndSaveOperationsNumber
        };

        function getChangeLog() {
            return $http.get(API_URL);
        }

        function countAndSaveOperationsNumber(dataObj, storeObj) {
            storeObj.creations = 0;
            storeObj.deletions = 0;
            angular.forEach(dataObj, function(operation) {
                if(operation.operationType === 'CREATE') {
                    storeObj.creations++;
                }
                if(operation.operationType === 'DELETE') {
                    storeObj.deletions++;
                }
            });
        }
    }
})();

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
(function () {
    'use strict';
    angular
        .module('app.core')
        .factory('alertsService', alertsService);


    alertsService.$inject = ['toastr', 'utilsService'];

    function alertsService($toastr, utils) {
        var TIMEOUT = 10000;

        return {
            failedToLoadData: failedToLoadData,
            failedToSave: failedToSave,
            failedValidation: failedValidation,
            successfullySaved: successfullySaved,
            successfullyDeleted: successfullyDeleted,
            failedToDelete: failedToDelete,
            ruleHasNotChangedWarning: ruleHasNotChangedWarning,
            showSuccessMessage: showSuccessMessage,
            showWarningMessage: showWarningMessage,
            showError: showError,
            errorHandler: errorHandler
        };


        function failedToLoadData(entity, reason) {
            var errorMsg = 'Failed to load \' ' + entity + ' \'';
            if (!utils.isEmptyString(reason)) {
                errorMsg += ' ' + reason;
            }
            $toastr.error(errorMsg, 'Error', {
                closeButton: true,
                timeOut: TIMEOUT
            });
        }

        function successfullySaved(entity) {
            var message = 'Saved ' + entity;

            $toastr.success(message, 'Success', {
                closeButton: true,
                timeOut: TIMEOUT
            });
        }

        function successfullyDeleted(entity) {
            var message = 'Deleted ' + entity;

            $toastr.success(message, 'Success', {
                closeButton: true,
                timeOut: TIMEOUT
            });
        }

        function failedToSave(entity, reason) {
            var errorMsg = 'Failed to save ' + entity +'.';
            if (!utils.isEmptyString(reason)) {
                errorMsg += ' ' + reason;
            }
            $toastr.error(errorMsg, 'Error', {
                closeButton: true,
                timeOut: TIMEOUT
            });
        }

        function failedValidation(entity, reason) {
            var errorMsg = 'Validation failed ' + entity +'.';
            if (!utils.isEmptyString(reason)) {
                errorMsg += ' ' + reason;
            }
            $toastr.error(errorMsg, 'Error', {
                closeButton: true,
                timeOut: TIMEOUT
            });
        }

        function failedToDelete(entity, reason) {
            var errorMsg = 'Failed to delete ' + entity +'.';
            if (!utils.isEmptyString(reason)) {
                errorMsg += ' ' + reason;
            }
            $toastr.error(errorMsg, 'Error', {
                closeButton: true,
                timeOut: TIMEOUT
            });
        }

        function ruleHasNotChangedWarning() {
            $toastr.warning('Make some changes before saving the rule.', 'Warning', {
                closeButton: true,
                timeOut: TIMEOUT
            });
        }

        function showWarningMessage(obj) {
            $toastr.warning(obj.message, obj.title ? obj.title : 'Warning', {
                closeButton: true,
                timeOut: TIMEOUT
            });
        }

        function showSuccessMessage(obj) {
            $toastr.success(obj.message, obj.title ? obj.title : 'Success', {
                closeButton: true,
                timeOut: TIMEOUT
            });
        }

        function showError(errorObj) {
            $toastr.error(errorObj.message, errorObj.title ? errorObj.title : 'Error', {
                closeButton: true,
                timeOut: TIMEOUT
            });
        }

        function errorHandler(error) {
            var message = error.data.message ? error.data.message : error.statusText;
            showError({title: error.data.type,  message: message});
        }
    }

})();

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
(function () {
    'use strict';
    angular
        .module('app.services')
        .factory('fileReader', fileReader);


    fileReader.$inject = [];

    function fileReader() {
        let service = {
            readAsDataURLContent: readAsDataURLContent,
            readAsTextContent: readAsTextContent
        };

        return service;

        function onProgress(reader, scope) {
            return function (event) {
                scope.$emit('fileReaderProgress',
                    {
                        total: event.total,
                        progress: event.loaded
                    });
            };
        }

        function onLoad(reader, resolve, scope) {
            return function (event) {
                scope.$emit('fileReaderProgress',
                    {
                        total: event.loaded,
                        progress: event.loaded
                    });
                scope.$apply(function () {
                    resolve(reader.result);
                });
            };
        }

        function onError(reader, reject, scope) {
            return function () {
                scope.$apply(function () {
                    reject(reader.result);
                });
            };
        }

        function initAsyncReader(reader, scope, resolve, reject) {
            reader.onprogress = onProgress(reader, scope);
            reader.onload = onLoad(reader, resolve, scope);
            reader.onerror = onError(reader, reject, scope);
        }

        async function read(file, readFunction, scope) {
            let reader = new FileReader();
            return new Promise((resolve, reject) => {
                initAsyncReader(reader, scope, resolve, reject)
                readFunction(reader, file);
            });
        }

        function readAsText(reader, file) {
            reader.readAsText(file);
        }

        function readAsDataURL(reader, file) {
            reader.readAsDataURL(file);
        }

        async function readAsDataURLContent(file, scope) {
            return await read(file, readAsDataURL, scope)
        }

        async function readAsTextContent(file, scope) {
            return await read(file, readAsText, scope);
        }
    }
}());


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
(function() {
    'use strict';

    angular
        .module('app.sharedTestPage')
        .factory('sharedTestPageService', service);

    service.$inject = ['$http', 'permanentProfileService', 'settingProfileService', 'featureService'];

    function service($http, permanentProfileService, settingProfileService, featureService) {

        return {
            getMatchedRules: getMatchedRules,
            getProfiles: getProfiles
        };

        function getMatchedRules(url, selectedTypes, params) {
            return $http.post(url + getSelectedTypesAsString(selectedTypes), params);
        }

        function getProfiles(pageType) {
            return selectRequestService(pageType).getAll();
        }

        function getSelectedTypesAsString(selectedTypes) {
            if (selectedTypes && selectedTypes.length > 0) {
                var settingParams = '?';
                selectedTypes.forEach(function(type) {
                    settingParams += 'settingType=' + type + '&';
                });
                settingParams = settingParams.slice(0, -1);
                return settingParams;
            }
            return '';
        }

        function selectRequestService(pageType) {
            var requestService = null;
            switch(pageType) {
                case 'SETTINGS':
                    requestService = settingProfileService;
                    break;
                case 'TELEMETRY':
                    requestService = permanentProfileService;
                    break;
                case 'FEATURE':
                    requestService = featureService;
                    break;
                default:
                    console.error('Cannot get service, because page type is ' + pageType);
            }
            return requestService;
        }
    }
})();

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
(function() {
    'use strict';

    angular
        .module('app.services')
        .factory('authUtilsService', service);

    service.$inject=['$rootScope', 'PERMISSION', 'APPLICATION_TYPE', 'APPLICATION_TYPES', 'SINGLE_APPLICATION_TYPE_PAGE', '$cookies'];

    function service($rootScope, PERMISSION, APPLICATION_TYPE, APPLICATION_TYPES, SINGLE_APPLICATION_TYPE_PAGE, $cookies) {

        var RDKCLOUD_PERMISSIONS = [PERMISSION.READ_FIRMWARE_RDKCLOUD, PERMISSION.WRITE_FIRMWARE_RDKCLOUD,
            PERMISSION.READ_DCM_RDKCLOUD, PERMISSION.WRITE_DCM_RDKCLOUD,
            PERMISSION.READ_TELEMETRY_RDKCLOUD, PERMISSION.WRITE_TELEMETRY_RDKCLOUD];

        var hasPermissions = function(permissions) {
            var userPermissions = getUserPermissions();
            if (userPermissions.indexOf(PERMISSION.PERMIT_ALL) === -1) {
                for (var i = 0, length = permissions.length; i < length; i++) {
                    if (userPermissions.indexOf(permissions[i]) === -1) {
                        return false;
                    }
                }
            }
            return true;
        };

        var hasPermission = function(permission) {
            return hasPermissions([permission]);
        };

        function canWriteByApplication(section, application) {
            if (!application) {
                return false;
            }
            var writePermission = 'write-' + section + '-' + application;
            var writeAllPermission = 'write-' + section + '-*';
            return hasPermission(writeAllPermission) || hasPermission(writePermission);
        }

        function canWriteFirmwareByApplication(application) {
            return canWriteByApplication('firmware', application);
        }

        function canWriteDcmByApplication(application) {
            return canWriteByApplication('dcm', application);
        }

        function canWriteTelemetryByApplication(application) {
            return canWriteByApplication('telemetry', application);
        }

        function canWriteChangesByApplication(application) {
            return canWriteByApplication('changes', application);
        }

        function canReadFirmware() {
            return hasOneOfPermissions(PERMISSION.READ_FIRMWARE_PERMISSIONS);
        }

        function canReadDcm() {
            return hasOneOfPermissions(PERMISSION.READ_DCM_PERMISSIONS);
        }

        function canReadTelemetry() {
            return hasOneOfPermissions(PERMISSION.READ_TELEMETRY_PERMISSIONS);
        }

        function canReadChanges() {
            return hasOneOfPermissions(PERMISSION.READ_CHANGES_PERMISSIONS);
        }

        function hasOneOfPermissions(permissions) {
            if (!permissions) {
                return false;
            }
            for (var i = 0; i < permissions.length; i++) {
                if (hasPermission(permissions[i])) {
                    return true;
                }
            }
            return false;
        }

        function getUserPermissions() {
            var user = $rootScope.currentUser;
            if (!user || !user.permissions) {
                return [];
            }
            return user.permissions;
        }

        function getApplicationType() {
            if (hasOneOfPermissions(RDKCLOUD_PERMISSIONS)) {
                return APPLICATION_TYPE.RDKCLOUD;
            }
            return APPLICATION_TYPE.STB;
        }

        function getAvailableApplicationTypes(permissions) {
            var availableTypes = [];
            for (var i = 0; i < permissions.length; i++) {
                var permission = permissions[i];
                var type = endsWithApplicationType(permission);
                if (type && hasPermission(permission) && availableTypes.indexOf(type) < 0) {
                    availableTypes.push(type);
                }
            }

            return availableTypes.indexOf('*') > -1 ? APPLICATION_TYPES : availableTypes;
        }

        function endsWithApplicationType(permission) {
            var suffixes = [APPLICATION_TYPE.STB, APPLICATION_TYPE.RDKCLOUD, '*'];
            if (!permission) {
                return null;
            }
            for (var i = 0; i < suffixes.length; i++) {
                if (permission.endsWith(suffixes[i]) ) {
                    return suffixes[i];
                }
            }
            return null;
        }

        function isMultipleApplication() {
            for (let i = 0; i < SINGLE_APPLICATION_TYPE_PAGE.length; i++) {
                if (window.location.hash.includes(SINGLE_APPLICATION_TYPE_PAGE[i])) {
                    return false;
                }
            }
            return true;
        }

        function isAuthorized() {
            return $rootScope.currentUser && $cookies.get('token');
        }

        return {
            hasPermissions: hasPermissions,
            hasPermission: hasPermission,
            hasOneOfPermissions: hasOneOfPermissions,
            canWriteFirmwareByApplication: canWriteFirmwareByApplication,
            canWriteDcmByApplication: canWriteDcmByApplication,
            canWriteTelemetryByApplication: canWriteTelemetryByApplication,
            canReadFirmware: canReadFirmware,
            canReadDcm: canReadDcm,
            canReadTelemetry: canReadTelemetry,
            getApplicationType: getApplicationType,
            getAvailableApplicationTypes: getAvailableApplicationTypes,
            isMultipleApplication: isMultipleApplication,
            canWriteChangesByApplication: canWriteChangesByApplication,
            canReadChanges: canReadChanges,
            isAuthorized: isAuthorized
        };
    }
})();


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
(function () {
    'use strict';

    angular.module('app.services').factory('authService', service);

    service.$inject = ['$rootScope', '$cookies', 'utilsService', 'PERMISSION', '$http'];

    function service($rootScope, $cookies, utilsService, PERMISSION, $http) {
        const API_URL = 'auth/info';
        return {
            getAuthInfo: getAuthInfo
        };

       async function getAuthInfo() {
           return $http.get(API_URL);
        };
    }
})();


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
(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('changeUtils', service);

    service.$inject = [];

    function service() {

        return {
            groupChanges: groupChanges,
        };

        function groupChanges(changes) {
            let groupedChanges = {};
            changes.forEach(function(change) {
                let changesByEntityId = groupedChanges[change.entityId];
                if (!changesByEntityId) {
                    groupedChanges[change.entityId] = [change];
                } else {
                    groupedChanges[change.entityId].push(change);
                }
            });
            return groupedChanges;
        }
    }
})();


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
(function () {
    'use strict';

    angular.module('app.services').factory('dialogsService', service);

    service.$inject = ['dialogs', '$window'];

    function service($dialogs, $window) {
        function isOpen(header) {
            let isOpen = false;
            $('.modal-header').each(function() {
                if ($(this).text().includes(header)) {
                    isOpen = true;
                }
            });
            return isOpen;
        }

        return {
            showErrorAsSingleton: function (header, message, options) {
                if (!isOpen(header)) {
                    $dialogs.error(header, message, options);
                }
            },
            showConfirmAsSingleton: function (header, message, options, handler) {
                if (!isOpen(header)) {
                    $dialogs.confirm(header, message, options)
                            .result.then(handler);
                }
            },
            showWarningMessage: function (header, message, options, handler) {
                if (!isOpen(header)) {
                    $dialogs.warning(header, message, options)
                        .result.then(handler);
                }
            }
        };
    }
})();

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
(function() {
    'use strict';
    angular.module('app.services')
        .factory('globalValidationService', GlobalValidationService);


    GlobalValidationService.$inject = ['utilsService', 'REGEXP_CONSTANTS'];

    function GlobalValidationService (utilsService, REGEXP_CONSTANTS) {

        return {
            isProtocolValid: isProtocolValid,
            isIpValid: isIpValid,
            isPortValid: isPortValid,
            isPercentValid: isPercentValid,
            isUrlValid: isUrlValid,
            isUrlProtocolRequiredValid: isUrlProtocolRequiredValid,

            isIpV4: isIpV4,
            isIpV6: isIpV6,
            isNumber: isNumber,
            isBoolean: isBoolean
        };

        /**
         * Validates protocol
         * @param protocol
         * @returns {boolean}
         */
        function isProtocolValid(protocol) {
            if (utilsService.isNullOrUndefinedOrEmptyOrWhiteSpaceString(protocol)) {
                return false;
            }
            if (!protocol.match(REGEXP_CONSTANTS().alphabetical)) {
                return false;
            }
            return true;
        }

        /**
         * Validates ip
         * @param ip
         * @returns {boolean}
         */
        function isIpValid(ip) {
            if (utilsService.isNullOrUndefinedOrEmptyOrWhiteSpaceString(ip)) {
                return false;
            }

            var ipv6Valid = false;
            var ipv4Valid = false;

            try {
                ipv6Valid = new v6.Address(ip).isValid();
            }
            catch(err) {}

            try {
                ipv4Valid = new v4.Address(ip).isValid();
            }
            catch(err) {}

            return !(!ipv4Valid && !ipv6Valid);
        }

        function isIpV4(ip) {
            try {
                return new v4.Address(ip).isValid();
            } catch(err) {
                return false;
            }
        }

        function isIpV6(ip) {
            try {
                return new v6.Address(ip).isValid();
            } catch(err) {
                return false;
            }
        }

        function isNumber(value) {
            return $.isNumeric(value);
        }

        function isBoolean(value) {
            return angular.isDefined(value) && ("true" === value.toLowerCase() || "false" === value.toLowerCase());
        }

        /**
         * Validates port
         * @param port
         * @returns {boolean}
         */
        function isPortValid(port) {
            return angular.isDefined(port) && $.isNumeric(port) && (port >= 0) && (port <= 65535);
        }

        /**
         * Validates percent
         * @param percent
         * @returns {boolean}
         */
        function isPercentValid(percent) {
            return angular.isDefined(percent) && $.isNumeric(percent) && (percent > 0) && (percent < 100);
        }

        /**
         * Validates url
         * @param url
         * @returns {boolean}
         */
        function isUrlValid(url) {
            return new RegExp("(?=^.{4,253}$)(^((?!-)[a-zA-Z0-9-]{0,62}[a-zA-Z0-9]\.)+[a-zA-Z]{2,63}$)").test(url);
        }

        /**
         * Validates url (protocol required)
         * @param url
         * @returns {boolean}
         */
        function isUrlProtocolRequiredValid(url) {
            return new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?").test(url);
        }
    }
})();

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
(function () {
    'use strict';
    angular
        .module('app.services')
        .factory('importService', service);

    service.$inject = ['$rootScope', '$q', 'fileReader', 'dialogs', '$timeout', 'utilsService', 'alertsService', 'ENTITY_TYPE'];

    function service($rootScope, $q, fileReader, $dialogs, $timeout, utilsService, alertsService, ENTITY_TYPE) {

        var progressBarControl = {};
        var MAX_VALUES_FILESIZE = 10 * 1024 * 1024;//6 MiB

        $rootScope.$on('fileReaderProgress', function (event, data) {
            if (data.progress < data.total) {
                var percentage = Math.round((data.progress * 100) / data.total);
                $rootScope.$broadcast('dialogs.wait.progress', {'progress': percentage});
            } else {
                $rootScope.$broadcast('dialogs.wait.progress', {'progress': 100});
                $timeout(function () {
                    $rootScope.$broadcast('dialogs.wait.complete');
                }, 1000);
            }
        });

        return {
            openFile: openFile,
            progressBarControl: progressBarControl,
            importAllEntities: importAllEntities,
            getEntitiesFromFile: getEntitiesFromFile,
            wrapToImport: wrapToImport,
            prepareEntitiesFromFile: prepareEntitiesFromFile
        }

        function prepareEntitiesFromFile(file) {
            let entities = getEntitiesFromFile(file);
            utilsService.sortObjectsById(entities);
            return wrapToImport(entities);
        }

        function wrapToImport(entities) {
            let wrappedEntities = [];
            angular.forEach(entities, function(val, key) {
                let wrappedEntity = {};
                wrappedEntity.entity = val;
                wrappedEntity.overwrite = false;
                wrappedEntities.push(wrappedEntity);
            });
            return wrappedEntities;
        }

        function getEntitiesFromFile(data) {
            try {
                return JSON.parse(data);
            } catch(e) {
                alertsService.showError({title: 'JSONStructureException', message: 'JSON has some errors'});
                $log.error('error', e);
                return [];
            }
        }

        async function openFile(file, limit, scope) {
            var deferred = $q.defer();
            if (angular.isUndefined(file)) {
                deferred.reject('File name is undefined');
                return deferred.promise;
            }

            if (limit == null || angular.isUndefined(limit)) {
                limit = MAX_VALUES_FILESIZE;
            }

            if (file.size > MAX_VALUES_FILESIZE) {
                deferred.reject('File is too big [' + file.name + '], try to use a smaller one, limit is ' + limit + ' bytes');
                return deferred.promise;
            }

            //show wait dialog
            $dialogs.wait(undefined, undefined, 0);

            return await fileReader.readAsTextContent(file, scope);
        }

        function importAllEntities(service, wrappedEntities, success, error, entityType) {
            progressBarControl.total = wrappedEntities.length;
            angular.forEach(generateCreateUpdateEntities(wrappedEntities), function(list, key) {
                var partEntities = utilsService.splitListByPercentage(list, 10);
                if (!partEntities || !partEntities.length) {
                    return null;
                }

                // service must contain the following functions: updateSyncEntities, createSyncEntities
                var http = service[key](partEntities).then(function(result) {
                    angular.forEach(result.data, function(value, id) {
                        if (value.status === "SUCCESS") {
                            alertsService.successfullySaved(value.message);
                            if (success) {
                                success(id, value.message);
                            } else {
                                 utilsService.removeSelectedItemFromListById(wrappedEntities, id);
                            }
                        } else if (value.status === "FAILURE") {
                            if (entityType === ENTITY_TYPE.NS_LIST || entityType === ENTITY_TYPE.PERCENT_FILTER) {
                                $rootScope.$broadcast('import::error', {
                                    id: id,
                                    message: value.message
                                });
                            } else {
                                alertsService.showError({title: 'Error', message: value.message});
                            }
                            if (error) {
                                error(id, value.message);
                            }
                        }
                    });

                    if (progressBarControl) {
                        progressBarControl.progress(Object.keys(result.data).length);
                    }
                });

                // changes a progress bar
                progressBarControl.next = function() {
                    http.next();
                }
            });
        }

        function generateCreateUpdateEntities(wrappedEntities) {
            var entities = {
                updateSyncEntities: [],
                createSyncEntities: []
            };

            angular.forEach(wrappedEntities, function(wrappedEntity) {
                if (wrappedEntity.overwrite) {
                    entities.updateSyncEntities.push(wrappedEntity.entity);
                } else {
                    entities.createSyncEntities.push(wrappedEntity.entity);
                }
            });

            return entities;
        }
    }
})();

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
(function () {
    'use strict';
    angular.module('app.services')
        .factory('paginationService', PaginationService);

    PaginationService.$inject = ['$localStorage', '$location', '$log'];

    function PaginationService($localStorage, $location, $log) {

        var availablePageSizes = [
            '10',
            '50',
            '100',
            '200'
        ];

        var defaultPageSize = '50';
        var defaultPageNumber = '1';

        function getAvailablePageSizes() {
            return availablePageSizes;
        }

        function getDefaultPageSize(storageKey) {
            return $localStorage[storageKey] ? $localStorage[storageKey] : defaultPageSize;
        }

        function getPageSize(storageKey, customDefaultPageSize) {
            if (pageSizeInLocationIsValid()) {
                var pageSize = $location.search().pageSize;
                saveDefaultPageSize(pageSize, storageKey);
                return pageSize;
            }
            else if(customDefaultPageSize) {
                defaultPageSize = customDefaultPageSize;
                saveDefaultPageSize(customDefaultPageSize, storageKey);
            }

            return getDefaultPageSize(storageKey);
        }

        function getPageNumber() {
            return $location.search().pageNumber > 0 ? $location.search().pageNumber : defaultPageNumber;
        }

        function saveDefaultPageSize(pageSize, storageKey) {
            $localStorage[storageKey] = pageSize;
        }

        function paginationSettingsInLocationHaveChanged(pageNumber, pageSize) {
            return ($location.search().pageNumber && pageNumber !== $location.search().pageNumber) ||
                        ($location.search().pageSize && pageSize !== $location.search().pageSize);
        }

        function pageSizeInLocationIsValid() {
            return availablePageSizes.indexOf($location.search().pageSize) > -1;
        }

        function savePaginationSettingsInLocation(pageNumber, pageSize) {
            $location.search('pageNumber', pageNumber);
            $location.search('pageSize', pageSize);
        }

        return {
            getAvailablePageSizes: getAvailablePageSizes,
            getDefaultPageSize: getDefaultPageSize,
            getPageSize: getPageSize,
            getPageNumber: getPageNumber,
            saveDefaultPageSize: saveDefaultPageSize,
            paginationSettingsInLocationHaveChanged: paginationSettingsInLocationHaveChanged,
            pageSizeInLocationIsValid: pageSizeInLocationIsValid,
            savePaginationSettingsInLocation : savePaginationSettingsInLocation
        };
    }
})();


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
 (function() {
    'use strict';

    angular
        .module('app.services')
        .factory('ruleConditionService', service);

    service.$inject = ['$http'];

    function service($http) {
        var API_URL = 'config/';

        return {
            getIpMacIsConditionLimit: getIpMacIsConditionLimit
        };

        function getIpMacIsConditionLimit() {
            return $http.get(API_URL + "maciprule");
        }
    }
})();

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
(function() {
    'use strict';

    angular
        .module('app.services')
        .factory('ruleValidationService', service);

    service.$inject=['OPERATION', 'alertsService', 'utilsService'];

    function service(OPERATION, alertsService, utilsService) {
        // works for time in format hh:mm or hh:mm:ss
        function validateTime(timeString) {
            var time = timeString.split(':');
            var length = time.length;
            if (length < 2 || length > 3) {
                return 'Time must be in hh:mm or hh:mm:ss format';
            }
            if (!isHours(time[0])) {
                return 'Hours must be from 0 to 23';
            }
            if (!isMinutesOrSeconds(time[1])) {
                return 'Minutes must be from 0 to 59';
            }
            if (length == 3 && !isMinutesOrSeconds(time[2])) {
                return 'Seconds must be from 0 to 59';
            }

            return null;
        }

        function isHours(string) {
            return utilsService.isInt(string) && (0 <= parseInt(string) && parseInt(string) <= 23);
        }

        function isMinutesOrSeconds(string) {
            return utilsService.isInt(string) && (0 <= parseInt(string) && parseInt(string) <= 59);
        }

        function validate(ruleBuilderScope) {
            if (ruleBuilderScope.disableValidation) {
                return 0;
            }
            var rule = ruleBuilderScope.rule;
            if (ruleBuilderScope.showRelation) {
                if (!rule.relation) {
                    alertsService.showError({title: "Relation", message: "Please specify"});
                    return 1;
                }
            }

            var condition = ruleBuilderScope.rule.condition;

            switch (condition.operation) {
                case OPERATION.PERCENT:
                    var value = rule.condition.fixedArg.bean.value;
                    var doubleValue = value['java.lang.Double'];
                    var floatPercentRegExp = new RegExp(/^[0-9]+(\.[0-9]{1,10})?$/);
                    if ((!floatPercentRegExp.test(doubleValue) || doubleValue <= 0 || doubleValue >= 100)
                        && (doubleValue !== '' && doubleValue !== null && doubleValue !== undefined)) {
                        alertsService.showError({title: "ValidationException", message: "FixedArg by PERCENT operation must be from 0.0000000001 to 99.9999999999"});
                        return 1;
                    }
            }

            if (condition.operation !== OPERATION.PERCENT) {
                if (!condition.freeArg.name) {
                    alertsService.showError({message: "FreeArg is required"});
                    return 1;
                }
            }
            if (condition.operation !== OPERATION.EXISTS) {
                var isFixedArgExist = false;
                if (condition.operation === OPERATION.IN) {
                    isFixedArgExist = condition.fixedArg.collection.value && condition.fixedArg.collection.value.length > 0;
                } else if (angular.isObject(condition.fixedArg.bean.value)) {
                    var fixedArgValues = _.values(condition.fixedArg.bean.value);
                    var notEmptyValues = _.filter(fixedArgValues, function(fixedArgValue) {
                        return !utilsService.isNullOrUndefined(fixedArgValue) && fixedArgValue.length !== 0;
                    });
                    isFixedArgExist = notEmptyValues.length !== 0;
                } else {
                    isFixedArgExist = !utilsService.isNullOrUndefined(condition.fixedArg.bean.value) && condition.fixedArg.bean.value !== null;
                }
                if (ruleBuilderScope.fixedArgRequired && !isFixedArgExist) {
                    alertsService.showError({message: "FixedArg is required"});
                    return 1;
                } else {
                    if ((condition.operation === OPERATION.LTE || condition.operation === OPERATION.GTE) && condition.freeArg.name === 'time') {
                        var validationMessage = validateTime(_.values(condition.fixedArg.bean.value)[0]);
                        if (validationMessage !== null) {
                            alertsService.showError({title: "FreeArg", message: validationMessage});
                            return 1;
                        }
                    } else if (ruleBuilderScope.fixedArgRequired &&
                        (condition.operation === OPERATION.LTE || condition.operation === OPERATION.GTE) && !utilsService.isNumeric(condition.fixedArg.bean.value['java.lang.Double'])) {
                        alertsService.showError({title: 'Cert Expiry Duration', message: 'Value must be a number'});
                        return 1;
                    }
                }
            }

            if (!isUniqueRule(rule, ruleBuilderScope.data)) {
                alertsService.showError({title: "Rule", message: "Rule conditions must be unique. You can not add same conditions"});
                return 1;
            }

            return 0;
        }

        function isUniqueRule(rule, data) {
            var newCondition = rule.condition;
            if (data.condition) {
                if (angular.equals(newCondition.freeArg.name, data.condition.freeArg.name)
                    && angular.equals(newCondition.freeArg.type, data.condition.freeArg.type)
                    && angular.equals(newCondition.fixedArg, data.condition.fixedArg)
                    && angular.equals(newCondition.operation, data.condition.operation)
                    && isEqualRelations(rule.relation, data.relation)) {
                    return false;
                }
            } else {
                var isUnique = true;
                var n = 0;
                while (isUnique && data.compoundParts && (data.compoundParts.length - n) >= 1) {
                    if (!isUniqueRule(rule, data.compoundParts[n])) {
                        isUnique = false;
                    }
                    n++;
                }
                return isUnique;
            }
            return true;
        }

        function isEqualRelations(relation1, relation2) {
            if (!relation1 || !relation2) {
                return true;
            }

            return angular.equals(relation1, relation2);
        }

        return {
            validate: validate
        };

    }
})();


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
(function() {
    'use strict';

    angular
        .module('app.services')
        .factory('ruleHelperService', service);

    service.$inject=['OPERATION', 'namespacedListService', 'environmentService', 'modelService', 'NAMESPACED_LIST_TYPE', 'firmwareConfigService'];

    function service(OPERATION, namespacedListService, environmentService, modelService, NAMESPACED_LIST_TYPE, firmwareConfigService) {
        var _rule = {
            "negated": false,
            "relation": null,
            "compoundParts": [],
            "condition": null
        };

        return {
            flattenRule: flattenRule,
            isCompound: isCompound,
            addRule: addRule,
            copyRule: copyRule,
            createEmptyRule: createEmptyRule,
            ruleToString: ruleToString,
            renderValue: renderValue,
            getFixedArgValuesFromRuleByFreeArg: getFixedArgValuesFromRuleByFreeArg,
            buildFirmwareConfigsBySupportedModels: buildFirmwareConfigsBySupportedModels,
            watchRuleRemoveOperation: watchRuleRemoveOperation,
            buildRepresentation: buildRepresentation,
            buildNamespacedListData: buildNamespacedListData,
            buildFirmwareConfigs: buildFirmwareConfigs,
            isSearchContextNotEmpty: isSearchContextNotEmpty,
            equalRules: equalRules
        };


        function flattenRule(rule) {
            if (isCompound(rule)) {
                return rule.compoundParts;
            } else {
                return [rule];
            }
        }

        function isCompound(rule) {
            return !rule.condition;
        }

        function addRule(rule, rootRule) {
            var clonedRootRule = angular.copy(rootRule);
            if (clonedRootRule.condition) {
                $.extend(clonedRootRule, angular.copy(_rule));
                clonedRootRule.compoundParts = (clonedRootRule.compoundParts || []).concat(copyRule(rootRule), rule);
            } else {
                if (clonedRootRule.compoundParts && clonedRootRule.compoundParts.length >= 1) {
                    clonedRootRule.compoundParts = (clonedRootRule.compoundParts || []).concat(angular.copy(rule));
                } else {
                    $.extend(clonedRootRule, rule);
                }
            }
            return clonedRootRule;
        }

        function copyRule(rule) {
            var clonedRule = angular.copy(rule);
            // to avoid additional properties in rule,e.g. action
            return {
                "negated": clonedRule.negated,
                "relation": clonedRule.relation,
                "compoundParts": clonedRule.compoundParts,
                "condition": clonedRule.condition
            };
        }

        function createEmptyRule() {
            return angular.copy(_rule);
        }

        function ruleToString(rule) {
            var result = '(';
            if (rule.compoundParts && rule.compoundParts.length !== 0) {
                angular.forEach(rule.compoundParts, function(val, key) {
                    if (val.relation) {
                        result += ' ' + val.relation + ' ';
                    }

                    result += '(';
                    result += val.condition.freeArg.name;
                    if (val.negated) {
                        result += ' not';
                    }
                    result += ' ' + val.condition.operation;
                    result += ' ' + val.condition.fixedArg.bean.value;
                    result += ')';
                });
            } else {
                result += '(';
                result += rule.condition.freeArg.name;
                if (rule.negated) {
                    result += ' NOT';
                }
                result += ' ' + rule.condition.operation;
                result += ' ' + rule.condition.fixedArg.bean.value;
                result += ')';

            }
            result += ')';
            return result;
        }

        function renderValue(condition) {
            if (!condition) {
                return;
            }
            switch (condition.operation) {
                case OPERATION.IN:
                    var result = condition.fixedArg.collection.value;
                    return result ? result.join(", ") : '';
                case OPERATION.EXISTS:
                    break;
                default :
                    var value = condition.fixedArg.bean.value;
                    if (angular.isObject(value)) {
                        return value[resolveFixedArgType(value)];
                    } else {
                        return value;
                    }
            }
        }

        function resolveFixedArgType(value) {
            for (var type in value) {
                return type;
            }
        }

        function getFixedArgValuesFromRuleByFreeArg(rule, freeArgToFind, result) {
            var condition = rule.condition;
            if (rule.compoundParts && rule.compoundParts.length) {
                _.each(rule.compoundParts, function(value) {
                    getFixedArgValuesFromRuleByFreeArg(value, freeArgToFind, result);
                });
            } else {
                if (condition && condition.freeArg && condition.freeArg.name === freeArgToFind) {
                    switch (condition.operation) {
                        case OPERATION.IN:
                            var values = condition.fixedArg.collection.value;
                            if (values) {
                                _.each(values, function(value) {
                                    result.push(value);
                                });
                            }
                            break;

                        default:
                            result.push(_.values(condition.fixedArg.bean.value)[0]);
                            break;
                    }
                }
            }
        }

        function buildFirmwareConfigsBySupportedModels(rule, allFirmwareConfigs) {
            var firmwareConfigs = [];
            var selectedModels = [];
            getFixedArgValuesFromRuleByFreeArg(rule, 'model', selectedModels);
            if (selectedModels.length > 0) {
                _.each(allFirmwareConfigs, function(firmwareConfig) {
                    var intersection = _.intersection(selectedModels, firmwareConfig.supportedModelIds);
                    if (intersection.length) {
                        if (firmwareConfigs.indexOf(firmwareConfig) === -1) {
                            firmwareConfigs.push(firmwareConfig);
                        }
                    }
                });
            } else {
                _.each(allFirmwareConfigs, function(firmwareConfig) {
                    firmwareConfigs.push(firmwareConfig);
                });
            }
            return firmwareConfigs;
        }

        function watchRuleRemoveOperation(isValidCondition, rule, obj) {
            if (isCompound(rule)) {
                var compoundParts = rule.compoundParts || [];
                for (var i = 0; i < compoundParts.length; i++) {
                    var currentRule = compoundParts[i];
                    if (currentRule === obj.rule) {
                        if (i === 0) {
                            if (compoundParts.length === 1) {
                                $.extend(rule, createEmptyRule());
                            } else {
                                compoundParts.shift();
                                delete rule.compoundParts[0].relation;
                                reorganizeRuleIfNotCompound(rule, compoundParts);
                            }
                        } else {
                            compoundParts.splice(i, 1);
                            reorganizeRuleIfNotCompound(rule, compoundParts);
                        }
                        if ((!rule.compoundParts || rule.compoundParts.length === 0) && !rule.condition) {
                            isValidCondition = false;
                        }
                    }
                }
            } else {
                if (obj.rule === rule) {
                    $.extend(rule, createEmptyRule());
                    isValidCondition = false;
                }
            }
            return {
                rule: rule,
                isValidCondition: isValidCondition
            }
        }

        function reorganizeRuleIfNotCompound(rule, compoundParts) {
            if (compoundParts.length === 1) {
                var clonedFirmwareRule = angular.copy(rule);
                $.extend(clonedFirmwareRule, compoundParts[0]);
                delete clonedFirmwareRule.compoundParts;
                rule = clonedFirmwareRule;
            }
        }

        function buildRepresentation(application) {
            var result = {env: [], model: [], firmwareVersion: []};
            environmentService.getAll().then(function(resp) {
                _.each(resp.data, function(entity) { result['env'].push(entity.id); });
            }, function(error) {});
            modelService.getAll().then(function(resp) {
                _.each(resp.data, function(entity) { result['model'].push(entity.id); });
            }, function(error) {});
            firmwareConfigService.getAll(application).then(function(resp) {
                _.each(resp.data, function(firmwareConfig) { result['firmwareVersion'].push(firmwareConfig.firmwareVersion)});
            });
            return result;
        }

        function buildNamespacedListData() {
            var macRules = {name: 'MAC Lists', data: []};
            var ipFilters = {name: 'IP Lists', data: []};
            namespacedListService.getAllNamespacedLists().then(function(response) {
                _.each(response.data, function(entity) {
                    switch (entity.typeName) {
                        case NAMESPACED_LIST_TYPE.MAC_LIST:
                            macRules.data.push(entity.id);
                            break;
                        case NAMESPACED_LIST_TYPE.IP_LIST:
                            ipFilters.data.push(entity.id);
                            break;
                    }
                });
            });
            return [macRules, ipFilters];
        }

        function buildFirmwareConfigs(data, allFirmwareConfigs) {
            var firmwareConfigs = buildFirmwareConfigsBySupportedModels(data, allFirmwareConfigs);
            var firmwareVersions = [];
            _.each(firmwareConfigs, function(firmwareConfig) {firmwareVersions.push(firmwareConfig.firmwareVersion)});
            return firmwareVersions;
        }

        function isSearchContextNotEmpty(searchContext) {
            var searchContextValues = _.values(searchContext);
            for(var i = 0; i < searchContextValues.length; i++) {
                if (searchContextValues[i] && searchContextValues[i] !== '') {
                    return true;
                }
            }
            return false;
        }

        function equalRules(rule, rule2) {
            if (rule.condition.freeArg.name !== rule2.condition.freeArg.name) {
                return false;
            }
            if (rule.condition.operation !== rule2.condition.operation) {
                return false;
            }
            if (rule.condition.operation === OPERATION.IN && rule2.condition.operation === OPERATION.IN) {
                var collection = rule.condition.fixedArg.collection.value;
                var collection2 = rule2.condition.fixedArg.collection.value;
                if (collection.length !== collection2.length) {
                    return false;
                }
                if (_.intersection(collection, collection2).length !== collection.length) {
                    return false;
                }
            } else {
                if (rule.condition.fixedArg.bean.value !== rule2.condition.fixedArg.bean.value) {
                    return false;
                }
            }
            if (rule.relation !== rule2.relation) {
                return false;
            }
            return true;
        }
    }
})();


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
(function() {
    'use strict';

    angular.module('app.services')
        .factory('syncHttpService', service);

    service.$inject = ['$http'];

    function service($http) {
        function selectRequest(method, url, data) {
            var request = null;

            if (!method) {
                console.log('Method is NULL');
                return null;
            }

            switch(method.toLowerCase()) {
                case 'get':
                    request = $http.get(url);
                    break;
                case 'put':
                    request = data ? $http.put(url, data) : $http.put(url);
                    break;
                case 'post':
                    request = data ? $http.post(url, data) : $http.post(url);
                    break;
                default:
                    console.log('Did not find method');
                    break;
            }
            return request;
        }


        function http(requests) {
            function performRequest(success, error) {
                var request = (requests && requests.length)
                    ? requests.splice(0, 1)[0] : null;

                if (!request) {
                    return null;
                }

                if (!request.url) {
                    console.log('URL does not exist');
                    console.log(request);
                    return null;
                }

                selectRequest(request.method, request.url, request.data).then(success, error);
            }

            return {
                then: function (success, error) {
                    performRequest(success, error);

                    return {
                        next : function() {
                            performRequest(success, error);
                        }
                    }
                }
            }
        }

        return {
            http: http
        }
    }
})();

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
(function () {
    'use strict';

    angular.module('app.services')
        .factory('testPageUtils', service);

    service.$inject = ['utilsService', 'alertsService'];

    function service(utilsService, alertsService) {
        return {
            validateInput: validateInput,
            getParametersAsString: getParametersAsString,
            getParametersAsObject: getParametersAsObject
        };

        function validateInput(parameters) {
            var isInputValid = true;
            parameters.forEach(function (item) {
                if (utilsService.isNullOrUndefinedOrEmptyOrWhiteSpaceString(item.key)) {
                    isInputValid = false;
                }
            });
            if (!isInputValid) {
                alertsService.showError({title: 'Error', message: 'Key is required'});
            }
            return isInputValid;
        }

        function getParametersAsString(parameters) {
            var result = '';
            if (!parameters || parameters.length == 0) {
                return result;
            }
            for (let i = 0; i < parameters.length; i ++) {
                result += (parameters[i].key + '=' + parameters[i].value);
                if (i < parameters.length - 1) {
                    result += '&';
                }
            }
            return result;
        }

        function getParametersAsObject(parameters) {
            var result = {};
            parameters.forEach(function (item) {
               result[item.key] = item.value;
            });
            return result;
        }
    }
})();

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
(function () {
    'use strict';
    angular.module('app.services')
        .factory('utilsService', UtilsService);

    function UtilsService() {

        var isEmptyString = function (stringToTest) {
            if (!$.isEmptyObject(stringToTest) && angular.isDefined(stringToTest)) {
                return (stringToTest.replace(/\s/g, '').length === 0);
            } else {
                return true;
            }
        };

        var getString = function (str) {
            return (angular.isDefined(str) && str != null) ? str.toString() : '';
        };

        var arrayHasDuplicates = function (array) {
            var valuesSoFar = {};
            for (var i = 0; i < array.length; ++i) {
                var value = array[i];
                if (Object.prototype.hasOwnProperty.call(valuesSoFar, value)) {
                    return true;
                }
                valuesSoFar[value] = true;
            }
            return false;
        };

        /**
         *   This method checks if JS object (Map) is empty (it has only its prototype properties)
         */
        function isMapEmpty(object) {
            if (Object.getOwnPropertyNames(object).length === 0) {
                //is empty
                return true;
            }
            return false;
        }

        /**
         * Check if value not null and defined
         * @param value
         * @returns {boolean}
         */
        function isNullOrUndefined(value) {
            if (value == null || angular.isUndefined(value)) {
                return true;
            }
            return false;
        }

        /**
         * Check if object null and undefined or object (Map) is empty (it has only its prototype properties)
         * @param value
         * @returns {boolean}
         */
        function isNullOrUndefinedOrEmptyObject(object) {
            return isNullOrUndefined(object) || isMapEmpty(object);
        }

        /**
         * Check if any value in array of fields not null and defined
         * @param value
         * @returns {boolean}
         */
        function isNullOrUndefinedOrEmptyStringArrayOfValues(array) {
            var valid = false;
            valid = isNullOrUndefined(array);

            if (valid === false) {
                for (var i = 0; i < array.length; i++) {
                    valid = isNullOrUndefined(array[i]);
                    if (valid === true) {
                        break;
                    }
                }
            }

            return valid;
        }

        function removeNullOrUndefinedOrEmptyStringValuesFromArray(array) {
            var length = array.length;
            for (var i = length - 1; i >= 0; i--) {
                var value = array[i];
                if (isNullOrUndefinedOrEmptyOrWhiteSpaceString(value)) {
                    array.splice(i, 1);
                }
            }
        }

        /**
         * Checks whether array contains any elements
         * @param array
         * @returns {boolean}
         */
        function isNullOrUndefinedOrEmpty(array) {
            var result = false;
            result = isNullOrUndefined(array);

            if (result === false) {
                return array.length <= 0;
            }

            return result;
        }

        var checkObjHasDeepPath = function(obj, keys) {
            // check that obj has deep path
            // for example keys=['child', 'childOfChild'] => check that obj.child.childOfChild exists
            var next = keys.shift();
            return obj.hasOwnProperty(next) && (!keys.length || checkObjHasDeepPath(obj[next], keys));
        };

        function isNullOrUndefinedOrEmptyOrWhiteSpaceString (value) {
            return isNullOrUndefined(value) || isEmptyString(value);
        }

        /**
         * Check value, should be only chars and numbers without special symbols
         * @param name
         * @returns {boolean}
         */
        function isAlphaNumericAndNotEmpty(value) {
            var alphanumerical = /^[a-zA-z0-9_]+$/;
            if (!isNullOrUndefined(value) && !alphanumerical.exec(value) || value === '') {
                return false;
            }
            return true;
        }

        function convertObjectToArray(obj) {
            if (obj instanceof Object && !Array.isArray(obj)) {
                var result = [];
                for (var key in obj) {
                    var item = {};
                    item.key = key;
                    item.value = obj[key];
                    result.push(item);
                }
                return result;
            } else {
                return obj;
            }
        }

        function convertArrayToObject(array) {
            var result = {};
            for (var i = 0; i < array.length; i++) {
                result[array[i].key] = array[i].value;
            }
            return result;
        }

        function removeItemFromArray(array, value) {
            for (var i = 0; i < array.length; i++) {
                if (array[i] === value) {
                    array.splice(i, 1);
                    return i;
                }
            }
            return -1;
        }

        function removeItemFromArrayWithDeepEquals(array, value) {
            for (var i = 0; i < array.length; i++) {
                if (angular.equals(array[i], value)) {
                    array.splice(i, 1);
                    return i;
                }
            }
            return -1;
        }

        function removeMultipleItemsFromArray(array, itemsList) {
            if(!Array.isArray(itemsList)) itemsList = [itemsList];
            var length = itemsList.length;
            for(var i = 0; i < length; i++) {
                var indexToRemove = array.indexOf(itemsList[i]);
                if(indexToRemove > -1) array.splice(indexToRemove, 1);
            }
        }

        function removeNonAlpha(string) {
            return string.replace(/\W/g, '');
        }

        function hashCode(string) {
            var hash = 0, i, chr, len;
            if (string.length == 0) return hash;
            for (i = 0, len = string.length; i < len; i++) {
                chr   = string.charCodeAt(i);
                hash  = ((hash << 5) - hash) + chr;
                hash |= 0; // Convert to 32bit integer
            }
            return hash;
        }

        function removeItemFromListById(list, id) {
            var length = list.length;
            for (var i = 0; i < length; i++) {
                if (list[i].id === id) {
                    list.splice(i, 1);
                    return i;
                }
            }
            return -1;
        }

        function removeSelectedItemFromListById(list, id) {
            var length = list.length;
            for (var i = 0; i < length; i++) {
                if (list[i].entity.id === id) {
                    list.splice(i, 1);
                    return i;
                }
            }
            return -1;
        }

        function sortObjectsById(objectsArray) {
            objectsArray.sort(function(a, b) {
                return a.id.localeCompare(b.id);
            });
        }

        function sortObjectsByPriority(objectsArray) {
            objectsArray.sort(function(a, b) {
                var priorityA = isInt(a.priority) ? parseInt(a.priority) : 0;
                var priorityB = isInt(b.priority) ? parseInt(b.priority) : 0;
                return priorityA - priorityB;
            });
        }

        function isInt(value) {
            return $.isNumeric(value) && value.toString().indexOf(".") === -1;
        }

        function getItemFromListById(id, list) {
            var length = list.length;
            for (var i = 0; i < length; i++) {
                if (id === list[i].id) {
                    return list[i];
                }
            }

            return null;
        }

        function spliceArray(array, size) {
            var newArr = [];
            for (var i=0; i<array.length; i+=size) {
                newArr.push(array.slice(i, i+size));
            }
            return newArr;
        }

        function saveJsonContent(jsonContent, filename) {
            var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(jsonContent));
            var a = document.createElement('a');
            a.href = 'data:' + data;
            a.download = filename + '.json';
            a.click();
        }

        function getEntityFromArrayByFieldValue(fieldName, fieldValue, values) {
            return _.find(values, function(firmareConfig) {
                if (firmareConfig[fieldName] === fieldValue) {
                    return fieldValue;
                }
            });
        }

        function isArrayContainsValue(array, value) {
            return array.some(function(item) {
              return angular.equals(item, value);
            });
          }

        function hasValue(value) {
            var result = angular.isDefined(value) && !$.isEmptyObject(value);
            return result;
        }

        function chunkData(dataArray, chunkCount) {
            var result = [];
            var chunkSize = Math.round(dataArray.length / chunkCount);
            var sliceStartNumber = 0;
            for (var i = 0; i < chunkCount; i++) {
                if ((i + 1) === chunkCount) {
                    result.push(dataArray.slice(sliceStartNumber, dataArray.length));
                } else {
                    result.push(dataArray.slice(sliceStartNumber, sliceStartNumber + chunkSize));
                }
                sliceStartNumber += chunkSize;
            }
            return result;
        }

        function addClass(element, addClass) {
            if (addClass) {
                element.addClass(addClass);
            }
        }

        function removeClass(element, removeClass) {
            if (removeClass) {
                element.removeClass(removeClass);
            }
        }
        
        function splitListByPercentage(list, percentage) {
            var blocks = [];
            var newList = list.slice();
            var x = parseInt(newList.length * percentage / 100);
            x = (x < 1) ? 1 : x;
        
            while(newList.length) {
                blocks.push(newList.splice(0, x));
            }
        
            return blocks;
        }

        function generateRequestList(dataList, options) {
            var requests = [];
            angular.forEach(dataList, function(data) {
                var request = {};
                request.url = options.url;
                request.method = options.method;
                request.data = data;
                requests.push(request);
            });
            return requests;
        }

        function isNumeric(value) {
            return !isNaN(parseFloat(value)) && isFinite(value);
        }

        function parseCronExpression(cronExpression) {
            var cronFields = cronExpression.split(/\s/);
            var cronFieldsObject = {};
            var i = 0;
            if (cronFields.length === 6) {
                i = 1;
            }
            if (cronFields.length > 0) {
                cronFieldsObject.minutes = cronFields[i];
            }
            if (cronFields.length > 1) {
                cronFieldsObject.hours = cronFields[i + 1];
            }
            if (cronFields.length > 2) {
                cronFieldsObject.dayOfMonth = cronFields[i + 2];
            } else {
                cronFieldsObject.dayOfMonth = '*';
            }
            if (cronFields.length > 3) {
                cronFieldsObject.month = cronFields[i + 3];
            } else {
                cronFieldsObject.month = '*';
            }
            if (cronFields.length > 4) {
                cronFieldsObject.dayOfWeek = cronFields[i + 4];
            } else {
                cronFieldsObject.dayOfWeek = '*';
            }
            return cronFieldsObject;
        }

        function getCronExpressionFromFields(cronFields) {
            var expression = '';
            if (cronFields.minutes) {
                expression += cronFields.minutes + " ";
            }
            if (cronFields.hours) {
                expression += cronFields.hours + " ";
            }
            if (cronFields.dayOfMonth) {
                expression += cronFields.dayOfMonth + " ";
            } else {
                expression += '* ';
            }
            if (cronFields.month) {
                expression += cronFields.month + " ";
            } else {
                expression += '* ';
            }
            if (cronFields.dayOfWeek) {
                expression += cronFields.dayOfWeek;
            } else {
                expression += '*';
            }
            return expression;
        }

        function removeEmptyStringParams(object) {
            var objectToRemoveProps = angular.copy(object);
            var keys = _.keys(objectToRemoveProps);
            keys.forEach(function(key) {
                if (isEmptyString(objectToRemoveProps[key])) {
                    delete objectToRemoveProps[key];
                }
            });
            return objectToRemoveProps;
        }

        function isBase64(encoded) {
            return encoded.length % 4 === 0 && /^[A-Za-z0-9+/]*={0,3}$/.test(encoded);
        }

        function isGibberish(decoded) {
            const nonPrintableThreshold = 0.3; // 30%
          
            const nonPrintableCount = (decoded.match(/[\x00-\x1F\x7F-\xFF]/g) || []).length;
            const nonPrintablePercentage = nonPrintableCount / decoded.length;
                      
            return nonPrintablePercentage > nonPrintableThreshold;
        }
        
        function getValuesInArrayUsingKey(parameters, key) {
            var values = [];
            for (var i = 0; i < parameters.length; i++) {
                if(parameters[i].key === key) {
                    values.push(parameters[i].value);
                }
            }
            return values;
        }

        function isNumber(valStr) {
            if (!/^\d+$/.test(valStr)) {
                return false;
            }
            const num = parseInt(valStr, 10);
            if (isNaN(num)) {
                return false;
            }
            return true;
        }

        return {
            isEmptyString: isEmptyString,
            getString: getString,
            arrayHasDuplicates: arrayHasDuplicates,
            isNullOrUndefined: isNullOrUndefined,
            isMapEmpty: isMapEmpty,
            checkObjHasDeepPath: checkObjHasDeepPath,
            isNullOrUndefinedOrEmptyOrWhiteSpaceString: isNullOrUndefinedOrEmptyOrWhiteSpaceString,
            isNullOrUndefinedOrEmptyStringArrayOfValues: isNullOrUndefinedOrEmptyStringArrayOfValues,
            isAlphaNumericAndNotEmpty: isAlphaNumericAndNotEmpty,
            convertObjectToArray: convertObjectToArray,
            convertArrayToObject: convertArrayToObject,
            removeItemFromArray: removeItemFromArray,
            removeNonAlpha: removeNonAlpha,
            isNullOrUndefinedOrEmpty: isNullOrUndefinedOrEmpty,
            hashCode: hashCode,
            removeMultipleItemsFromArray: removeMultipleItemsFromArray,
            removeItemFromListById: removeItemFromListById,
            sortObjectsById: sortObjectsById,
            removeSelectedItemFromListById: removeSelectedItemFromListById,
            isInt : isInt,
            getItemFromListById: getItemFromListById,
            removeNullOrUndefinedOrEmptyStringValuesFromArray: removeNullOrUndefinedOrEmptyStringValuesFromArray,
            saveJsonContent: saveJsonContent,
            sortObjectsByPriority: sortObjectsByPriority,
            getEntityFromArrayByFieldValue: getEntityFromArrayByFieldValue,
            hasValue: hasValue,
            chunkData: chunkData,
            addClass: addClass,
            removeClass: removeClass,
            splitListByPercentage: splitListByPercentage,
            generateRequestList: generateRequestList,
            isNullOrUndefinedOrEmptyObject: isNullOrUndefinedOrEmptyObject,
            isNumeric: isNumeric,
            parseCronExpression: parseCronExpression,
            getCronExpressionFromFields: getCronExpressionFromFields,
            removeEmptyStringParams: removeEmptyStringParams,
            removeItemFromArrayWithDeepEquals: removeItemFromArrayWithDeepEquals,
            isArrayContainsValue: isArrayContainsValue,
            isBase64: isBase64,
            isGibberish: isGibberish,
            getValuesInArrayUsingKey: getValuesInArrayUsingKey,
            isNumber: isNumber
        };
    }
})();


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
(function() {
    'use strict';

    angular
        .module('app.statistics')
        .factory('statisticsService', service);

    service.$inject=['$http'];

    function service($http) {
        var API_URL = 'stats/';

        return {
            getAllStatistics : getAllStatistics,
            reloadAllCache: reloadAllCache,
            reloadCacheByCfName: reloadCacheByCfName
        };

        function getAllStatistics() {
            return $http.get(API_URL);
        }

        function reloadAllCache() {
            return $http.get(API_URL + "cache/reloadAll");
        }

        function reloadCacheByCfName(cfName) {
            return $http.get(API_URL + "cache/" + encodeURIComponent(cfName) + "/reload");
        }
    }
})();


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
(function() {
    'use strict';

    angular
        .module('app.core')

        .constant('AUTH_EVENT', {
            'SESSION_TIMEOUT': 'auth-session-timeout',
            'UNAUTHORIZED': 'auth-anauthorized',
            'NO_ACCESS': 'auth-no-access'
        })

        .factory('responseErrorInterceptor', ['$rootScope', '$q', '$injector', 'AUTH_EVENT',
            function($rootScope, $q, $injector, AUTH_EVENT) {
                return {
                    /**
                     * The API returns an error object if there is something wrong.
                     * Example: {
                     *     status: 404,
                     *     type: "EntityNotFoundException",
                     *     message: "NamespacedList "test" does not exist"
                     * }
                     */
                    responseError: function(response) {
                        var status = response.status;
                        if (status === 401) {
                            $rootScope.$broadcast(AUTH_EVENT.UNAUTHORIZED);
                        }
                        return $q.reject(response);
                    }
                };
            }]).factory('applicationTypeRequestInterceptor', ['$rootScope', '$cookies', function($rootScope, $cookies) {
                const apiToExclude = ['model', 'environment', 'firmwareruletemplate', 'genericnamespacedlist', 'auth'];
                return {
                    request: function(config) {
                        let relativeRequestUrl = config.url;
                        if (relativeRequestUrl.endsWith('/')) relativeRequestUrl = relativeRequestUrl.slice(0, -1);

                        if (!config.url
                            || config.url.includes('.html')
                            || containsAnyMatch(config.url, apiToExclude)) {
                            config.url = relativeRequestUrl;
                            return config;
                        }
                        let currentApplicationType = getApplicationType($cookies, $rootScope);
                        if (relativeRequestUrl.includes('?')) {
                            relativeRequestUrl += '&applicationType=' + currentApplicationType;
                        } else {
                            relativeRequestUrl += '?applicationType=' + currentApplicationType;
                        }
                        config.url = relativeRequestUrl;
                        config.headers['token'] = $cookies.get("token");
                        return config;
                    }
                };
            }])
        .config(['$httpProvider', function($httpProvider) {
            $httpProvider.interceptors.push('responseErrorInterceptor');
            $httpProvider.interceptors.push('applicationTypeRequestInterceptor');
        }]);

    function getApplicationType(cookies, rootScope) {
        let applicationType = cookies.get("applicationType");
        return applicationType ? applicationType : rootScope.applicationType;
    }

    function containsAnyMatch(path, apiToExcludeList) {
        for (let apiToExclude of apiToExcludeList) {
            if (path.startsWith(apiToExclude)) {
                return true;
            }
        }
        return false;
    }
})();


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
(function () {
    'use strict';
    angular
        .module('app.core')
        .factory('requestsService', requestsService);


    requestsService.$inject = ['$http', '$q'];

    function requestsService($http, $q) {

        var getData = function (url, headers, params) {
            var defer = $q.defer();
            $http({
                method: 'GET',
                url: url,
                headers: headers,
                params: params
            }).success(function (data, status, header) {
                defer.resolve(data);
            }).error(function (data, status, header) {
                if (status !== 401) {
                    defer.reject({data: data, status: status});
                }
                if (status !== 400 && (typeof data === 'string') && data.indexOf('UnmarshalException') > 0) {
                    defer.resolve('');
                }
            });

            return defer.promise;
        };

        var saveJsonData = function(url, data) {
            return saveData(url, data, {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            });
        };

        var postData = function (url, data, headers) {
            var defer = $q.defer();
            $http({
                method: 'POST',
                data: data,
                url: url,
                headers: headers
            })
                .success(function (data, status, header) {
                    defer.resolve(data);
                }).error(function (data, status, header) {
                    if (status !== 401) {
                        defer.reject(data);
                    }
                });
            return defer.promise;
        };

        var updateData = function (url, data, headers) {
            var defer = $q.defer();
            $http({
                method: 'PUT',
                data: data,
                url: url,
                headers: headers
            })
                .success(function (data, status, header) {
                    defer.resolve(data);
                }).error(function (data, status, header) {
                    if (status !== 401) {
                        defer.reject(data);
                    }
                });
            return defer.promise;
        };

        var deleteItem = function (url, headers, optData) {
            var defer = $q.defer();
            $http({
                method: 'DELETE',
                url: url,
                data: optData,
                headers: headers
            })
                .success(function (data, status, header) {
                    defer.resolve(data);
                })
                .error(function (data, status, header) {
                    if (status !== 401) {
                        defer.reject(data);
                    }
                });
            return defer.promise;
        };

        var exportAllEntities = function(url) {
            window.open(url);
        };

        var exportEntity = function(url) {
            window.open(url);
        };

        return {
            getData: getData,
            postData: postData,
            updateData: updateData,
            saveJsonData: saveJsonData,
            deleteItem: deleteItem,
            exportAllEntities: exportAllEntities,
            exportEntity: exportEntity
        };
    }
})();


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
(function () {
    'use strict';

    angular
        .module('app.change')
        .factory('changeService', service);

    service.$inject = ['$http', 'permanentProfileService', 'CHANGE_ENTITY_TYPE'];

    function service($http, permanentProfileService, CHANGE_ENTITY_TYPE) {
        var API_URL = 'telemetry/change';

        return {
            getApprovedPage: getApprovedPage,
            getChangePage: getChangePage,
            getFilteredApprovedChanges: getFilteredApprovedChanges,
            getFilteredChanges: getFilteredChanges,
            approve: approve,
            cancel: cancel,
            revert: revert,
            getEntityView: getEntityView,
            getEntityName: getEntityName,
            getChangedEntityIds: getChangedEntityIds,
            cancelChangesByEntityId: cancelChangesByEntityId,
            approveChanges: approveChanges,
            revertChanges: revertChanges
        };

        function getApprovedPage(pageSize, pageNumber) {
            return $http.get(API_URL + '/approved/grouped/byId?pageSize=' + pageSize + '&pageNumber=' + pageNumber);
        }

        function getFilteredApprovedChanges(pageSize, pageNumber, searchParam) {
            return $http.post(API_URL + '/approved/filtered?pageSize=' + pageSize + '&pageNumber=' + pageNumber, searchParam)
        }

        function getChangePage(pageSize, pageNumber) {
            return $http.get(API_URL + '/changes/grouped/byId?pageSize=' + pageSize + '&pageNumber=' + pageNumber);
        }

        function getFilteredChanges(pageSize, pageNumber, searchParam) {
            return $http.post(API_URL + '/changes/filtered?pageSize=' + pageSize + '&pageNumber=' + pageNumber, searchParam)
        }

        function approve(changeId) {
            return $http.get(API_URL + '/approve/' + changeId);
        }

        function cancel(changeId) {
            return $http.get(API_URL + '/cancel/' + changeId);
        }

        function revert(changeId) {
            return $http.get(API_URL + '/revert/' + changeId);
        }

        function getEntityView(oldEntity, newEntity) {
            return permanentProfileService.getProfileView(oldEntity, newEntity);
        }

        function getEntityName(change) {
            if (CHANGE_ENTITY_TYPE.TELEMETRY_PROFILE === change.entityType) {
                return permanentProfileService.getProfileName(getNotEmptyEntity(change.oldEntity, change.newEntity));
            }
            return change.entityId;
        }

        function getNotEmptyEntity(oldEntity, newEntity) {
            if (oldEntity) {
                return oldEntity;
            } else if (newEntity) {
                return newEntity;
            }
            return {};
        }

        function getChangedEntityIds() {
            return $http.get(API_URL + '/entityIds');
        }

        function cancelChangesByEntityId(entityIds, notApprovedIds) {
            return $http.post(API_URL + '/cancel/byEntityIds', { entityIds: entityIds, changeIdsToExclude: notApprovedIds });
        }

        function approveChanges(changeIds) {
            return $http.post(API_URL + '/approveChanges', changeIds);
        }

        function revertChanges(changeIds) {
            return $http.post(API_URL + '/revertChanges', changeIds);
        }
    }
})();


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
(function () {
    'use strict';
    angular
        .module('app.devicesettings')
        .factory('deviceSettingsValidationService', deviceSettingsValidationService);


    deviceSettingsValidationService.$inject = ['utilsService'];

    function deviceSettingsValidationService(utilsService) {
        return {
            validateName: validateName,
            validateExpression: validateExpression,
            validateTimeWindow: validateTimeWindow,
            validateAll: validateAll,
            validateCronHours: validateCronHours,
            validateCronMinutes: validateCronMinutes,
            validateCronDayOfMonth: validateCronDayOfMonth,
            validateCronDayOfWeek: validateCronDayOfWeek,
            validateCronMonth: validateCronMonth,
        };

        function buildReturnForValidate (isValid, message) {
            return {
                isValid: isValid,
                message: message
            };
        }

        function validateName(name, usedNames) {
            if (utilsService.isNullOrUndefinedOrEmptyOrWhiteSpaceString(name)) {
                return buildReturnForValidate(false, 'Name must not be empty');
            }

            if(usedNames.indexOf(name) >= 0) {
                return buildReturnForValidate(false, 'Such name already exists');
            }

            return buildReturnForValidate(true);
        }

        function validateExpression(expression) {
            if (utilsService.isNullOrUndefinedOrEmptyOrWhiteSpaceString(expression)) {
                return buildReturnForValidate(false, 'Expression must not be empty');
            }

            return buildReturnForValidate(true);
        }

        function validateTimeWindow(timeWindow) {
            if (utilsService.isNullOrUndefined(timeWindow)) {
                return buildReturnForValidate(false, 'Time window must not be empty');
            }

            if (!utilsService.isInt(timeWindow) || timeWindow < 0) {
                return buildReturnForValidate(false, 'Time window must be non-negative number');
            }

            return buildReturnForValidate(true);
        }

        function validateAll(deviceSettings, usedNames, cronFields) {
            return validateName(deviceSettings.name, usedNames).isValid
                && validateExpression(deviceSettings.schedule.expression).isValid
                && validateTimeWindow(deviceSettings.schedule.timeWindowMinutes).isValid
                && validateCronMinutes(cronFields.minutes).isValid
                && validateCronHours(cronFields.hours).isValid
                && validateCronDayOfMonth(cronFields.dayOfMonth).isValid
                && validateCronMonth(cronFields.month).isValid
                && validateCronDayOfWeek(cronFields.dayOfWeek).isValid;
        }

        function validateCronMinutes(minutes) {
            if (!minutes || minutes === '') {
                return buildReturnForValidate(false, "Minutes should not be empty");
            }
            if (/^-?[0-9]+$/.test(minutes) && utilsService.isInt(minutes)) {
                minutes = parseInt(minutes);
                if (minutes >= 0 && minutes <= 59) {
                    return buildReturnForValidate(true)
                } else {
                    return buildReturnForValidate(false, "Minutes should be from 0 to 59")
                }
            } else {
                return buildReturnForValidate(false, "Minutes should be from 0 to 59")
            }
        }

        function validateCronHours(hours) {
            if (!hours || hours === '') {
                return buildReturnForValidate(false, "Hours should not be empty");
            }
            if (/^-?[0-9]+$/.test(hours) && utilsService.isInt(hours)) {
                hours = parseInt(hours);
                if (hours >= 0 && hours <= 23) {
                    return buildReturnForValidate(true)
                } else {
                    return buildReturnForValidate(false, "Hours should be from 0 to 23")
                }
            } else {
                return buildReturnForValidate(false, "Hours should be from 0 to 23")
            }
        }

        function validateCronDayOfMonth(dayOfMonth) {
            if (/^-?[0-9]+$/.test(dayOfMonth) && utilsService.isInt(dayOfMonth)) {
                dayOfMonth = parseInt(dayOfMonth);
                if (dayOfMonth >= 1 && dayOfMonth <= 31 ) {
                    return buildReturnForValidate(true)
                } else {
                    return buildReturnForValidate(false, "Day of month should be from 1 to 31 or *")
                }
            } else if(/\*/.test(dayOfMonth) && dayOfMonth.length === 1) {
                return buildReturnForValidate(true);
            }
            return buildReturnForValidate(false, "Day of month should be from 1 to 31 or *")
        }

        function validateCronMonth(month) {
            if (/^-?[0-9]+$/.test(month) && utilsService.isInt(month)) {
                month = parseInt(month);
                if (month >= 0 && month <= 11) {
                    return buildReturnForValidate(true)
                } else {
                    return buildReturnForValidate(false, "Month should be from 0 to 11 or *")
                }
            } else if(/\*/.test(month) && month.length === 1) {
                return buildReturnForValidate(true);
            }
            return buildReturnForValidate(false, "Month should be from 0 to 11 or *")
        }

        function validateCronDayOfWeek(dayOfWeek) {
            if (/^-?[0-9]+$/.test(dayOfWeek) && utilsService.isInt(dayOfWeek)) {
                dayOfWeek = parseInt(dayOfWeek);
                if (dayOfWeek >= 1 && dayOfWeek <= 7 ) {
                    return buildReturnForValidate(true)
                } else {
                    return buildReturnForValidate(false, "Day of week should be from 1 to 7 or *")
                }
            } else if(/\*/.test(dayOfWeek) && dayOfWeek.length === 1) {
                return buildReturnForValidate(true);
            }
            return buildReturnForValidate(false, "Day of week should be from 1 to 7 or *")
        }
    }
})();

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
(function() {
    'use strict';

    angular
        .module('app.devicesettings')
        .factory('deviceSettingsService', service);

    service.$inject=['$http', '$q'];

    function service($http, $q) {
        var urlMapping = 'dcm/deviceSettings/';

        return {
            getAllDeviceSettings: getAllDeviceSettings,
            getDeviceSettings: getDeviceSettings,
            createDeviceSettings: createDeviceSettings,
            updateDeviceSettings: updateDeviceSettings,
            deleteDeviceSettings: deleteDeviceSettings,
            getDeviceSettingsNames: getDeviceSettingsNames,
            convertDateToString: convertDateToString,
            convertStringToDate: convertStringToDate,
            getSizeOfDeviceSettings: getSizeOfDeviceSettings,
            getDeviceSettingsPage: getDeviceSettingsPage,
            exportAllSettings: exportAllSettings
        };

        function getAllDeviceSettings() {
            return $http.get(urlMapping);
        }

        function getDeviceSettingsPage(pageNumber, pageSize, searchParam) {
            return $http.post(urlMapping + 'filtered' + '?pageNumber=' + pageNumber + '&pageSize=' + pageSize, searchParam);
        }

        function getDeviceSettings(id) {
            return $http.get(urlMapping + id);
        }

        function updateDeviceSettings(deviceSettings) {
            return $http.put(urlMapping, deviceSettings);
        }

        function createDeviceSettings(deviceSettings) {
            return $http.post(urlMapping, deviceSettings);
        }

        function deleteDeviceSettings(id) {
            return $http.delete(urlMapping + id);
        }

        function getDeviceSettingsNames() {
            return $http.get(urlMapping + 'names');
        }

        function convertDateToString(date) {
            return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' '
                + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
        }

        function convertStringToDate(string) {
            var dateAndTime = string.split(' ');
            var date = dateAndTime[0].split('-');
            var time = dateAndTime[1].split(':');

            return new Date(date[0], date[1] - 1, date[2], time[0], time[1], time[2]);
        }

        function getSizeOfDeviceSettings() {
            return $http.get(urlMapping + "size");
        }

        function exportAllSettings() {
            window.open(urlMapping + 'export');
        }
    }
})();


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
(function() {
    'use strict';
    angular
        .module('app.formula')
        .factory('formulaService', service);

    service.$inject = ['utilsService', '$http', 'syncHttpService']

    function service(utilsService, $http, syncHttpService) {
        var urlMapping = 'dcm/formula/';

        return {
            getAll: getAll,
            getPage: getPage,
            getSizeOfFormulas: getSizeOfFormulas,
            getById: getById,
            getUsedNames: getUsedName,
            create: create,
            update: update,
            deleteFormula: deleteFormula,
            importFormula: importFormula,
            getSettingsAvailability: getSettigsAvailability,
            changePriorities: changePriorities,
            getFormulasAvailability: getFormulasAvailability,
            updateSyncEntities: updateSyncEntities,
            createSyncEntities: createSyncEntities,
            exportFormula: exportFormula,
            exportAllFormulas: exportAllFormulas
        };

        function getAll() {
            return $http.get(urlMapping);
        }

        function getPage(pageSize, pageNumber, searchContext) {
            return $http.post(urlMapping + 'filtered?pageSize=' + pageSize + '&pageNumber=' + pageNumber, searchContext);
        }

        function getSizeOfFormulas() {
            return $http.get(urlMapping + 'size');
        }

        function getById(id) {
            return $http.get(urlMapping + id);
        }

        function getUsedName() {
            return $http.get(urlMapping + 'names');
        }

        function create(formula) {
            return $http.post(urlMapping, formula);
        }

        function update(formula) {
            return $http.put(urlMapping, formula);
        }

        function deleteFormula(id) {
            return $http.delete(urlMapping + id);
        }

        function importFormula(formulaWithSettings, overwrite) {
            if (overwrite === false || overwrite === true) {
                return $http.post(urlMapping + 'import/' + overwrite, formulaWithSettings);
            }
            return $http.post(urlMapping + 'import', formulaWithSettings);
        }



        function getSettigsAvailability(settings) {
            return $http.post(urlMapping + 'settingsAvailability', settings);
        }

        function changePriorities(id, priority) {
            return $http.post(urlMapping + id + '/priority/' + priority);
        }

        function getFormulasAvailability(settings) {
            var settingsIds = _.pluck(settings, 'id');
            return $http.post(urlMapping + 'formulasAvailability', settingsIds);
        }

        function updateSyncEntities(formulas) {
            var requests = utilsService.generateRequestList(formulas, {url: urlMapping + 'list', method: 'PUT'});
            return requests && requests.length ? syncHttpService.http(requests) : null;
        }

        function createSyncEntities(formulas) {
            var requests = utilsService.generateRequestList(formulas, {url: urlMapping + 'list', method: 'POST'});
            return requests && requests.length ? syncHttpService.http(requests) : null;
        }

        function exportFormula(id) {
            window.open(urlMapping + id + '?export');
        }

        function exportAllFormulas() {
            window.open(urlMapping + '?export');
        }
    }
})();

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
(function () {
    'use strict';
    angular
        .module('app.formula')
        .factory('formulaValidationService', formulaValidationService);


    formulaValidationService.$inject = ['utilsService'];

    function formulaValidationService(utilsService) {
        return {
            validateName: validateName,
            validatePercentage: validatePercentage,
            validateLevelPercentage: validateLevelPercentage,
            validateCondition: validateCondition,
            validateAll: validateAll
        };

        function buildReturnForValidate (isValid, message) {
            return {
                isValid: isValid,
                message: message
            };
        }

        function validateName(name, usedNames) {
            if (utilsService.isNullOrUndefinedOrEmptyOrWhiteSpaceString(name)) {
                return buildReturnForValidate(false, 'Name must not be empty');
            }
            if(usedNames.indexOf(name) >= 0) {
                return buildReturnForValidate(false, 'Such name already exists');
            }

            return buildReturnForValidate(true);
        }

        function validatePercentage(percentage) {
            if (percentage) {
                if (!utilsService.isInt(percentage) || percentage < 0 || percentage > 100) {
                    return buildReturnForValidate(false, 'Percentage must be number from 0 to 100');
                }
            }

            return buildReturnForValidate(true);
        }

        function validateLevelPercentage(rule, currentPercentage) {
            if (currentPercentage) {
                if (!utilsService.isInt(currentPercentage) || currentPercentage < 0) {
                    return buildReturnForValidate(false, 'Percentage must be non-negative number');
                }

                var percentL1 = rule.percentageL1 || 0;
                var percentL2 = rule.percentageL2 || 0;
                var percentL3 = rule.percentageL3 || 0;

                if (utilsService.isInt(percentL1) && utilsService.isInt(percentL2) && utilsService.isInt(percentL3)) {
                    var sum = parseInt(percentL1) + parseInt(percentL2) + parseInt(percentL3);
                    if (sum > 100) {
                        return buildReturnForValidate(false, 'Total percentage sum must be 100 or less');
                    }
                }

            }

            return buildReturnForValidate(true);
        }

        function validateCondition(rule) {
            if (utilsService.isNullOrUndefinedOrEmpty(rule.compoundParts) && !rule.condition) {
                return buildReturnForValidate(false, 'Please fill condition');
            }

            return buildReturnForValidate(true);
        }

        function validateAll(rule, usedNames) {
            return validateName(rule.name, usedNames).isValid &&
                validatePercentage(rule.name.percentage).isValid &&
                validateLevelPercentage(rule, rule.percentageL1).isValid &&
                validateLevelPercentage(rule, rule.percentageL2).isValid &&
                validateLevelPercentage(rule, rule.percentageL3).isValid &&
                validateCondition(rule).isValid;
        }
    }
})();

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
(function () {
    'use strict';
    angular
        .module('app.loguploadsettings')
        .factory('logUploadSettingsValidationService', service);


    service.$inject = ['utilsService', 'SCHEDULE_TYPE'];

    function service(utilsService, SCHEDULE_TYPE) {
        return {
            validateName: validateName,
            validateExpression: validateExpression,
            validateNonNegativeNumber: validateNonNegativeNumber,
            validateTimeWindowMinutes: validateTimeWindowMinutes,
            validateUploadRepositoryId: validateUploadRepositoryId,
            validateCronHours: validateCronHours,
            validateCronMinutes: validateCronMinutes,
            validateCronDayOfMonth: validateCronDayOfMonth,
            validateCronDayOfWeek: validateCronDayOfWeek,
            validateCronMonth: validateCronMonth,
            validateAll: validateAll
        };

        function buildReturnForValidate (isValid, message) {
            return {
                isValid: isValid,
                message: message
            };
        }

        function validateName(name, usedNames) {
            if (utilsService.isNullOrUndefinedOrEmptyOrWhiteSpaceString(name)) {
                return buildReturnForValidate(false, 'Name must not be empty');
            }

            if(usedNames.indexOf(name) >= 0) {
                return buildReturnForValidate(false, 'Such name already exists');
            }

            return buildReturnForValidate(true);
        }

        function validateExpression(expression, scheduleType) {
            if (utilsService.isNullOrUndefinedOrEmptyOrWhiteSpaceString(expression) && scheduleType !== SCHEDULE_TYPE.WHOLE_DAY_RANDOMIZED) {
                return buildReturnForValidate(false, 'Expression must not be empty');
            }

            return buildReturnForValidate(true);
        }

        function validateNonNegativeNumber(number) {
            if (utilsService.isNullOrUndefinedOrEmpty(number)) {
                return buildReturnForValidate(false, 'Field must not be empty');
            }

            if (!utilsService.isInt(number) || number < 0) {
                return buildReturnForValidate(false, 'Field must be non-negative number');
            }

            return buildReturnForValidate(true);
        }

        function validateTimeWindowMinutes(timeWindowMinutes, scheduleType) {
            if (!validateNonNegativeNumber(timeWindowMinutes).isValid && scheduleType !== SCHEDULE_TYPE.WHOLE_DAY_RANDOMIZED) {
                return buildReturnForValidate(false, validateNonNegativeNumber(timeWindowMinutes).message);
            }

            return buildReturnForValidate(true);
        }

        function validateUploadRepositoryId(uploadRepositoryId) {
            if (utilsService.isNullOrUndefinedOrEmptyOrWhiteSpaceString(uploadRepositoryId)) {
                return buildReturnForValidate(false, "You must create upload repository first");
            }

            return buildReturnForValidate(true);
        }

        function validateCronMinutes(minutes) {
            if (!minutes || minutes === '') {
                return buildReturnForValidate(false, "Minutes should not be empty");
            }
            if (/^-?[0-9]+$/.test(minutes) && utilsService.isInt(minutes)) {
                minutes = parseInt(minutes);
                if (minutes >= 0 && minutes <= 59) {
                    return buildReturnForValidate(true)
                } else {
                    return buildReturnForValidate(false, "Minutes should be from 0 to 59")
                }
            } else {
                return buildReturnForValidate(false, "Minutes should be from 0 to 59")
            }
        }

        function validateCronHours(hours) {
            if (!hours || hours === '') {
                return buildReturnForValidate(false, "Hours should not be empty");
            }
            if (/^-?[0-9]+$/.test(hours) && utilsService.isInt(hours)) {
                hours = parseInt(hours);
                if (hours >= 0 && hours <= 23) {
                    return buildReturnForValidate(true)
                } else {
                    return buildReturnForValidate(false, "Hours should be from 0 to 23")
                }
            } else {
                return buildReturnForValidate(false, "Hours should be from 0 to 23")
            }
        }

        function validateCronDayOfMonth(dayOfMonth) {
            if (/^-?[0-9]+$/.test(dayOfMonth) && utilsService.isInt(dayOfMonth)) {
                dayOfMonth = parseInt(dayOfMonth);
                if (dayOfMonth >= 1 && dayOfMonth <= 31 ) {
                    return buildReturnForValidate(true)
                } else {
                    return buildReturnForValidate(false, "Day of month should be from 1 to 31 or *")
                }
            } else if(/\*/.test(dayOfMonth) && dayOfMonth.length === 1) {
                return buildReturnForValidate(true);
            }
            return buildReturnForValidate(false, "Day of month should be from 1 to 31 or *")
        }

        function validateCronMonth(month) {
            if (/^-?[0-9]+$/.test(month) && utilsService.isInt(month)) {
                month = parseInt(month);
                if (month >= 0 && month <= 11) {
                    return buildReturnForValidate(true)
                } else {
                    return buildReturnForValidate(false, "Month should be from 0 to 11 or *")
                }
            } else if(/\*/.test(month) && month.length === 1) {
                return buildReturnForValidate(true);
            }
            return buildReturnForValidate(false, "Month should be from 0 to 11 or *")
        }

        function validateCronDayOfWeek(dayOfWeek) {
            if (/^-?[0-9]+$/.test(dayOfWeek) && utilsService.isInt(dayOfWeek)) {
                dayOfWeek = parseInt(dayOfWeek);
                if (dayOfWeek >= 1 && dayOfWeek <= 7 ) {
                    return buildReturnForValidate(true)
                } else {
                    return buildReturnForValidate(false, "Day of week should be from 1 to 7 or *")
                }
            } else if(/\*/.test(dayOfWeek) && dayOfWeek.length === 1) {
                return buildReturnForValidate(true);
            }
            return buildReturnForValidate(false, "Day of week should be from 1 to 7 or *")
        }

        function validateAll(logUploadSettings, usedNames, cronFields) {
            return validateName(logUploadSettings.name, usedNames).isValid
                && validateExpression(logUploadSettings.schedule.expression, logUploadSettings.schedule.type).isValid
                && validateTimeWindowMinutes(logUploadSettings.schedule.timeWindowMinutes, logUploadSettings.schedule.type).isValid
                && validateNonNegativeNumber(logUploadSettings.numberOfDays).isValid
                // && validateLogFilesIsPresent(logFilesArray).isValid
                && validateUploadRepositoryId(logUploadSettings.uploadRepositoryId).isValid
                && validateCronMinutes(cronFields.minutes).isValid
                && validateCronHours(cronFields.hours).isValid
                && validateCronDayOfMonth(cronFields.dayOfMonth).isValid
                && validateCronMonth(cronFields.month).isValid
                && validateCronDayOfWeek(cronFields.dayOfWeek).isValid;
        }
    }
})();

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
(function() {
    'use strict';

    angular
        .module('app.loguploadsettings')
        .factory('logUploadSettingsService', service);

    service.$inject=['$http'];

    function service($http) {
        var urlMapping = 'dcm/logUploadSettings/';

        return {
            getLogUploadSettings: getLogUploadSettings,
            getAllLogUploadSettings: getAllLogUploadSettings,
            createLogUploadSettings: createLogUploadSettings,
            updateLogUploadSettings: updateLogUploadSettings,
            deleteLogUploadSettings: deleteLogUploadSettings,
            getLogUploadSettingsNames: getLogUploadSettingsNames,
            getSizeOfLogUploadSettings: getSizeOfLogUploadSettings,
            getLogUploadSettingsPage: getLogUploadSettingsPage,
            exportAllSettings: exportAllSettings
        };

        function getLogUploadSettings(id) {
            return $http.get(urlMapping + id);
        }

        function getAllLogUploadSettings() {
            return $http.get(urlMapping);
        }

        function getLogUploadSettingsPage(pageNumber, pageSize, searchParam) {
            return $http.post(urlMapping + 'filtered' + '?pageNumber=' + pageNumber + '&pageSize=' + pageSize, searchParam);
        }

        function createLogUploadSettings(logUploadSettings) {
            return $http.post(urlMapping, logUploadSettings);
        }

        function updateLogUploadSettings(logUploadSettings) {
            return $http.put(urlMapping, logUploadSettings);
        }

        function deleteLogUploadSettings(id) {
            return $http.delete(urlMapping + id);
        }

        function getLogUploadSettingsNames() {
            return $http.get(urlMapping + 'names');
        }

        function getSizeOfLogUploadSettings() {
            return $http.get(urlMapping + "size");
        }

        function exportAllSettings() {
            window.open(urlMapping + 'export');
        }
    }
})();


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
(function() {
    'use strict';

    angular
        .module('app.testpage')
        .factory('testPageService', service);

    service.$inject = ['$http'];

    function service($http) {
        var API_URL = 'dcm/testpage';

        return {
            matchRule: matchRule
        };

        function matchRule(params) {
            return $http.post(API_URL, params);
        }
    }
})();

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
(function() {
    'use strict';
    angular
        .module('app.uploadRepository')
        .factory('uploadRepositoryService', service);

    service.$inject = ['utilsService', '$http', 'syncHttpService']

    function service(utilsService, $http, syncHttpService) {
        var urlMapping = 'dcm/uploadRepository/';

        return {
            getAll: getAll,
            getPage: getPage,
            getSizeOfUploadRepositories: getSizeOfUploadRepositories,
            getById: getById,
            create: create,
            update: update,
            deleteUploadRepository: deleteUploadRepository,
            updateSyncEntities: updateSyncEntities,
            createSyncEntities: createSyncEntities,
            exportOne: exportOne,
            exportAll: exportAll
        };

        function getAll() {
            return $http.get(urlMapping);
        }

        function getPage(pageSize, pageNumber, searchParam) {
            return $http.post(urlMapping + 'filtered?pageSize=' + pageSize + '&pageNumber=' + pageNumber, searchParam);
        }

        function getSizeOfUploadRepositories() {
            return $http.get(urlMapping + 'size');
        }

        function getById(id) {
            return $http.get(urlMapping + id);
        }

        function create(formula) {
            return $http.post(urlMapping, formula);
        }

        function update(formula) {
            return $http.put(urlMapping, formula);
        }

        function deleteUploadRepository(id) {
            return $http.delete(urlMapping + id);
        }

        function updateSyncEntities(formulas) {
            var requests = utilsService.generateRequestList(formulas, {url: urlMapping + 'entities', method: 'PUT'});
            return requests && requests.length ? syncHttpService.http(requests) : null;
        }

        function createSyncEntities(formulas) {
            var requests = utilsService.generateRequestList(formulas, {url: urlMapping + 'entities', method: 'POST'});
            return requests && requests.length ? syncHttpService.http(requests) : null;
        }

        function exportOne(id) {
            window.open(urlMapping + id + '?export');
        }

        function exportAll() {
            window.open(urlMapping + '?export');
        }
    }
})();

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
(function () {
    'use strict';
    angular
        .module('app.vodsettings')
        .factory('vodSettingsService', service);
    service.$inject = ['$http'];
    function service($http) {
        var API_URL = 'dcm/vodsettings/';

        return {
            getAll: getAll,
            getPage: getPage,
            getSizeOfVodSettings: getSizeOfVodSettings,
            getById: getById,
            create: create,
            update: update,
            deleteById: deleteById,
            exportAllSettings : exportAllSettings
        };

        function getAll() {
            return $http.get(API_URL);
        }

        function getPage(pageSize, pageNumber, searchContext) {
            return $http.post(API_URL + 'filtered?pageSize=' + pageSize + '&pageNumber=' + pageNumber, searchContext);
        }

        function getSizeOfVodSettings() {
            return $http.get(API_URL + 'size');
        }

        function getById(id) {
            return $http.get(API_URL + id);
        }

        function create(vodSettings) {
            return $http.post(API_URL, vodSettings);
        }

        function update(vodSettings) {
            return $http.put(API_URL, vodSettings);
        }

        function deleteById(id) {
            return $http.delete(API_URL + id)
        }

        function exportAllSettings() {
            window.open(API_URL + 'export');
        }
    }
})();

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
(function() {
    'use strict';

    angular
        .module('app.activation-version', [])
        .factory('activationVersionService', service);

    service.$inject=['utilsService', '$http', 'syncHttpService'];

    function service(utilsService, $http, syncHttpService) {
        var URL = 'activationMinimumVersion';

        return {
            getAll: getAll,
            getById: getById,
            update: update,
            create: create,
            deleteById: deleteById,
            exportOne: exportOne,
            exportAll: exportAll,
            updateSyncEntities: updateSyncEntities,
            createSyncEntities: createSyncEntities,
            getPage: getPage
        };

        function getPage(pageSize, pageNumber, context) {
            return $http.post(URL + '/filtered?pageSize=' + pageSize + '&pageNumber=' + pageNumber, context);
        }

        function getAll() {
            return $http.get(URL);
        }

        function getById(id) {
            return $http.get(URL + '/' + id);
        }

        function update(activationVersion) {
            return $http.put(URL, activationVersion);
        }

        function create(activationVersion) {
            return $http.post(URL, activationVersion);
        }

        function deleteById(id) {
            return $http.delete(URL + '/' + id);
        }

        function exportOne(id) {
            window.open(URL + '/' + id + '?export');
        }

        function exportAll() {
            window.open(URL + '?exportAll');
        }

        function updateSyncEntities(activationVersions) {
            var requests = utilsService.generateRequestList(activationVersions, {url: URL + '/entities', method: 'PUT'});
            return requests && requests.length ? syncHttpService.http(requests) : null;
        }

        function createSyncEntities(activationVersions) {
            var requests = utilsService.generateRequestList(activationVersions, {url: URL + '/entities', method: 'POST'});
            return requests && requests.length ? syncHttpService.http(requests) : null;
        }
    }
})();

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
(function() {
    'use strict';

    angular
        .module('app.environment', [])
        .factory('environmentService', service);

    service.$inject=['utilsService', '$http', 'syncHttpService'];

    function service(utilsService, $http, syncHttpService) {
        var URL = 'environment';

        return {
            getPage: getPage,
            getAll: getAll,
            getById: getById,
            update: update,
            create: create,
            deleteById: deleteById,
            exportOne: exportOne,
            exportAll: exportAll,
            updateSyncEntities: updateSyncEntities,
            createSyncEntities: createSyncEntities
        };

        function getAll() {
            return $http.get(URL);
        }

        function getById(id) {
            return $http.get(URL + '/' + id);
        }

        function update(environment) {
            return $http.put(URL, environment);
        }

        function create(environment) {
            return $http.post(URL, environment);
        }

        function deleteById(id) {
            return $http.delete(URL + '/' + id);
        }

        function exportOne(id) {
            window.open(URL + '/' + id + '?export');
        }

        function exportAll() {
            window.open(URL + '?export');
        }

        function getPage(pageNumber, pageSize, searchParam) {
            return $http.post(URL + '/filtered?pageSize=' + pageSize + '&pageNumber=' + pageNumber, searchParam);
        }

        function updateSyncEntities(entities) {
            var requests = utilsService.generateRequestList(entities, {url: URL + '/entities', method: 'PUT'});
            return requests && requests.length ? syncHttpService.http(requests) : null;
        }

        function createSyncEntities(entities) {
            var requests = utilsService.generateRequestList(entities, {url: URL + '/entities', method: 'POST'});
            return requests && requests.length ? syncHttpService.http(requests) : null;
        }
    }
})();

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
(function() {
    'use strict';

    angular
        .module('app.firmwareconfig', ['ngResource'])
        .factory('firmwareConfigService', service);

    service.$inject=['utilsService', '$http', 'syncHttpService'];

    function service(utilsService, $http, syncHttpService) {
        var URL = 'firmwareconfig';

        return {
            getPage: getPage,
            getAll: getAll,
            getById: getById,
            getByModelId: getByModelId,
            getBySupportedModels: getBySupportedModels,
            getByEnvModelRuleName: getByEnvModelRuleName,
            update: update,
            create: create,
            deleteById: deleteById,
            getSortedFirmwareVersionsIfDoesExistOrNot: getSortedFirmwareVersionsIfDoesExistOrNot,
            exportById: exportById,
            exportAll: exportAll,
            searchByContext: searchByContext,
            getSupportedConfigsByEnvModelRuleName: getSupportedConfigsByEnvModelRuleName,
            updateSyncEntities: updateSyncEntities,
            createSyncEntities: createSyncEntities,
            getFirmwareConfigMap: getFirmwareConfigMap,
            buildFirmwareConfigData: buildFirmwareConfigData
        };

        function getPage(pageSize, pageNumber) {
            return $http.get(URL + '/page?pageSize=' + pageSize + '&pageNumber=' + pageNumber);
        }

        function getAll() {
            return $http.get(URL);
        }

        function getById(id) {
            return $http.get(URL + '/' + id);
        }

        function getByModelId(modelId) {
            return $http.get(URL + '/model/' + modelId);
        }

        function getBySupportedModels(modelIds) {
            return $http.post(URL + '/bySupportedModels', modelIds);
        }

        function getSupportedConfigsByEnvModelRuleName(envModelRuleName) {
            return $http.get(URL + '/supportedConfigsByEnvModelRuleName/' + envModelRuleName);
        }

        function getByEnvModelRuleName(envModelRuleName) {
            return $http.get(URL + '/byEnvModelRuleName/' + envModelRuleName);
        }

        function update(firmwareConfig) {
            return $http.put(URL, firmwareConfig);
        }

        function create(firmwareConfig) {
            return $http.post(URL, firmwareConfig);
        }

        function deleteById(id) {
            return $http.delete(URL + '/' + id);
        }

        function getSortedFirmwareVersionsIfDoesExistOrNot(models, firmwareVersions) {
            return $http.post(URL + '/getSortedFirmwareVersionsIfExistOrNot', buildFirmwareConfigData(models, firmwareVersions));
        }

        function exportById(id) {
            window.open(URL + '/' + id + '?export');
        }

        function exportAll() {
            window.open(URL + '?exportAll');
        }

        function searchByContext(pageSize, pageNumber, searchContext) {
            return $http.post(URL + '/filtered?pageSize=' + pageSize + '&pageNumber=' + pageNumber, searchContext);
        }

        function updateSyncEntities(firmwareConfigs) {
            var requests = utilsService.generateRequestList(firmwareConfigs, {url: URL + '/entities', method: 'PUT'});
            return requests && requests.length ? syncHttpService.http(requests) : null;
        }

        function createSyncEntities(firmwareConfigs) {
            var requests = utilsService.generateRequestList(firmwareConfigs, {url: URL + '/entities', method: 'POST'});
            return requests && requests.length ? syncHttpService.http(requests) : null;
        }

        function getFirmwareConfigMap() {
            return $http.get(URL + '/firmwareConfigMap');
        }

        function buildFirmwareConfigData(models, firmwareVersions) {
            return {
                models: models,
                firmwareVersions: firmwareVersions
            }
        }
    }
})();

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
angular
    .module('app.log', ['ngResource'])
    .factory('logService', ['$resource', function($resource) {
        return $resource('log/:param', {param: '@_param'}, {
            getLogs: {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json; charset=UTF',
                    'Accept': 'text/plain, application/json; charset=UTF-8'
                }
            },
            getHashAndPercent: {
                method: 'GET',
                url: 'percentfilter/calculator',
                params: {
                    "esbMac": '@_esbMac'
                },
                headers: {
                    'Content-Type': 'application/json; charset=UTF',
                    'Accept': 'text/plain, application/json; charset=UTF-8'
                }
            }
        });
    }]);

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
(function() {
    'use strict';

    angular
        .module('app.model', [])
        .factory('modelService', service);

    service.$inject=['utilsService', '$http', 'syncHttpService'];

    function service(utilsService, $http, syncHttpService) {
        var URL = 'model';

        return {
            getPage: getPage,
            getAll: getAll,
            getById: getById,
            update: update,
            create: create,
            deleteById: deleteById,
            exportOne: exportOne,
            exportAll: exportAll,
            updateSyncEntities: updateSyncEntities,
            createSyncEntities: createSyncEntities
        };

        function getAll() {
            return $http.get(URL);
        }

        function getById(id) {
            return $http.get(URL + '/' + id);
        }

        function update(model) {
            return $http.put(URL, model);
        }

        function create(model) {
            return $http.post(URL, model);
        }

        function deleteById(id) {
            return $http.delete(URL + '/' + id);
        }

        function exportOne(id) {
            window.open(URL + '/' + id + '?export');
        }

        function exportAll() {
            window.open(URL + '?export');
        }

        function getPage(pageNumber, pageSize, searchParam) {
            return $http.post(URL + '/filtered?pageSize=' + pageSize + '&pageNumber=' + pageNumber, searchParam);
        }

        function updateSyncEntities(entities) {
            var requests = utilsService.generateRequestList(entities, {url: URL + '/entities', method: 'PUT'});
            return requests && requests.length ? syncHttpService.http(requests) : null;
        }

        function createSyncEntities(entities) {
            var requests = utilsService.generateRequestList(entities, {url: URL + '/entities', method: 'POST'});
            return requests && requests.length ? syncHttpService.http(requests) : null;
        }
    }
})();

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
(function() {
    'use strict';

    angular
        .module('app.percentfilter')
        .factory('percentageBeanService', service);

    service.$inject=['$http', 'utilsService', 'syncHttpService', 'firmwareConfigService', '$q', 'ruleHelperService'];

    function service($http, utilsService, syncHttpService, firmwareConfigService, $q, ruleHelperService) {
        var URL = 'percentfilter/percentageBean/';

        return {
            getAll: getAll,
            getById: getById,
            create: create,
            update: update,
            deleteById: deleteById,
            exportPercentageBean: exportPercentageBean,
            getTotalDistributionPercentage: getTotalDistributionPercentage,
            exportAllPercentageBeansAsRule: exportAllPercentageBeansAsRule,
            exportPercentageBeanAsRule: exportPercentageBeanAsRule,
            exportAllPercentageBeans: exportAllPercentageBeans,
            updateSyncEntities: updateSyncEntities,
            createSyncEntities: createSyncEntities,
            sortPercentageBeanFirmwareVersionsIfExistOrNot: sortPercentageBeanFirmwareVersionsIfExistOrNot,
            getPage: getPage
        };

        function getPage(pageSize, pageNumber, searchContext) {
            return $http.post(URL + 'filtered?pageSize=' + pageSize + '&pageNumber=' + pageNumber, searchContext);
        }

        function getAll() {
            return $http.get(URL + 'page?pageSize=2147483647&pageNumber=1');
        }

        function getById(id) {
            return $http.get(URL + id);
        }

        function create(percentageBean) {
            return $http.post(URL, percentageBean);
        }

        function update(percentageBean) {
            return $http.put(URL, percentageBean);
        }

        function deleteById(id) {
            return $http.delete(URL + id);
        }

        function exportPercentageBean(id) {
            window.open(URL + id + '?export');
        }

        function getTotalDistributionPercentage(percentageBean) {
            if (!percentageBean || !percentageBean.distributions || percentageBean.distributions.length === 0) {
                return 0;
            }
            var percentage = 0;
            percentageBean.distributions.forEach(function(val, key) {
                percentage += val.percentage;
            });
            return parseFloat(percentage).toFixed(3);
        }

        function exportAllPercentageBeansAsRule() {
            window.open(URL + 'allAsRules?export');
        }

        function exportPercentageBeanAsRule(id) {
            window.open(URL + 'asRule/' + id + '?export');
        }

        function exportAllPercentageBeans() {
            window.open(URL + '?export');
        }

        function updateSyncEntities(percentageBeans) {
            var requests = utilsService.generateRequestList(percentageBeans, {url: URL + 'entities', method: 'PUT'});
            return requests && requests.length ? syncHttpService.http(requests) : null;
        }

        function createSyncEntities(percentageBeans) {
            var requests = utilsService.generateRequestList(percentageBeans, {url: URL + 'entities', method: 'POST'});
            return requests && requests.length ? syncHttpService.http(requests) : null;
        }

        function sortPercentageBeanFirmwareVersionsIfExistOrNot(percentageBean) {
            var deferred = $q.defer();
            var models = [];
            if (percentageBean && percentageBean.firmwareVersions && percentageBean.firmwareVersions.length > 0) {
                firmwareConfigService.getSortedFirmwareVersionsIfDoesExistOrNot([percentageBean.model], percentageBean.firmwareVersions).then(function (resp) {
                    deferred.resolve(resp.data);
                }, function (error) {
                    deferred.reject(error);
                });
            } else {
                deferred.resolve({"existedVersions":[],"notExistedVersions":[]});
            }
            return deferred.promise;
        }
    }

})();

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
(function() {
    'use strict';

    angular
        .module('app.percentfilter')
        .factory('percentFilterService', service);

    service.$inject=['$http'];

    function service($http) {
        var URL = 'percentfilter/';

        return {
            getFilter: getFilter,
            saveFilter: saveFilter,
            exportWholeFilter: exportWholeFilter,
            exportGlobalPercentage: exportGlobalPercentage,
            exportGlobalPercentageAsRule: exportGlobalPercentageAsRule
        };

        function getFilter() {
            return $http.get(URL);
        }

        function saveFilter(filter) {
            return $http.post(URL, filter);
        }

        function exportWholeFilter() {
            window.open(URL + '?export');
        }

        function exportGlobalPercentage() {
            window.open(URL + 'globalPercentage?export')
        }

        function exportGlobalPercentageAsRule() {
            window.open(URL + 'globalPercentage/asRule?export');
        }
    }
})();

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
(function () {
    'use strict';
    angular
        .module('app.percentfilter')
        .factory('percentFilterValidationService', percentFilterValidationService);

    percentFilterValidationService.$inject = ['utilsService', 'percentageBeanService'];

    function percentFilterValidationService(utilsService, percentageBeanService) {

        var vm = this;
        vm.percentageError = '';
        vm.firmwareVersionError = '';
        vm.distributionError = '';
        vm.distributionPercentageError = '';
        vm.lastKnownGoodError = '';
        vm.intermediateVersionError = '';

        vm.cleanErrors = cleanErrors;
        vm.isValidPercentage = isValidPercentage;
        vm.isValidFirmwareVersions = isValidFirmwareVersions;
        vm.isValidDistributionPercentages = isValidDistributionPercentages;
        vm.validateLastKnownGood = validateLastKnownGood;
        vm.isValidDistributionConfig = isValidDistributionConfig;
        vm.validateEnvirontment = validateEnvirontment;
        vm.validateModel = validateModel;
        vm.validateName = validateName;
        vm.validatePercentFilter = validatePercentFilter;
        vm.validatePercentageBean = validatePercentageBean;
        vm.validatePercentFilter = validatePercentFilter;
        vm.validateDistributionMinCheckList = validateDistributionMinCheckList;
        vm.cleanFirmwareVersionError = cleanFirmwareVersionError;
        vm.isValidDistributionPercentRanges = isValidDistributionPercentRanges;
        vm.percentRangesOverlapEachOther = percentRangesOverlapEachOther;
        vm.validateAllPercentageValues = validateAllPercentageValues;
        vm.sortDistributionsByStartRange = sortDistributionsByStartRange;
        vm.hasDuplicates = hasDuplicates;
        vm.isValidStartAndEndPercentageValues = isValidStartAndEndPercentageValues;
        return vm;

        function cleanErrors() {
            vm.percentageError = '';
            vm.firmwareVersionError = '';
            vm.lastKnownGoodError = '';
            vm.intermediateVersionError = '';
            vm.environmentError = '';
            vm.modelError = '';
            vm.nameError = '';
        }

        function cleanFirmwareVersionError() {
            vm.firmwareVersionError = '';
        }

        function validatePercentFilter(filter) {
            return isValidPercentage(filter.percentage);
        }

        function validatePercentageBean(percentageBean, selectedFirmwareVersions, firmwareVersions) {
            var isValid = validateName(percentageBean)
                && isValidDistributionPercentages(percentageBean)
                && validateLastKnownGood(percentageBean)
                && isValidFirmwareVersions(percentageBean, selectedFirmwareVersions, firmwareVersions)
                && validateDistributionMinCheckList(percentageBean, selectedFirmwareVersions, firmwareVersions);
            return isValid;
        }

        function isValidPercentage(percentage) {
            var isValid =  angular.isNumber(percentage)
                && percentage >= 0
                && percentage <= 100
                && isValidDecimalPoints(percentage);
            vm.percentageError = isValid ? '' : 'Percentage should be from 0 to 100 and contain up to three decimal points';

            return isValid;
        }

        function isValidFirmwareVersions(percentageBean, selectedFirmwareVersions, firmwareVersions) {
            if (!percentageBean.firmwareCheckRequired) {
                return true;
            }
            if (selectedFirmwareVersions.length === 0) {
                vm.firmwareVersionError = 'At least one Firmware Version should be selected';
                return false;
            }
            if (percentageBean.lastKnownGood) {
                var lkgConfig = utilsService.getItemFromListById(percentageBean.lastKnownGood, firmwareVersions);
                if (lkgConfig && selectedFirmwareVersions.indexOf(lkgConfig.firmwareVersion) === -1) {
                    vm.firmwareVersionError = 'Last Known Good Version should be selected';
                    return false;
                }
            }
            vm.firmwareVersionError = '';
            return true;
        }

        function isValidDistributionPercentages(percentageBean) {
            vm.totalDistributionPercentageError = '';
            for (var i = 0; i < percentageBean.distributions.length; i++) {
                var distributionEntry = percentageBean.distributions[i];
                if (!isValidDistributionPercentRanges(distributionEntry)
                    || !isValidStartAndEndPercentageValues(distributionEntry)
                    || percentRangesOverlapEachOther(distributionEntry, percentageBean.distributions)
                    || hasDuplicates(percentageBean.distributions)) {
                        return false;
                }
            }
            var totalPercentage = percentageBeanService.getTotalDistributionPercentage(percentageBean);
            if (totalPercentage > 100) {
                vm.totalDistributionPercentageError = 'Total percentage count should not be bigger than 100';
                return false;
            }
            return true;
        }

        function isValidStartAndEndPercentageValues(distribution) {
            return distribution.endPercentRange > distribution.startPercentRange;
        }

        function isValidDistributionPercentRanges(distribution) {
            return isValidPercentageRange(distribution.startPercentRange)
                && isValidPercentageRange(distribution.endPercentRange)
                && isValidPercentageRange(distribution.percentage);
        }

        function equalDistributions(distr1, distr2) {
            return distr1.configId === distr2.configId
                && distr1.startPercentRange === distr2.startPercentRange
                && distr1.endPercentRange === distr2.endPercentRange
                && distr1.percentage === distr2.percentage;
        }

        function hasDuplicates(distributions) {
            for (var i = 0; i < distributions.length; i++) {
                for (var j = 0; j < distributions.length; j++) {
                    if (equalDistributions(distributions[i], distributions[j]) && i !== j) {
                        return true;
                    }
                }
            }
            return false;
        }

        function percentRangesOverlapEachOther(distributionToCheck, distributions) {
            var sortedDistributions = angular.copy(distributions);
            sortDistributionsByStartRange(sortedDistributions);
            for (var i = 0; i < sortedDistributions.length; i++) {
                var distribution = sortedDistributions[i];
                if (!equalDistributions(distributionToCheck, distribution)
                    && distribution.startPercentRange <= distributionToCheck.startPercentRange && distributionToCheck.startPercentRange < distribution.endPercentRange
                    || distribution.startPercentRange > distributionToCheck.startPercentRange && distribution.startPercentRange < distributionToCheck.endPercentRange) {
                    return true;
                }
            }
            return false;
        }

        function sortDistributionsByStartRange(distributions) {
            if (distributions && distributions.length > 0) {
                distributions.sort(function(distribution1, distribution2) {
                    if (distribution1.startPercentRange > distribution2.startPercentRange) {
                        return 1;
                    } else if (distribution1.startPercentRange <distribution2.startPercentRange) {
                        return -1;
                    }
                    return 0;
                })
            }
        }

        function validateAllPercentageValues(percentageBean) {
            if (percentageBean && percentageBean.distributions) {
                for (var i = 0; i < percentageBean.distributions.length; i++) {
                    if (isValidDistributionPercentRanges(percentageBean.distributions[i])) {
                        return false;
                    }
                }
            }
            return true;
        }

        function validateLastKnownGood(percentageBean) {

            if (percentageBean.distributions
                && percentageBean.distributions.length > 0
                && percentageBeanService.getTotalDistributionPercentage(percentageBean) < 100 && !percentageBean.lastKnownGood) {
                vm.lastKnownGoodError = 'LastKnownGood firmware version should be specified if total distribution percentage < 100';
                return false;
            }
            vm.lastKnownGoodError = '';
            return true;
        }

        function isValidDistributionConfig(distribution) {
            if (distribution && !distribution.configId) {
                return false;
            }
            return true;
        }

        function validateEnvirontment(percentageBean) {
            if (!percentageBean.environment) {
                vm.environmentError = 'Environment should be specified';
                return false;
            }
            vm.environmentError = '';
            return true;
        }

        function validateModel(percentageBean) {
            if (!percentageBean.model) {
                vm.modelError = 'Model should be specified';
                return false;
            }
            vm.modelError = '';
            return true;
        }

        function validateName(percentageBean) {
            if (!percentageBean.name) {
                vm.nameError = 'Name should be specified';
                return false;
            }
            vm.nameError = '';
            return true;
        }

        function validateDistributionMinCheckList(percentageBean, selectedFirmwareVersions, firmwareConfigs) {
            if (!percentageBean.firmwareCheckRequired) {
                return true;
            }
            var missingDistributionVersions = [];
            for (var i = 0; i < percentageBean.distributions.length; i++) {
                var distributionConfig = utilsService.getItemFromListById(percentageBean.distributions[i].configId, firmwareConfigs);
                if (distributionConfig && selectedFirmwareVersions.indexOf(distributionConfig.firmwareVersion) === -1) {
                    missingDistributionVersions.push(distributionConfig.firmwareVersion);
                }
            }
            if (missingDistributionVersions.length > 0) {
                vm.firmwareVersionError = 'Distribution firmware version should be selected in MinCheck:' + missingDistributionVersions.join(', ');
                return false;
            }
            return true;
        }

        function isValidPercentageRange(value) {
            if (!isValidNumericRange(value, 0, 100) || !isValidDecimalPoints(value)) {
                return false;
            }
            return true;
        }

        function isValidNumericRange(value, start, end) {
            return utilsService.isNumeric(value)
                && parseFloat(value) >= start
                && parseFloat(value) <= end;
        }

        function isValidDecimalPoints(value) {
            var values = value.toString().split('.');
            var decimalNumbers = values[1];
            if (decimalNumbers && decimalNumbers.length > 3) {
                return false;
            }
            return true;
        }
    }

})();

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
(function() {
    'use strict';

    angular
        .module('app.firmwareReportPage')
        .factory('firmwareReportPageService', service);

    service.$inject=['$http'];

    function service($http) {
        var urlMapping = 'reportpage/';

        return {
            getReport: getReport
        };

        function getReport(macRulesIds) {
            return $http({
                url: urlMapping,
                method: "POST",
                data: macRulesIds,
                headers: {
                    'Content-type': 'application/json'
                },
                responseType: 'arraybuffer'
            });
        }
    }
})();



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
(function() {
    'use strict';

    angular
        .module('app.roundrobinfilter')
        .factory('roundRobinFilterService', service);

    service.$inject=['$http'];

    function service($http) {
        var URL = 'roundrobinfilter/';

        return {
            getFilter: getFilter,
            saveFilter: saveFilter,
            exportFilter: exportFilter
        };

        function getFilter(applicationType) {
            if (applicationType) {
                return $http.get(URL + applicationType);
            }
            return $http.get(URL);
        }

        function saveFilter(filter) {
            return $http.post(URL, filter);
        }

        function exportFilter(applicationType) {
            if (applicationType) {
                window.open(URL + applicationType + '?export');
            } else {
                window.open(URL + '?export');
            }
        }
    }
})();

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
(function () {
    'use strict';
    angular
        .module('app.roundrobinfilter')
        .factory('roundRobinFilterValidationService', roundRobinFilterValidationService);

    roundRobinFilterValidationService.$inject = ['namespacedListService', 'globalValidationService'];

    function roundRobinFilterValidationService(namespacedListService, globalValidationService) {

        var vm = this;

        vm.cleanErrors = cleanErrors;

        vm.isValidLocation = isValidLocation;
        vm.isValidHttpLocation = isValidHttpLocation;
        vm.isValidIPv4Locations = isValidIPv4Locations;
        vm.isValidIPv6Locations = isValidIPv6Locations;

        vm.ipv4Error = '';
        vm.ipv6Error = '';
        vm.locationError = '';
        vm.fullHttpLocationError = '';

        return vm;

        function cleanErrors() {
            vm.ipv4Error = '';
            vm.ipv6Error = '';
            vm.locationError = '';
            vm.fullHttpLocationError = '';
        }

        function isValidLocation(location) {
            var isValid = globalValidationService.isUrlValid(location);
            vm.locationError = isValid ? '' : 'Location is not valid';

            return isValid;
        }

        function isValidHttpLocation(fullHttpLocation) {
            var isValid = globalValidationService.isUrlProtocolRequiredValid(fullHttpLocation);
            vm.fullHttpLocationError = isValid ? '' : 'Full HTTP location is not valid';

            return isValid;
        }

        function isValidIPv4Locations(ipv4locations) {
            vm.ipv4Error = '';
            var totalPercentage = 0;
            for(var i=0; i<ipv4locations.length; i++) {
                if (ipv4locations[i].locationIp === '') {
                    vm.ipv4Error = 'IP is empty';
                }

                if (!globalValidationService.isIpV4(ipv4locations[i].locationIp)) {
                    vm.ipv4Error = 'IP address is not valid';
                }

                if (ipv4locations[i].percentage === '') {
                    vm.ipv4Error = 'Percentage is empty';
                }
                totalPercentage += parseFloat(ipv4locations[i].percentage);
            }
            if (totalPercentage !== 100.0) {
                vm.ipv4Error = 'Total percentage count should be equal to 100';
            }
        }

        function isValidIPv6Locations(ipv6locations) {
            vm.ipv6Error = '';
            var totalPercentage = 0;
            for(var i=0; i<ipv6locations.length; i++) {
                if (ipv6locations[i].locationIp === '') {
                    vm.ipv6Error = 'IP is empty';
                }
                if (!globalValidationService.isIpV6(ipv6locations[i].locationIp)) {
                    vm.ipv6Error = 'IP address is not valid';
                }
                if (ipv6locations[i].percentage === '') {
                    vm.ipv6Error = 'Percentage is empty';
                }
                totalPercentage += parseFloat(ipv6locations[i].percentage);
            }
            if (totalPercentage !== 100.0) {
                vm.ipv6Error = 'Total percentage count should be equal to 100';

            }
        }
    }

})();

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
(function() {
    'use strict';

    angular
        .module('app.firmwareTestPage')
        .factory('firmwareTestPageService', service);

    service.$inject = ['$http'];

    function service($http) {
        var API_URL = 'firmwarerule/testpage';

        return {
            getMatchedRules: getMatchedRules
        };

        function getMatchedRules(params) {
            return $http.get(API_URL + '?' + params);
        }
    }
})();

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
(function () {
    'use strict';

    angular
        .module('app.firmwarerule')
        .factory('firmwareRuleValidationService', service);

    service.$inject = ['utilsService', 'globalValidationService'];

    function service(utilsService, globalValidationService) {
        var vm = this;

        vm.cleanErrors = cleanErrors;
        vm.validatePropertyValue = validatePropertyValue;
        vm.validateDistributionPercentages = validateDistributionPercentages;

        vm.definePropertyError = '';
        vm.distributionPercentageError = '';

        return vm;

        function cleanErrors() {
            vm.definePropertyError = '';
            vm.distributionPercentageError = '';
        }

        function validatePropertyValue(property, value) {
            if (property.optional && !value) {
                return true;
            }
            if (!property.optional && !value) {
                return false;
            }
            var validationTypes = property.validationTypes;

            var isString = _.include(validationTypes, 'STRING') && true;
            var isNumber = _.include(validationTypes, 'NUMBER') && globalValidationService.isNumber(value);
            var isBoolean = _.include(validationTypes, 'BOOLEAN') && globalValidationService.isBoolean(value);
            var isPercent = _.include(validationTypes, 'PERCENT') && globalValidationService.isPercentValid(value);
            var isPort = _.include(validationTypes, 'PORT') && globalValidationService.isPortValid(value);
            var isUrl = _.include(validationTypes, 'URL') && (globalValidationService.isUrlValid(value) || globalValidationService.isUrlProtocolRequiredValid(value));
            var isIpV4 = _.include(validationTypes, 'IPV4') && globalValidationService.isIpV4(value);
            var isIpV6 =  _.include(validationTypes, 'IPV6') && globalValidationService.isIpV6(value);

            return isString || isNumber || isBoolean || isPercent || isPort || isUrl || isIpV4 || isIpV6;

        }

        function validateDistributionPercentages(items) {
            vm.distributionPercentageError = findDistributionPercentagesError(items);
            return vm.distributionPercentageError;
        }

        function findDistributionPercentagesError(items) {
            var totalPercentage = 0;
            for (var i = 0; i < items.length; i++) {
                var percent = items[i].percentage;
                if (percent !== '') {
                    totalPercentage += percent;
                }
            }
            if (totalPercentage > 100) {
                return 'Total percentage count should not be bigger than 100';
            }
            return '';
        }
    }
})();

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
(function() {
    'use strict';

    angular
        .module('app.firmwarerule')
        .factory('firmwareRuleService', service);

    service.$inject=['utilsService', '$http', 'syncHttpService'];

    function service(utilsService, $http, syncHttpService) {
        var API_URL = 'firmwarerule/';

        return {
            getFirmwareRule: getFirmwareRule,
            getAllFirmwareRules: getAllFirmwareRules,
            getFirmwareRulesByActionType: getFirmwareRulesByActionType,
            createFirmwareRule: createFirmwareRule,
            updateFirmwareRule: updateFirmwareRule,
            deleteFirmwareRule: deleteFirmwareRule,
            exportFirmwareRule: exportFirmwareRule,
            exportAllFirmwareRules: exportAllFirmwareRules,
            exportAllFirmwareRulesByType: exportAllFirmwareRulesByType,
            getFirmwareRuleNamesByTemplate: getFirmwareRuleNamesByTemplate,
            updateSyncEntities: updateSyncEntities,
            createSyncEntities: createSyncEntities,
            getMacRulesNames: getMacRulesNames
        };

        function getFirmwareRule(id) {
            return $http.get(API_URL + id);
        }

        function getAllFirmwareRules() {
            return $http.get(API_URL);
        }

        function createFirmwareRule(firmwareRule) {
            return $http.post(API_URL, firmwareRule);
        }

        function updateFirmwareRule(firmwareRule) {
            return $http.put(API_URL, firmwareRule);
        }

        function deleteFirmwareRule(id) {
            return $http.delete(API_URL + id);
        }

        function getFirmwareRulesByActionType(pageNumber, pageSize, searchParam) {
            var url = API_URL + 'filtered?pageNumber=' + pageNumber + '&pageSize=' + pageSize;
            return $http.post(url, searchParam);
        }

        function getFirmwareRuleNamesByTemplate(templateId) {
            return $http.get(API_URL + 'byTemplate/' + templateId + '/names');
        }

        function exportFirmwareRule(id) {
            window.open(API_URL + id + '?export');
        }

        function exportAllFirmwareRulesByType(type) {
            window.open(API_URL + 'export/byType?exportAll&type=' + type);
        }

        function exportAllFirmwareRules() {
            window.open(API_URL + 'export/allTypes?exportAll');
        }

        function updateSyncEntities(firmwareRules) {
            var requests = utilsService.generateRequestList(firmwareRules, {url: API_URL + 'entities', method: 'PUT'});
            return requests && requests.length ? syncHttpService.http(requests) : null;
        }

        function createSyncEntities(firmwareRules) {
            var requests = utilsService.generateRequestList(firmwareRules, {url: API_URL + 'entities', method: 'POST'});
            return requests && requests.length ? syncHttpService.http(requests) : null;
        }

        function getMacRulesNames() {
            return $http.get(API_URL + 'MAC_RULE/names');
        }

    }
})();


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
(function() {
    'use strict';

    angular
        .module('app.firmwareruletemplate')
        .factory('firmwareRuleTemplateService', service);

    service.$inject=['utilsService', '$http', 'syncHttpService'];

    function service(utilsService, $http, syncHttpService) {
        var API_URL = 'firmwareruletemplate/';

        return {
            getFirmwareRuleTemplate: getFirmwareRuleTemplate,
            getAllFirmwareRuleTemplates: getAllFirmwareRuleTemplates,
            getFirmwareRuleTemplatesByActionType: getFirmwareRuleTemplatesByActionType,
            getFirmwareRuleTemplatesByActionTypePage: getFirmwareRuleTemplatesByActionTypePage,
            getFirmwareRuleTemplateIdsByActionType: getFirmwareRuleTemplateIdsByActionType,
            createFirmwareRuleTemplate: createFirmwareRuleTemplate,
            updateFirmwareRuleTemplate: updateFirmwareRuleTemplate,
            importFirmwareRuleTemplates: importFirmwareRuleTemplates,
            deleteFirmwareRuleTemplate: deleteFirmwareRuleTemplate,
            exportFirmwareRuleTemplate: exportFirmwareRuleTemplate,
            exportAllFirmwareRuleTemplates: exportAllFirmwareRuleTemplates,
            exportAllFirmwareRuleTemplatesByType: exportAllFirmwareRuleTemplatesByType,
            changePriorities: changePriorities,
            updateSyncEntities: updateSyncEntities,
            createSyncEntities: createSyncEntities,
            getByTypeAndEditableOption: getByTypeAndEditableOption
        };

        function getFirmwareRuleTemplate(id) {
            return $http.get(API_URL + id);
        }

        function getAllFirmwareRuleTemplates() {
            return $http.get(API_URL + 'all');
        }

        function createFirmwareRuleTemplate(firmwareRuleTemplate) {
            return $http.post(API_URL, firmwareRuleTemplate);
        }

        function updateFirmwareRuleTemplate(firmwareRuleTemplate) {
            return $http.put(API_URL, firmwareRuleTemplate);
        }

        function importFirmwareRuleTemplates(firmwareRuleTemplates) {
            return $http.post(API_URL + 'import/', firmwareRuleTemplates);
        }

        function deleteFirmwareRuleTemplate(id) {
            return $http.delete(API_URL + id);
        }

        function getFirmwareRuleTemplatesByActionTypePage(pageNumber, pageSize, searchContext) {
            var url = API_URL + 'filtered?pageNumber=' + pageNumber + '&pageSize=' + pageSize;
            return $http.post(url, searchContext);
        }

        function getFirmwareRuleTemplatesByActionType(type) {
            var url = API_URL + 'all/' + type;
            return $http.get(url);
        }

        function getFirmwareRuleTemplateIdsByActionType(actionType) {
            var url = API_URL + "ids";
            if (actionType) {
                url += "?type=" + actionType;
            }
            return $http.get(url);
        }

        function exportFirmwareRuleTemplate(id) {
            window.open(API_URL + id + '?export');
        }

        function exportAllFirmwareRuleTemplates() {
            window.open(API_URL + '?export');
        }

        function exportAllFirmwareRuleTemplatesByType(type) {
            window.open(API_URL + '/export?type=' + type);
        }

        function changePriorities(id, newPriority) {
            return $http.post(API_URL + id + '/priority/' + newPriority);
        }

        function updateSyncEntities(firmwareRuleTemplates) {
            var requests = utilsService.generateRequestList(firmwareRuleTemplates, {url: API_URL + 'entities', method: 'PUT'});
            return requests && requests.length ? syncHttpService.http(requests) : null;
        }

        function createSyncEntities(firmwareRuleTemplates) {
            var requests = utilsService.generateRequestList(firmwareRuleTemplates, {url: API_URL + 'entities', method: 'POST'});
            return requests && requests.length ? syncHttpService.http(requests) : null;
        }

        function getByTypeAndEditableOption(type, isEditable) {
            return $http.get(API_URL + type + '/' + isEditable);
        }
    }
})();

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
(function() {
    'use strict';

    angular
        .module('app.migration')
        .factory('migrationService', service);

    service.$inject=['$http'];

    function service($http) {
        var API_URL = 'migration';
        return {
            migrate: migrate,
            getMigrationInfo: getMigrationInfo
        };

        function migrate(migrationURL) {
            return $http.get(API_URL + migrationURL);
        }

        function getMigrationInfo() {
            return $http.get(API_URL + "/info");
        }
    }
})();


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
(function() {
    'use strict';

    angular
        .module('app.namespacedlist')
        .factory('namespacedListService', service);

    service.$inject=['utilsService', 'syncHttpService', '$http', '$log', 'alertsService', 'NAMESPACED_LIST_TYPE', 'globalValidationService', 'importService'];

    function service(utilsService, syncHttpService, $http, $log, alertsService, NAMESPACED_LIST_TYPE, globalValidationService, importService) {
        var urlMapping = 'genericnamespacedlist/';

        return {
            getNamespacedLists: getNamespacedLists,
            getAllNamespacedLists: getAllNamespacedLists,
            getNamespacedListIds: getNamespacedListIds,
            getNamespacedList: getNamespacedList,
            updateNamespacedList: updateNamespacedList,
            deleteNamespacedList: deleteNamespacedList,
            exportAllNamespacedLists: exportAllNamespacedLists,
            exportNamespacedList: exportNamespacedList,
            sortNamespacedListsData: sortNamespacedListsData,
            isMacAddress: isMacAddress,
            isValidIpAddress: isValidIpAddress,
            createNamespacedList: createNamespacedList,
            getAllNamespacedListsIdToNameMap: getAllNamespacedListsIdToNameMap,
            getAllNamespacedListsByTypeIdToNameMap: getAllNamespacedListsByTypeIdToNameMap,
            getNamespacedListIdsByType: getNamespacedListIdsByType,
            getAllIpAddressGroups: getAllIpAddressGroups,
            isMacPart: isMacPart,
            updateSyncEntities: updateSyncEntities,
            createSyncEntities: createSyncEntities,
            normalizeMacAddress: normalizeMacAddress,
            filterNamespacedListDataFromFile: filterNamespacedListDataFromFile,
            validateDataFromFile: validateDataFromFile
        };

        function getNamespacedListIdsByType(type) {
            return $http.get(urlMapping + type + "/ids");
        }

        function getAllNamespacedLists() {
            return $http.get(urlMapping);
        }

        function getNamespacedLists(pageNumber, pageSize, searchParam) {
            return $http.post(urlMapping + 'filtered?pageNumber=' + pageNumber + '&pageSize=' + pageSize, searchParam);
        }

        function getAllIpAddressGroups() {
            return $http.get(urlMapping + 'ipAddressGroups');
        }

        function getNamespacedListIds() {
            return $http.get(urlMapping + 'ids');
        }

        function getNamespacedList(id) {
            return $http.get(urlMapping + id);
        }

        function createNamespacedList(namespacedList) {
            return $http.post(urlMapping, namespacedList);
        }

        function updateNamespacedList(namespacedList, newId) {
            return $http.put(urlMapping + newId, namespacedList);
        }

        function deleteNamespacedList(id) {
            return $http.delete(urlMapping + id);
        }

        function exportAllNamespacedLists(type) {
            window.open(urlMapping + '/all/' + type + "?export");
        }

        function exportNamespacedList(id) {
            window.open(urlMapping + id + "?export");
        }

        function updateSyncEntities(entities) {
            var requests = utilsService.generateRequestList(entities, {url: urlMapping + 'entities', method: 'PUT'});
            return requests && requests.length ? syncHttpService.http(requests) : null;
        }

        function createSyncEntities(entities) {
            var requests = utilsService.generateRequestList(entities, {url: urlMapping + 'entities', method: 'POST'});
            return requests && requests.length ? syncHttpService.http(requests) : null;
        }

        function sortNamespacedListsData(namespacedLists) {
            if (!Array.isArray(namespacedLists)) {
                namespacedLists = [namespacedLists];
            }
            var length = namespacedLists.length;
            for(var i = 0; i < length; i++) {
                namespacedLists[i].data.sort(function(a, b) {
                    return a.localeCompare(b);
                });
            }
        }

        function getAllNamespacedListsIdToNameMap() {
            return $http.get(urlMapping + "names");
        }

        function getAllNamespacedListsByTypeIdToNameMap(type) {
            return $http.get(urlMapping + type + "/names");
        }

        function isValidIpAddress(ipAddress) {
            return globalValidationService.isIpValid(ipAddress);
        }

        function isMacAddress(data) {
            return data.replace(/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/, '') === '';
        }

        function filterNamespacedListDataFromFile(data, type) {
            if (type == NAMESPACED_LIST_TYPE.IP_LIST) {
                var validIps = _.filter(data, function (ip) {
                    return isValidIpAddress(ip);
                });
                return validIps;
            } else {
                var validMacs = _.filter(data, function(mac) {
                    return isMacAddress(normalizeMacAddress(mac));
                });
                return validMacs;
            }
        }

        function validateDataFromFile(data, filteredData) {
            if (filteredData.length !== data.length) {
                return 'Invalid addresses were not added: ' + _.difference(data, filteredData).join(', ');
            }
            return '';
        }

        function validateDataFromFile(data, filteredData) {
            if (filteredData.length !== data.length) {
                return 'File contains an invalid addresses: ' + _.difference(data, filteredData).join(', ');
            }
            return '';
        }

        function isMacPart(macPart) {
            var splittedMacPart = macPart.split(':');
            for (var i = 0; i < splittedMacPart.length; i++) {
                if ((splittedMacPart[i].length <= 2 && splittedMacPart[i].length >= 1)
                    && splittedMacPart[i].replace(/^([0-9A-Fa-f])+/g, '') === '') {
                    continue;
                } else {
                    return false;
                }
            }
            return true;
        }

        function normalizeMacAddress(macAddress) {
            macAddress = macAddress.replace(/:/g, "")
                .replace(/-/g, "")
                .replace(/\./g, "").toUpperCase().trim();
            var normalizedMac = '';
            for (var i = 0; i < macAddress.length; ++i) {
                if (i % 2 == 1 && i < (macAddress.length - 1)) {
                    normalizedMac += macAddress.substring(i, i + 1) + ":";
                } else {
                    normalizedMac += macAddress.substring(i, i + 1);
                }
            }
            return normalizedMac;
        }
    }
})();


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
(function() {
    angular
        .module('app.feature')
        .factory('featureService', service);

    service.$inject = ['$http', 'syncHttpService', 'utilsService'];

    function service($http, syncHttpService, utilsService) {
        var URL = "rfc/feature/";

        return {
            getAll: getAll,
            getFeatures: getFeatures,
            getFeature: getFeature,
            createFeature: createFeature,
            updateFeature: updateFeature,
            deleteFeature: deleteFeature,
            exportAllFeatures: exportAllFeatures,
            exportFeature: exportFeature,
            updateSyncEntities: updateSyncEntities,
            createSyncEntities: createSyncEntities,
            getFeaturesByIdList: getFeaturesByIdList
        }

        function getAll() {
            return $http.get(URL);
        }

        function getFeatures(pageNumber, pageSize, searchParam) {
            var url = URL + 'filtered?pageNumber=' + pageNumber + '&pageSize=' + pageSize;
            return $http.post(url, searchParam);
        }

        function getFeature(id) {
            return $http.get(URL + id);
        }

        function createFeature(feature) {
            return $http.post(URL, feature);
        }

        function updateFeature(feature) {
            return $http.put(URL, feature);
        }

        function deleteFeature(id) {
            return $http.delete(URL + id);
        }

        function exportAllFeatures() {
            window.open(URL + "?export");
        }

        function exportFeature(id) {
            window.open(URL + id + "?export");
        }

        function updateSyncEntities(entities) {
            var requests = utilsService.generateRequestList(entities, {url: URL + 'entities', method: 'PUT'});
            return requests && requests.length ? syncHttpService.http(requests) : null;
        }

        function createSyncEntities(entities) {
            var requests = utilsService.generateRequestList(entities, {url: URL + 'entities', method: 'POST'});
            return requests && requests.length ? syncHttpService.http(requests) : null;
        }

        function getFeaturesByIdList(idList) {
            return $http.post(URL + "byIdList", idList);
        }
    }

})();

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
(function() {
    angular
        .module('app.featurerule')
        .factory('featureRuleService', service);

    service.$inject = ['$http', 'syncHttpService', 'utilsService'];

    function service($http, syncHttpService, utilsService) {
        var URL = "rfc/featurerule/";

        return {
            getAll: getAll,
            getFeatureRules: getFeatureRules,
            getFeatureRule: getFeatureRule,
            createFeatureRule: createFeatureRule,
            updateFeatureRule: updateFeatureRule,
            deleteFeatureRule: deleteFeatureRule,
            exportAllFeatureRules: exportAllFeatureRules,
            exportFeatureRule: exportFeatureRule,
            updateSyncEntities: updateSyncEntities,
            createSyncEntities: createSyncEntities,
            changePriorities: changePriorities,
            getFeatureRulesSize: getFeatureRulesSize,
            getAllowedNumberOfFeatures: getAllowedNumberOfFeatures
        };

        function getAll() {
            return $http.get(URL);
        }

        function getFeatureRules(pageNumber, pageSize, searchParam) {
            var url = URL + 'filtered?pageNumber=' + pageNumber + '&pageSize=' + pageSize;
            return $http.post(url, searchParam);
        }

        function getFeatureRule(id) {
            return $http.get(URL + id);
        }

        function createFeatureRule(feature) {
            return $http.post(URL, feature);
        }

        function updateFeatureRule(feature) {
            return $http.put(URL, feature);
        }

        function deleteFeatureRule(id) {
            return $http.delete(URL + id);
        }

        function exportAllFeatureRules() {
            window.open(URL + "?export");
        }

        function exportFeatureRule(id) {
            window.open(URL + id + "?export");
        }

        function updateSyncEntities(entities) {
            var requests = utilsService.generateRequestList(entities, {url: URL + 'entities', method: 'PUT'});
            return requests && requests.length ? syncHttpService.http(requests) : null;
        }

        function createSyncEntities(entities) {
            var requests = utilsService.generateRequestList(entities, {url: URL + 'entities', method: 'POST'});
            return requests && requests.length ? syncHttpService.http(requests) : null;
        }

        function changePriorities(id, priority) {
            return $http.post(URL + id + '/priority/' + priority);
        }

        function getFeatureRulesSize() {
            return $http.get(URL + 'size');
        }

        function getAllowedNumberOfFeatures() {
            return $http.get(URL + 'allowedNumberOfFeatures');
        }
    }
})();

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
(function () {
    'use strict';

    angular
        .module('app.featurerule')
        .factory('featureRuleValidationService', service);

    service.$inject = [];

    function service() {
        var vm = this;

        vm.nameError = '';
        vm.featuresError = '';

        vm.cleanErrors = cleanErrors;
        vm.validateNumberOfFeatures = validateNumberOfFeatures;
        vm.validate = validate;

        cleanErrors();

        return vm;

        function cleanErrors() {
            vm.nameError = '';
            vm.featuresError = '';
        }

        function validateNumberOfFeatures(features, allowedNumberOfFeatures) {
            vm.featuresError = '';
            if (features.length === 0 || features.length > allowedNumberOfFeatures) {
                vm.featuresError = 'Features should be specified and be up to ' + allowedNumberOfFeatures + ' items';
            }
            return vm.featuresError === '';
        }

        function validate(featureRule) {
            validateNumberOfFeatures(featureRule.featureIds);
        }
    }
})();

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
(function() {
    'use strict';

angular
    .module('app.settingprofile')
    .factory('settingProfileService', service);

    service.$inject=['utilsService', '$http', 'syncHttpService'];

    function service(utilsService, $http, syncHttpService) {
        var API_URL = 'setting/profile/';

        return {
            getAll: getAll,
            getProfiles: getProfiles,
            getProfile: getProfile,
            createProfile: createProfile,
            updateProfile: updateProfile,
            deleteProfile: deleteProfile,
            updateSyncEntities: updateSyncEntities,
            createSyncEntities: createSyncEntities,
            exportOne: exportOne,
            exportAll: exportAll
        };

        function getAll() {
            return $http.get(API_URL);
        }

        function getProfiles(pageNumber, pageSize, searchParam) {
            var url = API_URL + 'filtered?pageNumber=' + pageNumber + '&pageSize=' + pageSize;
            return $http.post(url, searchParam);
        }

        function getProfile(id) {
            return $http.get(API_URL + id);
        }

        function createProfile(firmwareRule) {
            return $http.post(API_URL, firmwareRule);
        }

        function updateProfile(firmwareRule) {
            return $http.put(API_URL, firmwareRule);
        }

        function deleteProfile(id) {
            return $http.delete(API_URL + id);
        }

        function updateSyncEntities(firmwareRules) {
            var requests = utilsService.generateRequestList(firmwareRules, {url: API_URL + 'entities', method: 'PUT'});
            return requests && requests.length ? syncHttpService.http(requests) : null;
        }

        function createSyncEntities(firmwareRules) {
            var requests = utilsService.generateRequestList(firmwareRules, {url: API_URL + 'entities', method: 'POST'});
            return requests && requests.length ? syncHttpService.http(requests) : null;
        }

        function exportOne(id) {
            window.open(API_URL + id + '?export');
        }

        function exportAll() {
            window.open(API_URL + '?export');
        }
    }
})();

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
(function() {
    'use strict';

    angular
        .module('app.settingrule')
        .factory('settingRuleService', service);

    service.$inject=['utilsService', '$http', 'syncHttpService'];

    function service(utilsService, $http, syncHttpService) {
        var API_URL = 'setting/rule/';

        return {
            getAll: getAll,
            getRules: getRules,
            getRule: getRule,
            createRule: createRule,
            updateRule: updateRule,
            deleteRule: deleteRule,
            updateSyncEntities: updateSyncEntities,
            createSyncEntities: createSyncEntities,
            exportOne: exportOne,
            exportAll: exportAll        
        };

        function getAll() {
            return $http.get(API_URL);
        }

        function getRules(pageNumber, pageSize, searchContext) {
            var url = API_URL + 'filtered?pageNumber=' + pageNumber + '&pageSize=' + pageSize;
            return $http.post(url, searchContext);
        }

        function getRule(id) {
            return $http.get(API_URL + id);
        }

        function createRule(firmwareRule) {
            return $http.post(API_URL, firmwareRule);
        }

        function updateRule(firmwareRule) {
            return $http.put(API_URL, firmwareRule);
        }

        function deleteRule(id) {
            return $http.delete(API_URL + id);
        }

        function updateSyncEntities(firmwareRules) {
            var requests = utilsService.generateRequestList(firmwareRules, {url: API_URL + 'entities', method: 'PUT'});
           return requests && requests.length ? syncHttpService.http(requests) : null;
        }

        function createSyncEntities(firmwareRules) {
            var requests = utilsService.generateRequestList(firmwareRules, {url: API_URL + 'entities', method: 'POST'});
            return requests && requests.length ? syncHttpService.http(requests) : null;
        }

        function exportOne(id) {
            window.open(API_URL + id + '?export');
        }

        function exportAll() {
            window.open(API_URL + '?export');
        }
    }
})();

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
(function() {
    'use strict';

    angular
        .module('app.settingsTestPage')
        .factory('settingsTestPageService', service);

    service.$inject = ['$http'];

    function service($http) {

        function getMatchRules(selectedTypes, parameters) {

            var params = '';
            parameters.forEach(function (item) {
                params += (item.key + '=' + item.value + '&');
            });

            var url = 'settings/testpage?' + params;
            if (selectedTypes.length !== 0) {
                angular.forEach(selectedTypes, function(type) {
                    url += 'settingType=' + type + '&';
                });
                url = url.slice(0, -1);
            }
            return $http.get(url);
        }

        return {
            getMatchRules: getMatchRules
        }
    }
})();

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
angular
    .module('app.permanentprofile')
    .factory('permanentProfileService', service);

    service.$inject=['utilsService', '$http', 'syncHttpService'];

    function service(utilsService, $http, syncHttpService) {

        var API_URL = 'telemetry/profile/';

        var PROFILE_NAME = 'telemetryProfile:name';
        var UPLOAD_PROTOCOL = 'uploadRepository:uploadProtocol';
        var UPLOAD_URL = 'uploadRepository:URL';

        return {
            getAll: getAll,
            getProfile: getProfile,
            createProfile: createProfile,
            updateProfile: updateProfile,
            deleteProfile: deleteProfile,
            getProfiles: getProfiles,
            searchProfileByName: searchProfileByName,
            updateSyncEntities: updateSyncEntities,
            createSyncEntities: createSyncEntities,
            exportOne: exportOne,
            exportAll: exportAll,
            getProfileView: getProfileView,
            getProfileName: getProfileName
        };

        function getAll() {
            return $http.get(API_URL);
        }

        function getProfile(id) {
            return $http.get(API_URL + id);
        }

        function createProfile(firmwareRule) {
            return $http.post(API_URL + 'change', firmwareRule);
        }

        function updateProfile(firmwareRule) {
            return $http.put(API_URL + 'change', firmwareRule);
        }

        function deleteProfile(id) {
            return $http.delete(API_URL + 'change/' + id);
        }

        function getProfiles(pageNumber, pageSize, context) {
            var url = API_URL + 'filtered?pageNumber=' + pageNumber + '&pageSize=' + pageSize;
            return $http.post(url, context);
        }

        function searchProfileByName(searchName, pageNumber, pageSize) {
            var url = API_URL + 'filtered?searchName=' + searchName + '&pageNumber=' + pageNumber + '&pageSize=' + pageSize;
            return $http.get(url);
        }

        function updateSyncEntities(permanentProfiles) {
            var requests = utilsService.generateRequestList(permanentProfiles, {url: API_URL + 'entities', method: 'PUT'});
           return requests && requests.length ? syncHttpService.http(requests) : null;
        }

        function createSyncEntities(permanentProfiles) {
            var requests = utilsService.generateRequestList(permanentProfiles, {url: API_URL + 'entities', method: 'POST'});
            return requests && requests.length ? syncHttpService.http(requests) : null;
        }

        function exportOne(id) {
            window.open(API_URL + id + '?export');
        }

        function exportAll() {
            window.open(API_URL + '?export');
        }

        function getProfileView(profile1, profile2) {
            var profile = getProfileChanges(profile1, profile2);
            if (!profile) {
                return '';
            }
            var view = '';
            if (profile[PROFILE_NAME]) {
                view += 'NAME: ' + profile[PROFILE_NAME] + '\n';
            }
            if (profile[UPLOAD_PROTOCOL]) {
                view += 'UPLOAD PROTOCOL: ' + profile[UPLOAD_PROTOCOL] + '\n';
            }
            if (profile[UPLOAD_URL]) {
                view += 'UPLOAD REPOSITORY: ' + profile[UPLOAD_URL] + '\n';
            }
            if(profile.schedule) {
                view += 'SCHEDULE: ' + profile.schedule + '\n';
            }
            if (profile.telemetryProfile && profile.telemetryProfile.length > 0) {
                view += 'TELEMETRY ELEMENTS: \n';
                for(var i = 0; i < profile.telemetryProfile.length; i++) {
                    var telemetryElement = profile.telemetryProfile[i];
                    if (i >= 1) {
                        view += '\r';
                    }
                    view += '\tHEADER: ' + telemetryElement.header + '\n';
                    view += '\tCONTENT: ' + telemetryElement.content + '\n';
                    view += '\tTYPE: ' + telemetryElement.type + '\n';
                    view += '\tPOLLING FREQUENCY: ' + telemetryElement.pollingFrequency + '\n';
                    view += '\tCOMPONENT: ' + utilsService.getString(telemetryElement.component) + '\n';
                }
            }

            return view;
        }

        function getProfileChanges(profile1, profile2) {
            var oldProfileChanges = {};
            if (!profile1) {
                profile1 = {};
            }
            if (!profile2) {
                profile2 = {};
            }
            if (!angular.equals(profile1[PROFILE_NAME], profile2[PROFILE_NAME])) {
                oldProfileChanges[PROFILE_NAME] = profile1[PROFILE_NAME];
            }
            if (!angular.equals(profile1[UPLOAD_PROTOCOL], profile2[UPLOAD_PROTOCOL])) {
                oldProfileChanges[UPLOAD_PROTOCOL] = profile1[UPLOAD_PROTOCOL];
            }
            if (!angular.equals(profile1[UPLOAD_URL], profile2[UPLOAD_URL])) {
                oldProfileChanges[UPLOAD_URL] = profile1[UPLOAD_URL];
            }
            if (!angular.equals(profile1.schedule, profile2.schedule)) {
                oldProfileChanges.schedule = profile1.schedule;
            }
            oldProfileChanges.telemetryProfile = getDifference(profile1, profile2);
            return oldProfileChanges;
        }

        function getDifference(profile1, profile2) {
            var differentObjects = [];
            _.each(profile1.telemetryProfile, function(entry1) {
                if (!_.find(profile2.telemetryProfile, function(entry2) {return equalsTelemetryEntry(entry1, entry2)})) {
                    differentObjects.push(entry1)
                }
            });
            return differentObjects;
        }

        function equalsTelemetryEntry(entry1, entry2) {
            return entry1 && entry2
                && angular.equals(entry1.header, entry2.header)
                && angular.equals(entry1.content, entry2.content)
                && angular.equals(entry1.type, entry2.type)
                && angular.equals(entry1.pollingFrequency, entry2.pollingFrequency)
                && angular.equals(entry1.component, entry2.component);
        }

        function getProfileName(profile) {
            return profile[PROFILE_NAME];
        }
    }

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
(function() {
    'use strict';
    angular
        .module('app.targetingrule')
        .factory('targetingRuleService', service);

    service.$inject = ['utilsService', '$http', 'syncHttpService']

    function service(utilsService, $http, syncHttpService) {
        var urlMapping = 'telemetry/rule/';

        return {
            getAll: getAll,
            getPage: getPage,
            getById: getById,
            create: create,
            update: update,
            deleteTargetingRule: deleteTargetingRule,
            updateSyncEntities: updateSyncEntities,
            createSyncEntities: createSyncEntities,
            exportOne: exportOne,
            exportAll: exportAll
        };

        function getAll() {
            return $http.get(urlMapping);
        }

        function getPage(pageSize, pageNumber, searchParam) {
            return $http.post(urlMapping + 'filtered?pageSize=' + pageSize + '&pageNumber=' + pageNumber, searchParam);
        }

        function getById(id) {
            return $http.get(urlMapping + id);
        }

        function create(formula) {
            return $http.post(urlMapping, formula);
        }

        function update(formula) {
            return $http.put(urlMapping, formula);
        }

        function deleteTargetingRule(id) {
            return $http.delete(urlMapping + id);
        }

        function updateSyncEntities(formulas) {
            var requests = utilsService.generateRequestList(formulas, {url: urlMapping + 'entities', method: 'PUT'});
            return requests && requests.length ? syncHttpService.http(requests) : null;
        }

        function createSyncEntities(formulas) {
            var requests = utilsService.generateRequestList(formulas, {url: urlMapping + 'entities', method: 'POST'});
            return requests && requests.length ? syncHttpService.http(requests) : null;
        }

        function exportOne(id) {
            window.open(urlMapping + id + '?export');
        }

        function exportAll() {
            window.open(urlMapping + '?export');
        }

    }
})();

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
(function() {
    'use strict';

    angular
        .module('app.telemetrytwoprofile')
        .factory('telemetryTwoProfileService', service);

    service.$inject = ['$http', 'utilsService', 'syncHttpService'];

    function service($http, utilsService, syncHttpService) {
        var API_URL = 'telemetry/v2/profile/';

        return {
            createTelemetryTwoProfile: createTelemetryTwoProfile,
            updateTelemetryTwoProfile: updateTelemetryTwoProfile,
            getTelemetryTwoProfiles: getTelemetryTwoProfiles,
            getTelemetryTwoProfile: getTelemetryTwoProfile,
            deleteTelemetryTwoProfile: deleteTelemetryTwoProfile,
            exportOne: exportOne,
            exportAll: exportAll,
            getAll: getAll,
            getTelemetryTwoProfilesByIdList: getTelemetryTwoProfilesByIdList,
            getProfileView: getProfileView,
            getProfileName: getProfileName,
            updateSyncEntities: updateSyncEntities,
            createSyncEntities: createSyncEntities
        };

        function getAll() {
            return $http.get(API_URL);
        }

        function getTelemetryTwoProfiles(pageNumber, pageSize, context) {
            var url = API_URL + 'filtered?pageNumber=' + pageNumber + '&pageSize=' + pageSize;
            return $http.post(url, context);
        }

        function getTelemetryTwoProfile(id) {
            return $http.get(API_URL + id);
        }

        function createTelemetryTwoProfile(telemetryTwoProfile) {
            return $http.post(API_URL + 'change', telemetryTwoProfile);
        }

        function updateTelemetryTwoProfile(telemetryTwoProfile) {
            return $http.put(API_URL + 'change', telemetryTwoProfile);
        }

        function deleteTelemetryTwoProfile(id){
            return $http.delete(API_URL + 'change/' + id);
        }

        function exportOne(id) {
            window.open(API_URL + id + '?export');
        }

        function exportAll() {
            window.open(API_URL + '?export');
        }

        function getTelemetryTwoProfilesByIdList(idList) {
            return $http.post(API_URL + "byIdList", idList);
        }

        function getProfileView(profile1, profile2) {
            var profile = getProfileChanges(profile1, profile2);
            if (!profile) {
                return '';
            }
            var view = '';
            if (profile['name']) {
                view += 'NAME: ' + profile['name'] + '\n';
            }
            if (profile['jsonconfig']) {
                view += 'JSON_CONFIG: ' + profile['jsonconfig'] + '\n';
            }
            return view;
        }

        function getProfileChanges(profile1, profile2) {
            var oldProfileChanges = {};
            if (!profile1) {
                profile1 = {};
            }
            if (!profile2) {
                profile2 = {};
            }
            if (!angular.equals(profile1['name'], profile2['name'])) {
                oldProfileChanges['name'] = profile1['name'];
            }
            if (!angular.equals(profile1['jsonconfig'], profile2['jsonconfig'])) {
                oldProfileChanges['jsonconfig'] = profile1['jsonconfig'];
            }
            return oldProfileChanges;
        }

        function getProfileName(profile) {
            return profile['name'];
        }
        function updateSyncEntities(telemetryTwoProfiles) {
            var requests = utilsService.generateRequestList(telemetryTwoProfiles, {url: API_URL + 'entities', method: 'PUT'});
            return requests && requests.length ? syncHttpService.http(requests) : null;
        }

        function createSyncEntities(telemetryTwoProfile) {
            var requests = utilsService.generateRequestList(telemetryTwoProfile, {url: API_URL + 'entities', method: 'POST'});
            return requests && requests.length ? syncHttpService.http(requests) : null;
        }
    }
})();

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
(function() {
    'use strict';
    angular
        .module('app.telemetrytwotargetingrule')
        .factory('telemetryTwoTargetingRuleService', service);

    service.$inject = ['utilsService', '$http', 'syncHttpService']

    function service(utilsService, $http, syncHttpService) {
        var urlMapping = 'telemetry/v2/rule/';

        return {
            getAll: getAll,
            getPage: getPage,
            getById: getById,
            create: create,
            update: update,
            deleteTargetingRule: deleteTargetingRule,
            updateSyncEntities: updateSyncEntities,
            createSyncEntities: createSyncEntities,
            exportOne: exportOne,
            exportAll: exportAll
        };

        function getAll() {
            return $http.get(urlMapping);
        }

        function getPage(pageSize, pageNumber, searchParam) {
            return $http.post(urlMapping + 'filtered?pageSize=' + pageSize + '&pageNumber=' + pageNumber, searchParam);
        }

        function getById(id) {
            return $http.get(urlMapping + id);
        }

        function create(formula) {
            return $http.post(urlMapping, formula);
        }

        function update(formula) {
            return $http.put(urlMapping, formula);
        }

        function deleteTargetingRule(id) {
            return $http.delete(urlMapping + id);
        }

        function updateSyncEntities(formulas) {
            var requests = utilsService.generateRequestList(formulas, {url: urlMapping + 'entities', method: 'PUT'});
            return requests && requests.length ? syncHttpService.http(requests) : null;
        }

        function createSyncEntities(formulas) {
            var requests = utilsService.generateRequestList(formulas, {url: urlMapping + 'entities', method: 'POST'});
            return requests && requests.length ? syncHttpService.http(requests) : null;
        }

        function exportOne(id) {
            window.open(urlMapping + id + '?export');
        }

        function exportAll() {
            window.open(urlMapping + '?export');
        }

    }
})();

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
(function() {
    'use strict';

    angular
        .module('app.telemetrytwotestpage')
        .factory('telemetryTwoTestPageService', service);

    service.$inject = ['$http'];

    function service($http) {
        var API_URL = 'telemetry/v2/testpage';

        return {
            getMatchedRules: getMatchedRules
        };

        function getMatchedRules(params) {
            return $http.post(API_URL, params);
        }
    }
})();

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
(function() {
    'use strict';

    angular
        .module('app.telemetryTestPage')
        .factory('telemetryTestPageService', service);

    service.$inject = ['$http'];

    function service($http) {
        var API_URL = 'telemetry/testpage';

        return {
            getMatchedRules: getMatchedRules
        };

        function getMatchedRules(params) {
            return $http.post(API_URL, params);
        }
    }
})();

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
(function () {
    'use strict';

    angular
        .module('app.telemetrytwochange')
        .factory('telemetryTwoChangeService', service);

    service.$inject = ['$http', 'telemetryTwoProfileService', 'CHANGE_ENTITY_TYPE'];

    function service($http, telemetryTwoProfileService, CHANGE_ENTITY_TYPE) {
        var API_URL = 'telemetry/v2/change';

        return {
            getApprovedPage: getApprovedPage,
            getChangePage: getChangePage,
            getFilteredApprovedChanges: getFilteredApprovedChanges,
            getFilteredChanges: getFilteredChanges,
            approve: approve,
            cancel: cancel,
            revert: revert,
            getEntityView: getEntityView,
            getEntityName: getEntityName,
            getChangedEntityIds: getChangedEntityIds,
            cancelChangesByEntityId: cancelChangesByEntityId,
            approveChanges: approveChanges,
            revertChanges: revertChanges
        };

        function getApprovedPage(pageSize, pageNumber) {
            return $http.get(API_URL + '/approved/grouped/byId?pageSize=' + pageSize + '&pageNumber=' + pageNumber);
        }

        function getFilteredApprovedChanges(pageSize, pageNumber, searchParam) {
            return $http.post(API_URL + '/approved/filtered?pageSize=' + pageSize + '&pageNumber=' + pageNumber, searchParam)
        }

        function getChangePage(pageSize, pageNumber) {
            return $http.get(API_URL + '/changes/grouped/byId?pageSize=' + pageSize + '&pageNumber=' + pageNumber);
        }

        function getFilteredChanges(pageSize, pageNumber, searchParam) {
            return $http.post(API_URL + '/changes/filtered?pageSize=' + pageSize + '&pageNumber=' + pageNumber, searchParam)
        }

        function approve(changeId) {
            return $http.get(API_URL + '/approve/' + changeId);
        }

        function cancel(changeId) {
            return $http.get(API_URL + '/cancel/' + changeId);
        }

        function revert(changeId) {
            return $http.get(API_URL + '/revert/' + changeId);
        }

        function getEntityView(oldEntity, newEntity) {
            return telemetryTwoProfileService.getProfileView(oldEntity, newEntity);
        }

        function getEntityName(change) {
            if (CHANGE_ENTITY_TYPE.TELEMETRY_TWO_PROFILE === change.entityType) {
                return telemetryTwoProfileService.getProfileName(getNotEmptyEntity(change.oldEntity, change.newEntity));
            }
            return change.entityId;
        }

        function getNotEmptyEntity(oldEntity, newEntity) {
            if (oldEntity) {
                return oldEntity;
            } else if (newEntity) {
                return newEntity;
            }
            return {};
        }

        function getChangedEntityIds() {
            return $http.get(API_URL + '/entityIds');
        }

        function cancelChangesByEntityId(entityIds, notApprovedIds) {
            return $http.post(API_URL + '/cancel/byEntityIds', { entityIds: entityIds, changeIdsToExclude: notApprovedIds });
        }

        function approveChanges(changeIds) {
            return $http.post(API_URL + '/approveChanges', changeIds);
        }

        function revertChanges(changeIds) {
            return $http.post(API_URL + '/revertChanges', changeIds);
        }
    }
})();
