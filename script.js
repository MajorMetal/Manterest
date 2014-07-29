var app = angular.module("manApp", []);
	app.controller('manCtrl', function($scope) {

		$scope.manTag = "";
		$scope.manImage = "";

		$scope.men = [

			{	tag:"Matt",
				image:"http://photos-h.ak.fbcdn.net/hphotos-ak-xpf1/t1.0-0/p200x200/1982256_829204587093166_3617512461077262572_n.jpg"

			},
			{
				tag:"",
				image:""
			},
			{	tag:"",
				image:""
			},
			{
				tag:"",
				image:""
			},	
			{
				tag:"",
				image:"" 

			},

		]
	});