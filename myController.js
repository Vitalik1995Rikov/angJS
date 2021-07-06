myApp.controller('myController', function($scope) {
    $scope.firstName = "John";
    $scope.firstNameUpper = angular.uppercase($scope.firstName);
    $scope.firstNameString = angular.isString($scope.firstName);
    $scope.firstNameNumber = angular.isNumber($scope.firstName);
});