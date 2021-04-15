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

	function getSwiperSettings(object){
		let userSwiperSetting = object.data('options');
		let config = {};

		if(userSwiperSetting.direction){
			config['direction'] = userSwiperSetting.direction;
		}

		if(userSwiperSetting.loop){
			config['loop'] = userSwiperSetting.loop;
		}

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

		if(userSwiperSetting.slidesPerView){
			let slideViewNumb = userSwiperSetting.slidesPerView;
			config['slidesPerView'] = 1;
			
			config['breakpoints'] = {
				768: {
					slidesPerView: Math.floor(slideViewNumb/2)
				},

				992: {
				slidesPerView: slideViewNumb
				}
			};
		}

		if(userSwiperSetting.spaceBetween){
			config['spaceBetween'] = userSwiperSetting.spaceBetween;
		}

		console.log(config);
		return config;
	}

	$(document).ready(function(){
		$('.swiper-container').each(function(){
			var $this = $(this);
			new Swiper($this[0], getSwiperSettings($this));
		});
		
		$('.show-popup').magnificPopup({
			type: 'image'
		});
	});

})(jQuery);