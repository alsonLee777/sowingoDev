angular.module('moduleNavBar', ['ngSocial'])
.controller('SocialBarCtrl', function($scope) {
    $scope.current_title = 'Test';
    $scope.current_description = 'Test description';
})
.directive("tSocialBar", function()   {
    return {
		restrict: "E",
		templateUrl: "partials/inclWidgetsBar/tSocialBar.html",
		replace: true
	   };
})
.directive("tUserAuthenticationBar", function()   {
    return {
		restrict: "E",
		templateUrl: "partials/navBar/tUserAuthenticationBar.html",
		replace: true
	   };
})
.directive("tTopMainBar", function()   {
    return {
		restrict: "E",
		templateUrl: "partials/navBar/tTopMainBar.html",
		replace: true
	   };
})
.directive("tTopSearchBar", function()   {
    return {
		restrict: "E",
		templateUrl: "partials/navBar/tTopSearchBar.html",
		replace: true
	   };
})
.directive("tFooterBar", function()   {
    return {
		restrict: "E",
		templateUrl: "partials/navBar/tFooterBar.html",
		replace: true
	   };
})