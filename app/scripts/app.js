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
	})
	.run(function($rootScope) {
		$rootScope.tabActive = {
			home : true,
			participants : false
		};
		
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
	});
