app.controller("fretPositionController", function($scope, $req, $document, $q) {
	$scope.scale = 635;
	$scope.numFrets = 22;
	$scope.frets;
	
	$scope.calcFretPositions = function() {
		$q.all([
		    $req.calcFretPositions($scope.scale, $scope.numFrets)
		]).then(function(response) {
			console.log(response[0].data);
			$scope.frets = response[0].data;
		});
	};
	
});

app.controller("bridgePositionController", function($scope, $req) {
	
});

app.controller("fingerboardSizeController", function($scope, $req) {
	
});

app.controller("variousFretController", function($scope, $req) {
	
});
