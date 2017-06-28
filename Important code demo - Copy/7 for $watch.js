/**
 * Created by Owner on 2017/1/13.
 */
var app = angular.module('myApp', []);
app.controller('myCtrl',function($scope){
    $scope.name = 'Jerry';
    $scope.data = {
        name:'Tom',
        count:20
    }
    $scope.count = 0;
    // watch a model, when model change one time
    // it will trigger the second "oldvalue"
   /* $scope.$watch('name', function(newValue, oldValue){
        $scope.count++;
        if($scope.count>30){
            $scope.name = 'Over 30 times';
        }
    });*/
    $scope.stop = function () {
        textWatch();
    }
    var textWatch = $scope.$watchCollection('data', function (newValue, oldValue) {
        if(oldValue === newValue){return}
        $scope.data.count = $scope.data.count +1;
    })
    /*var textWatch = $scope.$watch('name', function (newValue, oldValue) {
        if(newValue === oldValue){return}
        $scope.count ++;
    })*/
/*    $scope.$watch('data', function(){

    }, true)*/
});
