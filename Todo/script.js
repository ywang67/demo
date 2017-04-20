/**
 * Created by Owner on 2017/3/16.
 */
var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope){
    $scope.tasks = [];
    $scope.searchEnter = function(){
        /*console.log(event.which || event.keyCode);*/
        if($scope.task!= "" && event.which == 13){
            $scope.addTask();
        }
    };
    var taskData = localStorage['taskList'];
    if(taskData !== undefined){
        $scope.tasks = JSON.parse(taskData);
    }
    $scope.addTask = function(){
        $scope.tasks.push({'taskMessage': $scope.task, 'status': 'false'});
        console.log($scope.tasks);
        $scope.task = '';
        console.log($scope.tasks);
        localStorage['taskList'] = JSON.stringify($scope.tasks);
        console.log(localStorage);
    };
    $scope.contentEdit = function(mes){
        console.log($scope.tasks);

        for(i=0;i<$scope.tasks.length;i++){
            if($scope.tasks[i].taskMessage == mes){
                $scope.tasks[i].taskMessage = event.target.innerText;
            }
        }
        localStorage['taskList'] = JSON.stringify($scope.tasks);
        console.log($scope.tasks);
        event.target.contentEditable = event.target.contentEditable == "false" ? "true" : "false";
    }
    $scope.enterAgain = function(mes){
        if(event.which == 13 && mes != ''){
            $scope.contentEdit();
            console.log(11);
        }
    }
    $scope.finishTask = function(){
        localStorage['taskList'] = JSON.stringify($scope.tasks);
    }
})