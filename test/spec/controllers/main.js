describe('Controller: MainCtrl', function () {
	'use strict';
	// load the controller's module
	beforeEach(module('javaCro14App'));

	var MainCtrl,
		scope,
		$interval;

	// Initialize the controller and a mock scope
	beforeEach(inject(function ($controller, $rootScope, _$interval_) {
		// console.log("beforeEach");
		scope = $rootScope.$new();
		MainCtrl = $controller('MainCtrl', {
			$scope: scope
		});
		$interval = _$interval_;
	}));

	it ('should attach a list of awesomeThings to the scope', function () {
		expect(scope.awesomeThings.length).toBe(3);
	});

	it ('should toggle showMessage successfully', function() {
		expect(scope.showMessage).toBe(false, 'Initial value of showMessage should be false');

		$interval.flush(500);
		expect(scope.showMessage).toBe(true, 'After flushing 500 miliseconds showMessage should toggle');

		$interval.flush(499);
		expect(scope.showMessage).toBe(true, 'After flushing 499 miliseconds showMessage should remain the same');

		$interval.flush(1);
		expect(scope.showMessage).toBe(false, 'After flushing additional 1 milisecond showMessage should change (because of previous 499)');
	});
});
