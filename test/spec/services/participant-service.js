describe('Service: ParticipantService', function () {
	'use strict';
	var ParticipantService, $httpBackend, mockedData;

	// we load module first
	beforeEach(module('javaCro14App'));

	beforeEach(angular.mock.inject( function(_ParticipantService_, _$httpBackend_) {
		ParticipantService = _ParticipantService_;
		$httpBackend = _$httpBackend_;

		mockedData = [{
			id : 2,
			name : 'Mark',
			surname : 'Zuckerberg',
			age : 30,
			company : 'Facebook'
		},
		{
			id : 3,
			name : 'Larry',
			surname : 'Page',
			age : 41,
			company : 'Google'
		}];

		$httpBackend.when('GET', '/api/1.0/participant').respond(mockedData);

	}));

	//
	// Function definition
	//
	it ('function definition', function() {
		expect(ParticipantService).toBeDefined('ParticipantService should be instantianed');

		expect(ParticipantService.getParticipant).toBeDefined('ParticipantService.getParticipant should be defined');
		expect(ParticipantService.generateNameHash).toBeDefined('ParticipantService should be instantianed');
	});

	//
	// Function testing
	//
	it ('generateNameHash should work perfectly', function() {
		var hashName,
			nameToTest = 'Slaven',
			expectedHashName;

		hashName = ParticipantService.generateNameHash();
		expect(hashName).not.toBeDefined('If nothing given output of hash should be undefined');

		hashName = ParticipantService.generateNameHash({surname:'Tomac'});

		expect(hashName).not.toBeDefined('If object doesn\'t have name hash should be undefined');

		hashName = ParticipantService.generateNameHash({name:nameToTest});
		expectedHashName = CryptoJS.SHA256(nameToTest).toString(CryptoJS.enc.Base64);

		expect(hashName).toBe(expectedHashName);
	});

	//
	// Function testing - If includes backend requests, $httpBackend mock required
	//
	it ('getParticipant should work perfectly', function() {
		var getParticipantResult = [];

		ParticipantService.getParticipant().then(function(data) {
			getParticipantResult = data;
		});

		expect(getParticipantResult.length).toBe(0);

		$httpBackend.flush();

		expect(getParticipantResult.length).toBe(mockedData.length);
	});
});
