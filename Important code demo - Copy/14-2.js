/**
 * Created by Owner on 2017/1/17.
 */
var myApp = angular.module('myApp',[], function($filterProvider, $provide, $controllerProvider){
    $provide.service('Data', function(){
        return[
            {
                name: 'Jerry',
                age: '20',
                city: 'Chicago'
            },
            {
                name: 'Tom',
                age: '21',
                city: 'Chicago'
            }]
    });

    $filterProvider.register('filterAge', function(){
        return function(obj){
            var  newObj = [];

            angular.forEach(obj, function(o){
                if(o.age<25){
                    newObj.push(o);
                }
            });
            return newObj;
        }
    });

    $controllerProvider.register('myCtrl', function($scope, Data){
        $scope.data = Data;
    })
});