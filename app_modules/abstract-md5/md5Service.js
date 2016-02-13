(function(angular){
	'use strict';
	var app = angular.module('abstractMd5');
	app.factory('crypto',[md5Factory])
	function md5Factory(){
		//wrapper will help with testing
		
		return {
			md5:md5
		}
	}
})(angular) 