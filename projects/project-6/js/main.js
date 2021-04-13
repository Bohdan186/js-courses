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

	function currenciesLiveData(dataKey){
		let data = JSON.parse(sessionStorage.getItem(dataKey));
		let date = new Date(data.timestamp * 1000).toLocaleString();

		$('.date').text(date);

		$('.money').on('keyup', function(){
			$('.money').removeClass('active');
			$(this).addClass('active');

			let activeMoneyData = $('.money.active').attr('data-money');
			let inputNumber = parseFloat($('.money.active').val());
			let yourCurrencies = data.quotes[$('.currency2').val()];
			let searchCurrencies = data.quotes[$('.currency1').val()];

			if(activeMoneyData === '1'){
				$('.money').not('.active').val(inputNumber *  yourCurrencies / searchCurrencies);
			}else if(activeMoneyData === '2'){
				$('.money').not('.active').val(inputNumber * searchCurrencies / yourCurrencies);
			}
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

			success: appendCurrenciesNames,
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