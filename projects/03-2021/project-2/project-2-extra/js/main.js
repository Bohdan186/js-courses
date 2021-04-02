//============ Task 1 ===============
let $tabsList = document.querySelectorAll('.tabs-menu>li');
let $contentList = document.querySelectorAll('.content-list>div');

for (let i = 0; i < $tabsList.length; i++) {

	$tabsList[i].addEventListener('click', function () {
		for (let j = 0; j < $tabsList.length; j++) {
			$tabsList[j].classList.remove('active');	
		}

		$tabsList[i].classList.toggle('active');
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

// ============ Function ===============

function accordionType(type, accordionItems){
	if (type === 'single') {
		for (let i = 0; i < accordionItems.length; i++) {
			
			accordionItems[i].addEventListener('click', function() {
		
				for (let j = 0; j < accordionItems.length; j++) {
					if (accordionItems[j].classList.contains('open')){
						accordionItems[j].classList.remove('open');
					}
				}

				accordionItems[i].classList.add('open');
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