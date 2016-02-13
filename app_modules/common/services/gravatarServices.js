(function(angular){
	'use strict';
	var app = angular.module('common');
	app.factory('gravatar',['crypto','$http',gravatar])
	function gravatar(crypto,$http){
		//wrapper will help with testing
		var url = 'http://www.gravatar.com/avatar/';
		function getImage(mail){
        	var hash = crypto.md5(mail);
        	return url + hash;
		}
		return {
			getImage:getImage
		}
	}
})(angular)