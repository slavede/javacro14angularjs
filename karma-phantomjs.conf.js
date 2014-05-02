// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
	'use strict';
	config.set({
		// base path, that will be used to resolve files and exclude
		basePath: '',

		// testing framework to use (jasmine/mocha/qunit/...)
		frameworks: ['jasmine'],

		// npm install karma-jasmine --save-dev
		// npm install karma-phantomjs-launcher --save-dev
		plugins: [
			// 'karma-ng-html2js-preprocessor',
			'karma-jasmine',
			'karma-phantomjs-launcher',
			// 'karma-requirejs',
			// 'karma-chrome-launcher'
		],

		// list of files / patterns to load in the browser
		files: [
			'app/bower_components/jquery/dist/jquery.min.js',
			'app/bower_components/angular/angular.js',
			'app/bower_components/angular-mocks/angular-mocks.js',
			'app/bower_components/angular-resource/angular-resource.js',
			'app/bower_components/angular-cookies/angular-cookies.js',
			'app/bower_components/angular-sanitize/angular-sanitize.js',
			'app/bower_components/angular-route/angular-route.js',
			'app/bower_components/crypto-js/components/core-min.js',
			'app/bower_components/crypto-js/components/sha256-min.js',
			'app/scripts/*.js',
			'app/scripts/**/*.js',
			'test/mock/**/*.js',
			'test/spec/**/*.js' // IMPORTANT TO BE LAST
		],

		// list of files / patterns to exclude
		exclude: [],

		// web server port
		port: 9876,


		// enable / disable colors in the output (reporters and logs)
		colors: true,

		// level of logging
		// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
		logLevel: config.LOG_DEBUG,

	  // If browser does not capture in given timeout [ms], kill it
		captureTimeout: 60000,

		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,


		// Start these browsers, currently available:
		// - Chrome
		// - ChromeCanary
		// - Firefox
		// - Opera
		// - Safari (only Mac)
		// - PhantomJS
		// - IE (only Windows)

		browsers: ['PhantomJS'],


		// Continuous Integration mode
		// if true, it capture browsers, run tests and exit
		singleRun: false
	});
};
