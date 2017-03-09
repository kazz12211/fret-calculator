var app = angular.module("app", []);

app.config(function($locationProvider) {
	$locationProvider.html5Mode({
		enabled:true,
		requireBase:false
	});
});

app.factory("$req", function($http, $location) {
	var url = $location.absUrl();
	return {
		calcFretPositions : function(scale, numFrets) {
			return $http.get(url + "calcFretPositions?scale="+scale+"&numFrets="+numFrets);
		}
	}
});