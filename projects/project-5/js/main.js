(function($) {

	function changeUnit(){
		let unit;
		$('.change-unit .btn').on('click', function() {
			$(this).siblings().removeClass('active');
			$(this).addClass('active');
			unit = $(this).data('unit');
		});
		console.log(unit);
		return unit;
	}

	function renderWeatherData(data){
		$('.city-name').text(' ').append(data.name);
		$('.temp').text(' ').append(data.main.temp);
		$('.description').text(' ').append(data.weather[0].description);
		if('clear sky' === data.weather[0].description){
			$('.img-wrapper').append('<img src="img/clearSky.jpg"></img>');
		}
	}

	function getWeatherData_geo(position){
		let lat = position.coords.latitude;
		let lon = position.coords.longitude;
		let unit = $('.change-unit .btn').data('unit');

		$.ajax({
			url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=e3b0b4e9f227920605001124729511a0`,
	
			success: function(data){
				renderWeatherData(data);
			}
		});
	}

	function getWeatherData_cityName(){
		let cityName = $('.search-city').val();


		let unit = $('.change-unit .active').data('unit');

		console.log(unit);
		
		if(!cityName){
			alert('Введіть назву міста!');
		}else {
			$.ajax({
				url: `https://api.openweathermap.org/data/2.5/weather?q=${cityName},ua&units=${unit}&appid=e3b0b4e9f227920605001124729511a0`,
		
				success: function(data){
					renderWeatherData(data);
				}
			});
		}
	}

	$(document).ready(function() {
		// navigator.geolocation.getCurrentPosition(getWeatherData_geo);

		$('.change-unit .btn').on('click', function(){
			$(this).siblings().removeClass('active');
			$(this).addClass('active');
		});
		
		$('.widget-search-button').on('click', getWeatherData_cityName);
		
	});
})(jQuery);