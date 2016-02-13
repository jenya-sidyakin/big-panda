(function(angular){
	var app = angular.module('app');
	//app.config(['$stateProvider',config])
	app.config(['$stateProvider',config]);
	function config($stateProvider){
		$stateProvider
			.state('main',{
				url:'/',
				controller:'MainCtrl as mc',
				templateUrl:'app_modules/main/mainView.html'
			})
	}
})(angular);