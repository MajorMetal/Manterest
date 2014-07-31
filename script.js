var app = angular.module("manApp", ["firebase"]);
	app.controller('manCtrl', function($scope, $firebase) {
var ref = new Firebase('https://glaring-fire-920.firebaseio.com/');
var sync = $firebase(ref);
	    
	    $scope.tiles = sync.$asArray();

		
		$scope.addMan = function(tag, image, url){
			$scope.tiles.$add({tag: tag, image: image, url: url,});
		}
	});