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
