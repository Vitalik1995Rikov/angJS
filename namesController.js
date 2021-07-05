myApp.controller('namesController', function($scope, $timeout) {
   $scope.myHeader = 'Hello, world';
   $timeout(function () {
       $scope.myHeader = 'How are you today?';
   }, 2000);
});