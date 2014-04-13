angular.module('javaCro14App').factory('Participant', ['$resource', function($resource) {
	'use strict';
	return $resource('/api/:apiVersion/participant/:participantId',
		{
			apiVersion: '@apiVersion',
			participantId: '@participantId'
		}
		);
}]);
