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
                    stopAdd: '=',
                    enableBase64: '='
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

                    scope.setBase64EncodedFlag = function setBase64EncodedFlag(property) {
                        if(property.value && utilsService.isBase64(property.value) && !utilsService.isGibberish(atob(property.value))) {
                            property.base64Encoded = true;
                        } else {
                            property.base64Encoded = false;
                        }
                    };
                }
            }
    }]);

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
                    case OPERATION.LTE:
                    case OPERATION.GTE:
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
                    case OPERATION.LTE:
                    case OPERATION.GTE:
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
                    case OPERATION.LTE:
                    case OPERATION.GTE:
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
                return true;
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
        vm.generalItemsNumber = 0;
        vm.availablePriorities = [];
        vm.searchParam = {};
        vm.searchOptions = RULE_SEARCH_OPTIONS;
        vm.isDataLoading = false;

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
        vm.startParse = startParse;

        init();
        
        function init() {
            getFormulas();
            setAvailablePriorities(vm.formulasSize);
        }

        function getFormulas() {
            vm.isDataLoading = true;
            formulaService.getPage(vm.pageSize, vm.pageNumber, vm.searchParam).then(function (result) {
                    vm.isDataLoading = false;
                    vm.rules = result.data;
                    vm.generalItemsNumber = result.headers('numberofitems');
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
                        alertsService.showError({title: 'Error', message: error.data.message});
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
                    alertsService.showError({title: 'Error', message: reason.data.message});
                    init();
                });
            }, function(btn) {
                    init(); 
            });
        }

        function shiftItems() {
            vm.generalItemsNumber--;
            var numberOfPagesAfterDeletion = Math.ceil((vm.generalItemsNumber) / vm.pageSize);
            var pageNumber = (vm.pageNumber > numberOfPagesAfterDeletion && numberOfPagesAfterDeletion > 0) ? numberOfPagesAfterDeletion : vm.pageNumber;
            getFormulas(pageNumber, vm.pageSize);
            setAvailablePriorities(vm.formulasSize);
        }

        function changePageSize(pageSizeModel) {
            vm.pageSize = pageSizeModel;
            paginationService.saveDefaultPageSize(vm.pageSize, vm.paginationStorageKey);
            getFormulas(vm.pageNumber, vm.pageSize);
        }

        function getSize() {
            return vm.generalItemsNumber;
        }

        function startParse() {
            return vm.generalItemsNumber > 0;
        }

        function setAvailablePriorities(size) {
            size = size;

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
        .module('app.environment')
        .controller('EnvironmentEditController', controller);

    controller.$inject = ['ENTITY_TYPE'];

    function controller(ENTITY_TYPE) {
        var vm = this;
        vm.entityType = ENTITY_TYPE.ENVIRONMENT;
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
        .module('app.environment')
        .controller('EnvironmentImportController', controller);

    controller.$inject = ['ENTITY_TYPE'];

    function controller(ENTITY_TYPE) {
        var vm = this;
        vm.entityType = ENTITY_TYPE.ENVIRONMENT;
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
        .module('app.environment')
        .controller('EnvironmentsController', controller);

    controller.$inject = ['ENTITY_TYPE'];

    function controller(ENTITY_TYPE) {
        var vm = this;
        vm.ENTITY_TYPE = ENTITY_TYPE;
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
        .module('app.log')
        .controller('LogController', controller);

    controller.$inject = ['logService', 'alertsService', 'namespacedListService'];

    function controller(logService, alertsService, namespacedListService) {
        var vm = this;
        vm.logs = null;
        vm.macAddress = null;
        vm.hasError = false;
        vm.hashAndPercent = null;

        vm.getLogs = getLogs;
        vm.validateMacAddress = validateMacAddress;

        function getLogs() {
            var normalizedMac = namespacedListService.normalizeMacAddress(vm.macAddress);
            logService.getLogs({param: normalizedMac}, function(resp) {
                vm.logs = resp;
            }, function(error) {
                alertsService.showError({title: 'Error', message: error.data.message});
            });
            getHashAndPercent();
        }
        function getHashAndPercent() {
            var normalizedMac = namespacedListService.normalizeMacAddress(vm.macAddress);
            logService.getHashAndPercent({esbMac: normalizedMac}, function(resp) {
                vm.hashAndPercent = resp;
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
        .module('app.model')
        .controller('ModelEditController', controller);

    controller.$inject = ['ENTITY_TYPE'];

    function controller(ENTITY_TYPE) {
        var vm = this;
        vm.ENTITY_TYPE = ENTITY_TYPE;
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
        .module('app.model')
        .controller('ModelImportController', controller);

    controller.$inject = ['ENTITY_TYPE'];

    function controller(ENTITY_TYPE) {
        var vm = this;
        vm.entityType = ENTITY_TYPE.MODEL;
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
        .module('app.model')
        .controller('ModelController', controller);

    controller.$inject = ['ENTITY_TYPE'];

    function controller(ENTITY_TYPE) {
        var vm = this;
        vm.ENTITY_TYPE = ENTITY_TYPE;
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
        vm.isDataLoading = false;
        init();

        function init() {
            vm.isDataLoading = true;
            firmwareConfigService.getAll().then(function(resp) {
                vm.allFirmwareConfigs = resp.data;
                initPercentageBean();
                vm.isDataLoading = false;
            }, function(error) {
                vm.isDataLoading = false;
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
                    vm.isDataLoading = false;
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
                endPercentRange: '',
                isPaused: false
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
                boundTelemetryIds: [],
                noOp: false
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
                if (vm.targetingRule.rule.noOp) {
                    vm.targetingRule.rule.boundTelemetryIds = [];
                }
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
            var emptyFields = [];
            if (!rule.condition && !rule.compoundParts) {
                 emptyFields.push('condition');
            }
            if (!rule.name) {
                emptyFields.push('name');
            }
            if (!rule.noOp && rule.boundTelemetryIds.length === 0) {
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