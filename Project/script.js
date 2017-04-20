'use strict';
// Declare (or Register, Create) an Angular module.
var app = angular.module('myApp', ['ngRoute']);

// ---------- Config route(s). ----------
// Inject $routeProvider dependency for routing.
app.config(['$routeProvider', function($routeProvider) {
  // Home 
  $routeProvider.when('/', {
    templateUrl: 'home.html',
    controller: 'HomeController'
  });
  // Food
  $routeProvider.when('/food', {
    templateUrl: 'food.html',
    controller: 'FoodController'
  });
  // Drinks
  $routeProvider.when('/drinks', {
    templateUrl: 'drinks.html',
    controller: 'DrinksController'
  });
  // Otherwise, redirect to Home
  $routeProvider.otherwise({redirectTo: '/'});
}]);

// ---------- Create Controller(s). ----------
// HomeCotnroller
app.controller('HomeController', ['$scope', function($scope){
  // Bind "message" to display to html pages
  $scope.message = 'Welcome to Paul\'s new SPA demo';
}]);

// FoodCotnroller
app.controller('FoodController', ['$scope', function($scope){
  // Bind "message" to display to html pages
  $scope.message = 'This is Food page.';
}]);

// DrinksCotnroller
app.controller('DrinksController', ['$scope', function($scope){
  // Bind "message" to display to html pages
  $scope.message = 'This is Drinks page.';
}]);