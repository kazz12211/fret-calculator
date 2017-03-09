app.controller("fretPositionController", function($scope, $req, $document, $q) {
	$scope.scale = 635;
	$scope.numFrets = 22;
	$scope.frets;
	
	angular.element(document).ready(function() {
		$scope.calcFretPositions();
	});
	
	$scope.calcFretPositions = function() {
		$q.all([
		    $req.calcFretPositions($scope.scale, $scope.numFrets)
		]).then(function(response) {
			console.log(response[0].data);
			$scope.frets = response[0].data;
		});
	};
	
});

app.controller("bridgePositionController", function($scope, $req, $q) {
	$scope.scale = 635;
	$scope.jointPos = 435;
	$scope.neckAngle = 3.5;
	$scope.stringHeight= 2;
	$scope.fretHeight = 1.5;
	$scope.thickness = 6;
	
	$scope.saddlePosition;
	$scope.saddleHeight;
	
	angular.element(document).ready(function() {
		$scope.calcBridgePosition();
	});
	
	$scope.calcBridgePosition = function() {
		$q.all([
		    $req.calcBridgePosition($scope.scale, $scope.jointPos, $scope.neckAngle, $scope.stringHeight, $scope.fretHeight, $scope.thickness)
		]).then(function(response) {
			console.log(response[0].data);
			$scope.saddlePosition = response[0].data["saddlePosition"];
			$scope.saddleHeight = response[0].data["saddleHeight"];
		});
	}
	
});

app.controller("fingerboardSizeController", function($scope, $req) {
	
});

app.controller("variousFretController", function($scope, $req) {
	
});
