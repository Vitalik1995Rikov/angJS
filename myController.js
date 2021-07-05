myApp.controller('myController', function($scope, $http) {
    $http.get('welcome.htm')
    .then(function(response) {
        $scope.myWelcome = response.data;
    });
});