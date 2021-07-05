myApp.controller('myController', function($scope) {
    $scope.firstName = 'John';
    $scope.changeName = function() {
        $scope.firstName = 'Nelly';
    };
});
