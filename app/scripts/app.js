'use strict';

angular
	.module('javaCro14App', [
		'ngCookies',
		'ngResource',
		'ngSanitize',
		'ngRoute'
	])
	.config(['$routeProvider', '$exceptionHandlerProvider', function ($routeProvider, $exceptionHandlerProvider) {
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
		$exceptionHandlerProvider.mode('log');
	}])
	.run(['$rootScope', '$timeout', function($rootScope, $timeout) {
		$rootScope.tabActive = {
			home : true,
			participants : false
		};
		$rootScope.loadedLogo = false;

		$timeout(function() {
			$rootScope.loadedLogo = true;
		}, 2000);
		
		$rootScope.$on('$locationChangeStart', function(scope, next, current) {
			var splittedNext = next.split('#/');

			if (splittedNext[1] === '') {
				splittedNext[1] = 'home';
			}

			$rootScope.tabActive[splittedNext[1]] = true;

			angular.forEach($rootScope.tabActive, function(value, key) {
				if (key === splittedNext[1]) {
					$rootScope.tabActive[key] = true;
				} else {
					$rootScope.tabActive[key] = false;
				}
			});
		});
	// for debugging exceptions in your code
	}]).factory('$exceptionHandler', function () {
		return function (exception, cause) {
			exception.message = '[JavaCro14App] ' + exception.message;
			throw exception;
		};
  });
