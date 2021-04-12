(function($) {
	//GENERALS SETTINGS
	let apiKey = 'e3b0b4e9f227920605001124729511a0';

	//HELPERS
	function clearCityList() {
		$('.search-city-list').remove();
	}

	// UI
	function cachingWeatherDataById(data) {
		var serialObj = JSON.stringify(data);
		sessionStorage.setItem(`cityId_${data.id}`, serialObj);
	}
	
	function renderWeatherDataById(dataKey) {
		var returnObj = JSON.parse(sessionStorage.getItem(dataKey));
		console.log(returnObj);

		$('.city-name').text(returnObj.name);
		$('.temp-value').text(returnObj.main.temp);
		$('.description').text(returnObj.weather[0].description);
		if(800 === returnObj.weather[0].id){
			$('.img-wrapper').html('<img src="img/clearSky.jpg"></img>');
		}else if(804 === returnObj.weather[0].id){
			$('.img-wrapper').html('<img src="img/overcastClouds.jpg"></img>');
		}

		$('.wind-speed .data-content').text(returnObj.wind.speed);
		$('.wind-deg .data-content').html(`<i class="far fa-angle-up"></i> ${returnObj.wind.deg}`);
		$('.wind-deg i').css('transform', `rotate(${returnObj.wind.deg}deg)`);
		$('.pressure .data-content').text(returnObj.main.pressure);
		$('.humidity .data-content').text(returnObj.main.humidity);
		$('.clouds-all .data-content').text(returnObj.clouds.all);
	}

	function renderWeatherDataByName(data) {
		$('.widget-header').append(`<div class="search-city-list"></div>`);

		data.list.forEach(el => {
			$('.search-city-list').append(`
				<div class="search-city-item" data-city-id=${el.id}>City: ${el.name}; Country: ${el.sys.country}: Temp: ${el.main.temp} </div>
			`);
		});
	}

	function callWeatherById(cityId){
		let dataKey = `cityId_${cityId}`;

		if(sessionStorage.getItem(dataKey)){
			renderWeatherDataById(dataKey);
		}else{
			let cityIdPromise = getWeatherByCityId(cityId, 'metric');
			cityIdPromise
				.then(cachingWeatherDataById)
				.then(function(){
					renderWeatherDataById(dataKey);
				});
		};
	}

	function serverError(){
		$('body').children().remove();

		$('body').append(
			`<div class="error">
				<h1>Server Error</h1>
			</div>`
		);
	}

	//DAL
	function getWeatherByCityId(cityId, unit){
		let cityIdPromise = $.ajax(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=${unit}&appid=${apiKey}`);
		return cityIdPromise;
	}

	function getWeatherByCityName(cityName, unit){
		let cityNamePromise = $.ajax(`https://api.openweathermap.org/data/2.5/find?q=${cityName}&units=${unit}&appid=${apiKey}`);
		return cityNamePromise;
	}

	//DOCUMENT
	$(document).ready(function() {

		callWeatherById('690688');

		$('.search-city').on('keyup', function(){
			let cityName = $(this).val();
			clearCityList();

			if(cityName.length >= 3){
				let cityNamePromise = getWeatherByCityName(cityName, 'metric');
				cityNamePromise.then(renderWeatherDataByName);
			}
		});

		$(document).on('click','.search-city-item', function() {
			let cityId = $(this).data('city-id');

			clearCityList();
			callWeatherById(cityId);
		})

	});
})(jQuery);