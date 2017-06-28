/**
 * Created by Owner on 2017/1/17.
 */
angular.module('myApp',[])
    .factory('Data', function(){
        return[
            {
                name: 'Jerry',
                age: '20',
                city: 'Chicago'
            },
            {
                name:'Tom',
                age: '21',
                city: 'Chicago'
            },
            {
                name: 'Win',
                age: '26',
                city: 'Confirm'
            }
        ]
    })
    .controller('myCtrl', function($scope,Data){
        $scope.data = Data;
        console.log($scope);
        $scope.Data = Data;  //automatically injection
    })

    .filter('filterCity',function(){
        return function(obj){
            var newObj = [];

            angular.forEach(obj, function(o){
                if(o.city === 'Chicago'){
                    newObj.push(o);
                }
            });
            return newObj;
        }
    });
