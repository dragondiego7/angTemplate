"use strict";

angular.module("agteste").directive("template1", function() {
	return {
		restrict: 'A',
		transclude: true,
		templateUrl: "/app/templates/template1.tpl.html"
	};
});