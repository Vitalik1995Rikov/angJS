myApp.controller('myController', function($scope) {
    $scope.firstName = 'John';
    $scope.lastName = 'Black';
    $scope.fullName = function() {
        return $scope.firstName + " " + $scope.lastName;
    };
});
