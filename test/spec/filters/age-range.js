describe('Filter: ageRange', function () {
	'use strict';

	// Jasmine custom matcher
	var customMatcher = {
		toBeSameParticipant : function (util, customEqualityTesters) {
			// The factory method should return an object with a compare function that will be called to check the expectation
			return {
				compare : function(actual, expected) {
					var result = {
						pass : undefined,
						message : undefined
					}, messages = [];

					result.pass = util.equals(actual.id, expected.id, customEqualityTesters);
					if (result.pass === false) {
						messages.push('id not matching, expected ' + expected.id + ', but got ' + actual.id);
					}

					result.pass = util.equals(actual.name, expected.name, customEqualityTesters);
					if (result.pass === false) {
						messages.push('name not matching, expected ' + expected.name + ', but got ' + actual.name);
					}

					result.pass = util.equals(actual.surname, expected.surname, customEqualityTesters);
					if (result.pass === false) {
						messages.push('surname not matching, expected ' + expected.surname + ', but got ' + actual.surname);
					}

					result.pass = util.equals(actual.age, expected.age, customEqualityTesters);
					if (result.pass === false) {
						messages.push('age not matching, expected ' + expected.age + ', but got ' + actual.age);
					}

					result.pass = util.equals(actual.company, expected.company, customEqualityTesters);
					if (result.pass === false) {
						messages.push('company not matching, expected ' + expected.company + ', but got ' + actual.company);
					}

					if (messages.length > 0) {
						return {
							pass : false,
							message : messages.join('; ')
						};
					}

					return {
						pass : true
					};
				}
			};
		}
	},
	ageRangeFilter,
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
	}],
	elementToTest,
	scope;

	// we load module first
	beforeEach(module('javaCro14App'));

	beforeEach(inject(function($rootScope, _ageRangeFilter_, $compile) {
		scope = $rootScope.$new();
		ageRangeFilter = _ageRangeFilter_;

		jasmine.addMatchers(customMatcher);

		scope.ageFilter = {};
		scope.fieldName = 'age';
		scope.mockedData = mockedData;

		scope.$apply(function() {
			elementToTest = $compile('<div><ul ng-repeat="participant in mockedData | ageRange:fieldName:ageFilter.min:ageFilter.max">' +
									'<li>{{ participant.name }}</li>' +
								'</ul></div>')(scope);
		});
	}));


	//
	// Functionality
	//
	it ('should filter by age', function() {
		expect(ageRangeFilter).toBeDefined('ageRangeFilter DI should work');

		var filteredDataByMin = ageRangeFilter(mockedData, 'age', 35);

		expect(filteredDataByMin.length).toBe(1, 'There should be only one filtered participant');

		expect(filteredDataByMin[0]).toBeSameParticipant(mockedData[1]);

		// DON'T DO THIS - CREATE CUSTOM MATCHER
		// expect(filteredDataByMin[0].id).toBe(mockedData[1].id);
		// expect(filteredDataByMin[0].name).toBe(mockedData[1].name);
		// expect(filteredDataByMin[0].surname).toBe(mockedData[1].surname);
		// expect(filteredDataByMin[0].age).toBe(mockedData[1].age);
		// expect(filteredDataByMin[0].company).toBe(mockedData[1].company);

	});

	//
	// DOM changes
	//
	it ('should work within DOM correctly', function() {
		var liElements = elementToTest.find('li');
		expect(liElements.length).toBe(scope.mockedData.length, 'There should be as may li element as there is data (no filter values given)');
		angular.forEach(liElements, function(element, index) {
			expect(angular.element(element).text()).toBe(scope.mockedData[index].name, 'Text inside li element should be name of participant');
		});

		scope.$apply(function() {
			scope.ageFilter.min = 35;
		});

		liElements = elementToTest.find('li');
		expect(liElements.length).toBe(1, 'There should be only one participant');

	});
});
