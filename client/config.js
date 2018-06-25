angular
  .module("myApp")
  .config(($routeProvider) => {
    $routeProvider
        .when('/', {
            templateUrl: '/views/users.html',
            controller: 'UsersController',
            controllerAs: 'users'
        })
        .otherwise({
            redirectTo : '/'
        })
    });
