angular.module('javaCro14App')
	.factory('ParticipantService', ['Participant', '$q', function (Participant, $q) {
		'use strict';
		return {
			getParticipant : function (params) {
				var deferred = $q.defer();
				console.log('Getting participants with params', params);
				var apiVersion = '1.0';

				if (params === undefined) {
					params = {};
				}

				params.apiVersion = params.apiVersion !== undefined ? params.apiVersion : apiVersion;

				if (params.participantId !== undefined) {
					Participant.get(
						params,
						function(data) {
							deferred.resolve(data);
						},
						function(data) {
							deferred.reject(data);
						});
				} else {
					console.log('Getting all participants', params);
					Participant.query(
						params,
						function(data) {
							deferred.resolve(data);
						},
						function(data) {
							deferred.reject(data);
						});
				}

				return deferred.promise;
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
