//============ Task 1 ===============

let btn = document.getElementsByClassName('count')[0];

btn.addEventListener('click', function() {
	let numb1 = parseInt(document.getElementsByClassName('numb1')[0].value);
	let numb2 = parseInt(document.getElementsByClassName('numb2')[0].value);
	let numb3 = parseInt(document.getElementsByClassName('numb3')[0].value);

	numb1 && numb2 && numb3 ? document.getElementsByClassName('result')[0].value = numb1 + numb2 + numb3
	: alert('Заповніть всі поля числами !');

});


//============ Task 2 ===============

let btn2 = document.getElementsByClassName('count2')[0];

btn2.addEventListener('click', function() {
	let numb = document.getElementsByClassName('summ-namb-input')[0].value;
	let array = numb.split('').filter(function (arrayItem) {
		return arrayItem !== " ";
	});


	if (array.length && isNaN(numb) === false) {
		let result = 0;

		for (let i = 0; i < array.length; i++) {
			result += parseInt(array[i]);
		}
	
		document.getElementsByClassName('result2')[0].value = result;
	}else {
		alert('Введіть число');
	}
});


//============ Task 3 ===============

let btn3 = document.getElementsByClassName('arith-mean')[0];

btn3.addEventListener('click', function() {
	let numb = document.getElementsByClassName('arith-mean-input')[0].value;
	let summa = 0;
	let array = numb.split(',');

	array.forEach(element => {
		isNaN(element) ? ( alert('Error'), summa = 0 )  : summa += parseInt(element);
	});

	document.getElementsByClassName('result3')[0].value = summa / array.length;
});


//============ Task 4 ===============

let btn4 = document.getElementsByClassName('split-name')[0];

btn4.addEventListener('click', function() {
	let numb = document.getElementsByClassName('full-name')[0].value;
	let array = numb.split(' ').filter(function (arrayItem) {
		return arrayItem !== "";
	});

	if ( 3 !== array.length) {
		alert('Введіть повне ім\'я !!!');
	}else {
		document.getElementsByClassName('first-name')[0].value = array[0];
		document.getElementsByClassName('last-name')[0].value = array[1];
		document.getElementsByClassName('surname')[0].value = array[2];
	}
});


//============ Task 5 ===============

let btn5 = document.getElementsByClassName('fix-name')[0];

btn5.addEventListener('click', function() {
	let name = document.getElementsByClassName('fix-name-input')[0].value;
	let array = name.split(' ').filter(function (arrayItem) {
		return arrayItem !== "";
	});

	for (let i = 0; i < array.length; i++) {
		array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
	}

	document.getElementsByClassName('fix-name-input')[0].value = array.join(' ');
});


//============ Task 6 ===============

let btn6 = document.getElementsByClassName('numb-word')[0];

btn6.addEventListener('click', function() {
	let str = document.getElementsByClassName('numb-word-input')[0].value;
	let array = str.split(' ').filter(function (arrayItem) {
		return arrayItem !== "";
	});

	document.getElementsByClassName('result4')[0].value = array.length;
});


//============ Task 7 ===============

let btn7 = document.getElementsByClassName('numb-symbol-in-long-word')[0];

btn7.addEventListener('click', function() {
	let str = document.getElementsByClassName('numb-symbol-in-long-word-input')[0].value;
	let len = 0;
	let array = str.split(' ').filter(function (arrayItem) {
		return arrayItem !== "";
	});

	for (let i = 0; i < array.length; i++) {
		array[i].length > len ? len = array[i].length : '';
	}

	document.getElementsByClassName('result5')[0].value = len;
});


//============ Task 8 ===============

let btn8 = document.getElementsByClassName('what-day')[0];

btn8.addEventListener('click', function () {
	let dateInput = document.getElementsByClassName('what-day-input')[0].value;
	let date = new Date(dateInput);
	let searchDate = new Intl.DateTimeFormat('uk-UK', { weekday: 'long' }).format(date);
	
	document.getElementsByClassName('result6')[0].value = searchDate;
});


//============ Task 9 ===============

function changeWidth() {
	if (this.classList.contains('width-2x')) {
		this.classList.remove('width-2x');
		this.style.width = (this.width / 2) + 'px';
	} else {
		this.classList.add('width-2x');
		this.style.width = (this.width * 2) + 'px';
	}

	console.log(this.className);
};

let img1 = document.getElementsByClassName('img1')[0];
let img2 = document.getElementsByClassName('img1')[1];
let img3 = document.getElementsByClassName('img1')[2];
let img4 = document.getElementsByClassName('img1')[3];

img1.addEventListener('click', changeWidth);
img2.addEventListener('click', changeWidth);
img3.addEventListener('click', changeWidth);
img4.addEventListener('click', changeWidth);
