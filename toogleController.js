myApp.controller('toogleController', function($scope) {
    $scope.showMe = false;
    $scope.funcToogle = function () {
        $scope.showMe = !$scope.showMe;
    }
});