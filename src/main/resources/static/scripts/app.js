var app = angular.module("app", [ 'pascalprecht.translate' ]);

app.config(function($locationProvider) {
	$locationProvider.html5Mode({
		enabled : true,
		requireBase : false
	})
});

app.config(function($translateProvider) {
	$translateProvider.useStaticFilesLoader({
		prefix : 'strings/',
		suffix : '.json'
	});
	$translateProvider.preferredLanguage(findBrowserLanguage());
});

function findBrowserLanguage() {
	try {
		return (navigator.browserLanguage || navigator.language || navigator.userLanguage)
				.substr(0, 2)
	} catch (e) {
		return "en";
	}
}

app.factory("$req", function($http, $location) {
	var url = $location.absUrl();
	return {
		calcFretPositions : function(scale, numFrets) {
			return $http.get(url + "calcFretPositions?scale=" + scale
					+ "&numFrets=" + numFrets);
		},
		calcBridgePosition : function(scale, jointPos, neckAngle, stringHeight,
				fretHeight, thickness) {
			return $http.get(url + "calcBridgePosition?scale=" + scale
					+ "&jointPos=" + jointPos + "&neckAngle=" + neckAngle
					+ "&stringHeight=" + stringHeight + "&fretHeight="
					+ fretHeight + "&thickness=" + thickness);
		},
		calcFingerboardSize : function(scale, numStrings, numFrets, nutPitch,
				saddlePitch, nutSpacing) {
			return $http.get(url + "calcFingerboardSize?scale=" + scale
					+ "&numStrings=" + numStrings + "&numFrets=" + numFrets
					+ "&nutPitch=" + nutPitch + "&saddlePitch=" + saddlePitch
					+ "&nutSpacing=" + nutSpacing);
		}
	}
});