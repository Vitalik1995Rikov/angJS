myApp.controller('myController', function($scope) {
    $scope.firstName = 'John';
    $scope.lastName = 'Black';
});

myApp.directive('w3TestDirective', function() {
    return {
        template: 'I made my first directive'
    }
});