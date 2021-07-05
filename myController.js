myApp.controller('myController', function($scope) {
    $scope.carName = 'Jeep';
    $scope.color = 'red';
});

myApp.run(function($rootScope) {
    $rootScope.color = 'blue';
});
