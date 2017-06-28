var app = angular.module('myApp',[]);
app.directive('customDirective', function () {
    return {
        restrict:'ECMA',
        scope: {
            title:'@'
        },
        templateUrl:'xxx.html',
        replace:true,

        controller: function (scope) {
            
        },
        link: function (scope,element,attrs) {

        }
    }
});