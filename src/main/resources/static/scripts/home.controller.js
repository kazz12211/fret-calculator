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

app.controller("fingerboardSizeController", function($scope, $req, $q) {
	$scope.scale = 635;
	$scope.numStrings = 6;
	$scope.numFrets = 22;
	$scope.nutPitch = 7;
	$scope.saddlePitch=10.5;
	$scope.nutSpacing=3.5;
	
	angular.element(document).ready(function() {
		$scope.calcFingerboardSize();
	});
	
	$scope.calcFingerboardSize = function() {
		$q.all([
		        $req.calcFingerboardSize($scope.scale, $scope.numStrings, $scope.numFrets, $scope.nutPitch, $scope.saddlePitch, $scope.nutSpacing)
		]).then(function(response) {
			$scope.length = response[0].data["length"];
			$scope.nutWidth = response[0].data["nutWidth"];
			$scope.endWidth = response[0].data["endWidth"];
		});
	};
});

app.controller("variousFretController", function($scope, $req) {
	
});
