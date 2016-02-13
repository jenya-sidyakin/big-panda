(function(angular){
	'use strict';
	var app = angular.module('app');
	app.controller('MainCtrl',['gravatar','crypto',MainCtrl]);
	function MainCtrl(gravatar,crypto){
		var mc = this;

	    var comments = [
			{
				mail:'jenya.sidyakin@gmail.com',
				text:"whats up ? :)"
			}

		];
		mc.comments = comments;
		
		mc.addComment = function(){
			comments.push({
				mail:mc.mail,
				text:mc.text
			});
			mc.mail = "";
			mc.text = "";
		}
	
	}
})(angular);