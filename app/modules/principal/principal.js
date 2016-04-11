"use strict";

angular.module("principal", [])
	.config(
		[ "$routeProvider", function($routeProvider) {
			$routeProvider.when("/principal", {
				controller : "PrincipalController",
				templateUrl : "app/modules/principal/partials/principal.tpl.html"
			})
		}]
	).controller("PrincipalController", ["$scope", function($scope) {
		console.log("Chegou no principal");
	}]);
