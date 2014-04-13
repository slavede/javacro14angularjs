angular.module('javaCro14App')
	.controller('ParticipantsCtrl', ['$scope', 'ParticipantService', function ($scope, ParticipantService) {
		'use strict';
		console.log(ParticipantService.getParticipant());
		$scope.awesomeThings = [
			'AngularJS',
			'Karma',
			'Jasmine'
		];
	}]);
