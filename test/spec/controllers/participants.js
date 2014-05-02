describe('Controller: ParticipantsCtrl', function () {
	'use strict';
	// load the controller's module
	beforeEach(module('javaCro14App'));

	var ParticipantsCtrl, scope, $httpBackend, mockedData, $log;

	// Initialize the controller and a mock scope
	beforeEach(inject(function ($controller, $rootScope, _$httpBackend_, _$log_) {
		scope = $rootScope.$new();
		ParticipantsCtrl = $controller('ParticipantsCtrl', {
			$scope: scope
		});

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

		$log = _$log_;
	}));

	//
	// Application workflow - make sure that after each test there isn't any
	// unflushed request or some that we didn't expect
	// 
	afterEach(function() {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});

	//
	// Scope – variable instantiation
	//
	it('should have initialized scope properties', function () {
		expect(scope.participants).
			toBeDefined('Scope should have participants property defined');
		expect(scope.participants.length).toBe(0);

		$httpBackend.flush();

		expect($log.info.logs.length).toBe(1, 'There should be 1 log entr after getting participants');
		expect($log.info.logs[0]).toMatch(/^Got participants.*/, 'Log entry should start with "Got participants"');

		expect(scope.participants.length).
			toBe(2, 'After ajax is done there should be 2 participants');

		expect(scope.selectParticipant).
			toBeDefined('Scope should have selectParticipant property defined');


	});

	//
	// Scope - functionality of the functions
	//
	it('should have update selectedParticipant based on id', function() {
		$httpBackend.flush();

		expect(scope.selectedParticipant).not.
			toBeDefined('Before selecting participant selectedParticipant should be undefined');
		scope.selectParticipant(mockedData[0].id);

		expect(scope.selectedParticipant).
			toBeDefined('After selecting participant selectedParticipant should be defined');
		expect(scope.selectedParticipant.name).
			toBe(mockedData[0].name, 'selectedParticipant should have same name as first element from mockedData');
		expect(scope.selectedParticipant.surname).
			toBe(mockedData[0].surname, 'selectedParticipant should have same name as second element from mockedData');
	});
});