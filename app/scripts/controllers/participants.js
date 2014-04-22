angular.module('javaCro14App')
	.controller('ParticipantsCtrl', ['$scope', 'ParticipantService',
		function ($scope, ParticipantService) {
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

			$scope.selectParticipant = function (participantId) {
				angular.forEach($scope.participants, function(participant) {
					if (participant.id === participantId) {
						$scope.selectedParticipant = participant;
					}
				});
			};
		}
	]);
