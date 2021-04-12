(function($) {
	const apiKey = 'f5837d5602dcd017509a4b2b69dacedc';

	//UI
	function serverError(){
		$('body').children().remove();

		$('body').append(
			`<div class="error">
				<h1>Server Error</h1>
			</div>`
		);
	}

	function currenciesLiveData(data){
		let date = new Date(data.timestamp * 1000).toLocaleString();
		$('.date').text(date);

		$('.currency').on('change', function(){
			$(this).selected = true;
		});

		$('.money').on('change', function(){
			$('.money').removeClass('active');
			$(this).addClass('active');
			$('.money').not('.active').val($(this).val() * data.quotes[`${$('.currency1').attr('selected').val()}`] / data.quotes[`${$('.currency2').attr('selected').val()}`])
		});
	}

	function appendCurrenciesNames(data){
		console.log(data.currencies);
		for(let key in data.currencies){
			$('.currency').append(`
				<option value="${key}">${key}</option>
			`);
		}
	}

	//DAL
	function getCurrenciesList(){
		$.ajax({
			url: `http://api.currencylayer.com/list?access_key=${apiKey}`,

			success: appendCurrenciesNames,
			error: serverError,
		});
	}

	function getCurrenciesLive(){
		$.ajax({
			url: `http://api.currencylayer.com/live?access_key=${apiKey}`,

			success: currenciesLiveData,
			error: serverError,
		});
	}

	$(document).ready(function(){
		getCurrenciesList();
		getCurrenciesLive();
	});
})(jQuery);