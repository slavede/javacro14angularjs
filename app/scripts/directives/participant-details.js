angular.module('javaCro14App')
	.directive('participantDetails', ['ParticipantService', function (ParticipantService) {
		'use strict';
		return {
			restrict : 'E',
			scope : {
				participant : '='
			},
			template : '<div class="participant-details-container">' +
							'<h5><strong>Participant details</strong></h5>' +
							'<div class="row">' +
								'<div class="col-md-3"><strong>Name</strong></div>' +
								'<div class="col-md-8">{{participant.name}}</div>' +
							'</div>' +
							'<div class="row">' +
								'<div class="col-md-3"><strong>Surname</strong></div>' +
								'<div class="col-md-8">{{participant.surname}}</div>' +
							'</div>' +
							'<div class="row">' +
								'<div class="col-md-3"><strong>Age</strong></div>' +
								'<div class="col-md-8">{{participant.age}}</div>' +
							'</div>' +
							'<div class="row">' +
								'<div class="col-md-3"><strong>Company</strong></div>' +
								'<div class="col-md-8">{{participant.company}}</div>' +
							'</div>' +
							'<div class="row">' +
								'<div class="col-md-3"><strong>User Hash</strong></div>' +
								'<div class="col-md-8">{{nameHash}}</div>' +
							'</div>' +
						'</div>',
			link : function(scope) {
				scope.nameHash = ParticipantService.generateNameHash(scope.participant);

				scope.$watch('participant', function(newValue, oldValue) {
					scope.nameHash = ParticipantService.generateNameHash(newValue);
				});
			}
		};

	}]);
