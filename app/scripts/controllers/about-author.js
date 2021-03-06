angular.module('javaCro14App')
	.controller('AboutAuthorCtrl', ['$scope',
		function ($scope) {
			'use strict';

			$scope.contactDetails = {
				name : 'Slaven',
				lastName : 'Tomac',
				company : 'Amphinicy Technologies',
				email : 'slaven.tomac@amphinicy.com; slaven.tomac@gmail.com',
				twitter : 'slaventomac'
			};

			$scope.biography = 'Slaven Tomac got his Master’s degree on Faculty of Electrical Engineering and Computing in Zagreb. ' +
				'His main interest is web development which he has been working on for 3 last year at Amphinicy Technologies (frontend and backend). ' +
				'Slaven’s expertise are Perl, Python, jQuery and JavaScript (jQuery and AngularJS). ' +
				'Besides web development he has an interest and experience in Android and Java development. ' +
				'He is a hard working software engineer always seeking for new technologies and new interesting programming languages to learn.';
		}
	]);
