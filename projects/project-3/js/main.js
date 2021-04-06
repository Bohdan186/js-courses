//============ Task 1 ===============

$('.products').each(function() {
	let $thisProduct = $(this);
	let $tabsList = $thisProduct.find('.tabs-menu > li');

	$tabsList.on('click', function(e) {
		e.preventDefault();
		let $thisTab = $(this);
		let $tabsCategory = $thisTab.data('category');
		let $activeCategory = $thisProduct.find('.content-list > div [data-category=' + $tabsCategory + ']');
	
		$thisTab.siblings().removeClass('active');
		$thisTab.addClass('active');
	
		$activeCategory.siblings().removeClass('active');
		$activeCategory.addClass('active');
	});
});

//============ Task 2 and 3 ===============

$('.accordions').each(function() {
	let $thisAccordion = $(this);
	let $accordionList =  $thisAccordion.find('.accordion-wrapper > div');
	let accordType = $thisAccordion.data('accord-type');

	if('simple' === accordType){
		$accordionList.on('click', function() {
			$(this).toggleClass('open');
		});
	}else if('single' === accordType) {
		$accordionList.on('click', function() {
			let $thisAccordionItem = $(this);
			$thisAccordionItem.siblings().removeClass('open');
			$thisAccordionItem.toggleClass('open');
		});
	};
});

//============ Task 4 ===============

function sliderNav(element, thisParent){
	let $activeSlide = thisParent.find('.slider .active');
	let $sliderItem = thisParent.find('.slider > div');
	let slideDirection;

	$activeSlide.removeClass('active');

	if('prev' === element.data('direction')){
		slideDirection = $activeSlide.prev();

		if(slideDirection.length){
			slideDirection.addClass('active');
		}else {
			$sliderItem.last().addClass('active');
		}

	}else if('next' === element.data('direction')) {
		slideDirection = $activeSlide.next();

		if(slideDirection.length){
			slideDirection.addClass('active');
		}else {
			$sliderItem.first().addClass('active');
		}
	}
}

$('.slider-wrapper').each(function() {
	let $sliderWrapper = $(this);
	let $sliderNavPrev = $sliderWrapper.find('.slider-nav-prev');
	let $sliderNavNext = $sliderWrapper.find('.slider-nav-next');

	$sliderNavPrev.on('click', function() {
		sliderNav($(this), $sliderWrapper);
	});

	$sliderNavNext.on('click', function() {
		sliderNav($(this), $sliderWrapper);
	});
});