'use strict';

angular
  .module('javaCro14App', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/participants', {
        templateUrl: 'views/participants.html',
        controller: 'ParticipantsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
