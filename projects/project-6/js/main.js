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

	function cachingLiveData(data) {
		let serialObj = JSON.stringify(data);
		sessionStorage.setItem('live', serialObj);
	}

	function convert(data, thisInput, yourCurrenciesKey, searchCurrenciesKey){
		$('.money').removeClass('active');
		thisInput.addClass('active');

		let activeMoneyData = thisInput.attr('data-money');
		let inputNumber = parseFloat(thisInput.val());
		let yourCurrencies = data.quotes[yourCurrenciesKey];
		let searchCurrencies = data.quotes[searchCurrenciesKey];

		if(activeMoneyData === '1'){
			$('.money').not('.active').val(inputNumber *  yourCurrencies / searchCurrencies);
		}else if(activeMoneyData === '2'){
			$('.money').not('.active').val(inputNumber * searchCurrencies / yourCurrencies);
		}
	}

	function currenciesLiveData(dataKey){
		let data = JSON.parse(sessionStorage.getItem(dataKey));
		let date = new Date(data.timestamp * 1000).toLocaleString();

		$('.date').text(date);
		$('.now-eur').text((data.quotes['USDUAH'] / data.quotes['USDEUR']).toFixed(3));
		$('.now-usd').text((data.quotes['USDUAH']).toFixed(3));
		$('.money').on('keyup', function(){
			convert(data, $(this), $('.currency2').val(), $('.currency1').val());
		});
		$('.currency').on('change', function(){
			convert(data, $('.money.active'), $('.currency2').val(), $('.currency1').val());
		});
	}

	function appendCurrenciesNames(data){
		for(let key in data.currencies){
			$('.currency').append(`
				<option value="USD${key}">${data.currencies[key]}</option>
			`);
		}
	}

	//DAL
	function getCurrenciesList(){
		$.ajax({
			url: `http://api.currencylayer.com/list?access_key=${apiKey}`,

			success: function(data){
				data.currencies['iPhone'] = 'iPhone Apple';
				appendCurrenciesNames(data);
			},
			error: serverError,
		});
	}

	function callLiveData(){
		if(sessionStorage.getItem('live')){
			currenciesLiveData('live');
		}else{
			$.ajax({
				url: `http://api.currencylayer.com/live?access_key=${apiKey}`,
	
				success: function(data){
					data.quotes['USDiPhone'] = 1 / 1070.48;
					cachingLiveData(data);
					currenciesLiveData('live');
				},
				error: serverError,
			});
		};
	}

	$(document).ready(function(){
		getCurrenciesList();
		callLiveData();
	});
})(jQuery);