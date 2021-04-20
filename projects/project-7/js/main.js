(function($) {

	function initTabs() {
		if(0 === $('.products.tabs').length) {
			return false;
		}

		$('.products.tabs').each(function() {
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
	}

	function initSwiper() {
		if('undefined' === typeof Swiper) {
			return false;
		}

		let $object = $('.swiper-container');
		
		function getSwiperSettings($object) {
			let userSwiperSetting = $object.data('options');
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
					},
				},
			};

			if(userSwiperSetting.pagination) {
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

			if(userSwiperSetting.navigation) {
				config['navigation'] = {
					prevEl:'.prev',
					nextEl:'.next',
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

	function initPopup() {
		if('undefined' === typeof $.fn.magnificPopup) {
			return false;
		}

		$('.show-popup').magnificPopup({
			type:'inline',
		});
	}

	function initWaypoint() {
		if('undefined' === typeof Waypoint) {
			return false;
		}

		$('.with-animated').each(function() {
			let $this = $(this);

			new Waypoint({
				element: $(this)[0],
				handler: function() {
					$this.addClass('animate');
				},

				offset: '70%',
			})
		});
	}

	function initAutocomplete() {
		if('undefined' === typeof $.fn.autocomplete) {
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
			{ value: 'Contact us'},
		];

		$('.search-products').autocomplete({
			lookup: countries,
			
			onSelect: function (suggestion) {
				console.log(suggestion);
			},
		});
	}

	function initTooltip() {
		if('undefined' === typeof $.fn.tooltip) {
			return false;
		}

		$('[data-toggle="tooltip"]').tooltip();
	}

	function initFilter() {
		if('undefined' === typeof Isotope || 0 === $('.products.filter').length) {
			return false;
		}

		$('.products.filter').imagesLoaded().done(function() {
			let $grid = new Isotope('.products.filter .content-list .row', {
				itemSelector: '.filter-grid',
				layoutMode: 'fitRows',
			});
	
			$('.products.filter .tabs-menu').on('click', 'li', function(e) {
				e.preventDefault();
	
				let $this = $(this);
				let filterData = $this.data('category');
	
				$this.siblings().removeClass('active');
				$this.addClass('active');
				
				$grid.arrange({
					filter: filterData,
				});
			});
		});
	}

	function initPhotoSwipe() {
		if('undefined' === typeof PhotoSwipe) {
			return false
		}

		let container = [];

		$('.promotions .banner').find('.img-inner').each(function() {
			let $link = $(this).find('a'),

			item = {
				src: $link.attr('href'),
				w: $link.data('width'),
				h: $link.data('height'),
			};

			container.push(item);
		});

		$('.promotions .banner').find('a').on('click', function(e){
			e.preventDefault();

			let $pswp = $('.pswp')[0];

			options = {
				bgOpacity: 0.8,
				tapToClose: true,
				shareEl: false,
				fullscreenEl: true,
			};

			let gallery = new PhotoSwipe($pswp, PhotoSwipeUI_Default, container, options);
			gallery.init();
		});
	}

	function initStickEl() {
		if('undefined' === typeof $.fn.stick_in_parent) {
			return false;
		}

		$('.header-top').stick_in_parent();
	}

	function initMap() {
		if('undefined' === typeof Maplace) {
			return false;
		}
		
		new Maplace({
			locations: [{
				lat: 48.7573443,
				lon: 30.239416,
				title: 'Uman',
				zoom: 12,
			}],
			controls_on_map: false
		}).Load();
	}

	function init360() {
		if('undefined' === typeof $.fn.ThreeSixty) {
			return false
		}

		$('.product1').ThreeSixty({
			totalFrames: 52,
			endFrame: 52,
			currentFrame: 1,
			imgList: '.threesixty_images',
			progress: '.spinner',
			imagePath: '../img/assets/',
			ext: '.png',
			height: 250,
			width: 500,
			navigation: true,
			disableSpin: true,
		});
	}

	$(document).ready(function(){
		initTabs();
		initSwiper();
		initPopup();
		initWaypoint();
		initAutocomplete();
		initTooltip();
		initFilter();
		initPhotoSwipe();
		initStickEl();
		initMap();
		init360();
	});

})(jQuery);