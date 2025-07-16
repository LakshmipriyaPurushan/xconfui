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
        .controller('FeatureEditController', controller);

    controller.$inject = ['$rootScope', '$scope', '$state', '$controller', '$stateParams', 'featureService', 'alertsService', 'ruleHelperService', '$uibModal', 'NAMESPACED_LIST_TYPE', 'utilsService'];

    function controller($rootScope, $scope, $state, $controller, $stateParams, featureService, alertsService, ruleHelperService, $uibModal, NAMESPACED_LIST_TYPE, utilsService) {
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
            base64encode: false,
            whitelistProperty: {}
        };
        vm.namespacedListData = ruleHelperService.buildNamespacedListData();
        vm.NAMESPACED_LIST_TYPE = NAMESPACED_LIST_TYPE;

        vm.saveFeature = saveFeature;
        vm.clearWhitelistPropertyValue = clearWhitelistPropertyValue;
        vm.showAddNamespacedListModal = showAddNamespacedListModal;
        vm.clearWhitelistProperty = clearWhitelistProperty;
        vm.enableBase64 = true;

        init();

        function init() {
            if (vm.isFeatureId) {
                featureService.getFeature($stateParams.featureId).then(function(result) {
                    vm.parameters = [];
                    vm.feature = result.data;
                    for (var key in vm.feature.configData) {
                        let base64Encoded = false;
                        if(utilsService.isBase64(vm.feature.configData[key]) && !utilsService.isGibberish(atob(vm.feature.configData[key]))) {
                            base64Encoded = true;
                            vm.feature.configData[key] = atob(vm.feature.configData[key]);
                        }
                        vm.parameters.push({key: key, value: vm.feature.configData[key], base64Encoded: base64Encoded});
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
                    if(item.base64Encoded) {
                        item.value = !utilsService.isBase64(item.value) || (utilsService.isBase64(item.value) && utilsService.isGibberish(atob(item.value))) ? btoa(item.value) : item.value;
                    } else {
                        item.value = utilsService.isBase64(item.value) && !utilsService.isGibberish(atob(item.value)) ? atob(item.value) : item.value;
                    }
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
                        };
                    }
                }
            });
        }

        function clearWhitelistProperty() {
            vm.feature.whitelistProperty = {};
        }
    }

})();