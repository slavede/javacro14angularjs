describe('App: App', function () {
	'use strict';
	// load the controller's module
	beforeEach(module('javaCro14App'));

	var $rootScope, $timeout;

	beforeEach(inject(function (_$rootScope_, _$timeout_) {
		$rootScope = _$rootScope_;
		$timeout = _$timeout_;
	}));

	it ('should set up loadedLogo successfully', function() {
		expect($rootScope.loadedLogo).toBeDefined();
		expect($rootScope.loadedLogo).toBe(false, 'Initially, loadedLogo should be false');

		$timeout.flush(1999);
		expect($rootScope.loadedLogo).toBe(false, 'After 1999 miliseconds, loadedLogo should still be false');

		$timeout.flush(1);
		expect($rootScope.loadedLogo).toBe(true, 'After additional milisecond (with previous 1999) loadedLogo should become true');
	});
});