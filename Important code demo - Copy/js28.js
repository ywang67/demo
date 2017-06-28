/**
 * Created by Owner on 2017/1/20.
 */
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider
        /*.when('/',*/
             /*.when('/:message',*/
            .when('/map/:Country/:State/:City',
            {
                templateUrl: '28myApp.html',
                controller: 'firstController'
            })
        .when('/map/Tom', {
            template: 'Catch Jerry'
        })
        .otherwise({
            template: "<h1>Nothing</h1><p>Nothing has been selected</p>"
        });

});
myApp.controller('firstController', function ($scope,$routeParams) {
    $scope.model = {
        /*message: 'This is my app!'*/
        /*message:$routeParams.message*/
        message:"Address:" +
         $routeParams.Country +","+
         $routeParams.State + ","+
         $routeParams.City + ","
    }
});