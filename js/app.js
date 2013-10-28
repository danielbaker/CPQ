var cpq = angular.module('cpq', ['googleMaps', 'ui.bootstrap']);

cpq.controller('googleAutoComplete', ['$scope', 'autoComplete', function($scope, autoComplete){
    $scope.selected = undefined;
    $scope.search = autoComplete.getSuggestions;
}]);

cpq.directive('bootstrapAccordionId', function(){
    return {
        restrict: 'A',
        compile: function() {
            return {
                pre: function(scope, elem, attrs){
                    scope.bootstrapAccordionId = attrs.bootstrapAccordionId;
                },
                post: function(scope, elem, attrs) {
                    elem.addClass('panel-group')
                    elem.attr('id', attrs.bootstrapAccordionId)
                }
            }
        }
    }
});

cpq.directive('accordionGroupId', function(){
    return {
        restrict: 'A',
        scope: true,
        link: function(scope, elem, attrs) {
            scope.accordionGroupId = attrs.accordionGroupId;
        }
    }
});

cpq.directive('accordionTitle', function(){
    return {
        restrict: 'A',
        replace: true,
        link: function(scope, elem, attrs) {
            scope.title = elem.text();
        },
        transclude: true,
        template: '<div class="panel-heading"><h4 class="panel-title">' +
            '<a ng-transclude class="accordion-toggle" data-toggle="collapse" data-parent="#{{ bootstrapAccordionId }}" href="#{{ accordionGroupId }}">' +
            '</a></h4></div>'
    }
});

cpq.directive('accordionContent', function(){
    return {
        restrict: 'A',
        replace: true,
        link: function(scope, elem, attrs) {
            scope.title = elem.text();
        },
        transclude: true,
        template: '<div id="{{ accordionGroupId }}" class="panel-collapse collapse"><div class="panel-body" ng-transclude></div></div>'
    }
});