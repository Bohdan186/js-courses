(function($) {
	let cacheShows = [];
	// HELPER FUNCTIONS
	function serverError() {
		$('body').children().remove();

		$('body').append(
			`<div class="error">
				<h1>Server Error</h1>
			</div>`
		);
	}

	function getLoadingImage(status){
		let loadingImage = $('.loading-image');

		if('show' === status){
			loadingImage.show();
		}else if('hide' === status){
			loadingImage.hide();
		}
	}

	function checkImage(image) {
		if(null === image){
			return 'img/no-img-portrait-text.png';
		}else {
			return image.medium;
		}
	};

	function checkData(data) {
		if(null === data){
			return '';
		}else {
			return data;
		}
	};

	// INIT FUNCTIONS

	function initSwiper($object = $('.swiper-container:not(.in-popup)')) {
		if('undefined' === typeof Swiper) {
			return false;
		}

		function getSwiperSettings($object) {
			let userSwiperSetting = $object.data('options');
			let config = {
				loop: userSwiperSetting.loop,
				slidesPerView: 1,
				breakpoints: {
					576: {
						slidesPerView: userSwiperSetting.mobile,
					},

					768: {
						slidesPerView: userSwiperSetting.tablet,
					},

					1100: {
						slidesPerView: userSwiperSetting.desktop,
					},

					1400: {
						slidesPerView: userSwiperSetting.largeDesktop,
					},
				},
			};

			if(userSwiperSetting.direction) {
				config['direction'] = userSwiperSetting.direction;
			}

			if(userSwiperSetting.navigation) {
				config['navigation'] = {
					prevEl:'.swiper-button-prev',
					nextEl:'.swiper-button-next',
				}
			}

			if(userSwiperSetting.spaceBetween) {
				config['spaceBetween'] = userSwiperSetting.spaceBetween;
			}

			return config;
		}

		$object.each(function() {
			$thisSwiper = $(this);
			new Swiper($thisSwiper[0], getSwiperSettings($thisSwiper));
		});
	}

	function initPopup($object) {
		if('undefined' === typeof $.fn.magnificPopup) {
			return false;
		}

		$object.magnificPopup({
			type:'inline',

			callbacks: {
				open: function() {
					let filmId = $(this)[0].currItem.el.data('id');
					console.log(filmId);
					getFilmsById(filmId);
					$('.actors-list').html('');
					getActors(filmId);
				},
			},
		});
	}

	function initTooltip() {
		if('undefined' === typeof $.fn.tooltip) {
			return false;
		}

		$('[data-toggle="tooltip"]').tooltip({
			animated: 'fade',
		});
	}
	
	// RENDER FUNCTIONS

	function renderShowList(data) {
		data.forEach(function(el){
			$(".film-list").append(`
				<div class="swiper-slide">
					<div class="card">
						<img src="${checkImage(el.show.image)}" class="card-img-top" alt="${el.show.name}">
						<div class="card-body">
							<h5 class="card-title">${el.show.name}</h5>
							<a href=".about-film-popup" class="btn btn-primary" data-id="${el.show.id}" data-toggle="tooltip" data-placement="bottom" title="Show More"><i class="far fa-eye"></i></a>
						</div>
					</div>
				</div>
			`);
		});
	}

	function renderAboutFilm(data) {
		console.log(data);
		let updated;

		if(null === data.updated){
			updated = '';
		}else{
			updated = new Date(data.updated * 1000).toDateString();
		};
		

		$('.about-film').html(`
			<div class="info">
				<img src="${checkImage(data.image)}" alt="${checkData(data.name)}">
				<div class="title">
					<h3>${checkData(data.name)}</h3>
					<p>Rating : ${checkData(data.rating.average)}</p>
					<p>Genres :  ${checkData(data.genres)}</p>
					<p>Language : ${checkData(data.language)}</p>
					<p>Premiered : ${checkData(data.premiered)}</p>
					<p>Updated : ${updated}</p>
					<p>Official Site : <a href="${checkData(data.officialSite)}">${checkData(data.officialSite)}</a></p>
				</div>
			</div>
			<div class="summary">${checkData(data.summary)}</div>
		`);
	}

	function renderActors(data) {
		data.forEach(function(el){
			$('.actors-list').append(`
				<div class="card bg-dark text-white swiper-slide">
					<img src="${el.person.image.medium}" class="card-img" alt="...">
					<div class="card-img-overlay">
						<div class="text-bg">
							<h5 class="card-title">${el.person.name}</h5>
							<p class="card-text">${el.person.birthday}</p>
						</div>
					</div>
				</div>
			`);
		});
	}

	function renderAutocomplete(data) {
		console.log(data);
		data.forEach(function(el){	
			$('.autocomplete').append(`
				<a href=".about-film-popup" data-id="${el.show.id}">
					<span class="autocomplete-item">${el.show.name}</span>
				</a>
			`);
			initPopup($('.autocomplete a'));
		});
	}

	// GET DATA FUNCTION
	function getFilmsForCarousel() {

		getLoadingImage('show');

		$.ajax({
			url: `https://api.tvmaze.com/search/shows?q=girls`,

			success: function(data) {
				renderShowList(data);
				initSwiper();
				initTooltip();
				initPopup($('.carusel .btn'));
			},

			complete: function() {
				getLoadingImage('hide');
			},

			error: serverError,
		});
	}

	function getFilmsForAutocomplete(q) {

		getLoadingImage('show');

		$.ajax({
			url: `https://api.tvmaze.com/search/shows?q=${q}`,

			success: function(data) {
				renderAutocomplete(data);
			},

			complete: function() {
				getLoadingImage('hide');
			},

			error: serverError,
		});
	}

	function getFilmsById(filmId) {

		getLoadingImage('show');

		$.ajax({
			url: `https://api.tvmaze.com/shows/${filmId}`,

			success: function(data) {
				renderAboutFilm(data);
			},

			complete: function() {
				getLoadingImage('hide');
			},

			error: serverError,
		});
	}

	function getActors(filmId) {
		
		$.ajax({
			url: `https://api.tvmaze.com/shows/${filmId}/cast`,

			success: function(data){
				renderActors(data);
				initSwiper($('.in-popup'));
			},

			complete: function(){
				getLoadingImage('hide');
			},

			error: serverError,
		});
	}

	// DOCUMENT READY

	$(document).ready(function(){
		getFilmsForCarousel();

		$('.search-input').on('keyup', function(){
			$('.autocomplete').children().remove();
			
			getFilmsForAutocomplete($(this).val());
		});

	});
})(jQuery);