angular.module('moduleSocialBar', ['ngSocial'])
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
.directive("tFooterBar", function()   {
    return {
		restrict: "E",
		templateUrl: "partials/navBar/tFooterBar.html",
		replace: true
	   };
})