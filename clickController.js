myApp.controller('clickController', function($scope) {
    $scope.countClick = 0;
    $scope.myFunction = function () {
        $scope.countClick++;
    }
});