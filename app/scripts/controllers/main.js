angular.module('javaCro14App')
	.controller('MainCtrl', ['$scope', '$interval', function ($scope, $interval) {
		'use strict';
		$scope.awesomeThings = [
			'AngularJS',
			'Karma',
			'Jasmine'
		];

		$scope.messageInterval = $interval(
			function() {
				$scope.showMessage = !$scope.showMessage;
			},
			500,
			2500);

		$scope.showMessage = false;
	}]);
