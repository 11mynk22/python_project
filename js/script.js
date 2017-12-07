/*global angular */

var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'components/home.html'
        })
        .when('/login', {
            templateUrl: 'components/login.html'
        })
        .when('/admin_login', {
            templateUrl: 'components/admin_login.html'
        })
        .when('/search', {
            templateUrl: 'components/search.html'
        })
        .when('/lookup', {
            templateUrl: 'components/lookup.html'
        })
        .when('/delete', {
            templateUrl: 'components/delete.html'
        })
        .when('/view_users', {
            templateUrl: 'components/view_users.html'
        })
        .when('/signin', {
            templateUrl: 'components/signin.html'
        })
        .when('/signup', {
            templateUrl: 'components/signup.html'
        })
        .when('/logout', {
            templateUrl: '~/'
        })
        .otherwise({
            template: 'Error 404'
        });
});
