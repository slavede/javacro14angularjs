angular.module('javaCro14App')
	.controller('ParticipantsCtrl', ['$scope', 'ParticipantService', function ($scope, ParticipantService) {
		'use strict';
		$scope.participants = [];
		// console.log($scope.participants);
		ParticipantService.getParticipant().then(
			function(data) {
				console.log('Success', data);
				$scope.participants = data;
			},
			function(data) {
				console.log('Error', data);
			}
		);
	}]);
