angular.module('javaCro14App')
	.directive('participantDetails', function () {
		'use strict';
		return {
			restrict : 'E',
			scope : {
				participant : '='
			},
			template : '<div class="participant-details-container">' +
							'<h5>Participant details</h5>' +
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
						'</div>'
		};

	});
