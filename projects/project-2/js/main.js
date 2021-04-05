//============ Task 1 ===============

let $btn1 = document.getElementsByClassName('call-alert')[0];

$btn1.addEventListener('click', function() {
	alert('Якийсь текст');
});

//============ Task 2 ===============

let $btn2 = document.getElementsByClassName('call-alert-2')[0];

$btn2.addEventListener('click', function() {
	let inputText = document.getElementsByClassName('call-alert-2-input')[0].value;
	
	!inputText ? alert('Введіть текст') : alert(inputText);
});


//============ Task 3 ===============

let $btn3 = document.getElementsByClassName('square-numb')[0];

$btn3.addEventListener('click', function() {
	let inputNumb = document.getElementsByClassName('square-numb-input')[0].value;

	alert(isNaN(inputNumb) ? 'Введіть число' : inputNumb ** 2);
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
	document.getElementsByClassName('lock-un-lock-input')[0].disabled = true;
});

$btn8.addEventListener('click', function() {
	document.getElementsByClassName('lock-un-lock-input')[0].disabled = false;
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
let $btn13 = document.getElementsByClassName('showbtn')[0];

$btn12.addEventListener('click', function() {
	document.getElementsByClassName('hide-show-input')[0].style.display = 'none';
});

$btn13.addEventListener('click', function() {
	document.getElementsByClassName('hide-show-input')[0].style.display = 'inline';
});


//============ Task 13 ===============

let $btn14 = document.getElementsByClassName('change-input-btn')[0];

$btn14.addEventListener('click', function() {
	let $changeElement = document.getElementsByClassName('change-input')[0];
	
	$changeElement.style.color = 'red';
	$changeElement.style.width = '400px';
	$changeElement.value = 'Some new text';
});


//============ Task 14 ===============

let $btn15 = document.getElementsByClassName('counter')[0];
let count = 1;

$btn15.addEventListener('click', function() {
	$btn15.innerHTML = 'Counter ' + count++;
});


//============ Task 15 ===============

let $btn16 = document.getElementsByClassName('show-input-class')[0];

$btn16.addEventListener('click', function() {
	$btn16.innerHTML = document.getElementsByClassName('show-input')[0].className;
});


//============ Task 16 ===============

let $btn17 = document.getElementsByClassName('pushForm')[0];

$btn17.addEventListener('click', function() {
	let $form1 = document.getElementsByClassName('form-1')[0];

	let firstName = $form1[0].value;
	let lastName = $form1[1].value;
	let birthdayDate = new Date($form1[2].value);
	let today = new Date();
	let birthdayYear = birthdayDate.getYear() + 1900;
	let thisYear = today.getYear() + 1900;
	let place = $form1[3].value;
	let phoneNumber = $form1[4].value;
	
	if (!firstName || !lastName) {
		alert('Введіть Ім\'я та Прізвище !');

	} else if (birthdayYear > thisYear) {
		alert('Введіть справжній рік народження !');

	} else if (isNaN(birthdayYear)) {
		alert('Введіть рік народження'); 

	} else if (!place) {
		alert('Введіть місце проживання !');

	} else if (isNaN(phoneNumber) || !phoneNumber) {
		alert('Перевірте телефон !');

	}else {
		alert(` Ім\'я: ${firstName} \n Прізвище: ${lastName} \n Рік народження: ${birthdayYear} \n Місце проживання: ${place} \n Номер телефону: ${phoneNumber}`);
	}
});


//============ Task 17 ===============
let $btn18 = document.getElementsByClassName('registration')[0];

$btn18.addEventListener('click', function() {
	let $form1 = document.getElementsByClassName('form-2')[0];

	if ($form1[1].value !== $form1[2].value){
		alert('Паролі не співпадають!');
	}else {
		alert(` Логін: ${$form1[0].value} \n Пароль:  ${$form1[1].value}`);
	}

});


//============ Task 18 ===============

let $action = document.getElementsByClassName('action');
console.log($action);

for (let i = 0; i < $action.length; i++) {

	$action[i].addEventListener('click', function () {
		for (let j = 0; j < $action.length; j++) {
			$action[j].classList.remove('active');	
		}

		$action[i].classList.toggle('active');
	});
}

let $equals = document.getElementsByClassName('equals')[0];
$equals.addEventListener('click', function () {
	let $action = document.getElementsByClassName('active')[0].getAttribute('data-value');
	let number1 = parseInt(document.getElementsByClassName('number1')[0].value);
	let number2 = parseInt(document.getElementsByClassName('number2')[0].value);

	if (isNaN(number1) || isNaN(number2)) {
		alert('Введіть числа!');
	}else {
		if ($action === '+') {
			alert(number1 + number2);
		}else if ($action === '-') {
			alert(number1 - number2);
		}else if ($action === '*') {
			alert(number1 * number2);
		}else if ($action === ':') {
			alert(number1 / number2);
		}	
	}
});


//============ Task 19 ===============

let $popUp = document.getElementsByClassName('pop-up')[0];

let $banner = document.getElementsByClassName('banner')[0];
let $wrapper = document.getElementsByClassName('wrapper')[0];
let $btnClose = document.getElementsByClassName('btn-close')[0];

$popUp.addEventListener('click', function () {
	$banner.classList.add('show');
	$wrapper.classList.add('show');
});

$wrapper.addEventListener('click', function () {
	$wrapper.classList.remove('show');
	$banner.classList.remove('show');
});

$btnClose.addEventListener('click', function () {
	$wrapper.classList.remove('show');
	$banner.classList.remove('show');
});
