weatherApp.controller('homeCtrl', ['$scope', 'cityService', '$location',  function($scope, cityService, $location){
    $scope.city = cityService.city;
    $scope.$watch('city', function(){
        cityService.city = $scope.city;
    });
	$scope.submit = function(){
		$location.path("/forecast");
	}
}]);

weatherApp.controller('forecastCtrl', ['$scope','cityService', '$routeParams', 'weatherService', function($scope, cityService, $routeParams, weatherService){
    $scope.city = cityService.city;
	$scope.days = $routeParams.days || '2';
    weatherService.GetWeather($scope.city, $scope.days).then(function(list){
                  $scope.weatherResult = list;
					console.log($scope.weatherResult);
    });
	
    $scope.convertToFahrenheit = function(degK){
        return Math.round((1.8 * (degK - 273)) + 32);
    }
    $scope.convertToDate = function(dt){
		return new Date(dt * 1000);
	}
  
}]);