    myApp.config(function($routeProvider) {
        $routeProvider
        .when("/", {
          templateUrl : "index.html"
        })
        .when("/red", {
          templateUrl : "red.htm"
        })
        .when("/green", {
          templateUrl : "green.htm"
        })
        .when("/blue", {
          templateUrl : "blue.htm"
        });
      });