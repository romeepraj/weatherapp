weatherApp.service('cityService', function(){
  this.city = "Washington, DC" ;      
});
weatherApp.service('weatherService', ['$http', function($http){
	
	this.GetWeather = function(city, days){
	
		var URL = 'http://api.openweathermap.org/data/2.5/forecast/daily';
		var request = {
			method: 'GET',
			url: URL,
			params: {
				q: city,
				mode: 'json',
				cnt: days,
				appid: 'd06690fa02dc9ac69bb2fed0ae37d10e'
			}
		};
		var weatherResult =  $http(request).then(function (response) {
								return response.data.list;
							});
		return weatherResult;
	}
}]);