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

const swiper = new Swiper('.swiper-container', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		renderBullet: function (index) {
			return '<span class="' + className + '">' + (index + 1) + '</span>';
		},
	},

	// Navigation arrows
	navigation: {
		nextEl: '.next',
		prevEl: '.prev',
	},
});