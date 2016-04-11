"use strict";

angular.module("agteste", ["ngRoute", "login", "principal"])
.config(["$routeProvider", function($routeProvider) {
	
}]).controller("IndexController", ["$scope", function($scope) {
	console.log("Chegou em algum lugar");
}]);