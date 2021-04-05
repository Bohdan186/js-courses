//============ Task 1 ===============
let $tabsList = document.querySelectorAll('.tabs-menu>li');
let $contentList = document.querySelectorAll('.content-list>div');

for (let i = 0; i < $tabsList.length; i++) {

	$tabsList[i].addEventListener('click', function () {
		removeSiblingClass($tabsList[i], 'active');

		$tabsList[i].classList.add('active');
		let categorySelected = $tabsList[i].dataset.category;

		for (let removeIndex = 0; removeIndex < $contentList.length; removeIndex++) {
			$contentList[removeIndex].classList.remove('active');
		}

		for (let showIndex = 0; showIndex < $contentList.length; showIndex++) {
			if (categorySelected === $contentList[showIndex].dataset.category) {
				$contentList[showIndex].classList.toggle('active');
			}
		}
	});
}

// ============ Functions ===============

function removeSiblingClass(elemList, remClass) {
	let prewElements = elemList.previousElementSibling;
	let nextElements = elemList.nextElementSibling;

	while (prewElements) {
		prewElements.classList.remove(remClass);
		prewElements = prewElements.previousElementSibling;
	}

	while (nextElements) {
		nextElements.classList.remove(remClass);
		nextElements = nextElements.nextElementSibling;
	}
}

function accordionType(type, accordionItems){
	if (type === 'single') {
		for (let i = 0; i < accordionItems.length; i++) {
			
			accordionItems[i].addEventListener('click', function() {
				removeSiblingClass(accordionItems[i], 'open');
				accordionItems[i].classList.toggle('open');
			});
		}
	}else if (type === 'all'){
		for (let i = 0; i < accordionItems.length; i++) {
			accordionItems[i].addEventListener('click', function() {
				accordionItems[i].classList.toggle('open');
			});
		}
	}
}

//============ Task 2 ===============
let $accordionList = document.getElementsByClassName('accordion');
accordionType('all', $accordionList);

//============ Task 3 ===============
let $accordionList2 = document.getElementsByClassName('accordion2');
accordionType('single',  $accordionList2);

//============ Task 4 ===============
let $slider = document.querySelectorAll('.slider')[0];
let $slidePrew = document.querySelector('.slider-nav-prew');
let $slideNext = document.querySelector('.slider-nav-next');

$slidePrew.addEventListener('click', function() {
	let nowActive = $slider.querySelector('.active');

	if(nowActive === $slider.firstElementChild) {
		nowActive.classList.remove('active');
		nowActive = $slider.lastElementChild;
		nowActive.classList.add('active');
	}else {
		nowActive.previousElementSibling.classList.add('active');
		nowActive.classList.remove('active');
	}
});

$slideNext.addEventListener('click', function() {
	let nowActive = $slider.querySelector('.active');
	
	if(nowActive === $slider.lastElementChild) {
		nowActive.classList.remove('active');
		nowActive = $slider.firstElementChild;
		nowActive.classList.add('active');
	}else {
		nowActive.nextElementSibling.classList.add('active');
		nowActive.classList.remove('active');
	}
});