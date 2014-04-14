angular.module('javaCro14App').
	filter('ageRange', function() {
		'use strict';
		return function(items, propertyName, min, max) {
			if (min === undefined) {
				min = '';
			}
			if (max === undefined) {
				max = '';
			}
			var filtered = [];
			angular.forEach(items, function(item) {
				if (item[propertyName] !== undefined) {
					if (min !== '' && max !== '' && item[propertyName] >= min && item[propertyName] <= max) {
						filtered.push(item);
					} else if (min !== '' && max === '' && item[propertyName] >= min) {
						filtered.push(item);
					} else if (min === '' && max !== '' && item[propertyName] <= max) {
						filtered.push(item);
					} else if (min === '' && max === '') {
						filtered.push(item);
					}
				}
			});
			return filtered;
		};
	});
