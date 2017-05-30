import angular from 'angular'


const  app = angular.module('app', []);
app.controller('ChartCtrl', ['$scope','$http',function($scope,$http) {
    $scope.data = [
        1311,
        2113,
        1563,
        1873,
        2251,
        3472,
        2742,
        3741,
        1992,
        2195,
        3102,
        2569 
   ];

   


   

}])
  

export default app;