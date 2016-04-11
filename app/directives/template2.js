"use strict";

angular.module("agteste").directive("template2", function() {
	return {
		restrict: 'A',
		transclude: true,
		templateUrl: "/app/templates/template2.tpl.html"
	};
});