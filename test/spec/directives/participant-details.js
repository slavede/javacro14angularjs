describe('Directive: ParticipantDetails', function () {
	'use strict';
	// load the controller's module
	beforeEach(module('javaCro14App'));

	var element, $scope, ParticipantService;

	beforeEach(inject(function ($compile, $rootScope, _ParticipantService_) {

		$scope = $rootScope.$new();
		ParticipantService = _ParticipantService_;

		$scope.currentParticipant = {
			name : 'Slaven',
			surname : 'Tomac',
			age : '26',
			company : 'Amphinicy Technologies'
		};

		element = $compile('<participant-details participant="currentParticipant"></participant-details>')($scope);

		$scope.$apply();
	}));

	// 
	// Layout
	//
	it ('should render correctly', function() {
		var container,
			containerHeader,
			rows;

		container = element.find('.participant-details-container');

		expect(container).toBeDefined('Element should contain div with class participant-details-container');
		expect(container.length).toBe(1, 'Element should contain only one div with class participant-details-container');

		containerHeader = container.find('h5');

		expect(containerHeader).toBeDefined('Element should have header h5');
		expect(containerHeader.length).toBe(1, 'Element should have one header h5');
		expect(containerHeader.text()).toBe('Participant details');

		rows = element.find('div.row');

		expect(rows.length).toBe(5, 'There should be 5 rows of details defined');

		angular.forEach(rows, function(row, index) {
			var rowDivs = angular.element(row).find('div');
			// each row should have two divs 
			// (first for property name and second for property value)
			expect(rowDivs.length).toBe(2);

			if (index === 0) {
				// first is name
				expect(angular.element(rowDivs[0]).text()).toBe('Name');
				expect(angular.element(rowDivs[1]).text()).toBe($scope.currentParticipant.name);
			} else if (index === 1) {
				expect(angular.element(rowDivs[0]).text()).toBe('Surname');
				expect(angular.element(rowDivs[1]).text()).toBe($scope.currentParticipant.surname);
			} else if (index === 2) {
				expect(angular.element(rowDivs[0]).text()).toBe('Age');
				expect(angular.element(rowDivs[1]).text()).toBe($scope.currentParticipant.age);
			} else if (index === 3) {
				expect(angular.element(rowDivs[0]).text()).toBe('Company');
				expect(angular.element(rowDivs[1]).text()).toBe($scope.currentParticipant.company);
			} else if (index === 4) {
				expect(angular.element(rowDivs[0]).text()).toBe('User Hash');
				expect(angular.element(rowDivs[1]).text()).toBe($scope.$$childHead.nameHash);
			}
		});
	});


	// 
	// Scope
	//
	it ('scope should have defined it\'s own functions/properties', function() {
		expect($scope.$$childHead.nameHash).toBeDefined();
	});

	// Model changes
	it ('should update once participant is changed', function() {
		var rows = element.find('div.row');
		$scope.$apply(function() {
			$scope.currentParticipant = {
				name : 'Bill',
				surname : 'Gates',
				age : '59',
				company : 'Microsoft'
			};
		});

		angular.forEach(rows, function(row, index) {
			var rowDivs = angular.element(row).find('div');
			// each row should have two divs 
			// (first for property name and second for property value)
			expect(rowDivs.length).toBe(2);

			if (index === 0) {
				// first is name
				expect(angular.element(rowDivs[0]).text()).toBe('Name');
				expect(angular.element(rowDivs[1]).text()).toBe('Bill');
			} else if (index === 1) {
				expect(angular.element(rowDivs[0]).text()).toBe('Surname');
				expect(angular.element(rowDivs[1]).text()).toBe('Gates');
			} else if (index === 2) {
				expect(angular.element(rowDivs[0]).text()).toBe('Age');
				expect(angular.element(rowDivs[1]).text()).toBe('59');
			} else if (index === 3) {
				expect(angular.element(rowDivs[0]).text()).toBe('Company');
				expect(angular.element(rowDivs[1]).text()).toBe('Microsoft');
			} else if (index === 4) {
				expect(angular.element(rowDivs[0]).text()).toBe('User Hash');
				expect(angular.element(rowDivs[1]).text()).toBe(ParticipantService.generateNameHash($scope.currentParticipant));
			}
		});

	});
});
