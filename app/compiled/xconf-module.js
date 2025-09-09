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
        'app.authorization'
    ])
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
        .module('app.change', ['diff-match-patch'])
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
            'write-changes-*', 'write-changes-stb', 'write-changes-xhome', 'write-changes-rdkcloud', 'write-changes-sky'
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
        'EXISTS',
        'LTE',
        'GTE'
    ])

    .constant('PERCENTAGE_BEAN_OPERATION_ARRAY', [
        'IS',
        'IN',
        'IN_LIST',
        'LIKE',
        'LTE',
        'GTE',
        'EXISTS'
    ])

    .constant('TARGETING_RULE_OPERATION_ARRAY', [
        'IS',
        'IN_LIST',
        'LIKE',
        'LTE',
        'GTE',
        'PERCENT',
        'EXISTS'
    ])

    .constant('SETTING_RULE_OPERATION_ARRAY', [
        'IS',
        'IN_LIST',
        'LIKE',
        'LTE',
        'GTE',
        'PERCENT',
        'EXISTS'
    ])

    .constant('RFC_RULE_OPERATION_ARRAY', [
        'IS',
        'IN_LIST',
        'LIKE',
        'LTE',
        'GTE',
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
            class: 'com.comcast.xconf.firmware.RuleAction'
        },
        'DEFINE_PROPERTIES': {
            name: 'DEFINE_PROPERTIES',
            class: 'com.comcast.xconf.firmware.DefinePropertiesAction'
        },
        'BLOCKING_FILTER': {
            name: 'BLOCKING_FILTER',
            class: 'com.comcast.xconf.firmware.BlockingFilterAction'
        },

        'RULE_TEMPLATE': {
            name: 'RULE_TEMPLATE',
            class: 'com.comcast.xconf.firmware.RuleAction'
        },
        'DEFINE_PROPERTIES_TEMPLATE': {
            name: 'DEFINE_PROPERTIES_TEMPLATE',
            class: 'com.comcast.xconf.firmware.DefinePropertiesTemplateAction'
        },
        'BLOCKING_FILTER_TEMPLATE': {
            name: 'BLOCKING_FILTER_TEMPLATE',
            class: 'com.comcast.xconf.firmware.BlockingFilterAction'
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
        'certExpiryDays'
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
        'certExpiryDays'
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
        'xhome',
        'rdkcloud',
        'sky'
    ])

    .constant('SINGLE_APPLICATION_TYPE_PAGE', [
        'environment',
        'model',
        'namespacedlist',
        'firmwareruletemplate'
    ])

    .constant('APPLICATION_TYPE', {
        STB: 'stb',
        XHOME: 'xhome',
        RDKCLOUD: 'rdkcloud',
        SKY: 'sky'
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
        .module('app.devicesettings', ['ngResource'])
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
        .module('app.formula', ['ngResource', 'app.filters'])
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
        .module('app.loguploadsettings', ['ngResource'])
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
        .module('app.testpage', ['ngResource'])
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
        .module('app.uploadRepository', ['ngResource'])
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
        .module('app.vodsettings', ['ngResource', 'app.filters'])
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
        .module('app.environment', ['ngResource'])
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
        .module('app.log', ['ngResource'])
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
        .module('app.model', ['ngResource'])
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
        .module('app.percentfilter', ['app.distributionFilter'])
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
        .module('app.firmwareReportPage', ['ngResource'])
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
        .module('app.roundrobinfilter', ['ngResource'])
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
        .module('app.firmwareTestPage', ['ngResource'])
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
        .module('app.firmwarerule', ['ui.bootstrap'])
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
        .module('app.firmwareruletemplate', [])

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
        .module('app.migration', [])
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

    angular.module('app.namespacedlist', ['app.filters'])

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
    angular.module('app.feature', []);
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
    angular.module('app.featurerule', ['ui.select']);
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
        .module('app.settingprofile', [])
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
        .module('app.settingrule', ['ngResource'])
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
        .module('app.settingsTestPage', []);
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
        .module('app.permanentprofile', ['ngResource'])
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
        .module('app.targetingrule', ['ngResource', 'app.permanentprofileFilters'])
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
        .module('app.telemetrytwoprofile', ['ngResource'])
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
        .module('app.telemetrytwotargetingrule', ['ngResource', 'app.telemetrytwoprofileFilters'])
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
        .module('app.telemetrytwotestpage', ['ngResource', 'app.telemetrytwoprofileFilters'])
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
        .module('app.telemetryTestPage', ['ngResource', 'app.permanentprofileFilters'])
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
        .module('app.telemetrytwochange', ['diff-match-patch'])
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
                            console.log('unauthorized');
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

            .state('rfc-recooking-lock', {
                controller: 'RfcPrecookingLockController',
                controllerAs: 'vm',
                url: '/rfc-processing-lock',
                templateUrl: 'app/xconf/rfc/precookinglock/recookinglock.html',
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

    angular.module('app.changeLog', ['app.filters']);
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

    angular.module('app.controller', []);
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

    angular.module('app.directives', []);
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

    angular.module('app.filtered-select', []);
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

    angular.module('app.filters', []);
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
        .module('app.sharedTestPage', [])
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

    angular.module('app.services', ['ngCookies']);
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

    angular.module('app.statistics', ['app.filters']);
})();
