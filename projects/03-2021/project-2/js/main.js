//============ Task 1 ===============

let $btn1 = document.getElementsByClassName('call-alert')[0];

$btn1.addEventListener('click', function() {
	alert('Який текст');
});

//============ Task 2 ===============

let $btn2 = document.getElementsByClassName('call-alert-2')[0];

$btn2.addEventListener('click', function() {
	let inputText = document.getElementsByClassName('call-alert-2-input')[0].value;

	alert(inputText);
});


//============ Task 3 ===============

let $btn3 = document.getElementsByClassName('square-numb')[0];

$btn3.addEventListener('click', function() {
	let inputText = document.getElementsByClassName('square-numb-input')[0].value;
	inputText = inputText ** 2;
	alert(inputText);
});


//============ Task 4 ===============

let $btn4 = document.getElementsByClassName('swap-places')[0];

$btn4.addEventListener('click', function() {
	let inputText1 = document.getElementsByClassName('swap-places-input')[0].value;
	let inputText2 = document.getElementsByClassName('swap-places-input')[1].value;
	
	document.getElementsByClassName('swap-places-input')[0].value = inputText2;
	document.getElementsByClassName('swap-places-input')[1].value = inputText1;
});


//============ Task 5 ===============

let $btn5 = document.getElementsByClassName('change-text')[0];

$btn5.addEventListener('click', function() {
	$btn5.innerHTML = 'some new text'
});


//============ Task 6 ===============

let $btn6 = document.getElementsByClassName('change-color')[0];

$btn6.addEventListener('click', function() {
	document.getElementsByClassName('change-color-input')[0].style.color = 'red';
});


//============ Task 7 ===============

let $btn7 = document.getElementsByClassName('lock')[0];
let $btn8 = document.getElementsByClassName('un-lock')[0];

$btn7.addEventListener('click', function() {
	document.getElementsByClassName('lock-un-lock-input')[0].readOnly = true;
});

$btn8.addEventListener('click', function() {
	document.getElementsByClassName('lock-un-lock-input')[0].readOnly = false;
});


//============ Task 8 ===============

let $btn9 = document.getElementsByClassName('hover-call-allert')[0];

$btn9.addEventListener('mouseenter', function() {
	alert ('Alert text');
});



//============ Task 9 ===============

let $btn10 = document.getElementsByClassName('double-click-call-alert')[0];

$btn10.addEventListener('dblclick', function() {
	alert ('Alert text');
});


//============ Task 10 ===============

let $btn11 = document.getElementsByClassName('change-image-btn')[0];

$btn11.addEventListener('click', function() {
	let img = document.getElementsByClassName('change-img')[0];

	if (img.classList.contains('img-2')) {
		img.classList.remove('img-2');
		img.src = 'img/img1.jpg';
	} else {
		img.classList.add('img-2');
		img.src = 'img/img2.jpg';
	}
});


//============ Task 11 ===============

let $imgWithHover = document.getElementsByClassName('change-img-hover')[0];

$imgWithHover.addEventListener('mouseover', function() {
	$imgWithHover.src = 'img/img2.jpg';
});
$imgWithHover.addEventListener('mouseout', function() {
	$imgWithHover.src = 'img/img1.jpg';
});


//============ Task 12 ===============

let $btn12 = document.getElementsByClassName('hide')[0];
let $btn13 = document.getElementsByClassName('show')[0];

$btn12.addEventListener('click', function() {
	document.getElementsByClassName('hide-show-input')[0].style.display = 'none';
});

$btn13.addEventListener('click', function() {
	document.getElementsByClassName('hide-show-input')[0].style.display = 'inline';
});


//============ Task 13 ===============

let $btn14 = document.getElementsByClassName('change-input-btn')[0];

$btn14.addEventListener('click', function() {
	document.getElementsByClassName('change-input')[0].style.color = 'red';
	document.getElementsByClassName('change-input')[0].style.width = '400px';
	document.getElementsByClassName('change-input')[0].value = 'Some new text';
});


//============ Task 14 ===============

let $btn15 = document.getElementsByClassName('counter')[0];
let count = 1;

$btn15.addEventListener('click', function() {
	$btn15.innerHTML = 'Counter ' + count++;
});


//============ Task 15 ===============

// let $btn16 = document.getElementsByClassName('show-input-class')[0];

// $btn16.addEventListener('click', function() {
// 	let showInput = document.getElementsByClassName('show-input')[0];

// 	$btn16.innerHTML = ;
// });

