let myApp = angular.module('myApp', []);

myApp.controller('myController', function($scope) {
    $scope.firstName = 'John';
    $scope.lastName = 'Black';
});