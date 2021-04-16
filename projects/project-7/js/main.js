(function($) {

	$('.products').each(function() {
		let $thisProduct = $(this);
		let $tabsList = $thisProduct.find('.tabs-menu > li');

		$tabsList.on('click', function(e) {
			e.preventDefault();
			let $thisTab = $(this);
			let tabsCategory = $thisTab.data('category');
			let $activeCategory = $thisProduct.find(`.content-list > div[data-category=${tabsCategory}]`);

			$thisTab.siblings().removeClass('active');
			$thisTab.addClass('active');
		
			$activeCategory.siblings().removeClass('active');
			$activeCategory.addClass('active');
		});
	});

	function initSwiper(object){
		if(undefined === typeof Swiper){
			return false;
		}
		
		function getSwiperSettings(object){
			let userSwiperSetting = object.data('options');
			let config = {
				loop: userSwiperSetting.loop,
				breakpoints: {
					576: {
						slidesPerView: userSwiperSetting.mobile
					},

					768: {
						slidesPerView: userSwiperSetting.tablet
					},

					992: {
						slidesPerView: userSwiperSetting.desktop
					}
				},
			};

			if(userSwiperSetting.pagination){
				config['pagination'] = {
					el: '.swiper-pagination',
					clickable:true,
					bulletActiveClass:'active',
					bulletClass:'slider-pagination-items',
					renderBullet:function (index, className) {
						return '<span class="' + className + '">' + (index + 1) + '</span>';
					}
				};
			}
			if(userSwiperSetting.navigation){
				config['navigation'] = {
					prevEl:'.prev',
					nextEl:'.next'
				}
			}
			if(userSwiperSetting.spaceBetween){
				config['spaceBetween'] = userSwiperSetting.spaceBetween;
			}

			return config;
		}

		object.each(function(){
			$thisSwiper = $(this);
			new Swiper($thisSwiper[0], getSwiperSettings($thisSwiper));
		});
	}

	function initPopup(object){
		if(undefined === typeof $.fn.magnificPopup){
			return false;
		}

		object.magnificPopup({
			type:'inline',
		});
	}

	function initWaypoint(object){
		if(undefined === typeof Waypoint){
			return false;
		}

		object.each(function(){
			let $this = $(this);

			new Waypoint({
				element: $(this)[0],
				handler: function() {
					$this.addClass('animate');
				},

				offset: '70%'
			})
		});
	}

	function initAutocomplete(object){
		if(undefined === typeof $.fn.autocomplete){
			return false;
		}

		var countries = [
			{ value: 'Sweatshirts'},			
			{ value: 'Dresses'},
			{ value: 'Jackets'},			
			{ value: 'Pants'},
			{ value: 'Cardigan'},			
			{ value: 'Boots'},
			{ value: 'Loafers'},			
			{ value: 'Handbags'},
			{ value: 'Hats'},			
			{ value: 'Accessories'},
			{ value: 'Home'},			
			{ value: 'Shop'},			
			{ value: 'Blog'},
			{ value: 'About us'},			
			{ value: 'Contact us'}
		];
		
		$('.autocomplete-suggestions').css('max-height: initial');

		object.autocomplete({
			lookup: countries,
			onSelect: function (suggestion) {
				console.log(suggestion);
			}
		});
		
	}

	$(document).ready(function(){
		initSwiper($('.swiper-container'));
		initPopup($('.show-popup'));
		initWaypoint($('.with-animated'));
		initAutocomplete($('.search-products'));
	});

})(jQuery);