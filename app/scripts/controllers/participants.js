angular.module('javaCro14App')
	.controller('ParticipantsCtrl', ['$scope', '$log', 'ParticipantService',
		function ($scope, $log, ParticipantService) {
			'use strict';
			$scope.participants = [];

			ParticipantService.getParticipant().then(
				function(data) {
					$log.info('Got participants', data);
					$scope.participants = data;
				},
				function(data) {
					$log.error('Error while getting participants', data);
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
