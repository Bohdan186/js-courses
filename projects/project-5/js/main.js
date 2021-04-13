(function($) {
	//GENERALS SETTINGS
	let apiKey = 'e3b0b4e9f227920605001124729511a0';

	//HELPERS
	function clearCityList() {
		$('.search-city-list').remove();
	}

	function serverError(){
		$('body').children().remove();

		$('body').append(
			`<div class="error">
				<h1>Server Error</h1>
			</div>`
		);
	}

	// UI
	function generateCityList(data){
		$('.search-city-list').append(`
			<div class="search-city-item" data-city-id=${data.id}>City: ${data.name}; Country: ${data.sys.country}: Temp: ${data.main.temp} </div>
		`);
	}

	function renderWeatherData(datakey) {
		let data = JSON.parse(sessionStorage.getItem(datakey));

		$('.city-name').attr('data-datakey', data.id);

		$('.city-name').text(data.name);
		$('.temp-value').text(data.main.temp);
		$('.description').text(data.weather[0].description);
		if(800 === data.weather[0].id){
			$('.img-wrapper').html('<img src="img/clearSky.jpg"></img>');
		}else if(804 === data.weather[0].id){
			$('.img-wrapper').html('<img src="img/overcastClouds.jpg"></img>');
		}

		$('.wind-speed .data-content').text(data.wind.speed);
		$('.wind-deg .data-content').html(`<i class="far fa-angle-up"></i> ${data.wind.deg}`);
		$('.wind-deg i').css('transform', `rotate(${data.wind.deg}deg)`);
		$('.pressure .data-content').text(data.main.pressure);
		$('.humidity .data-content').text(data.main.humidity);
		$('.clouds-all .data-content').text(data.clouds.all);
	}

	function cachingWeatherData(data, unit) {
		let serialObj = JSON.stringify(data);
		sessionStorage.setItem(`cityId_${data.id}_unit_${unit}`, serialObj);
	}

	//DAL

	function callWeatherById(cityId, unit='metric'){
		let datakey = `cityId_${cityId}_unit_${unit}`;

		if(sessionStorage.getItem(datakey)){
			renderWeatherData(datakey);
		}else{
			$.ajax({
				
				url: `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=${unit}&appid=${apiKey}`,

				success: function(data){
					cachingWeatherData(data, unit);
					renderWeatherData(datakey);
				},
				error: serverError,
			});
		};
	}

	function getWeatherByCityName(cityName, unit='metric'){
		$.ajax({
			url: `https://api.openweathermap.org/data/2.5/find?q=${cityName}&units=${unit}&appid=${apiKey}`,

			success: function(data){
				clearCityList();
				$('.widget-header').append(`<div class="search-city-list"></div>`);

				data.list.forEach(el => {
					cachingWeatherData(el, unit);
					generateCityList(el);
				});
			},
			error: serverError,
		});
	}
	
	function getWeatherDataByGeo(position) {
		let lat = position.coords.latitude;
		let lon = position.coords.longitude;

		$.ajax({
			url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`,
	
			success: function(data){
				cachingWeatherData(data);
				renderWeatherData(`cityId_${data.id}_unit_metric`);
			},
			error: serverError,
		});
	}

	//DOCUMENT
	$(document).ready(function() {
		navigator.geolocation.getCurrentPosition(getWeatherDataByGeo, callWeatherById('690688'));

		$('.search-city').on('keyup', function(){
			let searchCityVal = $(this).val();
			clearCityList();

			if(searchCityVal.length >= 3){
				getWeatherByCityName(searchCityVal);
			}
		});

		$(document).on('click','.search-city-item', function(){
			clearCityList();
			callWeatherById($(this).data('city-id'));
		});

		$(document).on('click','.change-unit .btn', function(){
			let activeBtn = $(this);
			let unit = activeBtn.data('unit');
			let cityId = $('.city-name').data('datakey');	//Неправильний індекс
			let datakey = `cityId_${cityId}_unit_${unit}`;

			
			$('.change-unit .btn').removeClass('active');
			$(this).addClass('active');

			if(sessionStorage.getItem(datakey)){
				renderWeatherData(datakey);
			}else{
				$.ajax({
					url: `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=${unit}&appid=${apiKey}`,
	
					success: function(data){
						cachingWeatherData(data, unit);
						renderWeatherData(datakey);
					},
					error: serverError,
				});
			};
		});

	});
})(jQuery);