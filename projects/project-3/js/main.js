//============ Task 1 ===============

$('.products').each(function() {
	let product = $(this);
	let $tabsList = product.find('.tabs-menu > li');

	$tabsList.click(function() {
		let tabsCategory = $(this).data('category');
		let $activeCategory = product.find('.content-list>div[data-category=' + tabsCategory + ']');
	
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
	
		$activeCategory.siblings().removeClass('active');
		$activeCategory.addClass('active');
	});
});


//============ Task 2 and 3 ===============


$('.accordions').each(function() {
	accordion = $(this);
	let $accordionList =  accordion.find('.accordion-wrapper > div');

	if(accordion.data('accord-type') === 'simple'){
		$accordionList.click(function() {
			$(this).toggleClass('open');
		});
	}else if(accordion.data('accord-type') === 'single') {
		$accordionList.click(function() {
			$(this).siblings().removeClass('open');
			$(this).toggleClass('open');
		});
	}
});


//============ Task 4 ===============

$('.slider-wrapper').each(function() {
	let sliderWrapper = $(this);
	let sliderNavPrev = sliderWrapper.find('.slider-nav-prev');
	let sliderNavNext = sliderWrapper.find('.slider-nav-next');

	sliderNavPrev.click(function() {
		let activeSlide = sliderWrapper.find('.slider .active');
		let pervSlide = activeSlide.prev();

		if(pervSlide.length){
			activeSlide.removeClass('active');
			pervSlide.addClass('active')
		}else {
			activeSlide.removeClass('active');
			sliderWrapper.find('.slider > div').last().addClass('active');
		}
	});

	sliderNavNext.click(function() {
		let activeSlide = sliderWrapper.find('.slider .active');
		let nextSlide = activeSlide.next();

		if(nextSlide.length){
			activeSlide.removeClass('active');
			nextSlide.addClass('active')
		}else {
			activeSlide.removeClass('active');
			sliderWrapper.find('.slider > div').first().addClass('active');
		}
	});
});