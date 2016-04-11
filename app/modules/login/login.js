"use strict";

angular.module("login", [])
	.config(
		[ "$routeProvider", function($routeProvider) {
			$routeProvider.when("/login", {
				controller : "LoginController",
				templateUrl : "app/modules/login/partials/login.tpl.html"
			});
		}]
	).controller("LoginController", ["$scope", function($scope) {
		console.log("Chegou no login");
	}]);