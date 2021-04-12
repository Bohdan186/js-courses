(function($) {

	function changeUnit(){
		let unit;
		$('.change-unit .btn').on('click', function() {
			$(this).siblings().removeClass('active');
			$(this).addClass('active');
			unit = $(this).data('unit');
		});
		return unit;
	}

	function getCityList(data) {
		$('.search-city-list').remove();
		$('.widget-header').append(`<div class="search-city-list"></div>`);

		data.list.forEach(el => {
			$('.search-city-list').append(`
				<div class="search-city-item" data-city-id=${el.id}>City: ${el.name}; Country: ${el.sys.country}: Temp: ${el.main.temp} </div>
			`);
		});
	}

	function renderWeatherData(data){
		$('.city-name').text(data.name);
		$('.temp').text(data.main.temp);
		$('.description').text(data.weather[0].description);
		if('clear sky' === data.weather[0].description){
			$('.img-wrapper').append('<img src="img/clearSky.jpg"></img>');
		}

		$('.wind-speed').text(' ').append(`
			<div class="data-title">wind-speed</div>
			<div class="data-content">${data.wind.speed}</div>
		`);
		$('.wind-deg').text(' ').append(`
			<div class="data-title">wind-deg</div>
			<div class="data-content">
				<i class="far fa-angle-up"></i> ${data.wind.deg}
			</div>
		`);
		$('.wind-deg i').css('transform', `rotate(${data.wind.deg}deg)`);

		$('.pressure').text(' ').append(`
			<div class="data-title">pressure</div>
			<div class="data-content">${data.main.pressure}</div>
		`);
		$('.humidity').text(' ').append(`
			<div class="data-title">humidity</div>
			<div class="data-content">${data.main.humidity}</div>
		`);
		$('.clouds-all').text(' ').append(`
			<div class="data-title">clouds-al</div>
			<div class="data-content">${data.clouds.all}</div>
		`);
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
		$('.search-city-list').remove();

		if(cityName.length >= 3){
			$.ajax({
				url: `https://api.openweathermap.org/data/2.5/find?q=${cityName}&units=${unit}&appid=e3b0b4e9f227920605001124729511a0`,

				success: function(data){
					if(0 !== data.count){
						getCityList(data);
					}
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
		
		$('.search-city').on('keyup', getWeatherData_cityName);

		$('.search-city-item').on('click', function(){
			console.log($(this).data.list.id);
		});
	});
})(jQuery);