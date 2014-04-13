angular.module('javaCro14App')
	.factory('ParticipantService', ['Participant', function (Participant) {
		'use strict';
		return {
			getParticipant : function (params) {
				console.log('Getting participants with params', params);
				var apiVersion = '1.0';

				if (params === undefined) {
					params = {};
				}

				params.apiVersion = params.apiVersion !== undefined ? params.apiVersion : apiVersion;

				if (params.participantId !== undefined) {
					return Participant.get(params);
				} else {
					console.log('Getting all participants', params);
					return Participant.query(params);
				}
			},
			generateNameHash : function (participant) {
				if (participant !== undefined && participant.name !== undefined) {
					return CryptoJS.SHA256(participant.name).toString(CryptoJS.enc.Base64);
				} else {
					return undefined;
				}
			}
		};
	}]);
