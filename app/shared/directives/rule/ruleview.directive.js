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
    "use strict";

    angular.module('app.directives').directive('ruleviewDirective', ['$compile', 'ruleHelperService', 'OPERATION', 'utilsService', function($compile, ruleHelperService, OPERATION, utilsService) {
        return {
            restrict: 'E',
            templateUrl: 'app/shared/directives/rule/rule-view.directive.html',
            scope: {
                data: '='
            },
            link: function(scope, element, attrs) {
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