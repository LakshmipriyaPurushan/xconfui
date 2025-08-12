/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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

    angular.module('app', [
        /*
         * Order is not important.
         */

        /*
         * Everybody has access to these.
         * We could place these under every feature area,
         * but this is easier to maintain.
         */
        'app.services',
        'app.core',

        /*
         * Feature areas
         */

        'ui.bootstrap',

        'ngAnimate',
        'ngCookies',
        'ngTable',
        'ngResource',
        'toastr',
        'dialogs.main',
        'ngStorage',
        'ui.bootstrap.datetimepicker',
        'ngFileSaver',


        'app.filters',
        'app.directives',
        'app.filtered-select',
        'app.firmwareconfig',
        'app.firmwarerule',
        'app.firmwareruletemplate',
        'app.model',
        'app.environment',
        'app.settingprofile',
        'app.settingrule',
        'app.permanentprofile',
        'app.telemetrytwoprofile',
        'app.targetingrule',
        'app.telemetrytwotargetingrule',
        'app.telemetrytwotestpage',
        'app.formula',
        'app.namespacedlist',
        'app.permanentprofileFilters',
        'app.telemetrytwoprofileFilters',
        'app.namespacedlist',
        'app.vodsettings',
        'app.uploadRepository',
        'app.devicesettings',
        'app.changeLog',
        'app.statistics',
        'app.testpage',
        'app.telemetryTestPage',
        'app.settingsTestPage',
        'app.firmwareTestPage',
        'app.log',
        'app.loguploadsettings',
        'app.roundrobinfilter',
        'app.firmwareReportPage',
        'app.percentfilter',
        'app.migration',
        'app.feature',
        'app.featurerule',
        'app.sharedTestPage',
        'app.distributionFilter',
        'app.controller',
        'app.activation-version',
        'app.change',
        'app.telemetrytwochange',
        'app.authorization',
        'app.penetrationData'
    ])
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
})();
angular
    .module('app.config', ['ui.router'])

    .constant('PERMISSION', {
        'PERMIT_ALL': 'permitAll',

        'READ_COMMON': 'read-common',
        'WRITE_COMMON': 'write-common',


        'READ_FIRMWARE': 'read-firmware',
        'READ_FIRMWARE_ALL': 'read-firmware-*',
        'READ_FIRMWARE_STB': 'read-firmware-stb',
        'READ_FIRMWARE_RDKCLOUD': 'read-firmware-rdkcloud',

        'WRITE_FIRMWARE': 'write-firmware',
        'WRITE_FIRMWARE_ALL': 'write-firmware-*',
        'WRITE_FIRMWARE_STB': 'write-firmware-stb',
        'WRITE_FIRMWARE_RDKCLOUD': 'write-firmware-rdkcloud',

        'READ_DCM': 'read-dcm',
        'READ_DCM_ALL': 'read-dcm-*',
        'READ_DCM_STB': 'read-dcm-stb',
        'READ_DCM_RDKCLOUD': 'read-dcm-rdkcloud',

        'WRITE_DCM': 'write-dcm',
        'WRITE_DCM_ALL': 'write-dcm-*',
        'WRITE_DCM_STB': 'write-dcm-stb',
        'WRITE_DCM_RDKCLOUD': 'write-dcm-rdkcloud',

        'READ_TELEMETRY': 'read-telemetry',
        'READ_TELEMETRY_ALL': 'read-telemetry-*',
        'READ_TELEMETRY_STB': 'read-telemetry-stb',
        'READ_TELEMETRY_RDKCLOUD': 'read-telemetry-rdkcloud',

        'WRITE_TELEMETRY': 'write-telemetry',
        'WRITE_TELEMETRY_ALL': 'write-telemetry-*',
        'WRITE_TELEMETRY_STB': 'write-telemetry-stb',
        'WRITE_TELEMETRY_RDKCLOUD': 'write-telemetry-rdkcloud',

        'READ_CHANGES_ALL': 'read-changes-*',
        'READ_CHANGES_STB': 'read-changes-stb',
        'READ_CHANGES_RDKCLOUD': 'read-changes-rdkcloud',

        'WRITE_CHANGES_ALL': 'write-changes-*',
        'WRITE_CHANGES_STB': 'write-changes-stb',
        'WRITE_CHANGES_RDKCLOUD': 'write-changes-rdkcloud',

        'VIEW_TOOLS': 'view-tools',
        'WRITE_TOOLS': 'write-tools',

        'READ_FIRMWARE_RULE_TEMPLATES': 'read-firmware-rule-templates',
        'WRITE_FIRMWARE_RULE_TEMPLATES': 'write-firmware-rule-templates',

        'READ_FIRMWARE_PERMISSIONS': [
            'read-firmware-*', 'read-firmware-stb', 'read-firmware-rdkcloud'
        ],
        'WRITE_FIRMWARE_PERMISSIONS': [
            'write-firmware-*', 'write-firmware-stb', 'write-firmware-rdkcloud'
        ],

        'READ_DCM_PERMISSIONS': [
            'read-dcm-*', 'read-dcm-stb', 'read-dcm-rdkcloud'
        ],
        'WRITE_DCM_PERMISSIONS': [
            'write-dcm-*', 'write-dcm-stb', 'write-dcm-rdkcloud'
        ],

        'READ_TELEMETRY_PERMISSIONS': [
            'read-telemetry-*', 'read-telemetry-stb', 'read-telemetry-rdkcloud'
        ],
        'WRITE_TELEMETRY_PERMISSIONS': [
            'write-telemetry-*', 'write-telemetry-stb', 'write-telemetry-rdkcloud'
        ],

        'READ_CHANGES_PERMISSIONS': [
            'read-changes-*', 'read-changes-stb', 'read-changes-rdkcloud'
        ],
        'WRITE_CHANGES_PERMISSIONS': [
            'write-changes-*', 'write-changes-stb', 'write-changes-rdkcloud'
        ]
    })

    .constant('ENTITY_TYPE', {
        'MODEL': 'Model',
        'ENVIRONMENT': 'Environment',
        'MAC_LIST': 'MAC_LIST',
        'IP_LIST': 'IP_LIST',
        'NS_LIST': 'NS_LIST',
        'PERCENT_FILTER': 'PERCENT_FILTER'
    })

    .constant('SETTING_TYPE', {
        'EPON': 'EPON',
        'PARTNER_SETTINGS': 'PARTNER_SETTINGS'
    })

    .constant('PROTOCOL', {
        'TFTP': 'TFTP',
        'SFTP': 'SFTP',
        'HTTP': 'HTTP',
        'HTTPS': 'HTTPS',
        'SCP': 'SCP',
        'S3': 'S3'
    })

    .constant('RELATION', {
        'AND': 'AND',
        'OR': 'OR'
    })

    .constant('OPERATION', {
        'IS': 'IS',
        'IN': 'IN',
        'IN_LIST': 'IN_LIST',
        'LTE': 'LTE',
        'GTE': 'GTE',
        'LIKE': 'LIKE',
        'PERCENT': 'PERCENT',
        'RANGE': 'RANGE',
        'EXISTS': 'EXISTS',
        'MATCH': 'MATCH'
    })

    .constant('OPERATION_ARRAY', [
        'IS',
        'IN',
        'IN_LIST',
        'LTE',
        'GTE',
        'LIKE',
        'PERCENT',
        'EXISTS',
        'MATCH'
    ])

    .constant('FIRMWARE_RULE_OPERATION_ARRAY', [
        'IS',
        'IN',
        'IN_LIST',
        'LIKE',
        'PERCENT',
        'EXISTS'
    ])

    .constant('PERCENTAGE_BEAN_OPERATION_ARRAY', [
        'IS',
        'IN',
        'IN_LIST',
        'LIKE',
        'EXISTS'
    ])

    .constant('TARGETING_RULE_OPERATION_ARRAY', [
        'IS',
        'IN_LIST',
        'LIKE',
        'PERCENT',
        'EXISTS'
    ])

    .constant('SETTING_RULE_OPERATION_ARRAY', [
        'IS',
        'IN_LIST',
        'LIKE',
        'PERCENT',
        'EXISTS'
    ])

    .constant('RFC_RULE_OPERATION_ARRAY', [
        'IS',
        'IN_LIST',
        'LIKE',
        'PERCENT',
        'RANGE',
        'EXISTS'
    ])

    .constant('TIME_FREE_ARG_OPERATION_ARRAY', [
        'LTE',
        'GTE'
    ])

    .constant('FIRMWARE_RULE_TYPE', {
        'MAC_RULE': 'MAC_RULE',
        'IP_RULE': 'IP_RULE',
        'ENV_MODEL_RULE': 'ENV_MODEL_RULE',

        'DOWNLOAD_LOCATION_FILTER': 'DOWNLOAD_LOCATION_FILTER',
        'TIME_FILTER': 'TIME_FILTER',
        'IP_FILTER': 'IP_FILTER',
        'REBOOT_IMMEDIATELY_FILTER': 'REBOOT_IMMEDIATELY_FILTER'
    })

    .constant('APPLICABLE_ACTION_TYPE', {
        'RULE': {
            name: 'RULE',
            class: 'xconf.firmware.RuleAction'
        },
        'DEFINE_PROPERTIES': {
            name: 'DEFINE_PROPERTIES',
            class: 'xconf.firmware.DefinePropertiesAction'
        },
        'BLOCKING_FILTER': {
            name: 'BLOCKING_FILTER',
            class: 'xconf.firmware.BlockingFilterAction'
        },

        'RULE_TEMPLATE': {
            name: 'RULE_TEMPLATE',
            class: 'xconf.firmware.RuleAction'
        },
        'DEFINE_PROPERTIES_TEMPLATE': {
            name: 'DEFINE_PROPERTIES_TEMPLATE',
            class: 'xconf.firmware.DefinePropertiesTemplateAction'
        },
        'BLOCKING_FILTER_TEMPLATE': {
            name: 'BLOCKING_FILTER_TEMPLATE',
            class: 'xconf.firmware.BlockingFilterAction'
        },

        'getActionTypeByName': function (actionTypeName) {
            switch (actionTypeName) {
                case this.RULE.name:
                    return this.RULE;
                case this.DEFINE_PROPERTIES.name:
                    return this.DEFINE_PROPERTIES;
                case this.BLOCKING_FILTER.name:
                    return this.BLOCKING_FILTER;

                case this.RULE_TEMPLATE.name:
                    return this.RULE_TEMPLATE;
                case this.DEFINE_PROPERTIES_TEMPLATE.name:
                    return this.DEFINE_PROPERTIES_TEMPLATE;
                case this.BLOCKING_FILTER_TEMPLATE.name:
                    return this.BLOCKING_FILTER_TEMPLATE;
            }
        }
    })

    .constant('SETTINGS_AVAILABILITY_KEYS', {
        DEVICE_SETTINGS: 'deviceSettings',
        VOD_SETTINGS: 'vodSettings',
        LOG_UPLOAD_SETTINGS: 'logUploadSettings'
    })

    .constant('EDIT_MODE', {
        'CREATE': 'CREATE',
        'UPDATE': 'UPDATE'
    })

    .constant('NAMESPACED_LIST_TYPE', {
        IP_LIST: 'IP_LIST',
        MAC_LIST: 'MAC_LIST',
        RI_MAC_LIST: 'RI_MAC_LIST'
    })

    .constant('MODES_TO_GET_LOG_FILES', {
        LOG_FILES: 'LogFiles',
        LOG_FILES_GROUP: 'LogFilesGroup',
        ALL_LOG_FILES: 'AllLogFiles'
    })

    .constant('SCHEDULE_TYPE', {
        ACT_NOW: 'ActNow',
        CRON_EXPRESSION: 'CronExpression',
        WHOLE_DAY_RANDOMIZED: 'WholeDayRandomized'
    })

    .constant('FIRMWARE_FREE_ARG_AUTOCOMPLETE_VALUE', [
        'eStbMac',
        'eCMMac',
        'env',
        'model',
        'firmwareVersion',
        'accountId',
        'channelMapId',
        'controllerId',
        'partnerId',
        'vodId',
        'capabilities',
        'ipAddress',
        'serial',
        'timeZone',
        'time',
    ])

    .constant('LOG_UPLOAD_FREE_ARG_AUTOCOMPLETE_VALUE', [
        'estbIP',
        'estbMacAddress',
        'ecmMacAddress',
        'env',
        'model',
        'firmwareVersion',
        'accountId',
        'channelMapId',
        'controllerId',
        'partnerId',
        'vodId',
        'experience',
        'version',
    ])

    .constant('FREE_ARG_NAME', {
        ESTB_MAC: 'eStbMac',
        ESTB_MAC_ADDRESS: 'estbMacAddress',
        ECM_MAC: 'eCMMac',
        ECM_MAC_ADDRESS: 'ecmMacAddress'
    })

    .constant('CAPABILITIES', [
        'RCDL',
        'supportsFullHttpUrl',
        'rebootDecoupled'
    ])

    .constant('RULE_SEARCH_OPTIONS', {
        data: [
            {
                "name": {
                    friendlyName: "Name",
                    apiArgs: ["NAME"]
                }
            },
            {
                "name": {
                    friendlyName: 'Key',
                    apiArgs: ['FREE_ARG']
                }
            },
            {
                "name": {
                    friendlyName: 'Value',
                    apiArgs: ['FIXED_ARG']
                }
            },
            {
                "name": {
                    friendlyName: 'Key and Value',
                    apiArgs: ['FREE_ARG', 'FIXED_ARG']
                }
            }
        ]

    })

    .constant('TIME_ZONES', [
        'UTC',
        'Local time'
    ])

    .constant('SEARCH_OPTIONS', {
        TEMPLATE_ID: 'TEMPLATE_ID',
        NAME: 'NAME',
        APPLICABLE_ACTION_TYPE: 'APPLICABLE_ACTION_TYPE'
    })

    .constant('APPLICATION_TYPES', [
        'stb',
        'rdkcloud'
    ])

    .constant('SINGLE_APPLICATION_TYPE_PAGE', [
        'environment',
        'model',
        'namespacedlist',
        'firmwareruletemplate'
    ])

    .constant('APPLICATION_TYPE', {
        STB: 'stb',
        RDKCLOUD: 'rdkcloud'
    })
    .constant('CHANGE_TYPE', {
        PENDING: 'PENDING',
        APPROVED: 'APPROVED'
    })

    .constant('CHANGE_OPERATION', {
        APPROVE: 'APPROVE',
        REVERT: 'REVERT'
    })

    .constant('CHANGE_ENTITY_TYPE', {
        TELEMETRY_PROFILE: 'TELEMETRY_PROFILE',
        TELEMETRY_TWO_PROFILE: 'TELEMETRY_TWO_PROFILE'
    });


/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.config')
        .config(state)
        .run(['$log', '$window', '$location', '$rootScope', '$state', 'dialogs', '$cookies', '$localStorage', 'utilsService', 'alertsService', 'authUtilsService', 'PERMISSION', 'authService', 'dialogsService', 'AUTH_EVENT', 'APPLICATION_TYPES', 'authorizationService',
            function ($log, $window, $location, $rootScope, $state, $dialogs, $cookies, $localStorage, utilsService, alertsService, authUtilsService, PERMISSION, authService, dialogsService, AUTH_EVENT, APPLICATION_TYPES, authorizationService) {
                $rootScope.$state = $state;
                $rootScope.authUtils = authUtilsService;
                $rootScope.PERMISSION = PERMISSION;
                $rootScope.currentTime = new Date();
                $rootScope.APPLICATION_TYPES = APPLICATION_TYPES;
                $rootScope.availableApplicationTypes = APPLICATION_TYPES;
                $rootScope.changeApplicationType = changeApplicationType;

                $rootScope.signOut = signOut;
                $rootScope.isAuthorized = authUtilsService.isAuthorized;

                restoreApplicationType();
                setAdminUrlCookie();

                function setAdminUrlCookie() {
                    $cookies.put('admin-ui-location', $window.location.origin);
                }


                async function setAuthInfoIfAuthorized() {
                    if ($cookies.get('token')) {
                        let userInfoResp = await authService.getAuthInfo();
                        $rootScope.currentUser = userInfoResp.data;
                        return userInfoResp.data;
                    }
                }

                authorizationService.getAuthProvider().then(function (resp) {
                    $rootScope.authProvider = resp.data.name;
                }, function (error) {
                    alertsService.showError({ title: 'Error', message: error.data.message });
                });

                function signOut() {
                        authorizationService.aclSignOut().then(function (resp) {
                            cleanUpAuthData();
                            $state.go('authorization');
                        }, function (error) {
                            alertsService.showError({ title: 'Login Error', message: error.data.message });
                        });
                }

                function cleanUpAuthData() {
                    $rootScope.currentUser = null;
                    $cookies.remove("token");
                }

                $window.onfocus = function () {
                    saveCurrentHash();
                };

                function saveCurrentHash() {
                    if ($window.location.hash !== '#/authorization') {
                        $localStorage['xconfCurrentHash'] = $window.location.hash;
                    }
                }

                $rootScope.$on(AUTH_EVENT.UNAUTHORIZED, function (event, message) {
                    event.preventDefault();
                    delete $cookies.get('token');
                    dialogsService.showConfirmAsSingleton('Session expired', "Your session has expired. Would you like to log in again?", null, function () {
                        $localStorage['xconfCurrentHash'] = $window.location.hash;
                        $state.go('authorization');
                        /* provide loginForm*/
                    });
                });

                $rootScope.$on(AUTH_EVENT.NO_ACCESS, function (event, message) {
                    event.preventDefault();
                    dialogsService.showErrorAsSingleton('Access is denied', "You don't have permission to perform this action");
                });

                $rootScope.$on('$locationChangeSuccess', function (evt) {
                    $rootScope.currentTime = new Date();
                    var hash = $window.location.hash;
                    saveCurrentHash();
                });

                $rootScope.$on('$stateChangeStart', async function (event, next) {
                    if (angular.isDefined(next.data)) {

                        var permissions = next.data.permissions;
                        var user = await setAuthInfoIfAuthorized();

                        var applicationTypes = authUtilsService.getAvailableApplicationTypes(user.permissions);
                        $rootScope.availableApplicationTypes = applicationTypes;

                        var isDevProfile = user && user.username === 'dev' &&
                            Array.isArray(user.permissions) && (user.permissions.indexOf(PERMISSION.PERMIT_ALL) > -1);

                        if ($state.current.name !== 'authorization' && !$cookies.get('token') && !isDevProfile) {
                            event.preventDefault();
                            $rootScope.$broadcast(AUTH_EVENT.UNAUTHORIZED);
                        } else if (!authUtilsService.hasOneOfPermissions(permissions)) {
                            event.preventDefault();
                            $rootScope.$broadcast(AUTH_EVENT.NO_ACCESS);
                        } else {

                            if (applicationTypes.length > 0 && applicationTypes.indexOf($rootScope.applicationType) < 0) {
                                var activeType = applicationTypes[0];
                                let applicationTypeCookie = $cookies.get('applicationType');
                                if (applicationTypeCookie && $rootScope.availableApplicationTypes.includes(applicationTypeCookie)) {
                                    $rootScope.applicationType = applicationTypeCookie;
                                } else {
                                    $cookies.put('applicationType', activeType);
                                    $rootScope.applicationType = activeType;
                                }
                            }
                        }
                    }
                });

                var isNewTab = initNewTabName();
                function initNewTabName() {
                    var isNewTab = !window.name; // true, if a new tab was opened

                    if (isNewTab) {
                        window.name = 'xconf';
                    }
                    return isNewTab;
                }

                removeTokenParamFromUrl();
                function removeTokenParamFromUrl() {
                    let search = window.location.search.substr(1);
                    let storedHash = $localStorage['xconfCurrentHash'];
                    let currentHash = $window.location.hash;

                    if (!currentHash.includes('#/authorization') && (search || storedHash)) {
                        setTimeout(function () { // hack for chrome
                            if (search) {
                                window.location.search = getNewSearch(search);
                            }
                            if (!isNewTab && storedHash && storedHash !== '#/') {
                                console.log('Restoring hash: ' + storedHash);
                                $window.location.hash = storedHash;
                            }
                        }, 100);
                    }
                }

                function getNewSearch(search) {
                    var params = search.split('&');
                    for (var i = 0; i < params.length; i++) {
                        if (params[i].startsWith('token=')) {
                            params.splice(i, 1);
                        }
                    }

                    var newSearch = '';
                    if (params.length > 0) {
                        newSearch = '?' + params.join('&');
                    }
                    return newSearch;
                }

                function changeApplicationType(applicationType) {
                    if (applicationType) {
                        $cookies.put('applicationType', applicationType);
                        $rootScope.$broadcast('applicationType:changed', {
                            applicationType: applicationType
                        });
                    }
                }

                function restoreApplicationType() {
                    var savedApplicationType = $cookies.get('applicationType');
                    if (savedApplicationType) {
                        $rootScope.applicationType = savedApplicationType;
                    } else {
                        var application = authUtilsService.getApplicationType();
                        $rootScope.applicationType = application;
                        $cookies.put('applicationType', application);
                    }
                }
            }]);

    state.$inject = ['$httpProvider', '$stateProvider', '$urlRouterProvider', 'PERMISSION'];

    function state($httpProvider, $stateProvider, $urlRouterProvider, PERMISSION) {
        $urlRouterProvider.otherwise(function ($injector, $location) {
            var authUtilsService = $injector.get('authUtilsService');
            var hash = $injector.$localStorage ? $injector.$localStorage['xconfCurrentHash'] : null;
            var page = 'environments';

            if (hash && hash !== '#/authorization') {
                page = hash;
            } else if (authUtilsService.hasOneOfPermissions([PERMISSION.READ_COMMON])) {
                page = 'environments';
            } else if (authUtilsService.canReadFirmware()) {
                page = 'firmwareconfigs';
            } else if (authUtilsService.canReadDcm()) {
                page = 'formulas';
            } else if (authUtilsService.canReadTelemetry()) {
                page = 'permanentprofiles';
            } else if (authUtilsService.hasPermission(PERMISSION.VIEW_TOOLS)) {
                page = 'statistics';
            }

            $injector.get('$state').go(page);
        });

        $stateProvider
            .state('authorization', {
                controller: 'AuthorizationController',
                controllerAs: 'vm',
                url: '/authorization',
                templateUrl: 'app/xconf/authorization/authorization.html'
            })
            .state('firmwareconfigs', {
                controller: 'FirmwareConfigController',
                controllerAs: 'vm',
                url: '/firmwareconfig/all',
                templateUrl: 'app/xconf/firmware/firmwareconfig/firmwareconfigs.html',
                data: {
                    permissions: PERMISSION.READ_FIRMWARE_PERMISSIONS
                }
            })
            .state('firmwareconfig-edit', {
                controller: 'FirmwareConfigEditController',
                controllerAs: 'vm',
                url: '/firmwareconfig/edit/:firmwareConfigId',
                templateUrl: 'app/xconf/firmware/firmwareconfig/firmwareconfig-edit.html',
                data: {
                    permissions: PERMISSION.WRITE_FIRMWARE_PERMISSIONS
                }
            })
            .state('firmwareconfig-import', {
                controller: 'FirmwareConfigImportController',
                controllerAs: 'vm',
                url: '/firmwareconfig/import',
                templateUrl: 'app/xconf/firmware/firmwareconfig/firmwareconfig.import.html',
                data: {
                    permissions: PERMISSION.WRITE_FIRMWARE_PERMISSIONS
                }
            })

            .state('models', {
                controller: 'ModelController',
                controllerAs: 'vm',
                url: '/model/all',
                templateUrl: 'app/xconf/firmware/model/models.html',
                data: {
                    permissions: [PERMISSION.READ_COMMON]
                }
            })
            .state('model-edit', {
                controller: 'ModelEditController',
                controllerAs: 'vm',
                url: '/model/edit/:entityId',
                templateUrl: 'app/xconf/firmware/model/model-edit.html',
                data: {
                    permissions: [PERMISSION.WRITE_COMMON]
                }
            })
            .state('model-import', {
                controller: 'ModelImportController',
                controllerAs: 'vm',
                url: '/model/import',
                templateUrl: 'app/xconf/firmware/model/model.import.html',
                data: {
                    permissions: [PERMISSION.WRITE_COMMON]
                }
            })

            .state('environments', {
                controller: 'EnvironmentsController',
                controllerAs: 'vm',
                url: '/environment/all',
                templateUrl: 'app/xconf/firmware/environment/environments.html',
                data: {
                    permissions: [PERMISSION.READ_COMMON]
                }
            })
            .state('environment-edit', {
                controller: 'EnvironmentEditController',
                controllerAs: 'vm',
                url: '/environment/edit/:entityId',
                templateUrl: 'app/xconf/firmware/environment/environment-edit.html',
                data: {
                    permissions: [PERMISSION.WRITE_COMMON]
                }
            })
            .state('environment-import', {
                controller: 'EnvironmentImportController',
                controllerAs: 'vm',
                url: '/environment/import',
                templateUrl: 'app/xconf/firmware/environment/environment.import.html',
                data: {
                    permissions: [PERMISSION.WRITE_COMMON]
                }
            })
            .state('changelog', {
                controller: 'ChangeLogController',
                controllerAs: 'vm',
                url: '/changelog',
                templateUrl: 'app/shared/changelog/changelog.html',
                data: {
                    permissions: [PERMISSION.VIEW_TOOLS]
                }
            })
            .state('statistics', {
                controller: 'StatisticsController',
                controllerAs: 'vm',
                url: '/statistics',
                templateUrl: 'app/shared/statistics/statistics.html',
                data: {
                    permissions: [PERMISSION.VIEW_TOOLS]
                }
            })
            .state('changes', {
                controller: 'ChangeController',
                controllerAs: 'vm',
                url: '/changes',
                templateUrl: 'app/xconf/changes/change.html',
                data: {
                    permissions: PERMISSION.READ_CHANGES_PERMISSIONS
                }
            })
            .state('telemetrytwochanges', {
                controller: 'TelemetryTwoChangeController',
                controllerAs: 'vm',
                url: '/telemetrytwochanges',
                templateUrl: 'app/xconf/telemetrytwochanges/telemetrytwochange.html',
                data: {
                    permissions: PERMISSION.READ_CHANGES_PERMISSIONS
                }
            })
            .state('permanentprofiles', {
                controller: 'PermanentProfilesController',
                controllerAs: 'vm',
                url: '/permanentprofile/all',
                templateUrl: 'app/xconf/telemetry/permanentprofile/permanentprofiles.html',
                data: {
                    permissions: PERMISSION.READ_TELEMETRY_PERMISSIONS
                }
            })
            .state('permanentprofile-edit', {
                controller: 'PermanentProfileEditController',
                controllerAs: 'vm',
                url: '/permanentprofile/edit/:profileId',
                templateUrl: 'app/xconf/telemetry/permanentprofile/permanentprofile.edit.html',
                data: {
                    permissions: PERMISSION.WRITE_TELEMETRY_PERMISSIONS
                }
            })
            .state('permanentprofile-import', {
                controller: 'PermanentProfileImportController',
                controllerAs: 'vm',
                url: '/permanentprofile/import',
                templateUrl: 'app/xconf/telemetry/permanentprofile/permanentprofile.import.html',
                data: {
                    permissions: PERMISSION.WRITE_TELEMETRY_PERMISSIONS
                }
            })
            .state('telemetrytwoprofiles', {
                controller: 'TelemetryTwoProfilesController',
                controllerAs: 'vm',
                url: '/telemetrytwoprofiles/all',
                templateUrl: 'app/xconf/telemetry/telemetrytwoprofile/telemetrytwoprofiles.html',
                data: {
                    permissions: PERMISSION.READ_TELEMETRY_PERMISSIONS
                }
            })
            .state('telemetrytwoprofile-edit', {
                controller: 'TelemetryTwoProfileEditController',
                controllerAs: 'vm',
                url: '/telemetrytwoprofile/edit/:telemetryProfileId',
                templateUrl: 'app/xconf/telemetry/telemetrytwoprofile/telemetrytwoprofile.edit.html',
                data: {
                    permissions: PERMISSION.WRITE_TELEMETRY_PERMISSIONS
                }
            })
            .state('telemetrytwoprofile-import', {
                controller: 'TelemetryTwoProfileImportController',
                controllerAs: 'vm',
                url: '/telemetrytwoprofile/import',
                templateUrl: 'app/xconf/telemetry/telemetrytwoprofile/telemetrytwoprofile.import.html',
                data: {
                    permissions: PERMISSION.WRITE_TELEMETRY_PERMISSIONS
                }
            })
            .state('targetingrules', {
                controller: 'TargetingRulesController',
                controllerAs: 'vm',
                url: '/targetingrule/all',
                templateUrl: 'app/xconf/telemetry/targetingrule/targetingrules.html',
                data: {
                    permissions: PERMISSION.READ_TELEMETRY_PERMISSIONS
                }
            })
            .state('targetingrule-edit', {
                controller: 'TargetingRuleEditController',
                controllerAs: 'vm',
                url: '/targetingrule/edit/:ruleId',
                templateUrl: 'app/xconf/telemetry/targetingrule/targetingrule.edit.html',
                data: {
                    permissions: PERMISSION.WRITE_TELEMETRY_PERMISSIONS
                }
            })
            .state('targetingrule-import', {
                controller: 'TargetingRuleImportController',
                controllerAs: 'vm',
                url: '/targetingrule/import',
                templateUrl: 'app/xconf/telemetry/targetingrule/targetingrule.import.html',
                data: {
                    permissions: PERMISSION.WRITE_TELEMETRY_PERMISSIONS
                }
            })
            .state('telemetrytwotargetingrules', {
                controller: 'TelemetryTwoTargetingRulesController',
                controllerAs: 'vm',
                url: '/telemetrytwo/targetingrule/all',
                templateUrl: 'app/xconf/telemetry/telemetrytwotargetingrule/telemetrytwotargetingrules.html',
                data: {
                    permissions: PERMISSION.READ_TELEMETRY_PERMISSIONS
                }
            })
            .state('telemetrytwotargetingrule-edit', {
                controller: 'TelemetryTwoTargetingRuleEditController',
                controllerAs: 'vm',
                url: '/telemetrytwo/targetingrule/edit/:ruleId',
                templateUrl: 'app/xconf/telemetry/telemetrytwotargetingrule/telemetrytwotargetingrule.edit.html',
                data: {
                    permissions: PERMISSION.WRITE_TELEMETRY_PERMISSIONS
                }
            })
            .state('telemetrytwotargetingrule-import', {
                controller: 'TelemetryTwoTargetingRuleImportController',
                controllerAs: 'vm',
                url: '/telemetrytwo/targetingrule/import',
                templateUrl: 'app/xconf/telemetry/telemetrytwotargetingrule/telemetrytwotargetingrule.import.html',
                data: {
                    permissions: PERMISSION.WRITE_TELEMETRY_PERMISSIONS
                }
            })
            .state('testpage-telemetry', {
                controller: 'SharedTestPageController',
                controllerAs: 'vm',
                url: '/telemetry/testpage',
                templateUrl: 'app/shared/pages/testpage/testpage.html',
                data: {
                    permissions: PERMISSION.READ_TELEMETRY_PERMISSIONS,
                    pageName: 'Telemetry',
                    pageType: 'TELEMETRY',
                    matchRuleApiUrl: 'telemetry/testpage/'
                }
            })
            .state('testpage-telemetrytwo', {
                controller: 'TelemetryTwoTestPageController',
                controllerAs: 'vm',
                url: '/telemetrytwo/testpage',
                templateUrl: 'app/xconf/telemetry/telemetrytwotestpage/telemetrytwotestpage.html',
                data: {
                    permissions: PERMISSION.READ_TELEMETRY_PERMISSIONS
                }
            })
            .state('settings-testpage', {
                controller: 'SharedTestPageController',
                controllerAs: 'vm',
                url: '/settings/testpage',
                templateUrl: 'app/shared/pages/testpage/testpage.html',
                data: {
                    permissions: PERMISSION.READ_DCM_PERMISSIONS,
                    pageName: 'Settings',
                    pageType: 'SETTINGS',
                    matchRuleApiUrl: 'settings/testpage'
                }
            })

            .state('feature', {
                controller: 'FeatureController',
                controllerAs: 'vm',
                url: '/feature',
                templateUrl: 'app/xconf/rfc/feature/feature.html',
                data: {
                    permissions: PERMISSION.READ_DCM_PERMISSIONS
                }
            })

            .state('feature-edit', {
                controller: 'FeatureEditController',
                controllerAs: 'vm',
                url: '/feature/edit/:featureId',
                templateUrl: 'app/xconf/rfc/feature/feature-edit.html',
                data: {
                    permissions: PERMISSION.WRITE_DCM_PERMISSIONS
                }
            })

            .state('feature-import', {
                controller: 'FeatureImportController',
                controllerAs: 'vm',
                url: '/feature/import',
                templateUrl: 'app/xconf/rfc/feature/feature-import.html',
                data: {
                    permissions: PERMISSION.WRITE_DCM_PERMISSIONS
                }
            })

            .state('featurerule', {
                controller: 'FeatureRuleController',
                controllerAs: 'vm',
                url: '/featurerule',
                templateUrl: 'app/xconf/rfc/featurerule/featurerule.html',
                resolve: {
                    featureRulesSize: function (featureRuleService, alertsService) {
                        return featureRuleService.getFeatureRulesSize().then(
                            function (result) {
                                return result.data;
                            }, function (reason) {
                                alertsService.showError({ message: reason.data, title: 'Error' });
                            }
                        );
                    }
                },
                data: {
                    permissions: PERMISSION.READ_DCM_PERMISSIONS
                }
            })

            .state('featurerule-edit', {
                controller: 'FeatureRuleEditController',
                controllerAs: 'vm',
                url: '/featurerule/edit/:featureRuleId?featureRulesSize',
                templateUrl: 'app/xconf/rfc/featurerule/featurerule-edit.html',
                data: {
                    permissions: PERMISSION.WRITE_DCM_PERMISSIONS
                }
            })

            .state('featurerule-import', {
                controller: 'FeatureRuleImportController',
                controllerAs: 'vm',
                url: '/featurerule/import',
                templateUrl: 'app/xconf/rfc/featurerule/featurerule-import.html',
                data: {
                    permissions: PERMISSION.WRITE_DCM_PERMISSIONS
                }
            })

            .state('settingprofiles', {
                controller: 'SettingProfilesController',
                controllerAs: 'vm',
                url: '/settingprofiles/all',
                templateUrl: 'app/xconf/settings/settingprofile/settingprofiles.html',
                data: {
                    permissions: PERMISSION.READ_DCM_PERMISSIONS
                }
            })
            .state('settingprofile-edit', {
                controller: 'SettingProfileEditController',
                controllerAs: 'vm',
                url: '/settingprofile/edit/:profileId',
                templateUrl: 'app/xconf/settings/settingprofile/settingprofile.edit.html',
                data: {
                    permissions: PERMISSION.WRITE_DCM_PERMISSIONS
                }
            })
            .state('settingprofile-import', {
                controller: 'SettingProfileImportController',
                controllerAs: 'vm',
                url: '/settingprofile/import',
                templateUrl: 'app/xconf/settings/settingprofile/settingprofile.import.html',
                data: {
                    permissions: PERMISSION.WRITE_DCM_PERMISSIONS
                }
            })

            .state('settingrules', {
                controller: 'SettingRulesController',
                controllerAs: 'vm',
                url: '/settingrules/all',
                templateUrl: 'app/xconf/settings/settingrule/settingrules.html',
                data: {
                    permissions: PERMISSION.READ_DCM_PERMISSIONS
                }
            })
            .state('settingrule-edit', {
                controller: 'SettingRuleEditController',
                controllerAs: 'vm',
                url: '/settingrule/edit/:ruleId',
                templateUrl: 'app/xconf/settings/settingrule/settingrule.edit.html',
                data: {
                    permissions: PERMISSION.WRITE_DCM_PERMISSIONS
                }
            })
            .state('settingrule-import', {
                controller: 'SettingRuleImportController',
                controllerAs: 'vm',
                url: '/settingrule/import',
                templateUrl: 'app/xconf/settings/settingrule/settingrule.import.html',
                data: {
                    permissions: PERMISSION.WRITE_DCM_PERMISSIONS
                }
            })

            .state('vodsettings', {
                controller: 'VodSettingsController',
                controllerAs: 'vm',
                url: '/vodsettings/all',
                templateUrl: 'app/xconf/dcm/vodsettings/vodsettings.html',
                resolve: {
                    vodSettingsSize: function (vodSettingsService, alertsService) {
                        return vodSettingsService.getSizeOfVodSettings().then(
                            function (result) {
                                return result.data;
                            }, function (reason) {
                                alertsService.showError({ message: reason.data, title: 'Error' });
                            }
                        );
                    }
                },
                data: {
                    permissions: PERMISSION.READ_DCM_PERMISSIONS
                }
            })

            .state('formulas', {
                controller: 'FormulasController',
                controllerAs: 'vm',
                url: '/formulas/all',
                templateUrl: 'app/xconf/dcm/formula/formulas.html',
                resolve: {
                    formulasSize: function (formulaService, alertsService) {
                        return formulaService.getSizeOfFormulas().then(
                            function (result) {
                                return result.data;
                            }, function (reason) {
                                alertsService.showError({ message: reason.data, title: 'Error' });
                            }
                        );
                    }
                },
                data: {
                    permissions: PERMISSION.READ_DCM_PERMISSIONS
                }
            })
            .state('formula-edit', {
                controller: 'FormulaEditController',
                controllerAs: 'vm',
                url: '/formula/edit/:ruleId?formulasSize',
                templateUrl: 'app/xconf/dcm/formula/formula.edit.html',
                data: {
                    permissions: PERMISSION.WRITE_DCM_PERMISSIONS
                }
            })
            .state('formula-import', {
                controller: 'FormulaImportController',
                controllerAs: 'vm',
                url: '/formula/import',
                templateUrl: 'app/xconf/dcm/formula/formula-import.html',
                resolve: {
                    uploadRepositories: function (uploadRepositoryService, alertsService) {
                        return uploadRepositoryService.getAll().then(function (result) {
                            return result.data;
                        }, function (reason) {
                            alertsService.showError({ message: reason.data, title: 'Error' });
                        }
                        );
                    }
                },
                data: {
                    permissions: PERMISSION.WRITE_DCM_PERMISSIONS
                }
            })

            .state('namespacedlist', {
                controller: 'NamespacedListsController',
                controllerAs: 'vm',
                url: '/namespacedlist/:type',
                templateUrl: 'app/xconf/namespacedlist/namespacedlist.html',
                data: {
                    permissions: [PERMISSION.READ_COMMON]
                }
            })
            .state('namespacedlist-edit', {
                controller: 'NamespacedListEditController',
                controllerAs: 'vm',
                url: '/namespacedlist/edit/:id/:editMode/:type',
                templateUrl: 'app/xconf/namespacedlist/namespacedlist-edit.html',
                data: {
                    permissions: [PERMISSION.WRITE_COMMON]
                }
            })
            .state('namespacedlist-import', {
                controller: 'NamespacedListImportController',
                controllerAs: 'vm',
                url: '/namespacedlist/import/:type',
                templateUrl: 'app/xconf/namespacedlist/namespacedlist-import.html',
                data: {
                    permissions: [PERMISSION.WRITE_COMMON]
                }
            })

            .state('firmwarerules', {
                controller: 'FirmwareRulesController',
                controllerAs: 'vm',
                url: '/firmwarerules/:actionType',
                templateUrl: 'app/xconf/firmwarerule/firmwarerules.html',
                data: {
                    permissions: PERMISSION.READ_FIRMWARE_PERMISSIONS

                }
            })
            .state('firmwarerule-add', {
                controller: 'FirmwareRuleEditController',
                controllerAs: 'vm',
                url: '/firmwarerule/add/:actionType/:templateId',
                templateUrl: 'app/xconf/firmwarerule/firmwarerule-edit.html',
                data: {
                    permissions: PERMISSION.WRITE_FIRMWARE_PERMISSIONS

                }
            })
            .state('firmwarerule-edit', {
                controller: 'FirmwareRuleEditController',
                controllerAs: 'vm',
                url: '/firmwarerule/edit/:id',
                templateUrl: 'app/xconf/firmwarerule/firmwarerule-edit.html',
                data: {
                    permissions: PERMISSION.WRITE_FIRMWARE_PERMISSIONS

                }
            })
            .state('firmwarerule-import', {
                controller: 'FirmwareRuleImportController',
                controllerAs: 'vm',
                url: '/firmwarerule/import',
                templateUrl: 'app/xconf/firmwarerule/firmwarerule-import.html',
                data: {
                    permissions: PERMISSION.WRITE_FIRMWARE_PERMISSIONS

                }
            })

            .state('firmwareruletemplates', {
                controller: 'FirmwareRuleTemplatesController',
                controllerAs: 'vm',
                url: '/firmwareruletemplates/:actionType',
                templateUrl: 'app/xconf/firmwareruletemplate/firmwareruletemplates.html',
                data: {
                    permissions: [PERMISSION.READ_FIRMWARE_RULE_TEMPLATES]
                }
            })
            .state('firmwareruletemplate-add', {
                controller: 'FirmwareRuleTemplateEditController',
                controllerAs: 'vm',
                url: '/firmwareruletemplate/add/:actionType?templatesSize',
                templateUrl: 'app/xconf/firmwareruletemplate/firmwareruletemplate-edit.html',
                data: {
                    permissions: [PERMISSION.WRITE_FIRMWARE_RULE_TEMPLATES]
                }
            })
            .state('firmwareruletemplate-edit', {
                controller: 'FirmwareRuleTemplateEditController',
                controllerAs: 'vm',
                url: '/firmwareruletemplate/edit/:id?templatesSize',
                templateUrl: 'app/xconf/firmwareruletemplate/firmwareruletemplate-edit.html',
                data: {
                    permissions: [PERMISSION.WRITE_FIRMWARE_RULE_TEMPLATES]
                }
            })
            .state('firmwareruletemplate-import', {
                controller: 'FirmwareRuleTemplateImportController',
                controllerAs: 'vm',
                url: '/firmwareruletemplate/import',
                templateUrl: 'app/xconf/firmwareruletemplate/firmwareruletemplate-import.html',
                data: {
                    permissions: [PERMISSION.WRITE_FIRMWARE_RULE_TEMPLATES]
                }
            })

            .state('uploadrepositories', {
                controller: 'UploadRepositoriesController',
                controllerAs: 'vm',
                url: '/uploadrepository/all',
                templateUrl: 'app/xconf/dcm/uploadRepository/uploadRepositories.html',
                resolve: {
                    uploadRepositoriesSize: function (uploadRepositoryService, alertsService) {
                        return uploadRepositoryService.getSizeOfUploadRepositories().then(
                            function (result) {
                                return result.data;
                            }, function (reason) {
                                alertsService.showError({ message: reason.data, title: 'Error' });
                            }
                        );
                    }
                },
                data: {
                    permissions: PERMISSION.READ_DCM_PERMISSIONS
                }
            })
            .state('uploadrepository-edit', {
                controller: 'UploadRepositoryEditController',
                controllerAs: 'vm',
                url: '/uploadrepository/edit/:uploadRepositoryId/:editMode',
                templateUrl: 'app/xconf/dcm/uploadRepository/uploadRepository.edit.html',
                data: {
                    permissions: PERMISSION.WRITE_DCM_PERMISSIONS
                }
            })
            .state('uploadrepository-import', {
                controller: 'UploadRepositoryImportController',
                controllerAs: 'vm',
                url: '/uploadrepository/import',
                templateUrl: 'app/xconf/dcm/uploadRepository/uploadrepository-import.html',
                data: {
                    permissions: PERMISSION.WRITE_DCM_PERMISSIONS
                }
            })

            .state('testpage-dcm', {
                controller: 'TestPageController',
                controllerAs: 'vm',
                url: '/dcm/testpage',
                templateUrl: 'app/xconf/dcm/testpage/testpage.html',
                data: {
                    permissions: PERMISSION.READ_DCM_PERMISSIONS
                }
            })

            .state('devicesettings', {
                controller: 'DeviceSettingsController',
                controllerAs: 'vm',
                url: '/deviceSettings',
                templateUrl: 'app/xconf/dcm/devicesettings/devicesettings.html',
                resolve: {
                    deviceSettingsSize: function (deviceSettingsService, alertsService) {
                        return deviceSettingsService.getSizeOfDeviceSettings().then(
                            function (result) {
                                return result.data;
                            }, function (reason) {
                                alertsService.showError({ message: reason.data, title: 'Error' });
                            }
                        );
                    }
                },
                data: {
                    permissions: PERMISSION.READ_DCM_PERMISSIONS
                }
            })

            .state('testpage-firmware', {
                controller: 'FirmwareTestPageController',
                controllerAs: 'vm',
                url: '/firmware/testpage',
                templateUrl: 'app/xconf/firmware/testpage/testpage.html',
                data: {
                    permissions: PERMISSION.READ_FIRMWARE_PERMISSIONS

                }
            })

            .state('penetration-metrics-data-page', {
                controller: 'PenetrationDataController',
                controllerAs: 'vm',
                url: '/penetration-data',
                templateUrl: 'app/xconf/penetration-data/penetration-data.html',
                data: {
                    permissions: [PERMISSION.VIEW_TOOLS]

                }
            })

            .state('logs', {
                controller: 'LogController',
                controllerAs: 'vm',
                url: '/firmware/log',
                templateUrl: 'app/xconf/firmware/log/log.html',
                data: {
                    permissions: PERMISSION.READ_FIRMWARE_PERMISSIONS

                }
            })

            .state('loguploadsettings', {
                controller: 'LogUploadSettingsController',
                controllerAs: 'vm',
                url: '/logUploadSettings',
                templateUrl: 'app/xconf/dcm/loguploadsettings/loguploadsettings.html',
                resolve: {
                    logUploadSettingsSize: function (logUploadSettingsService, alertsService) {
                        return logUploadSettingsService.getSizeOfLogUploadSettings().then(
                            function (result) {
                                return result.data;
                            }, function (reason) {
                                alertsService.showError({ message: reason.data, title: 'Error' });
                            }
                        );
                    }
                },
                data: {
                    permissions: PERMISSION.READ_DCM_PERMISSIONS
                }
            })

            .state('roundrobinfilter', {
                controller: 'RoundRobinFilterController',
                controllerAs: 'vm',
                url: '/roundrobinfilter',
                templateUrl: 'app/xconf/firmware/roundrobinfilter/roundrobinfilter.html',
                data: {
                    permissions: PERMISSION.READ_FIRMWARE_PERMISSIONS

                }
            })
            .state('roundrobinfilter-edit', {
                controller: 'RoundRobinFilterEditController',
                controllerAs: 'vm',
                url: '/roundrobinfilter/edit',
                templateUrl: 'app/xconf/firmware/roundrobinfilter/roundrobinfilter.edit.html',
                data: {
                    permissions: PERMISSION.WRITE_FIRMWARE_PERMISSIONS

                }
            })
            .state('roundrobinfilter-import', {
                controller: 'RoundRobinFilterImportController',
                controllerAs: 'vm',
                url: '/roundrobinfilter/import',
                templateUrl: 'app/xconf/firmware/roundrobinfilter/roundrobinfilter.import.html',
                data: {
                    permissions: PERMISSION.WRITE_FIRMWARE_PERMISSIONS

                }
            })

            .state('reportpage-firmware', {
                controller: 'FirmwareReportPageController',
                controllerAs: 'vm',
                url: '/firmware/reportpage',
                templateUrl: 'app/xconf/firmware/reportpage/reportpage.html',
                data: {
                    permissions: PERMISSION.READ_FIRMWARE_PERMISSIONS

                }
            })

            .state('percentfilter', {
                controller: 'PercentFilterController',
                controllerAs: 'vm',
                url: '/firmware/percentfilter',
                templateUrl: 'app/xconf/firmware/percentfilter/percentfilter.html',
                data: {
                    permissions: PERMISSION.READ_FIRMWARE_PERMISSIONS

                }
            }).state('percentfilter-edit', {
                controller: 'PercentFilterEditController',
                controllerAs: 'vm',
                url: '/firmware/percentfilter-edit/:envModelRuleName',
                templateUrl: 'app/xconf/firmware/percentfilter/percentfilter.edit.html',
                data: {
                    permissions: PERMISSION.WRITE_FIRMWARE_PERMISSIONS

                }
            }).state('percentfilter-import', {
                controller: 'PercentFilterImportController',
                controllerAs: 'vm',
                url: '/firmware/percentfilter-import',
                templateUrl: 'app/xconf/firmware/percentfilter/percentfilter.import.html',
                data: {
                    permissions: PERMISSION.WRITE_FIRMWARE_PERMISSIONS

                }
            }).state('migration', {
                controller: 'MigrationController',
                controllerAs: 'vm',
                url: '/migration',
                templateUrl: 'app/xconf/migration/migration.html',
                data: {
                    permissions: [PERMISSION.VIEW_TOOLS]
                }
            }).state('testpage-rfc', {
                controller: 'SharedTestPageController',
                controllerAs: 'vm',
                url: '/rfc/testpage',
                templateUrl: 'app/shared/pages/testpage/testpage.html',
                data: {
                    permissions: PERMISSION.READ_DCM_PERMISSIONS,
                    pageName: 'RFC',
                    matchRuleApiUrl: 'rfc/test',
                    pageType: 'FEATURE'
                }
            }).state('percentagebean-edit', {
                controller: 'PercentageBeanEditController',
                controllerAs: 'vm',
                url: '/percentagebean-edit/:id',
                templateUrl: 'app/xconf/firmware/percentfilter/percentage-bean.edit.html',
                data: {
                    permissions: PERMISSION.WRITE_FIRMWARE_PERMISSIONS

                }
            }).state('activation-version', {
                controller: 'ActivationVersionController',
                controllerAs: 'vm',
                url: '/activation-version',
                templateUrl: 'app/xconf/firmware/activation-version/activation-versions.html',
                data: {
                    permissions: PERMISSION.READ_FIRMWARE_PERMISSIONS

                }
            }).state('activation-version-edit', {
                controller: 'ActivationVersionEditController',
                controllerAs: 'vm',
                url: '/activation-version-edit/:id',
                templateUrl: 'app/xconf/firmware/activation-version/activation-version.edit.html',
                data: {
                    permissions: PERMISSION.WRITE_FIRMWARE_PERMISSIONS

                }
            }).state('activation-version-import', {
                controller: 'ActivationVersionImportController',
                controllerAs: 'vm',
                url: '/activation-version-import',
                templateUrl: 'app/xconf/firmware/activation-version/activation-version.import.html',
                data: {
                    permissions: PERMISSION.WRITE_FIRMWARE_PERMISSIONS

                }
            });
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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

    angular.module('app.changeLog', ['app.filters']);
})();


/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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

    angular.module('app.controller', []);
})();


/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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

    angular.module('app.core', [
        /*
         * Angular modules
         */
        'ngAnimate', 'ngRoute', 'ngSanitize',
        /*
         * Our reusable cross app code modules
         */
        'app.config',
        /*
         * 3rd Party modules
         */
        'ngplus'
    ]);
})();


/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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

    angular.module('app.directives', []);
})();


/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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

    angular.module('app.filtered-select', []);
})();


/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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

    angular.module('app.filters', []);
})();


/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.sharedTestPage', [])
})();


/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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

    angular.module('app.services', ['ngCookies']);
})();


/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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

    angular.module('app.statistics', ['app.filters']);
})();


/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        var MAX_VALUES_FILESIZE = 6 * 1024 * 1024;//6 MiB

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
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 * Copyright 2023 Comcast Cable Communications Management, LLC
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


/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
                    if (condition.operation === OPERATION.LTE || condition.operation === OPERATION.GTE) {
                        var validationMessage = validateTime(_.values(condition.fixedArg.bean.value)[0]);
                        if (validationMessage !== null) {
                            alertsService.showError({title: "FreeArg", message: validationMessage});
                            return 1;
                        }
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
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
            isArrayContainsValue: isArrayContainsValue
        };
    }
})();


/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 * Copyright 2023 Comcast Cable Communications Management, LLC
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

    angular.module('app.directives').
        directive('customProgressbar', directive);

    directive.$inject = ['$timeout'];

    function directive($timeout) {
        var scope = {
            control: '=control'
        };
        var total = null;

        function update(scope) {
            scope.data = {progress: 0};
            total = null;
        }

        function linkFunction(scope, element, attrs) {
            update(scope);

            scope.internalControl = scope.control || {};
            scope.internalControl.total = 0;

            scope.internalControl.progress = function(progress) {

                //shows progress in UI
                scope.data.progress += Math.round(progress * 100 / scope.internalControl.total);
                scope.control.next();

                //updates if total is 0
                total = (total != null) ? total - progress : scope.internalControl.total - progress;
                if(!total){
                    update(scope);
                }
            }
        }

        return {
            restrict: 'E',
            scope: scope,
            link: linkFunction,
            templateUrl: 'app/shared/directives/custom-progressbar/custom-progressbar.directive.html'
        }
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
'use strict';

angular.module('app.directives')
    .directive('customViewerPanel', directive);

directive.$inject = ['utilsService', '$timeout'];

function directive(utilsService, $timeout) {

    var _scope = null;
    var scope = {
        control: '=',
        bottomShift: '=',
        cssBasicColumns: '=',
        cssSecondColumns: '='
    }

    /*
    * calculate max height of the elements
    */
    function calculateMaxHeight(basicElement, cssBasicColumns) {
        var maxHeight = 0;
        angular.forEach(cssBasicColumns, function(css) {
            var height = 0;
            var elem = basicElement.find(css);
            if (elem && elem.height()) {
                height = elem.height()
            }
            maxHeight = (maxHeight > height) ? maxHeight : height;
        });

        return maxHeight;
    }

    function link(scope, element, attrs) {
        scope.internalControl = scope.control || {};
        scope.planeStyle = {
            "height": "auto",
            "position": "relative",
            "overflow-y": "visible"
        };

        function stopPropagation($event) {
            $event.stopPropagation();
        }

        function toggle($event, isOpen) {
            var panelElement = $($event.currentTarget);
            togglePanel(panelElement, isOpen);
        }

        function togglePanel(element) {
            var basicMaxHeight = calculateMaxHeight(element, scope.cssBasicColumns);
            var secondMaxHeight = calculateMaxHeight(element, scope.cssSecondColumns);

            if (basicMaxHeight > secondMaxHeight) {
                return;
            }

            if (!element.hasClass('opened')) {
                scope.planeStyle['overflow-y'] = 'visible';
                scope.planeStyle['height'] = 'auto';
                utilsService.removeClass(element.find('#blurBottom'), 'blur-bottom');
                utilsService.addClass(element, 'opened');
            } else {
                scope.planeStyle['overflow-y'] = 'hidden';

                var result = (scope.bottomShift) ?  basicMaxHeight + scope.bottomShift : basicMaxHeight;
                scope.planeStyle['height'] = result + 'px';
                utilsService.addClass(element.find('#blurBottom'), 'blur-bottom');
                utilsService.removeClass(element, 'opened');
            }
        }

        //updates new height through 0.5sec
        $timeout(function() {
           scope.$apply(togglePanel(element, false))
        }, 500);

        scope.toggle = toggle;
        scope.internalControl.stopPropagation = stopPropagation;
        _scope = scope;
    }

    return {
        restrict: 'E',
        scope: scope,
        replace: true,
        transclude: true,
        link: link,
        template: '<div ng-transclude ng-click="toggle($event)" ng-style="planeStyle" class="opened ads-tab"></div>'
    }
}

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
    "use strict";

    angular.module('app.directives').directive('dropdownMultiselect', function() {
        return {
            restrict: 'E',
            scope:{
                model: '=',
                options: '=',
                labelProperty: '@',
                valueProperty: '@',
                buttonText: '@'
            },
            templateUrl: 'app/shared/directives/dropdown-multiselect.directive.html',

            link: function($scope) {
                $scope.buttonText = angular.isDefined($scope.buttonText) ? $scope.buttonText : 'Select';

                $scope.selectAll = function (event) {
                    $scope.model = _.pluck($scope.options, $scope.valueProperty);
                    event.stopPropagation();
                };
                $scope.deselectAll = function(event) {
                    $scope.model=[];
                    event.stopPropagation();
                };
                $scope.setSelectedItem = function(event) {
                    var valueProperty = this.option[$scope.valueProperty];
                    if (_.contains($scope.model, valueProperty)) {
                        $scope.model = _.without($scope.model, valueProperty);
                    } else {
                        $scope.model.push(valueProperty);
                    }
                    event.stopPropagation();
                };
                $scope.isChecked = function (valueProperty) {
                    return _.contains($scope.model, valueProperty)
                };
                $scope.allUnchecked = function() {
                    return $scope.model.length <= 0;
                }
            }
        }
    });

})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
    "use strict";

    angular.module('app.directives').directive('editableMap', ['utilsService',
        function(utilsService) {
            return {
                restrict: 'E',
                scope: {
                    parameters: '=',
                    autoCompleteValues: '=',
                    quickAdd: '=',
                    maxNumberOfItems: '=',
                    stopAdd: '='
                },
                templateUrl: 'app/shared/directives/editable-map/editable-map.directive.html',
                link: function(scope) {
                    scope.addParameterEntry = function addParameterEntry() {
                        scope.parameters.push({key: '', value: ''});
                    };

                    scope.removeParameterEntry = function removeParameterEntry(entry) {
                        utilsService.removeItemFromArray(scope.parameters, entry);
                    };

                    scope.addKeyValue = function addKeyValue(entry) {
                        scope.parameters.push({key: entry.key, value: entry.value});
                    };
                }
            }
    }]);

})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
angular.module('app.directives').directive('environmentModelEditDirective',
    ['modelService', 'environmentService', 'alertsService', 'ENTITY_TYPE', '$state', '$stateParams', '$controller',
        function (modelService, environmentService, alertsService, ENTITY_TYPE, $state, $stateParams, $controller) {
    return {
        link: function (scope, element, attrs) {

            var entityService = null;
            var homePage = null;
            scope.isNewEntity = false;
            init();

            angular.extend(scope, $controller('EditController', {
                $scope: scope,
                mainPage: homePage,
                stateParameters: null
            }));

            scope.cancel = function() {
                $state.go(homePage);
            };

            scope.isSaving = false;

            scope.save = function() {
              if (validateEntity(scope.entity)) {
                scope.isSaving = true; // set isSaving to true to disable the button
            
                if (scope.isNewEntity) {
                  entityService.create(scope.entity).then(function(resp) {
                    alertsService.successfullySaved(resp.data.id);
                    $state.go(homePage);
                  }, function(error) {
                    alertsService.showError({title: 'Error', message: error.data.message});
                  }).finally(function() {
                    scope.isSaving = false; // set isSaving to false to enable the button
                  });
                } else {
                  entityService.update(scope.entity).then(function(resp) {
                    alertsService.successfullySaved(resp.data.id);
                    $state.go(homePage);
                  }, function(error) {
                    alertsService.showError({title: 'Error', message: error.data.message});
                  }).finally(function() {
                    scope.isSaving = false; // set isSaving to false to enable the button
                  });
                }
              }
            };
            

            function init() {
                if (scope.entityType == ENTITY_TYPE.MODEL) {
                    entityService  = modelService;
                    homePage = 'models';
                } else if(scope.entityType == ENTITY_TYPE.ENVIRONMENT) {
                    entityService = environmentService;
                    homePage = 'environments'
                }

                if (!$stateParams.entityId) {
                    scope.isNewEntity = true;
                } else {
                    scope.isNewEntity = false;
                    entityService.getById($stateParams.entityId).then(function(resp) {
                        scope.entity = resp.data;
                    }, function(error) {
                        alertsService.showError({title: 'Error', message: error.data.message});
                    });
                }
            }

            function validateEntity(entity) {
                if (!entity.id || entity.id === '') {
                    alertsService.showError({title: 'Error', message: 'Id field is empty!'});
                    return false;
                }
                return true;
            }
        },
        restrict: 'E',
        scope: {
            entityType: '='
        },
        templateUrl: 'app/shared/directives/environment-model/environment-model.edit.directive.html',

    };
}]);


/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
angular.module('app.directives').directive('environmentModelImportDirective',
    ['modelService', 'environmentService', 'alertsService', 'ENTITY_TYPE', '$state', 'dialogs', '$log', 'utilsService', '$filter', 'importService', 'paginationService',
        function (modelService, environmentService, alertsService, ENTITY_TYPE, $state, dialogs, $log, utilsService, $filter, importService, paginationService) {
            return {
                link: function (scope, element, attrs) {
                    var entityService = null;
                    scope.entityLink = null;
                    scope.entities = null;
                    scope.entityName = null;
                    scope.retrieveFile = retrieveFile;
                    scope.importEntity = importEntity;
                    scope.importAllEntities = importAllEntities;
                    scope.entities = [];
                    scope.wrappedEntities = null;
                    scope.overwriteAll = overwriteAll;
                    scope.isOverwritten = false;
                    scope.progressBarControl = importService.progressBarControl;

                    scope.computeStartAndEndIndex = function() {
                        scope.startIndex = (scope.pageNumber.value - 1) * scope.pageSize.value;
                        scope.endIndex = scope.pageNumber.value * scope.pageSize.value;
                    };

                    scope.selectPage = function() {
                        paginationService.savePaginationSettingsInLocation(scope.pageNumber.value, scope.pageSize.value);
                        scope.computeStartAndEndIndex();
                    };

                    scope.getGeneralItemsNumber = function() {
                        return scope.wrappedEntities ? scope.wrappedEntities.length : 0;
                    };

                    scope.$on('$locationChangeSuccess', function () {
                        if (paginationService.paginationSettingsInLocationHaveChanged(scope.pageNumber.value, scope.pageSize.value)) {
                            scope.pageSize = {value : paginationService.getPageSize(scope.paginationStorageKey)};
                            scope.pageNumber = {value: paginationService.getPageNumber()};
                            scope.selectPage();
                        }
                    });

                    init();

                    function init() {
                        if (scope.entityType === ENTITY_TYPE.MODEL) {
                            entityService  = modelService;
                            scope.entityLink = 'models';
                            scope.entityName = 'Models';
                            scope.paginationStorageKey = 'modelPageSize';
                        } else if(scope.entityType === ENTITY_TYPE.ENVIRONMENT) {
                            entityService = environmentService;
                            scope.entityLink = 'environments';
                            scope.entityName = 'Environments';
                            scope.paginationStorageKey = 'environmentRulePageSize';
                        }

                        scope.pageSize = {value : paginationService.getPageSize(scope.paginationStorageKey)};
                        scope.pageNumber = {value :paginationService.getPageNumber()};
                    }

                    async function retrieveFile(fileName) {
                        scope.entities = null;
                        try {
                            let file = await importService.openFile(fileName, null, this);
                            scope.isOverwritten = false;
                            scope.wrappedEntities = importService.prepareEntitiesFromFile(file);
                            scope.selectPage();
                        } catch (e) {
                            alertsService.showError({message: e});
                        }
                    }

                    function importEntity(data) {
                        if (validateEntity(data.entity)) {
                            if (data.overwrite) {
                                entityService.update(data.entity).then(function () {
                                    alertsService.successfullySaved(data.entity.id);
                                    utilsService.removeSelectedItemFromListById(scope.wrappedEntities, data.entity.id);
                                }, function (reason) {
                                    alertsService.showError({message: reason.data.message, title: 'Unable to import'});
                                });
                            } else {
                                entityService.create(data.entity).then(function () {
                                    alertsService.successfullySaved(data.entity.id);
                                    utilsService.removeSelectedItemFromListById(scope.wrappedEntities, data.entity.id);
                                }, function (reason) {
                                    alertsService.showError({message: reason.data.message, title: 'Unable to import'});
                                });
                            }
                        }
                    }

                    function importAllEntities() {
                        importService.importAllEntities(entityService, scope.wrappedEntities);
                    }

                    function overwriteAll() {
                        angular.forEach(scope.wrappedEntities, function (val) {
                            val.overwrite = scope.isOverwritten;
                        });
                    }

                    function validateEntity(entity) {
                        if (!entity || !entity.id) {
                            alertsService.showError({title: 'Validation Exception', message: 'Id is not present'});
                            return false;
                        }
                        return true;
                    }
                },
                restrict: 'E',
                scope: {
                    entityType: '='
                },
                templateUrl: 'app/shared/directives/environment-model/environment-model.import.directive.html'
            };
        }]);


/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
angular.module('app.directives').directive('environmentModelViewDirective',
    ['modelService', 'environmentService', 'alertsService', 'ENTITY_TYPE', '$state', 'dialogs', '$log', 'utilsService', '$filter', 'paginationService', '$controller',
        function (modelService, environmentService, alertsService, ENTITY_TYPE, $state, dialogs, $log, utilsService, $filter, paginationService, $controller) {
        return {
            link: function (scope, element, attrs) {
                var entityService = null;
                angular.extend(scope, $controller('MainController', {
                    $scope: scope
                }));
                scope.entityEditLink = null;
                scope.entityImportLink = null;
                scope.entities = null;
                scope.entityName = null;
                scope.searchId = '';
                scope.paginationStorageKey = '';
                scope.pageSize = '';
                scope.pageNumber = '';
                scope.generalItemsNumber = 0;
                scope.searchParam = {};
                scope.searchOptions = {
                    data: [
                        {
                            "name": {
                                friendlyName: "Id",
                                apiArgs: ['ID']
                            }
                        },
                        {
                            "name": {
                                friendlyName: "Description",
                                apiArgs: ["DESCRIPTION"]
                            }
                        }
                    ]
                };

                scope.getPage = function() {
                    entityService.getPage(scope.pageNumber.value, scope.pageSize.value, scope.searchParam).then(function(result) {
                            scope.entities = result.data;
                            scope.generalItemsNumber = result.headers('numberofitems');
                            paginationService.savePaginationSettingsInLocation(scope.pageNumber.value, scope.pageSize.value);
                        }, function(error) {
                            alertsService.showError({title: 'Error', message: 'Error by loading ' + scope.entityType});
                        }
                    );
                };

                init();

                scope.$on('$locationChangeSuccess', function () {
                    if (paginationService.paginationSettingsInLocationHaveChanged(scope.pageNumber.value, scope.pageSize.value)) {
                        scope.pageSize = {value : paginationService.getPageSize(scope.paginationStorageKey)};
                        scope.pageNumber = {value: paginationService.getPageNumber()};
                        init();
                    }
                });

                scope.$on('search-entities', function(event, data) {
                    scope.searchParam = data.searchParam;
                    scope.getPage();
                });

                function init() {
                    if (scope.entityType === ENTITY_TYPE.MODEL) {
                        entityService  = modelService;
                        scope.entityEditLink = 'model-edit';
                        scope.entityImportLink = 'model-import';
                        scope.entityName = 'Models';
                        scope.paginationStorageKey = 'modelPageSize';
                        scope.pageSize = paginationService.getPageSize(scope.paginationStorageKey);
                        scope.pageNumber = paginationService.getPageNumber();
                    } else if(scope.entityType === ENTITY_TYPE.ENVIRONMENT) {
                        entityService = environmentService;
                        scope.entityEditLink = 'environment-edit';
                        scope.entityImportLink = 'environment-import';
                        scope.entityName = 'Environments';
                        scope.paginationStorageKey = 'environmentPageSize';
                        scope.pageSize = paginationService.getPageSize(scope.paginationStorageKey);
                        scope.pageNumber = paginationService.getPageNumber();
                    }

                    scope.pageSize = {value : paginationService.getPageSize(scope.paginationStorageKey)};
                    scope.pageNumber = {value :paginationService.getPageNumber()};

                    scope.getPage();
                }

                scope.goToEditPage = function(entityId) {
                    if (entityId) {
                        $state.go(scope.entityEditLink, {entityId: entityId});
                    } else {
                        $state.go(scope.entityEditLink);
                    }
                };

                scope.goToImportPage = function() {
                    $state.go(scope.entityImportLink);
                };

                scope.deleteEntity = function(entityId) {
                    var dialog = dialogs.confirm('Delete confirmation', '<span class="break-word-inline"> Are you sure you want to delete ' + scope.entityType + ' ' + entityId + ' ? </span>');
                    dialog.result.then(function (btn) {
                        entityService.deleteById(entityId).then(function (resp) {
                            alertsService.successfullyDeleted(entityId);
                            for(var i=0; i<scope.entities.length; i++) {
                                if (entityId === scope.entities[i].id) {
                                    scope.entities.splice(i, 1);
                                    break;
                                }
                            }
                            scope.shiftItems();
                        }, function (error) {
                            alertsService.showError({title: 'Error', message: error.data.message});
                        });
                    });
                };

                scope.exportOne = function(entityId) {
                    entityService.exportOne(entityId);
                };

                scope.exportAll = function() {
                    entityService.exportAll();
                };

                scope.shiftItems = function() {
                    var numberOfPagesAfterDeletion = Math.ceil((scope.getGeneralItemsNumber() - 1) / scope.pageSize.value);
                    scope.pageNumber.value = (scope.pageNumber > numberOfPagesAfterDeletion && numberOfPagesAfterDeletion > 0) ? numberOfPagesAfterDeletion : scope.pageNumber.value;
                    scope.getPage();
                };

                scope.startParse = function() {
                    return scope.getGeneralItemsNumber() > 0;
                };

                scope.getGeneralItemsNumber = function() {
                    return scope.generalItemsNumber;
                };

                scope.searchEntitiesById = function(entityId, pageSize, pageNumber) {
                    entityService.searchById(pageNumber, pageSize, entityId).then(function(resp) {
                        scope.entities = resp.data;
                    }, function(error) {
                        alertsService.showError(error.data.message);
                    });
                }
            },
            restrict: 'E',
            scope: {
                entityType: '='
            },
            templateUrl: 'app/shared/directives/environment-model/environment-model.view.directive.html'
        };
    }]);


/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
    "use strict";

    angular.module('app.directives').directive('labelLength', ['$timeout', function($timeout) {
        return {
            restrict: 'A',
            scope:{
                labelLength: '='
            },
            link: function(scope, element) {
                var charsToDisplay = (scope.labelLength == parseInt(scope.labelLength)) ? parseInt(scope.labelLength) : 90;
                $timeout(function() {
                    $(element[0]).children("option").each(function() {
                        var currentOption = $(this);
                        var optionLabel = currentOption.text().trim();
                        if (optionLabel && optionLabel.length > charsToDisplay) {
                            optionLabel = optionLabel.substring(0, charsToDisplay) + '...';
                            $(this).html(optionLabel);
                        }
                    })
                });
            }
        }
    }]);

})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
    "use strict";

    angular.module('app.directives').directive('xconfPagination', ['$timeout', 'paginationService',
        function($timeout, paginationService) {
        return {
            restrict: 'E',
            scope:{
                pageSize: '=',
                pageNumber: '=',
                paginationStorageKey: '=',
                getPage: '&',
                getGeneralItemsNumber: '&'
            },
            templateUrl: 'app/shared/directives/pagination/pagination.directive.html',
            link: function(scope) {
                scope.availablePageSizes = paginationService.getAvailablePageSizes();

                scope.$watch('pageSize', function() {
                    $timeout(function() {
                        if (paginationService.paginationSettingsInLocationHaveChanged(scope.pageNumber, scope.pageSize)) {
                            paginationService.saveDefaultPageSize(scope.pageSize, scope.paginationStorageKey);
                            scope.getPage();

                        }
                    }, 0);
                });

                scope.$watch('pageNumber', function() {
                    if (paginationService.paginationSettingsInLocationHaveChanged(scope.pageNumber, scope.pageSize)) {
                        scope.getPage();
                    }
                });
            }
        }
    }]);

})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
    "use strict";

    angular.module('app.directives').directive('ruleBuilderDirective', ['$log', 'ruleHelperService', 'alertsService', 'utilsService', 'RELATION', 'OPERATION', 'OPERATION_ARRAY', '$uibModal', 'namespacedListService', 'FREE_ARG_NAME',
        function($log, ruleHelperService, alertsService, utilsService, RELATION, OPERATION, OPERATION_ARRAY, $modal, namespacedListService, FREE_ARG_NAME) {
        var targetEventObject = null;
        var newRule = {
            "negated": false,
            "relation": null,
            "compoundParts": [],
            "condition": {
                "freeArg": {
                    "type": "STRING",
                    "name": ""
                },
                "operation": "",
                "fixedArg": {
                    "bean": {
                        "value": ""
                    }
                }
            }
        };
        var ipFreeArgs = ["ipAddress","estbIP"];
        var macFreeArgs = ["eStbMac","estbMacAddress","ecmMacAddress"];
        
        function link(scope, element, attrs) {
            var showIpFreeArgAlert = true;
            var showMacFreeArgAlert = true;
            scope.ruleHelperService = ruleHelperService;
            scope.RELATION = RELATION;
            scope.disableFreeArgInput = false;
            scope.disableFixedArgInput = false;
            scope.OPERATION = OPERATION;
            scope.prevRuleOperation = null;
            scope.fixedArgValue = '';
            scope.operationsDependingOnFreeArg = scope.operations && scope.operations.general ? scope.operations.general : OPERATION_ARRAY;
            newRule.condition.operation = scope.operationsDependingOnFreeArg[0];
            scope.rule = angular.copy(newRule);
            scope.$root.$on("rule::edit", function(e, obj) {
                targetEventObject = obj;
                angular.copy(obj.rule, scope.rule);
                scope.fixedArgValue = ruleHelperService.renderValue(scope.rule.condition);

                if (obj.rule === scope.data) {
                    scope.showRelation = false;
                } else {
                    if (scope.data.compoundParts && scope.data.compoundParts.length >= 1) {
                        if (obj.rule === scope.data.compoundParts[0]) {
                            scope.showRelation = false;
                        } else {
                            scope.showRelation = true;
                        }
                    } else {
                        scope.showRelation = true;
                    }
                }
                scope.reloadOperations();
            });

            scope.reloadOperations = function() {
                var freeArg = scope.rule.condition.freeArg.name;
                if (scope.operations && scope.operations[freeArg]) {
                    scope.operationsDependingOnFreeArg = scope.operations[freeArg];
                } else {
                    scope.operationsDependingOnFreeArg = scope.operations && scope.operations.general ? scope.operations.general : OPERATION_ARRAY;
                }
                scope.reloadSelectedOperation();
            };

            scope.changeRelation = function(event, relation) {
                var element = event.currentTarget;
                $(element).addClass('ads-rule-builder-relation-active');
                scope.rule.relation = relation;
            };

            scope.addOrUpdate = function() {
                normalizeCondition();

                if (isNewRule()) {
                    // add new rule

                    if (validate(scope)) {
                        return;
                    }
                    if (checkISConditionExceeded(ipFreeArgs) && showIpFreeArgAlert) {
                        showIpFreeArgAlert = false;
                        alertsService.showWarningMessage({message: 'Maximum number of IS conditions has been reached. Please use IN_LIST operation if possible to group IP addresses'});
                    }
                    if(checkISConditionExceeded(macFreeArgs) && showMacFreeArgAlert) {
                        showMacFreeArgAlert = false;
                        alertsService.showWarningMessage({message: 'Maximum number of IS conditions has been reached. Please use IN_LIST operation if possible to group MAC addresses'});
                    }
                    scope.data = ruleHelperService.addRule(scope.rule, scope.data);
                    scope.$root.$broadcast("rule::created", {data: scope.data, rule: scope.rule});
                } else {
                    // update selected rule

                    if (!ruleHelperService.equalRules(scope.rule, targetEventObject.rule) && validate(scope)) {
                        return;
                    }
                    angular.copy(scope.rule, targetEventObject.rule);
                    scope.$root.$broadcast("rule::updated", {data: scope.data, rule: scope.rule});
                }
                scope.isValidCondition = true;
                clearActiveRule(scope);
                resetPrevOperation(scope);
            };

            function checkISConditionExceeded(allowedFreeArgs) {
                var isConditionCount = 1;
                if(!scope.ipMacIsConditionLimit) {
                    return false
                }
                if(scope.data && scope.data.compoundParts) {
                    for(var i = 0; i < scope.data.compoundParts.length; i++) {
                        const existingCompoundPart = scope.data.compoundParts[i];
                        const currentRule = scope.rule;
                        if(existingCompoundPart.condition.operation === "IS" && allowedFreeArgs.indexOf(existingCompoundPart.condition.freeArg.name) > -1  && allowedFreeArgs.indexOf(currentRule.condition.freeArg.name) > -1 && currentRule.condition.operation === "IS") { 
                            if(isConditionCount >= parseInt(scope.ipMacIsConditionLimit)) {
                                return true;
                            }
                            isConditionCount++;
                        }
                    }
                }
                return false;
            }

            function normalizeCondition() {
                var condition = scope.rule.condition;
                switch(condition.operation) {
                    case OPERATION.IN:
                        break;
                    case OPERATION.EXISTS:
                        break;
                    case OPERATION.PERCENT:
                        var type = 'java.lang.Double';
                        var sourceValue = condition.fixedArg.bean.value;
                        var isSourceValueObject = angular.isObject(sourceValue);
                        if (isSourceValueObject && !utilsService.isNumeric(sourceValue[type]) ||
                            !isSourceValueObject && !utilsService.isNumeric(sourceValue)) {
                            break;
                        }
                        condition.fixedArg.bean.value = doFixedArgWrapper(type, isSourceValueObject ? parseFloat(sourceValue[type]) : parseFloat(sourceValue));
                        break;
                    default:
                        var type = 'java.lang.String';
                        var sourceValue = condition.fixedArg.bean.value;
                        condition.fixedArg.bean.value = doFixedArgWrapper(type, angular.isObject(sourceValue)
                            ? sourceValue[type] : sourceValue);
                }

                normalizeMacAddress();
            }

            function normalizeMacAddress() {
                var condition = scope.rule.condition;
                if (_.values(FREE_ARG_NAME).indexOf(condition.freeArg.name) === -1) {
                    return;
                }

                switch (condition.operation) {
                    case OPERATION.IS:
                        condition.fixedArg.bean.value['java.lang.String'] = namespacedListService.normalizeMacAddress(condition.fixedArg.bean.value['java.lang.String']);
                        break;
                    case OPERATION.LIKE:
                        condition.fixedArg.bean.value['java.lang.String'] = namespacedListService.normalizeMacAddress(condition.fixedArg.bean.value['java.lang.String']);
                        break;
                    case OPERATION.IN:
                        for (var i = 0; i < condition.fixedArg.collection.value.length; i++) {
                            if (condition.fixedArg.collection.value[i]) {
                                condition.fixedArg.collection.value[i] = namespacedListService.normalizeMacAddress(condition.fixedArg.collection.value[i]);
                            }
                        }
                        break;
                }
                return condition;
            }

            function doFixedArgWrapper(type, value) {
                var result = {};
                result[type] = value;

                return result;
            }

            scope.$watch('rule.condition.operation', function() {
                var condition = scope.rule.condition;
                if (scope.prevRuleOperation === OPERATION.PERCENT || scope.prevRuleOperation === OPERATION.RANGE) {
                    scope.rule.condition.freeArg.name = '';
                }
                scope.prevRuleOperation = condition.operation;
                switch(condition.operation) {
                    case OPERATION.LT:
                    case OPERATION.GT:
                        scope.disableFreeArgInput = false;
                        scope.disableFixedArgInput = false;

                        condition.freeArg.type = 'LONG';
                        break;
                    case OPERATION.EXISTS:
                        scope.disableFreeArgInput = false;
                        scope.disableFixedArgInput = true;
                        condition.fixedArg.bean.value = '';

                        condition.freeArg.type = 'ANY';
                        break;
                    case OPERATION.PERCENT:
                    case OPERATION.RANGE:
                        scope.disableFreeArgInput = false;
                        scope.disableFixedArgInput = false;
                        condition.freeArg.name = scope.percentFreeArgName;

                        condition.freeArg.type = 'STRING';
                        break;
                    default:
                        scope.disableFreeArgInput = false;
                        scope.disableFixedArgInput = false;

                        condition.freeArg.type = 'STRING';
                }
            });

            scope.$root.$on("rule::remove", function(e, obj) {
                clearActiveRule(scope);
            });

            scope.$root.$on("rulebuilder::clean", function() {
                clearActiveRule(scope);
            });

            scope.$watch('data', function() {
                showRelation(scope);
            });

            scope.disableNegated = function() {
                return scope.rule.condition.operation === OPERATION.PERCENT;
            };

            scope.showAddNamespacedListModal = function() {
                var modalInstance = $modal.open({
                    templateUrl: 'app/shared/filtered-select/filtered-select.html',
                    size: 'lg',
                    controller: 'FilteredSelect as vm',
                    resolve: {
                        title: function() {
                            return 'NamespacedLists';
                        },
                        data: function() {
                            var currentDataEntry = null;
                            if (scope.namespacedListData) {
                                if (scope.namespacedListData.length > 1 && ['estbIP', 'ipAddress'].indexOf(scope.rule.condition.freeArg.name) > -1) {
                                    currentDataEntry = scope.namespacedListData[1];
                                } else {
                                    currentDataEntry = scope.namespacedListData[0];
                                }
                            }
                            return currentDataEntry;
                        },
                        onSelect: function() {
                            return function(id) {
                                scope.fixedArgValue = id;
                                scope.changeFixedArgValue();
                            }
                        }
                    }
                });
            };

            scope.disableNegated = function() {
                return scope.rule.condition.operation === OPERATION.PERCENT;
            };

            scope.cleanFixedArg = function(scope) {
                scope.rule.condition.fixedArg.bean.value = '';
            };

            scope.changeOperation = function() {
                scope.fixedArgValue = '';
                if (scope.rule.condition.operation === OPERATION.IN) {
                    delete scope.rule.condition.fixedArg.bean;
                    scope.rule.condition.fixedArg['collection'] = {value: []};
                } else {
                    delete scope.rule.condition.fixedArg.collection;
                    scope.rule.condition.fixedArg['bean'] = {value: ""};
                }
            };

            scope.showInListModal = function(values, data) {
                $modal.open({
                    templateUrl: 'app/shared/directives/tagautocomplete/tagautocomplete-modal.html',
                    size: 'lg',
                    controller: 'TagautocompleteModal as vm',
                    resolve: {
                        data: function() {
                            return {
                                selectedTags: angular.copy(values),
                                data: data,
                                disableAutocomplete: data && _.size(data) > 0 ? false : true,
                                onSave: function(ids) {
                                    scope.fixedArgValue = ids;
                                    scope.changeFixedArgValue();
                                }
                            }
                        }
                    }
                });
            };

            scope.renderValue = function() {
                return ruleHelperService.renderValue(scope.rule.condition);
            };

            scope.changeFixedArgValue = function() {
                var type;
                switch (scope.rule.condition.operation) {
                    case OPERATION.IN:
                        scope.rule.condition.fixedArg.collection.value = scope.fixedArgValue;
                        return;
                    case OPERATION.PERCENT:
                        type = "java.lang.Double";
                        break;
                    default :
                        type = "java.lang.String";
                }
                scope.rule.condition.fixedArg.bean.value = doFixedArgWrapper(type, scope.fixedArgValue);
            };

            scope.reloadSelectedOperation = function() {
                if (scope.operationsDependingOnFreeArg.indexOf(scope.rule.condition.operation) < 0) {
                    scope.rule.condition.operation = scope.operationsDependingOnFreeArg[0];
                }
            };

            scope.shouldShow = function(operation) {
                var argName = scope.rule.condition.freeArg.name.toLowerCase();
                if (!(argName.includes("ip") || argName.includes("mac")) && operation === 'IN_LIST') {
                    return false;
                }
                return !(operation === 'PERCENT' && scope.rule.negated);
            }
        }

        function isNewRule() {
            return targetEventObject === null;
        }

        function validate(scope) {
            return scope.validationFunction()(scope);
        }

        function showRelation(scope) {
            if (scope.data.condition || (scope.data.compoundParts && scope.data.compoundParts.length > 0)) {
                scope.showRelation = true;
            } else {
                scope.showRelation = false;
            }
        }

        function clearActiveRule(scope) {
            targetEventObject = null;
            scope.rule = angular.copy(newRule);
            scope.fixedArgValue = '';
            scope.reloadOperations();
            newRule.condition.operation = scope.operationsDependingOnFreeArg[0];
            scope.rule = angular.copy(newRule);
            showRelation(scope);
        }

        function resetPrevOperation(scope) {
            scope.prevRuleOperation = '';
        }

        return {
            restrict: 'E',
            scope: {
                ipMacIsConditionLimit: '=',
                data: '=',
                namespacedListData: '=',
                representation: '=',
                fixedArgRequired: '=',
                isValidCondition: '=',
                disableValidation: '=',
                freeArgAutocompleteValues: '=',
                percentFreeArgName: '=',
                operations: '=',
                validationFunction: '&'
            },
            templateUrl: 'app/shared/directives/rule/rule-builder.directive.html',
            link: link
        };
    }]);

})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
    "use strict";

    angular.module('app.directives').directive('ruleviewEditorDirective', ['$log', '$compile', 'ruleHelperService', 'OPERATION', 'utilsService',function($log, $compile, ruleHelperService, OPERATION, utilsService) {
        var activeRuleDomElement = null;

        function link(scope, element, attrs) {
            /**
             * The compile function cannot handle directives that recursively use themselves in their own templates
             * or compile functions. Compiling these directives results in an infinite loop and a stack overflow errors.
             * This can be avoided by manually using $compile in the postLink function to imperatively compile
             * a directive's template instead of relying on automatic template compilation via template or templateUrl
             * declaration or manual compilation inside the compile function.
             */
            var template = '\
                    <div rule-type="ruleview-editor" class="ruleview" ng-hide="hideRule()">\
                        <div  class="ruleview-rule" style="cursor: pointer;" ng-click="editRule($event, rule[0])">\
                            <div class="ruleview-relation" ng-hide="!rule[0].relation" ng-bind="rule[0].relation"></div>\
                            <div class="ruleview-condition" ng-class="{\'ads-ruleview-condition-not\': rule[0].negated}">\
                                <div class="ruleview-negated" ng-show="rule[0].negated">not</div>\
                                <div class="ruleview-argument" ng-bind="rule[0].condition.freeArg.name"></div>\
                                <div class="ruleview-operation" ng-bind="rule[0].condition.operation"></div>\
                                <div class="ruleview-value" ng-bind="renderValue(rule[0].condition)"></div>\
                            </div>\
                            <div class="ruleview-editor-rule-remove" ng-click="removeRule($event, rule[0])">x</div>\
                        </div>\
                        <ul class="ruleview-list" ng-hide="rule.length < 2">\
                            <li ng-repeat="compoundRule in rule | startFrom: 1">\
                                <ruleview-editor-directive data="compoundRule"></ruleview-editor-directive>\
                            </li>\
                        </ul>\
                    </div>';
            var $template = angular.element(template);

            scope.$watch('data', function() {
                console.log('[watch: data] rule editor: ', scope.data);
                scope.rule = ruleHelperService.flattenRule(scope.data);
            });

            scope.$root.$on("rule::updated", function(e, obj) {
                removeActivityFromRuleDomElement();
            });

            scope.editRule = function(event, rule) {
                var isSelectedTheSameRuleElement = activeRuleDomElement === event.currentTarget;
                removeActivityFromRuleDomElement();
                if(isSelectedTheSameRuleElement) {
                    scope.$root.$broadcast("rulebuilder::clean");
                } else {
                    $(activeRuleDomElement = event.currentTarget).addClass('ruleview-editor-rule-active');
                    scope.$root.$broadcast("rule::edit", { rule: rule });
                }
            };

            scope.removeRule = function(event, rule) {
                removeActivityFromRuleDomElement();
                scope.$root.$broadcast("rule::remove", { rule: rule });
                event.stopPropagation();
            };

            scope.hideRule = function() {
                return !scope.data.condition && (scope.data.compoundParts == null || scope.data.compoundParts.length < 1);
            };

            scope.renderValue = function(condition) {
                return ruleHelperService.renderValue(condition);
            };


            $compile($template)(scope);
            element.replaceWith($template);
        }

        function removeActivityFromRuleDomElement() {
            $(activeRuleDomElement).removeClass('ruleview-editor-rule-active');
            activeRuleDomElement = null;
        }

        return {
            restrict: 'E',
            scope: {
                data: '='
            },
            link: link
        };
    }]);

})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
    "use strict";

    angular.module('app.directives').directive('ruleviewDirective', ['$compile', 'ruleHelperService', 'OPERATION', 'utilsService', function($compile, ruleHelperService, OPERATION, utilsService) {
        return {
            restrict: 'E',
            scope: {
                data: '='
            },
            link: function(scope, element, attrs) {
                /**
                 * The compile function cannot handle directives that recursively use themselves in their own templates
                 * or compile functions. Compiling these directives results in an infinite loop and a stack overflow errors.
                 * This can be avoided by manually using $compile in the postLink function to imperatively compile
                 * a directive's template instead of relying on automatic template compilation via template or templateUrl
                 * declaration or manual compilation inside the compile function.
                 */
                var template = '\
                    <div rule-type="ruleview">\
                        <div class="ruleview-rule">\
                            <div class="ruleview-relation" ng-hide="!rule[0].relation" ng-bind="rule[0].relation"></div>\
                            <div class="ruleview-condition" ng-class="{\'ads-ruleview-condition-not\': rule[0].negated}">\
                                <div class="ruleview-negated" ng-show="rule[0].negated">not</div>\
                                <div class="ruleview-argument" ng-bind="rule[0].condition.freeArg.name"></div>\
                                <div class="ruleview-operation" ng-bind="rule[0].condition.operation"></div>\
                                <div class="ruleview-value" ng-bind="renderValue(rule[0].condition)"></div>\
                            </div>\
                        </div>\
                        <ul class="ruleview-list" ng-hide="rule.length < 2">\
                            <li ng-repeat="compoundRule in rule | startFrom: 1">\
                                <ruleview-directive data="compoundRule"></ruleview-directive>\
                            </li>\
                        </ul>\
                    </div>';
                var $template = angular.element(template);
                $compile($template)(scope);
                element.replaceWith($template);

                scope.rule = ruleHelperService.flattenRule(scope.data);

                scope.renderValue = function(condition) {
                    return ruleHelperService.renderValue(condition);
                };

                scope.$watch('data', function() {
                    scope.rule = ruleHelperService.flattenRule(scope.data);
                });
            }
        };
    }]);

})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
angular.module('app.directives').directive('simpleSearchDirective',
    ['$log', function ($log) {
        return {
            link: function (scope, element, attrs) {
                scope.searchQuery = {
                    value: '',
                    multipleKey: '',
                    multipleValue: ''
                };

                var options = scope.options;
                var data = options.data;

                scope.currentData = data[0];

                scope.changeData = changeData;
                scope.search = search;

                init();

                function init() {

                    if (!options.currentData) {
                        options.currentData = data[0];
                    }
                }

                function changeData(data) {
                    scope.currentData = data;
                    scope.searchQuery.value = '';
                    scope.searchQuery.multipleKey = '';
                    scope.searchQuery.multipleValue = '';
                    var searchObject = {};
                    scope.currentData.name.apiArgs.forEach(function(arg) {
                        searchObject[arg] = '';
                    });
                    passSearchParams(searchObject);
                }

                function search(apiArgs, searchValue) {
                    var searchObject = {};
                    if (scope.currentData.name.friendlyName === 'Key and Value') {
                        searchObject.FREE_ARG = scope.searchQuery.multipleKey;
                        searchObject.FIXED_ARG = scope.searchQuery.multipleValue;
                    } else {
                        apiArgs.forEach(function(arg) {
                            searchObject[arg] = scope.searchQuery.value;
                        });
                    }
                    passSearchParams(searchObject);
                }

                function passSearchParams(searchObject) {
                    scope.$emit('search-entities', {
                        searchParam: searchObject
                    })
                }
            },
            restrict: 'E',
            scope: {
                options: "="
            },
            templateUrl: 'app/shared/directives/simplesearch/simplesearch.html'
        };
    }]);


/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.directives')
        .directive('tagAutocompleteDirective', ['$log', 'alertsService', function ($log, alertsService) {
            function link(scope, element, attrs) {
                scope.suggestions = [];
                scope.selectedIndex = -1;
                scope.searchText = "";

                scope.removeTag = function(index) {
                    scope.selectedTags.splice(index, 1);
                };

                scope.search = function() {
                    if (!scope.disableAutocomplete) {
                        var result = [];
                        for (var i = 0; i < scope.data.length; i++) {
                            var value = scope.data[i];
                            if (value.indexOf(scope.searchText) !== -1 || scope.searchText.trim() == '') {
                                result.push(value);
                            }
                        }
                        scope.suggestions = result;
                        scope.selectedIndex = -1;
                    }
                };

                scope.addToSelectedTags = function(index) {
                    var suggestion = scope.suggestions[index];
                    if(scope.selectedTags.indexOf(suggestion) === -1) {
                        scope.selectedTags.push(suggestion);
                        scope.searchText = '';
                        scope.suggestions = [];
                    }
                };

                scope.checkKeyDown = function(event) {
                    if (scope.disableAutocomplete) {
                        if (event.keyCode === 13 && scope.selectedTags.indexOf(scope.searchText) === -1) {
                            scope.selectedTags.push(scope.searchText);
                            scope.searchText = '';
                        } else if (event.keyCode === 13 && scope.selectedTags.indexOf(scope.searchText) !== -1) {
                            alertsService.showError({message: "Duplicates should not be added"});
                        }
                    } else {
                        if (event.keyCode === 40) {
                            event.preventDefault();
                            if (scope.selectedIndex + 1 !== scope.suggestions.length) {
                                scope.selectedIndex++;
                            }
                        } else if (event.keyCode === 38) {
                            event.preventDefault();
                            if(scope.selectedIndex - 1 !== -1){
                                scope.selectedIndex--;
                            }
                        } else if (event.keyCode === 13 && scope.selectedIndex !== -1) {
                            scope.addToSelectedTags(scope.selectedIndex);
                            scope.selectedIndex = -1;
                        }
                    }
                };

                scope.showAllValuesIfNecessary = function() {
                    if (!scope.searchText) {
                        scope.search();
                    }
                };

                scope.$watch('selectedIndex', function(value) {
                    if(value !== -1) {
                        scope.searchText = scope.suggestions[scope.selectedIndex];
                    }
                });
            }

            return {
                restrict: 'AE',
                scope: {
                    selectedTags: '=',
                    data: "=",
                    disableAutocomplete: "="
                },
                templateUrl: 'app/shared/directives/tagautocomplete/tagautocomplete.html',
                link: link
            };
        }]);
})();


/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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

    angular.module('app').directive('toggleButton',
    function () {
        return {
            scope: {
                data: "="
            },
            restrict: 'E',
            replace: 'true',
            templateUrl: 'app/shared/directives/toggle-button.directive.html',
            controller: 'ToggleButtonCtrl',
            controllerAs: 'directiveCtrl'
        };
    })})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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

    angular.module('app').directive('fileSelect', fileSelect);
    function fileSelect() {
        return {
            restrict: 'E',
            scope: {
                onChange: '=',
                limit: '='
            },
            link: function (scope, el) {
                //ToDo: use jquery selectors or something similar
                var fileInputEl = el.find('input')[1];// input (type=file) is used to choose files
                fileInputEl.onchange = function (e) {
                    scope.onChange((e.srcElement || e.target).files[0]);
                    el.find('input')[0].value = fileInputEl.value;// input (type=text) is used to display filename
                    $(this).val("");
                };
            },
            templateUrl: 'app/shared/file-select/file-select.directive.html'
        };
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .controller('ChangeLogController', controller);

    controller.$inject = ['$log', 'changeLogService'];

    function controller($log, changeLogService) {
        var vm = this;
        vm.intervalsList = [];
        vm.isDataLoading = false;

        init();

        function init() {
            vm.isDataLoading = true;
            changeLogService.getChangeLog().then(
                function(result) {
                    fillIntervalsList(result.data);
                },
                function(reason) {
                    $log.debug('REASON', reason);
                }
            ).finally(function() {
                vm.isDataLoading = false;
            });
        }

        function fillIntervalsList(data) {
            //each timestamp corresponds to list of changes
            var sortedTimestamps = getSortedKeys(data);
            var startOfInterval;
            var endOfInterval;
            for(var i = 0; i < sortedTimestamps.length; i++) {
                var changesObj = {};
                startOfInterval = sortedTimestamps[i];
                if (i === sortedTimestamps.length - 1) {
                    endOfInterval = new Date();
                } else {
                    //end of current interval one second less than start of next interval
                    endOfInterval = sortedTimestamps[i+1] - 1000;
                }
                changesObj.startOfInterval = timeFromTimestamp(startOfInterval);
                changesObj.endOfInterval = timeFromTimestamp(endOfInterval);
                changesObj.changesList = data[startOfInterval];
                changeLogService.countAndSaveOperationsNumber(data[startOfInterval], changesObj);
                vm.intervalsList.push(changesObj);
            }
        }

        function getSortedKeys(object) {
            var sortedKeys = [];
            for (var k in object) {
                if (object.hasOwnProperty(k))
                {
                    sortedKeys.push(parseInt(k));
                }
            }
            sortedKeys.sort(function(a, b) {
                return a - b;
            });

            return sortedKeys;
        }

        function timeFromTimestamp(timestamp) {
            var date = new Date(timestamp);
            var regexp = /\((.)*\)/;
            var result = date.toTimeString().replace(regexp, '');
            return result;
        }
    }
})();


/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.controller')
        .controller('EditController', controller);

    controller.$inject = ['$state', '$scope', 'mainPage', 'stateParameters'];

    function controller($state, $scope, mainPage, stateParameters) {

        $scope.$on('applicationType:changed', function(event, data) {
            if (stateParameters) {
                $state.go(mainPage, stateParameters);
            } else {
                $state.go(mainPage);
            }
        });
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.controller')
        .controller('MainController', controller);

    controller.$inject = ['$state', '$scope'];

    function controller($state, $scope) {

        $scope.$on('applicationType:changed', function(event, data) {
            $state.reload();
        });
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.directives')
        .controller('TagautocompleteModal', controller);

    controller.$inject=['$uibModalInstance', '$scope', 'data'];

    function controller($modalInstance, $scope, data) {
        var vm = this;
        vm.selectedTags = data.selectedTags;
        vm.data = data.data;
        vm.disableAutocomplete = data.disableAutocomplete;

        vm.cancel = cancel;
        vm.save = save;


        function save() {
            data.onSave(vm.selectedTags);
            cancel();
        }

        function cancel() {
            $modalInstance.close();
        }
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app')
        .controller('ToggleButtonCtrl', ToggleButtonCtrl);

    ToggleButtonCtrl.$inject = ['$scope'];

    function ToggleButtonCtrl($scope) {

        var vm = this;

        vm.maxElements = 10;

        vm.click = click;
        vm.showButton = angular.isDefined($scope.data) && ($scope.data.length > vm.maxElements);
        vm.expanded = true;

        click();

        function click() {
            vm.expanded = !vm.expanded;

            if(vm.expanded) {
                vm.slicedData = $scope.data;
                vm.btnTitle = "Show less";
            } else {
                vm.slicedData = vm.showButton ? $scope.data.slice(0, vm.maxElements) : $scope.data;
                vm.btnTitle = "...Show more";
            }
        }
    }
})();


/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.filtered-select')
        .controller('FilteredSelect', controller);

    controller.$inject=['$uibModalInstance', '$scope', 'title', 'data', 'onSelect'];

    function controller($modalInstance, $scope, title, data, onSelect) {
        var vm = this;
        vm.title = title ? title : 'Values';
        vm.currentDataEntry = data;
        vm.query = '';

        vm.filterData = function(value) {
            return value.indexOf(vm.query) !== -1;
        };

        vm.selectItem = function(value) {
            onSelect(value);
            vm.cancel();
        };

        vm.cancel = function() {
            $modalInstance.close();
        };
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .controller('SharedTestPageController', controller);

    controller.$inject = ['sharedTestPageService', 'alertsService', 'LOG_UPLOAD_FREE_ARG_AUTOCOMPLETE_VALUE', 'testPageUtils', '$state'];

    function controller(sharedTestPageService, alertsService, LOG_UPLOAD_FREE_ARG_AUTOCOMPLETE_VALUE, testPageUtils, $state) {
        var vm = this;
        vm.matchedRules = null;
        vm.parameters = [{key: '', value: ''}];
        vm.autoCompleteValues = LOG_UPLOAD_FREE_ARG_AUTOCOMPLETE_VALUE;
        vm.context = null;
        vm.pageType = $state.current.data.pageType;
        vm.pageName = $state.current.data.pageName;
        vm.apiUrl = $state.current.data.matchRuleApiUrl;
        vm.settingsType = [
            {"name": 'EPON', "value": "epon"},
            {"name": 'PARTNER SETTINGS', "value": "partnersettings"}
        ];
        vm.selectedTypes = [];
        vm.featureControl = null;

        vm.matchRule = matchRule;
        vm.hasMatchedRules = hasMatchedRules;

        function matchRule() {
            vm.context = null;
            vm.matchedRules = null;
            if (testPageUtils.validateInput(vm.parameters)) {
                var objParams = testPageUtils.getParametersAsObject(vm.parameters);
                sharedTestPageService.getMatchedRules(vm.apiUrl, vm.selectedTypes, objParams).then(function (resp) {
                    vm.matchedRules = resp.data.result;
                    vm.featureControl = JSON.stringify(resp.data.featureControl, null, 2);
                    vm.context = resp.data.context;
                }, function (error) {
                    alertsService.showError({title: 'Error', message: error.data.message});
                });
            }
        }

        function hasMatchedRules() {
            return vm.matchedRules ? Object.keys(vm.matchedRules).length != 0 : false;
        }
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .controller('StatisticsController', controller);

    controller.$inject = ['$log', 'statisticsService', 'alertsService'];

    function controller($log, statisticsService, alertsService) {
        var vm = this;

        vm.cacheMap = {};
        vm.reloadAllCache = reloadAllCache;
        vm.reloadCacheByCfName = reloadCacheByCfName;

        getCacheMap();

        function getCacheMap() {
            statisticsService.getAllStatistics().then(function (result) {
                $log.debug('RESULT', result);
                vm.cacheMap = result.data;
                countSummary(vm.cacheMap);
            }, function (reason) {
                $log.debug('REASON', reason);
            });
        }

        function reloadAllCache() {
            statisticsService.reloadAllCache().then(function (result) {
                alertsService.showSuccessMessage({message: 'All Cache updated successfully'});
                vm.cacheMap = result.data;
                countSummary(vm.cacheMap);
            }, function (reason) {
                $log.debug('REASON', reason);
            });
        }

        function reloadCacheByCfName(cfName) {
            statisticsService.reloadCacheByCfName(cfName).then(function (result) {
                alertsService.showSuccessMessage({message: 'Cache updated successfully'});
                vm.cacheMap[cfName] = result.data;
                countSummary(vm.cacheMap);
            }, function (reason) {
                $log.debug('REASON', reason);
            });
        }

        function countSummary(cacheMap) {
            var sumTotalLoadTime = 0;
            var sumHitRate = 0;
            var sumMissRate = 0;
            var length = 0;
            for(var columnFamily in cacheMap) {
                length++;
                var obj = cacheMap[columnFamily];
                sumTotalLoadTime += parseInt(obj.totalLoadTime);
                sumHitRate += parseInt(obj.hitRate);
                sumMissRate += parseInt(obj.missRate);
            }
            vm.generalTime = sumTotalLoadTime;
            vm.avgHitRate = sumHitRate / length;
            vm.avgMissRate = sumMissRate / length;
        }
    }
})();


/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.filters')
        .filter('startFrom', function () {
            return function (input, start) {
                if (input === undefined || input === null || input.length === 0) {
                    return [];
                }
                start = +start; //parse to int
                return input.slice(start);
            }
        });
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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

    angular.module('app.services').constant('REGEXP_CONSTANTS', regexpConstants);

    function regexpConstants() {
        var numericPattern = new RegExp('^[-]?[0-9]+([.]{1}[0-9]+)?$');
        var versionPattern = new RegExp('^([0-9a-zA-Z]+([-]?[0-9a-zA-Z]+)*)+([.]{1}[0-9a-zA-Z]+([0-9a-zA-Z-]+[0-9a-zA-Z]+)?)*$');
        var urlPattern = new RegExp('([a-z]+){1}(:\/\/)([\\w]+)([:]*)([0-9]*)[\/]*([\\w]*)');
        var result = {
            alphabetical: /^[a-zA-Z]*$/,
            nonEmptyAlphabetical: /^[a-zA-Z]+$/,
            numerical: /^\d+$/,
            percent: /^(?:100|\d{1,2})(?:\.\d{1,2})?$/,
            alphaNumericalWithUnderscores: /^[a-zA-z0-9_]+$/,
            alphaNumericalWithUnderscoresAndSpaces: /^[a-zA-z0-9_ ]+$/,
            ipv4: /^0*([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])\.0*([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])\.0*([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])\.0*([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])$/,
            //ipv6 validates using ipv6.js
            stackName: /^\/[a-zA-Z0-9._-]+\/[a-zA-Z0-9._-]+$/,
            numericPattern: numericPattern,
            versionPattern: versionPattern,
            urlPattern: /^([a-z]+){1}(:\/\/)([\w]+)([:]*)([0-9]*)[\/]*([\w]*)/g,
            urnPattern: /^[a-zA-Z0-9-_;\.]+$/,
            portPattern: '/^[0-9]{1,5}$/'
        };
        return result;
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
                        if (!config.url
                            || config.url.includes('.html')
                            || containsAnyMatch(config.url, apiToExclude)) {
                            return config;
                        }
                        let currentApplicationType = getApplicationType($cookies, $rootScope);
                        let relativeRequestUrl = config.url;
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
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.authorization', [])
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.change', ['diff-match-patch'])
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.devicesettings', ['ngResource'])
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.formula', ['ngResource', 'app.filters'])
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.loguploadsettings', ['ngResource'])
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.testpage', ['ngResource'])
})();


/*******************************************************************************
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 *******************************************************************************/

(function() {
    'use strict';

    angular
        .module('app.uploadRepository', ['ngResource'])
})();


/*******************************************************************************
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 *******************************************************************************/

(function() {
    'use strict';

    angular
        .module('app.vodsettings', ['ngResource', 'app.filters'])
})();


/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
})();


/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.environment', ['ngResource'])
})();


/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
})();


/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.log', ['ngResource'])
})();


/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.model', ['ngResource'])
})();


/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.percentfilter', ['app.distributionFilter'])
})();


/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.firmwareReportPage', ['ngResource'])
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.roundrobinfilter', ['ngResource'])
})();


/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.firmwareTestPage', ['ngResource'])
})();


/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.firmwarerule', ['ui.bootstrap'])
})();


/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.firmwareruletemplate', [])

})();


/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.migration', [])
})();


/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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

    angular.module('app.namespacedlist', ['app.filters'])

})();


/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.penetrationData', ['ngResource'])
})();


/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
    angular.module('app.feature', []);
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
    angular.module('app.featurerule', ['ui.select']);
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.settingprofile', [])
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.settingrule', ['ngResource'])
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.settingsTestPage', []);
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.permanentprofile', ['ngResource'])
})();


/*******************************************************************************
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 *******************************************************************************/

(function() {
    'use strict';

    angular
        .module('app.targetingrule', ['ngResource', 'app.permanentprofileFilters'])
})();


/*******************************************************************************
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 *******************************************************************************/

(function() {
    'use strict';

    angular
        .module('app.telemetrytwoprofile', ['ngResource'])
})();

/*******************************************************************************
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 *******************************************************************************/

(function() {
    'use strict';

    angular
        .module('app.telemetrytwotargetingrule', ['ngResource', 'app.telemetrytwoprofileFilters'])
})();

/*******************************************************************************
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 *******************************************************************************/

(function() {
    'use strict';

    angular
        .module('app.telemetrytwotestpage', ['ngResource', 'app.telemetrytwoprofileFilters'])
})();

/*******************************************************************************
* Copyright 2023 Comcast Cable Communications Management, LLC
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
 *******************************************************************************/

(function() {
    'use strict';

    angular
        .module('app.telemetryTestPage', ['ngResource', 'app.permanentprofileFilters'])
})();


/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.telemetrytwochange', ['diff-match-patch'])
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.authorization')
        .factory('authorizationService', service);

    service.$inject=['$http'];

    function service($http) {
        const ACL_API_URL = '/acl';

        return {
            signInWithAcl: signInWithAcl,
            aclSignOut: aclSignOut,
            getAuthProvider: getAuthProvider,
        };


        function getAuthProvider() {
            return $http.get('/provider');
        }

        function signInWithAcl(credentials) {
            return $http.post( '/auth/basic', credentials);
        }

        function aclSignOut() {
            return $http.get(ACL_API_URL + '/logout');
        }
    }
})();


/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
            return $http.get(urlMapping + "size/");
        }

        function exportAllSettings() {
            window.open(urlMapping + 'export');
        }
    }
})();


/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
            window.open(urlMapping + id + '/?export');
        }

        function exportAllFormulas() {
            window.open(urlMapping + '?export');
        }
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
            return $http.get(urlMapping + "size/");
        }

        function exportAllSettings() {
            window.open(urlMapping + 'export');
        }
    }
})();


/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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

/*******************************************************************************
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 *******************************************************************************/
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
            window.open(urlMapping + id + '/?export');
        }

        function exportAll() {
            window.open(urlMapping + '?export');
        }
    }
})();

/*******************************************************************************
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 *******************************************************************************/
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
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 * Copyright 2023 Comcast Cable Communications Management, LLC
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

            }
        });
    }]);

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
            window.open(API_URL + id + '/?export');
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
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
            window.open(API_URL + id + '/?export');
        }

        function exportAllFirmwareRuleTemplates() {
            window.open(API_URL + '/?export');
        }

        function exportAllFirmwareRuleTemplatesByType(type) {
            window.open(API_URL + '/export/?type=' + type);
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
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
            return $http.post(urlMapping + 'filtered/?pageNumber=' + pageNumber + '&pageSize=' + pageSize, searchParam);
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
            return $http.get(urlMapping + "names/");
        }

        function getAllNamespacedListsByTypeIdToNameMap(type) {
            return $http.get(urlMapping + type + "/names/");
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
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.penetrationData')
        .factory('penetrationDataService', service);

    service.$inject = ['$http'];

    function service($http) {
        var API_URL = 'penetrationdata';

        return {
            getMatchedRules: getMatchedRules
        };

        function getMatchedRules(macAddress) {
            return $http.get(API_URL + '/' + macAddress);
        }
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 * Copyright 2023 Comcast Cable Communications Management, LLC
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

/*******************************************************************************
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 *******************************************************************************/
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

/*******************************************************************************
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 *******************************************************************************/

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

/*******************************************************************************
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 *******************************************************************************/
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

/*******************************************************************************
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 *******************************************************************************/
(function() {
    'use strict';

    angular
        .module('app.telemetrytwotestpage')
        .factory('telemetryTwoTestPageService', service);

    service.$inject = ['$http'];

    function service($http) {
        var API_URL = 'telemetry/v2/testpage/';

        return {
            getMatchedRules: getMatchedRules
        };

        function getMatchedRules(params) {
            return $http.post(API_URL, params);
        }
    }
})();

/*******************************************************************************
* Copyright 2023 Comcast Cable Communications Management, LLC
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
 *******************************************************************************/
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
 * Copyright 2023 Comcast Cable Communications Management, LLC
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


/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.authorization')
        .controller('AuthorizationController', controller);

    controller.$inject=['$scope', '$rootScope', '$controller', 'authorizationService', 'alertsService', '$state', 'authUtilsService'];
    function controller($scope, $rootScope, $controller, authorizationService, alertsService, $state, authUtils) {
        let vm = this;
        vm.crendentials = {
            login: '',
            password: ''
        }

        vm.signInWithAcl = signInWithAcl;

        angular.extend(vm, $controller('MainController', {
            $scope: $scope
        }));

        init();

        function init() {
            if (authUtils.isAuthorized()) {
                $state.go('environments');
            }
            authorizationService.getAuthProvider().then(function (resp) {
                vm.authProvider = resp.data.name;
            }, function (error) {
                alertsService.showError({title: 'Error', message: error.data.message});
            });

        }

        function signInWithAcl() {
            authorizationService.signInWithAcl(vm.crendentials).then(function (resp) {
                $rootScope.currentUser = resp.data;
                $state.go('environments');
            }, function (error) {
                alertsService.showError({title: 'Authorization Error', message: error.data});
            });
        }
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.change')
        .controller('ChangeController', controller);

    controller.$inject=['$scope', '$rootScope', 'changeService', 'alertsService', 'CHANGE_TYPE', 'utilsService', 'dialogs', 'paginationService', 'CHANGE_OPERATION', 'ENTITY_TYPE', '$controller', 'authUtilsService', 'changeUtils'];
    function controller($scope, $rootScope, changeService, alertsService, CHANGE_TYPE, utilsService, dialogs, paginationService, CHANGE_OPERATION, ENTITY_TYPE, $controller, authUtils, changeUtils) {
        var vm = this;

        angular.extend(vm, $controller('MainController', {
            $scope: $scope
        }));

        vm.currentChangeType = CHANGE_TYPE.PENDING;
        vm.CHANGE_TYPE = CHANGE_TYPE;
        vm.ENTITY_TYPE = ENTITY_TYPE;
        vm.changes = [];
        vm.allChanges = [];
        vm.allChecked = false;
        vm.changeDiffs = {};
        vm.approvedChangesSize = null;
        vm.pendingChangesSize = null;
        vm.paginationStorageKey = 'changesPageSize';
        vm.availablePageSizes = paginationService.getAvailablePageSizes();
        vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey, "10");
        vm.pageSizeModel = vm.pageSize;
        vm.pageNumber = paginationService.getPageNumber();
        vm.numPages = 0;
        vm.changesForMultipleOperation = [];
        vm.CHANGE_OPERATION = CHANGE_OPERATION;
        vm.isDataLoading = false;
        vm.isNullOrUndefinedOrEmptyObject = utilsService.isNullOrUndefinedOrEmptyObject;
        vm.errorMessageById = {};

        vm.searchOptions = {
            data: [
                {
                    "name": {
                        friendlyName: "Entity",
                        apiArgs: ['ENTITY']
                    }
                },
                {
                    "name": {
                        friendlyName: "User",
                        apiArgs: ["AUTHOR"]
                    }
                }
            ]
        };
        vm.cancel = cancel;
        vm.getChanges = getChanges;
        vm.getApprovedChanges = getApprovedChanges;
        vm.getEntityView = changeService.getEntityView;
        vm.getEntityName = changeService.getEntityName;
        vm.getSizeByType = getSizeByType;
        vm.getChangesByType = getChangesByType;
        vm.changePageSize = changePageSize;
        vm.updateChangeList = updateChangeList;
        vm.applySelectedChanges = applySelectedChanges;
        vm.isAddedToMultipleOperation = isAddedToMultipleOperation;
        vm.isEmptyString = utilsService.isEmptyString;
        vm.canWriteChangeAndTelemetry = canWriteChangeAndTelemetry;
        vm.selectAllChanges = selectAllChanges;

        init();

        function init() {
            getChanges();
        }

        $scope.$on('$locationChangeSuccess', function () {
            if (paginationService.paginationSettingsInLocationHaveChanged(vm.pageNumber, vm.pageSize)) {
                vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
                vm.pageSizeModel = vm.pageSize;
                paginationService.saveDefaultPageSize(vm.pageSize, vm.paginationStorageKey);
                vm.pageNumber = paginationService.getPageNumber();
                init();
            }
        });

        $scope.$on('search-entities', function(event, data) {
            vm.searchParam = data.searchParam;
            var changePromise;
            if (vm.currentChangeType === CHANGE_TYPE.APPROVED) {
                changePromise = changeService.getFilteredApprovedChanges(vm.pageSize, vm.pageNumber, vm.searchParam);
            } else {
                changePromise = changeService.getFilteredChanges(vm.pageSize, vm.pageNumber, vm.searchParam);
            }
            changePromise.then(responseHandler, alertsService.errorHandler);
        });

        function getApprovedChanges() {
            vm.isDataLoading=true;
            vm.allChecked = false;
            cleanUpChangeIds(vm.currentChangeType, CHANGE_TYPE.APPROVED, vm.changesForMultipleOperation);
            vm.currentChangeType = CHANGE_TYPE.APPROVED;
            changeService.getFilteredApprovedChanges(vm.pageSize, vm.pageNumber, vm.searchParam).then(
                responseHandler, alertsService.errorHandler).finally(function() {
                    vm.isDataLoading = false;
                });
        }

        function getChanges() {
            vm.isDataLoading=true;
            vm.allChecked = false;
            cleanUpChangeIds(vm.currentChangeType, CHANGE_TYPE.PENDING, vm.changesForMultipleOperation);
            vm.currentChangeType = CHANGE_TYPE.PENDING;
            changeService.getFilteredChanges(vm.pageSize, vm.pageNumber, vm.searchParam).then(
                responseHandler, alertsService.errorHandler).finally(function() {
                    vm.isDataLoading = false;
                });
        }

        function responseHandler(resp) {
            vm.allChanges = resp.data;
            vm.changes = changeUtils.groupChanges(resp.data);
            getSizes(resp);
        }

        function cancel(change) {
            var dlg = dialogs.confirm('Cancel confirmation', '<span class="break-word-inline">Are you sure you want to cancel change of ' + vm.getEntityName(change) + " entity? </span>");
            dlg.result.then(function(btn) {
                changeService.cancel(change.id).then(function (resp) {
                    alertsService.showSuccessMessage({message: 'Change of ' + vm.getEntityName(change) + ' entity successfully canceled'});
                    utilsService.removeItemFromListById(vm.changes, change.id);
                    utilsService.removeItemFromListById(vm.changesForMultipleOperation, change.id);
                    getSizes(resp);
                    vm.pageNumber = getPageNumberAfterUpdate(vm.currentChangeType, vm.pageSize, vm.pageNumber);
                    getChangesByType(vm.currentChangeType);
                }, alertsService.errorHandler);
            }, function() {
                // click cancel
            });
        }

        function getSizes(resp) {
            vm.approvedChangesSize = resp.headers('approvedChangesSize');
            vm.pendingChangesSize = resp.headers('pendingChangesSize');
        }

        function getSizeByType(type) {
            return type === CHANGE_TYPE.PENDING ? vm.pendingChangesSize : vm.approvedChangesSize;
        }

        function getChangesByType(type) {
            if (type === CHANGE_TYPE.PENDING) {
                getChanges();
            } else {
                getApprovedChanges();
            }
        }

        function changePageSize(pageSizeModel) {
            vm.pageSize = pageSizeModel;
            paginationService.saveDefaultPageSize(vm.pageSize, vm.paginationStorageKey);
            getChangesByType(vm.currentChangeType);
        }

        function getPageNumberAfterUpdate(currentPendingChangeType, pageSize, pageNumber) {
            var numberOfPagesAfterDeletion = Math.ceil((getSizeByType(currentPendingChangeType)) / pageSize);
            var newPageNumber = pageNumber > numberOfPagesAfterDeletion && numberOfPagesAfterDeletion !== 0 ? numberOfPagesAfterDeletion : pageNumber;
            return newPageNumber;
        }

        function updateChangeList(checked, change) {
           if (checked) {
               vm.changesForMultipleOperation.push(change);
           } else {
               utilsService.removeItemFromArrayWithDeepEquals(vm.changesForMultipleOperation, change);
           }
           if (!vm.isEmptyString(vm.errorMessageById[change.id])) {
               vm.errorMessageById[change.id] = '';
           }
        }

        function applySelectedChanges(operation) {
            var dlg = dialogs.confirm('Approve confirmation', '<span class="break-word-inline">Are you sure you want to ' + operation.toLowerCase() + ' ' + vm.changesForMultipleOperation.length + ' selected changes?</span>');
            dlg.result.then(function(btn) {
                applyChanges(vm.changesForMultipleOperation);
            }, function() {
                // click cancel
            });
        }

        function applyChanges(changes) {
            var changeIds = _.map(changes, function(change){return change.id});
            var changedPromise;
            if (vm.currentChangeType === vm.CHANGE_TYPE.PENDING) {
                changedPromise = changeService.approveChanges(changeIds);
            } else {
                changedPromise = changeService.revertChanges(changeIds);
            }
            changedPromise.then(function (resp) {
                vm.errorMessageById = resp.data;
                if (utilsService.isMapEmpty(vm.errorMessageById)) {
                    showSuccessApproveRevertMessage();
                } else {
                    let actionType = vm.currentChangeType === vm.CHANGE_TYPE.PENDING ? 'apply' : 'revert';
                    alertsService.showError({title: 'Error', message: `Errors occurred when trying to ${actionType} selected changes`});
                }
                getChangesByType(vm.currentChangeType);
                cleanUpSelectedChanges(vm.changesForMultipleOperation, _.keys(vm.errorMessageById));
            }, function (error) {
                alertsService.showError({title: 'Error', message: error.data.message});
                getChangesByType(vm.currentChangeType);
            });
        }

        function selectAllChanges(checked) {
            vm.allChanges.forEach(function (change) {
                updateChangeList(checked, change);
            });
        }

        function showSuccessApproveRevertMessage() {
            if (vm.currentChangeType === vm.CHANGE_TYPE.PENDING) {
                alertsService.showSuccessMessage({message: 'Selected changes have been successfully approved and unselected changes canceled'});
            } else {
                alertsService.showSuccessMessage({message: 'Selected changes were reverted successfully'});
            }
        }

        function cleanUpSelectedChanges(selectedChanges, changeIdsWithError) {
            _.each(selectedChanges, function(change) {
                if (!changeIdsWithError.includes(change.id)) {
                    utilsService.removeItemFromListById(selectedChanges, change.id);
                }
            });
        }

        function isAddedToMultipleOperation(change) {
            for(var i = 0; i < vm.changesForMultipleOperation.length; i++) {
                if (angular.equals(vm.changesForMultipleOperation[i], change)) {
                    return true;
                }
            }
        }

        function cleanUpChangeIds(currentPendingChangeType, newPendingChangeType, changesForMultipleOperation) {
            if (currentPendingChangeType !== newPendingChangeType) {
                changesForMultipleOperation.length = 0;
                clearErrorMessages();
            }
        }

        function clearErrorMessages() {
            vm.errorMessageById = {};
        }

        function canWriteChangeAndTelemetry() {
            return authUtils.canWriteChangesByApplication($rootScope.applicationType) && authUtils.canWriteTelemetryByApplication($rootScope.applicationType);
        }
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .controller('DeviceSettingsController', controller);

    controller.$inject = ['$scope', '$uibModal', '$controller', 'deviceSettingsService', 'alertsService', 'dialogs', 'formulaService', 'paginationService', 'deviceSettingsSize'];

    function controller($scope, $modal, $controller, deviceSettingsService, alertsService, dialogs, formulaService, paginationService, deviceSettingsSize) {
        var vm = this;

        angular.extend(vm, $controller('MainController', {
            $scope: $scope
        }));

        vm.deviceSettingsPage = [];
        vm.isSettingsAvailable = {};
        vm.paginationStorageKey = 'deviceSettingsPageSize';
        vm.availablePageSizes = paginationService.getAvailablePageSizes();
        vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
        vm.pageSizeModel = vm.pageSize;
        vm.pageNumber = paginationService.getPageNumber();
        vm.numPages = 0;
        vm.deviceSettingsSize = parseInt(deviceSettingsSize);
        vm.isFormulasAvailable = null;
        vm.searchParam = {};
        vm.searchOptions = {
            data: [
                {
                    "name": {
                        friendlyName: "Name",
                        apiArgs: ['NAME']
                    }
                }
            ]
        };

        vm.viewDeviceSettings = viewDeviceSettings;
        vm.editDeviceSettings = editDeviceSettings;
        vm.deleteDeviceSettings = deleteDeviceSettings;
        vm.viewFormula = viewFormula;
        vm.changePageSize = changePageSize;
        vm.getSize = getSize;
        vm.getDeviceSettingsPage = getDeviceSettingsPage;
        vm.startParse = startParse;
        vm.isDataLoading = false;
        vm.exportAllSettings = deviceSettingsService.exportAllSettings;

        init();

        function init() {
            getDeviceSettingsPage(vm.pageNumber, vm.pageSize);
        }

        $scope.$on('$locationChangeSuccess', function () {
            if (paginationService.paginationSettingsInLocationHaveChanged(vm.pageNumber, vm.pageSize)) {
                vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
                vm.pageSizeModel = vm.pageSize;
                paginationService.saveDefaultPageSize(vm.pageSize, vm.paginationStorageKey);
                vm.pageNumber = paginationService.getPageNumber();
                init();
            }
        });

        $scope.$on('search-entities', function(event, data) {
            vm.searchParam = data.searchParam;
            getDeviceSettingsPage(vm.pageNumber, vm.pageSize, vm.searchParam);
        });

        function getDeviceSettingsPage(pageNumber, pageSize) {
            vm.isDataLoading = true;
            deviceSettingsService.getDeviceSettingsPage(pageNumber, pageSize, vm.searchParam).then(
                function(result) {
                    vm.isDataLoading = false;
                    vm.deviceSettingsPage = result.data;
                    vm.deviceSettingsSize = result.headers('numberOfItems');
                    paginationService.savePaginationSettingsInLocation(vm.pageNumber, vm.pageSize);
                    formulaService.getFormulasAvailability(vm.deviceSettingsPage).then(function(resp) {
                        vm.isFormulasAvailable = resp.data;
                    });
                },
                function(reason) {
                    vm.isDataLoading = false;
                    alertsService.failedToLoadData('deviceSettings', reason.data.message);
                }
            );
        }

        function viewDeviceSettings(id) {
            deviceSettingsService.getDeviceSettings(id).then(
                function(result) {
                    if (result.data) {
                        $modal.open({
                            templateUrl: 'app/xconf/dcm/devicesettings/devicesettings.view.html',
                            size: 'lg',
                            controller: 'DeviceSettingsViewController as vm',
                            resolve: {
                                deviceSettings: function () {
                                    return result.data;
                                }
                            }
                        });
                    }
                },
                function(reason) {
                    alertsService.showError({message: reason.data.message, title: 'Service error'});
                }
            );
        }

        function editDeviceSettings(id) {
            deviceSettingsService.getDeviceSettings(id).then(
                function(result) {
                    $modal.open({
                        templateUrl: 'app/xconf/dcm/devicesettings/devicesettings.edit.html',
                        size: 'lg',
                        controller: 'DeviceSettingsEditController as vm',
                        resolve: {
                            deviceSettings: function () {
                                return result.data;
                            },
                            id: function () {
                                return id;
                            }
                        }
                    }).result.then(
                        function() {
                            init();
                        }
                    );
                },
                function(reason) {
                    alertsService.showError({message: reason.data.message, title: 'Service error'});
                }
            );
        }

        function deleteDeviceSettings(deviceSettings) {
            var dlg = dialogs.confirm('Delete confirmation', '<span class="break-word-inline"> Are you sure you want to delete Device Settings ' + deviceSettings.name + "? </span>");
            dlg.result.then(function (btn) {
                deviceSettingsService.deleteDeviceSettings(deviceSettings.id)
                    .then(function (result) {
                        alertsService.showSuccessMessage({message: "Deleted " + deviceSettings.name});
                        shiftItems();
                    }, function (reason) {
                        alertsService.showError({message: reason.data.message, title: "Unable to delete"});
                    });
            });
        }

        function viewFormula(id) {
            formulaService.getById(id).then(function(resp) {
                    $modal.open({
                        templateUrl: 'app/xconf/dcm/formula/formula.modal.view.html',
                        controller: 'FormulaModalViewController as vm',
                        size: 'md',
                        resolve : {
                            formula: function() {
                                return resp.data;
                            }
                        }
                    });
                },
                function(reason) {
                    alertsService.showError({title: 'Error', message: reason.message});
                }
            );
        }

        function shiftItems() {
            vm.deviceSettingsSize--;
            var numberOfPagesAfterDeletion = Math.ceil((vm.deviceSettingsSize) / vm.pageSize);
            var pageNumber = (vm.pageNumber > numberOfPagesAfterDeletion && numberOfPagesAfterDeletion > 0) ? numberOfPagesAfterDeletion : vm.pageNumber;
            getDeviceSettingsPage(pageNumber, vm.pageSize);
        }

        function changePageSize(pageSizeModel) {
            vm.pageSize = pageSizeModel;
            paginationService.saveDefaultPageSize(vm.pageSize, vm.paginationStorageKey);
            getDeviceSettingsPage(vm.pageNumber, vm.pageSize);
        }

        function getSize() {
            return vm.deviceSettingsSize;
        }

        function startParse() {
            return getSize() > 0;
        }
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .controller('DeviceSettingsEditController', controller);

    controller.$inject=['$log', '$scope', '$uibModalInstance', '$controller', 'deviceSettings', 'id', 'deviceSettingsService', 'alertsService', 'deviceSettingsValidationService', 'utilsService', 'EDIT_MODE', 'TIME_ZONES'];

    function controller($log, $scope, $modalInstance, $controller, deviceSettings, id, deviceSettingsService, alertsService, deviceSettingsValidationService, utilsService, EDIT_MODE, TIME_ZONES) {
        var vm = this;

        angular.extend(vm, $controller('EditController', {
            $scope: $scope,
            mainPage: 'devicesettings',
            stateParameters: null
        }));

        vm.EDIT_MODE = EDIT_MODE;
        vm.currentEditMode = deviceSettings ? EDIT_MODE.UPDATE : EDIT_MODE.CREATE;
        vm.timeZones = [
            'UTC',
            'CST',
            'EST',
            'MST',
            'PST'
        ];
        vm.scheduleType = [
            'ActNow',
            'CronExpression'
        ];
        vm.devSettings = deviceSettings ? deviceSettings : {
            id: id,
            name: '',
            checkOnReboot: false,
            settingsAreActive: false,
            schedule: {
                type: vm.scheduleType[0],
                expression: '',
                timeWindowMinutes: 0,
            }
        };
        vm.deviceSettingsService = deviceSettingsService;
        vm.deviceSettingsValidationService = deviceSettingsValidationService;
        vm.usedNames = [];
        vm.cronFields = {
            minutes: '',
            hours: '',
            month: '',
            dayOfWeek: '',
            dayOfMonth: ''
        };
        vm.schedulerTimeZones = TIME_ZONES;
        vm.updateDeviceSettings = updateDeviceSettings;
        vm.saveDeviceSettings = saveDeviceSettings;
        vm.createDeviceSettings = createDeviceSettings;
        vm.dismiss = dismiss;

        init();


        function init() {
            if (vm.devSettings && vm.devSettings.schedule) {
                vm.cronFields = utilsService.parseCronExpression(vm.devSettings.schedule.expression);
            }
            if (vm.devSettings.schedule && !vm.devSettings.schedule.timeZone) {
                vm.devSettings.schedule.timeZone = vm.timeZones[0];
            }
            getUsedNames();
        }
        vm.isSaving=false;
        function createDeviceSettings() {
            vm.isSaving = true;
            deviceSettingsService.createDeviceSettings(vm.devSettings).then(
                function(result) {
                    vm.isSaving = false;
                    alertsService.successfullySaved(vm.devSettings.name);
                    $modalInstance.close();
                },
                function (reason) {
                    vm.isSaving = false;
                    alertsService.failedToSave(vm.devSettings.name, reason.data.message);
                }
            );
        }
        
        function updateDeviceSettings() {
            vm.isSaving = true;
            deviceSettingsService.updateDeviceSettings(vm.devSettings).then(
                function(result) {
                    vm.isSaving = false;
                    alertsService.successfullySaved(vm.devSettings.name);
                    $modalInstance.close();
                },
                function (reason) {
                    vm.isSaving = false;
                    alertsService.failedToSave(vm.devSettings.name, reason.data.message);
                }
            );
        }
        
        function saveDeviceSettings() {
            if (vm.isSaving) {
                return; // do not save if already saving
            }
            
            if (vm.currentEditMode === vm.EDIT_MODE.CREATE) {
                createDeviceSettings();
            }
        
            if (vm.currentEditMode === vm.EDIT_MODE.UPDATE) {
                updateDeviceSettings();
            }
        }
        

        function dismiss() {
            $modalInstance.dismiss('close');
        }

        function getUsedNames() {
            var initialName = angular.copy(vm.devSettings.name);
            vm.deviceSettingsService.getDeviceSettingsNames().then(
                function(result) {
                    vm.usedNames = result.data;
                    utilsService.removeItemFromArray(vm.usedNames, initialName);
                }
            );
        }

        $scope.$watch('vm.cronFields', function() {
            vm.devSettings.schedule.expression = utilsService.getCronExpressionFromFields(vm.cronFields);
        }, true);
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .controller('DeviceSettingsViewController', controller);

    controller.$inject=['$uibModalInstance', 'deviceSettings'];

    function controller($modalInstance, deviceSettings) {
        var vm = this;
        vm.deviceSettings = deviceSettings;
        vm.dismiss = dismiss;

        function dismiss() {
            $modalInstance.dismiss('close');
        }
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .controller('FormulaImportController', controller);

    controller.$inject=['$scope', '$log', '$uibModal', '$location', 'alertsService', 'formulaService', 'importService', 'utilsService', 'paginationService', 'MODES_TO_GET_LOG_FILES', 'uploadRepositories'];

    function controller($scope, $log, $modal, $location, alertsService, formulaService, importService, utilsService, paginationService, MODES_TO_GET_LOG_FILES, uploadRepositories) {
        var vm = this;

        vm.retrieveFile = retrieveFile;
        vm.importFormula = importFormula;
        vm.importAllFormulas = importAllFormulas;
        vm.selectPage = selectPage;
        vm.changePageSize = changePageSize;
        vm.paginationStorageKey = 'dcmFormulasPageSize';
        vm.availablePageSizes = paginationService.getAvailablePageSizes();
        vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
        vm.pageSizeModel = vm.pageSize;
        vm.pageNumber = paginationService.getPageNumber();
        vm.formulasWithSettings = null;
        vm.wrappedFormulasWithSettings = null;
        vm.numPages = 0;
        vm.overwriteAll = overwriteAll;
        vm.isOverwritten = false;
        vm.viewVodSettings = viewVodSettings;
        vm.viewDeviceSettings = viewDeviceSettings;
        vm.viewLogUploadSettings = viewLogUploadSettings;
        vm.existingUploadRepositoriesIds = _.pluck(uploadRepositories, 'id');
        vm.progressBarControl = importService.progressBarControl;

        $scope.$on('$locationChangeSuccess', function () {
            if (paginationService.paginationSettingsInLocationHaveChanged(vm.pageNumber, vm.pageSize)) {
                vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
                vm.pageSizeModel = vm.pageSize;
                paginationService.saveDefaultPageSize(vm.pageSize, vm.paginationStorageKey);
                vm.pageNumber = paginationService.getPageNumber();
                selectPage();
            }
        });


        async function retrieveFile(fileName) {
            vm.formulasWithSettings = null;
            try {
                let file = await importService.openFile(fileName, null, this);
                init(file);
            } catch(e) {
                alertsService.showError({message: e});
            }
        }

        function init(file) {
            var formulasWithSettings = importService.getEntitiesFromFile(file);
            var validationResult = validateFormulasWithSettings(formulasWithSettings);
            if (validationResult) {
                openInfoModal(validationResult);
            } else {
                vm.formulasWithSettings = formulasWithSettings;
                vm.formulasWithSettings.sort(function(a, b) {
                    return a.formula.priority >= b.formula.priority;
                });
                vm.wrappedFormulasWithSettings = importService.wrapToImport(vm.formulasWithSettings);
                vm.isOverwritten = false;
                selectPage();
            }
        }

        function validateFormulasWithSettings(formulasWithSettings) {
            var length = formulasWithSettings.length;
            var result = [];
            for (var i = 0; i < length; i++) {
                var logUploadSettings = formulasWithSettings[i].logUploadSettings;
                if (logUploadSettings) {
                    var validationResult = validateLogUploadSettings(logUploadSettings);
                    if (validationResult) {
                        result.push(validationResult);
                    }
                }
            }

            return result.length > 0 ? result : null;
        }

        function openInfoModal(info) {
            $modal.open({
                templateUrl: 'app/xconf/dcm/formula/formula.validation.info.modal.html',
                size: 'lg',
                controller: 'FormulaValidationInfoController as vm',
                resolve: {
                    data: function () {
                        return info;
                    }
                }
            });
        }

        function validateLogUploadSettings(logUploadSettings) {
            var result = [];

            result.push(validateLogUploadSettingsUploadRepository(logUploadSettings));
            utilsService.removeNullOrUndefinedOrEmptyStringValuesFromArray(result);

            return result.length > 0 ? result : null;
        }

        function validateLogUploadSettingsUploadRepository(logUploadSettings) {
            var uploadRepositoryId = logUploadSettings.uploadRepositoryId;
            if (uploadRepositoryId && vm.existingUploadRepositoriesIds.indexOf(uploadRepositoryId) < 0) {
                return 'LogUploadSettings ' + logUploadSettings.name + ' contains invalid uploadRepository id: ' + uploadRepositoryId;
            }
        }

        function importFormula(wrappedFormulaWithSettings) {
            formulaService.importFormula(wrappedFormulaWithSettings.entity, wrappedFormulaWithSettings.overwrite).then(function () {
                alertsService.successfullySaved(wrappedFormulaWithSettings.entity.formula.name);
                removeFormulaWithSettingsById(vm.wrappedFormulasWithSettings, wrappedFormulaWithSettings.entity.formula.id);
            }, function (reason) {
                var data = reason.data;
                alertsService.showError({title: data.type, message: data.message});
            });
        }

        function importAllFormulas() {
            importService.importAllEntities(formulaService, vm.wrappedFormulasWithSettings, function(id) {
                removeFormulaWithSettingsById(vm.wrappedFormulasWithSettings, id);
            });
        }

        function selectPage() {
            paginationService.savePaginationSettingsInLocation(vm.pageNumber, vm.pageSize);
            computeStartAndEndIndex();
        }

        function computeStartAndEndIndex() {
            vm.startIndex = (vm.pageNumber - 1) * vm.pageSize;
            vm.endIndex = vm.pageNumber * vm.pageSize;
        }

        function changePageSize(pageSizeModel) {
            vm.pageSize = pageSizeModel;
            paginationService.saveDefaultPageSize(vm.pageSize, vm.paginationStorageKey);
            selectPage();
        }

        function overwriteAll() {
            angular.forEach(vm.wrappedFormulasWithSettings, function (val, key) {
                val.overwrite = vm.isOverwritten;
            });
        }

        function viewVodSettings(vodSettings) {
            $modal.open({
                templateUrl: 'app/xconf/dcm/vodsettings/vodsettings.modal.view.html',
                controller: 'VodSettingsModalViewController as vm',
                size: 'md',
                resolve : {
                    vodSettings: function() {
                        return vodSettings;
                    }
                }
            });
        }

        function viewDeviceSettings(deviceSettings) {
            $modal.open({
                templateUrl: 'app/xconf/dcm/devicesettings/devicesettings.view.html',
                size: 'lg',
                controller: 'DeviceSettingsViewController as vm',
                resolve: {
                    deviceSettings: function () {
                        return deviceSettings;
                    }
                }
            });
        }

        function viewLogUploadSettings(logUploadSettings) {
            $modal.open({
                templateUrl: 'app/xconf/dcm/loguploadsettings/loguploadsettings.view.html',
                size: 'lg',
                controller: 'LogUploadSettingsViewController as vm',
                resolve: {
                    logUploadSettings: function () {
                        return logUploadSettings;
                    }
                }
            });
        }

        function removeFormulaWithSettingsById(formulasWithSettings, id) {
            var length = formulasWithSettings.length;
            for (var i = 0; i < length; i++) {
                if (formulasWithSettings[i].entity.formula.id === id) {
                    return formulasWithSettings.splice(i, 1);
                }
            }
        }

        function removeImportedItemsFromListByIdsAndShowSuccessMessages(list, ids) {
            var length = ids.length;
            for (var i = 0; i < length; i++) {
                var removed = removeFormulaWithSettingsById(list, ids[i]);
                alertsService.successfullySaved(removed[0].entity.formula.name);
            }
        }

        function showErrorMessages(messages) {
            var length = messages.length;
            for (var i = 0; i < length; i++) {
                alertsService.showError({title: 'Failed to import', message: messages[i]});
            }
        }
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .controller('FormulaEditController', controller);

    controller.$inject=['$rootScope', '$log', '$scope', '$state', '$stateParams', '$controller', 'alertsService', 'utilsService', 'ruleHelperService', 'formulaService', 'vodSettingsService', '$uibModal', 'deviceSettingsService', '$q', 'logUploadSettingsService', 'SETTINGS_AVAILABILITY_KEYS', 'formulaValidationService', 'EDIT_MODE', 'LOG_UPLOAD_FREE_ARG_AUTOCOMPLETE_VALUE', 'FREE_ARG_NAME', 'ruleValidationService', 'ruleConditionService','firmwareConfigService'];

    function controller($rootScope, $log, $scope, $state, $stateParams, $controller, alertsService, utilsService, ruleHelperService, formulaService, vodSettingsService, $modal, deviceSettingsService, $q, logUploadSettingsService, SETTINGS_AVAILABILITY_KEYS, formulaValidationService, EDIT_MODE, LOG_UPLOAD_FREE_ARG_AUTOCOMPLETE_VALUE, FREE_ARG_NAME, ruleValidationService, ruleConditionService, firmwareConfigService) {
        var vm = this;

        angular.extend(vm, $controller('EditController', {
            $scope: $scope,
            mainPage: 'formulas',
            stateParameters: null
        }));

        vm.formula = {
            "rule": {
                applicationType: $rootScope.applicationType,
                name:''
            }
        };
        vm.SETTINGS_AVAILABILITY_KEYS = SETTINGS_AVAILABILITY_KEYS;
        vm.namespacedListData = ruleHelperService.buildNamespacedListData();
        vm.namespacedListIds = [];
        vm.usedNames = [];
        vm.formulaValidationService = formulaValidationService;
        vm.EDIT_MODE = EDIT_MODE;
        vm.currentEditMode = $stateParams.ruleId ? EDIT_MODE.UPDATE : EDIT_MODE.CREATE;
        vm.formulasSize = $stateParams.formulasSize ? parseInt($stateParams.formulasSize) : 0;
        vm.availablePriorities = [];
        vm.isSettingsAvailable = {};
        vm.freeArgAutocompleteValues = LOG_UPLOAD_FREE_ARG_AUTOCOMPLETE_VALUE;
        vm.validationFunction = ruleValidationService.validate;
        vm.percentFreeArgName = FREE_ARG_NAME.ESTB_MAC_ADDRESS;
        vm.allFirmwareConfigs = [];
        vm.representation = ruleHelperService.buildRepresentation();

        vm.saveFormula = saveFormula;
        vm.editVodSettings = editVodSettings;
        vm.createVodSettings = createVodSettings;
        vm.editDeviceSettings = editDeviceSettings;
        vm.createDeviceSettings = createDeviceSettings;
        vm.editLogUploadSettings = editLogUploadSettings;
        vm.createLogUploadSettings = createLogUploadSettings;
        vm.ipMacIsConditionLimit = "";

        init();

        function init() {
            if (vm.currentEditMode === EDIT_MODE.UPDATE) {
                formulaService.getById($stateParams.ruleId).then(function(resp) {
                    vm.formula.rule = resp.data;
                    getUsedNames();
                }, alertsService.errorHandler);

            }

            if (vm.currentEditMode === EDIT_MODE.CREATE) {
                vm.formula.rule.percentage = 100;
                vm.formula.rule.percentageL1 = 0;
                vm.formula.rule.percentageL2 = 0;
                vm.formula.rule.percentageL3 = 0;
                getUsedNames();
            }

            firmwareConfigService.getAll($rootScope.applicationType).then(function(resp) {
                vm.allFirmwareConfigs = resp.data;
            }, function(error) {
                alertsService.showError({title: 'Error', message: error.data.message});
            });
            _.each(['rule::created', 'rule::updated'], function(eventType) {
                $scope.$root.$on(eventType, function(e, obj) {
                    console.log("Event: " + eventType);
                    vm.representation.firmwareVersion = ruleHelperService.buildFirmwareConfigs(obj.data, vm.allFirmwareConfigs);
                });
            });

            $scope.$root.$on("rule::remove", function(e, obj) {
                var watchResult = ruleHelperService.watchRuleRemoveOperation(vm.isValidCondition, vm.formula.rule, obj);
                vm.formula.rule = watchResult.rule;
                vm.isValidCondition = watchResult.isValidCondition;
                vm.representation.firmwareVersion = ruleHelperService.buildFirmwareConfigs(vm.formula.rule, vm.allFirmwareConfigs);
            });

            if (vm.currentEditMode === EDIT_MODE.UPDATE) {
                formulaService.getSettingsAvailability([$stateParams.ruleId]).then(function(resp) {
                    vm.isSettingsAvailable = resp.data;
                });
            }

            setAvailablePriorities(vm.formulasSize);
            if (vm.currentEditMode === EDIT_MODE.CREATE) {
                vm.formula.rule.priority = vm.availablePriorities[vm.availablePriorities.length - 1];
            }
            ruleConditionService.getIpMacIsConditionLimit().then(function(result) {
                vm.ipMacIsConditionLimit = result.data.ipMacIsConditionLimit;
            })
            
        }

        vm.isSaving = false;
        function saveFormula() {
            if (vm.currentEditMode === vm.EDIT_MODE.UPDATE) {
                vm.isSaving = true;
                formulaService.update(vm.formula.rule).then(function (resp) {
                    alertsService.successfullySaved(vm.formula.rule.name);
                    $state.go('formula-edit', {ruleId: resp.data.id});
                }, function(error) {
                    vm.isSaving = false;
                    alertsService.errorHandler(error);
                }).finally(function() {
                    vm.isSaving = false;
                });
            }
        
            if (vm.currentEditMode === vm.EDIT_MODE.CREATE) {
                vm.isSaving = true;
                formulaService.create(vm.formula.rule).then(function (resp) {
                    alertsService.successfullySaved(vm.formula.rule.name);
                    $state.go('formula-edit', {ruleId: resp.data.id});
                }, function(error) {
                    vm.isSaving = false;
                    alertsService.errorHandler(error);
                }).finally(function() {
                    vm.isSaving = false;
                });
            }
        }
        
        
        function createVodSettings(ruleId) {
            openEditVodSettingsModal(ruleId);
        }

        function editVodSettings(ruleId) {
            vodSettingsService.getById(ruleId).then(function(resp) {
                openEditVodSettingsModal(ruleId, resp.data);
            }, function(error) {
                $log.error(error.data.message);
            });
        }

        function openEditVodSettingsModal(id, vodSettings) {
            $modal.open({
                templateUrl: 'app/xconf/dcm/vodsettings/vodsettings.modal.edit.html',
                controller: 'VodSettingsModalEditController as vm',
                size: 'md',
                resolve : {
                    vodSettings: function() {
                        return vodSettings;
                    },
                    formulaId: function() {
                        return id;
                    }
                }
            }).result.then(
                function() {
                    init();
                }
            );
        }

        function createDeviceSettings(ruleId) {
            openEditDeviceSettingsModal(ruleId);
        }

        function editDeviceSettings(ruleId) {
            deviceSettingsService.getDeviceSettings(ruleId).then(
                function(result) {
                    openEditDeviceSettingsModal(ruleId, result.data);
                },
                alertsService.errorHandler
            );
        }

        function openEditDeviceSettingsModal(id, deviceSettings) {
            $modal.open({
                templateUrl: 'app/xconf/dcm/devicesettings/devicesettings.edit.html',
                size: 'lg',
                controller: 'DeviceSettingsEditController as vm',
                resolve: {
                    deviceSettings: function () {
                        return deviceSettings;
                    },
                    id: function () {
                        return id;
                    }
                }
            }).result.then(
                function() {
                    init();
                }
            );
        }

        function createLogUploadSettings(ruleId) {
            openLogUploadSettingsModal(ruleId);
        }

        function editLogUploadSettings(ruleId) {
            logUploadSettingsService.getLogUploadSettings(ruleId).then(
                function(result) {
                    openLogUploadSettingsModal(ruleId, result.data);
                },
                function(error) {
                    alertsService.showError({message: error.data.message, title: 'Service error'});
                }
            );
        }

        function openLogUploadSettingsModal(id, logUploadSettings) {
            $modal.open({
                templateUrl: 'app/xconf/dcm/loguploadsettings/loguploadsettings.edit.html',
                size: 'lg',
                controller: 'LogUploadSettingsEditController as vm',
                resolve: {
                    logUploadSettings: function () {
                        return logUploadSettings;
                    },
                    id: function () {
                        return id;
                    }
                }
            }).result.then(
                function() {
                    init();
                }
            );
        }

        function getUsedNames() {
            var initialName = angular.copy(vm.formula.rule.name);
            formulaService.getUsedNames().then(function(resp) {
                vm.usedNames = resp.data;
                utilsService.removeItemFromArray(vm.usedNames, initialName);
            });
        }

        function setAvailablePriorities(size) {
            if (vm.currentEditMode === EDIT_MODE.UPDATE) {
                size = parseInt(size);
            }

            if (vm.currentEditMode === EDIT_MODE.CREATE) {
                size = parseInt(size) + 1;
            }

            vm.availablePriorities = [];
            for (var i = 1; i < size + 1; i++) {
                vm.availablePriorities.push(i);
            }
        }
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .controller('FormulaValidationInfoController', controller);

    controller.$inject=['$uibModalInstance', 'data'];

    function controller($modalInstance, data) {
        var vm = this;
        vm.data = data;
        vm.dismiss = function() {
            $modalInstance.dismiss();
        };
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .controller('FormulasController', controller);

    controller.$inject = ['$scope', '$controller', 'formulaService', '$state', '$q', 'alertsService', 'utilsService', 'dialogs', 'vodSettingsService', '$filter', '$uibModal', 'deviceSettingsService', 'logUploadSettingsService', 'SETTINGS_AVAILABILITY_KEYS', 'paginationService', 'formulasSize', 'ruleHelperService', 'RULE_SEARCH_OPTIONS'];

    function controller($scope, $controller, formulaService, $state, $q, alertsService, utilsService, dialogs, vodSettingsService, $filter, $modal, deviceSettingsService, logUploadSettingsService, SETTINGS_AVAILABILITY_KEYS, paginationService, formulasSize, ruleHelperService, RULE_SEARCH_OPTIONS) {
        var vm = this;

        angular.extend(vm, $controller('MainController', {
            $scope: $scope
        }));

        vm.rules = [];
        vm.SETTINGS_AVAILABILITY_KEYS = SETTINGS_AVAILABILITY_KEYS;
        vm.isSettingsAvailable = {};
        vm.paginationStorageKey = 'dcmFormulasPageSize';
        vm.availablePageSizes = paginationService.getAvailablePageSizes();
        vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
        vm.pageSizeModel = vm.pageSize;
        vm.pageNumber = paginationService.getPageNumber();
        vm.numPages = 0;
        vm.formulasSize = parseInt(formulasSize);
        vm.availablePriorities = [];
        vm.searchParam = {};
        vm.searchOptions = RULE_SEARCH_OPTIONS;
        vm.deleteRule = deleteRule;
        vm.viewVodSettings = viewVodSettings;
        vm.viewDeviceSettings = viewDeviceSettings;
        vm.viewLogUploadSettings = viewLogUploadSettings;
        vm.changePageSize = changePageSize;
        vm.getSize = getSize;
        vm.getMaxAvailablePriority = getMaxAvailablePriority;
        vm.getFormulas = getFormulas;
        vm.changePriority = changePriority;
        vm.exportFormula = formulaService.exportFormula;
        vm.exportAllFormulas = formulaService.exportAllFormulas;
        vm.isDataLoading = false;
        init();
        
        function init() {
            getFormulas(vm.pageNumber, vm.pageSize);
            setAvailablePriorities(getSize());
        }

        function getFormulas() {
            vm.isDataLoading = true;
            formulaService.getPage(vm.pageSize, vm.pageNumber, vm.searchParam).then(function (result) {
                    vm.isDataLoading = false;
                    vm.rules = result.data;
                    vm.formulasSize = result.headers('numberofitems');
                    paginationService.savePaginationSettingsInLocation(vm.pageNumber, vm.pageSize);
                    getSettingsAvailability(vm.rules);
                },
                function (reason) {
                    vm.isDataLoading = false;
                    alertsService.failedToLoadData('formulas', reason.data);
                });
        }

        $scope.$on('$locationChangeSuccess', function () {
            if (paginationService.paginationSettingsInLocationHaveChanged(vm.pageNumber, vm.pageSize)) {
                vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
                vm.pageSizeModel = vm.pageSize;
                paginationService.saveDefaultPageSize(vm.pageSize, vm.paginationStorageKey);
                vm.pageNumber = paginationService.getPageNumber();
                init();
            }
        });

        $scope.$on('search-entities', function(event, data) {
            vm.searchParam = data.searchParam;
            getFormulas();
        });

        function getSettingsAvailability(formulas) {
            var formulasIds = _.pluck(formulas, 'id');
            formulaService.getSettingsAvailability(formulasIds).then(function(resp) {
                vm.isSettingsAvailable = resp.data;
            });
        }

        function deleteRule(rule) {
            if(rule && rule.id) {
                var dialog = dialogs.confirm('Delete confirmation', '<span class="break-word-inline"> Are you sure you want to delete Formula ' + rule.name + ' ? </span>');
                dialog.result.then(function (btn) {
                    formulaService.deleteFormula(rule.id).then(function () {
                        utilsService.removeItemFromArray(vm.rules, rule);
                        shiftItems();
                        alertsService.successfullyDeleted(rule.name);
                    }, function (error) {
                        alertsService.showError({title: 'Error', message: error.message});
                    });
                });
            }
        }

        function viewVodSettings(vodSettingsId) {
            vodSettingsService.getById(vodSettingsId).then(function(result) {
                $modal.open({
                    templateUrl: 'app/xconf/dcm/vodsettings/vodsettings.modal.view.html',
                    controller: 'VodSettingsModalViewController as vm',
                    size: 'md',
                    resolve : {
                        vodSettings: function() {
                            return result.data;
                        }
                    }
                });
            }, function(error) {
                alertsService.showError({title: 'Error', message: error.data.message});
            });
        }

        function viewDeviceSettings(deviceSettingsId) {
            deviceSettingsService.getDeviceSettings(deviceSettingsId).then(
                function(result) {
                    $modal.open({
                        templateUrl: 'app/xconf/dcm/devicesettings/devicesettings.view.html',
                        size: 'lg',
                        controller: 'DeviceSettingsViewController as vm',
                        resolve: {
                            deviceSettings: function () {
                                return result.data;
                            }
                        }
                    });
                },
                function(reason) {
                    alertsService.showError({title: 'Error', message: reason.data});
                }
            );
        }

        function viewLogUploadSettings(logUploadSettingsId) {
            logUploadSettingsService.getLogUploadSettings(logUploadSettingsId).then(
                function(result) {
                    $modal.open({
                        templateUrl: 'app/xconf/dcm/loguploadsettings/loguploadsettings.view.html',
                        size: 'lg',
                        controller: 'LogUploadSettingsViewController as vm',
                        resolve: {
                            logUploadSettings: function () {
                                return result.data;
                            }
                        }
                    });
                },
                function(reason) {
                    alertsService.showError({title: 'Error', message: reason.data});
                }
            );
        }

        function changePriority(id, priority, prevPriorityValue) {
            var priorityDialogBox = dialogs.confirm('Priority Change Warning', `Action you going to perform will affect priorities from <b>${prevPriorityValue}</b> to <b>${priority}</b>. Are you sure you want to change Priority?`);
            priorityDialogBox.result.then(function (btn) {
                formulaService.changePriorities(id, priority).then(function(result){
                    init();
                }, function(reason) {
                    alertsService.showError({title: 'Error', message: reason.message});
                    init();
                });
            }, function(btn) {
                    init(); 
            })
        }

        function shiftItems() {
            vm.formulasSize--;
            var numberOfPagesAfterDeletion = Math.ceil((vm.formulasSize) / vm.pageSize);
            var pageNumber = (vm.pageNumber > numberOfPagesAfterDeletion && numberOfPagesAfterDeletion > 0) ? numberOfPagesAfterDeletion : vm.pageNumber;
            getFormulas(pageNumber, vm.pageSize);
            setAvailablePriorities(getSize());
        }

        function changePageSize(pageSizeModel) {
            vm.pageSize = pageSizeModel;
            paginationService.saveDefaultPageSize(vm.pageSize, vm.paginationStorageKey);
            getFormulas(vm.pageNumber, vm.pageSize);
        }

        function getSize() {
            return vm.formulasSize;
        }

        function setAvailablePriorities(size) {
            size = parseInt(size);

            vm.availablePriorities = [];
            for (var i = 1; i < size + 1; i++) {
                vm.availablePriorities.push(i);
            }
        }

        function getMaxAvailablePriority() {
            let latestPriority = vm.availablePriorities[vm.availablePriorities.length - 1];
            return latestPriority;
          }
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .controller('LogUploadSettingsController', controller);

    controller.$inject = ['$scope', '$uibModal', '$controller', 'alertsService', 'dialogs', 'utilsService', 'formulaService', 'logUploadSettingsService', 'logUploadSettingsSize', 'paginationService'];

    function controller( $scope, $modal, $controller, alertsService, dialogs, utilsService, formulaService, logUploadSettingsService, logUploadSettingsSize, paginationService) {
        var vm = this;

        angular.extend(vm, $controller('MainController', {
            $scope: $scope
        }));

        vm.logUploadSettingsPage = [];
        vm.paginationStorageKey = 'logUploadSettingsPageSize';
        vm.availablePageSizes = paginationService.getAvailablePageSizes();
        vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
        vm.pageSizeModel = vm.pageSize;
        vm.pageNumber = paginationService.getPageNumber();
        vm.numPages = 0;
        vm.logUploadSettingsSize = parseInt(logUploadSettingsSize);
        vm.isFormulasAvailable = null;
        vm.searchParam = {};
        vm.exportAllSettings = logUploadSettingsService.exportAllSettings
        vm.searchOptions = {
            data: [
                {
                    "name": {
                        friendlyName: "Name",
                        apiArgs: ['NAME']
                    }
                }
            ]
        };

        vm.viewLogUploadSettings = viewLogUploadSettings;
        vm.editLogUploadSettings = editLogUploadSettings;
        vm.deleteLogUploadSettings = deleteLogUploadSettings;
        vm.viewFormula = viewFormula;
        vm.changePageSize = changePageSize;
        vm.getSize = getSize;
        vm.getLogUploadSettingsPage = getLogUploadSettingsPage;
        vm.startParse = startParse;
        vm.isDataLoading = false;

        init();

        function init() {
            getLogUploadSettingsPage(vm.pageNumber, vm.pageSize, vm.searchParam);
        }

        $scope.$on('$locationChangeSuccess', function () {
            if (paginationService.paginationSettingsInLocationHaveChanged(vm.pageNumber, vm.pageSize)) {
                vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
                vm.pageSizeModel = vm.pageSize;
                paginationService.saveDefaultPageSize(vm.pageSize, vm.paginationStorageKey);
                vm.pageNumber = paginationService.getPageNumber();
                init();
            }
        });

        $scope.$on('search-entities', function(event, data) {
            vm.searchParam = data.searchParam;
            getLogUploadSettingsPage(vm.pageNumber, vm.pageSize);
        });

        function getLogUploadSettingsPage(pageNumber, pageSize) {
            vm.isDataLoading = true;
            logUploadSettingsService.getLogUploadSettingsPage(pageNumber, pageSize, vm.searchParam).then(
                function(result) {
                    vm.isDataLoading = false;
                    vm.logUploadSettingsPage = result.data;
                    vm.logUploadSettingsSize = result.headers('numberOfItems');
                    paginationService.savePaginationSettingsInLocation(vm.pageNumber, vm.pageSize);
                    formulaService.getFormulasAvailability(vm.logUploadSettingsPage).then(function(resp) {
                        vm.isFormulasAvailable = resp.data;
                    });
                },
                function(reason) {
                    vm.isDataLoading = false;
                    alertsService.failedToLoadData('logUploadSettingsSettings', reason.data.message);
                }
            );
        }

        function viewLogUploadSettings(id) {
            logUploadSettingsService.getLogUploadSettings(id).then(
                function(result) {
                    if (result.data) {
                        $modal.open({
                            templateUrl: 'app/xconf/dcm/loguploadsettings/loguploadsettings.view.html',
                            size: 'lg',
                            controller: 'LogUploadSettingsViewController as vm',
                            resolve: {
                                logUploadSettings: function () {
                                    return result.data;
                                }
                            }
                        });
                    }
                },
                function(reason) {
                    alertsService.showError({message: reason.data.message, title: 'Service error'});
                }
            );
        }

        function editLogUploadSettings(id) {
            logUploadSettingsService.getLogUploadSettings(id).then(
                function(result) {
                    $modal.open({
                        templateUrl: 'app/xconf/dcm/loguploadsettings/loguploadsettings.edit.html',
                        size: 'lg',
                        controller: 'LogUploadSettingsEditController as vm',
                        resolve: {
                            logUploadSettings: function () {
                                return result.data;
                            },
                            id: function () {
                                return id;
                            }
                        }
                    }).result.then(
                        function() {
                            init();
                        }
                    );
                },
                function(reason) {
                    alertsService.showError({message: reason.data.message, title: 'Service error'});
                }
            );
        }

        function deleteLogUploadSettings(logUploadSettings) {
            var dlg = dialogs.confirm('Delete confirmation', '<span class="break-word-inline"> Are you sure you want to delete Log Upload Settings ' + logUploadSettings.name + "? </span>");
            dlg.result.then(function (btn) {
                logUploadSettingsService.deleteLogUploadSettings(logUploadSettings.id)
                    .then(function (result) {
                        alertsService.showSuccessMessage({message: "Deleted " + logUploadSettings.name});
                        shiftItems();
                    }, function (reason) {
                        alertsService.showError({message: reason.data.message, title: "Unable to delete"});
                    });
            });
        }

        function viewFormula(id) {
            formulaService.getById(id).then(function(resp) {
                    $modal.open({
                        templateUrl: 'app/xconf/dcm/formula/formula.modal.view.html',
                        controller: 'FormulaModalViewController as vm',
                        size: 'md',
                        resolve : {
                            formula: function() {
                                return resp.data;
                            }
                        }
                    });
                },
                function(reason) {
                    alertsService.showError({message: reason.message, title: 'Error'});
                }
            );
        }

        function shiftItems() {
            vm.logUploadSettingsSize--;
            var numberOfPagesAfterDeletion = Math.ceil((vm.logUploadSettingsSize) / vm.pageSize);
            var pageNumber = (vm.pageNumber > numberOfPagesAfterDeletion && numberOfPagesAfterDeletion > 0) ? numberOfPagesAfterDeletion : vm.pageNumber;
            getLogUploadSettingsPage(pageNumber, vm.pageSize);
        }

        function changePageSize(pageSizeModel) {
            vm.pageSize = pageSizeModel;
            paginationService.saveDefaultPageSize(vm.pageSize, vm.paginationStorageKey);
            getLogUploadSettingsPage(vm.pageNumber, vm.pageSize);
        }

        function getSize() {
            return vm.logUploadSettingsSize;
        }

        function startParse() {
            return getSize() > 0;
        }
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .controller('LogUploadSettingsEditController', controller);

    controller.$inject=['$rootScope', '$scope', '$uibModalInstance', '$controller', 'logUploadSettings', 'id', 'alertsService', 'utilsService', 'logUploadSettingsService', 'EDIT_MODE', 'logUploadSettingsValidationService', 'uploadRepositoryService', 'SCHEDULE_TYPE', 'TIME_ZONES'];

    function controller($rootScope, $scope, $modalInstance, $controller, logUploadSettings, id, alertsService, utilsService, logUploadSettingsService, EDIT_MODE, logUploadSettingsValidationService, uploadRepositoryService, SCHEDULE_TYPE, TIME_ZONES) {
        var vm = this;

        angular.extend(vm, $controller('EditController', {
            $scope: $scope,
            mainPage: 'loguploadsettings',
            stateParameters: null
        }));

        vm.EDIT_MODE = EDIT_MODE;
        vm.currentEditMode = logUploadSettings ? EDIT_MODE.UPDATE : EDIT_MODE.CREATE;
        vm.timeZones = [
            'UTC',
            'CST',
            'EST',
            'MST',
            'PST'
        ];
        vm.SCHEDULE_TYPE = SCHEDULE_TYPE;
        vm.uploadRepositories = [];
        vm.usedNames = [];
        vm.logUploadSettingsValidationService = logUploadSettingsValidationService;
        vm.logUploadSettings = logUploadSettings ? convertForFrontEnd(logUploadSettings) : {
            id: id,
            name: '',
            applicationType: $rootScope.applicationType,
            uploadOnReboot: false,
            numberOfDays: 0,
            areSettingsActive: false,
            schedule: {
                type: vm.SCHEDULE_TYPE.ACT_NOW,
                expression: '',
                expressionL1: '',
                expressionL2: '',
                expressionL3: '',
                timeWindowMinutes: '0'
            },
            uploadRepositoryId: ''
        };
        vm.timeZoneSchedule = vm.timeZones[0];
        vm.timeZoneDateTimeRange = vm.timeZones[0];
        vm.cronFields = {
            minutes: '',
            hours: '',
            month: '',
            dayOfWeek: '',
            dayOfMonth: ''
        };
        vm.schedulerTimeZones = TIME_ZONES;

        vm.dismiss = dismiss;
        vm.saveLogUploadSettings = saveLogUploadSettings;
        vm.updateLogUploadSettings = updateLogUploadSettings;
        vm.createDeviceSettings = createDeviceSettings;

        init();

        function init() {
            if (vm.logUploadSettings && vm.logUploadSettings.schedule) {
                vm.cronFields = utilsService.parseCronExpression(vm.logUploadSettings.schedule.expression);
            }
            if (vm.logUploadSettings.schedule && !vm.logUploadSettings.schedule.timeZone) {
                vm.logUploadSettings.schedule.timeZone = vm.timeZones[0];
            }
            getUsedNames();
            getUploadRepositories();
        }
        vm.isSaving = false;
        function createDeviceSettings() {
            vm.isSaving = true;
            logUploadSettingsService.createLogUploadSettings(convertForBackEnd(vm.logUploadSettings)).then(
                function(result) {
                    alertsService.successfullySaved(vm.logUploadSettings.name);
                    $modalInstance.close();
                },
                function (reason) {
                    alertsService.failedToSave(vm.logUploadSettings.name, reason.data.message);
                }
            ).finally(function() {
                vm.isSaving = false;
            });
        }
        
        
        function updateLogUploadSettings() {
            vm.isSaving = true;
            logUploadSettingsService.updateLogUploadSettings(convertForBackEnd(vm.logUploadSettings)).then(
                function(result) {
                    alertsService.successfullySaved(vm.logUploadSettings.name);
                    $modalInstance.close();
                },
                function (reason) {
                    alertsService.failedToSave(vm.logUploadSettings.name, reason.data.message);
                }
            ).finally(function() {
                vm.isSaving = false;
            });
        }
        
        
        function saveLogUploadSettings() {
            if (vm.currentEditMode === vm.EDIT_MODE.CREATE) {
                createDeviceSettings();
            }
        
            if (vm.currentEditMode === vm.EDIT_MODE.UPDATE) {
                updateLogUploadSettings();
            }
        }
        

        function convertForFrontEnd(logUploadSettings) {
            if (logUploadSettings.schedule.type === SCHEDULE_TYPE.WHOLE_DAY_RANDOMIZED) {
                logUploadSettings.schedule.expression = '';
                logUploadSettings.schedule.timeWindowMinutes = '0';
            }

            return logUploadSettings;
        }

        function convertForBackEnd(logUploadSettings) {
            var result = angular.copy(logUploadSettings);
            nullifyOptionalFields(result);

            return result;
        }

        function nullifyOptionalFields(logUploadSettings) {
            if (logUploadSettings.schedule.type === SCHEDULE_TYPE.WHOLE_DAY_RANDOMIZED) {
                //we need to set expression not blank to be able to save schedule
                logUploadSettings.schedule.expression = 'someNonEmptyValue';
                logUploadSettings.schedule.expressionL1 = '';
                logUploadSettings.schedule.expressionL2 = '';
                logUploadSettings.schedule.expressionL3 = '';
                logUploadSettings.schedule.timeWindowMinutes = 0;
            }
        }

        function getUsedNames() {
            var initialName = angular.copy(vm.logUploadSettings.name);
            logUploadSettingsService.getLogUploadSettingsNames().then(
                function(result) {
                    vm.usedNames = result.data;
                    utilsService.removeItemFromArray(vm.usedNames, initialName);
                }
            );
        }

        function getUploadRepositories() {
            uploadRepositoryService.getAll().then(function(result) {
                vm.uploadRepositories = result.data;
                if (vm.uploadRepositories.length > 0 && !vm.logUploadSettings.uploadRepositoryId) {
                    vm.logUploadSettings.uploadRepositoryId = vm.uploadRepositories[0].id;
                }
            });
        }

        function dismiss() {
            $modalInstance.dismiss('close');
        }

        $scope.$watch('vm.cronFields', function() {
            vm.logUploadSettings.schedule.expression = utilsService.getCronExpressionFromFields(vm.cronFields);
        }, true);
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .controller('LogUploadSettingsViewController', controller);

    controller.$inject=['$uibModalInstance', 'logUploadSettings', 'uploadRepositoryService'];

    function controller($modalInstance, logUploadSettings, uploadRepositoryService) {
        var vm = this;
        vm.uploadRepositories = [];

        vm.logUploadSettings = logUploadSettings;
        vm.dismiss = dismiss;

        init();

        function init() {
            getUploadRepositories();
        }

        function dismiss() {
            $modalInstance.dismiss('close');
        }

        function getUploadRepositories() {
            uploadRepositoryService.getAll().then(function(result) {
                vm.uploadRepositories = result.data;
            });
        }

    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .controller('TestPageController', controller);

    controller.$inject = ['testPageService', 'alertsService', 'LOG_UPLOAD_FREE_ARG_AUTOCOMPLETE_VALUE', 'testPageUtils', 'utilsService'];

    function controller(testPageService, alertsService, LOG_UPLOAD_FREE_ARG_AUTOCOMPLETE_VALUE, testPageUtils, utilsService) {
        var vm = this;
        vm.formula = {};
        vm.matchedSettings = null;
        vm.matchedRuleIds = null;
        vm.matchedRuleType = null;
        vm.parameters = [{key: '', value: ''}];
        vm.autoCompleteValues = LOG_UPLOAD_FREE_ARG_AUTOCOMPLETE_VALUE;
        vm.context = null;
        vm.areMatchedRulesEmpty = function(matchedRuleIds) {
            return utilsService.isNullOrUndefinedOrEmptyObject(matchedRuleIds); 
        }
        vm.matchRule = matchRule;

        function matchRule() {
            if (testPageUtils.validateInput(vm.parameters)) {
                var objParams = testPageUtils.getParametersAsObject(vm.parameters);
                testPageService.matchRule(objParams).then(function (resp) {
                    vm.matchedSettings = resp.data.settings;
                    vm.matchedRuleType = resp.data.ruleType;
                    vm.matchedRuleIds = vm.areMatchedRulesEmpty(resp.data.matchedRules) ? {} : resp.data.matchedRules;
                    vm.context = resp.data.context;
                }, function (error) {
                    alertsService.showError({title: 'Error', message: error.data.message});
                });
            }
        }
    }
})();

/*******************************************************************************
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 *******************************************************************************/
(function() {
    'use strict';

    angular
        .module('app.uploadRepository')
        .controller('UploadRepositoriesController', controller);

    controller.$inject = ['$scope', '$controller', 'uploadRepositoryService', 'alertsService', 'dialogs', 'utilsService', 'uploadRepositoriesSize', 'paginationService', 'EDIT_MODE'];

    function controller($scope, $controller, uploadRepositoryService, alertsService, dialogs, utilsService, uploadRepositoriesSize, paginationService, EDIT_MODE) {
        var vm = this;

        angular.extend(vm, $controller('MainController', {
            $scope: $scope
        }));

        vm.uploadRepositories = [];
        vm.paginationStorageKey = 'uploadRepositoriesPageSize';
        vm.availablePageSizes = paginationService.getAvailablePageSizes();
        vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
        vm.pageSizeModel = vm.pageSize;
        vm.pageNumber = paginationService.getPageNumber();
        vm.numPages = 0;
        vm.uploadRepositoriesSize = parseInt(uploadRepositoriesSize);
        vm.EDIT_MODE = EDIT_MODE;
        vm.searchParam = {};
        vm.searchOptions = {
            data: [
                {
                    "name": {
                        friendlyName: "Name",
                        apiArgs: ['NAME']
                    }
                }
            ]
        };

        vm.deleteUploadRepository = deleteUploadRepository;
        vm.changePageSize = changePageSize;
        vm.getSize = getSize;
        vm.getUploadRepositories = getUploadRepositories;
        vm.exportAll = uploadRepositoryService.exportAll;
        vm.exportOne = uploadRepositoryService.exportOne;
        vm.startParse = startParse;
        vm.isDataLoading = false;


        init();

        function init() {
            getUploadRepositories(vm.pageNumber, vm.pageSize);
        }

        $scope.$on('$locationChangeSuccess', function () {
            if (paginationService.paginationSettingsInLocationHaveChanged(vm.pageNumber, vm.pageSize)) {
                vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
                vm.pageSizeModel = vm.pageSize;
                paginationService.saveDefaultPageSize(vm.pageSize, vm.paginationStorageKey);
                vm.pageNumber = paginationService.getPageNumber();
                init();
            }
        });

        $scope.$on('search-entities', function(event, data) {
            vm.searchParam = data.searchParam;
            getUploadRepositories(vm.pageNumber, vm.pageSize);
        });

        function getUploadRepositories(pageNumber, pageSize) {
            vm.isDataLoading = true;
            uploadRepositoryService.getPage(pageSize, pageNumber, vm.searchParam).then(function(resp) {
                vm.isDataLoading = false;
                vm.uploadRepositories = resp.data;
                vm.uploadRepositoriesSize = resp.headers('numberofitems');
                paginationService.savePaginationSettingsInLocation(pageNumber, pageSize);
            }, function(error) {
                vm.isDataLoading = false;
                alertsService.showError({title: "Error", message: 'Error on loading upload repositories'})
            });
        }

        function deleteUploadRepository(uploadRepository) {
            if (!uploadRepository) {
                alertsService.showError({title: 'Error', message: 'Repository does not present'});
                return;
            }

            var dialog = dialogs.confirm('Delete confirmation', '<span class="break-word-inline"> Are you sure you want to delete Upload Repository ' + uploadRepository.name + ' ? </span>');
            dialog.result.then(function (btn) {
                uploadRepositoryService.deleteUploadRepository(uploadRepository.id).then(function() {
                    utilsService.removeItemFromArray(vm.uploadRepositories, uploadRepository);
                    shiftItems();
                    alertsService.successfullyDeleted(uploadRepository.name);
                }, function(error) {
                    alertsService.showError({'title': 'Error', message: error.data});
                });
            });
        }

        function shiftItems() {
            vm.uploadRepositoriesSize--;
            var numberOfPagesAfterDeletion = Math.ceil((vm.uploadRepositoriesSize) / vm.pageSize);
            var pageNumber = (vm.pageNumber > numberOfPagesAfterDeletion && numberOfPagesAfterDeletion > 0) ? numberOfPagesAfterDeletion : vm.pageNumber;
            getUploadRepositories(pageNumber, vm.pageSize);
        }

        function changePageSize(pageSizeModel) {
            vm.pageSize = pageSizeModel;
            paginationService.saveDefaultPageSize(vm.pageSize, vm.paginationStorageKey);
            getUploadRepositories(vm.pageNumber, vm.pageSize);
        }

        function getSize() {
            return vm.uploadRepositoriesSize;
        }

        function startParse() {
            return getSize() > 0;
        }
    }
})();

/*******************************************************************************
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 *******************************************************************************/
(function() {
    'use strict';

    angular
        .module('app.uploadRepository')
        .controller('UploadRepositoryEditController', controller);

    controller.$inject = ['$rootScope', '$scope', '$controller', 'uploadRepositoryService', '$stateParams', 'alertsService', '$state', 'PROTOCOL', 'EDIT_MODE'];

    function controller($rootScope, $scope, $controller, uploadRepositoryService, $stateParams, alertsService, $state, PROTOCOL, EDIT_MODE) {
        var vm = this;

        angular.extend(vm, $controller('EditController', {
            $scope: $scope,
            mainPage: 'uploadrepositories',
            stateParameters: null
        }));

        vm.uploadRepository = {
            applicationType: $rootScope.applicationType
        };
        vm.save = save;
        vm.protocols = PROTOCOL;
        vm.EDIT_MODE = EDIT_MODE;
        vm.currentEditMode = $stateParams.editMode || EDIT_MODE.CREATE;
        vm.isSaving = false;

        init();


        function init() {
            if($stateParams.uploadRepositoryId) {
                uploadRepositoryService.getById($stateParams.uploadRepositoryId).then(function(resp) {
                    if (resp) {
                        vm.uploadRepository = resp.data;
                    }
                }, alertsService.errorHandler);
            }
        }

        function save() {
            if (isValidUploadRepository(vm.uploadRepository)) {
                if (vm.currentEditMode === EDIT_MODE.UPDATE) {
                    vm.isSaving = true;
                    uploadRepositoryService.update(vm.uploadRepository).then(function(resp) {
                        alertsService.successfullySaved(vm.uploadRepository.name);
                        $state.go('uploadrepositories');
                    }).catch(function(reason) {
                        alertsService.errorHandler(reason);
                    }).finally(function() {
                        vm.isSaving = false;
                    });
                }
        
                if (vm.currentEditMode === EDIT_MODE.CREATE) {
                    vm.isSaving = true;
                    uploadRepositoryService.create(vm.uploadRepository).then(function(resp) {
                        alertsService.successfullySaved(vm.uploadRepository.name);
                        $state.go('uploadrepositories');
                    }).catch(function(reason) {
                        alertsService.errorHandler(reason);
                    }).finally(function() {
                        vm.isSaving = false;
                    });
                }
            }
        }

        function isValidUploadRepository(uploadRespository) {
            var missingFields = [];
            if (!uploadRespository.name) {
                missingFields.push('name');
            }
            if (!uploadRespository.description) {
                missingFields.push('description');
            }
            if (!uploadRespository.protocol) {
                missingFields.push('protocol');
            }
            if (!uploadRespository.url) {
                missingFields.push('url');
            }

            if (missingFields.length > 0) {
                alertsService.showError({title: 'Error', message: 'Next fields are empty: ' + missingFields.join(', ')});
                return false;
            }
            return true;
        }
    }
})();

/* 
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .controller('UploadRepositoryImportController', controller);

    controller.$inject=['$scope', '$log', '$uibModal', '$location', 'alertsService', 'uploadRepositoryService', 'importService', 'utilsService', 'paginationService'];

    function controller($scope, $log, $modal, $location, alertsService, uploadRepositoryService, importService, utilsService, paginationService) {
        var vm = this;

        vm.retrieveFile = retrieveFile;
        vm.importUploadRepository = importUploadRepository;
        vm.importAllUploadRepositories = importAllUploadRepositories;
        vm.selectPage = selectPage;
        vm.changePageSize = changePageSize;
        vm.paginationStorageKey = 'uploadRepositoriesPageSize';
        vm.availablePageSizes = paginationService.getAvailablePageSizes();
        vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
        vm.pageSizeModel = vm.pageSize;
        vm.pageNumber = paginationService.getPageNumber();
        vm.uploadRepositories = null;
        vm.wrappedUploadRepositories = null;
        vm.numPages = 0;
        vm.overwriteAll = overwriteAll;
        vm.isOverwritten = false;
        vm.progressBarControl = importService.progressBarControl;

        $scope.$on('$locationChangeSuccess', function () {
            if (paginationService.paginationSettingsInLocationHaveChanged(vm.pageNumber, vm.pageSize)) {
                vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
                vm.pageSizeModel = vm.pageSize;
                paginationService.saveDefaultPageSize(vm.pageSize, vm.paginationStorageKey);
                vm.pageNumber = paginationService.getPageNumber();
                selectPage();
            }
        });


        async function retrieveFile(fileName) {
            vm.uploadRepositories = null;
            try {
                let file = await importService.openFile(fileName, null, this);
                vm.isOverwritten = false;
                vm.wrappedUploadRepositories = importService.prepareEntitiesFromFile(file);
                selectPage();
            } catch (e) {
                alertsService.showError({message: e});
            }
        }

        function importUploadRepository(wrappedUploadRepository) {
            if (wrappedUploadRepository.overwrite) {
                uploadRepositoryService.update(wrappedUploadRepository.entity).then(function () {
                    handleSaveSuccess(wrappedUploadRepository);
                }, function (reason) {
                    handleSaveFailure(reason);
                });
            } else {
                uploadRepositoryService.create(wrappedUploadRepository.entity).then(function () {
                    handleSaveSuccess(wrappedUploadRepository);
                }, function (reason) {
                    handleSaveFailure(reason);
                });
            }
        }

        function handleSaveSuccess(wrappedUploadRepository) {
            alertsService.successfullySaved(wrappedUploadRepository.entity.name);
            utilsService.removeSelectedItemFromListById(vm.wrappedUploadRepositories, wrappedUploadRepository.entity.id);
        }

        function handleSaveFailure(reason) {
            var data = reason.data;
            alertsService.showError({title: data.type, message: data.message});
        }

        function importAllUploadRepositories() {
            importService.importAllEntities(uploadRepositoryService, vm.wrappedUploadRepositories);
        }

        function selectPage() {
            paginationService.savePaginationSettingsInLocation(vm.pageNumber, vm.pageSize);
            computeStartAndEndIndex();
        }

        function computeStartAndEndIndex() {
            vm.startIndex = (vm.pageNumber - 1) * vm.pageSize;
            vm.endIndex = vm.pageNumber * vm.pageSize;
        }

        function changePageSize(pageSizeModel) {
            vm.pageSize = pageSizeModel;
            paginationService.saveDefaultPageSize(vm.pageSize, vm.paginationStorageKey);
            selectPage();
        }

        function overwriteAll() {
            angular.forEach(vm.wrappedUploadRepositories, function (val, key) {
                val.overwrite = vm.isOverwritten;
            });
        }
    }
})();

/*******************************************************************************
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 *******************************************************************************/
(function() {
    'use strict';

    angular
        .module('app.vodsettings')
        .controller('VodSettingsController', controller);

    controller.$inject = ['$scope', '$controller', 'vodSettingsService', 'alertsService', 'utilsService', 'dialogs', 'formulaService', '$uibModal', 'vodSettingsSize', 'paginationService'];

    function controller($scope, $controller, vodSettingsService, alertsService, utilsService, dialogs, formulaService, $modal, vodSettingsSize, paginationService) {
        var vm = this;

        angular.extend(vm, $controller('MainController', {
            $scope: $scope
        }));

        vm.vodSettingsPage = [];
        vm.paginationStorageKey = 'vodSettingsPageSize';
        vm.availablePageSizes = paginationService.getAvailablePageSizes();
        vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
        vm.pageSizeModel = vm.pageSize;
        vm.pageNumber = paginationService.getPageNumber();
        vm.numPages = 0;
        vm.vodSettingsSize = parseInt(vodSettingsSize);
        vm.isFormulasAvailable = null;
        vm.searchParam = {};
        vm.searchOptions = {
            data: [
                {
                    "name": {
                        friendlyName: "Name",
                        apiArgs: ['NAME']
                    }
                }
            ]
        };

        vm.getSize = getSize;
        vm.startParse = startParse;
        vm.deleteVodSettings = deleteVodSettings;
        vm.viewFormula = viewFormula;
        vm.changePageSize = changePageSize;
        vm.getVodSettingsPage = getVodSettingsPage;
        vm.editVodSettings = editVodSettings;
        vm.viewVodSettings = viewVodSettings;
        vm.exportAllSettings = vodSettingsService.exportAllSettings;
        vm.isDataLoading = false;


        init();

        function init() {
            getVodSettingsPage(vm.pageNumber, vm.pageSize, vm.searchParam);
        }

        $scope.$on('$locationChangeSuccess', function () {
            if (paginationService.paginationSettingsInLocationHaveChanged(vm.pageNumber, vm.pageSize)) {
                vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
                vm.pageSizeModel = vm.pageSize;
                paginationService.saveDefaultPageSize(vm.pageSize, vm.paginationStorageKey);
                vm.pageNumber = paginationService.getPageNumber();
                init();
            }
        });

        $scope.$on('search-entities', function(event, data) {
            vm.searchParam = data.searchParam;
            getVodSettingsPage(vm.pageNumber, vm.pageSize);
        });

        function getVodSettingsPage(pageNumber, pageSize) {
            vm.isDataLoading = true;
            vodSettingsService.getPage(pageSize, pageNumber, vm.searchParam).then(function(result) {
                vm.isDataLoading = false;
                vm.vodSettingsPage = result.data;
                vm.vodSettingsSize = result.headers('numberofitems');
                paginationService.savePaginationSettingsInLocation(vm.pageNumber, vm.pageSize);
                formulaService.getFormulasAvailability(vm.vodSettingsPage).then(function(resp) {
                    vm.isFormulasAvailable = resp.data;
                });
            }, function(error) {
                vm.isDataLoading = false;
                alertsService.showError({title: 'Error', message: 'Error by loading VodSettings'});
            });
        }

        function editVodSettings(vodSettingsId) {
            vodSettingsService.getById(vodSettingsId).then(function(resp) {
                openEditVodSettingsModal(vodSettingsId, resp.data);
            }, function(error) {
                $log.error(error.data);
            });
        }

        function openEditVodSettingsModal(id, vodSettings) {
            $modal.open({
                templateUrl: 'app/xconf/dcm/vodsettings/vodsettings.modal.edit.html',
                controller: 'VodSettingsModalEditController as vm',
                size: 'md',
                resolve : {
                    vodSettings: function() {
                        return vodSettings;
                    },
                    formulaId: function() {
                        return id;
                    }
                }
            }).result.then(
                function() {
                    init();
                }
            );
        }

        function deleteVodSettings(vodSettings) {
            if (!vodSettings) {
                alertsService.showError({title: 'Error', message: 'Vod Settings is not present'});
                return;
            }
            var dialog = dialogs.confirm('Delete confirmation', '<span class="break-word-inline"> Are you sure you want to delete Vod Settings ' + vodSettings.name + ' ? </span>');
            dialog.result.then(function (btn) {
                vodSettingsService.deleteById(vodSettings.id).then(function(resp) {
                    utilsService.removeItemFromArray(vm.vodSettingsPage, vodSettings);
                    shiftItems();
                    alertsService.successfullyDeleted(vodSettings.name);
                }, function(error) {
                    alertsService.showError({title: 'Error', message: error.data.messsage});
                });
            });
        }

        function viewFormula(id) {
            formulaService.getById(id).then(function(result) {
                if (result) {
                    $modal.open({
                        templateUrl: 'app/xconf/dcm/formula/formula.modal.view.html',
                        controller: 'FormulaModalViewController as vm',
                        size: 'md',
                        resolve : {
                            formula: function() {
                                return result.data;
                            }
                        }
                    });
                } else {
                    alertsService.showError({title: 'Error', message: 'Formula id is not present'});
                }
            }, function(error) {
                alertsService.showError({title: 'Error', message: error.message});
            });
        }

        function viewVodSettings(vodSettingsId) {
            vodSettingsService.getById(vodSettingsId).then(function(result) {
                $modal.open({
                    templateUrl: 'app/xconf/dcm/vodsettings/vodsettings.modal.view.html',
                    controller: 'VodSettingsModalViewController as vm',
                    size: 'md',
                    resolve : {
                        vodSettings: function() {
                            return result.data;
                        }
                    }
                });
            }, function(error) {
                alertsService.showError({title: 'Error', message: error.data.message});
            });
        }

        function shiftItems() {
            vm.vodSettingsSize--;
            var numberOfPagesAfterDeletion = Math.ceil((vm.vodSettingsSize) / vm.pageSize);
            var pageNumber = (vm.pageNumber > numberOfPagesAfterDeletion && numberOfPagesAfterDeletion > 0) ? numberOfPagesAfterDeletion : vm.pageNumber;
            getVodSettingsPage(pageNumber, vm.pageSize);
        }

        function changePageSize(pageSizeModel) {
            vm.pageSize = pageSizeModel;
            paginationService.saveDefaultPageSize(vm.pageSize, vm.paginationStorageKey);
            getVodSettingsPage(vm.pageNumber, vm.pageSize);
        }

        function getSize() {
            return vm.vodSettingsSize;
        }

        function startParse() {
            return getSize() > 0;
        }
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.activation-version')
        .controller('ActivationVersionEditController', controller);

    controller.$inject = ['$rootScope', '$scope', '$controller', 'firmwareConfigService', 'modelService', '$stateParams', 'alertsService', '$state', 'authUtilsService', 'PERMISSION', 'activationVersionService', '$q', 'utilsService'];

    function controller($rootScope, $scope, $controller, firmwareConfigService, modelService, $stateParams, alertsService, $state, authUtils, PERMISSION, activationVersionService, $q, utilsService) {
        var vm = this;

        angular.extend(vm, $controller('EditController', {
            $scope: $scope,
            mainPage: 'activation-versions',
            stateParameters: null
        }));

        vm.models = [];
        vm.activationVersion = {
            id: '',
            description: '',
            model: '',
            regularExpressions: [],
            firmwareVersions: [],
            applicationType: $rootScope.applicationType
        };
        vm.firmwareVersions = [];
        vm.newlyAddedRegularExpressions = [];
        vm.regularExpression = '';
        vm.PERMISSION = PERMISSION;
        vm.authUtils = authUtils;

        vm.save = save;
        vm.selectVersion = selectVersion;

        vm.addRegularExpression = addRegularExpression;
        vm.removeRegularExpression = removeRegularExpression;
        vm.reloadFirmwareVersions = reloadFirmwareVersions;
        vm.isNewlyAddedExpression = isNewlyAddedExpression;
        vm.reloadAndCleanFirmwareVersions = reloadAndCleanFirmwareVersions;

        init();

        function init() {
            modelService.getAll().then(function(resp) {
                vm.models = resp.data;
            }, function(error) {
                alertsService.showError(error.data.message);
            });

            if ($stateParams.id) {
                activationVersionService.getById($stateParams.id).then(function(resp) {
                    vm.activationVersion = resp.data;
                    vm.activationVersion.applicationType = $rootScope.applicationType ? $rootScope.applicationType : resp.data.applicationType;
                    reloadFirmwareVersions(vm.activationVersion.model).then(function() {
                        angular.forEach(vm.firmwareVersions, function(val, key) {
                            if (vm.activationVersion.firmwareVersions.indexOf(val.version) >= 0) {
                                val.selected = true;
                            }
                        });
                    });
                    firmwareConfigService.getSortedFirmwareVersionsIfDoesExistOrNot([vm.activationVersion.model], vm.activationVersion.firmwareVersions).then(function (versionResp) {
                        vm.sortedFirmwareVersions = versionResp.data;
                    }, function(versionsError) {
                       alertsService.showError({title: 'Error', message: error.data.message});
                    });
                }, function(error) {
                    alertsService.showError({title: 'Error', message: 'Error by loading Activation Version'});
                });
            }
        }

        function selectVersion(versionObject) {
            var index = vm.activationVersion.firmwareVersions.indexOf(versionObject.version);
            if (index >= 0) {
                vm.activationVersion.firmwareVersions.splice(index, 1);
                versionObject.selected = false;
            } else {
                vm.activationVersion.firmwareVersions.push(versionObject.version);
                versionObject.selected = true;
            }
        }

        function save() {
            if ($stateParams.id) {
                activationVersionService.update(vm.activationVersion).then(function (resp) {
                    alertsService.successfullySaved(vm.activationVersion.description);
                    $state.go('activation-version');
                }, function (error) {
                    alertsService.showError({title: 'Error', message: error.data.message});
                });
            } else {
                activationVersionService.create(vm.activationVersion).then(function (resp) {
                    alertsService.successfullySaved(vm.activationVersion.description);
                    $state.go('activation-version');
                }, function (error) {
                    alertsService.showError({title: 'Error', message: error.data.message});
                });
            }
        }

        function addRegularExpression() {
            vm.activationVersion.regularExpressions.push(vm.regularExpression);
            vm.newlyAddedRegularExpressions.push(vm.regularExpression);
            vm.regularExpression = '';
        }

        function removeRegularExpression(expression) {
            utilsService.removeItemFromArray(vm.activationVersion.regularExpressions, expression);
            utilsService.removeItemFromArray(vm.newlyAddedRegularExpressions, expression);
        }

        function reloadFirmwareVersions(model) {
            vm.firmwareVersions = [];
            var defer = $q.defer();
            firmwareConfigService.getBySupportedModels([model]).then(function(resp) {
                vm.firmwareVersions = _.map(resp.data, function(firmwareConfig) {
                    return {
                        version: firmwareConfig.firmwareVersion,
                        selected: false
                    };
                });
                defer.resolve(vm.firmwareVersions);
            }, function (error) {
                alertsService.showError({title: 'Error', message: error.data.message});
                defer.reject(error);
            });
            return defer.promise;
        }

        function reloadAndCleanFirmwareVersions(model) {
            reloadFirmwareVersions(model);
            vm.activationVersion.firmwareVersions.length = 0;
        }

        function isNewlyAddedExpression(expression) {
            return vm.newlyAddedRegularExpressions.indexOf(expression) !== -1;
        }
    }

})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.activation-version')
        .controller('ActivationVersionImportController', controller);

    controller.$inject=['$rootScope', '$scope', '$log', 'alertsService', 'utilsService', 'importService', 'firmwareConfigService', '$uibModal', 'paginationService', 'authUtilsService', 'PERMISSION', 'activationVersionService'];

    function controller($rootScope, $scope, $log, alertsService, utilsService, importService, firmwareConfigService, $modal, paginationService, authUtils, PERMISSION, activationVersionService) {
        var vm = this;

        vm.activationVersions = null;
        vm.wrappedActivationVersions = null;
        vm.isOverwritten = false;
        vm.PERMISSION = PERMISSION;
        vm.paginationStorageKey = 'activationVersionPageSize';
        vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
        vm.pageNumber = paginationService.getPageNumber();

        vm.retrieveFile = retrieveFile;
        vm.importOne = importOne;
        vm.importAll = importAll;
        vm.overwriteAll = overwriteAll;
        vm.progressBarControl = importService.progressBarControl;
        vm.authUtils = authUtils;
        vm.selectPage = selectPage;
        vm.getGeneralItemsNumber = getGeneralItemsNumber;

        $scope.$on('$locationChangeSuccess', function () {
            if (paginationService.paginationSettingsInLocationHaveChanged(vm.pageNumber, vm.pageSize)) {
                vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
                vm.pageNumber = paginationService.getPageNumber();
                selectPage();
            }
        });

        async function retrieveFile(fileName) {
            vm.activationVersions = null;
            try {
                let file = await importService.openFile(fileName, null, this);
                vm.isOverwritten = false;
                vm.wrappedActivationVersions = importService.prepareEntitiesFromFile(file);
                selectPage();
            } catch (e) {
                alertsService.showError({message: e});
            }
        }

        function importOne(wrappedActivationVersion) {
            if (!wrappedActivationVersion.entity.applicationType) {
                wrappedActivationVersion.entity.applicationType = $rootScope.applicationType;
            }
            if (wrappedActivationVersion.overwrite) {
                activationVersionService.update(wrappedActivationVersion.entity).then(function () {
                    alertsService.successfullySaved(wrappedActivationVersion.entity.description);
                    utilsService.removeSelectedItemFromListById(vm.wrappedActivationVersions, wrappedActivationVersion.entity.id);
                }, function (error) {
                    alertsService.showError({message: error.data.message, title: 'Exception'});
                });
            } else {
                activationVersionService.create(wrappedActivationVersion.entity).then(function () {
                    alertsService.successfullySaved(wrappedActivationVersion.entity.id);
                    utilsService.removeSelectedItemFromListById(vm.wrappedActivationVersions, wrappedActivationVersion.entity.id);
                }, function (error) {
                    alertsService.showError({message: error.data.message, title: 'Exception'});
                });
            }
        }

        function importAll() {
            importService.importAllEntities(activationVersionService, vm.wrappedActivationVersions);
        }

        function overwriteAll() {
            angular.forEach(vm.wrappedActivationVersions, function (val) {
                val.overwrite = vm.isOverwritten;
            });
        }

        function selectPage() {
            paginationService.savePaginationSettingsInLocation(vm.pageNumber, vm.pageSize);
            computeStartAndEndIndex();
        }

        function computeStartAndEndIndex() {
            vm.startIndex = (vm.pageNumber - 1) * vm.pageSize;
            vm.endIndex = vm.pageNumber * vm.pageSize;
        }

        function getGeneralItemsNumber() {
            return vm.wrappedActivationVersions ? vm.wrappedActivationVersions.length : 0;
        }
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.activation-version')
        .controller('ActivationVersionController', controller);

    controller.$inject = ['$rootScope', '$scope', '$controller', 'activationVersionService', 'utilsService', 'dialogs', 'alertsService', 'paginationService'];

    function controller($rootScope, $scope, $controller, activationVersionService, utilsService, dialogs, alertsService, paginationService) {
        var vm = this;
        angular.extend(vm, $controller('MainController', {
            $scope: $scope
        }));

        vm.activationVersions = [];
        vm.paginationStorageKey = 'activationVersionPageSize';
        vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
        vm.pageNumber = paginationService.getPageNumber();
        vm.generalItemsNumber = 0;
        vm.searchParam = {};
        vm.searchOptions = {
            data: [
                {
                    "name": {
                        friendlyName: "Model",
                        apiArgs: ["MODEL"]
                    }
                },
                {
                    "name": {
                        friendlyName: "Description",
                        apiArgs: ["DESCRIPTION"]
                    }
                },
                {
                    "name": {
                        friendlyName: "PartnerId",
                        apiArgs: ["PARTNER_ID"]
                    }
                },
                {
                    "name": {
                        friendlyName: "Version",
                        apiArgs: ["FIRMWARE_VERSION"]
                    }
                },
                {
                    "name": {
                        friendlyName: "Regular Expression",
                        apiArgs: ["REGULAR_EXPRESSION"]
                    }
                }
            ]
        };

        vm.deleteOne = deleteOne;
        vm.exportOne = exportOne;
        vm.exportAll = exportAll;
        vm.getActivationVersions = getActivationVersions;
        vm.startParse = startParse;
        vm.getGeneralItemsNumber = getGeneralItemsNumber;
        vm.shiftItems = shiftItems;
        vm.isDataLoading = false;

        init();

        function init() {
            getActivationVersions();
        }

        $scope.$on('$locationChangeSuccess', function () {
            if (paginationService.paginationSettingsInLocationHaveChanged(vm.pageNumber, vm.pageSize)) {
                vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
                vm.pageNumber = paginationService.getPageNumber();
                init();
            }
        });

        $scope.$on('search-entities', function(event, data) {
            vm.searchParam = data.searchParam;
            getActivationVersions();
        });

        function getActivationVersions() {
            vm.isDataLoading = true;
            activationVersionService.getPage(vm.pageSize, vm.pageNumber, vm.searchParam).then(function(result) {
                vm.activationVersions = result.data;
                vm.isDataLoading = false;
                vm.generalItemsNumber = result.headers('numberOfItems');
                paginationService.savePaginationSettingsInLocation(vm.pageNumber, vm.pageSize);
            }, function(reason) {
                vm.isDataLoading = false;
                alertsService.failedToLoadData('ActivationVersions', reason.data.message);
            });
        }

        function deleteOne(activationVersion) {
            var dialog = dialogs.confirm('Delete confirmation', '<span class="break-word-inline"> Are you sure you want to delete ActivationVersion ' + activationVersion.description + ' ? </span>');
            dialog.result.then(function (btn) {
                activationVersionService.deleteById(activationVersion.id).then(function(resp) {
                    alertsService.successfullyDeleted(activationVersion.description);
                    utilsService.removeItemFromListById(vm.activationVersions, activationVersion.id);
                }, function(error) {
                    alertsService.showError({title: 'Error', message: error.data.message});
                });
            });
        }

        function exportAll() {
            activationVersionService.exportAll();
        }

        function exportOne(id) {
            activationVersionService.exportOne(id);
        }

        function shiftItems() {
            var numberOfPagesAfterDeletion = Math.ceil((getGeneralItemsNumber() - 1) / vm.pageSize);
            vm.pageNumber = (vm.pageNumber > numberOfPagesAfterDeletion && numberOfPagesAfterDeletion > 0) ? numberOfPagesAfterDeletion : vm.pageNumber;
            getActivationVersions();
        }

        function startParse() {
            return getGeneralItemsNumber() > 0;
        }

        function getGeneralItemsNumber() {
            return vm.generalItemsNumber;
        }
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.environment')
        .controller('EnvironmentEditController', controller);

    controller.$inject = ['ENTITY_TYPE'];

    function controller(ENTITY_TYPE) {
        var vm = this;
        vm.entityType = ENTITY_TYPE.ENVIRONMENT;
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.environment')
        .controller('EnvironmentImportController', controller);

    controller.$inject = ['ENTITY_TYPE'];

    function controller(ENTITY_TYPE) {
        var vm = this;
        vm.entityType = ENTITY_TYPE.ENVIRONMENT;
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.environment')
        .controller('EnvironmentsController', controller);

    controller.$inject = ['ENTITY_TYPE'];

    function controller(ENTITY_TYPE) {
        var vm = this;
        vm.ENTITY_TYPE = ENTITY_TYPE;
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.firmwareconfig')
        .controller('FirmwareConfigEditController', controller);

    controller.$inject = ['$rootScope', '$scope', '$controller', 'firmwareConfigService', 'modelService', '$stateParams', 'alertsService', '$state', 'authUtilsService', 'PERMISSION', 'utilsService'];

    function controller($rootScope, $scope, $controller, firmwareConfigService, modelService, $stateParams, alertsService, $state, authUtils, PERMISSION, utilsService) {
        var vm = this;

        angular.extend(vm, $controller('EditController', {
            $scope: $scope,
            mainPage: 'firmwareconfigs',
            stateParameters: null
        }));

        vm.models = [];
        vm.firmwareConfig = {
            id: '',
            description: '',
            firmwareFilename: '',
            firmwareVersion: '',
            supportedModelIds: [],
            applicationType: $rootScope.applicationType
        };
        vm.properties = [{key: '', value: ''}];
        vm.PERMISSION = PERMISSION;

        vm.save = save;
        vm.selectModel = selectModel;
        vm.authUtils = authUtils;
        init();

        function init() {
            modelService.getAll().then(function(resp) {
                if (resp.data && resp.data.length > 0) {
                    angular.forEach(resp.data, function(val, key) {
                        var modelCheckObject = {
                            modelId: val.id,
                            selected: false
                        };
                        vm.models.push(modelCheckObject);
                    });
                }
            });

            if ($stateParams.firmwareConfigId) {
                firmwareConfigService.getById($stateParams.firmwareConfigId).then(function(resp) {
                    vm.firmwareConfig.id = resp.data.id;
                    vm.firmwareConfig.description = resp.data.description;
                    vm.firmwareConfig.firmwareFilename = resp.data.firmwareFilename;
                    vm.firmwareConfig.firmwareVersion = resp.data.firmwareVersion;
                    vm.firmwareConfig.supportedModelIds = resp.data.supportedModelIds;
                    vm.firmwareConfig.applicationType = $rootScope.applicationType ? $rootScope.applicationType : resp.data.applicationType;
                    angular.forEach(resp.data.supportedModelIds, function(val, key) {
                        var modelCheckObject = {
                            modelId: val,
                            selected: false
                        };
                        for (var i = 0; i < vm.models.length; i++) {
                            if (modelCheckObject.modelId === vm.models[i].modelId) {
                                vm.models[i].selected = true;
                            }
                        }
                    });
                    vm.properties = [];
                    vm.firmwareConfig.properties = resp.data.properties;
                    for (var key in vm.firmwareConfig.properties) {
                        vm.properties.push({key: key, value: vm.firmwareConfig.properties[key]});
                    }
                }, function(error) {
                    alertsService.showError({title: 'Error', message: 'Error by loading FirmwareConfig'});
                });
            }
        }

        function selectModel(selectModelObject) {
            var index = vm.firmwareConfig.supportedModelIds.indexOf(selectModelObject.modelId);
            if (index >= 0) {
                vm.firmwareConfig.supportedModelIds.splice(index, 1);
                selectModelObject.selected = false;
            } else {
                vm.firmwareConfig.supportedModelIds.push(selectModelObject.modelId);
                selectModelObject.selected = true;
            }
        }
        vm.isSaving = false; 
        function save() {
            if (validateFirmwareConfig(vm.firmwareConfig) && validateProperties(vm.properties)) {
                vm.isSaving = true; // set isSaving to true
                vm.firmwareConfig.properties = keyValueObjectToMap(vm.properties);

                if (vm.firmwareConfig.id) {
                    firmwareConfigService.update(vm.firmwareConfig).then(function (resp) {
                        alertsService.successfullySaved(resp.data.description);
                        $state.go('firmwareconfigs');
                    }, function (error) {
                        alertsService.showError({title: 'Error', message: error.data.message});
                    }).finally(function () {
                        vm.isSaving = false; // set isSaving to false
                    });
                } else {
                    firmwareConfigService.create(vm.firmwareConfig).then(function (resp) {
                        alertsService.successfullySaved(resp.data.description);
                        $state.go('firmwareconfigs');
                    }, function (error) {
                        alertsService.showError({title: 'Error', message: error.data.message});
                    }).finally(function () {
                        vm.isSaving = false; // set isSaving to false
                    });
                }
            }
        }


        function keyValueObjectToMap(properties) {
            let mapObject = {};
            properties.forEach(function (item) {
                if (item.key) {
                    mapObject[item.key] = item.value;
                }
            });
            return mapObject;
        }

        function validateFirmwareConfig(firmwareConfig) {
            var missingFields = [];
            if (!firmwareConfig.description) {
                missingFields.push('description');
            }
            if (!firmwareConfig.firmwareVersion) {
                missingFields.push('version');
            }
            if (!firmwareConfig.firmwareFilename) {
                missingFields.push('firmware file name')
            }
            if (!firmwareConfig.supportedModelIds || firmwareConfig.supportedModelIds.length === 0) {
                missingFields.push('supported models');
            }

            if (missingFields.length > 0) {
                alertsService.showError({title: 'Error', message: 'Next fields are missing: ' + missingFields.join(', ')});
                return false;
            }
            return true;
        }

        function validateProperties(properties) {
            if (!validatePropertyKeyUniqueness(properties)) {
                alertsService.showError({title: 'Error', message: 'Keys are not unique'});
                return false;
            }

            return true;
        }

        function validatePropertyKeyUniqueness(properties) {
            let keys = _.map(properties, function(entry) {return entry.key});
            let uniqKeys = _.uniq(keys);
            return keys.length === uniqKeys.length;
        }
    }

})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.firmwareconfig')
        .controller('FirmwareConfigViewController', controller);

    controller.$inject = ['$uibModalInstance', 'firmwareConfig', 'utilsService'];

    function controller($modalInstance, firmwareConfig, utilsService) {
        var vm = this;
        vm.firmwareConfig = firmwareConfig;

        vm.dismiss = dismiss;
        vm.propertiesAreNotEmpty = propertiesAreNotEmpty;

        function dismiss() {
            $modalInstance.dismiss();
        }

        function propertiesAreNotEmpty(parameters) {
            return !utilsService.isMapEmpty(parameters);
        }
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.firmwareconfig')
        .controller('FirmwareConfigImportController', controller);

    controller.$inject=['$rootScope', '$scope', '$log', 'alertsService', 'utilsService', 'importService', 'firmwareConfigService', '$uibModal', 'paginationService', 'authUtilsService', 'PERMISSION'];

    function controller($rootScope, $scope, $log, alertsService, utilsService, importService, firmwareConfigService, $modal, paginationService, authUtils, PERMISSION) {
        var vm = this;

        vm.firmwareConfigs = null;
        vm.wrappedFirmwareConfigs = null;
        vm.isOverwritten = false;
        vm.paginationStorageKey = 'firmwareRulePageSize';
        vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
        vm.pageNumber = paginationService.getPageNumber();
        vm.PERMISSION = PERMISSION;
        vm.retrieveFile = retrieveFile;
        vm.importFirmwareConfig = importFirmwareConfig;
        vm.importAllFirmwareConfigs = importAllFirmwareConfigs;
        vm.overwriteAll = overwriteAll;
        vm.viewFirmwareConfig = viewFirmwareConfig;
        vm.selectPage = selectPage;
        vm.getGeneralItemsNumber = getGeneralItemsNumber;
        vm.progressBarControl = importService.progressBarControl;
        vm.authUtils = authUtils;

        $scope.$on('$locationChangeSuccess', function () {
            if (paginationService.paginationSettingsInLocationHaveChanged(vm.pageNumber, vm.pageSize)) {
                vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
                vm.pageNumber = paginationService.getPageNumber();
                selectPage();
            }
        });

        async function retrieveFile(fileName) {
            vm.firmwareConfigs = null;
            try {
                let file = await importService.openFile(fileName, null, this);
                vm.isOverwritten = false;
                vm.wrappedFirmwareConfigs = importService.prepareEntitiesFromFile(file);
                selectPage();
            } catch (e) {
                alertsService.showError({message: e});
            }
        }

        function importFirmwareConfig(wrappedFirmwareConfig) {
            if (!wrappedFirmwareConfig.entity.applicationType) {
                wrappedFirmwareConfig.entity.applicationType = $rootScope.applicationType;
            }
            if (wrappedFirmwareConfig.overwrite) {
                firmwareConfigService.update(wrappedFirmwareConfig.entity).then(function () {
                    alertsService.successfullySaved(wrappedFirmwareConfig.entity.description);
                    utilsService.removeSelectedItemFromListById(vm.wrappedFirmwareConfigs, wrappedFirmwareConfig.entity.id);
                }, function (error) {
                    alertsService.showError({message: error.data.message, title: 'Exception'});
                });
            } else {
                firmwareConfigService.create(wrappedFirmwareConfig.entity).then(function () {
                    alertsService.successfullySaved(wrappedFirmwareConfig.entity.id);
                    utilsService.removeSelectedItemFromListById(vm.wrappedFirmwareConfigs, wrappedFirmwareConfig.entity.id);
                }, function (error) {
                    alertsService.showError({message: error.data.message, title: 'Exception'});
                });
            }
        }

        function importAllFirmwareConfigs() {
            importService.importAllEntities(firmwareConfigService, vm.wrappedFirmwareConfigs);
        }

        function overwriteAll() {
            angular.forEach(vm.wrappedFirmwareConfigs, function (val) {
                val.overwrite = vm.isOverwritten;
            });
        }

        function viewFirmwareConfig(firmwareConfig) {
            $modal.open({
                templateUrl: 'app/xconf/firmware/firmwareconfig/firmwareconfig-view.html',
                controller: 'FirmwareConfigViewController as vm',
                size: 'md',
                resolve : {
                    firmwareConfig: function() {
                        return firmwareConfig;
                    }
                }
            });
        }

        function selectPage() {
            paginationService.savePaginationSettingsInLocation(vm.pageNumber, vm.pageSize);
            computeStartAndEndIndex();
        }

        function computeStartAndEndIndex() {
            vm.startIndex = (vm.pageNumber - 1) * vm.pageSize;
            vm.endIndex = vm.pageNumber * vm.pageSize;
        }

        function getGeneralItemsNumber() {
            return vm.wrappedFirmwareConfigs ? vm.wrappedFirmwareConfigs.length : 0;
        }
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.firmwareconfig')
        .controller('FirmwareConfigController', controller);

    controller.$inject = ['$rootScope', '$scope', 'firmwareConfigService', 'alertsService', '$uibModal', 'dialogs', 'paginationService', '$controller'];

    function controller($rootScope, $scope, firmwareConfigService, alertsService, $modal, dialogs, paginationService, $controller) {
        var vm = this;

        angular.extend(vm, $controller('MainController', {
            $scope: $scope
        }));

        vm.firmwares = [];
        vm.paginationStorageKey = 'firmwareConfigPageSize';
        vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
        vm.pageNumber = paginationService.getPageNumber();
        vm.generalItemsNumber = 0;
        vm.searchParam = {};
        vm.searchOptions = {
            data: [
                {
                    "name": {
                        friendlyName: "Model",
                        apiArgs: ["MODEL"]
                    }
                },
                {
                    "name": {
                        friendlyName: "Version",
                        apiArgs: ["FIRMWARE_VERSION"]
                    }
                },
                {
                    "name": {
                        friendlyName: "Description",
                        apiArgs: ["DESCRIPTION"]
                    }
                }
            ]
        };

        vm.deleteFirmwareConfig = deleteFirmwareConfig;
        vm.viewFirmwareConfig = viewFirmwareConfig;
        vm.exportFirmwareConfig = exportById;
        vm.exportAll = exportAll;
        vm.getFirmwareConfigs = getFirmwareConfigs;
        vm.startParse = startParse;
        vm.getGeneralItemsNumber = getGeneralItemsNumber;
        vm.shiftItems = shiftItems;
        vm.isDataLoading = false;

        init();

        function init() {
            vm.isDataLoading = true;
            getFirmwareConfigs();
        }

        $scope.$on('$locationChangeSuccess', function () {
            if (paginationService.paginationSettingsInLocationHaveChanged(vm.pageNumber, vm.pageSize)) {
                vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
                vm.pageNumber = paginationService.getPageNumber();
                init();
            }
        });

        $scope.$on('search-entities', function(event, data) {
            vm.searchParam = data.searchParam;
            getFirmwareConfigs();
        });

        function getFirmwareConfigs() {
            firmwareConfigService.searchByContext(vm.pageSize, vm.pageNumber, vm.searchParam).then(function(result) {
                vm.isDataLoading = false;
                vm.firmwares = result.data;
                vm.generalItemsNumber = result.headers('numberOfItems');
                paginationService.savePaginationSettingsInLocation(vm.pageNumber, vm.pageSize);
            },
            function(reason) {
                vm.isDataLoading = false;
                alertsService.failedToLoadData('firmwareConfigs', reason.data.message);
            });
        }

        function deleteFirmwareConfig(firmwareConfig) {
            var dialog = dialogs.confirm('Delete confirmation', '<span class="break-word-inline"> Are you sure you want to delete FirmwareConfig ' + firmwareConfig.description + ' ? </span>');
            dialog.result.then(function (btn) {
                firmwareConfigService.deleteById(firmwareConfig.id).then(function(resp) {
                    alertsService.successfullyDeleted(firmwareConfig.description);
                    for (var i=0; i < vm.firmwares.length; i++) {
                        if (firmwareConfig.id === vm.firmwares[i].id) {
                            vm.firmwares.splice(i, 1);
                        }
                    }
                    shiftItems();
                }, function(error) {
                    alertsService.showError({title: 'Error', message: error.data.message});
                });
            });
        }

        function viewFirmwareConfig(firmwareConfig) {
            $modal.open({
                templateUrl: 'app/xconf/firmware/firmwareconfig/firmwareconfig-view.html',
                controller: 'FirmwareConfigViewController as vm',
                size: 'md',
                resolve : {
                    firmwareConfig: function() {
                        return firmwareConfig;
                    }
                }
            });
        }

        function shiftItems() {
            var numberOfPagesAfterDeletion = Math.ceil((getGeneralItemsNumber() - 1) / vm.pageSize);
            vm.pageNumber = (vm.pageNumber > numberOfPagesAfterDeletion && numberOfPagesAfterDeletion > 0) ? numberOfPagesAfterDeletion : vm.pageNumber;
            getFirmwareConfigs();
        }

        function startParse() {
            return getGeneralItemsNumber() > 0;
        }

        function getGeneralItemsNumber() {
            return vm.generalItemsNumber;
        }

        function exportAll() {
            firmwareConfigService.exportAll();
        }

        function exportById(id) {
            firmwareConfigService.exportById(id);
        }
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.log')
        .controller('LogController', controller);

    controller.$inject = ['logService', 'alertsService', 'namespacedListService'];

    function controller(logService, alertsService, namespacedListService) {
        var vm = this;
        vm.logs = null;
        vm.macAddress = null;
        vm.hasError = false;

        vm.getLogs = getLogs;
        vm.validateMacAddress = validateMacAddress;

        function getLogs() {
            var normalizedMac = namespacedListService.normalizeMacAddress(vm.macAddress);
            logService.getLogs({param: normalizedMac}, function(resp) {
                vm.logs = resp;
            }, function(error) {
                alertsService.showError({title: 'Error', message: error.data.message});
            });
        }


        function validateMacAddress(mac) {
            var normalizedMac = namespacedListService.normalizeMacAddress(mac);
            vm.hasError = !namespacedListService.isMacAddress(normalizedMac);
        }

    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.model')
        .controller('ModelEditController', controller);

    controller.$inject = ['ENTITY_TYPE'];

    function controller(ENTITY_TYPE) {
        var vm = this;
        vm.ENTITY_TYPE = ENTITY_TYPE;
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.model')
        .controller('ModelImportController', controller);

    controller.$inject = ['ENTITY_TYPE'];

    function controller(ENTITY_TYPE) {
        var vm = this;
        vm.entityType = ENTITY_TYPE.MODEL;
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.model')
        .controller('ModelController', controller);

    controller.$inject = ['ENTITY_TYPE'];

    function controller(ENTITY_TYPE) {
        var vm = this;
        vm.ENTITY_TYPE = ENTITY_TYPE;
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .controller('PercentageBeanEditController', controller);

    controller.$inject = ['$rootScope', '$state', '$stateParams', 'percentFilterService', 'namespacedListService', 'alertsService', 'percentFilterValidationService', 'utilsService', 'firmwareConfigService', '$scope', 'modelService', 'environmentService', 'percentageBeanService', 'NAMESPACED_LIST_TYPE', 'ruleHelperService', 'ruleValidationService', 'TIME_FREE_ARG_OPERATION_ARRAY', 'PERCENTAGE_BEAN_OPERATION_ARRAY', 'FIRMWARE_FREE_ARG_AUTOCOMPLETE_VALUE', 'FREE_ARG_NAME'];

    function controller($rootScope, $state, $stateParams, percentFilterService, namespacedListService, alertsService, percentFilterValidationService, utilsService, firmwareConfigService, $scope, modelService, environmentService, percentageBeanService, NAMESPACED_LIST_TYPE, ruleHelperService, ruleValidationService, TIME_FREE_ARG_OPERATION_ARRAY, PERCENTAGE_BEAN_OPERATION_ARRAY, FIRMWARE_FREE_ARG_AUTOCOMPLETE_VALUE, FREE_ARG_NAME) {
        var vm = this;

        vm.percentageBean = {
            applicationType: $rootScope.applicationType,
            optionalConditions: {},
            distributions: [],
            firmwareVersions: [],
            firmwareCheckRequired: false,
            active: false,
            rebootImmediately: false,
            useAccountIdPercentage: false
        };
        vm.firmwareVersionSelectObjects = [];
        vm.firmwareConfigs = [];
        vm.missingFirmwareVersions = [];
        vm.firmwareConfigsBySupportedModels = [];
        vm.validator = percentFilterValidationService;
        vm.models = [];
        vm.environments = [];
        vm.hasValue = utilsService.hasValue;
        vm.whitelists = [];
        vm.noop = false;

        vm.disableValidation = true;
        vm.namespacedListData = ruleHelperService.buildNamespacedListData();
        vm.operations = {time: TIME_FREE_ARG_OPERATION_ARRAY, general: PERCENTAGE_BEAN_OPERATION_ARRAY};
        vm.representation = ruleHelperService.buildRepresentation();
        vm.freeArgAutocompleteValues = FIRMWARE_FREE_ARG_AUTOCOMPLETE_VALUE;
        vm.validationFunction = ruleValidationService.validate;
        vm.percentFreeArgName = FREE_ARG_NAME.ESTB_MAC;

        vm.save = save;
        vm.selectFirmwareConfig = selectFirmwareConfig;
        vm.getSelectedFirmwareVersions = getSelectedFirmwareVersions;
        vm.addDistribution = addDistribution;
        vm.getTotalDistributionPercentage = percentageBeanService.getTotalDistributionPercentage;
        vm.setNoop = setNoop;
        vm.isNoop = isNoop;
        vm.reloadFirmwareConfigsByModelChanging = reloadFirmwareConfigsByModelChanging;
        init();

        function init() {

            firmwareConfigService.getAll().then(function(resp) {
                vm.allFirmwareConfigs = resp.data;
                initPercentageBean();
            }, function(error) {
                alertsService.showError({title: 'Error', message: error.data.message})
            });

            $scope.$root.$on("rule::remove", function(e, obj) {
                var watchResult = ruleHelperService.watchRuleRemoveOperation(vm.isValidCondition, vm.percentageBean.optionalConditions, obj);
                vm.percentageBean.optionalConditions = watchResult.rule;
                vm.isValidCondition = watchResult.isValidCondition;
            });

            modelService.getAll().then(function(resp) {
                vm.models = resp.data;
            }, alertsService.errorHandler);

            environmentService.getAll().then(function(resp) {
                vm.environments = resp.data;
            }, alertsService.errorHandler);

            vm.validator.cleanErrors();
        }

        function initPercentageBean() {
            if ($stateParams.id) {
                percentageBeanService.getById($stateParams.id).then(function (resp) {
                    vm.percentageBean = resp.data;
                    if (!vm.percentageBean.optionalConditions) {
                        vm.percentageBean.optionalConditions = {};
                    }
                    reloadFirmwareConfigsByModelChanging(vm.percentageBean.model);
                    percentageBeanService.sortPercentageBeanFirmwareVersionsIfExistOrNot(vm.percentageBean).then(function (missingFirmwareVersions) {
                        vm.missingFirmwareVersions = missingFirmwareVersions;
                    }, alertsService.errorHandler);
                    vm.noop = isNoop();

                }, alertsService.errorHandler);
            }

            namespacedListService.getNamespacedListIdsByType(NAMESPACED_LIST_TYPE.IP_LIST).then(function(resp) {
                vm.whitelists = resp.data;
            }, alertsService.errorHandler);
        }

        $rootScope.$on('applicationType:changed', function(event, data) {
            $state.go('percentfilter');
        });


        vm.isSaving = false;
        function save(percentageBean) {
            percentageBean.firmwareVersions = getSelectedFirmwareVersions(vm.firmwareVersionSelectObjects);
            if (!percentageBean.firmwareCheckRequired) {
                percentageBean.rebootImmediately = false;
                percentageBean.firmwareVersions = [];
                percentageBean.intermediateVersion = '';
            }
        
            if (vm.validator.validatePercentageBean(percentageBean, getSelectedFirmwareVersions(vm.firmwareVersionSelectObjects), vm.firmwareConfigsBySupportedModels)) {
                percentageBean.firmwareVersions = getSelectedFirmwareVersions(vm.firmwareVersionSelectObjects);
                if (!percentageBean.firmwareCheckRequired) {
                    percentageBean.rebootImmediately = false;
                    percentageBean.firmwareVersions = [];
                }
                vm.isSaving = true;
                if ($stateParams.id) {
                    percentageBeanService.update(percentageBean).then(function (resp) {
                        alertsService.successfullySaved(percentageBean.name);
                        $state.go('percentfilter');
                    }, function (reason) {
                        alertsService.showError({message: reason.data.message});
                    }).finally(function () {
                        vm.isSaving = false;
                    });
                } else {
                    percentageBeanService.create(percentageBean).then(function (resp) {
                        alertsService.successfullySaved(percentageBean.name);
                        $state.go('percentfilter');
                    }, function (reason) {
                        alertsService.showError({message: reason.data.message});
                    }).finally(function () {
                        vm.isSaving = false;
                    });
                }
            }
        }
        

        function selectFirmwareConfig(firmwareConfigSelectObject) {
            firmwareConfigSelectObject.selected = !firmwareConfigSelectObject.selected;
        }

        function getSelectedFirmwareVersions(firmwareConfigSelectEntities) {
            var selectedVersions = [];
            angular.forEach(firmwareConfigSelectEntities, function (val, key) {
                if (val.selected === true) {
                    selectedVersions.push(val.config.firmwareVersion);
                }
            });
            return selectedVersions;
        }

        $scope.$watch('vm.percentageBean.lastKnownGood', function(newLkgConfigId, oldLkgConfigId) {
            vm.firmwareVersionSelectObjects.forEach(function (firmwareVersionSelectObject) {
                if (vm.percentageBean && vm.percentageBean.firmwareCheckRequired) {
                    var oldLkgConfig = utilsService.getItemFromListById(oldLkgConfigId, vm.firmwareConfigsBySupportedModels);
                    if (firmwareVersionSelectObject.config.id === newLkgConfigId) {
                        firmwareVersionSelectObject.selected = true;
                    } else if (firmwareVersionSelectObject.config.id == oldLkgConfigId
                        && vm.percentageBean.firmwareVersions.indexOf(oldLkgConfig.firmwareVersion) === -1) {
                        firmwareVersionSelectObject.selected = false;
                    }
                }
            });
            vm.noop = isNoop();
        });

        $scope.$watch('vm.percentageBean.intermediateVersion', function() {
            vm.noop = isNoop();
        });

        $scope.$watch('vm.percentageBean.distributions', function() {
            if (Math.floor(vm.getTotalDistributionPercentage(vm.percentageBean)) === 100) {
                vm.percentageBean.lastKnownGood = null;
            }
            vm.noop = isNoop();
        }, true);

        function addDistribution(percentageBean) {
            var distribution = {
                configId: '',
                percentage: '',
                startPercentRange: '',
                endPercentRange: ''
            };
            percentageBean.distributions.push(distribution);
            percentageBean.firmwareCheckRequired = true;
        }

        function setNoop() {
            if (vm.percentageBean.distributions.length) {
                vm.percentageBean.distributions.length = 0;
            }
            if (vm.percentageBean.lastKnownGood) {
                vm.percentageBean.lastKnownGood = '';
            }
            if (vm.percentageBean.intermediateVersion) {
                vm.percentageBean.intermediateVersion  = '';
            }
        }

        function isNoop() {
            var configPresent = vm.percentageBean.distributions.length || vm.percentageBean.lastKnownGood || vm.percentageBean.intermediateVersion;
            return !configPresent;
        }

        function reloadFirmwareConfigsByModelChanging(modelId) {
            vm.firmwareVersionSelectObjects = [];
            firmwareConfigService.getByModelId(modelId).then(function(firmwareConfigResp) {
                vm.firmwareConfigsBySupportedModels = firmwareConfigResp.data;
                angular.forEach(firmwareConfigResp.data, function (val, key) {
                    var selectObject = {
                        config: val,
                        selected: false
                    };
                    if (vm.percentageBean.firmwareVersions.indexOf(val.firmwareVersion) !== -1) {
                        selectObject.selected = true;
                    }
                    vm.firmwareVersionSelectObjects.push(selectObject);
                });
            }, alertsService.errorHandler);
        }
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .controller('PercentFilterController', controller);

    controller.$inject = ['$scope', '$controller', 'percentFilterService', 'alertsService', '$uibModal', 'firmwareConfigService', 'percentageBeanService', 'dialogs', 'paginationService', 'RULE_SEARCH_OPTIONS'];

    function controller($scope, $controller, percentFilterService, alertsService, $uibModal, firmwareConfigService, percentageBeanService, dialogs, paginationService, RULE_SEARCH_OPTIONS) {
        var vm = this;

        angular.extend(vm, $controller('MainController', {
            $scope: $scope
        }));

        vm.percentFilter = null;
        vm.firmwareConfigMap = {};
        vm.percentageBeans = [];

        vm.paginationStorageKey = 'percentageBeanPageSize';
        vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
        vm.pageNumber = paginationService.getPageNumber();
        vm.generalItemsNumber = 0;
        vm.searchParam = {};
        vm.searchOptions = {};
        vm.searchOptionsData = [
                {
                    "name": {
                        friendlyName: "Environment",
                        apiArgs: ["ENVIRONMENT"]
                    }
                },
                {
                    "name": {
                        friendlyName: "Model",
                        apiArgs: ["MODEL"]
                    }
                },
                {
                    "name": {
                        friendlyName: "LKG",
                        apiArgs: ["LAST_KNOWN_GOOD"]
                    }
                },
                {
                    "name": {
                        friendlyName: "Minimum check version",
                        apiArgs: ["MIN_CHECK_VERSION"]
                    }
                },
                {
                    "name": {
                        friendlyName: "Intermediate version",
                        apiArgs: ["INTERMEDIATE_VERSION"]
                    }
                }
            ];

        vm.exportWholeFilter = percentFilterService.exportWholeFilter;
        vm.exportGlobalPercentage = percentFilterService.exportGlobalPercentage;
        vm.exportPercentageBean = percentageBeanService.exportPercentageBean;
        vm.exportAllPercentageBeans = percentageBeanService.exportAllPercentageBeans;
        vm.exportAllPercentageBeansAsRule = percentageBeanService.exportAllPercentageBeansAsRule;
        vm.exportPercentageBeanAsRule = percentageBeanService.exportPercentageBeanAsRule;
        vm.exportGlobalPercentageAsRule = percentFilterService.exportGlobalPercentageAsRule;
        vm.viewPercentageBean = viewPercentageBean;
        vm.deletePercentageBean = deletePercentageBean;
        vm.startParse = startParse;
        vm.getGeneralItemsNumber = getGeneralItemsNumber;
        vm.shiftItems = shiftItems;
        vm.getPercentageBeans = getPercentageBeans;
        vm.isDataLoading = false;

        init();

        function init() {
            percentFilterService.getFilter().then(function(resp) {
                vm.filter = resp.data;
            }, function(error) {
                alertsService.showError({title: 'Error', message: error.data.message});
            });
            firmwareConfigService.getFirmwareConfigMap().then(function(resp) {
                vm.firmwareConfigMap = resp.data;
            }, function(error) {
                alertsService.showError({title: 'Exception', message: error.data.message});
            });
            getPercentageBeans();
            buildSearchOptions();
        }

        function buildSearchOptions() {
            vm.searchOptions = angular.copy(RULE_SEARCH_OPTIONS);
            vm.searchOptions.data = vm.searchOptions.data.concat(vm.searchOptionsData);
        }

        $scope.$on('$locationChangeSuccess', function () {
            if (paginationService.paginationSettingsInLocationHaveChanged(vm.pageNumber, vm.pageSize)) {
                vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
                vm.pageNumber = paginationService.getPageNumber();
                init();
            }
        });

        $scope.$on('search-entities', function(event, data) {
            vm.searchParam = data.searchParam;
            getPercentageBeans();
        });

        function getPercentageBeans() {
            vm.isDataLoading = true;
            percentageBeanService.getPage(vm.pageSize, vm.pageNumber, vm.searchParam).then(function(resp) {
                vm.percentageBeans = resp.data;
                vm.isDataLoading = false;
                vm.generalItemsNumber = resp.headers('numberOfItems');
                paginationService.savePaginationSettingsInLocation(vm.pageNumber, vm.pageSize);
            }, function(error) {
                vm.isDataLoading = false;
                alertsService.showError({title: 'Error', message: error.data.message});
            });
        }

        function viewPercentageBean(percentageBean) {
            percentageBeanService.sortPercentageBeanFirmwareVersionsIfExistOrNot(percentageBean).then(function(firmwareVersions) {
                showViewPercentageBean(percentageBean, firmwareVersions);
            }, function(error) {
                alertsService.showError({title: 'Error', message: error.data.message});
            });
        }

        function showViewPercentageBean(percentageBean, firmwareVersions) {
            $uibModal.open({
                templateUrl: 'app/xconf/firmware/percentfilter/percentfilter.view.html',
                controller: 'PercentFilterViewController as vm',
                size: 'md',
                resolve : {
                    percentageBean: function() {
                        return percentageBean;
                    },
                    firmwareVersions: function() {
                        return firmwareVersions;
                    },
                    firmwareConfigMap: function() {
                        return vm.firmwareConfigMap;
                    }
                }
            });
        }

        function deletePercentageBean(percentageBean) {
            var dialog = dialogs.confirm('Delete confirmation', '<span class="break-word-inline"> Are you sure you want to delete PercentageBean ' + percentageBean.name + ' ? </span>');
            dialog.result.then(function (btn) {
                percentageBeanService.deleteById(percentageBean.id).then(function(resp) {
                    alertsService.successfullyDeleted(percentageBean.name);
                    for (var i=0; i < vm.percentageBeans.length; i++) {
                        if (percentageBean.id === vm.percentageBeans[i].id) {
                            vm.percentageBeans.splice(i, 1);
                        }
                    }
                    shiftItems();
                }, function(error) {
                    alertsService.showError({title: 'Error', message: error.data.message});
                });
            });
        }

        function shiftItems() {
            var numberOfPagesAfterDeletion = Math.ceil((getGeneralItemsNumber() - 1) / vm.pageSize);
            vm.pageNumber = (vm.pageNumber > numberOfPagesAfterDeletion && numberOfPagesAfterDeletion > 0) ? numberOfPagesAfterDeletion : vm.pageNumber;
            getPercentageBeans();
        }

        function startParse() {
            return getGeneralItemsNumber() > 0;
        }

        function getGeneralItemsNumber() {
            return vm.generalItemsNumber;
        }
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .controller('PercentFilterEditController', controller);

    controller.$inject = ['$state', '$scope', '$controller', 'percentFilterService', 'namespacedListService', 'alertsService', 'percentFilterValidationService', 'utilsService', 'NAMESPACED_LIST_TYPE'];

    function controller($state, $scope, $controller, percentFilterService, namespacedListService, alertsService, percentFilterValidationService, utilsService, NAMESPACED_LIST_TYPE) {
        var vm = this;

        angular.extend(vm, $controller('EditController', {
            $scope: $scope,
            mainPage: 'percentfilter',
            stateParameters: null
        }));

        vm.filter = null;
        vm.ipListIds = [];
        vm.validator = percentFilterValidationService;
        vm.hasValue = utilsService.hasValue;

        vm.save = save;

        init();

        function init() {
            vm.validator.cleanErrors();
            percentFilterService.getFilter().then(function(percentResp) {
                vm.filter = percentResp.data;
            }, function(error) {
                errorHandler(error.data.message);
            });

            namespacedListService.getNamespacedListIdsByType(NAMESPACED_LIST_TYPE.IP_LIST).then(function(resp) {
                vm.ipListIds = resp.data;
            }, function(error) {
                errorHandler(error.data.message);
            });
        }

        function save(filter) {
            if (vm.validator.validatePercentFilter(filter)) {
                percentFilterService.saveFilter(filter).then(function (resp) {
                    alertsService.successfullySaved('PercentFilter');
                    $state.go('percentfilter');
                }, alertsService.errorHandler);
            }
        }

        function errorHandler(errorMessage) {
            alertsService.showError({title: 'Error', message: errorMessage});
        }
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .controller('PercentFilterImportController', controller);

    controller.$inject=['$log', '$state', 'alertsService', 'importService', 'percentFilterService', '$uibModal', 'firmwareConfigService', 'percentageBeanService', 'utilsService', '$scope', 'ENTITY_TYPE'];

    function controller($log, $state, alertsService, importService, percentFilterService, $uibModal, firmwareConfigService, percentageBeanService, utilsService, $scope, ENTITY_TYPE) {
        var vm = this;
        vm.filter = createEmptyPercentFilter();
        vm.firmwareConfigMap = {};
        vm.errorsById = {};
        vm.wrappedPercentFilter = createEmptyPercentFilter();
        vm.isOverwriteAll = false;
        vm.progressBarControl = importService.progressBarControl;
        vm.overwriteAll = overwriteAll;
        vm.viewPercentageBean = viewPercentageBean;
        vm.retrieveFile = retrieveFile;
        vm.importFilter = importFilter;
        vm.isObjectEmpty = utilsService.isNullOrUndefinedOrEmptyObject;
        vm.importGlobalPercentage = importGlobalPercentage;
        vm.importPercentageBean = importPercentageBean;
        vm.importAll = importAll;

        init();

        $scope.$on("import::error", function(event, data) {
            vm.errorsById[data.id] = data.message;
        });

        function init() {
            firmwareConfigService.getFirmwareConfigMap().then(function(resp) {
                vm.firmwareConfigMap = resp.data;
            }, function(error) {
                alertsService.showError({title: 'Exception', message: error.data.message});
            });
        }

        async function retrieveFile(fileName) {
            vm.filter = {};
            vm.errorsById = {};
            vm.wrappedPercentFilter = createEmptyPercentFilter();
            try {
                let file = await importService.openFile(fileName, null, this);
                processFile(file);
            } catch (e) {
                alertsService.showError({message: e});
            }
        }

        function processFile(file) {
            vm.filter = getPercentFilterFromFile(file);
            if (vm.filter.percentageBeans && vm.filter.percentageBeans.length > 0) {
                vm.filter.percentageBeans.forEach(function(val, key) {
                    vm.wrappedPercentFilter.percentageBeans.push({
                        entity: val,
                        overwrite: false
                    });
                });
            }
            if (vm.filter.globalPercentage) {
                vm.wrappedPercentFilter.globalPercentage = {
                    entity: vm.filter.globalPercentage,
                    overwrite: false
                }
            }
        }

        function getPercentFilterFromFile(data) {
            try {
                var parsedFile = JSON.parse(data);
                if (!parsedFile.globalPercentage && !parsedFile.percentageBeans) {
                    alertsService.showError({title: 'Error', message: 'Invalid file'});
                    return {};
                }
                for (let i = 0; i < parsedFile.percentageBeans.length; i++) {
                    parsedFile.percentageBeans[i].distributions = percentageToPercentRange(parsedFile.percentageBeans[i]);
                }
                return parsedFile;
            } catch(e) {
                alertsService.showError({title: 'JSONStructureException', message: 'Percent Filter JSON has some errors! Please, check this file!'});
                $log.error('RoundRobinFilter JSON file is invalid! Please, check it!');
            }

        }

        function percentageToPercentRange(parsedFile) {
            let configEntries = parsedFile.distributions;

            let prevPercentEnd = 0.0;
            for (let i = 0; i < configEntries.length; i++) {
                if (configEntries[i].startPercentRange === undefined || configEntries[i].endPercentRange === undefined) {
                    configEntries[i].startPercentRange = +Number(prevPercentEnd).toFixed(3);
                    configEntries[i].endPercentRange = +Number(prevPercentEnd + configEntries[i].percentage).toFixed(3);
                }
                prevPercentEnd += +Number(configEntries[i].endPercentRange - configEntries[i].startPercentRange).toFixed(3);
            }
            return configEntries;
        }

        function importFilter(filter) {
            percentFilterService.saveFilter(filter).then(function () {
                alertsService.successfullySaved('Percent Filter');
                $state.go('percentfilter');
            }, function (reason) {
                alertsService.showError({title: 'Error', message: reason.data.message});
            });
        }

        function viewPercentageBean(percentageBean) {
            percentageBeanService.sortPercentageBeanFirmwareVersionsIfExistOrNot(percentageBean).then(function(firmwareVersions) {
                showViewPercentageBean(percentageBean, firmwareVersions);
            }, function(error) {
                alertsService.showError({title: 'Error', message: error.data.message});
            });
        }

        function showViewPercentageBean(percentageBean, firmwareVersions) {
            $uibModal.open({
                templateUrl: 'app/xconf/firmware/percentfilter/percentfilter.view.html',
                controller: 'PercentFilterViewController as vm',
                size: 'md',
                resolve : {
                    firmwareConfigMap: function() {
                        return vm.firmwareConfigMap;
                    },
                    percentageBean: function() {
                        return percentageBean;
                    },
                    firmwareVersions: function () {
                        return firmwareVersions;
                    }
                }
            });
        }

        function importPercentageBean(wrappedPercentageBean) {
            if (wrappedPercentageBean.overwrite) {
                percentageBeanService.update(wrappedPercentageBean.entity).then(function(resp) {
                    alertsService.successfullySaved(wrappedPercentageBean.entity.name);
                    utilsService.removeSelectedItemFromListById(vm.wrappedPercentFilter.percentageBeans, wrappedPercentageBean.entity.id);
                }, function (error) {
                    vm.errorsById[wrappedPercentageBean.entity.id] = error.data.message;
                });
            } else {
                percentageBeanService.create(wrappedPercentageBean.entity).then(function(resp) {
                    alertsService.successfullySaved(wrappedPercentageBean.entity.name);
                    utilsService.removeSelectedItemFromListById(vm.wrappedPercentFilter.percentageBeans, wrappedPercentageBean.entity.id);
                }, function(error) {
                    vm.errorsById[wrappedPercentageBean.entity.id] = error.data.message;
                });
            }
        }

        function importGlobalPercentage(wrappedPercentPercentage) {
                percentFilterService.saveFilter(wrappedPercentPercentage.entity).then(function(resp) {
                    alertsService.successfullySaved('Global Percent filter');
                    vm.wrappedPercentFilter.globalPercentage = {};
                }, function(error) {
                    vm.errorsById['GLOBAL_PERCENTAGE'] = error.data.message;
                });
        }

        function createEmptyPercentFilter() {
            return {
                globalPercentage: {},
                percentageBeans: []
            }
        }

        function overwriteAll() {
            vm.wrappedPercentFilter.percentageBeans.forEach(function(selectObject) {
                selectObject.overwrite = vm.isOverwriteAll;

            });
        }

        function importAll() {
            if (!utilsService.isNullOrUndefinedOrEmptyObject(vm.wrappedPercentFilter.globalPercentage)) {
                importGlobalPercentage(vm.wrappedPercentFilter.globalPercentage);
            }
            if (vm.wrappedPercentFilter.percentageBeans && vm.wrappedPercentFilter.percentageBeans.length > 0) {
                importService.importAllEntities(percentageBeanService, vm.wrappedPercentFilter.percentageBeans, null, null, ENTITY_TYPE.PERCENT_FILTER);
            }
        }
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .controller('PercentFilterViewController', controller);

    controller.$inject = ['$uibModalInstance', 'percentageBean', 'firmwareVersions', 'firmwareConfigService', 'alertsService', 'firmwareConfigMap'];

    function controller($uibModalInstance, percentageBean, firmwareVersions, firmwareConfigService, alertsService, firmwareConfigMap) {
        var vm = this;
        vm.percentageBean = percentageBean;
        vm.firmwareVersions = firmwareVersions;
        vm.lastKnownGood = null;
        vm.intermediateVersion = null;
        vm.firmwareConfigMap = firmwareConfigMap;

        vm.dismiss = dismiss;

        init();

        function dismiss() {
            $uibModalInstance.dismiss();
        }

        function init() {
            if (percentageBean.lastKnownGood) {
                firmwareConfigService.getById(percentageBean.lastKnownGood).then(function(resp) {
                    vm.lastKnownGood = resp.data.firmwareVersion;
                }, function(error) {
                    alertsService.showError({title: 'Error', message: error.data.message});
                });
            }
            if (percentageBean.intermediateVersion) {
                firmwareConfigService.getById(percentageBean.intermediateVersion).then(function(resp) {
                    vm.intermediateVersion = resp.data.firmwareVersion;
                }, function(error) {
                    alertsService.showError({title: 'Error', message: error.data.message});
                });
            }
        }
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .controller('FirmwareReportPageController', controller);

    controller.$inject = ['$scope', 'firmwareReportPageService', 'alertsService', 'FileSaver', 'Blob', 'utilsService', 'firmwareRuleService'];

    function controller($scope, firmwareReportPageService, alertsService, FileSaver, Blob, utilsService, firmwareRuleService) {
        var vm = this;


        vm.getReport = getReport;
        vm.atLeastOneChecked = atLeastOneChecked;
        vm.checkAll = checkAll;
        vm.uncheckAll = uncheckAll;

        vm.macRulesNamesForCheckbox = [];
        vm.idsToNamesMap = {};
        vm.macRuleNameRows = [];
        vm.isDataLoading = false;

        $scope.$on('applicationType:changed', function(event, data) {
            getMacRules();
        });

        getMacRules();

        function getMacRules() {
            vm.isDataLoading = true;
            firmwareRuleService.getMacRulesNames().then(
                function(result) {
                    vm.idsToNamesMap = result.data;
                    vm.isDataLoading = false;
                    var names = _.values(vm.idsToNamesMap);
                    vm.macRulesNamesForCheckbox = createMacRulesForCheckbox(names);
                    sortByRuleName(vm.macRulesNamesForCheckbox);
                    vm.macRuleNameRows = utilsService.chunkData(vm.macRulesNamesForCheckbox, 3);
                },
                function(reason) {
                    alertsService.showError({title: 'Error', message: reason.data});
                }
            );
        }

        function createMacRulesForCheckbox(macRulesNames) {
            var length = macRulesNames.length;
            var result = [];
            for (var i = 0; i < length; i++) {
                result.push({
                    ruleName: macRulesNames[i],
                    isChecked: false
                })
            }

            return result;
        }

        function getReport() {
            firmwareReportPageService.getReport(getCheckedIds()).then(
                function(result) {
                    var name = 'report.xls';
                    try {
                        name = result.headers('Content-Disposition').split('=')[1]
                    } catch(err) {}
                    var blob = new Blob([result.data], {type: "application/vnd.ms-excel"});
                    FileSaver.saveAs(blob, name);
                }
            );
        }

        function getCheckedIds() {
            var result = [];
            var namesToIdsMap = _.invert(vm.idsToNamesMap);
            var length = vm.macRulesNamesForCheckbox.length;
            for (var i = 0; i < length; i++) {
                var item = vm.macRulesNamesForCheckbox[i];
                if (item.isChecked) {
                    result.push(namesToIdsMap[item.ruleName]);
                }
            }
            return result;
        }

        function atLeastOneChecked() {
            var length = vm.macRulesNamesForCheckbox.length;
            for (var i = 0; i < length; i++) {
                var item = vm.macRulesNamesForCheckbox[i];
                if (item.isChecked) {
                    return true;
                }
            }

            return false;
        }

        function checkAll() {
            var length = vm.macRulesNamesForCheckbox.length;
            for (var i = 0; i < length; i++) {
                vm.macRulesNamesForCheckbox[i].isChecked = true;
            }
        }

        function uncheckAll() {
            var length = vm.macRulesNamesForCheckbox.length;
            for (var i = 0; i < length; i++) {
                vm.macRulesNamesForCheckbox[i].isChecked = false;
            }
        }

        function sortByRuleName(objectsArray) {
            objectsArray.sort(function(a, b) {
                return a.ruleName.localeCompare(b.ruleName);
            });
        }
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .controller('RoundRobinFilterController', controller);

    controller.$inject = ['$rootScope', '$scope', '$controller', 'roundRobinFilterService', 'alertsService'];

    function controller($rootScope, $scope, $controller, roundRobinFilterService, alertsService) {
        var vm = this;

        angular.extend(vm, $controller('MainController', {
            $scope: $scope
        }));

        vm.filter = null;
        vm.exportFilter = roundRobinFilterService.exportFilter;

        init();

        function init() {
            roundRobinFilterService.getFilter($rootScope.applicationType).then(function(resp) {
                vm.filter = resp.data;
            }, alertsService.errorHandler);
        }
    }

})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .controller('RoundRobinFilterEditController', controller);

    controller.$inject = ['$rootScope', '$scope', '$controller', 'roundRobinFilterService', 'alertsService', 'utilsService', 'roundRobinFilterValidationService', '$state'];

    function controller($rootScope, $scope, $controller, roundRobinFilterService, alertsService, utilsService, roundRobinFilterValidationService, $state) {
        var vm = this;

        angular.extend(vm, $controller('EditController', {
            $scope: $scope,
            mainPage: 'roundrobinfilter',
            stateParameters: null
        }));

        vm.filter = null;
        vm.validator = roundRobinFilterValidationService;

        vm.addLocation = addLocation;
        vm.removeLocation = removeLocation;
        vm.hasValue = hasValue;
        vm.save = save;

        init();

        $scope.$on('applicationType:changed', function(event, data) {
            init();
        });

        function init() {
            roundRobinFilterService.getFilter($rootScope.applicationType).then(function(filterResp) {
                vm.filter = filterResp.data;
            }, alertsService.errorHandler);

            vm.validator.cleanErrors();
        }

        function addLocation(locations) {
            var newLocation = {
                locationIp: '',
                percentage: ''
            };

            locations.push(newLocation);
        }

        function removeLocation(locations, item) {
            utilsService.removeItemFromArray(locations, item);
        }

        function save() {
            if (!vm.filter.applicationType) {
                vm.filter.applicationType = $rootScope.applicationType;
            }
            roundRobinFilterService.saveFilter(vm.filter).then(function(resp) {
                alertsService.successfullySaved('Download Location Filter');
                $state.go('roundrobinfilter');
            }, alertsService.errorHandler);
        }

        function hasValue(error) {
            var result = angular.isDefined(error) && !$.isEmptyObject(error);
            return result;
        }
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .controller('RoundRobinFilterImportController', controller);

    controller.$inject=['$rootScope', '$log', '$state', 'alertsService', 'importService', 'roundRobinFilterService'];

    function controller($rootScope, $log, $state, alertsService, importService, roundRobinFilterService) {
        var vm = this;

        vm.retrieveFile = retrieveFile;
        vm.importFilter = importFilter;
        vm.filter = null;

        async function retrieveFile(fileName) {
            vm.filter = null;
            try {
                let file = await importService.openFile(fileName, null, this);
                vm.filter = importService.getEntitiesFromFile(file);
            } catch(e) {
                alertsService.showError({message: e});
            }
        }

        function importFilter(filter) {
            if (!filter.applicationType) {
                filter.applicationType = $rootScope.applicationType;
            }
            roundRobinFilterService.saveFilter(filter).then(function () {
                alertsService.successfullySaved('Download Location Filter');
                $state.go('roundrobinfilter');
            }, function (reason) {
                alertsService.showError({title: 'Error', message: reason.data.message});
            });
        }
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.firmwareTestPage')
        .controller('FirmwareTestPageController', controller);

    controller.$inject = ['$rootScope', 'firmwareTestPageService', 'alertsService', 'utilsService', 'FIRMWARE_FREE_ARG_AUTOCOMPLETE_VALUE', 'CAPABILITIES', 'testPageUtils', 'FREE_ARG_NAME'];

    function controller($rootScope, firmwareTestPageService, alertsService, utilsService, FIRMWARE_FREE_ARG_AUTOCOMPLETE_VALUE, CAPABILITIES, testPageUtils, FREE_ARG_NAME) {
        var vm = this;

        vm.parameters = [{key: '', value: ''}];
        vm.autoCompleteValues = FIRMWARE_FREE_ARG_AUTOCOMPLETE_VALUE;
        vm.capabilities = CAPABILITIES;
        vm.quickAddValues = [];
        vm.rebootDecoupled = false;
        vm.rcdl = false;
        vm.supportsFullHttpUrl = false;
        vm.result = null;
        vm.context = null;

        vm.matchRules = matchRules;
        vm.printFilterName = printFilterName;

        init();

        function init() {
            angular.forEach(CAPABILITIES, function (capability) {
                vm.quickAddValues.push({display: capability, key: 'capabilities', value: capability});
            });
        }

        function printFilterName(filter) {
            return filter.name ? filter.name : filter.id;
        }

        function matchRules() {
            if (testPageUtils.validateInput(vm.parameters)) {
                var params = testPageUtils.getParametersAsString(vm.parameters);
                for (var i = 0; i < vm.parameters.length; i++) {
                    var obj = vm.parameters[i];
                    if (obj.key === FREE_ARG_NAME.ESTB_MAC || obj.key === FREE_ARG_NAME.ECM_MAC) {
                        var macAddress = obj.value;
                        if ((macAddress).includes(";")) {
                            alertsService.showError({title: 'Error', message: 'Invalid MAC address'});
                            return;
                        }
                    }
                }
                firmwareTestPageService.getMatchedRules(params).then(function (resp) {
                    vm.result = resp.data.result;
                    vm.context = resp.data.context;
                }, function (error) {
                    alertsService.showError({title: 'Error', message: error.data.message});
                });
            }
        }
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .controller('FirmwareRuleEditController', controller);

    controller.$inject=['$rootScope','$scope', '$state', '$controller', 'alertsService', '$stateParams', 'firmwareRuleTemplateService', 'firmwareRuleService', 'firmwareConfigService', 'APPLICABLE_ACTION_TYPE', 'utilsService', 'firmwareRuleValidationService', 'ruleHelperService', 'FIRMWARE_FREE_ARG_AUTOCOMPLETE_VALUE', 'TIME_FREE_ARG_OPERATION_ARRAY', 'FREE_ARG_NAME', 'ruleValidationService', 'ruleConditionService', 'FIRMWARE_RULE_OPERATION_ARRAY', 'FIRMWARE_RULE_TYPE', '$q', 'authUtilsService', 'PERMISSION'];
    function controller($rootScope, $scope, $state, $controller, alertsService, $stateParams, firmwareRuleTemplateService, firmwareRuleService, firmwareConfigService, APPLICABLE_ACTION_TYPE, utilsService, firmwareRuleValidationService, ruleHelperService, FIRMWARE_FREE_ARG_AUTOCOMPLETE_VALUE, TIME_FREE_ARG_OPERATION_ARRAY, FREE_ARG_NAME, ruleValidationService, ruleConditionService, FIRMWARE_RULE_OPERATION_ARRAY, FIRMWARE_RULE_TYPE, $q, authUtils, PERMISSION) {
        var vm = this;

        angular.extend(vm, $controller('EditController', {
            $scope: $scope,
            mainPage: 'firmwarerules',
            stateParameters: null
        }));

        vm.isValidCondition = true;
        vm.namespacedListData = ruleHelperService.buildNamespacedListData();
        vm.data = {
            "name": "",
            "rule": {},
            "applicableAction" : null,
            "applicationType": $rootScope.applicationType
        };
        vm.disableValidation = true;
        vm.isNewEntity = $state.current.name === 'firmwarerule-add';
        vm.firmwareRuleTemplates = [];
        vm.usedFirmwareRuleTemplate = null;
        vm.selectedFirmwareRuleTemplate = null;
        vm.editedData = [

        ];
        vm.freeArgAutocompleteValues = FIRMWARE_FREE_ARG_AUTOCOMPLETE_VALUE;
        vm.blockingFilterTemplates = [];
        vm.previousFirmwareConfigId = '';
        vm.operations = {time: TIME_FREE_ARG_OPERATION_ARRAY, general: FIRMWARE_RULE_OPERATION_ARRAY};
        vm.isNoopRule = false;
        vm.selectedActionType = null;
        vm.firmwareConfigs = [];
        vm.percentFreeArgName = FREE_ARG_NAME.ESTB_MAC;

        // rule action
        vm.ruleAction = {};
        vm.ruleAction.data = {
            "type": APPLICABLE_ACTION_TYPE.RULE.class,
            "actionType": APPLICABLE_ACTION_TYPE.RULE.name,
            "configId": null,
            "configEntries":[]
        };

        vm.allFirmwareConfigs = [];
        vm.firmwareConfigMap = {};
        // define properties action
        vm.definePropertiesAction = {};
        vm.definePropertiesAction.data = {
            "type": APPLICABLE_ACTION_TYPE.DEFINE_PROPERTIES.class,
            "actionType": APPLICABLE_ACTION_TYPE.DEFINE_PROPERTIES.name,
            "properties": {

            },
            "byPassFilters": []
        };

        // blocking filter action
        vm.blockingFilterAction = {};
        vm.blockingFilterAction.data = {
            "type": APPLICABLE_ACTION_TYPE.BLOCKING_FILTER.class,
            "actionType": APPLICABLE_ACTION_TYPE.BLOCKING_FILTER.name
        };

        vm.representation = ruleHelperService.buildRepresentation();

        vm.APPLICABLE_ACTION_TYPE = APPLICABLE_ACTION_TYPE;
        vm.FIRMWARE_RULE_TYPE = FIRMWARE_RULE_TYPE;
        vm.PERMISSION = PERMISSION;

        vm.validationFunction = ruleValidationService.validate;
        vm.actionValidator = firmwareRuleValidationService;
        vm.authUtils = authUtils;
        vm.saveFirmwareRule = saveFirmwareRule;
        vm.addDistribution = addDistribution;
        vm.removeDistribution = removeDistribution;
        vm.selectTemplate = selectTemplate;
        vm.hasError = hasError;
        vm.noopHasChanged = noopHasChanged;
        vm.cancel = cancel;
        vm.ipMacIsConditionLimit = "";

        init();

        function init() {
            if (vm.isNewEntity) {
                vm.selectedActionType = APPLICABLE_ACTION_TYPE.getActionTypeByName($stateParams.actionType);
                switch(vm.selectedActionType) {
                    case APPLICABLE_ACTION_TYPE.RULE:
                        vm.data.applicableAction = vm.ruleAction.data;
                        getAllFirmwareConfigs();
                        break;
                    case APPLICABLE_ACTION_TYPE.DEFINE_PROPERTIES:
                        vm.data.applicableAction = vm.definePropertiesAction.data;
                        getBlockingFilterTemplates();
                        break;
                    case APPLICABLE_ACTION_TYPE.BLOCKING_FILTER:
                        vm.data.applicableAction = vm.blockingFilterAction.data;
                        break;
                }
                getFirmwareRuleTemplates().then(function(resp) {
                    if ($stateParams.templateId) {
                        selectTemplate($stateParams.templateId);
                    }
                });
            } else {
                getFirmwareRule($stateParams.id);
            }
            _.each(['rule::created', 'rule::updated'], function(eventType) {
                $scope.$on(eventType, function(e, obj) {
                    vm.firmwareConfigs = ruleHelperService.buildFirmwareConfigsBySupportedModels(obj.data, vm.allFirmwareConfigs);
                    reloadConfigId();
                    vm.representation.firmwareVersion = [];
                    _.each(vm.firmwareConfigs, function(firmwareConfig) {vm.representation.firmwareVersion.push(firmwareConfig.firmwareVersion)});

                    showModelUpdatedWarning(obj.rule);
                });
            });
            $scope.$on('rule::remove', function(e, obj) {
                showModelUpdatedWarning(obj.rule);
            });

            ruleConditionService.getIpMacIsConditionLimit().then(function(resp) {
                vm.ipMacIsConditionLimit = resp.data.ipMacIsConditionLimit;
            })
        }

        function showModelUpdatedWarning(rule) {
            if (rule && 'model' === rule.condition.freeArg.name) {
                alertsService.showWarningMessage({message: 'Model has been updated. Please update firmware config correspondingly if needed'});
            }
        }

        $scope.$on('applicationType:changed', function(event, data) {
            $state.go('firmwarerules', {actionType: vm.data.applicableAction.actionType});
        });

        function selectTemplate(templateId) {
            var template = utilsService.getItemFromListById(templateId, vm.firmwareRuleTemplates);
            vm.selectedFirmwareRuleTemplate = template;
            vm.data.type = templateId;
            vm.data.rule = template.rule;
            switch(vm.selectedActionType) {
                case APPLICABLE_ACTION_TYPE.RULE:
                    vm.ruleAction.data.configId = template.applicableAction.configId;
                    getAllFirmwareConfigs();
                    break;
                case APPLICABLE_ACTION_TYPE.DEFINE_PROPERTIES:
                    vm.definePropertiesAction.data.properties = convertTemplateProperties(template.applicableAction.properties);
                    vm.definePropertiesAction.data.byPassFilters = template.applicableAction.byPassFilters || [];
                    angular.copy(
                        utilsService.convertObjectToArray(vm.definePropertiesAction.data.properties),
                        vm.editedData
                    );
                    break;
                case APPLICABLE_ACTION_TYPE.BLOCKING_FILTER:
                    break;
            }
        }

        function convertTemplateProperties(templateProperties) {
            var result = {};
            _.each(templateProperties, function(value, key) {
                result[key] = value.value;
            });
            return result;
        }

        function getFirmwareRuleTemplates() {
            var deferred = $q.defer();
            firmwareRuleTemplateService.getByTypeAndEditableOption(vm.selectedActionType.name + "_TEMPLATE", true)
                .then(function(response) {
                    vm.firmwareRuleTemplates = response.data;
                    deferred.resolve(response)
                }, function(error) {
                    alertsService.showError({title: 'Error', message: 'Error occurred while loading Firmware Rule Templates'});
                    deferred.reject(error);
                });
            return deferred.promise;
        }

        function getFirmwareRuleTemplate(id) {
            firmwareRuleTemplateService.getFirmwareRuleTemplate(id)
                .then(function(response) {
                    vm.selectedFirmwareRuleTemplate = response.data;
                }, function(error) {
                    alertsService.showError({title: 'Error', message: 'Error occurred while loading Firmware Rule Templates'});
                });
        }

        function getFirmwareRule(id) {
            firmwareRuleService.getFirmwareRule(id)
                .then(function (result) {
                    vm.data = result.data;
                    getFirmwareRuleTemplate(vm.data.type);
                    vm.selectedActionType = APPLICABLE_ACTION_TYPE.getActionTypeByName(vm.data.applicableAction.actionType);
                    switch(vm.selectedActionType) {
                        case APPLICABLE_ACTION_TYPE.RULE:
                            vm.ruleAction.data = vm.data.applicableAction;
                            if (!vm.ruleAction.data.configId) {
                                vm.isNoopRule = true;
                            }
                            if (!vm.ruleAction.data.configEntries) {
                                vm.ruleAction.data.configEntries = [];
                            }
                            getAllFirmwareConfigs();
                            break;
                        case APPLICABLE_ACTION_TYPE.DEFINE_PROPERTIES:
                            vm.definePropertiesAction.data = vm.data.applicableAction;
                            getBlockingFilterTemplates();
                            angular.copy(
                                utilsService.convertObjectToArray(vm.definePropertiesAction.data.properties),
                                vm.editedData
                            );
                            break;
                        case APPLICABLE_ACTION_TYPE.BLOCKING_FILTER:
                            vm.blockingFilterAction.data = vm.data.applicableAction;
                            break;
                    }
                    vm.data.applicationType = $rootScope.applicationType ? $rootScope.applicationType : result.data.applicationType;
                }, function (reason) {
                    alertsService.showError({message: reason.data.message});
                });
        }

        function getAllFirmwareConfigs() {
            firmwareConfigService.getAll().then(function(response) {
                vm.allFirmwareConfigs = response.data;
                vm.firmwareConfigs = ruleHelperService.buildFirmwareConfigsBySupportedModels(vm.data.rule, vm.allFirmwareConfigs);
                vm.representation.firmwareVersion = [];
                _.each(vm.firmwareConfigs, function(firmwareConfig) {vm.representation.firmwareVersion.push(firmwareConfig.firmwareVersion)});
                if (vm.isNewEntity && vm.representation.firmwareVersion.length > 0) {
                    vm.ruleAction.data.configId = vm.allFirmwareConfigs[0].id;
                }
            }, function(error) {
                alertsService.showError({title: 'Error', message: error.data.message});
            });

            firmwareConfigService.getFirmwareConfigMap().then(function(resp) {
                vm.firmwareConfigMap = resp.data;
            }, function(error) {
                alertsService.showError({title: 'Error', message: error.data.message});
            });
        }

        vm.isSaving=false;
        function saveFirmwareRule() {
            if (vm.selectedActionType.name === APPLICABLE_ACTION_TYPE.DEFINE_PROPERTIES.name) {
                vm.definePropertiesAction.data.properties = utilsService.convertArrayToObject(vm.editedData);
            }
            vm.isSaving = true; 
            if (vm.isNewEntity) {
                firmwareRuleService.createFirmwareRule(vm.data)
                    .then(function () {
                        alertsService.successfullySaved(vm.data.name);
                        $state.go('firmwarerules', {actionType: vm.data.applicableAction.actionType});
                    }, function (reason) {
                        alertsService.showError({message: reason.data.message});
                    })
                    .finally(function () {
                        vm.isSaving = false; 
                    });
            } else {
                firmwareRuleService.updateFirmwareRule(vm.data)
                    .then(function () {
                        alertsService.successfullySaved(vm.data.name);
                        $state.go('firmwarerules', {actionType: vm.data.applicableAction.actionType});
                    }, function (reason) {
                        alertsService.showError({message: reason.data.message});
                    })
                    .finally(function () {
                        vm.isSaving = false; 
                    });
            }
        }
        

        function hasError() {
            switch(vm.selectedActionType) {
                case APPLICABLE_ACTION_TYPE.RULE:
                    return vm.actionValidator.validateDistributionPercentages(vm.ruleAction.data.configEntries) !== '';
                    break;
                case APPLICABLE_ACTION_TYPE.DEFINE_PROPERTIES:
                    var count = 0;
                    var templateProperties = vm.selectedFirmwareRuleTemplate.applicableAction.properties;
                    _.each(vm.editedData, function(item) {
                        if (!firmwareRuleValidationService.validatePropertyValue(templateProperties[item.key], item.value)) {
                            count++;
                        }
                    });
                    if (count > 0) {
                        return true;
                    }
                    break;
                case APPLICABLE_ACTION_TYPE.BLOCKING_FILTER:
                    //
                    break;
            }
            return false;
        }

        function getBlockingFilterTemplates() {
            firmwareRuleTemplateService.getFirmwareRuleTemplatesByActionType(APPLICABLE_ACTION_TYPE.BLOCKING_FILTER_TEMPLATE.name).then(
                function (result) {
                    vm.blockingFilterTemplates = result.data;
                    removeUnavailableBlockingFilterTemplatesIdsFromModel(result.data);
                }, function (reason) {
                    alertsService.showError({message: reason.data.message});
                });
        }

        function removeUnavailableBlockingFilterTemplatesIdsFromModel(availableBlockingFilterTemplates) {
            var availableIds = _.pluck(availableBlockingFilterTemplates, 'id');
            vm.data.applicableAction.byPassFilters = _.intersection(vm.data.applicableAction.byPassFilters, availableIds);
        }

        function addDistribution(configs) {
            var newConfigEntry = {
                configId: '',
                percentage: ''
            };
            configs.push(newConfigEntry);
        }

        function removeDistribution(configs, item) {
            utilsService.removeItemFromArray(configs, item);
        }

        function noopHasChanged() {
            if (vm.isNoopRule) {
                vm.previousFirmwareConfigId = vm.ruleAction.data.configId;
                vm.ruleAction.data.configId = '';
                vm.ruleAction.data.configEntries.length = 0;
            } else {
                reloadConfigId(vm.previousFirmwareConfigId);
            }
        }

        function reloadConfigId(previousConfigId) {
            if (vm.isNoopRule) {
                return;
            }
            if (utilsService.isNullOrUndefinedOrEmpty(vm.firmwareConfigs)) {
                vm.ruleAction.data.configId = '';
            } else {
                var configIds = _.pluck(vm.firmwareConfigs, 'id');
                if (!previousConfigId || configIds.indexOf(previousConfigId) < 0) {
                    vm.ruleAction.data.configId = vm.firmwareConfigs[0].id;
                } else {
                    vm.ruleAction.data.configId = previousConfigId;
                }
            }
            vm.ruleAction.data.configEntries.length = 0;
        }

        $scope.$root.$on("rule::remove", function(e, obj) {
            var watchResult = ruleHelperService.watchRuleRemoveOperation(vm.isValidCondition, vm.data.rule, obj);
            vm.data.rule = watchResult.rule;
            vm.isValidCondition = watchResult.isValidCondition;
            vm.firmwareConfigs = ruleHelperService.buildFirmwareConfigsBySupportedModels(vm.data.rule, vm.allFirmwareConfigs);
            reloadConfigId();
            vm.representation.firmwareVersion = [];
            _.each(vm.firmwareConfigs, function(firmwareConfig) {vm.representation.firmwareVersion.push(firmwareConfig.firmwareVersion)});
        });

        function cancel() {
            if ($stateParams.templateId) {
                $state.go('firmwareruletemplates');
            } else {
                $state.go('firmwarerules', {actionType: vm.data.applicableAction.actionType});
            }
        }
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .controller('FirmwareRuleImportController', controller);

    controller.$inject=['$rootScope', '$scope', '$log', '$uibModal', '$location', 'alertsService', 'firmwareRuleService', 'importService', 'utilsService', 'APPLICABLE_ACTION_TYPE', 'paginationService', 'authUtilsService', 'PERMISSION'];

    function controller($rootScope, $scope, $log, $modal, $location, alertsService, firmwareRuleService, importService, utilsService, APPLICABLE_ACTION_TYPE, paginationService, authUtils, PERMISSION) {
        var vm = this;

        vm.retrieveFile = retrieveFile;
        vm.importFirmwareRule = importFirmwareRule;
        vm.importAllFirmwareRules = importAllFirmwareRules;
        vm.getWrappedFirmwareRulesByType = getWrappedFirmwareRulesByType;
        vm.separateWrappedFirmwareRulesByType = separateWrappedFirmwareRulesByType;
        vm.overwriteAll = overwriteAll;
        vm.getSizeByType = getSizeByType;
        vm.authUtils = authUtils;
        vm.paginationStorageKey = 'firmwareRulePageSize';
        vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
        vm.pageNumber = paginationService.getPageNumber();
        vm.selectPage = selectPage;
        vm.getGeneralItemsNumber = getGeneralItemsNumber;

        vm.viewFirmwareRule = viewFirmwareRule;
        vm.wrappedFirmwareRules = null;
        vm.isOverwritten = false;
        vm.selectedActionType = APPLICABLE_ACTION_TYPE.RULE;
        vm.APPLICABLE_ACTION_TYPE = APPLICABLE_ACTION_TYPE;
        vm.ruleTypeFirmwareRules = [];
        vm.definePropertiesTypeFirmwareRules = [];
        vm.blockingFilterTypeFirmwareRules = [];
        vm.currentFirmwareRules = [];
        vm.PERMISSION = PERMISSION;
        vm.deviceType = null;
        vm.progressBarControl = importService.progressBarControl;


        async function retrieveFile(fileName) {
            clean();
            try {
                let file = await importService.openFile(fileName, null, this);
                init(file);
            } catch(e) {
                alertsService.showError({message: e});
            }
        }

        function init(file) {
            let firmwareRules = importService.getEntitiesFromFile(file);
            utilsService.sortObjectsById(firmwareRules);
            vm.wrappedFirmwareRules = importService.wrapToImport(firmwareRules);
            separateWrappedFirmwareRulesByType(vm.wrappedFirmwareRules);
            getWrappedFirmwareRulesByType(vm.selectedActionType);
            vm.isOverwritten = false;
            overwriteAll();
            selectPage();
        }

        $scope.$on('$locationChangeSuccess', function () {
            if (paginationService.paginationSettingsInLocationHaveChanged(vm.pageNumber, vm.pageSize)) {
                vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
                vm.pageNumber = paginationService.getPageNumber();
                selectPage();
            }
        });

        function viewFirmwareRule(firmwareRule) {
            $modal.open({
                templateUrl: 'app/xconf/firmwarerule/firmwarerule-view.html',
                size: 'lg',
                controller: 'FirmwareRuleViewController as vm',
                resolve: {
                    obj: function () {
                        return firmwareRule;
                    }
                }
            });
        }

        function importFirmwareRule(wrappedFirmwareRule) {
            if (!wrappedFirmwareRule.entity.applicationType) {
                wrappedFirmwareRule.entity.applicationType = $rootScope.applicationType;
            }
            if (wrappedFirmwareRule.overwrite) {
                handleSavePromise(wrappedFirmwareRule, firmwareRuleService.updateFirmwareRule(wrappedFirmwareRule.entity));
            } else {
                handleSavePromise(wrappedFirmwareRule, firmwareRuleService.createFirmwareRule(wrappedFirmwareRule.entity));
            }
        }

        function handleSavePromise(wrappedFirmwareRule, promise) {
            promise.then(
                function () {
                    alertsService.successfullySaved(wrappedFirmwareRule.entity.name);
                    removeImportedItemFromListsById(wrappedFirmwareRule.entity.id);
                }, function (reason) {
                    var data = reason.data;
                    alertsService.showError({title: data.type, message: data.message});
                }
            );
        }

        function removeImportedItemFromListsById(id) {
            _.each([vm.wrappedFirmwareRules, vm.ruleTypeFirmwareRules,
                vm.definePropertiesTypeFirmwareRules, vm.blockingFilterTypeFirmwareRules], function(key) {
                utilsService.removeSelectedItemFromListById(key, id);
            });
        }

        function importAllFirmwareRules() {
            importService.importAllEntities(firmwareRuleService, vm.wrappedFirmwareRules, function(id) {
                removeImportedItemFromListsById(id);
            });
        }

        function getWrappedFirmwareRulesByType(type) {
            vm.selectedActionType = type;
            switch(type) {
                case APPLICABLE_ACTION_TYPE.RULE:
                    vm.currentFirmwareRules = vm.ruleTypeFirmwareRules;
                    break;
                case APPLICABLE_ACTION_TYPE.DEFINE_PROPERTIES:
                    vm.currentFirmwareRules = vm.definePropertiesTypeFirmwareRules;
                    break;
                case APPLICABLE_ACTION_TYPE.BLOCKING_FILTER:
                    vm.currentFirmwareRules = vm.blockingFilterTypeFirmwareRules;
                    break;
            }
        }

        function separateWrappedFirmwareRulesByType(wrappedFirmwareRules) {
            angular.forEach(wrappedFirmwareRules, function(value) {
                switch(value.entity.applicableAction.actionType) {
                    case APPLICABLE_ACTION_TYPE.RULE.name:
                        vm.ruleTypeFirmwareRules.push(value);
                        break;
                    case APPLICABLE_ACTION_TYPE.DEFINE_PROPERTIES.name:
                        vm.definePropertiesTypeFirmwareRules.push(value);
                        break;
                    case APPLICABLE_ACTION_TYPE.BLOCKING_FILTER.name:
                        vm.blockingFilterTypeFirmwareRules.push(value);
                        break;
                }
            });
        }

        function getSizeByType(type) {
            switch(type) {
                case APPLICABLE_ACTION_TYPE.RULE.name:
                    return vm.ruleTypeFirmwareRules.length;
                case APPLICABLE_ACTION_TYPE.DEFINE_PROPERTIES.name:
                    return vm.definePropertiesTypeFirmwareRules.length;
                case APPLICABLE_ACTION_TYPE.BLOCKING_FILTER.name:
                    return vm.blockingFilterTypeFirmwareRules.length;
            }
        }

        function clean() {
            vm.wrappedFirmwareRules = [];
            vm.currentFirmwareRules = [];
            vm.ruleTypeFirmwareRules = [];
            vm.definePropertiesTypeFirmwareRules = [];
            vm.blockingFilterTypeFirmwareRules = [];
        }

        function overwriteAll() {
            angular.forEach(vm.wrappedFirmwareRules, function (val, key) {
                val.overwrite = vm.isOverwritten;
            });
        }

        function selectPage() {
            paginationService.savePaginationSettingsInLocation(vm.pageNumber, vm.pageSize);
            computeStartAndEndIndex();
        }

        function computeStartAndEndIndex() {
            vm.startIndex = (vm.pageNumber - 1) * vm.pageSize;
            vm.endIndex = vm.pageNumber * vm.pageSize;
        }

        function getGeneralItemsNumber() {
            return getSizeByType(vm.selectedActionType.name);
        }
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .controller('FirmwareRuleViewController', controller);

    controller.$inject=['$uibModalInstance', 'obj', 'APPLICABLE_ACTION_TYPE', 'firmwareConfigService', 'alertsService', 'firmwareRuleTemplateService'];

    function controller($modalInstance, obj, APPLICABLE_ACTION_TYPE, firmwareConfigService, alertsService, firmwareRuleTemplateService) {
        var vm = this;
        vm.obj = obj;
        vm.dismiss = dismiss;
        vm.APPLICABLE_ACTION_TYPE = APPLICABLE_ACTION_TYPE;
        vm.blockingFilterTemplates = [];

        vm.firmwareConfigs = {};

        init();

        function init() {
            switch(vm.obj.applicableAction.actionType) {
                case APPLICABLE_ACTION_TYPE.RULE.name:
                    if (vm.obj.applicableAction.configId) {
                        getConfig(vm.obj.applicableAction.configId);
                    }
                    if (vm.obj.applicableAction.configEntries) {
                        _.each(vm.obj.applicableAction.configEntries, function(item) {
                            getConfig(item.configId);
                        });
                    }
                    break;
                case APPLICABLE_ACTION_TYPE.DEFINE_PROPERTIES.name:
                    getBlockingFilterTemplates();
                    break;
                case APPLICABLE_ACTION_TYPE.BLOCKING_FILTER.name:
                    break;
            }
        }

        function getConfig(configId) {
            if (configId) {
                firmwareConfigService.getById(configId).then(function(response) {
                    vm.firmwareConfigs[configId] = response.data;
                }, function (error) {
                    alertsService.showError({title: 'Error', message: 'Error by loading FirmwareConfig'});
                });
            }
        }

        function getBlockingFilterTemplates() {
            firmwareRuleTemplateService.getFirmwareRuleTemplatesByActionType(APPLICABLE_ACTION_TYPE.BLOCKING_FILTER_TEMPLATE.name).then(
                function (result) {
                    var data = result.data;
                    var length = data.length;
                    for (var i = 0; i < length; i++) {
                        var checked = vm.obj.applicableAction.byPassFilters ? vm.obj.applicableAction.byPassFilters.indexOf(data[i].id) >= 0 : false;
                        vm.blockingFilterTemplates.push({
                            checked: checked,
                            filter: data[i]
                        });
                    }
                }, function (reason) {
                    alertsService.showError({message: reason.data});
                });
        }

        function dismiss() {
            $modalInstance.dismiss('close');
        }
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .controller('FirmwareRulesController', controller);

    controller.$inject=['$rootScope', '$q', '$scope', '$uibModal', '$location','$stateParams', '$controller', 'dialogs', 'alertsService', 'utilsService', 'firmwareRuleService', 'firmwareRuleTemplateService', 'APPLICABLE_ACTION_TYPE', 'firmwareConfigService', 'paginationService', 'RULE_SEARCH_OPTIONS', 'SEARCH_OPTIONS'];

    function controller($rootScope, $q, $scope, $modal, $location, $stateParams, $controller, dialogs, alertsService, utilsService, firmwareRuleService, firmwareRuleTemplateService, APPLICABLE_ACTION_TYPE, firmwareConfigService, paginationService, RULE_SEARCH_OPTIONS, SEARCH_OPTIONS) {
        var vm = this;

        angular.extend(vm, $controller('MainController', {
            $scope: $scope
        }));

        var promises = [];

        vm.data = [];
        vm.firmwareRuleTemplateId = $location.search().filterByTemplate ? $location.search().filterByTemplate : ' ';
        vm.firmwareRuleTemplateIds = [];
        vm.allFirmwareConfigs = [];
        vm.viewerPanelControl = {};

        vm.paginationStorageKey = 'firmwareRulePageSize';
        vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
        vm.pageNumber = paginationService.getPageNumber();
        vm.utilsService = utilsService;
        vm.selectedActionType = $stateParams.actionType
            ? APPLICABLE_ACTION_TYPE.getActionTypeByName($stateParams.actionType)
            : APPLICABLE_ACTION_TYPE.RULE;
        vm.APPLICABLE_ACTION_TYPE = APPLICABLE_ACTION_TYPE;
        vm.sizeOfEachType = {};
        vm.searchParam = {};
        vm.searchOptions = null;

        vm.getFirmwareRules = getFirmwareRules;
        vm.deleteFirmwareRule = deleteFirmwareRule;
        vm.viewFirmwareRule = viewFirmwareRule;
        vm.exportFirmwareRule = exportFirmwareRule;
        vm.exportAllFirmwareRulesByType = exportAllFirmwareRulesByType;
        vm.exportAllFirmwareRules = exportAllFirmwareRules;
        vm.changeFirmwareRuleTemplateId = changeFirmwareRuleTemplateId;
        vm.getSizeByType = getSizeByType;
        vm.reloadPageByActionType = reloadPageByActionType;
        vm.startParse = startParse;
        vm.getGeneralItemsNumber = getGeneralItemsNumber;
        vm.getSizeOfAllTypes = getSizeOfAllTypes;
        vm.getConfigById = getConfigById;
        vm.isMac = isMac;
        vm.isFirmwareRuleTemplate = isFirmwareRuleTemplate;
        vm.isDataLoading = false;

        init();

        function init() {
            if ($rootScope.applicationType) {
                vm.searchParam.APPLICATION_TYPE = $rootScope.applicationType;
            }
            reloadPageByActionType(vm.selectedActionType);
        }

        $scope.$on('applicationType:changed', function(event, data) {
            vm.searchParam.APPLICATION_TYPE = data.applicationType;
            getFirmwareRules();
        });

        function setSearchOptions(actionType) {
            vm.searchOptions = angular.copy(RULE_SEARCH_OPTIONS);
            if (actionType === vm.APPLICABLE_ACTION_TYPE.RULE) {
                var firmwareConfigSearchObject = {
                        "name": {
                            friendlyName: "FirmwareConfig",
                            apiArgs: ["FIRMWARE_VERSION"]
                        }
                    };
                vm.searchOptions.data.push(firmwareConfigSearchObject);
            }

            vm.searchParam[SEARCH_OPTIONS.TEMPLATE_ID] = vm.firmwareRuleTemplateId.trim();
            vm.searchParam[SEARCH_OPTIONS.APPLICABLE_ACTION_TYPE] = actionType.name;
        }

        $scope.$on('$locationChangeSuccess', function () {
            if (paginationService.paginationSettingsInLocationHaveChanged(vm.pageNumber, vm.pageSize)) {
                vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
                vm.pageNumber = paginationService.getPageNumber();
                init();
            }
        });

        $scope.$on('search-entities', function(event, data) {
            vm.searchParam = data.searchParam;
            vm.searchParam[SEARCH_OPTIONS.TEMPLATE_ID] = vm.firmwareRuleTemplateId.trim();
            vm.searchParam[SEARCH_OPTIONS.APPLICABLE_ACTION_TYPE] = vm.selectedActionType.name;
            getFirmwareRules();
        });

        function reloadPageByActionType(selectedActionType) {
            promises = [];
            vm.firmwareRuleTemplateId = '';
            vm.selectedActionType = selectedActionType;
            getAllFirmwareConfigs();
            getFirmwareRuleTemplateIds();
            vm.isDataLoading = true
            $q.all(promises).then(function() {
                getFirmwareRules();
            });
            setSearchOptions(vm.selectedActionType);
        }

        function getAllFirmwareConfigs() {
            vm.allFirmwareConfigs = [];
            if (vm.selectedActionType.name === APPLICABLE_ACTION_TYPE.RULE.name) {
                var firmwareConfigRequest = firmwareConfigService.getAll();
                firmwareConfigRequest.then(function(result) {
                    vm.allFirmwareConfigs = result.data;
                });
                promises.push(firmwareConfigRequest);
            }
        }

        function getConfigById(configId) {
            if (configId) {
                for (var key in vm.allFirmwareConfigs) {
                    if (vm.allFirmwareConfigs[key].id === configId) {
                        return vm.allFirmwareConfigs[key];
                    }
                }
            }
            return null;
        }

        function isMac(rule) {
            var isMac = false;
            if (rule.compoundParts && rule.compoundParts.length) {
                for (var key in rule.compoundParts) {
                    isMac = rule.compoundParts[key].condition.freeArg.name.includes('Mac');
                }
            } else {
                isMac = rule.condition.freeArg.name.includes('Mac');
            }

            return isMac;
        }

        function getFirmwareRules() {
            vm.searchParam = utilsService.removeEmptyStringParams(vm.searchParam);
            firmwareRuleService.getFirmwareRulesByActionType(vm.pageNumber, vm.pageSize, vm.searchParam)
                .then(function (result) {
                    vm.isDataLoading = false;
                    vm.data = result.data;
                    setSizeOfEachType(result);
                    paginationService.savePaginationSettingsInLocation(vm.pageNumber, vm.pageSize);
                }, function (reason) {
                    vm.isDataLoading = false;
                    alertsService.showError({message: reason.data.message, title: reason.data.type});
                });
        }

        function isFirmwareRuleTemplate(id) {
            var isFirmwareRuleTemplate = false;
            for (var key in vm.firmwareRuleTemplateIds) {
                if (vm.firmwareRuleTemplateIds[key] === id) {
                    isFirmwareRuleTemplate = true;
                    break;
                }
            }
            return isFirmwareRuleTemplate;
        }

        function setSizeOfEachType(result) {
            vm.sizeOfEachType[vm.APPLICABLE_ACTION_TYPE.RULE.name] = result.headers(vm.APPLICABLE_ACTION_TYPE.RULE.name);
            vm.sizeOfEachType[vm.APPLICABLE_ACTION_TYPE.DEFINE_PROPERTIES.name] = result.headers(vm.APPLICABLE_ACTION_TYPE.DEFINE_PROPERTIES.name);
            vm.sizeOfEachType[vm.APPLICABLE_ACTION_TYPE.BLOCKING_FILTER.name] = result.headers(vm.APPLICABLE_ACTION_TYPE.BLOCKING_FILTER.name);
        }

        function getSizeByType(type) {
            var size = vm.sizeOfEachType[type];
            return size ? size : 0;
        }

        function getSizeOfAllTypes() {
            var size = 0;
            for (var key in vm.APPLICABLE_ACTION_TYPE) {
                size += parseInt(getSizeByType(vm.APPLICABLE_ACTION_TYPE[key].name));
            }
            return size;
        }

        function getFirmwareRuleTemplateIds() {
            var firmwareRuleTemplateRequest = firmwareRuleTemplateService.getFirmwareRuleTemplateIdsByActionType(vm.selectedActionType.name + "_TEMPLATE");
            firmwareRuleTemplateRequest.then(function (result) {
                vm.firmwareRuleTemplateIds.length = 0;
                _.each(result.data, function(value) {
                    if (!vm.firmwareRuleTemplateIds[value]) {
                        vm.firmwareRuleTemplateIds.push(value);
                    }
                });
            }, function (reason) {
                alertsService.showError({message: reason.data.message, title: reason.data.type});
            });
            promises.push(firmwareRuleTemplateRequest);
        }

        function viewFirmwareRule(id) {
            firmwareRuleService.getFirmwareRule(id).then(function (result) {
                var modalInstance = $modal.open({
                    templateUrl: 'app/xconf/firmwarerule/firmwarerule-view.html',
                    size: 'md',
                    controller: 'FirmwareRuleViewController as vm',
                    resolve: {
                        obj: function () {
                            return result.data;
                        }
                    }
                });
            }, function(reason) {
                alertsService.showError({message: reason.data.message, title: reason.data.type});
            });
        }

        function changeFirmwareRuleTemplateId() {
            vm.searchParam[SEARCH_OPTIONS.TEMPLATE_ID] = vm.firmwareRuleTemplateId.trim();
            getFirmwareRules();
            if (vm.firmwareRuleTemplateId && vm.firmwareRuleTemplateId.trim()) {
                $location.search('filterByTemplate', vm.firmwareRuleTemplateId);
            } else {
                $location.search('filterByTemplate', null);
            }
        }

        function deleteFirmwareRule(firmwareRule) {
            dialogs
                .confirm('Delete confirmation', '<span class="break-word-inline"> Are you sure you want to delete Firmware Rule ' + firmwareRule.name + '? </span>')
                .result.then().then(function (btn) {
                    firmwareRuleService.deleteFirmwareRule(firmwareRule.id)
                        .then(function (result) {
                            alertsService.successfullyDeleted(firmwareRule.name);
                            shiftItems();
                        }, function (reason) {
                            alertsService.showError({message: reason.data.message, title: reason.data.type});
                        });
                }, function (btn) {
                    //click cancel
                });
        }

        function exportFirmwareRule(id) {
            firmwareRuleService.exportFirmwareRule(id);
        }

        function exportAllFirmwareRulesByType(type) {
            firmwareRuleService.exportAllFirmwareRulesByType(type);
        }

        function exportAllFirmwareRules() {
            firmwareRuleService.exportAllFirmwareRules();
        }

        function shiftItems() {
            var numberOfPagesAfterDeletion = Math.ceil((getSizeByType(vm.selectedActionType.name) - 1) / vm.pageSize);
            vm.pageNumber = (vm.pageNumber > numberOfPagesAfterDeletion && numberOfPagesAfterDeletion > 0) ? numberOfPagesAfterDeletion : vm.pageNumber;
            reloadPageByActionType(vm.selectedActionType);
        }

        function startParse() {
            return !vm.utilsService.isMapEmpty(vm.sizeOfEachType);
        }

        function getGeneralItemsNumber() {
            return getSizeByType(vm.selectedActionType.name);
        }
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .controller('FirmwareRuleTemplateEditController', controller);

    controller.$inject=['$rootScope', '$scope', '$state', 'alertsService', '$controller', '$stateParams', 'firmwareRuleTemplateService', 'firmwareConfigService', 'APPLICABLE_ACTION_TYPE', 'utilsService', 'FIRMWARE_FREE_ARG_AUTOCOMPLETE_VALUE', 'TIME_FREE_ARG_OPERATION_ARRAY', 'ruleHelperService', 'ruleConditionService', 'FREE_ARG_NAME', 'ruleValidationService'];

    function controller($rootScope, $scope, $state, alertsService, $controller, $stateParams, firmwareRuleTemplateService, firmwareConfigService, APPLICABLE_ACTION_TYPE, utilsService, FIRMWARE_FREE_ARG_AUTOCOMPLETE_VALUE, TIME_FREE_ARG_OPERATION_ARRAY, ruleHelperService, ruleConditionService, FREE_ARG_NAME, ruleValidationService) {
        var vm = this;

        angular.extend(vm, $controller('EditController', {
            $scope: $scope,
            mainPage: 'firmwareruletemplates',
            stateParameters: null
        }));

        // variables
        vm.isValidCondition = true;
        vm.namespacedListData = ruleHelperService.buildNamespacedListData();
        vm.data = {
            "name": "",
            "rule": {},
            "applicableAction" : null
        };
        vm.disableValidation = true;
        vm.isNewEntity = $state.current.name === 'firmwareruletemplate-add';
        vm.editedData = [];
        vm.freeArgAutocompleteValues = FIRMWARE_FREE_ARG_AUTOCOMPLETE_VALUE;
        vm.blockingFilterTemplates = [];
        vm.operations = {time: TIME_FREE_ARG_OPERATION_ARRAY};
        vm.selectedActionType = null;
        vm.percentFreeArgName = FREE_ARG_NAME.ESTB_MAC;
        vm.ipMacIsConditionLimit = "";

        // rule action
        vm.ruleAction = {};
        vm.ruleAction.data = {
            "type": APPLICABLE_ACTION_TYPE.RULE_TEMPLATE.class,
            "actionType": APPLICABLE_ACTION_TYPE.RULE_TEMPLATE.name,
            "configId": null
        };
        vm.fiwmareConfigs = [];

        // define properties action
        vm.definePropertiesAction = {};
        vm.definePropertiesAction.data = {
            "type": APPLICABLE_ACTION_TYPE.DEFINE_PROPERTIES_TEMPLATE.class,
            "actionType": APPLICABLE_ACTION_TYPE.DEFINE_PROPERTIES_TEMPLATE.name,
            "properties": {

            },
            "byPassFilters": []
        };

        // blocking filter action
        vm.blockingFilterAction = {};
        vm.blockingFilterAction.data = {
            "type": APPLICABLE_ACTION_TYPE.BLOCKING_FILTER_TEMPLATE.class,
            "actionType": APPLICABLE_ACTION_TYPE.BLOCKING_FILTER_TEMPLATE.name
        };

        // constants
        vm.APPLICABLE_ACTION_TYPE = APPLICABLE_ACTION_TYPE;

        // functions
        vm.saveFirmwareRuleTemplate = saveFirmwareRuleTemplate;
        vm.representation = ruleHelperService.buildRepresentation();
        vm.validationFunction = ruleValidationService.validate;

        init();

        function init() {
            if (vm.isNewEntity) {
                vm.selectedActionType = APPLICABLE_ACTION_TYPE.getActionTypeByName($stateParams.actionType);
                switch(vm.selectedActionType) {
                    case APPLICABLE_ACTION_TYPE.RULE_TEMPLATE:
                        vm.data.applicableAction = vm.ruleAction.data;
                        getFirmwareConfigsAndBuildItBySupportedModels();
                        break;
                    case APPLICABLE_ACTION_TYPE.DEFINE_PROPERTIES_TEMPLATE:
                        vm.data.applicableAction = vm.definePropertiesAction.data;
                        getBlockingFilterTemplates();
                        break;
                    case APPLICABLE_ACTION_TYPE.BLOCKING_FILTER_TEMPLATE:
                        vm.data.applicableAction = vm.blockingFilterAction.data;
                        break;
                }
            } else {
                getFirmwareRuleTemplate($stateParams.id);
            }

            ruleConditionService.getIpMacIsConditionLimit().then(function(resp) {
                vm.ipMacIsConditionLimit = resp.data.ipMacIsConditionLimit;
            })

            setAvailablePriorities($stateParams.templatesSize);
            if (vm.isNewEntity) {
                vm.data.priority = vm.availablePriorities[vm.availablePriorities.length - 1];
            }

            _.each(['rule::created', 'rule::updated'], function(eventType) {
                $scope.$root.$on(eventType, function(e, obj) {
                    console.log("Event: " + eventType);
                    vm.firmwareConfigs = ruleHelperService.buildFirmwareConfigsBySupportedModels(obj.data, vm.allFirmwareConfigs);
                    vm.representation.firmwareVersion = [];
                    _.each(vm.firmwareConfigs, function(firmwareConfig) {vm.representation.firmwareVersion.push(firmwareConfig.firmwareVersion)});
                });
            });

            $scope.$root.$on("rule::remove", function(e, obj) {
                var watchResult = ruleHelperService.watchRuleRemoveOperation(vm.isValidCondition, vm.data.rule, obj);
                vm.data.rule = watchResult.rule;
                vm.isValidCondition = watchResult.isValidCondition;
                vm.firmwareConfigs = ruleHelperService.buildFirmwareConfigsBySupportedModels(vm.data.rule, vm.allFirmwareConfigs);
                vm.representation.firmwareVersion = [];
                _.each(vm.firmwareConfigs, function(firmwareConfig) {vm.representation.firmwareVersion.push(firmwareConfig.firmwareVersion)});
            });
        }

        $scope.$on('applicationType:changed', function(event, data) {
            $state.go('firmwareruletemplates', {actionType: vm.data.applicableAction.actionType});
        });

        function getFirmwareRuleTemplate(id) {
            firmwareRuleTemplateService.getFirmwareRuleTemplate(id)
                .then(function (result) {
                    vm.data = result.data;

                    vm.selectedActionType = APPLICABLE_ACTION_TYPE.getActionTypeByName(vm.data.applicableAction.actionType);
                    switch(vm.selectedActionType) {
                        case APPLICABLE_ACTION_TYPE.RULE_TEMPLATE:
                            vm.ruleAction.data = vm.data.applicableAction;
                            getFirmwareConfigsAndBuildItBySupportedModels(vm.data);
                            break;
                        case APPLICABLE_ACTION_TYPE.DEFINE_PROPERTIES_TEMPLATE:
                            vm.definePropertiesAction.data = vm.data.applicableAction;
                            getBlockingFilterTemplates();
                            angular.copy(
                                utilsService.convertObjectToArray(vm.definePropertiesAction.data.properties),
                                vm.editedData
                            );
                            break;
                        case APPLICABLE_ACTION_TYPE.BLOCKING_FILTER_TEMPLATE:
                            vm.blockingFilterAction.data = vm.data.applicableAction;
                            break;
                    }
                }, alertsService.errorHandler);
        }

        function getFirmwareConfigsAndBuildItBySupportedModels(ruleData) {
            firmwareConfigService.getAll($rootScope.applicationType).then(function(response) {
                vm.allFirmwareConfigs = response.data;
                if (ruleData && ruleData.rule) {
                    vm.firmwareConfigs = ruleHelperService.buildFirmwareConfigsBySupportedModels(ruleData.rule, vm.firmwareConfigs);
                }
            }, function(error) {
                alertsService.showError({title: 'Error', message: 'Error by loading FirmwareConfig'});
            });
        }
        
        vm.isSaving = false;
        function saveFirmwareRuleTemplate() {
            if (vm.selectedActionType.name === APPLICABLE_ACTION_TYPE.DEFINE_PROPERTIES_TEMPLATE.name) {
                vm.definePropertiesAction.data.properties = utilsService.convertArrayToObject(vm.editedData);
            }
            if (vm.isSaving) {
                return;
            }
            vm.isSaving = true;
            var promise = vm.isNewEntity
                ? firmwareRuleTemplateService.createFirmwareRuleTemplate(vm.data)
                : firmwareRuleTemplateService.updateFirmwareRuleTemplate(vm.data);
        
            promise.then(function () {
                alertsService.successfullySaved(vm.data.id);
                $state.go('firmwareruletemplates', {actionType: vm.data.applicableAction.actionType});
            }).catch(function (reason) {
                alertsService.errorHandler(reason);
            }).finally(function() {
                vm.isSaving = false;
            });
        }
        
        

        function setAvailablePriorities(size) {
            if (!vm.isNewEntity) {
                size = parseInt(size);
            }

            if (vm.isNewEntity) {
                size = parseInt(size) + 1;
            }

            vm.availablePriorities = [];
            for (var i = 1; i < size + 1; i++) {
                vm.availablePriorities.push(i);
            }
        }

        function getBlockingFilterTemplates() {
            firmwareRuleTemplateService.getFirmwareRuleTemplatesByActionType(APPLICABLE_ACTION_TYPE.BLOCKING_FILTER_TEMPLATE.name).then(
                function (result) {
                    vm.blockingFilterTemplates = result.data;
                    removeUnavailableBlockingFilterTemplatesIdsFromModel(result.data);
                }, alertsService.errorHandler);
        }

        function removeUnavailableBlockingFilterTemplatesIdsFromModel(availableBlockingFilterTemplates) {
            var availableIds = _.pluck(availableBlockingFilterTemplates, 'id');
            vm.data.applicableAction.byPassFilters = _.intersection(vm.data.applicableAction.byPassFilters, availableIds);
        }
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .controller('FirmwareRuleTemplateImportController', controller);

    controller.$inject=['$scope', '$log', '$uibModal', '$location', 'alertsService', 'firmwareRuleTemplateService', 'importService', 'utilsService', 'APPLICABLE_ACTION_TYPE'];

    function controller($scope, $log, $modal, $location, alertsService, firmwareRuleTemplateService, importService, utilsService, APPLICABLE_ACTION_TYPE) {
        var vm = this;

        vm.retrieveFile = retrieveFile;
        vm.importFirmwareRuleTemplate = importFirmwareRuleTemplate;
        vm.importAllFirmwareRuleTemplates = importAllFirmwareRuleTemplates;
        vm.getWrappedFirmwareRuleTemplatesByType = getWrappedFirmwareRuleTemplatesByType;
        vm.separateWrappedFirmwareRuleTemplatesByType = separateWrappedFirmwareRuleTemplatesByType;
        vm.overwriteAll = overwriteAll;
        vm.getSizeByType = getSizeByType;

        vm.viewFirmwareRuleTemplate = viewFirmwareRuleTemplate;
        vm.wrappedFirmwareRuleTemplates = null;
        vm.isOverwritten = false;
        vm.selectedActionType = APPLICABLE_ACTION_TYPE.RULE_TEMPLATE;
        vm.APPLICABLE_ACTION_TYPE = APPLICABLE_ACTION_TYPE;
        vm.ruleTypeFirmwareRuleTemplates = [];
        vm.definePropertiesTypeFirmwareRuleTemplates = [];
        vm.blockingFilterTypeFirmwareRuleTemplates = [];
        vm.currentFirmwareRuleTemplates = [];
        vm.progressBarControl = importService.progressBarControl;

        async function retrieveFile(fileName) {
            clean();
            try {
                let file = await importService.openFile(fileName, null, this);
                init(file);
            } catch (e) {
                alertsService.showError({message: e});
            }
        }

        function init(file) {
            let firmwareRuleTemplates = importService.getEntitiesFromFile(file);
            utilsService.sortObjectsByPriority(firmwareRuleTemplates);
            vm.wrappedFirmwareRuleTemplates = importService.wrapToImport(firmwareRuleTemplates);
            separateWrappedFirmwareRuleTemplatesByType(vm.wrappedFirmwareRuleTemplates);
            getWrappedFirmwareRuleTemplatesByType(vm.selectedActionType);
            vm.isOverwritten = false;
            overwriteAll();
        }

        function viewFirmwareRuleTemplate(firmwareRuleTemplate) {
            $modal.open({
                templateUrl: 'app/xconf/firmwareruletemplate/firmwareruletemplate-view.html',
                size: 'lg',
                controller: 'FirmwareRuleTemplateViewController as vm',
                resolve: {
                    obj: function () {
                        return firmwareRuleTemplate;
                    }
                }
            });
        }

        function importFirmwareRuleTemplate(wrappedFirmwareRuleTemplate) {
            if (wrappedFirmwareRuleTemplate.overwrite) {
                handleSavePromise(wrappedFirmwareRuleTemplate, firmwareRuleTemplateService.updateFirmwareRuleTemplate(wrappedFirmwareRuleTemplate.entity));
            } else {
                handleSavePromise(wrappedFirmwareRuleTemplate, firmwareRuleTemplateService.createFirmwareRuleTemplate(wrappedFirmwareRuleTemplate.entity));
            }
        }

        function handleSavePromise(wrappedFirmwareRuleTemplate, promise) {
            promise.then(
                function () {
                    alertsService.successfullySaved(wrappedFirmwareRuleTemplate.entity.id);
                    utilsService.removeSelectedItemFromListById(vm.currentFirmwareRuleTemplates, wrappedFirmwareRuleTemplate.entity.id);
                    utilsService.removeSelectedItemFromListById(vm.wrappedFirmwareRuleTemplates, wrappedFirmwareRuleTemplate.entity.id);
                }, function (reason) {
                    var data = reason.data;
                    alertsService.showError({title: data.type, message: data.message});
                }
            );
        }

        function importAllFirmwareRuleTemplates() {
            importService.importAllEntities(firmwareRuleTemplateService, vm.wrappedFirmwareRuleTemplates, function(id) {
                utilsService.removeSelectedItemFromListById(vm.wrappedFirmwareRuleTemplates, id);
                utilsService.removeSelectedItemFromListById(vm.ruleTypeFirmwareRuleTemplates, id);
                utilsService.removeSelectedItemFromListById(vm.definePropertiesTypeFirmwareRuleTemplates, id);
                utilsService.removeSelectedItemFromListById(vm.blockingFilterTypeFirmwareRuleTemplates, id);
            });
        }

        function getWrappedFirmwareRuleTemplatesByType(type) {
            vm.selectedActionType = type;
            switch(type) {
                case APPLICABLE_ACTION_TYPE.RULE_TEMPLATE:
                    vm.currentFirmwareRuleTemplates = vm.ruleTypeFirmwareRuleTemplates;
                    break;
                case APPLICABLE_ACTION_TYPE.DEFINE_PROPERTIES_TEMPLATE:
                    vm.currentFirmwareRuleTemplates = vm.definePropertiesTypeFirmwareRuleTemplates;
                    break;
                case APPLICABLE_ACTION_TYPE.BLOCKING_FILTER_TEMPLATE:
                    vm.currentFirmwareRuleTemplates = vm.blockingFilterTypeFirmwareRuleTemplates;
                    break;
            }
        }

        function separateWrappedFirmwareRuleTemplatesByType(wrappedFirmwareRuleTemplates) {
            angular.forEach(wrappedFirmwareRuleTemplates, function(value) {
                switch(value.entity.applicableAction.actionType) {
                    case APPLICABLE_ACTION_TYPE.RULE_TEMPLATE.name:
                        vm.ruleTypeFirmwareRuleTemplates.push(value);
                        break;
                    case APPLICABLE_ACTION_TYPE.DEFINE_PROPERTIES_TEMPLATE.name:
                        vm.definePropertiesTypeFirmwareRuleTemplates.push(value);
                        break;
                    case APPLICABLE_ACTION_TYPE.BLOCKING_FILTER_TEMPLATE.name:
                        vm.blockingFilterTypeFirmwareRuleTemplates.push(value);
                        break;
                }
            });
        }

        function getSizeByType(type) {
            switch(type) {
                case APPLICABLE_ACTION_TYPE.RULE_TEMPLATE.name:
                    return vm.ruleTypeFirmwareRuleTemplates.length;
                case APPLICABLE_ACTION_TYPE.DEFINE_PROPERTIES_TEMPLATE.name:
                    return vm.definePropertiesTypeFirmwareRuleTemplates.length;
                case APPLICABLE_ACTION_TYPE.BLOCKING_FILTER_TEMPLATE.name:
                    return vm.blockingFilterTypeFirmwareRuleTemplates.length;
            }
        }

        function clean() {
            vm.wrappedFirmwareRuleTemplates = [];
            vm.currentFirmwareRuleTemplates = [];
            vm.ruleTypeFirmwareRuleTemplates = [];
            vm.definePropertiesTypeFirmwareRuleTemplates = [];
            vm.blockingFilterTypeFirmwareRuleTemplates = [];
        }

        function overwriteAll() {
            angular.forEach(vm.wrappedFirmwareRuleTemplates, function (val, key) {
                val.overwrite = vm.isOverwritten;
            });
        }
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .controller('FirmwareRuleTemplateViewController', controller);

    controller.$inject=['$uibModalInstance', 'obj', 'APPLICABLE_ACTION_TYPE', 'firmwareConfigService', 'alertsService', 'firmwareRuleTemplateService', 'utilsService'];

    function controller($modalInstance, obj, APPLICABLE_ACTION_TYPE, firmwareConfigService, alertsService, firmwareRuleTemplateService, utilsService) {
        var vm = this;
        vm.obj = obj;
        vm.dismiss = dismiss;
        vm.isPropertiesEmpty = isPropertiesEmpty;
        vm.APPLICABLE_ACTION_TYPE = APPLICABLE_ACTION_TYPE;
        vm.blockingFilterTemplates = [];

        init();

        function init() {
            switch(vm.obj.applicableAction.actionType) {
                case APPLICABLE_ACTION_TYPE.RULE_TEMPLATE.name:
                    break;
                case APPLICABLE_ACTION_TYPE.DEFINE_PROPERTIES_TEMPLATE.name:
                    getBlockingFilterTemplates();
                    break;
                case APPLICABLE_ACTION_TYPE.BLOCKING_FILTER_TEMPLATE.name:
                    break;
            }
        }

        function getBlockingFilterTemplates() {
            firmwareRuleTemplateService.getFirmwareRuleTemplatesByActionType(APPLICABLE_ACTION_TYPE.BLOCKING_FILTER_TEMPLATE.name).then(
                function (result) {
                    var data = result.data;
                    var length = data.length;
                    for (var i = 0; i < length; i++) {
                        var checked = vm.obj.applicableAction.byPassFilters ? vm.obj.applicableAction.byPassFilters.indexOf(data[i].id) >= 0 : false;
                        vm.blockingFilterTemplates.push({
                            checked: checked,
                            filter: data[i]
                        });
                    }
                }, function (reason) {
                    alertsService.showError({message: reason.data});
                });
        }

        function dismiss() {
            $modalInstance.dismiss('close');
        }

        function isPropertiesEmpty() {
            return utilsService.isMapEmpty(vm.obj.applicableAction.properties);
        }
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .controller('FirmwareRuleTemplatesController', controller);

    controller.$inject=['$uibModal', '$stateParams', '$controller', 'dialogs', 'alertsService', 'utilsService', 'firmwareRuleTemplateService', 'APPLICABLE_ACTION_TYPE', 'firmwareConfigService', 'paginationService', '$scope', 'RULE_SEARCH_OPTIONS', 'SEARCH_OPTIONS'];

    function controller($modal, $stateParams, $controller, dialogs, alertsService, utilsService, firmwareRuleTemplateService, APPLICABLE_ACTION_TYPE, firmwareConfigService, paginationService, $scope, RULE_SEARCH_OPTIONS, SEARCH_OPTIONS) {
        var vm = this;

        angular.extend(vm, $controller('MainController', {
            $scope: $scope
        }));

        vm.data = [];
        vm.availablePriorities = [];
        vm.templatesSize;
        vm.selectedActionType = $stateParams.actionType
            ? APPLICABLE_ACTION_TYPE.getActionTypeByName($stateParams.actionType)
            : APPLICABLE_ACTION_TYPE.RULE_TEMPLATE;
        vm.APPLICABLE_ACTION_TYPE = APPLICABLE_ACTION_TYPE;
        vm.sizeOfEachType = [];
        vm.searchParam = {};
        vm.searchOptions = RULE_SEARCH_OPTIONS;

        vm.paginationStorageKey = 'firmwareRuleTemplatePageSize';
        vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
        vm.pageNumber = paginationService.getPageNumber();

        vm.getFirmwareRuleTemplates = getFirmwareRuleTemplates;
        vm.deleteFirmwareRuleTemplate = deleteFirmwareRuleTemplate;
        vm.getConfigNameById = getConfigNameById;
        vm.viewFirmwareRuleTemplate = viewFirmwareRuleTemplate;
        vm.exportFirmwareRuleTemplate = exportFirmwareRuleTemplate;
        vm.exportAllFirmwareRuleTemplates = exportAllFirmwareRuleTemplates;
        vm.exportAllFirmwareRuleTemplatesByType = exportAllFirmwareRuleTemplatesByType;
        vm.changePriority = changePriority;
        vm.getSizeByType = getSizeByType;
        vm.reloadPageByActionType = reloadPageByActionType;
        vm.searchRuleTemplatesByContext = searchRuleTemplatesByContext;
        vm.getActionNameForRuleCreation = getActionNameForRuleCreation;
        vm.getSizeOfAllTypes = getSizeOfAllTypes;
        vm.startParse = startParse;
        vm.getGeneralItemsNumber = getGeneralItemsNumber;
        vm.isDataLoading = false;

        reloadPageByActionType(vm.selectedActionType);
        
        $scope.$on('search-entities', function(event, data) {
            vm.searchParam = data.searchParam;
            vm.searchParam[SEARCH_OPTIONS.APPLICABLE_ACTION_TYPE] = vm.selectedActionType.name;
            getFirmwareRuleTemplates();
        });

        function reloadPageByActionType(selectedActionType) {
            setSelectedActionType(selectedActionType);
            getFirmwareRuleTemplates();
        }

        function getFirmwareRuleTemplates() {
            vm.isDataLoading = true;
            firmwareRuleTemplateService.getFirmwareRuleTemplatesByActionTypePage(vm.pageNumber, vm.pageSize, vm.searchParam)
                .then(function (result) {
                    vm.data = result.data;
                    vm.isDataLoading = false;
                    setTemplatesSize(result);
                    setAvailablePriorities(vm.templatesSize);
                    setSizeOfEachType(result);
                    paginationService.savePaginationSettingsInLocation(vm.pageNumber, vm.pageSize);
                }, function (reason) {
                    vm.isDataLoading = false;
                    alertsService.showError({message: reason.data});
                });
        }

        function getConfigNameById(configId) {
            firmwareConfigService.getById(configId).then(function(response) {
                    return response.data.description;
                }, function(error) {
                    alertsService.showError({title: 'Error', message: 'Error by loading FirmwareConfig'});
                    return "";
                });
        }

        function viewFirmwareRuleTemplate(id) {
            firmwareRuleTemplateService.getFirmwareRuleTemplate(id)
                .then(function (result) {
                    var modalInstance = $modal.open({
                        templateUrl: 'app/xconf/firmwareruletemplate/firmwareruletemplate-view.html',
                        size: 'md',
                        controller: 'FirmwareRuleTemplateViewController as vm',
                        resolve: {
                            obj: function () {
                                return result.data;
                            }
                        }
                    });
                }, function(reason) {
                    var data = reason.data;
                    alertsService.showError({message: data});
                });
        }

        function deleteFirmwareRuleTemplate(firmwareRuleTemplate) {
            dialogs
                .confirm('Delete confirmation', '<span class="break-word-inline">' + 'Are you sure you want to delete Firmware Rule Template ' + firmwareRuleTemplate.id + '?' + '</span>')
                .result.then().then(function (btn) {
                firmwareRuleTemplateService.deleteFirmwareRuleTemplate(firmwareRuleTemplate.id)
                    .then(function (result) {
                        alertsService.successfullyDeleted(firmwareRuleTemplate.id);
                        reloadPageByActionType(vm.selectedActionType);
                    }, function (reason) {
                        alertsService.showError({message: reason.data.message});
                    });
            }, function (btn) {
                //click cancel
            });
        }

        function exportFirmwareRuleTemplate(id) {
            firmwareRuleTemplateService.exportFirmwareRuleTemplate(id);
        }

        function exportAllFirmwareRuleTemplates() {
            firmwareRuleTemplateService.exportAllFirmwareRuleTemplates();
        }

        function exportAllFirmwareRuleTemplatesByType(type) {
            firmwareRuleTemplateService.exportAllFirmwareRuleTemplatesByType(type);
        }

        function changePriority(id, priority, prevPriorityValue) {
            var priorityDialogBox = dialogs.confirm('Priority Change Warning', `Action you going to perform will affect priorities from <b>${prevPriorityValue}</b> to <b>${priority}</b>. Are you sure you want to change Priority?`);
            priorityDialogBox.result.then(function (btn) {
                firmwareRuleTemplateService.changePriorities(id, priority).then(
                    function(result) {
                        getFirmwareRuleTemplates(vm.selectedActionType)
                    }, function(reason) {
                        alertsService.showError({title: 'Error', message: reason.data.message});
                        getFirmwareRuleTemplates(vm.selectedActionType)
                    }
                );
            },function (btn) {
                getFirmwareRuleTemplates(vm.selectedActionType)
            })
        }

        function setAvailablePriorities(size) {
            size = parseInt(size);

            vm.availablePriorities = [];
            for (var i = 1; i < size + 1; i++) {
                vm.availablePriorities.push(i);
            }
        }

        function setSizeOfEachType(result) {
            vm.sizeOfEachType[vm.APPLICABLE_ACTION_TYPE.RULE_TEMPLATE.name] = result.headers(vm.APPLICABLE_ACTION_TYPE.RULE_TEMPLATE.name);
            vm.sizeOfEachType[vm.APPLICABLE_ACTION_TYPE.DEFINE_PROPERTIES_TEMPLATE.name] = result.headers(vm.APPLICABLE_ACTION_TYPE.DEFINE_PROPERTIES_TEMPLATE.name);
            vm.sizeOfEachType[vm.APPLICABLE_ACTION_TYPE.BLOCKING_FILTER_TEMPLATE.name] = result.headers(vm.APPLICABLE_ACTION_TYPE.BLOCKING_FILTER_TEMPLATE.name);
        }

        function getSizeByType(type) {
            var size = vm.sizeOfEachType[type];
            return size ? size : 0;
        }

        function getSizeOfAllTypes() {
            var size = 0;
            for (var key in vm.APPLICABLE_ACTION_TYPE) {
                size += parseInt(getSizeByType(vm.APPLICABLE_ACTION_TYPE[key].name));
            }
            return size;
        }

        function setSelectedActionType(selectedActionType) {
            vm.selectedActionType = selectedActionType;
            vm.searchParam[SEARCH_OPTIONS.APPLICABLE_ACTION_TYPE] = selectedActionType.name;
        }

        function setTemplatesSize(result) {
            vm.templatesSize = result.headers('templateSizeByType');
        }

        function searchRuleTemplatesByContext() {
            firmwareRuleTemplateService.searchRuleTemplatesByContext(vm.searchContext, vm.selectedActionType.name).then(function(result) {
                vm.data = result.data;
                setTemplatesSize(result);
                setAvailablePriorities(vm.templatesSize);
                setSizeOfEachType(result);
            }, function(error) {
                alertsService.showError({title: 'Error', message: error.data.message});
            });
        }

        function getActionNameForRuleCreation(templateActionName) {
            var ruleActionName = templateActionName.replace('_TEMPLATE', '');
            return ruleActionName;
        }

        function startParse() {
            return !utilsService.isMapEmpty(vm.sizeOfEachType);
        }

        function getGeneralItemsNumber() {
            return getSizeByType(vm.selectedActionType.name);
        }
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .controller('MigrationResultViewController', controller);

    controller.$inject = ['$uibModalInstance', 'migrationResult'];

    function controller($modalInstance, migrationResult) {
        var vm = this;
        vm.migrationResut = migrationResult;

        vm.dismiss = dismiss;

        function dismiss() {
            $modalInstance.dismiss();
        }
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .controller('MigrationController', controller);

    controller.$inject = ['migrationService', 'alertsService', '$uibModal', 'dialogs'];

    function controller(migrationService, alertsService, $uibModal, dialogs) {
        var vm = this;

        vm.migrationInfos = null;

        vm.migrate = migrate;

        init();

        function init() {
            migrationService.getMigrationInfo().then(function(resp) {
                vm.migrationInfos = resp.data;
            }, function(error) {
                alertsService.showError({title: 'Error', message: error.data.message});
            });
        }

        function migrate(migrationURL, newEntity) {
            var dialog = dialogs.confirm('Migrate confirmation', '<span class="break-word-inline"> Are you sure you want to migrate ' + newEntity + ' ? </span>');
            dialog.result.then(function (btn) {
                migrationService.migrate(migrationURL).then(function (resp) {
                    showMigrationResult(resp.data);
                    init();
                }, function (error) {
                    alertsService.showError({title: 'Error', message: error.data.message});
                    init();
                });
            });
        }

        function showMigrationResult(migrationResult) {
            $uibModal.open({
                templateUrl: 'app/xconf/migration/migration-result-view.html',
                controller: 'MigrationResultViewController as vm',
                size: 'md',
                resolve : {
                    migrationResult: function() {
                        return migrationResult;
                    }
                }
            });
        }
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
    .module('app.namespacedlist')
    .controller('NamespacedListBulkDeleteController', controller);

controller.$inject = ['$uibModalInstance', 'importService', 'namespacedList', 'shiftItems', 'updateItems', 'namespacedListService', 'alertsService'];

function controller($modalInstance, importService, namespacedList, shiftItems, updateItems, namespacedListService, alertsService) {
    var vm = this;
    vm.isFileLoaded = false;
    vm.namespacedList = namespacedList;
    vm.matchedData = [];
    vm.existedNotMatchedData = [];

    vm.retrieveFile = retrieveFile;
    vm.updateNamespaceList = updateNamespaceList;
    vm.deleteNamespacedList = deleteNamespacedList;
    vm.closeModal = closeModal;

    async function retrieveFile(fileName) {
        try {
            let file = await importService.openFile(fileName, null, this);
            processFile(file);
        } catch (e) {
            alertsService.showError({message: e});
        }

    }

    function processFile(file) {
        let entityNames = parseFile(file);
        vm.namespacedList.data.forEach(function(entityName) {
            if (entityNames.indexOf(entityName) !== -1) {
                vm.matchedData.push(entityName);
            } else {
                vm.existedNotMatchedData.push(entityName);
            }
        });
        vm.isFileLoaded = true;
    }

    function parseFile(result) {
        var uniqueEntityNames = [];
        result.split(/\n|,/).forEach(function(entityName) {
            entityName = entityName.trim()
            if (uniqueEntityNames.indexOf(entityName) === -1) {
                uniqueEntityNames.push(entityName);
            }
        });
        return uniqueEntityNames;
    }

    function deleteNamespacedList() {
        namespacedListService.deleteNamespacedList(vm.namespacedList.id).then(function (result) {
            alertsService.showSuccessMessage({message: "Namespaced List deleted successfully"});
            $modalInstance.dismiss('close');
            shiftItems();
        }, function (reason) {
            alertsService.showError({message: reason.data.message, title: reason.data.type});
            $modalInstance.dismiss('close');
        });
     }

    function updateNamespaceList() {
        vm.namespacedList.data = vm.existedNotMatchedData;
        namespacedListService.updateNamespacedList(vm.namespacedList, vm.namespacedList.id).then(function () {
            alertsService.showSuccessMessage({message: 'Namespaced List ' + vm.namespacedList.id +  ' updated successfully'});
            $modalInstance.dismiss('close');
            updateItems();
        }, function (reason) {
            alertsService.showError({message: reason.data.message, title: reason.data.type});
            $modalInstance.dismiss('close');
        });
    }

    function closeModal() {
        $modalInstance.dismiss('close');
    }
}

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .controller('NamespacedListEditController', controller);

    controller.$inject=['$scope', '$stateParams', '$state', 'utilsService', 'alertsService', 'namespacedListService', 'EDIT_MODE', 'NAMESPACED_LIST_TYPE', 'importService'];

    function controller($scope, $stateParams, $state, utilsService, alertsService, namespacedListService, EDIT_MODE, NAMESPACED_LIST_TYPE, importService) {
        var vm = this;

        vm.namespacedList = {
            id: '',
            typeName: '',
            data: []
        };
        vm.dataItemValue = '';
        vm.dataItemValueError = '';
        vm.EDIT_MODE = EDIT_MODE;
        vm.currentEditMode = $stateParams.editMode || vm.EDIT_MODE.CREATE;
        vm.itemsForRemoving = [];
        vm.newlyAddedItems = [];
        vm.initialData = [];
        vm.copiedNamespacedListId = '';
        vm.NAMESPACED_LIST_TYPE = NAMESPACED_LIST_TYPE;
        vm.currentType = $stateParams.type;
        vm.namespacedList.typeName = vm.currentType;
        vm.newId = null;
        vm.dataFromFile = [];

        vm.validateDataItemValue = validateDataItemValue;
        vm.addItemToData = addItemToData;
        vm.removeItemFromData = removeItemFromData;
        vm.saveNamespacedList = saveNamespacedList;
        vm.isItemForRemoving = isItemForRemoving;
        vm.isNewlyAddedItem = isNewlyAddedItem;
        vm.removeOrMarkAsItemForRemoving = removeOrMarkAsItemForRemoving;
        vm.restore = restore;
        vm.retrieveNamespacedListDataFromFile = retrieveNamespacedListDataFromFile;
        vm.addDataFromFile = addDataFromFile;
        vm.replaceDataFromFile = replaceDataFromFile;

        init();

        function init() {
            var id = $stateParams.id;
            if (vm.currentEditMode === vm.EDIT_MODE.UPDATE) {
                getNamespacedList(id);
            }
        }

        function getNamespacedList(id) {
            namespacedListService.getNamespacedList(id)
                .then(function (result) {
                    vm.namespacedList = result.data;
                    namespacedListService.sortNamespacedListsData(vm.namespacedList);
                    angular.copy(result.data.data, vm.initialData);
                    vm.newId = vm.namespacedList.id;
                }, function (reason) {
                    alertsService.showError({message: reason.data.message, title: 'Error'});
                });
        }

        function addItemToData() {
            if (vm.currentType == NAMESPACED_LIST_TYPE.MAC_LIST || vm.currentType == NAMESPACED_LIST_TYPE.RI_MAC_LIST) {
                vm.dataItemValue = namespacedListService.normalizeMacAddress(vm.dataItemValue);
            }
            if(validateDataItemValue(vm.dataItemValue)) {
                vm.namespacedList.data.push(vm.dataItemValue);
                vm.newlyAddedItems.push(vm.dataItemValue);
                vm.dataItemValue = '';
                vm.dataItemValueError = '';
            }
        }

        function removeItemFromData(value) {
            var array = vm.namespacedList.data;
            if (utilsService.removeItemFromArray(array, value) >= 0) {
                vm.dataItemValue = '';
            }
            utilsService.removeItemFromArray(vm.newlyAddedItems, value);
        }

        /**
         * removes item right away if it was added to namespacedlist during this editing
         * otherwise adds item to itemsForRemoving list
         * @param value
         */
        function removeOrMarkAsItemForRemoving(value) {
            if(vm.initialData.indexOf(value) > -1) {
                vm.itemsForRemoving.push(value);
            } else {
                removeItemFromData(value);
            }
        }

        function isItemForRemoving(value) {
            if(vm.itemsForRemoving.indexOf(value) > -1)
                return true;
            return false;
        }

        function isNewlyAddedItem(value) {
            if(vm.newlyAddedItems.indexOf(value) > -1)
                return true;
            return false;
        }

        function restore(value) {
            utilsService.removeItemFromArray(vm.itemsForRemoving, value);
        }

        function validateDataItemValue(value) {
            if (!utilsService.isEmptyString(value)) {
                if (vm.namespacedList && vm.namespacedList.data.indexOf(value) != -1) {
                    vm.dataItemValueError = 'Item "' + value + '" already exists';
                    return false;
                }
                if(!namespacedListService.isMacAddress(value) && (isCurrentTypeMacAddress() || isCurrentTypeRIMacAddress())) {
                    vm.dataItemValueError = 'Item "' + value + '" must be MAC address';
                    return false;
                }
                if(!namespacedListService.isValidIpAddress(value) && isCurrentTypeIpAddress()) {
                    vm.dataItemValueError = 'Item "' + value + '" must be ipv4 or ipv6 address';
                    return false;
                }
            }
            vm.dataItemValueError = '';

            return true;
        }

        function validateId(id) {
            var idRegEx = new RegExp("^[-a-zA-Z0-9_.' ]+$");
            return idRegEx.test(id);
        }
        
        vm.isSaving = false;
        function saveNamespacedList() {
            if (vm.isSaving) {
                return;
            }
            vm.isSaving = true;
            if (vm.currentEditMode === EDIT_MODE.CREATE) {
                createNamespacedList();
            } else {
                updateNamespacedList();
            }
        }
        
        function createNamespacedList() {
            vm.isSaving = true;
            namespacedListService.createNamespacedList(vm.namespacedList)
                .then(function (resp) {
                    alertsService.successfullySaved(resp.data.id);
                    $state.go('namespacedlist', {type: vm.currentType});
                }, function (reason) {
                    handleDataError(reason);
                })
                .finally(function () {
                    vm.isSaving = false;
                });
        }
        
        
        function updateNamespacedList() {
            var dataBeforeUpdate = angular.copy(vm.namespacedList.data);
            utilsService.removeMultipleItemsFromArray(vm.namespacedList.data, vm.itemsForRemoving);
            if (!validateId(vm.newId)) {
                alertsService.showError({title: 'Error', message: 'Name is invalid'});
                return;
            }
            vm.isSaving = true;
            namespacedListService.updateNamespacedList(vm.namespacedList, vm.newId)
                .then(function (resp) {
                    alertsService.successfullySaved(resp.data.id);
                    $state.go('namespacedlist', {type: vm.currentType});
                })
                .catch(function (reason) {
                    vm.namespacedList.data = dataBeforeUpdate;
                    handleDataError(reason);
                })
                .finally(function () {
                    vm.isSaving = false;
                });
        }
        
        

        function isCurrentTypeMacAddress() {
            return vm.currentType === vm.NAMESPACED_LIST_TYPE.MAC_LIST;
        }

        function isCurrentTypeIpAddress() {
            return vm.currentType === vm.NAMESPACED_LIST_TYPE.IP_LIST;
        }

        function isCurrentTypeRIMacAddress() {
            return vm.currentType === vm.NAMESPACED_LIST_TYPE.RI_MAC_LIST;
        }

        function retrieveNamespacedListDataFromFile(fileName) {
            importService.openFile(fileName, null, this).then(function (result) {
                var dataFromFile = result.match(/[^\r\n]+/g);
                var dataByListType = namespacedListService.filterNamespacedListDataFromFile(dataFromFile, vm.currentType);
                vm.dataItemValueError = namespacedListService.validateDataFromFile(dataFromFile, dataByListType);
                if (vm.dataItemValueError === '') {
                    if (vm.currentType === NAMESPACED_LIST_TYPE.MAC_LIST) {
                        vm.dataFromFile = _.map(dataByListType, function (mac) {
                            return namespacedListService.normalizeMacAddress(mac);
                        });
                    } else {
                        vm.dataFromFile = dataByListType;
                    }
                }
            }, function (reason) {
                alertsService.showError({message: reason.data.message, title: 'Error'});
            });
        }

        function addDataFromFile() {
            var itemsForAdding = _.difference(vm.dataFromFile, vm.namespacedList.data);
            vm.newlyAddedItems = vm.newlyAddedItems.concat(itemsForAdding);
            vm.namespacedList.data = vm.namespacedList.data.concat(itemsForAdding);
            vm.dataFromFile = [];
            vm.dataItemValueError = '';
        }

        function replaceDataFromFile() {
            var itemsForRemoving = _.difference(vm.namespacedList.data, vm.dataFromFile);
            var itemsForAdding = _.difference(vm.dataFromFile, vm.namespacedList.data);
            itemsForRemoving.forEach(function(item) {
                removeOrMarkAsItemForRemoving(item);
            });
            vm.newlyAddedItems = vm.newlyAddedItems.concat(itemsForAdding);
            vm.namespacedList.data = vm.namespacedList.data.concat(itemsForAdding);
            vm.dataFromFile = [];
            vm.dataItemValueError = '';
        }

        function handleDataError(reason) {
            var errorMessage = reason.data.message;
            if (errorMessage.includes('address')) {
                vm.dataItemValueError = errorMessage;
            } else {
                alertsService.showError({title: 'Error', message: errorMessage});
            }
        }
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .controller('NamespacedListImportController', controller);

    controller.$inject=['$scope', '$log', '$uibModal', '$stateParams', 'alertsService', 'namespacedListService', 'importService', 'utilsService', 'NAMESPACED_LIST_TYPE', 'paginationService', 'ENTITY_TYPE'];

    function controller($scope, $log, $modal, $stateParams, alertsService, namespacedListService, importService, utilsService, NAMESPACED_LIST_TYPE, paginationService, ENTITY_TYPE) {
        var vm = this;

        vm.retrieveFile = retrieveFile;
        vm.viewNamespacedList = viewNamespacedList;
        vm.importNamespacedList = importNamespacedList;
        vm.importAllNamespacedLists = importAllNamespacedLists;
        vm.namespacedLists = null;
        vm.wrappedNamespacedLists = null;
        vm.overwriteAll = overwriteAll;
        vm.isOverwritten = false;
        vm.NAMESPACED_LIST_TYPE = NAMESPACED_LIST_TYPE;
        vm.currentType = $stateParams.type;
        vm.paginationStorageKey = 'namespacedListPageSize';
        vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
        vm.pageNumber = paginationService.getPageNumber();
        vm.selectPage = selectPage;
        vm.getGeneralItemsNumber = getGeneralItemsNumber;
        vm.progressBarControl = importService.progressBarControl;
        vm.errorMessagesById = {};

        $scope.$on('$locationChangeSuccess', function () {
            if (paginationService.paginationSettingsInLocationHaveChanged(vm.pageNumber, vm.pageSize)) {
                vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
                vm.pageNumber = paginationService.getPageNumber();
                selectPage();
            }
        });

        async function retrieveFile(fileName) {
            vm.namespacedLists = null;
            vm.wrappedNamespacedLists = null;
            vm.errorMessagesById = {};
            try {
                let file = await importService.openFile(fileName, null, this);
                processFile(file);
            } catch (e) {
                alertsService.showError({message: e});
            }
        }

        function processFile(file) {
            vm.namespacedLists = getNamespacedListsFromFile(file);
            if (vm.namespacedLists) {
                namespacedListService.sortNamespacedListsData(vm.namespacedLists);
                utilsService.sortObjectsById(vm.namespacedLists);
                vm.wrappedNamespacedLists = importService.wrapToImport(vm.namespacedLists);
            }
            vm.isOverwritten = false;
            selectPage();
        }

        function getNamespacedListsFromFile(data) {
            try {
                var namespacedLists = JSON.parse(data);
                vm.mainErrorMessage = '';
                if (vm.currentType === NAMESPACED_LIST_TYPE.MAC_LIST) {
                    namespacedLists = _.map(namespacedLists, function(namespacedList) {
                        namespacedList.data = _.map(namespacedList.data, function(mac) {
                            return namespacedListService.normalizeMacAddress(mac);
                        });
                        return namespacedList;
                    });
                }
                if (validateNamespacedList(namespacedLists, vm.currentType)) {
                    vm.errorMessagesById = {};
                    return namespacedLists;
                }
            } catch(e) {
                vm.mainErrorMessage = 'Namespaced list JSON has some errors! Please, check this file!';
                $log.error('error', e);
            }
        }

        function importNamespacedList(namespacedList) {
            if (namespacedList.overwrite) {
                namespacedListService.updateNamespacedList(namespacedList.entity, namespacedList.entity.id).then(function () {
                    alertsService.successfullySaved(namespacedList.entity.id);
                    utilsService.removeSelectedItemFromListById(vm.wrappedNamespacedLists, namespacedList.entity.id);
                    clearErrorByEntityId(namespacedList.entity.id);
                }, function (reason) {
                    vm.errorMessagesById[namespacedList.entity.id] = reason.data.message;
                });
            } else {
                namespacedListService.createNamespacedList(namespacedList.entity).then(function () {
                    alertsService.successfullySaved(namespacedList.entity.id);
                    utilsService.removeSelectedItemFromListById(vm.wrappedNamespacedLists, namespacedList.entity.id);
                    clearErrorByEntityId(namespacedList.entity.id);
                }, function (reason) {
                    vm.errorMessagesById[namespacedList.entity.id] = reason.data.message;
                });
            }
        }

        function importAllNamespacedLists(type) {
            importService.importAllEntities(namespacedListService, vm.wrappedNamespacedLists, null, null, ENTITY_TYPE.NS_LIST);
        }

        function viewNamespacedList(namespacedList) {
            var modalInstance = $modal.open({
                templateUrl: 'app/xconf/namespacedlist/namespacedlist-view.html',
                size: 'lg',
                controller: 'NamespacedListViewController as vm',
                resolve: {
                    namespacedList: function () {
                        return namespacedList;
                    }
                }
            });
        }

        function overwriteAll() {
            angular.forEach(vm.wrappedNamespacedLists, function (val) {
                val.overwrite = vm.isOverwritten;
            });
        }

        function selectPage() {
            paginationService.savePaginationSettingsInLocation(vm.pageNumber, vm.pageSize);
            computeStartAndEndIndex();
        }

        function computeStartAndEndIndex() {
            vm.startIndex = (vm.pageNumber - 1) * vm.pageSize;
            vm.endIndex = vm.pageNumber * vm.pageSize;
        }

        function getGeneralItemsNumber() {
            return vm.wrappedNamespacedLists ? vm.wrappedNamespacedLists.length : 0;
        }

        $scope.$on("import::error", function(event, data) {
            vm.errorMessagesById[data.id] = data.message;
        });

        function clearErrorByEntityId(id) {
            if (id && vm.errorMessagesById[id]) {
                delete vm.errorMessagesById[id];
            }
        }

        function validateNamespacedList(namespacedLists, type) {
            if(angular.isArray(namespacedLists[0].data)) {
                var listItem = namespacedLists[0].data[0];
                if(type === NAMESPACED_LIST_TYPE.IP_LIST && !namespacedListService.isValidIpAddress(listItem)) {
                    vm.mainErrorMessage = 'Invalid data, import file is not an IpList';
                    return false;
                }
                if ((type === NAMESPACED_LIST_TYPE.MAC_LIST || type === NAMESPACED_LIST_TYPE.RI_MAC_LIST) && !namespacedListService.isMacAddress(listItem)) {
                    vm.mainErrorMessage = 'Invalid data, import file is not a MacList';
                    return false;
                }
            }

            var missingFields = [];
            var i = 0;
            while(i < namespacedLists.length) {
                if (!namespacedLists[i].id) {
                    missingFields.push('id');
                }
                if (!namespacedLists[i].data || !angular.isArray(namespacedLists[i].data)) {
                    missingFields.push('data');
                }

                if (missingFields.length > 0) {
                    var errorMessage = 'Namespaced list JSON file is invalid! Next fields are missing: ' + missingFields.join(', ') + '. Please, check it!';
                    vm.mainErrorMessage =  errorMessage;
                    $log.error(errorMessage);
                    return false;
                }
                i++;
            }
            return true;
        }
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .controller('NamespacedListViewController', controller);

    controller.$inject=['$uibModalInstance', 'namespacedList'];

    function controller($modalInstance, namespacedList) {
        var vm = this;
        vm.namespacedList = namespacedList;
        vm.close = close;

        function close() {
            $modalInstance.dismiss('close');
        }
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .controller('NamespacedListsController', controller);

    controller.$inject=['$scope', '$uibModal', '$stateParams', 'dialogs', 'alertsService', 'namespacedListService', 'EDIT_MODE', 'NAMESPACED_LIST_TYPE', 'paginationService'];

    function controller($scope, $modal, $stateParams, dialogs, alertsService, namespacedListService, EDIT_MODE, NAMESPACED_LIST_TYPE, paginationService) {
        var vm = this;

        vm.namespacedLists = [];
        vm.EDIT_MODE = EDIT_MODE;
        vm.NAMESPACED_LIST_TYPE = NAMESPACED_LIST_TYPE;
        vm.currentType = $stateParams.type || vm.NAMESPACED_LIST_TYPE.MAC_LIST;
        vm.searchParam = {};
        vm.searchOptions = {
            data: [
                {
                    "name": {
                        friendlyName: "Name",
                        apiArgs: ['NAME']
                    }
                },
                {
                    "name": {
                        friendlyName: "Data",
                        apiArgs: ["DATA"]
                    }
                }
            ]
        };
        vm.paginationStorageKey = 'namespacedListPageSize';
        vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
        vm.pageNumber = paginationService.getPageNumber();
        vm.generalItemsNumber = 0;

        vm.searchList = searchList;
        vm.getNamespacedLists = getNamespacedLists;
        vm.viewNamespacedList = viewNamespacedList;
        vm.deleteNamespacedList = deleteNamespacedList;
        vm.exportAllNamespacedLists = exportAllNamespacedLists;
        vm.exportNamespacedList = exportNamespacedList;
        vm.startParse = startParse;
        vm.getGeneralItemsNumber = getGeneralItemsNumber;
        vm.shiftItems = shiftItems;
        vm.bulkDelete = bulkDelete;

        init();

        function init() {
            getNamespacedLists();
        }

        $scope.$on('$locationChangeSuccess', function () {
            if (paginationService.paginationSettingsInLocationHaveChanged(vm.pageNumber, vm.pageSize)) {
                vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
                vm.pageNumber = paginationService.getPageNumber();
                init();
            }
        });

        $scope.$on('search-entities', function(event, data) {
            vm.searchParam = data.searchParam;
            getNamespacedLists();
        });

        function getNamespacedLists() {
            vm.searchParam.TYPE = vm.currentType;
            namespacedListService.getNamespacedLists(vm.pageNumber, vm.pageSize, vm.searchParam).then(function (result) {
                vm.namespacedLists = result.data;
                vm.generalItemsNumber = result.headers('numberOfItems');
                paginationService.savePaginationSettingsInLocation(vm.pageNumber, vm.pageSize);
            }, function (reason) {
                alertsService.showError({message: reason.data.message, title: 'Error'});
            });
        }

        function viewNamespacedList(id) {
            namespacedListService.getNamespacedList(id)
                .then(function (result) {
                    namespacedListService.sortNamespacedListsData(result.data);
                    var modalInstance = $modal.open({
                        templateUrl: 'app/xconf/namespacedlist/namespacedlist-view.html',
                        size: 'lg',
                        controller: 'NamespacedListViewController as vm',
                        resolve: {
                            namespacedList: function () {
                                return result.data;
                            }
                        }
                    });
                }, function(reason) {
                    alertsService.showError({message: reason.data.message, title: 'Error'});
                });
        }

        function deleteNamespacedList(namespacedList, type) {
            var dlg = dialogs.confirm('Delete confirmation', '<span class="break-word-inline"> Are you sure you want to delete Namespaced List ' + namespacedList.id + "? </span>");
            dlg.result.then(function (btn) {
                namespacedListService.deleteNamespacedList(namespacedList.id, type)
                    .then(function (result) {
                        alertsService.showSuccessMessage({message: "Deleted " + namespacedList.id});
                        shiftItems();
                    }, function (reason) {
                        alertsService.showError({message: reason.data.message, title: 'Error'});
                    });
            });
        }

        function exportAllNamespacedLists(type) {
            return namespacedListService.exportAllNamespacedLists(type);
        }

        function exportNamespacedList(id, type) {
            return namespacedListService.exportNamespacedList(id, type);
        }

        function shiftItems() {
            var numberOfPagesAfterDeletion = Math.ceil((getGeneralItemsNumber() - 1) / vm.pageSize);
            vm.pageNumber = (vm.pageNumber > numberOfPagesAfterDeletion && numberOfPagesAfterDeletion > 0) ? numberOfPagesAfterDeletion : vm.pageNumber;
            getNamespacedLists();
        }

        function startParse() {
            return getGeneralItemsNumber() > 0;
        }

        function getGeneralItemsNumber() {
            return vm.generalItemsNumber;
        }

        function searchList(type, searchName, searchData, pageSize, pageNumber) {
            vm.isMacPart = namespacedListService.isMacPart(searchData);
            if (vm.currentType ===  vm.NAMESPACED_LIST_TYPE.IP_LIST || vm.isMacPart || searchData === '' || searchName === '') {
                namespacedListService.searchList(type, searchName, searchData, pageSize, pageNumber).then(function (resp) {
                    vm.namespacedLists = resp.data;
                    vm.generalItemsNumber = resp.headers('numberOfItems');
                    paginationService.savePaginationSettingsInLocation(pageNumber, pageSize);
                }, function (error) {
                    alertsService.showError({title: 'Error', message: error.data.message});
                });
            }
        }

        function bulkDelete(id) {
            namespacedListService.getNamespacedList(id).then(function (result) {
                namespacedListService.sortNamespacedListsData(result.data);
                var option = {
                    templateUrl: 'app/xconf/namespacedlist/namespacedlist-bulk-delete.view.html',
                    size: 'md',
                    controller: 'NamespacedListBulkDeleteController as vm',
                    resolve: {
                        namespacedList: function () {
                            return result.data;
                        }, shiftItems: function() {
                            return shiftItems;
                        }, updateItems: function() {
                            return getNamespacedLists;
                        }
                    }
                };
                $modal.open(option);
            }, function(reason) {
                alertsService.showError({message: reason.data.message, title: data.type});
            });
        }
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.penetrationData')
        .controller('PenetrationDataController', controller);

    controller.$inject = ['$rootScope', 'alertsService', 'utilsService', 'penetrationDataService', 'namespacedListService', 'CAPABILITIES', 'testPageUtils'];

    function controller($rootScope, alertsService, utilsService, penetrationDataService, namespacedListService, CAPABILITIES, testPageUtils) {
        var vm = this;

        vm.parameters = [{key: '', value: ''}];
        vm.autoCompleteValues = ["eStbMac"];
        vm.quickAddValues = [];
        vm.result = null;
        vm.context = null;

        vm.matchRules = matchRules;
        vm.stopAdd = true;
        vm.timeFromTimestamp = timeFromTimestamp;

        init();

        function init() {
            angular.forEach(CAPABILITIES, function(capability) {
                vm.quickAddValues.push({display: capability, key: 'capabilities', value: capability});
            });
        }

        function timeFromTimestamp(timestamp) {
            var date = new Date(timestamp);
            var regexp = /\((.)*\)/;
            var result = date.toTimeString().replace(regexp, '');
            return result;
        }

        function matchRules() {
            if (testPageUtils.validateInput(vm.parameters)) {
                const macAddress = vm.parameters[0].value;
                if(macAddress && namespacedListService.isMacAddress(macAddress)) {
                    penetrationDataService.getMatchedRules(macAddress).then(function (resp) {
                        vm.result = resp.data;
                    }, function (error) {
                        alertsService.showError({title: 'Error', message: error.data.message});
                    });
                } else {
                    alertsService.showError({title: 'Error', message: "Invalid MacAddress"});
                }
            }
        }
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .controller('FeatureEditController', controller);

    controller.$inject = ['$rootScope', '$scope', '$state', '$controller', '$stateParams', 'featureService', 'alertsService', 'ruleHelperService', '$uibModal', 'NAMESPACED_LIST_TYPE'];

    function controller($rootScope, $scope, $state, $controller, $stateParams, featureService, alertsService, ruleHelperService, $uibModal, NAMESPACED_LIST_TYPE) {
        var vm = this;

        angular.extend(vm, $controller('EditController', {
            $scope: $scope,
            mainPage: 'feature',
            stateParameters: null
        }));

        vm.isFeatureId = $stateParams.featureId;

        vm.autoCompleteValues = null;
        vm.quickAddValues = [];
        vm.parameters = [{key: '', value: ''}];

        vm.feature = {
            applicationType: $rootScope.applicationType,
            name: '',
            featureName: '',
            effectiveImmediate: false,
            enable: false,
            configData: {},
            whitelisted: false,
            whitelistProperty: {}
        };
        vm.namespacedListData = ruleHelperService.buildNamespacedListData();
        vm.NAMESPACED_LIST_TYPE = NAMESPACED_LIST_TYPE;

        vm.saveFeature = saveFeature;
        vm.clearWhitelistPropertyValue = clearWhitelistPropertyValue;
        vm.showAddNamespacedListModal = showAddNamespacedListModal;
        vm.clearWhitelistProperty = clearWhitelistProperty;

        init();

        function init() {
            if (vm.isFeatureId) {
                featureService.getFeature($stateParams.featureId).then(function(result) {
                    vm.parameters = [];
                    vm.feature = result.data;
                    for (var key in vm.feature.configData) {
                        vm.parameters.push({key: key, value: vm.feature.configData[key]});
                    }
                }, alertsService.errorHandler);
            }
        }
        vm.isSaving = false;
        function saveFeature() {
            vm.isSaving = true;
            vm.feature.configData = {};
            vm.parameters.forEach(function (item) {
                if (item.key) {
                    vm.feature.configData[item.key] = item.value;
                }
            });
            var method = (vm.isFeatureId) ? 'updateFeature' : 'createFeature';
            featureService[method](vm.feature).then(function(result) {
                alertsService.successfullySaved(result.data.name);
                $state.go('feature');
            }, function(error) {
                alertsService.errorHandler(error);
            }).finally(function() {
                vm.isSaving = false;
            });
        }
        

        function clearWhitelistPropertyValue(whitelistProperty) {
            whitelistProperty.value = '';
        }

        function showAddNamespacedListModal(whitelistProperty) {
            if (!whitelistProperty.namespacedListType) {
                alertsService.showError({title: 'Error', message: "Select a namespacedList type"});
                return;
            }
            var modalInstance = $uibModal.open({
                templateUrl: 'app/shared/filtered-select/filtered-select.html',
                size: 'lg',
                controller: 'FilteredSelect as vm',
                resolve: {
                    title: function() {
                        return 'NamespacedLists';
                    },
                    data: function() {
                        var currentDataEntry = null;
                        if (vm.namespacedListData) {
                            if (whitelistProperty.namespacedListType === NAMESPACED_LIST_TYPE.IP_LIST) {
                                currentDataEntry = vm.namespacedListData[1];
                            } else {
                                currentDataEntry = vm.namespacedListData[0];
                            }
                        }
                        return currentDataEntry;
                    },
                    onSelect: function() {
                        return function(id) {

                            whitelistProperty.value = id;
                        }
                    }
                }
            });
        }

        function clearWhitelistProperty() {
            vm.feature.whitelistProperty = {};
        }
    }

})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .controller('FeatureImportController', controller);

    controller.$inject = ['$scope', 'featureService', 'importService', 'paginationService', 'utilsService', 'alertsService'];

    function controller($scope, featureService, importService, paginationService, utilsService, alertsService) {
        var vm = this;
        vm.isOverwritten = false;
        vm.overwriteAll = overwriteAll;

        vm.features = null;
        vm.wrappedFeatures = null;

        vm.importFeature = importFeature;
        vm.importAllFeatures = importAllFeatures;
        vm.retrieveFile = retrieveFile;

        vm.paginationStorageKey = 'featurePageSize';
        vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
        vm.pageNumber = paginationService.getPageNumber();

        vm.selectPage = selectPage;
        vm.getGeneralItemsNumber = getGeneralItemsNumber;

        vm.progressBarControl = importService.progressBarControl;

        $scope.$on('$locationChangeSuccess', function () {
            if (paginationService.paginationSettingsInLocationHaveChanged(vm.pageNumber, vm.pageSize)) {
                vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
                vm.pageNumber = paginationService.getPageNumber();
                selectPage();
            }
        });

        async function retrieveFile(fileName) {
            vm.features = null;
            try {
                let file = await importService.openFile(fileName, null, this);
                vm.isOverwritten = false;
                vm.wrappedFeatures = importService.prepareEntitiesFromFile(file);
                selectPage();
            } catch (e) {
                alertsService.showError({message: e});
            }
        }

        function importFeature(wrappedFeature) {
            var promise = wrappedFeature.overwrite
                ? featureService.updateFeature(wrappedFeature.entity)
                : featureService.createFeature(wrappedFeature.entity);
            promise.then(function () {
                alertsService.successfullySaved(wrappedFeature.entity.name);
                utilsService.removeSelectedItemFromListById(vm.wrappedFeatures, wrappedFeature.entity.id);
            }, function (error) {
                alertsService.showError({message: error.data.message, title: 'Exception'});
            });
        }

        function importAllFeatures() {
            importService.importAllEntities(featureService, vm.wrappedFeatures);
        }

        function overwriteAll() {
            angular.forEach(vm.wrappedFeatures, function (value) {
                value.overwrite = vm.isOverwritten;
            });
        }

        function selectPage() {
            paginationService.savePaginationSettingsInLocation(vm.pageNumber, vm.pageSize);
            computeStartAndEndIndex();
        }

        function computeStartAndEndIndex() {
            vm.startIndex = (vm.pageNumber - 1) * vm.pageSize;
            vm.endIndex = vm.pageNumber * vm.pageSize;
        }

        function getGeneralItemsNumber() {
            return vm.wrappedFeatures ? vm.wrappedFeatures.length : 0;
        }
    }
})();



/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .controller('FeatureController', controller);

    controller.$inject = ['$scope', '$controller', 'dialogs', 'featureService', 'paginationService', 'alertsService', 'utilsService'];

    function controller($scope, $controller, dialogs, featureService, paginationService, alertsService, utilsService) {
        var vm = this;

        angular.extend(vm, $controller('MainController', {
            $scope: $scope
        }));

        vm.wrappedFeatures = null;
        vm.paginationStorageKey = 'featurePageSize';
        vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
        vm.pageNumber = paginationService.getPageNumber();
        vm.generalItemsNumber = 0;
        vm.searchParam = {};
        vm.searchOptions = {
            data: [
                {
                    "name": {
                        friendlyName: "Feature Instance",
                        apiArgs: ["FEATURE_INSTANCE"]
                    }
                },
                {
                    "name": {
                        friendlyName: "Name",
                        apiArgs: ["NAME"]
                    }
                },
                {
                    "name": {
                        friendlyName: 'Key',
                        apiArgs: ['FREE_ARG']
                    }
                },
                {
                    "name": {
                        friendlyName: 'Value',
                        apiArgs: ['FIXED_ARG']
                    }
                },
                {
                    "name": {
                        friendlyName: 'Key and Value',
                        apiArgs: ['FREE_ARG', 'FIXED_ARG']
                    }
                }
            ]
        };

        vm.startParse = startParse;
        vm.getFeatures = getFeatures;
        vm.exportFeature = featureService.exportFeature;
        vm.exportAllFeatures = featureService.exportAllFeatures;
        vm.deleteFeature = deleteFeature;
        vm.isDataLoading = false;

        $scope.$on('$locationChangeSuccess', function () {
            if (paginationService.paginationSettingsInLocationHaveChanged(vm.pageNumber, vm.pageSize)) {
                vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
                vm.pageNumber = paginationService.getPageNumber();
                init();
            }
        });

        init();

        function init() {
            getFeatures();
        }

        $scope.$on('search-entities', function(event, data) {
            vm.searchParam = data.searchParam;
            getFeatures();
        });

        function deleteFeature(feature) {
            if (feature.id) {
                var dialog = dialogs.confirm('Delete confirmation'
                    , '<span class="break-word-inline"> Are you sure you want to delete Feature ' + feature.name + ' ? </span>');
                dialog.result.then(function () {
                    featureService.deleteFeature(feature.id).then(function(result) {
                        utilsService.removeItemFromArray(vm.wrappedFeatures, feature);
                        alertsService.successfullyDeleted(feature.name);
                        shiftItems();
                    }, function(reason) {
                        alertsService.showError({title: 'Error', message: reason.data.message});
                    });
                });
            }
        }

        function getFeatures() {
            vm.isDataLoading = true;
            featureService.getFeatures(vm.pageNumber, vm.pageSize, vm.searchParam).then(function (result) {
                vm.isDataLoading = false;
                vm.wrappedFeatures = result.data;
                vm.generalItemsNumber = result.headers('numberOfItems');
                paginationService.savePaginationSettingsInLocation(vm.pageNumber, vm.pageSize);
            }, function (error) {
                vm.isDataLoading = false;
                alertsService.showError({title: 'Error', message: 'Error by loading feature'});
            });
        }

        function shiftItems() {
            var numberOfPagesAfterDeletion = Math.ceil((vm.generalItemsNumber - 1) / vm.pageSize);
            vm.pageNumber = (vm.pageNumber > numberOfPagesAfterDeletion && numberOfPagesAfterDeletion > 0) ? numberOfPagesAfterDeletion : vm.pageNumber;
            getFeatures();
        }

        function startParse() {
            return vm.generalItemsNumber > 0;
        }

    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
    angular
        .module('app.featurerule')
        .controller('FeatureRuleEditController', controller);

    controller.$inject = ['$rootScope', '$scope', '$controller', '$state', '$stateParams', 'featureRuleService', 'ruleHelperService', 'alertsService', 'RFC_RULE_OPERATION_ARRAY', 'LOG_UPLOAD_FREE_ARG_AUTOCOMPLETE_VALUE', 'FREE_ARG_NAME', 'ruleValidationService', 'ruleConditionService', 'featureService', 'EDIT_MODE', 'featureRuleValidationService', '$q'];

    function controller($rootScope, $scope, $controller, $state, $stateParams, featureRuleService, ruleHelperService, alertsService, RFC_RULE_OPERATION_ARRAY, LOG_UPLOAD_FREE_ARG_AUTOCOMPLETE_VALUE, FREE_ARG_NAME, ruleValidationService, ruleConditionService, featureService, EDIT_MODE, featureRuleValidationService, $q) {
        var vm = this;

        angular.extend(vm, $controller('EditController', {
            $scope: $scope,
            mainPage: 'featurerule',
            stateParameters: null
        }));

        vm.isFeatureRuleId = $stateParams.featureRuleId;

        vm.saveFeatureRule = saveFeatureRule;

        vm.namespacedListData = ruleHelperService.buildNamespacedListData();
        vm.operations = {general: RFC_RULE_OPERATION_ARRAY};
        vm.representation = ruleHelperService.buildRepresentation();
        vm.freeArgAutocompleteValues = LOG_UPLOAD_FREE_ARG_AUTOCOMPLETE_VALUE;
        vm.validationFunction = ruleValidationService.validate;
        vm.percentFreeArgName = FREE_ARG_NAME.ESTB_MAC_ADDRESS;
        vm.features = [];
        vm.featureRule = {
            applicationType: $rootScope.applicationType,
            name:'',
            featureIds: [],
            rule: {}
        };
        vm.availablePriorities = [];
        vm.featureRulesSize = $stateParams.featureRulesSize ? parseInt($stateParams.featureRulesSize) : 0;
        vm.currentEditMode = $stateParams.featureRuleId ? EDIT_MODE.UPDATE : EDIT_MODE.CREATE;
        vm.allowedNumberOfFeatures = null;
        vm.isSaving = false;

        vm.validator = featureRuleValidationService;

        $scope.$root.$on("rule::remove", function(e, obj) {
            var watchResult = ruleHelperService.watchRuleRemoveOperation(vm.isValidCondition, vm.featureRule.rule, obj);
            vm.featureRule.rule = watchResult.rule;
            vm.isValidCondition = watchResult.isValidCondition;
        });
        vm.ipMacIsConditionLimit = "";

        init();
        function init() {

            getFeatures();

            setAvailablePriorities(vm.featureRulesSize);
            if (vm.currentEditMode === EDIT_MODE.CREATE) {
                vm.featureRule.priority = vm.availablePriorities[vm.availablePriorities.length - 1];
            }

            $q.all([getFeatureRules(), featureRuleService.getAllowedNumberOfFeatures()]).then(function (responses) {
                if (responses[0]) {
                    vm.featureRule = responses[0].data;
                }
                vm.allowedNumberOfFeatures = responses[1].data;
                vm.validator.validate(vm.featureRule);
            });
            ruleConditionService.getIpMacIsConditionLimit().then(function(resp) {
                vm.ipMacIsConditionLimit = resp.data.ipMacIsConditionLimit;
            })
        }

        function getFeatureRules() {
            var deferred = $q.defer();
            if (!vm.isFeatureRuleId) {
                deferred.resolve(null);
            }
            featureRuleService.getFeatureRule($stateParams.featureRuleId).then(function(result) {
                deferred.resolve(result);
            }, alertsService.errorHandler);
            return deferred.promise;
        }

        function saveFeatureRule() {
            vm.isSaving = true; 
            var method = (vm.isFeatureRuleId) ? 'updateFeatureRule' : 'createFeatureRule';
            featureRuleService[method](vm.featureRule).then(function(result) {
                alertsService.successfullySaved(result.data.name);
                $state.go('featurerule');
            }, function(error) {
                alertsService.errorHandler(error);
              }).finally(function() {
                vm.isSaving = false; 
              });
            }


        function getFeatures() {
            featureService.getAll().then(function(resp) {
                vm.features = resp.data;
            }, alertsService.errorHandler);
        }

        function setAvailablePriorities(size) {
            if (vm.currentEditMode === EDIT_MODE.UPDATE) {
                size = parseInt(size);
            }

            if (vm.currentEditMode === EDIT_MODE.CREATE) {
                size = parseInt(size) + 1;
            }

            vm.availablePriorities = [];
            for (var i = 1; i < size + 1; i++) {
                vm.availablePriorities.push(i);
            }
        }
    }

})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .controller('FeatureRuleImportController', controller);

    controller.$inject = ['$scope', 'featureRuleService', 'importService', 'paginationService', 'utilsService', 'alertsService', '$uibModal'];

    function controller($scope, featureRuleService, importService, paginationService, utilsService, alertsService, $uibModal) {
        var vm = this;
        vm.isOverwritten = false;
        vm.wrappedFeatureRules = null;
        vm.paginationStorageKey = 'featureRulePageSize';
        vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
        vm.pageNumber = paginationService.getPageNumber();

        vm.overwriteAll = overwriteAll;
        vm.importFeatureRule = importFeatureRule;
        vm.importAllFeatureRules = importAllFeatureRules;
        vm.retrieveFile = retrieveFile;
        vm.viewFeatureRule = viewFeatureRule;
        vm.selectPage = selectPage;
        vm.getGeneralItemsNumber = getGeneralItemsNumber;

        vm.progressBarControl = importService.progressBarControl;

        $scope.$on('$locationChangeSuccess', function () {
            if (paginationService.paginationSettingsInLocationHaveChanged(vm.pageNumber, vm.pageSize)) {
                vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
                vm.pageNumber = paginationService.getPageNumber();
                selectPage();
            }
        });

        async function retrieveFile(fileName) {
            try {
                let file = await importService.openFile(fileName, null, this);
                vm.isOverwritten = false;
                vm.wrappedFeatureRules = importService.prepareEntitiesFromFile(file);
                selectPage();
            } catch (e) {
                alertsService.showError({message: e});
            }
        }

        function importFeatureRule(wrappedFeatureRule) {
            var promise = wrappedFeatureRule.overwrite
                ? featureRuleService.updateFeatureRule(wrappedFeatureRule.entity)
                : featureRuleService.createFeatureRule(wrappedFeatureRule.entity);
            promise.then(function () {
                alertsService.successfullySaved(wrappedFeatureRule.entity.name);
                utilsService.removeSelectedItemFromListById(vm.wrappedFeatureRules, wrappedFeatureRule.entity.id);
            }, function (error) {
                alertsService.showError({message: error.data.message, title: 'Exception'});
            });
        }

        function importAllFeatureRules() {
            importService.importAllEntities(featureRuleService, vm.wrappedFeatureRules);
        }

        function overwriteAll() {
            angular.forEach(vm.wrappedFeatureRules, function (value) {
                value.overwrite = vm.isOverwritten;
            });
        }

        function selectPage() {
            paginationService.savePaginationSettingsInLocation(vm.pageNumber, vm.pageSize);
            computeStartAndEndIndex();
        }

        function computeStartAndEndIndex() {
            vm.startIndex = (vm.pageNumber - 1) * vm.pageSize;
            vm.endIndex = vm.pageNumber * vm.pageSize;
        }

        function getGeneralItemsNumber() {
            return vm.wrappedFeatureRules ? vm.wrappedFeatureRules.length : 0;
        }

        function viewFeatureRule(featureRule) {
            var modalInstance = $uibModal.open({
                templateUrl: 'app/xconf/rfc/featurerule/featurerule.view.html',
                size: 'md',
                controller: 'FeatureRuleViewController as vm',
                resolve: {
                    featureRule: function () {
                        return featureRule;
                    }
                }
            });
        }
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
    angular
        .module('app.featurerule')
        .controller('FeatureRuleController', controller);

    controller.$inject = ['$scope', '$controller', 'dialogs', 'featureRulesSize', 'featureRuleService', 'paginationService', 'utilsService', 'alertsService', 'RULE_SEARCH_OPTIONS', '$uibModal'];

    function controller($scope, $controller, dialogs, featureRulesSize, featureRuleService, paginationService, utilsService , alertsService, RULE_SEARCH_OPTIONS, $uibModal) {
        var vm = this;

        angular.extend(vm, $controller('MainController', {
            $scope: $scope
        }));

        vm.wrappedFeatureRules = null;

        vm.paginationStorageKey = 'featurePageSize';
        vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
        vm.pageNumber = paginationService.getPageNumber();
        vm.generalItemsNumber = 0;
        vm.searchParam = {};
        vm.searchOptions = angular.copy(RULE_SEARCH_OPTIONS);
        vm.featureRulesSize = parseInt(featureRulesSize);

        vm.startParse = startParse;
        vm.getFeatureRules = getFeatureRules;
        vm.exportFeatureRule = featureRuleService.exportFeatureRule;
        vm.exportAllFeatureRules = featureRuleService.exportAllFeatureRules;
        vm.deleteFeatureRule = deleteFeatureRule;
        vm.changePriority = changePriority;
        vm.viewFeatureRule = viewFeatureRule;
        vm.isDataLoading = false;
        $scope.$on('$locationChangeSuccess', function () {
            if (paginationService.paginationSettingsInLocationHaveChanged(vm.pageNumber, vm.pageSize)) {
                vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
                vm.pageNumber = paginationService.getPageNumber();
                init();
            }
        });

        init();

        function init() {
            vm.searchOptions = angular.copy(RULE_SEARCH_OPTIONS);
            vm.searchOptions.data.push({
                "name": {
                    friendlyName: 'Feature',
                    apiArgs: ['FEATURE_INSTANCE']
                }
            });
            getFeatureRules();
        }

        $scope.$on('search-entities', function(event, data) {
            vm.searchParam = data.searchParam;
            getFeatureRules();
        });

        function deleteFeatureRule(featureRule) {
            if (featureRule.id) {
                var dialog = dialogs.confirm('Delete confirmation'
                    , '<span class="break-word-inline"> Are you sure you want to delete Feature Rule ' + featureRule.name + ' ? </span>');
                dialog.result.then(function () {
                     featureRuleService.deleteFeatureRule(featureRule.id).then(function(result) {
                        utilsService.removeItemFromArray(vm.wrappedFeatureRules, featureRule);
                        alertsService.successfullyDeleted(featureRule.name);
                        shiftItems();
                     }, function(reason) {
                        alertsService.showError({title: 'Error', message: reason.data.message});
                     });
                });
            }
        }

        function getFeatureRules() {
            vm.isDataLoading = true;
            featureRuleService.getFeatureRules(vm.pageNumber, vm.pageSize, vm.searchParam).then(function(result) {
                vm.isDataLoading = false;
                vm.wrappedFeatureRules = result.data;
                vm.generalItemsNumber = result.headers('numberOfItems');
                paginationService.savePaginationSettingsInLocation(vm.pageNumber, vm.pageSize);
                setAvailablePriorities(vm.featureRulesSize);
            }, function (error) {
                vm.isDataLoading = false;
                alertsService.showError({title: 'Error', message: 'Error by loading feature rule'});
            });
        }

        function shiftItems() {
            vm.generalItemsNumber--;
            vm.featureRulesSize--;
            var numberOfPagesAfterDeletion = Math.ceil((vm.generalItemsNumber) / vm.pageSize);
            vm.pageNumber = (vm.pageNumber > numberOfPagesAfterDeletion && numberOfPagesAfterDeletion > 0) ? numberOfPagesAfterDeletion : vm.pageNumber;
            getFeatureRules();
        }

        function startParse() {
            return vm.generalItemsNumber > 0;
        }

        function setAvailablePriorities(size) {
            size = parseInt(size);

            vm.availablePriorities = [];
            for (var i = 1; i < size + 1; i++) {
                vm.availablePriorities.push(i);
            }
        }

        function changePriority(id, priority, prevPriorityValue) {
            var priorityDialogBox = dialogs.confirm('Priority Change Warning', `Action you going to perform will affect priorities from <b>${prevPriorityValue}</b> to <b>${priority}</b>. Are you sure you want to change Priority?`);
            priorityDialogBox.result.then(function (btn) {
                featureRuleService.changePriorities(id, priority).then(function(result){
                    init();
                }, function(reason) {
                    alertsService.showError({title: 'Error', message: reason.message});
                    init();
                });
            }, function(btn) {
                init();
            })
        }

        function viewFeatureRule(featureRule) {
            var modalInstance = $uibModal.open({
                templateUrl: 'app/xconf/rfc/featurerule/featurerule.view.html',
                size: 'md',
                controller: 'FeatureRuleViewController as vm',
                resolve: {
                    featureRule: function () {
                        return featureRule;
                    }
                }
            });
        }
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.featurerule')
        .controller('FeatureRuleViewController', controller);

    controller.$inject=['$uibModalInstance', 'alertsService', 'featureRule', 'featureService'];

    function controller($uibModalInstance, alertsService, featureRule, featureService) {
        var vm = this;
        vm.features = [];
        vm.featureRule = featureRule;
        vm.dismiss = dismiss;


        init();

        function init() {
            if (vm.featureRule && vm.featureRule.featureIds) {
                getFeaturesByIdList(vm.featureRule.featureIds);
            }
        }

        function getFeaturesByIdList(featureIds) {
            featureService.getFeaturesByIdList(featureIds).then(function(resp) {
                vm.features = resp.data;
            }, function(error) {
                alertsService.showError({title: 'Error', message: error.data.message});
            });
        }

        function dismiss() {
            $uibModalInstance.dismiss('close');
        }
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.settingprofile')
        .controller('SettingProfileEditController', controller);

    controller.$inject = ['$rootScope', '$scope', '$controller', 'SETTING_TYPE', 'settingProfileService', '$stateParams', '$state', 'alertsService', 'utilsService'];

    function controller($rootScope, $scope, $controller, SETTING_TYPE, settingProfileService, $stateParams, $state, alertsService, utilsService) {
        var vm = this;

        angular.extend(vm, $controller('EditController', {
            $scope: $scope,
            mainPage: 'settingprofiles',
            stateParameters: null
        }));

        vm.settingTypes = SETTING_TYPE;
        vm.profile = null;
        vm.isNewProfile = true;

        vm.addProfileEntry = addProfileEntry;
        vm.removeProfileEntry = removeProfileEntry;
        vm.save = save;
        init();

        function init() {
            if ($stateParams.profileId) {
                vm.isNewProfile = false;
                settingProfileService.getProfile($stateParams.profileId)
                    .then(function (resp) {
                        if (resp && resp.data) {
                            initProfileObject(resp.data);
                        }
                    }, alertsService.errorHandler);
            } else {
                vm.isNewProfile = true;
                vm.profile = {
                    settingProfileId: '',
                    settingType: '',
                    properties: [{ key:'', value:'' }]
                }
            }
        }

        function initProfileObject(data) {
            vm.profile = {
                settingProfileId: data.settingProfileId,
                settingType: data.settingType,
                properties: []
            };
            Object.keys(data.properties).forEach(function(propKey) {
                vm.profile.properties.push({key: propKey, value: data.properties[propKey]})
            });
        }

        function addProfileEntry() {
            vm.profile.properties.push({key: '', value: ''});
        }

        function removeProfileEntry(entry) {
            utilsService.removeItemFromArray(vm.profile.properties, entry);
        }

        function save() {
            if (isValid(vm.profile)) {
                var converted = convertBeforeSaving(vm.profile);
                var promise = vm.isNewProfile ?
                    settingProfileService.createProfile(converted) :
                    settingProfileService.updateProfile(converted);
                promise.then(function (resp) {
                    alertsService.successfullySaved(resp.data.settingProfileId);
                    $state.go('settingprofiles');
                }, alertsService.errorHandler);
            }
        }

        function convertBeforeSaving(data) {
            var profile = {
                id: $stateParams.profileId,
                applicationType: $rootScope.applicationType,
                settingProfileId: data.settingProfileId,
                settingType: data.settingType,
                properties: {}
            };

            data.properties.forEach(function(pair){
                profile.properties[pair.key] = pair.value;
            });
            return profile;
        }

        function isValid(profile) {
            var missingFields = [];
            var missingPropertiesFields = [];
            if (!profile.settingProfileId) {
                missingFields.push('name');
            }
            if (!profile.settingType) {
                missingFields.push('settingType');
            }
            if (!profile.properties) {
                missingFields.push('properties');
            } else {
                for (var i = 0; i < profile.properties.length; i++) {
                    if (!profile.properties[i].key) {
                        missingPropertiesFields.push('key');
                    }
                    if (!profile.properties[i].value) {
                        missingPropertiesFields.push('value');
                    }
                    if (missingPropertiesFields.length > 0) {
                        break;
                    }
                }
            }
            if (missingFields.length > 0 || missingPropertiesFields.length > 0) {
                missingFields = missingFields.concat(missingPropertiesFields);
                alertsService.showError({
                    title: 'Error',
                    message: 'Next fields are missing: ' + missingFields.join(", ")
                });
                return false;
            }

            return true;
        }
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.settingprofile')
        .controller('SettingProfileImportController', controller);

    controller.$inject = ['$scope', '$log', 'alertsService', 'utilsService', 'importService', 'settingProfileService', 'paginationService'];

    function controller($scope, $log, alertsService, utilsService, importService, settingProfileService, paginationService) {
        var vm = this;

        vm.retrieveFile = retrieveFile;
        vm.importSettingProfile = importSettingProfile;
        vm.importAllSettingProfiles = importAllSettingProfiles;
        vm.settingProfiles = null;
        vm.wrappedSettingProfiles = null;
        vm.overwriteAll = overwriteAll;
        vm.isOverwritten = false;
        vm.progressBarControl = importService.progressBarControl;

        vm.paginationStorageKey = 'settingProfilePageSize';
        vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
        vm.pageNumber = paginationService.getPageNumber();
        vm.selectPage = selectPage;
        vm.getGeneralItemsNumber = getGeneralItemsNumber;

        $scope.$on('$locationChangeSuccess', function () {
            if (paginationService.paginationSettingsInLocationHaveChanged(vm.pageNumber, vm.pageSize)) {
                vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
                vm.pageNumber = paginationService.getPageNumber();
                selectPage();
            }
        });

        async function retrieveFile(fileName) {
            vm.settingProfiles = null;
            try {
                let file = await importService.openFile(fileName, null, this);
                vm.isOverwritten = false;
                vm.wrappedSettingProfiles = importService.prepareEntitiesFromFile(file);
                selectPage();
            } catch (e) {
                alertsService.showError({message: e});
            }
        }

        function importSettingProfile(wrappedSettingProfile) {
            var promise = wrappedSettingProfile.overwrite ?
                settingProfileService.updateProfile(wrappedSettingProfile.entity) :
                settingProfileService.createProfile(wrappedSettingProfile.entity);
            promise.then(function () {
                alertsService.successfullySaved(wrappedSettingProfile.entity.settingProfileId);
                utilsService.removeSelectedItemFromListById(vm.wrappedSettingProfiles, wrappedSettingProfile.entity.id);
            }, function (error) {
                alertsService.showError({message: error.data.message, title: 'Exception'});
            });
        }

        function importAllSettingProfiles() {
            importService.importAllEntities(settingProfileService, vm.wrappedSettingProfiles);
        }

        function overwriteAll() {
            angular.forEach(vm.wrappedSettingProfiles, function (val) {
                val.overwrite = vm.isOverwritten;
            });
        }

        function selectPage() {
            paginationService.savePaginationSettingsInLocation(vm.pageNumber, vm.pageSize);
            computeStartAndEndIndex();
        }

        function computeStartAndEndIndex() {
            vm.startIndex = (vm.pageNumber - 1) * vm.pageSize;
            vm.endIndex = vm.pageNumber * vm.pageSize;
        }

        function getGeneralItemsNumber() {
            return vm.wrappedSettingProfiles ? vm.wrappedSettingProfiles.length : 0;
        }

    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.settingprofile')
        .controller('SettingProfilesController', controller);

    controller.$inject = ['$scope', '$controller', 'settingProfileService', 'alertsService', 'utilsService', 'dialogs', 'paginationService'];

    function controller($scope, $controller, settingProfileService, alertsService, utilsService, dialogs, paginationService) {
        var vm = this;

        angular.extend(vm, $controller('MainController', {
            $scope: $scope
        }));

        vm.profiles = [];
        vm.paginationStorageKey = 'settingProfilePageSize';
        vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
        vm.pageNumber = paginationService.getPageNumber();
        vm.generalItemsNumber = 0;
        vm.searchParam = {};
        vm.searchOptions = {
            data: [
                {
                    "name": {
                        friendlyName: "Name",
                        apiArgs: ['NAME']
                    }
                },
                {
                    "name": {
                        friendlyName: "Type",
                        apiArgs: ["TYPE"]
                    }
                }
            ]
        };

        vm.startParse = startParse;
        vm.getGeneralItemsNumber = getGeneralItemsNumber;
        vm.shiftItems = shiftItems;
        vm.deleteProfile = deleteProfile;
        vm.exportOne = settingProfileService.exportOne;
        vm.exportAll = settingProfileService.exportAll;
        vm.getProfiles = getProfiles;
        vm.isDataLoading = false;
        init();

        function init() {
            getProfiles();
        }

        $scope.$on('$locationChangeSuccess', function () {
            if (paginationService.paginationSettingsInLocationHaveChanged(vm.pageNumber, vm.pageSize)) {
                vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
                vm.pageNumber = paginationService.getPageNumber();
                init();
            }
        });

        $scope.$on('search-entities', function(event, data) {
            vm.searchParam = data.searchParam;
            getProfiles();
        });

        function getProfiles() {
            vm.isDataLoading = true;
            settingProfileService.getProfiles(vm.pageNumber, vm.pageSize, vm.searchParam)
                .then(function (result) {
                    vm.isDataLoading = false;
                    vm.profiles = result.data;
                    vm.generalItemsNumber = result.headers('numberOfItems');
                    paginationService.savePaginationSettingsInLocation(vm.pageNumber, vm.pageSize);
                }, function (error) {
                    vm.isDataLoading = false;
                    alertsService.showError({title: 'Error', message: 'Error by loading setting profiles'});
                });
        }

        function deleteProfile(profile) {
            if (profile.id) {
                var dialog = dialogs.confirm('Delete confirmation', '<span class="break-word-inline"> Are you sure you want to delete Setting Profile ' + profile.settingProfileId + ' ? </span>');
                dialog.result.then(function (btn) {
                    settingProfileService.deleteProfile(profile.id)
                        .then(function () {
                            utilsService.removeItemFromArray(vm.profiles, profile);
                            alertsService.successfullyDeleted(profile.settingProfileId);
                            shiftItems();
                        }, function (error) {
                            alertsService.showError({message: error.data.message});
                        });
                });
            }
        }

        function searchProfileByName() {
            settingProfileService.searchProfileByName(vm.searchName, vm.pageNumber, vm.pageSize)
                .then(function (result) {
                    vm.profiles = result.data;
                    vm.generalItemsNumber = result.headers('numberOfItems');
                    paginationService.savePaginationSettingsInLocation(vm.pageNumber, vm.pageSize);
                }, function (error) {
                    alertsService.showError({title: 'Error', message: 'Error by loading setting profiles'});
                });
        }

        function shiftItems() {
            var numberOfPagesAfterDeletion = Math.ceil((getGeneralItemsNumber() - 1) / vm.pageSize);
            vm.pageNumber = (vm.pageNumber > numberOfPagesAfterDeletion && numberOfPagesAfterDeletion > 0) ? numberOfPagesAfterDeletion : vm.pageNumber;
            getProfiles();
        }

        function startParse() {
            return getGeneralItemsNumber() > 0;
        }

        function getGeneralItemsNumber() {
            return vm.generalItemsNumber;
        }
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .controller('SettingRuleEditController', controller);

    controller.$inject=['$rootScope', '$scope', '$state', '$stateParams', '$controller', 'alertsService', 'ruleHelperService', 'settingRuleService', 'settingProfileService', 'ruleValidationService', 'ruleConditionService','SETTING_RULE_OPERATION_ARRAY', 'LOG_UPLOAD_FREE_ARG_AUTOCOMPLETE_VALUE', 'FREE_ARG_NAME'];

    function controller($rootScope, $scope, $state, $stateParams, $controller, alertsService, ruleHelperService, settingRuleService, settingProfileService, ruleValidationService, ruleConditionService, SETTING_RULE_OPERATION_ARRAY, LOG_UPLOAD_FREE_ARG_AUTOCOMPLETE_VALUE, FREE_ARG_NAME) {
        var vm = this;

        angular.extend(vm, $controller('EditController', {
            $scope: $scope,
            mainPage: 'settingrules',
            stateParameters: null
        }));

        vm.isValidCondition = true;
        vm.settingRule = {
            applicationType: $rootScope.applicationType,
            rule: {},
            name:'',
            boundSettingId: ''
        };
        vm.saveRule = saveRule;
        vm.profiles = [];
        vm.namespacedListData = ruleHelperService.buildNamespacedListData();
        vm.operations = {general: SETTING_RULE_OPERATION_ARRAY};
        vm.freeArgAutocompleteValues = LOG_UPLOAD_FREE_ARG_AUTOCOMPLETE_VALUE;
        vm.validationFunction = ruleValidationService.validate;
        vm.percentFreeArgName = FREE_ARG_NAME.ESTB_MAC_ADDRESS;
        vm.representation = ruleHelperService.buildRepresentation();
        vm.ipMacIsConditionLimit = "";

        init();

        function init() {

            settingProfileService.getAll()
                .then(function (resp) {
                    vm.profiles = resp.data;
                }, alertsService.errorHandler);

            if ($stateParams.ruleId) {
                settingRuleService.getRule($stateParams.ruleId)
                    .then(function (resp) {
                        vm.settingRule = resp.data;
                    }, alertsService.errorHandler);
            }

            $scope.$root.$on("rule::remove", function (e, obj) {
                var watchResult = ruleHelperService.watchRuleRemoveOperation(vm.isValidCondition, vm.settingRule.rule, obj);
                vm.settingRule.rule = watchResult.rule;
                vm.isValidCondition = watchResult.isValidCondition;
            });

            ruleConditionService.getIpMacIsConditionLimit().then(function(resp) {
                vm.ipMacIsConditionLimit = resp.data.ipMacIsConditionLimit;
            })
        }

        function saveRule() {
            if (validateRule(vm.settingRule)) {
                var promise = (vm.settingRule.id) ?
                    settingRuleService.updateRule(vm.settingRule) :
                    settingRuleService.createRule(vm.settingRule);

                promise.then(function (resp) {
                    alertsService.successfullySaved(resp.data.name);
                    $state.go('settingrules');
                }, alertsService.errorHandler);
            }
        }

        function validateRule(rule) {
            var emptyFields = [];
            if (!rule.rule.condition && !rule.rule.compoundParts) {
                 emptyFields.push('condition');
            }
            if (!rule.name) {
                emptyFields.push('name');
            }
            if (!rule.boundSettingId) {
                emptyFields.push('setting profile');
            }

            if (emptyFields.length > 0) {
                alertsService.showError({title: 'Error', message: 'Next fields are empty: ' + emptyFields.join(", ")});
                return false;
            }
            return true;
        }
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.settingrule')
        .controller('SettingRuleImportController', controller);

    controller.$inject = ['$scope', '$log', 'alertsService', 'utilsService', 'importService', 'settingRuleService', 'settingProfileService', 'paginationService'];

    function controller($scope, $log, alertsService, utilsService, importService, settingRuleService, settingProfileService, paginationService) {
        var vm = this;

        vm.retrieveFile = retrieveFile;
        vm.importSettingRule = importSettingRule;
        vm.importAllSettingRules = importAllSettingRules;
        vm.settingRules = null;
        vm.wrappedSettingRules = null;
        vm.overwriteAll = overwriteAll;
        vm.isOverwritten = false;
        vm.profiles = [];
        vm.progressBarControl = importService.progressBarControl;

        vm.paginationStorageKey = 'settingRulePageSize';
        vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
        vm.pageNumber = paginationService.getPageNumber();
        vm.selectPage = selectPage;
        vm.getGeneralItemsNumber = getGeneralItemsNumber;

        $scope.$on('$locationChangeSuccess', function () {
            if (paginationService.paginationSettingsInLocationHaveChanged(vm.pageNumber, vm.pageSize)) {
                vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
                vm.pageNumber = paginationService.getPageNumber();
                selectPage();
            }
        });

        init();

        function init() {
            settingProfileService.getAll()
                .then(function (resp) {
                    vm.profiles = resp.data;
                }, function (error) {
                    alertsService.showError({title: 'Error', message: error.data});
                });
        }

        async function retrieveFile(fileName) {
            vm.settingRules = null;
            try {
                let file = await importService.openFile(fileName, null, this);
                vm.isOverwritten = false;
                vm.wrappedSettingRules = importService.prepareEntitiesFromFile(file);
                selectPage();
            } catch (e) {
                alertsService.showError({message: e});
            }
        }

        function importSettingRule(wrappedSettingRule) {
            if (validateSettingRule(wrappedSettingRule.entity)) {
                var promise = (wrappedSettingRule.overwrite) ?
                    settingRuleService.updateRule(wrappedSettingRule.entity) :
                    settingRuleService.createRule(wrappedSettingRule.entity);
                promise.then(function () {
                    alertsService.successfullySaved(wrappedSettingRule.entity.name);
                    utilsService.removeSelectedItemFromListById(vm.wrappedSettingRules, wrappedSettingRule.entity.id);
                }, function (error) {
                    alertsService.showError({message: error.data.message, title: 'Exception'});
                });
            }
        }

        function importAllSettingRules() {
            importService.importAllEntities(settingRuleService, vm.wrappedSettingRules);
        }


        function overwriteAll() {
            angular.forEach(vm.wrappedSettingRules, function (val) {
                val.overwrite = vm.isOverwritten;
            });
        }

        function validateSettingRule(settingRule) {
            var missingFields = [];
            if (!settingRule.id) {
                missingFields.push('rule id');
            }
            if (!settingRule.boundSettingId) {
                missingFields.push('profile id');
            }
            if (!settingRule.name) {
                missingFields.push('rule name');
            }
            if (settingRule.rule.compoundParts && settingRule.rule.compoundParts.length === 0 && !settingRule.rule.condition) {
                missingFields.push('condition');
            }

            if (missingFields.length > 0) {
                alertsService.showError({
                    title: 'ValidationException',
                    message: 'Next fields are missing: ' + missingFields.join(', ')
                });
                return false;
            }
            return true;
        }

        function selectPage() {
            paginationService.savePaginationSettingsInLocation(vm.pageNumber, vm.pageSize);
            computeStartAndEndIndex();
        }

        function computeStartAndEndIndex() {
            vm.startIndex = (vm.pageNumber - 1) * vm.pageSize;
            vm.endIndex = vm.pageNumber * vm.pageSize;
        }

        function getGeneralItemsNumber() {
            return vm.wrappedSettingRules ? vm.wrappedSettingRules.length : 0;
        }
    }
})();


/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .controller('SettingRulesController', controller);

    controller.$inject = ['$scope', '$controller', 'alertsService', 'utilsService', 'dialogs', 'settingRuleService', 'settingProfileService', 'paginationService', 'ruleHelperService', 'RULE_SEARCH_OPTIONS'];

    function controller($scope, $controller, alertsService, utilsService, dialogs, settingRuleService, settingProfileService, paginationService, ruleHelperService, RULE_SEARCH_OPTIONS) {
        var vm = this;

        angular.extend(vm, $controller('MainController', {
            $scope: $scope
        }));

        vm.rules = [];
        vm.deleteRule = deleteRule;
        vm.profiles = [];
        vm.exportOne = settingRuleService.exportOne;
        vm.exportAll = settingRuleService.exportAll;
        vm.searchParam = {};
        vm.searchOptions = RULE_SEARCH_OPTIONS;
        vm.getRules = getRules;

        vm.paginationStorageKey = 'settingRulePageSize';
        vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
        vm.pageNumber = paginationService.getPageNumber();
        vm.generalItemsNumber = 0;
        vm.startParse = startParse;
        vm.getGeneralItemsNumber = getGeneralItemsNumber;
        vm.shiftItems = shiftItems;
        vm.isDataLoading = false;

        init();

        function init() {
            settingProfileService.getAll().then(
                function (resp) {
                    vm.profiles = resp.data;
                    getRules();
                }, function (error) {
                    alertsService.showError({title: 'Error', message: error.data.message});
                });
        }

        $scope.$on('$locationChangeSuccess', function () {
            if (paginationService.paginationSettingsInLocationHaveChanged(vm.pageNumber, vm.pageSize)) {
                vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
                vm.pageNumber = paginationService.getPageNumber();
                init();
            }
        });
        $scope.$on('search-entities', function(event, data) {
            vm.searchParam = data.searchParam;
            getRules();
        });

        function getRules() {
            vm.isDataLoading = true;
            settingRuleService.getRules(vm.pageNumber, vm.pageSize, vm.searchParam)
                .then(function (result) {
                        vm.isDataLoading = false;
                        vm.rules = result.data;
                        vm.generalItemsNumber = result.headers('numberOfItems');
                        paginationService.savePaginationSettingsInLocation(vm.pageNumber, vm.pageSize);
                    },
                    function (error) {
                        vm.isDataLoading = false;
                        alertsService.showError({title: 'Error', message: error.data.message});
                    }
                );
        }

        function deleteRule(rule) {
            if (rule && rule.id) {
                var dialog = dialogs.confirm('Delete confirmation', '<span class="break-word-inline"> Are you sure you want to delete Setting rule ' + rule.name + ' ? </span>');
                dialog.result.then(function (btn) {
                    settingRuleService.deleteRule(rule.id)
                        .then(function () {
                            utilsService.removeItemFromArray(vm.rules, rule);
                            alertsService.successfullyDeleted(rule.name);
                            shiftItems();
                        }, function (error) {
                            alertsService.showError({title: 'Error', message: error.data.message});
                        });
                });
            }
        }

        function shiftItems() {
            var numberOfPagesAfterDeletion = Math.ceil((getGeneralItemsNumber() - 1) / vm.pageSize);
            vm.pageNumber = (vm.pageNumber > numberOfPagesAfterDeletion && numberOfPagesAfterDeletion > 0) ? numberOfPagesAfterDeletion : vm.pageNumber;
            getRules();
        }

        function startParse() {
            return getGeneralItemsNumber() > 0;
        }

        function getGeneralItemsNumber() {
            return vm.generalItemsNumber;
        }
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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

    angular.module('app.settingsTestPage').controller('SettingsTestPageController', controller)

    controller.$inject = ['utilsService', 'settingsTestPageService', 'alertsService'];

    function controller(utilsService, settingsTestPageService, alertsService) {
        var vm = this;
        vm.settingsType = [
            {"name": 'EPON', "value": "epon"},
            {"name": 'PARTNER SETTINGS', "value": "partnersettings"}
        ];
        vm.selectedTypes = [];
        vm.parameters = [{key: '', value: ''}];
        vm.autoCompleteValues = null;
        vm.quickAddValues = [];
        vm.matchRules = matchRules;
        vm.getProfileById = getProfileById;

        function getProfileById(id) {
            var profile = settingsTestPageService.findProfileById(vm.profiles, id);
            return profile ? profile.settingProfileId : null;
        }

        function matchRules() {
            vm.profiles = null
            vm.matchedRules = null;
            vm.context = null;

            if (validateInput()) {
                settingsTestPageService.getMatchRules(vm.selectedTypes, vm.parameters).then(
                    function(result) {
                        vm.profiles = result.data.profiles
                        vm.matchedRules = result.data.result;
                        vm.context = result.data.context;
                    }, function(reason) {
                        alertsService.showError({title: 'Error', message: reason.data.message});
                    }
                );
            }
        }

        function validateInput() {
            var isInputValid = true;
            vm.parameters.forEach(function (item) {
                if (utilsService.isNullOrUndefinedOrEmptyOrWhiteSpaceString(item.key)) {
                    isInputValid = false;
                }
            });
            if (!isInputValid) {
                alertsService.showError({title: 'Error', message: 'Key is required'});
            }
            return isInputValid;
        }

    };
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.permanentprofile')
        .controller('PermanentProfileEditController', controller);

    controller.$inject = ['$rootScope', '$scope', '$controller', 'PROTOCOL', 'permanentProfileService', '$stateParams', '$state', 'alertsService', 'utilsService'];

    function controller($rootScope, $scope, $controller, PROTOCOL, permanentProfileService, $stateParams, $state, alertsService, utilsService) {
        var vm = this;

        angular.extend(vm, $controller('EditController', {
            $scope: $scope,
            mainPage: 'permanentprofiles',
            stateParameters: null
        }));

        vm.protocols = PROTOCOL;
        vm.profile = null;
        vm.isNewProfile = true;

        vm.addProfileEntry = addProfileEntry;
        vm.removeProfileEntry = removeProfileEntry;
        vm.save = save;
        init();

        function init() {
            if ($stateParams.profileId) {
                vm.isNewProfile = false;
                permanentProfileService.getProfile($stateParams.profileId)
                    .then(function(resp) {
                            if (resp) {
                                vm.profile = resp.data;
                            }
                        }, alertsService.errorHandler);
            } else {
                vm.isNewProfile = true;
                vm.profile = {
                    applicationType: $rootScope.applicationType,
                    schedule: '',
                    'telemetryProfile:name': '',
                    'uploadRepository:URL': '',
                    'uploadRepository:uploadProtocol': '',
                    telemetryProfile: [{
                        content: '',
                        header: '',
                        pollingFrequency: '',
                        type: '',
                        component: ''
                    }]
                }
            }
        }

        function addProfileEntry() {
            var telemetryProfile = {
                content: '',
                header: '',
                pollingFrequency: '',
                type: '',
                component:''
            };
            vm.profile.telemetryProfile.push(telemetryProfile);
        }

        function removeProfileEntry(entry) {
            utilsService.removeItemFromArray(vm.profile.telemetryProfile, entry);
        }
        vm.isSaving = false;
        function save() {
            if (isValid(vm.profile)) {
                vm.isSaving = true;
                if (vm.isNewProfile) {
                    permanentProfileService.createProfile(vm.profile).then(handleSuccessfulResponse, function(error) {
                        alertsService.errorHandler(error);
                        vm.isSaving = false;
                    });
                } else {
                    permanentProfileService.updateProfile(vm.profile).then(handleSuccessfulResponse, function(error) {
                        alertsService.errorHandler(error);
                        vm.isSaving = false;
                    });
                }
            }
        }
        

        function isValid(profile) {
            var missingFields = [];
            var missingTelemetryEntryFields = [];
            if (!profile['telemetryProfile:name']) {
                missingFields.push('name');
            }
            if (!profile['uploadRepository:URL']) {
                missingFields.push('upload repository URL');
            }
            if (!profile['uploadRepository:uploadProtocol']) {
                missingFields.push('upload repository protocol');
            }
            if (!profile.schedule) {
                missingFields.push('schedule');
            }
            if (!profile.telemetryProfile) {
                missingFields.push('telemetryProfile');
            } else {
                for (var i = 0; i < profile.telemetryProfile.length; i++) {
                    if(!profile.telemetryProfile[i].content) {
                        missingTelemetryEntryFields.push('content');
                    }
                    if (!profile.telemetryProfile[i].header) {
                        missingTelemetryEntryFields.push('header');
                    }
                    if (!profile.telemetryProfile[i].type) {
                        missingTelemetryEntryFields.push('type');
                    }
                    if (!profile.telemetryProfile[i].pollingFrequency) {
                        missingTelemetryEntryFields.push('polling frequency');
                    }
                    if (missingTelemetryEntryFields.length > 0) {
                        break;
                    }
                }
            }
            if (missingFields.length > 0 || missingTelemetryEntryFields.length > 0) {
                missingFields = missingFields.concat(missingTelemetryEntryFields);
                alertsService.showError({title: 'Error', message: 'Next fields are missing: ' + missingFields.join(", ")});
                return false;
            }

            return true;
        }

        function handleSuccessfulResponse(response) {
            vm.isSaving = false;
            var addedToPending = response.data;
            if (addedToPending) {
                alertsService.showSuccessMessage({message: vm.profile['telemetryProfile:name'] + ' profile added to the pending changes'});
            } else {
                alertsService.showSuccessMessage({message: vm.profile['telemetryProfile:name'] + ' profile updated'});
            }
            $state.go('permanentprofiles');
        }
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.permanentprofile')
        .controller('PermanentProfileImportController', controller);

    controller.$inject=['$scope', '$log', '$uibModal', 'alertsService', 'utilsService', 'importService', 'permanentProfileService', 'paginationService'];

    function controller($scope, $log, $modal, alertsService, utilsService, importService, permanentProfileService, paginationService) {
        var vm = this;

        vm.retrieveFile = retrieveFile;
        vm.importPermanentProfile = importPermanentProfile;
        vm.importAllPermanentProfiles = importAllPermanentProfiles;
        vm.permanentProfiles = null;
        vm.wrappedPermanentProfiles = null;
        vm.overwriteAll = overwriteAll;
        vm.isOverwritten = false;
        vm.viewPermanentProfile = viewPermanentProfile;
        vm.paginationStorageKey = 'permanentProfilePageSize';
        vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
        vm.pageNumber = paginationService.getPageNumber();
        vm.selectPage = selectPage;
        vm.getGeneralItemsNumber = getGeneralItemsNumber;
        vm.progressBarControl = importService.progressBarControl;

        $scope.$on('$locationChangeSuccess', function () {
            if (paginationService.paginationSettingsInLocationHaveChanged(vm.pageNumber, vm.pageSize)) {
                vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
                vm.pageNumber = paginationService.getPageNumber();
                selectPage();
            }
        });

        async function retrieveFile(fileName) {
            vm.permanentProfiles = null;
            try {
                let file = await importService.openFile(fileName, null, this);
                vm.isOverwritten = false;
                vm.wrappedPermanentProfiles = importService.prepareEntitiesFromFile(file);
                selectPage();
            } catch (e) {
                alertsService.showError({message: e});
            }
        }

        function importPermanentProfile(wrappedPermanentProfile) {
            if (wrappedPermanentProfile.overwrite) {
                permanentProfileService.updateProfile(wrappedPermanentProfile.entity)
                    .then(function (resp) {
                        handleSuccessfulUpdate(resp, wrappedPermanentProfile.entity);
                        utilsService.removeSelectedItemFromListById(vm.wrappedPermanentProfiles, wrappedPermanentProfile.entity.id);
                    }, function (error) {
                        alertsService.showError({message: error.data.message, title: 'Exception'});
                    });
            } else {
                permanentProfileService.createProfile(wrappedPermanentProfile.entity)
                    .then(function () {
                        alertsService.showSuccessMessage({message: wrappedPermanentProfile.entity['telemetryProfile:name'] + ' profile added to the pending changes'});
                        utilsService.removeSelectedItemFromListById(vm.wrappedPermanentProfiles, wrappedPermanentProfile.entity.id);
                    }, function (error) {
                        alertsService.showError({message: error.data.message, title: 'Exception'});
                    });
            }
        }

        function importAllPermanentProfiles() {
            importService.importAllEntities(permanentProfileService, vm.wrappedPermanentProfiles);
        }

        function viewPermanentProfile(permanentProfile) {
            $modal.open({
                controller: 'PermanentProfileViewController as vm',
                templateUrl: 'app/xconf/telemetry/permanentprofile/permanentprofile.view.html',
                windowClass: 'modal-custom-lg',
                size: 'lg',
                resolve: {
                    permanentProfile: function () {
                        return permanentProfile;
                    }
                }
            });
        }

        function overwriteAll() {
            angular.forEach(vm.wrappedPermanentProfiles, function (val) {
                val.overwrite = vm.isOverwritten;
            });
        }

        function selectPage() {
            paginationService.savePaginationSettingsInLocation(vm.pageNumber, vm.pageSize);
            computeStartAndEndIndex();
        }

        function computeStartAndEndIndex() {
            vm.startIndex = (vm.pageNumber - 1) * vm.pageSize;
            vm.endIndex = vm.pageNumber * vm.pageSize;
        }

        function getGeneralItemsNumber() {
            return vm.wrappedPermanentProfiles ? vm.wrappedPermanentProfiles.length : 0;
        }

        function handleSuccessfulUpdate(response, profile) {
            var addedToPending = response.data;
            if (addedToPending) {
                alertsService.showSuccessMessage({message: profile['telemetryProfile:name'] + ' profile added to the pending changes'});
            } else {
                alertsService.showSuccessMessage({message: profile['telemetryProfile:name'] + ' profile updated'});
            }
        }
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.permanentprofile')
        .controller('PermanentProfileViewController', controller);

    controller.$inject=['$uibModalInstance', 'permanentProfile'];

    function controller($modalInstance, permanentProfile) {
        var vm = this;
        vm.permanentProfile = permanentProfile;
        vm.close = close;

        function close() {
            $modalInstance.dismiss();
        }
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.permanentprofile')
        .controller('PermanentProfilesController', controller);

    controller.$inject = ['$scope', '$controller', 'permanentProfileService', 'alertsService', 'utilsService', 'dialogs', '$log', 'paginationService', 'changeService'];

    function controller($scope, $controller, permanentProfileService, alertsService, utilsService, dialogs, $log, paginationService, changeService) {
        var vm = this;

        angular.extend(vm, $controller('MainController', {
            $scope: $scope
        }));

        vm.profiles = [];
        vm.paginationStorageKey = 'permanentProfilePageSize';
        vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
        vm.pageNumber = paginationService.getPageNumber();
        vm.generalItemsNumber = 0;
        vm.searchParam = {};
        vm.searchOptions = {
            data: [
                {
                    "name": {
                        friendlyName: "Name",
                        apiArgs: ['NAME']
                    }
                }
            ]
        };
        vm.changedEntityIds = [];

        vm.startParse = startParse;
        vm.getGeneralItemsNumber = getGeneralItemsNumber;
        vm.shiftItems = shiftItems;
        vm.deleteProfile = deleteProfile;
        vm.exportOne = permanentProfileService.exportOne;
        vm.exportAll = permanentProfileService.exportAll;
        vm.getProfiles = getProfiles;
        vm.hasPendingChange = hasPendingChange;
        vm.isDataLoading = false;
        init();

        function init() {
            getProfiles();
            getChangedEntityIds();
        }

        $scope.$on('$locationChangeSuccess', function () {
            if (paginationService.paginationSettingsInLocationHaveChanged(vm.pageNumber, vm.pageSize)) {
                vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
                vm.pageNumber = paginationService.getPageNumber();
                init();
            }
        });

        $scope.$on('search-entities', function(event, data) {
            vm.searchParam = data.searchParam;
            getProfiles();
        });

        function getChangedEntityIds() {
            changeService.getChangedEntityIds().then(function(resp) {
                vm.changedEntityIds = resp.data;
            }, alertsService.errorHandler);
        }

        function getProfiles() {
            vm.isDataLoading = true;
            permanentProfileService.getProfiles(vm.pageNumber, vm.pageSize, vm.searchParam).then(function(result) {
                    vm.isDataLoading = false;
                    vm.profiles = result.data;
                    vm.generalItemsNumber = result.headers('numberOfItems');
                    paginationService.savePaginationSettingsInLocation(vm.pageNumber, vm.pageSize);
                },
                function(error) {
                    vm.isDataLoading = false;
                    alertsService.showError({title: 'Error', message: 'Error by loading permanent profiles'});
                });
        }

        function deleteProfile(profile) {
            if (profile.id) {
                var dialog = dialogs.confirm('Delete confirmation', '<span class="break-word-inline"> Are you sure you want to delete ' + profile['telemetryProfile:name'] + ' Permanent Profile? </span>');
                dialog.result.then(function (btn) {
                    permanentProfileService.deleteProfile(profile.id).then(function(resp) {
                            alertsService.showSuccessMessage({title: 'Success', message: 'Delete change of ' + profile['telemetryProfile:name'] + ' profile saved to pending changes'});
                            getChangedEntityIds()
                        }, function(error) {
                            alertsService.showError({title: 'Error', message: error.data.message});
                        });
                });
            }
        }

        function shiftItems() {
            var numberOfPagesAfterDeletion = Math.ceil((getGeneralItemsNumber() - 1) / vm.pageSize);
            vm.pageNumber = (vm.pageNumber > numberOfPagesAfterDeletion && numberOfPagesAfterDeletion > 0) ? numberOfPagesAfterDeletion : vm.pageNumber;
            getProfiles();
        }

        function startParse() {
            return getGeneralItemsNumber() > 0;
        }

        function getGeneralItemsNumber() {
            return vm.generalItemsNumber;
        }

        function hasPendingChange(profileId) {
            return vm.changedEntityIds.includes(profileId);
        }
    }
})();

/*******************************************************************************
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 *******************************************************************************/
(function() {
    'use strict';

    angular
        .module('app.targetingrule')
        .controller('TargetingRuleEditController', controller);

    controller.$inject=['$rootScope', '$scope', '$controller', '$state', '$stateParams', 'alertsService', 'ruleHelperService', 'targetingRuleService', 'permanentProfileService', 'namespacedListService', 'TARGETING_RULE_OPERATION_ARRAY', 'LOG_UPLOAD_FREE_ARG_AUTOCOMPLETE_VALUE', 'FREE_ARG_NAME', 'ruleValidationService', 'ruleConditionService'];

    function controller($rootScope, $scope, $controller, $state, $stateParams, alertsService, ruleHelperService, targetingRuleService, permanentProfileService, namespacedListService, TARGETING_RULE_OPERATION_ARRAY, LOG_UPLOAD_FREE_ARG_AUTOCOMPLETE_VALUE, FREE_ARG_NAME, ruleValidationService, ruleConditionService) {
        var vm = this;

        angular.extend(vm, $controller('EditController', {
            $scope: $scope,
            mainPage: 'targetingrules',
            stateParameters: null
        }));

        vm.targetingRule = {
            "rule": {
                applicationType: $rootScope.applicationType,
                name:'',
                boundTelemetryId: ''
            }
        };
        vm.saveTargetingRule = saveTargetingRule;
        vm.namespacedListIds = [];
        vm.profiles = [];
        vm.namespacedListData = ruleHelperService.buildNamespacedListData();
        vm.operations = {general: TARGETING_RULE_OPERATION_ARRAY};
        vm.freeArgAutocompleteValues = LOG_UPLOAD_FREE_ARG_AUTOCOMPLETE_VALUE;
        vm.validationFunction = ruleValidationService.validate;
        vm.percentFreeArgName = FREE_ARG_NAME.ESTB_MAC_ADDRESS;
        vm.representation = ruleHelperService.buildRepresentation();
        vm.ipMacIsConditionLimit = "";
        init();

        function init() {

            permanentProfileService.getAll()
                .then(function(resp) {
                    vm.profiles = resp.data;
                }, alertsService.errorHandler);

            namespacedListService.getNamespacedListIds().then(function(resp) {
                vm.namespacedListIds = resp;
            }, alertsService.errorHandler);

            if ($stateParams.ruleId) {
                targetingRuleService.getById($stateParams.ruleId).then(function(resp) {
                    vm.targetingRule.rule = resp.data;
                }, alertsService.errorHandler);
            }

            $scope.$root.$on("rule::remove", function(e, obj) {
                var rule = vm.targetingRule.rule;
                if (ruleHelperService.isCompound(rule)) {
                    var compoundParts = rule.compoundParts || [];
                    for (var i = 0; i < compoundParts.length; i++) {
                        var currentRule = compoundParts[i];
                        if (currentRule === obj.rule) {
                            if (i === 0) {
                                $.extend(rule, ruleHelperService.createEmptyRule());
                            } else {
                                compoundParts.splice(i, 1);
                                if (compoundParts.length === 1) {
                                    var clonedFeatureRule = angular.copy(rule);
                                    $.extend(clonedFeatureRule, compoundParts[0]);
                                    vm.targetingRule.rule = clonedFeatureRule;
                                }
                            }
                            if (rule.compoundParts.length === 0 && !rule.condition) {
                                vm.isValidCondition = false;
                            }
                            return;
                        }
                    }
                } else {
                    if (obj.rule === rule) {
                        $.extend(rule, ruleHelperService.createEmptyRule());
                        vm.isValidCondition = false;
                    }
                }
            });
            ruleConditionService.getIpMacIsConditionLimit().then(function(resp) {
                vm.ipMacIsConditionLimit = resp.data.ipMacIsConditionLimit;
            })

        }
        vm.isSaving = false;
        function saveTargetingRule() {
            if (validateRule(vm.targetingRule.rule)) {
                if (vm.targetingRule.rule.id) {
                    vm.isSaving = true;
                    targetingRuleService.update(vm.targetingRule.rule).then(function (resp) {
                        alertsService.successfullySaved(resp.data.name);
                        $state.go('targetingrules');
                    }, function (error) {
                        vm.isSaving = false;
                        alertsService.errorHandler(error);
                    });
                } else {
                    vm.isSaving = true;
                    targetingRuleService.create(vm.targetingRule.rule).then(function (resp) {
                        alertsService.successfullySaved(resp.data.name);
                        $state.go('targetingrules');
                    }, function (error) {
                        vm.isSaving = false;
                        alertsService.errorHandler(error);
                    });
                }
            }
        }
        

        function validateRule(rule) {
            var emptyFields = [];
            if (!rule.condition && !rule.compoundParts) {
                 emptyFields.push('condition');
            }
            if (!rule.name) {
                emptyFields.push('name');
            }
            if (!rule.boundTelemetryId) {
                emptyFields.push('telemetry profile');
            }

            if (emptyFields.length > 0) {
                alertsService.showError({title: 'Error', message: 'Next fields are empty: ' + emptyFields.join(", ")});
                return false;
            }
            return true;
        }
    }
})();

/* 
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .controller('TargetingRuleImportController', controller);

    controller.$inject = ['$scope', '$log', 'alertsService', 'utilsService', 'importService', 'targetingRuleService', 'permanentProfileService', 'paginationService'];

    function controller($scope, $log, alertsService, utilsService, importService, targetingRuleService, permanentProfileService, paginationService) {
        var vm = this;

        vm.retrieveFile = retrieveFile;
        vm.importTargetingRule = importTargetingRule;
        vm.importAllTargetingRules = importAllTargetingRules;
        vm.targetingRules = null;
        vm.wrappedTargetingRules = null;
        vm.overwriteAll = overwriteAll;
        vm.isOverwritten = false;
        vm.profiles = [];
        vm.paginationStorageKey = 'targetingRulePageSize';
        vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
        vm.pageNumber = paginationService.getPageNumber();
        vm.selectPage = selectPage;
        vm.getGeneralItemsNumber = getGeneralItemsNumber;
        vm.progressBarControl = importService.progressBarControl;

        $scope.$on('$locationChangeSuccess', function () {
            if (paginationService.paginationSettingsInLocationHaveChanged(vm.pageNumber, vm.pageSize)) {
                vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
                vm.pageNumber = paginationService.getPageNumber();
                selectPage();
            }
        });

        init();

        function init() {
            permanentProfileService.getAll()
                .then(function(resp) {
                    vm.profiles = resp.data;
                }, function(error) {
                    alertsService.showError({title: 'Error', message: error.data.message});
                });
        }

        async function retrieveFile(fileName) {
            vm.targetingRules = null;
            try {
                let file = await importService.openFile(fileName, null, this);
                vm.isOverwritten = false;
                vm.wrappedTargetingRules = importService.prepareEntitiesFromFile(file);
                selectPage();
            } catch (e) {
                alertsService.showError({message: e});
            }
        }

        function importTargetingRule(wrappedTargetingRule) {
            if (validateTargetingRule(wrappedTargetingRule.entity)) {
                if (wrappedTargetingRule.overwrite) {
                    targetingRuleService.update(wrappedTargetingRule.entity).then(function () {
                        alertsService.successfullySaved(wrappedTargetingRule.entity.name);
                        utilsService.removeSelectedItemFromListById(vm.wrappedTargetingRules, wrappedTargetingRule.entity.id);
                    }, function (error) {
                        alertsService.showError({message: error.data.message, title: 'Exception'});
                    });
                } else {
                    targetingRuleService.create(wrappedTargetingRule.entity).then(function () {
                        alertsService.successfullySaved(wrappedTargetingRule.entity.name);
                        utilsService.removeSelectedItemFromListById(vm.wrappedTargetingRules, wrappedTargetingRule.entity.id);
                    }, function (error) {
                        alertsService.showError({message: error.data.message, title: 'Exception'});
                    });
                }
            }
        }

        function importAllTargetingRules() {
            importService.importAllEntities(targetingRuleService, vm.wrappedTargetingRules);
        }


        function overwriteAll() {
            angular.forEach(vm.wrappedTargetingRules, function (val) {
                val.overwrite = vm.isOverwritten;
            });
        }

        function validateTargetingRule(targetingRule) {
            var missingFields = [];
            if (!targetingRule.id) {
                missingFields.push('rule id');
            }
            if (!targetingRule.boundTelemetryId) {
                missingFields.push('profile id');
            }
            if (!targetingRule.name) {
                missingFields.push('rule name');
            }
            if ((!targetingRule.compoundParts && !targetingRule.condition)
                || (!targetingRule.condition && targetingRule.compoundParts && targetingRule.compoundParts.length === 0)) {
                missingFields.push('condition');
            }

            if (missingFields.length > 0) {
                alertsService.showError({title: 'ValidationException', message: 'Next fields are missing: ' + missingFields.join(', ')});
                return false;
            }
            return true;
        }

        function selectPage() {
            paginationService.savePaginationSettingsInLocation(vm.pageNumber, vm.pageSize);
            computeStartAndEndIndex();
        }

        function computeStartAndEndIndex() {
            vm.startIndex = (vm.pageNumber - 1) * vm.pageSize;
            vm.endIndex = vm.pageNumber * vm.pageSize;
        }

        function getGeneralItemsNumber() {
            return vm.wrappedTargetingRules ? vm.wrappedTargetingRules.length : 0;
        }
    }
})();


/*******************************************************************************
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 *******************************************************************************/
(function() {
    'use strict';

    angular
        .module('app.targetingrule')
        .controller('TargetingRulesController', controller);

    controller.$inject = ['$scope', '$controller', 'targetingRuleService', 'alertsService', 'utilsService', 'dialogs', 'permanentProfileService', 'paginationService'];

    function controller($scope, $controller, targetingRuleService, alertsService, utilsService, dialogs, permanentProfileService, paginationService) {
        var vm = this;

        angular.extend(vm, $controller('MainController', {
            $scope: $scope
        }));

        vm.rules = [];
        vm.deleteRule = deleteRule;
        vm.profiles = [];
        vm.exportOne = targetingRuleService.exportOne;
        vm.exportAll = targetingRuleService.exportAll;
        vm.searchParam = {};
        vm.searchOptions =  {
            data: [
                {
                    "name": {
                        friendlyName: "Name",
                        apiArgs: ["NAME"]
                    }
                },
                {
                    "name": {
                        friendlyName: 'Key',
                        apiArgs: ['FREE_ARG']
                    }
                },
                {
                    "name": {
                        friendlyName: 'Value',
                        apiArgs: ['FIXED_ARG']
                    }
                },
                {
                    "name": {
                        friendlyName: 'Key and Value',
                        apiArgs: ['FREE_ARG', 'FIXED_ARG']
                    }
                },
                {
                    "name": {
                        friendlyName: "Profile",
                        apiArgs: ["PROFILE"]
                    }
                }
            ]
    
        };
        vm.getRules = getRules;
        vm.paginationStorageKey = 'targetingRulePageSize';
        vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
        vm.pageNumber = paginationService.getPageNumber();
        vm.generalItemsNumber = 0;
        vm.startParse = startParse;
        vm.getGeneralItemsNumber = getGeneralItemsNumber;
        vm.shiftItems = shiftItems;
        vm.isDataLoading = false;

        init();

        function init() {
            getRules();
        }

        $scope.$on('$locationChangeSuccess', function () {
            if (paginationService.paginationSettingsInLocationHaveChanged(vm.pageNumber, vm.pageSize)) {
                vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
                vm.pageNumber = paginationService.getPageNumber();
                init();
            }
        });

        $scope.$on('search-entities', function(event, data) {
            vm.searchParam = data.searchParam;
            getRules();
        });

        function getRules() {
            vm.isDataLoading = true;
            targetingRuleService.getPage(vm.pageSize, vm.pageNumber, vm.searchParam)
                .then(function (result) {
                    vm.isDataLoading = false;
                    vm.rules = result.data;
                    vm.generalItemsNumber = result.headers('numberOfItems');
                    paginationService.savePaginationSettingsInLocation(vm.pageNumber, vm.pageSize);
                },
                function (error) {
                    vm.isDataLoading = false;
                    alertsService.showError({title: 'Error', message: 'Error by loading targeting rule list.'});
                }
            );
        }

        permanentProfileService.getAll()
            .then(function(resp) {
                vm.profiles = resp.data;
            }, function(error) {
                alertsService.showError({title: 'Error', message: 'Error by loading profiles.'});
            });

        function deleteRule(rule) {
            if (rule && rule.id) {
                var dialog = dialogs.confirm('Delete confirmation', '<span class="break-word-inline"> Are you sure you want to delete Targeting rule ' + rule.name + ' ? </span>');
                dialog.result.then(function (btn) {
                    targetingRuleService.deleteTargetingRule(rule.id).then(function () {
                        utilsService.removeItemFromArray(vm.rules, rule);
                        alertsService.successfullyDeleted(rule.name);
                        shiftItems();
                    }, function (error) {
                        alertsService.showError({title: 'Error', message: error.data});
                    });
                });
            }
        }

        function shiftItems() {
            var numberOfPagesAfterDeletion = Math.ceil((getGeneralItemsNumber() - 1) / vm.pageSize);
            vm.pageNumber = (vm.pageNumber > numberOfPagesAfterDeletion && numberOfPagesAfterDeletion > 0) ? numberOfPagesAfterDeletion : vm.pageNumber;
            getRules();
        }

        function startParse() {
            return getGeneralItemsNumber() > 0;
        }

        function getGeneralItemsNumber() {
            return vm.generalItemsNumber;
        }

        function searchTelemetryRulesByContext() {
            targetingRuleService.searchTelemetryRulesByContext(vm.pageSize,vm.pageNumber, vm.searchContext).then(function (resp) {
                vm.rules = resp.data;
                console.log(resp);
                vm.generalItemsNumber = resp.headers('numberOfItems');
                paginationService.savePaginationSettingsInLocation(vm.pageNumber, vm.pageSize);
            }, function (error) {
                alertsService.showError({title: 'Error', message: error.data.message});
            });
        }
    }
})();

/*******************************************************************************
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 *******************************************************************************/
 (function(){
 	'use strict';

 	angular
 		.module('app.telemetrytwoprofile')
 		.controller('TelemetryTwoProfileEditController', controller);

	controller.$inject = ['$rootScope', '$scope', '$controller', 'PROTOCOL', 'telemetryTwoProfileService', '$stateParams', '$state', 'alertsService', 'utilsService'];

	function controller($rootScope, $scope, $controller, PROTOCOL, telemetryTwoProfileService, $stateParams, $state, alertsService, utilsService){
		var vm = this;

		angular.extend(vm, $controller('EditController',{
			$scope: $scope,
			mainPage: 'telemetrytwoprofiles',
			stateParameters: null
		}));

		vm.telemetryTwoProfile = {
			applicationType: $rootScope.applicationType
		};
		vm.isNewTelemetryProfile = null;

		vm.save = save;

		init();

		function init() {
			if($stateParams.telemetryProfileId){
				vm.isNewTelemetryProfile = false;
				telemetryTwoProfileService.getTelemetryTwoProfile($stateParams.telemetryProfileId)
                .then(function(resp) {
                    if (resp) {
                        vm.telemetryTwoProfile = resp.data;
                    }
                }, alertsService.errorHandler);
			}
			else{
				vm.isNewTelemetryProfile = true
				vm.telemetryTwoProfile = {
					applicationType: $rootScope.applicationType
				}
			}
		}
		vm.isSaving = false;
		function save() {
			if (is_valid(vm.telemetryTwoProfile)) {
				if (vm.isNewTelemetryProfile) {
					vm.isSaving = true;
					telemetryTwoProfileService.createTelemetryTwoProfile(vm.telemetryTwoProfile)
						.then(handleCreateSuccessfulResponse)
						.catch(function(error) {
							alertsService.errorHandler(error);
							vm.isSaving = false;
						});
				} else {
					vm.isSaving = true;
					telemetryTwoProfileService.updateTelemetryTwoProfile(vm.telemetryTwoProfile)
						.then(handleUpdateSuccessfulResponse)
						.catch(function(error) {
							alertsService.errorHandler(error);
							vm.isSaving = false;
						});
				}
			}
		}
		

		function is_valid(telemetryTwoProfile) {
			var missingFields = [];
			if (!telemetryTwoProfile.name) {
                missingFields.push('name');
            }

           	if (!telemetryTwoProfile.jsonconfig) {
                missingFields.push('jsonconfig');
            }

            if (missingFields.length > 0) {
                alertsService.showError({title: 'Error', message: 'Next fields are missing: ' + missingFields.join(", ")});
                return false;
            }
            return true;
		}

		function handleCreateSuccessfulResponse(response) {
            alertsService.showSuccessMessage({message: response.data.newEntity.name + ' profile added to pending changes'});
            $state.go('telemetrytwoprofiles');
        }


		function handleUpdateSuccessfulResponse(response) {
			vm.isSaving = false;
			if (response.data) {
				alertsService.showSuccessMessage({message: 'Profile added to pending changes'});
			} else {
				alertsService.showSuccessMessage({message: 'Profile updated'});
			}
			$state.go('telemetrytwoprofiles');
		}

		$scope.fileChanged = function() {
			var reader = new FileReader();
			reader.onload = function(e) {
			  $scope.$apply(function() {
			      $scope.vm.telemetryTwoProfile.jsonconfig = reader.result;
			  });
			};
			var csvFileInput = document.getElementById('fileInput');
			var jsonconfig = csvFileInput.files[0];
			reader.readAsText(jsonconfig);
		};
	}
 })();

/*******************************************************************************
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 *******************************************************************************/

(function() {
    'use strict';

    angular
        .module('app.telemetrytwoprofile')
        .controller('TelemetryTwoProfileImportController', controller);

    controller.$inject=['$scope', '$log', '$uibModal', 'alertsService', 'utilsService', 'importService', 'telemetryTwoProfileService', 'paginationService'];

    function controller($scope, $log, $modal, alertsService, utilsService, importService, telemetryTwoProfileService, paginationService) {
        var vm = this;

        vm.retrieveFile = retrieveFile;
        vm.importProfile = importProfile;
        vm.importAllProfiles = importAllProfiles;
        vm.telemetryProfiles = null;
        vm.wrappedProfiles = null;
        vm.overwriteAll = overwriteAll;
        vm.isOverwritten = false;
        vm.viewTelemetryTwoProfile = viewTelemetryTwoProfile;
        vm.paginationStorageKey = 'telemetryTwoProfilePageSize';
        vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
        vm.pageNumber = paginationService.getPageNumber();
        vm.selectPage = selectPage;
        vm.getGeneralItemsNumber = getGeneralItemsNumber;
        vm.progressBarControl = importService.progressBarControl;

        $scope.$on('$locationChangeSuccess', function () {
            if (paginationService.paginationSettingsInLocationHaveChanged(vm.pageNumber, vm.pageSize)) {
                vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
                vm.pageNumber = paginationService.getPageNumber();
                selectPage();
            }
        });

        async function retrieveFile(fileName) {
            vm.telemetryProfiles = null;
            try {
                let file = await importService.openFile(fileName, null, this);
                vm.isOverwritten = false;
                vm.wrappedProfiles = importService.prepareEntitiesFromFile(file);
                selectPage();
            } catch (e) {
                alertsService.showError({message: e});
            }
        }

        function importProfile(wrappedProfile) {
            if (wrappedProfile.overwrite) {
                telemetryTwoProfileService.updateTelemetryTwoProfile(wrappedProfile.entity)
                    .then(function (resp) {
                        handleSuccessfulUpdate(resp, wrappedProfile.entity);
                        utilsService.removeSelectedItemFromListById(vm.wrappedProfiles, wrappedProfile.entity.id);
                    }, alertsService.errorHandler);
            } else {
                telemetryTwoProfileService.createTelemetryTwoProfile(wrappedProfile.entity)
                    .then(function () {
                        alertsService.showSuccessMessage({message: wrappedProfile.entity.name + ' profile added to pending changes'});
                        utilsService.removeSelectedItemFromListById(vm.wrappedProfiles, wrappedProfile.entity.id);
                    }, alertsService.errorHandler);
            }
        }

        function importAllProfiles() {
            importService.importAllEntities(telemetryTwoProfileService, vm.wrappedProfiles);
        }

        function viewTelemetryTwoProfile(profile) {
            $modal.open({
                templateUrl: 'app/xconf/telemetry/telemetrytwoprofile/telemetrytwoprofile.view.html',
                controller: 'TelemetryTwoProfileViewController as vm',
                size: 'lg',
                resolve : {
                    profile: function() {
                        return profile;
                    }
                }
            });
        }

        function overwriteAll() {
            angular.forEach(vm.wrappedProfiles, function (val) {
                val.overwrite = vm.isOverwritten;
            });
        }

        function selectPage() {
            paginationService.savePaginationSettingsInLocation(vm.pageNumber, vm.pageSize);
            computeStartAndEndIndex();
        }

        function computeStartAndEndIndex() {
            vm.startIndex = (vm.pageNumber - 1) * vm.pageSize;
            vm.endIndex = vm.pageNumber * vm.pageSize;
        }

        function getGeneralItemsNumber() {
            return vm.wrappedProfiles ? vm.wrappedProfiles.length : 0;
        }

        function handleSuccessfulUpdate(response, profile) {
            let addedToPending = response.data;
            if (addedToPending) {
                alertsService.showSuccessMessage({message: profile.name + ' profile saved'});
            } else {
                alertsService.showSuccessMessage({message: profile.name + ' profile updated'});
            }
        }
    }
})();

/*******************************************************************************
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 *******************************************************************************/
 (function(){
 	'use strict';

 	angular
 		.module('app.telemetrytwoprofile')
 		.controller('TelemetryTwoProfileViewController', controller);

	controller.$inject = ['$rootScope', '$scope', '$controller', 'telemetryTwoProfileService', '$stateParams', '$state', 'alertsService', 'profile', '$uibModalInstance'];

	function controller($rootScope, $scope, $controller, telemetryTwoProfileService, $stateParams, $state, alertsService, profile, $uibModalInstance){
		var vm = this;

		vm.profile = profile;
		vm.dismiss = dismiss;

		function dismiss() {
			$uibModalInstance.dismiss('close');
		}
	}
 })();

/*******************************************************************************
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 *******************************************************************************/
(function() {
    'use strict';

    angular
        .module('app.telemetrytwoprofile')
        .controller('TelemetryTwoProfilesController', controller);

    controller.$inject = ['$scope', '$controller', 'telemetryTwoProfileService', 'alertsService', 'utilsService', 'dialogs', '$log', 'paginationService', '$uibModal','telemetryTwoChangeService'];

    function controller($scope, $controller, telemetryTwoProfileService, alertsService, utilsService, dialogs, $log, paginationService, $modal, telemetryTwoChangeService) {

        var vm = this;

        angular.extend(vm, $controller('MainController', {
            $scope: $scope
        }));

        vm.telemetryTwoProfiles = [];
        vm.telemetryTwoChangedEntityIds = [];
        vm.paginationStorageKey = 'telemetryTwoProfilePageSize';
        vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
        vm.pageNumber = paginationService.getPageNumber();
        vm.generalItemsNumber = 0;
        vm.searchParam = {};
        vm.searchOptions = {
            data: [
                {
                    "name": {
                        friendlyName: "Name",
                        apiArgs: ['NAME']
                    }
                }
            ]
        };

        vm.startParse = startParse;
        vm.getGeneralItemsNumber = getGeneralItemsNumber;
        vm.deleteTelemetryTwoProfile = deleteTelemetryTwoProfile;
        vm.getTelemetryTwoProfiles = getTelemetryTwoProfiles;
        vm.exportOne = telemetryTwoProfileService.exportOne;
        vm.hasPendingChange=hasPendingChange;
        vm.exportAll = telemetryTwoProfileService.exportAll
        vm.viewTelemetryTwoProfile = viewTelemetryTwoProfile;
        vm.isDataLoading = false;
        init();

        function init() {
            getTelemetryTwoProfiles();
            getTelemetryTwoChangedEntityIds();
        }

        $scope.$on('$locationChangeSuccess', function () {
            if (paginationService.paginationSettingsInLocationHaveChanged(vm.pageNumber, vm.pageSize)) {
                vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
                vm.pageNumber = paginationService.getPageNumber();
                init();
            }
        });

        $scope.$on('search-entities', function(event, data) {
            vm.searchParam = data.searchParam;
            getTelemetryTwoProfiles();
        });

        function getTelemetryTwoProfiles() {
            vm.isDataLoading = true;
            telemetryTwoProfileService.getTelemetryTwoProfiles(vm.pageNumber, vm.pageSize, vm.searchParam).then(function(result) {
                vm.isDataLoading = false;
                vm.telemetryTwoProfiles = result.data;
                vm.generalItemsNumber = result.headers('numberOfItems');
                paginationService.savePaginationSettingsInLocation(vm.pageNumber, vm.pageSize);
            },
            function(error) {
                vm.isDataLoading = false;
                alertsService.showError({title: 'Error', message: 'Error by loading Telemetry 2.0 profiles'});
            });
        }

        function deleteTelemetryTwoProfile(profile) {
            if (profile.id) {
                var dialog = dialogs.confirm('Delete confirmation', '<span class="break-word-inline"> Are you sure you want to delete ' + profile.name + ' Telemetry 2.0 Profile? </span>');
                dialog.result.then(function (btn) {
                    telemetryTwoProfileService.deleteTelemetryTwoProfile(profile.id)
                        .then(function() {
                            alertsService.showSuccessMessage({message: 'Delete change has been created for ' + profile.name + ' profile'});
                            getTelemetryTwoChangedEntityIds();
                        }, function(error) {
                            alertsService.showError({title: 'Error', message: error.data.message});
                        });
                });
            }
        }

        function viewTelemetryTwoProfile(profile) {
            $modal.open({
                templateUrl: 'app/xconf/telemetry/telemetrytwoprofile/telemetrytwoprofile.view.html',
                controller: 'TelemetryTwoProfileViewController as vm',
                size: 'lg',
                resolve : {
                    profile: function() {
                        return profile;
                    }
                }
            });
        }

        function shiftItems() {
            var numberOfPagesAfterDeletion = Math.ceil((getGeneralItemsNumber() - 1) / vm.pageSize);
            vm.pageNumber = (vm.pageNumber > numberOfPagesAfterDeletion && numberOfPagesAfterDeletion > 0) ? numberOfPagesAfterDeletion : vm.pageNumber;
            getTelemetryTwoProfiles();
        }

        function startParse() {
            return getGeneralItemsNumber() > 0;
        }

        function getGeneralItemsNumber() {
            return vm.generalItemsNumber;
        }

        function getTelemetryTwoChangedEntityIds() {
            telemetryTwoChangeService.getChangedEntityIds().then(function(resp) {
                vm.telemetryTwoChangedEntityIds = resp.data;
            }, alertsService.errorHandler);
        }

        function hasPendingChange(profileId) {
            return vm.telemetryTwoChangedEntityIds.includes(profileId);
        }
    }
})();

/*******************************************************************************
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 *******************************************************************************/
(function() {
    'use strict';

    angular
        .module('app.telemetrytwotargetingrule')
        .controller('TelemetryTwoTargetingRuleEditController', controller);

    controller.$inject=['$rootScope', '$scope', '$controller', '$state', '$stateParams', 'alertsService', 'ruleHelperService', 'telemetryTwoTargetingRuleService', 'telemetryTwoProfileService', 'namespacedListService', 'TARGETING_RULE_OPERATION_ARRAY', 'LOG_UPLOAD_FREE_ARG_AUTOCOMPLETE_VALUE', 'FREE_ARG_NAME', 'ruleValidationService', 'ruleConditionService'];

    function controller($rootScope, $scope, $controller, $state, $stateParams, alertsService, ruleHelperService, telemetryTwoTargetingRuleService, telemetryTwoProfileService, namespacedListService, TARGETING_RULE_OPERATION_ARRAY, LOG_UPLOAD_FREE_ARG_AUTOCOMPLETE_VALUE, FREE_ARG_NAME, ruleValidationService, ruleConditionService) {
        var vm = this;

        angular.extend(vm, $controller('EditController', {
            $scope: $scope,
            mainPage: 'targetingrules',
            stateParameters: null
        }));

        vm.targetingRule = {
            rule: {
                applicationType: $rootScope.applicationType,
                name:'',
                boundTelemetryIds: []
            }
        };
        vm.saveTargetingRule = saveTargetingRule;
        vm.namespacedListIds = [];
        vm.profiles = [];
        vm.namespacedListData = ruleHelperService.buildNamespacedListData();
        vm.operations = {general: TARGETING_RULE_OPERATION_ARRAY};
        vm.freeArgAutocompleteValues = LOG_UPLOAD_FREE_ARG_AUTOCOMPLETE_VALUE;
        vm.validationFunction = ruleValidationService.validate;
        vm.percentFreeArgName = FREE_ARG_NAME.ESTB_MAC_ADDRESS;
        vm.representation = ruleHelperService.buildRepresentation();
        vm.ipMacIsConditionLimit = "";
        init();

        function init() {

            telemetryTwoProfileService.getAll()
                .then(function(resp) {
                    vm.profiles = resp.data;
                }, alertsService.errorHandler);

            namespacedListService.getNamespacedListIds().then(function(resp) {
                vm.namespacedListIds = resp;
            }, alertsService.errorHandler);

            if ($stateParams.ruleId) {
                telemetryTwoTargetingRuleService.getById($stateParams.ruleId).then(function(resp) {
                    vm.targetingRule.rule = resp.data;
                }, alertsService.errorHandler);
            }

            $scope.$root.$on("rule::remove", function(e, obj) {
                var rule = vm.targetingRule.rule;
                if (ruleHelperService.isCompound(rule)) {
                    var compoundParts = rule.compoundParts || [];
                    for (var i = 0; i < compoundParts.length; i++) {
                        var currentRule = compoundParts[i];
                        if (currentRule === obj.rule) {
                            if (i === 0) {
                                $.extend(rule, ruleHelperService.createEmptyRule());
                            } else {
                                compoundParts.splice(i, 1);
                                if (compoundParts.length === 1) {
                                    var clonedFeatureRule = angular.copy(rule);
                                    $.extend(clonedFeatureRule, compoundParts[0]);
                                    vm.targetingRule.rule = clonedFeatureRule;
                                }
                            }
                            if (rule.compoundParts.length === 0 && !rule.condition) {
                                vm.isValidCondition = false;
                            }
                            return;
                        }
                    }
                } else {
                    if (obj.rule === rule) {
                        $.extend(rule, ruleHelperService.createEmptyRule());
                        vm.isValidCondition = false;
                    }
                }
            });

            ruleConditionService.getIpMacIsConditionLimit().then(function(resp) {
                vm.ipMacIsConditionLimit = resp.data.ipMacIsConditionLimit;
            })

        }
        vm.isSaving = false;
        function saveTargetingRule() {
            if (validateRule(vm.targetingRule.rule)) {
                vm.isSaving = true; 
                if (vm.targetingRule.rule.id) {
                    telemetryTwoTargetingRuleService.update(vm.targetingRule.rule).then(function (resp) {
                        vm.isSaving = false; 
                        alertsService.successfullySaved(resp.data.name);
                        $state.go('telemetrytwotargetingrules');
                    }, function (error) {
                        vm.isSaving = false;
                        alertsService.errorHandler(error);
                    });
                } else {
                    telemetryTwoTargetingRuleService.create(vm.targetingRule.rule).then(function (resp) {
                        vm.isSaving = false;
                        alertsService.successfullySaved(resp.data.name);
                        $state.go('telemetrytwotargetingrules');
                    }, function (error) {
                        vm.isSaving = false; 
                        alertsService.errorHandler(error);
                    });
                }
            }
        }
        

        function validateRule(rule) {
            console.log(rule)
            var emptyFields = [];
            if (!rule.condition && !rule.compoundParts) {
                 emptyFields.push('condition');
            }
            if (!rule.name) {
                emptyFields.push('name');
            }
            if (rule.boundTelemetryIds.length == 0) {
                emptyFields.push('Telemetry 2.0 profile');
            }

            if (emptyFields.length > 0) {
                alertsService.showError({title: 'Error', message: 'Next fields are empty: ' + emptyFields.join(", ")});
                return false;
            }
            return true;
        }
    }
})();

/*******************************************************************************
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 *******************************************************************************/

(function() {
    'use strict';

    angular
        .module('app.telemetrytwotargetingrule')
        .controller('TelemetryTwoTargetingRuleImportController', controller);

    controller.$inject = ['$scope', '$log', '$uibModal', 'alertsService', 'utilsService', 'importService', 'telemetryTwoTargetingRuleService', 'telemetryTwoProfileService', 'paginationService'];

    function controller($scope, $log, $modal, alertsService, utilsService, importService, telemetryTwoRuleService, telemetryTwoProfileService, paginationService) {
        var vm = this;

        vm.retrieveFile = retrieveFile;
        vm.importTelemetryTwoRule = importTelemetryTwoRule;
        vm.importAllTelemetryTwoRules = importAllTelemetryTwoRules;
        vm.telemetryTwoRules = null;
        vm.wrappedTelemetryTwoRules = null;
        vm.overwriteAll = overwriteAll;
        vm.isOverwritten = false;
        vm.paginationStorageKey = 'telemetryTwoRulePageSize';
        vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
        vm.pageNumber = paginationService.getPageNumber();
        vm.selectPage = selectPage;
        vm.getGeneralItemsNumber = getGeneralItemsNumber;
        vm.progressBarControl = importService.progressBarControl;
        vm.viewTelemetryTwoRule = viewTelemetryTwoRule;

        $scope.$on('$locationChangeSuccess', function () {
            if (paginationService.paginationSettingsInLocationHaveChanged(vm.pageNumber, vm.pageSize)) {
                vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
                vm.pageNumber = paginationService.getPageNumber();
                selectPage();
            }
        });

        async function retrieveFile(fileName) {
            vm.telemetryTwoRules = null;
            try {
                let file = await importService.openFile(fileName, null, this);
                vm.isOverwritten = false;
                vm.wrappedTelemetryTwoRules = importService.prepareEntitiesFromFile(file);
                selectPage();
            } catch (e) {
                alertsService.showError({message: e});
            }
        }

        function importTelemetryTwoRule(wrappedTelemetryTwoRule) {
            if (wrappedTelemetryTwoRule.overwrite) {
                telemetryTwoRuleService.update(wrappedTelemetryTwoRule.entity).then(function () {
                    alertsService.successfullySaved(wrappedTelemetryTwoRule.entity.name);
                    utilsService.removeSelectedItemFromListById(vm.wrappedTelemetryTwoRules, wrappedTelemetryTwoRule.entity.id);
                }, alertsService.errorHandler);
            } else {
                telemetryTwoRuleService.create(wrappedTelemetryTwoRule.entity).then(function () {
                    alertsService.successfullySaved(wrappedTelemetryTwoRule.entity.name);
                    utilsService.removeSelectedItemFromListById(vm.wrappedTelemetryTwoRules, wrappedTelemetryTwoRule.entity.id);
                }, alertsService.errorHandler);
            }
        }

        function importAllTelemetryTwoRules() {
            importService.importAllEntities(telemetryTwoRuleService, vm.wrappedTelemetryTwoRules);
        }


        function overwriteAll() {
            angular.forEach(vm.wrappedTelemetryTwoRules, function (val) {
                val.overwrite = vm.isOverwritten;
            });
        }

        function selectPage() {
            paginationService.savePaginationSettingsInLocation(vm.pageNumber, vm.pageSize);
            computeStartAndEndIndex();
        }

        function viewTelemetryTwoRule(telemetryRule) {
            $modal.open({
                templateUrl: 'app/xconf/telemetry/telemetrytwotargetingrule/telemetrytwotargetingrule.view.html',
                controller: 'TelemetryTwoTargetingRuleViewController as vm',
                size: 'lg',
                resolve : {
                    telemetryRule: function() {
                        return telemetryRule;
                    }
                }
            });
        }

        function computeStartAndEndIndex() {
            vm.startIndex = (vm.pageNumber - 1) * vm.pageSize;
            vm.endIndex = vm.pageNumber * vm.pageSize;
        }

        function getGeneralItemsNumber() {
            return vm.wrappedTelemetryTwoRules ? vm.wrappedTelemetryTwoRules.length : 0;
        }
    }
})();


/*******************************************************************************
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 *******************************************************************************/

(function() {
    'use strict';

    angular
        .module('app.telemetrytwotargetingrule')
        .controller('TelemetryTwoTargetingRuleViewController', controller);

    controller.$inject=['$rootScope', '$scope', '$controller', '$state', '$stateParams', 'telemetryRule', 'alertsService', 'ruleHelperService', 'telemetryTwoTargetingRuleService', 'telemetryTwoProfileService', '$uibModalInstance'];

    function controller($rootScope, $scope, $controller, $state, $stateParams, telemetryRule, alertsService, ruleHelperService, telemetryTwoTargetingRuleService, telemetryTwoProfileService, $uibModalInstance) {
        var vm = this;

        vm.telemetryRule = telemetryRule;
        vm.ruleProfiles = [];

        vm.dismiss = dismiss;

        init();

        function init() {
            if (vm.telemetryRule && vm.telemetryRule.boundTelemetryIds) {
                telemetryTwoProfileService.getTelemetryTwoProfilesByIdList(vm.telemetryRule.boundTelemetryIds).then(function(resp) {
                    vm.ruleProfiles = resp.data;
                }, function(error) {
                    alertsService.showError({title: 'Error', message: error.data.message});
                });
            }
        }

        function dismiss() {
            $uibModalInstance.dismiss('close');
        }

    }
})();

/*******************************************************************************
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 *******************************************************************************/
(function() {
    'use strict';

    angular
        .module('app.telemetrytwotargetingrule')
        .controller('TelemetryTwoTargetingRulesController', controller);

    controller.$inject = ['$scope', '$controller', 'telemetryTwoTargetingRuleService', 'alertsService', 'utilsService', 'dialogs', 'telemetryTwoProfileService', 'paginationService', '$uibModal'];

    function controller($scope, $controller, telemetryTwoTargetingRuleService, alertsService, utilsService, dialogs, telemetryTwoProfileService, paginationService, $modal) {
        var vm = this;

        angular.extend(vm, $controller('MainController', {
            $scope: $scope
        }));

        vm.rules = [];
        vm.deleteRule = deleteRule;
        vm.profiles = [];
        vm.exportOne = telemetryTwoTargetingRuleService.exportOne;
        vm.exportAll = telemetryTwoTargetingRuleService.exportAll;
        vm.searchParam = {};
        vm.searchOptions = {
            data: [
                {
                    "name": {
                        friendlyName: "Name",
                        apiArgs: ["NAME"]
                    }
                },
                {
                    "name": {
                        friendlyName: 'Key',
                        apiArgs: ['FREE_ARG']
                    }
                },
                {
                    "name": {
                        friendlyName: 'Value',
                        apiArgs: ['FIXED_ARG']
                    }
                },
                {
                    "name": {
                        friendlyName: 'Key and Value',
                        apiArgs: ['FREE_ARG', 'FIXED_ARG']
                    }
                },
                {
                    "name": {
                        friendlyName: "Profile",
                        apiArgs: ["PROFILE"]
                    }
                }
            ]
        };
        vm.getRules = getRules;
        vm.paginationStorageKey = 'telemetryTwoRulePageSize';
        vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
        vm.pageNumber = paginationService.getPageNumber();
        vm.generalItemsNumber = 0;
        vm.startParse = startParse;
        vm.getGeneralItemsNumber = getGeneralItemsNumber;
        vm.shiftItems = shiftItems;
        vm.viewTelemetryTwoRule = viewTelemetryTwoRule;
        vm.isDataLoading = false;
        init();

        function init() {
            getRules();
        }

        $scope.$on('$locationChangeSuccess', function () {
            if (paginationService.paginationSettingsInLocationHaveChanged(vm.pageNumber, vm.pageSize)) {
                vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
                vm.pageNumber = paginationService.getPageNumber();
                init();
            }
        });

        $scope.$on('search-entities', function(event, data) {
            vm.searchParam = data.searchParam;
            getRules();
        });

        function getRules() {
            vm.isDataLoading = true;
            telemetryTwoTargetingRuleService.getPage(vm.pageSize, vm.pageNumber, vm.searchParam)
                .then(function (result) {
                    vm.isDataLoading = false;
                    vm.rules = result.data;
                    vm.generalItemsNumber = result.headers('numberOfItems');
                    paginationService.savePaginationSettingsInLocation(vm.pageNumber, vm.pageSize);
                },
                function (error) {
                    vm.isDataLoading = false;
                    alertsService.showError({title: 'Error', message: 'Error by loading targeting rule list.'});
                }
            );
        }

        telemetryTwoProfileService.getAll()
            .then(function(resp) {
                vm.profiles = resp.data;
            }, function(error) {
                alertsService.showError({title: 'Error', message: 'Error by loading profiles.'});
            });

        function deleteRule(rule) {
            if (rule && rule.id) {
                var dialog = dialogs.confirm('Delete confirmation', '<span class="break-word-inline"> Are you sure you want to delete Targeting rule ' + rule.name + ' ? </span>');
                dialog.result.then(function (btn) {
                    telemetryTwoTargetingRuleService.deleteTargetingRule(rule.id).then(function () {
                        utilsService.removeItemFromArray(vm.rules, rule);
                        alertsService.successfullyDeleted(rule.name);
                        shiftItems();
                    }, function (error) {
                        alertsService.showError({title: 'Error', message: error.data});
                    });
                });
            }
        }

        function shiftItems() {
            var numberOfPagesAfterDeletion = Math.ceil((getGeneralItemsNumber() - 1) / vm.pageSize);
            vm.pageNumber = (vm.pageNumber > numberOfPagesAfterDeletion && numberOfPagesAfterDeletion > 0) ? numberOfPagesAfterDeletion : vm.pageNumber;
            getRules();
        }

        function startParse() {
            return getGeneralItemsNumber() > 0;
        }

        function getGeneralItemsNumber() {
            return vm.generalItemsNumber;
        }

        function searchTelemetryRulesByContext() {
            telemetryTwoTargetingRuleService.searchTelemetryRulesByContext(vm.pageSize,vm.pageNumber, vm.searchContext).then(function (resp) {
                vm.rules = resp.data;
                vm.generalItemsNumber = resp.headers.length;
                paginationService.savePaginationSettingsInLocation(vm.pageNumber, vm.pageSize);
            }, function (error) {
                alertsService.showError({title: 'Error', message: error.data.message});
            });
        }

        function viewTelemetryTwoRule(telemetryRule) {
            $modal.open({
                templateUrl: 'app/xconf/telemetry/telemetrytwotargetingrule/telemetrytwotargetingrule.view.html',
                controller: 'TelemetryTwoTargetingRuleViewController as vm',
                size: 'lg',
                resolve : {
                    telemetryRule: function() {
                        return telemetryRule;
                    }
                }
            });
        }
    }
})();

/*******************************************************************************
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 *******************************************************************************/
(function() {
    'use strict';

    angular
        .module('app.telemetrytwotestpage')
        .controller('TelemetryTwoTestPageController', controller);

    controller.$inject = ['$scope', '$controller', 'telemetryTwoTestPageService', 'alertsService', 'telemetryTwoProfileService', 'LOG_UPLOAD_FREE_ARG_AUTOCOMPLETE_VALUE', 'testPageUtils'];

    function controller($scope, $controller, telemetryTwoTestPageService, alertsService, telemetryTwoProfileService, LOG_UPLOAD_FREE_ARG_AUTOCOMPLETE_VALUE, testPageUtils) {
        var vm = this;
        angular.extend(vm, $controller('MainController', {
            $scope: $scope
        }));
        vm.matchedRules = null;
        vm.profiles = [];
        vm.parameters = [{key: '', value: ''}];
        vm.autoCompleteValues = LOG_UPLOAD_FREE_ARG_AUTOCOMPLETE_VALUE;
        vm.context = null;

        vm.matchRules = matchRules;

        init();

        function init() {
            telemetryTwoProfileService.getAll()
                .then(function(resp) {
                    vm.profiles = resp.data;
                }, function(error) {
                    alertsService.showError({title: 'Error', message: error.data.message});
                });
        }

        function matchRules() {
            if (testPageUtils.validateInput(vm.parameters)) {
                var objParams = testPageUtils.getParametersAsObject(vm.parameters);
                telemetryTwoTestPageService.getMatchedRules(objParams).then(function (resp) {
                    vm.matchedRules = resp.data.result;
                    vm.context = resp.data.context;
                }, function (error) {
                    alertsService.showError({title: 'Error', message: error.data.message});
                });
            }
        }
    }
})();

/*******************************************************************************
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 *******************************************************************************/
(function() {
    'use strict';

    angular
        .module('app.telemetryTestPage')
        .controller('TelemetryTestPageController', controller);

    controller.$inject = ['telemetryTestPageService', 'alertsService', 'permanentProfileService', 'LOG_UPLOAD_FREE_ARG_AUTOCOMPLETE_VALUE', 'testPageUtils'];

    function controller(telemetryTestPageService, alertsService, permanentProfileService, LOG_UPLOAD_FREE_ARG_AUTOCOMPLETE_VALUE, testPageUtils) {
        var vm = this;
        vm.matchedRules = null;
        vm.profiles = [];
        vm.parameters = [{key: '', value: ''}];
        vm.autoCompleteValues = LOG_UPLOAD_FREE_ARG_AUTOCOMPLETE_VALUE;
        vm.context = null;

        vm.matchRules = matchRules;

        init();

        function init() {
            permanentProfileService.getAll()
                .then(function(resp) {
                    vm.profiles = resp.data;
                }, function(error) {
                    alertsService.showError({title: 'Error', message: error.data.message});
                });
        }

        function matchRules() {
            if (testPageUtils.validateInput(vm.parameters)) {
                var objParams = testPageUtils.getParametersAsObject(vm.parameters);
                telemetryTestPageService.getMatchedRules(objParams).then(function (resp) {
                    vm.matchedRules = resp.data.result;
                    vm.context = resp.data.context;
                }, function (error) {
                    alertsService.showError({title: 'Error', message: error.data.message});
                });
            }
        }
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .module('app.telemetrytwochange')
        .controller('TelemetryTwoChangeController', controller);

    controller.$inject=['$scope', '$rootScope', 'telemetryTwoChangeService', 'alertsService', 'CHANGE_TYPE', 'utilsService', 'dialogs', 'paginationService', 'CHANGE_OPERATION', 'ENTITY_TYPE', '$controller', 'authUtilsService', 'changeUtils'];
    function controller($scope, $rootScope, telemetryTwoChangeService, alertsService, CHANGE_TYPE, utilsService, dialogs, paginationService, CHANGE_OPERATION, ENTITY_TYPE, $controller, authUtils, changeUtils) {
        var vm = this;

        angular.extend(vm, $controller('MainController', {
            $scope: $scope
        }));

        vm.currentChangeType = CHANGE_TYPE.PENDING;
        vm.CHANGE_TYPE = CHANGE_TYPE;
        vm.ENTITY_TYPE = ENTITY_TYPE;
        vm.changes = [];
        vm.allChecked = false;
        vm.changeDiffs = {};
        vm.approvedChangesSize = null;
        vm.pendingChangesSize = null;
        vm.paginationStorageKey = 'changesPageSize';
        vm.availablePageSizes = paginationService.getAvailablePageSizes();
        vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey, "10");
        vm.pageSizeModel = vm.pageSize;
        vm.pageNumber = paginationService.getPageNumber();
        vm.numPages = 0;
        vm.changesForMultipleOperation = [];
        vm.CHANGE_OPERATION = CHANGE_OPERATION;
        vm.isDataLoading = false;
        vm.isNullOrUndefinedOrEmptyObject = utilsService.isNullOrUndefinedOrEmptyObject;
        vm.errorMessageById = {};

        vm.searchOptions = {
            data: [
                {
                    "name": {
                        friendlyName: "Entity",
                        apiArgs: ['ENTITY']
                    }
                },
                {
                    "name": {
                        friendlyName: "User",
                        apiArgs: ["AUTHOR"]
                    }
                }
            ]
        };
        vm.cancel = cancel;
        vm.getChanges = getChanges;
        vm.getApprovedChanges = getApprovedChanges;
        vm.getEntityView = telemetryTwoChangeService.getEntityView;
        vm.getEntityName = telemetryTwoChangeService.getEntityName;
        vm.getSizeByType = getSizeByType;
        vm.getChangesByType = getChangesByType;
        vm.changePageSize = changePageSize;
        vm.updateChangeList = updateChangeList;
        vm.applySelectedChanges = applySelectedChanges;
        vm.isAddedToMultipleOperation = isAddedToMultipleOperation;
        vm.isEmptyString = utilsService.isEmptyString;
        vm.canWriteChangeAndTelemetry = canWriteChangeAndTelemetry;
        vm.selectAllChanges = selectAllChanges; 

        init();

        function init() {
            getChanges();
        }

        $scope.$on('$locationChangeSuccess', function () {
            if (paginationService.paginationSettingsInLocationHaveChanged(vm.pageNumber, vm.pageSize)) {
                vm.pageSize = paginationService.getPageSize(vm.paginationStorageKey);
                vm.pageSizeModel = vm.pageSize;
                paginationService.saveDefaultPageSize(vm.pageSize, vm.paginationStorageKey);
                vm.pageNumber = paginationService.getPageNumber();
                init();
            }
        });

        $scope.$on('search-entities', function(event, data) {
            vm.searchParam = data.searchParam;
            var changePromise;
            if (vm.currentChangeType === CHANGE_TYPE.APPROVED) {
                changePromise = telemetryTwoChangeService.getFilteredApprovedChanges(vm.pageSize, vm.pageNumber, vm.searchParam);
            } else {
                changePromise = telemetryTwoChangeService.getFilteredChanges(vm.pageSize, vm.pageNumber, vm.searchParam);
            }
            changePromise.then(responseHandler, alertsService.errorHandler);
        });

        function getApprovedChanges() {
            vm.isDataLoading = true;
            vm.allChecked = false;
            cleanUpChangeIds(vm.currentChangeType, CHANGE_TYPE.APPROVED, vm.changesForMultipleOperation);
            vm.currentChangeType = CHANGE_TYPE.APPROVED;
            telemetryTwoChangeService.getFilteredApprovedChanges(vm.pageSize, vm.pageNumber, vm.searchParam).then(
                responseHandler, alertsService.errorHandler).finally(function() {
                    vm.isDataLoading = false;
                });
        }

        function responseHandler(resp) {
            vm.changes = changeUtils.groupChanges(resp.data);
            getSizes(resp);
        }

        function getChanges() {
            vm.isDataLoading = true;
            vm.allChecked = false;
            cleanUpChangeIds(vm.currentChangeType, CHANGE_TYPE.PENDING, vm.changesForMultipleOperation);
            vm.currentChangeType = CHANGE_TYPE.PENDING;
            telemetryTwoChangeService.getFilteredChanges(vm.pageSize, vm.pageNumber, vm.searchParam).then(
                responseHandler, alertsService.errorHandler).finally(function() {
                    vm.isDataLoading = false;
                });
        }

        function selectAllChanges(checked) {
            for (var key in vm.changes) {
            vm.changes[key].forEach(function (change) {
                change.checked = vm.allChecked;
                updateChangeList(checked, change);
            });
          }
        }

        function cancel(change) {
            var dlg = dialogs.confirm('Cancel confirmation', '<span class="break-word-inline">Are you sure you want to cancel change of ' + vm.getEntityName(change) + " entity? </span>");
            dlg.result.then(function(btn) {
                telemetryTwoChangeService.cancel(change.id).then(function (resp) {
                    alertsService.showSuccessMessage({message: 'Change of ' + vm.getEntityName(change) + ' entity successfully canceled'});
                    utilsService.removeItemFromListById(vm.changes, change.id);
                    utilsService.removeItemFromListById(vm.changesForMultipleOperation, change.id);
                    getSizes(resp);
                    vm.pageNumber = getPageNumberAfterUpdate(vm.currentChangeType, vm.pageSize, vm.pageNumber);
                    getChangesByType(vm.currentChangeType);
                }, alertsService.errorHandler);
            }, function() {
                // click cancel
            });
        }

        function getSizes(resp) {
            vm.approvedChangesSize = resp.headers('approvedChangesSize');
            vm.pendingChangesSize = resp.headers('pendingChangesSize');
        }

        function getSizeByType(type) {
            return type === CHANGE_TYPE.PENDING ? vm.pendingChangesSize : vm.approvedChangesSize;
        }

        function getChangesByType(type) {
            if (type === CHANGE_TYPE.PENDING) {
                getChanges();
            } else {
                getApprovedChanges();
            }
        }

        function changePageSize(pageSizeModel) {
            vm.pageSize = pageSizeModel;
            paginationService.saveDefaultPageSize(vm.pageSize, vm.paginationStorageKey);
            getChangesByType(vm.currentChangeType);
        }

        function getPageNumberAfterUpdate(currentPendingChangeType, pageSize, pageNumber) {
            var numberOfPagesAfterDeletion = Math.ceil((getSizeByType(currentPendingChangeType)) / pageSize);
            var newPageNumber = pageNumber > numberOfPagesAfterDeletion && numberOfPagesAfterDeletion !== 0 ? numberOfPagesAfterDeletion : pageNumber;
            return newPageNumber;
        }

        function updateChangeList(checked, change) {
            if (checked) {
                if (!utilsService.isArrayContainsValue(vm.changesForMultipleOperation, change)) {
                    vm.changesForMultipleOperation.push(change);
                }      
            } else {
                vm.allChecked = false;
                utilsService.removeItemFromArrayWithDeepEquals(vm.changesForMultipleOperation, change);
            }
            if (!vm.isEmptyString(vm.errorMessageById[change.id])) {
                vm.errorMessageById[change.id] = '';
            }
         }

        function applySelectedChanges(operation) {
            var dlg = dialogs.confirm('Approve confirmation', '<span class="break-word-inline">Are you sure you want to ' + operation.toLowerCase() + ' ' + vm.changesForMultipleOperation.length + ' selected changes?</span>');
            dlg.result.then(function(btn) {
                applyChanges(vm.changesForMultipleOperation);
            }, function() {
                // click cancel
            });
        }

        function applyChanges(changes) {
            var changeIds = _.map(changes, function(change){return change.id});
            var changedPromise;
            if (vm.currentChangeType === vm.CHANGE_TYPE.PENDING) {
                changedPromise = telemetryTwoChangeService.approveChanges(changeIds);
            } else {
                changedPromise = telemetryTwoChangeService.revertChanges(changeIds);
            }
            changedPromise.then(function (resp) {
                vm.errorMessageById = resp.data;
                if (utilsService.isMapEmpty(vm.errorMessageById)) {
                    showSuccessApproveRevertMessage();
                } else {
                    let actionType = vm.currentChangeType === vm.CHANGE_TYPE.PENDING ? 'apply' : 'revert';
                    alertsService.showError({title: 'Error', message: `Errors occurred when trying to ${actionType} selected changes`});
                }
                getChangesByType(vm.currentChangeType);
                cleanUpSelectedChanges(vm.changesForMultipleOperation, _.keys(vm.errorMessageById));
            }, function (error) {
                alertsService.showError({title: 'Error', message: error.data.message});
                getChangesByType(vm.currentChangeType);
            });
        }

        function showSuccessApproveRevertMessage() {
            if (vm.currentChangeType === vm.CHANGE_TYPE.PENDING) {
                alertsService.showSuccessMessage({message: 'Selected changes have been successfully approved and unselected changes canceled'});
            } else {
                alertsService.showSuccessMessage({message: 'Selected changes were reverted successfully'});
            }
        }

        function cleanUpSelectedChanges(selectedChanges, changeIdsWithError) {
            _.each(selectedChanges, function(change) {
                if (!changeIdsWithError.includes(change.id)) {
                    utilsService.removeItemFromListById(selectedChanges, change.id);
                }
            });
        }

        function isAddedToMultipleOperation(change) {
            for(var i = 0; i < vm.changesForMultipleOperation.length; i++) {
                if (angular.equals(vm.changesForMultipleOperation[i], change)) {
                    return true;
                }
            }
        }

        function cleanUpChangeIds(currentPendingChangeType, newPendingChangeType, changesForMultipleOperation) {
            if (currentPendingChangeType !== newPendingChangeType) {
                changesForMultipleOperation.length = 0;
                clearErrorMessages();
            }
        }

        function clearErrorMessages() {
            vm.errorMessageById = {};
        }

        function canWriteChangeAndTelemetry() {
            return authUtils.canWriteChangesByApplication($rootScope.applicationType) && authUtils.canWriteTelemetryByApplication($rootScope.applicationType);
        }
    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
    "use strict";

    angular
        .module('app.percentfilter')
        .directive('distributionDirective', ['percentFilterValidationService', 'utilsService', function(percentFilterValidationService, utilsService) {
            function link(scope, element, attrs) {
                scope.validator = percentFilterValidationService;
                scope.removeDistribution = removeDistribution;
                scope.updatePercentageRange = updatePercentageRange;

                scope.validateDistributionConfigId = validateDistributionConfigId;
                scope.isValidStartRange = isValidStartRange;
                scope.isValidEndRange = isValidEndRange;

                scope.percentageError = '';
                scope.overlappingError = '';
                scope.configError = '';
                scope.duplicateError = '';
                scope.percentageRangeError = '';
                scope.startRangeError = '';
                scope.endRangeError = '';

                function removeDistribution(distributions, distribution, percentageBean) {
                    utilsService.removeItemFromArray(distributions, distribution);
                    if (distributions.length === 0) {
                        percentageBean.lastKnownGood = '';
                    }
                }

                function updatePercentageRange(distribution) {
                    cleanErrors();
                    if (!percentFilterValidationService.isValidDistributionPercentRanges(distribution)) {
                        scope.percentError = 'Percentage bounds should be within [0; 100] and contain up to three decimal points';
                    }
                    if (distribution.startPercentRange && distribution.endPercentRange
                        && !percentFilterValidationService.isValidStartAndEndPercentageValues(distribution)) {
                        scope.percentageRangeError = 'Start percentage should be less than end percentage'
                    }
                    if (percentFilterValidationService.percentRangesOverlapEachOther(distribution, scope.percentageBean.distributions)) {
                        scope.overlappingError = 'Distributions are overlapped by each other';
                    }
                    if (percentFilterValidationService.hasDuplicates(scope.percentageBean.distributions)) {
                        scope.duplicateError = 'Distributions have duplicates';
                    }
                    if (distribution) {
                        if (distribution.startPercentRange != undefined && distribution.endPercentRange != undefined) {
                            distribution.percentage = +Number(distribution.endPercentRange - distribution.startPercentRange).toFixed(3);
                        } else {
                            distribution.percentage = undefined;
                        }
                    }
                    return distribution;
                }

                function validateDistributionConfigId(distribution) {
                    if (!percentFilterValidationService.isValidDistributionConfig(distribution)) {
                        scope.configError = 'FirmwareConfig version is empty';
                    } else {
                        scope.configError = '';
                    }
                }

                function isValidStartRange(percentage) {
                    if (!percentage && percentage !== 0) {
                        scope.startRangeError = 'Start range should be specified';
                    } else {
                        scope.startRangeError = '';
                    }
                }

                function isValidEndRange(percentage) {
                    if (!percentage) {
                        scope.endRangeError = 'End range should be specified';
                    } else {
                        scope.endRangeError = '';
                    }
                }

                function cleanErrors() {
                    scope.configError = '';
                    scope.duplicateError = '';
                    scope.overlappingError = '';
                    scope.percentageError = '';
                    scope.percentageRangeError = '';
                    scope.endRangeError = '';
                    scope.startRangeError = '';
                }
            }

            return {
                restrict: 'E',
                scope: {
                    percentageBean: '=',
                    distribution: '=',
                    firmwareVersionSelectObjects: '=',
                    index: '='
                },
                templateUrl: 'app/xconf/firmware/percentfilter/distribution.directive.html',
                link: link
            };
        }]);
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
    "use strict";

    angular
        .module('app.firmwarerule')
        .directive('firmwareruleDefinePropertiesEditorDirective', ['$log', 'alertsService', 'firmwareRuleValidationService', function($log, alertsService, firmwareRuleValidationService) {


            function link(scope, element, attrs) {
                scope.key = "";
                scope.value = "";
                scope.rowDom = null;
                scope.editedItem = null;

                scope.saveRow = saveRow;
                scope.editRow = editRow;
                scope.clear = clear;
                scope.hasError = hasError;


                function saveRow() {
                    var property = scope.templateProperties[scope.key];
                    if (firmwareRuleValidationService.validatePropertyValue(property, scope.value)) {
                        scope.editedItem.key = scope.key;
                        scope.editedItem.value = scope.value;
                        clear();
                    } else {
                        alertsService.showError(
                            {
                                message: "Value is not valid. Value Type(s): " + property.validationTypes,
                                title: 'Validation Error'
                            }
                        );
                    }
                }

                function clear() {
                    scope.key = "";
                    scope.value = "";
                    if (scope.rowDom) {
                        scope.rowDom.removeClass("active");
                        scope.rowDom = null;
                        scope.editedItem = null;
                    }
                }

                function editRow(event, item) {
                    console.log(event);

                    var target =  $(event.target);
                    var rowDom = $(target.closest("tr"));
                    clear();
                    rowDom.addClass("active");
                    scope.key = item.key;
                    scope.value = item.value;
                    scope.rowDom = rowDom;
                    scope.editedItem = item;
                }

                function hasError(item) {

                    var property = scope.templateProperties[item.key];
                    if (firmwareRuleValidationService.validatePropertyValue(property, item.value)) {
                        return false;
                    } else {
                        return true;
                    }
                }
            }

            return {
                restrict: 'E',
                scope: {
                    data: '=',
                    templateProperties: '=',
                    isTemplate: "="
                },
                templateUrl: 'app/xconf/firmwarerule/firmwarerule-definePropertiesEditor.html',
                link: link
            };
        }]);

})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
    "use strict";

    angular
        .module('app.firmwarerule')
        .directive('firmwareruletemplateDefinePropertiesEditorDirective', ['$log', 'alertsService', 'firmwareRuleValidationService', function($log, alertsService, firmwareRuleValidationService) {


        function link(scope, element, attrs) {
            scope.key = "";
            scope.value = "";
            scope.rowDom = null;
            scope.editedItem = null;
            scope.optional = false;
            scope.selectedValidationTypes = ['STRING'];
            scope.options = [
                { id: 'STRING', value: 'STRING'},
                { id: 'BOOLEAN', value: 'BOOLEAN'},
                { id: 'NUMBER', value: 'NUMBER' },
                { id: 'PERCENT', value: 'PERCENT' },
                { id: 'PORT', value: 'PORT' },
                { id: 'URL', value: 'URL' },
                { id: 'IPV4', value: 'IPV4' },
                { id: 'IPV6', value: 'IPV6' }
            ];


            scope.saveRow = saveRow;
            scope.editRow = editRow;
            scope.removeRow = removeRow;
            scope.clear = clear;


            function saveRow() {
                var property = {
                    value: scope.value,
                    optional: scope.optional,
                    validationTypes: scope.selectedValidationTypes
                };

                if (!scope.key) {
                    alertsService.showError({message: "Key is blank", title: 'Validation Error'});
                    return;
                }

                if (scope.rowDom) {
                    scope.editedItem.key = scope.key;
                    scope.editedItem.value = property;
                } else {
                    scope.data.push({key: scope.key, value: property});
                }
                clear();
            }

            function clear() {
                scope.key = "";
                scope.value = "";
                scope.optional = false;
                scope.selectedValidationTypes = ['STRING'  ];
                if (scope.rowDom) {
                    scope.rowDom.removeClass("active");
                    scope.rowDom = null;
                    scope.editedItem = null;
                }
            }

            function editRow(event, item) {
                console.log(event);

                var target =  $(event.target);
                var rowDom = $(target.closest("tr"));
                clear();
                rowDom.addClass("active");
                scope.key = item.key;
                scope.value = item.value.value;
                scope.optional = item.value.optional;
                angular.copy(item.value.validationTypes, scope.selectedValidationTypes);
                scope.rowDom = rowDom;
                scope.editedItem = item;
            }

            function removeRow(item) {
                var idx = findIndexByItem(scope.data, item);
                if (idx !== -1) {
                    scope.data.splice(idx, 1);
                }

            }

            function findIndexByItem(array, item) {
                for (var i = 0; i < array.length; i++) {
                    if (array[i] === item) {
                        return i;
                    }
                }
                return -1;
            }
        }

        return {
            restrict: 'E',
            scope: {
                data: '=',
                isTemplate: "="
            },
            templateUrl: 'app/xconf/firmwareruletemplate/firmwareruletemplate-definePropertiesEditor.html',
            link: link
        };
    }]);

})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
        .controller('FormulaModalViewController', controller);

    controller.$inject = ['$log', '$uibModalInstance', '$scope', 'formula'];

    function controller($log, $modalInstance, $scope, formula) {
        var vm = this;
        vm.formula = formula;
        vm.dismiss = dismiss;

        function dismiss() {
            $modalInstance.dismiss('close');
        }
    }
})();

/*******************************************************************************
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 *******************************************************************************/
(function() {
    'use strict';

    angular
        .module('app.vodsettings')
        .controller('VodSettingsModalEditController', controller);

    controller.$inject = ['$rootScope', '$log', '$uibModalInstance', '$controller', 'vodSettings', 'formulaId', 'vodSettingsService', 'alertsService', '$scope', 'utilsService', 'EDIT_MODE'];

    function controller($rootScope, $log, $modalInstance, $controller, vodSettings, formulaId, vodSettingsService, alertsService, $scope, utilsService, EDIT_MODE) {
        var vm = this;

        angular.extend(vm, $controller('EditController', {
            $scope: $scope,
            mainPage: 'vodsettings',
            stateParameters: null
        }));

        vm.EDIT_MODE = EDIT_MODE;
        vm.currentEditMode = vodSettings ? EDIT_MODE.UPDATE : EDIT_MODE.CREATE;
        vm.vodSetting = vodSettings;
        vm.srmIPList = [];
        vm.dismiss = dismiss;
        vm.addNewIpEntity = addNewIpEntity;
        vm.removeIpEntity = removeIpEntity;
        vm.save = save;
        vm.update = update;
        vm.createDeviceSettings = createVodSettings;
        init();

        function init() {
            if (vm.vodSetting) {
                angular.forEach(vm.vodSetting.srmIPList, function(val, key) {
                    var ipEntity = {
                        name: key,
                        ip: val
                    };
                    vm.srmIPList.push(ipEntity);
                });
            } else {
                vm.vodSetting = {
                    id: formulaId,
                    applicationType: $rootScope.applicationType
                };
            }
        }

        function dismiss() {
            $modalInstance.dismiss();
        }

        function addNewIpEntity() {
            var ipEntity = {
                name: '',
                ip: ''
            };
            vm.srmIPList.push(ipEntity);
        }

        function removeIpEntity(ipEntity) {
            utilsService.removeItemFromArray(vm.srmIPList, ipEntity);
        }

        function setIpsAndNames() {
            vm.vodSetting.ipList = [];
            vm.vodSetting.ipNames = [];
            for(var i = 0; i < vm.srmIPList.length; i++) {
                vm.vodSetting.ipNames.push(vm.srmIPList[i].name);
                vm.vodSetting.ipList.push(vm.srmIPList[i].ip);
            }
        }
        
        vm.isSaving =false ;
        function createVodSettings() {
            if (vm.isSaving) return;
            vm.isSaving = true;
        
            if (!vm.vodSetting) {
                alertsService.showError({title: 'Error', message: 'VodSetting is not present'});
                vm.isSaving = false;
                return;
            }
            if (isValidVodSetting(vm.vodSetting)) {
                setIpsAndNames();
                vodSettingsService.create(vm.vodSetting).then(function(resp) {
                    alertsService.successfullySaved(resp.data.name);
                    $modalInstance.close();
                }, function(error) {
                    alertsService.showError({title: 'Error', message: error.data.message});
                }).finally(function() {
                    vm.isSaving = false;
                });
            } else {
                vm.isSaving = false;
            }
        }
        

        function save() {
            if (vm.currentEditMode === vm.EDIT_MODE.CREATE) {
                createVodSettings();
            }

            if (vm.currentEditMode === vm.EDIT_MODE.UPDATE) {
                update();
            }
        }

        function update() {
            if (vm.isSaving) return;
            vm.isSaving = true;
        
            if (!vm.vodSetting) {
                alertsService.showError({title: 'Error', message: 'VodSetting is not present'});
                vm.isSaving = false;
                return;
            }
            if (isValidVodSetting(vm.vodSetting)) {
                setIpsAndNames();
                vodSettingsService.update(vm.vodSetting).then(function(resp) {
                    alertsService.successfullySaved(resp.data.name);
                    $modalInstance.close();
                }).catch(function(error) {
                    alertsService.showError({title: 'Error', message: error.data.message});
                }).finally(function() {
                    vm.isSaving = false;
                });
            } else {
                vm.isSaving = false;
            }
        }
        

        function isValidVodSetting(vodSetting) {
            var missingFields = [];
            if (!vodSetting.name) {
                missingFields.push('name');
            }
            if (!vodSetting.locationsURL) {
                missingFields.push('location url');
            }
            if (missingFields.length > 0) {
                alertsService.showError({'title': 'Error', message: 'Next fields are empty: ' + missingFields.join(', ')});
                return false;
            }
            return true;
        }
    }
})();

/*******************************************************************************
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 *******************************************************************************/
(function() {
    'use strict';

    angular
        .module('app.vodsettings')
        .controller('VodSettingsModalViewController', controller);

    controller.$inject = ['$log', '$uibModalInstance', 'vodSettings'];

    function controller($log, $modalInstance, vodSettings) {
        var vm = this;
        vm.dismiss = dismiss;
        vm.vodSettings= vodSettings;

        function dismiss() {
            $modalInstance.dismiss();
        }

    }
})();

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
angular.module('app.distributionFilter', [])
    .filter('selectedInMinCheck', function() {
        return function(firmwareConfigSelectObjects, percentageBean) {
            var selectedFirmwareConfigs = _.filter(firmwareConfigSelectObjects, function(selectObject) {
                if (selectObject.selected || !percentageBean.firmwareCheckRequired) {
                    return selectObject.config;
                }
            });
            return selectedFirmwareConfigs;
        }
    });

/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
angular.module('app.permanentprofileFilters', [])
    .filter('profileName', function() {
        return function(profileId, profiles) {
            for(var i = 0; i < profiles.length; i++) {
                if (profileId === profiles[i].id) {
                    return profiles[i]['telemetryProfile:name'];
                }
            }
            return 'PROFILE NOT FOUND';
        }
    });

/*******************************************************************************
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
 *******************************************************************************/
angular.module('app.telemetrytwoprofileFilters', [])
    .filter('profileNameTwo', function() {
        return function(profileId, profiles) {
            for(var i = 0; i < profiles.length; i++) {
                if (profileId === profiles[i].id) {
                    return profiles[i]['name'];
                }
            }
            return 'PROFILE NOT FOUND';
        }
    });