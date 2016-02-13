(function(angular){
	var app = angular.module('common');
	app.directive('comment',comment);
	function comment(){
		return {
			restrict:'EA',
			replace:true,
			templateUrl:'app_modules/common/views/commentView.html',
			controller:['gravatar','$scope',commentCtrl],
			controllerAs:'pc',
			scope:{
				user:'=comment'
			}

		}

	}
	function commentCtrl(gravatar,$scope){
	 $scope.user.image = gravatar.getImage($scope.user.mail);
	}
	
})(angular);