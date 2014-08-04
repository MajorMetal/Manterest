


var app = angular.module("manApp", ["firebase"]);
app.controller('manCtrl', function($scope, $firebase) {
var ref = new Firebase('https://glaring-fire-920.firebaseio.com/');
var sync = $firebase(ref);
	    
	    $scope.men = sync.$asArray();

		
		$scope.addMan = function(tag, image, url){
			$scope.men.$add({tag: tag, image: image, url: url,});
		}
	});
 
 