console.log('====================Task 1');

function strToArray(str) {
	return str.split(' ');
}

console.log(strToArray('Lorem ipsum dolor sit amet consectetur'));


console.log('====================Task 2');

function numbSymbol(str) {
	return str.length;
}

console.log(numbSymbol('Lorem ipsum dolor sit amet consectetur'));


console.log('====================Task 3');

function changeSep(str, delimiter) {
	// return str.split(' ').join(delimiter);
	return str.replaceAll(' ', delimiter);
}

console.log(changeSep('Lorem ipsum dolor sit amet consectetur', '-'));


console.log('====================Task 4');

function firstSymbolToUpperCase(str) {
	array = str.split(' ');

	for (let i = 0; i < array.length; i++) {
		array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1).toLowerCase();
	}
	
	return array.join(' ')
}

console.log(firstSymbolToUpperCase('Lorem ipsum dolor sit amet consectetur'));


console.log('====================Task 5');

function compareStr(str1, str2) {
	return str1.toUpperCase() === str2.toUpperCase();
}

console.log(compareStr('Lorem ipsum dolor sit amet consectetur','Lorem ipsum dolor SIT AMET consectetur'));


console.log('====================Task 6');

function searchStrInStr(str, searchStr) {
	return str.toUpperCase().split(' ').indexOf(searchStr.toUpperCase()) != -1;
}

console.log(searchStrInStr('Lorem ipsum dolor sit amet consectetur', 'IpsuM')); 


console.log('====================Task 7');

function strToCamelCase(str) {
	array = str.split(' ');

	for (let i = 0; i < array.length; i++) {
		array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1).toLowerCase();
	}

	return  array.join('').charAt(0).toLowerCase() +  array.join('').slice(1)
}

console.log(strToCamelCase('LOREM     IPSUM dolor')); 


console.log('====================Task 8');

function toSnakeCase(str, delimiter) {
	// return str.split(' ').join(delimiter);
	return str.replaceAll(' ', delimiter).toLowerCase();
}

console.log(toSnakeCase('Lorem ipsum dolor sit amet consectetur', '_'));


console.log('====================Task 9');

function repeatWord(word, number) {
	for (let i = 0; i < number; i++) {
		console.log(word);
	}
	
}

repeatWord('Lorem', 5);


console.log('====================Task 10');

function partStr(str, symbol) {
	return str.substr(0, str.indexOf(symbol));
}

console.log(partStr('Lorem ipsum dolor sit ! amet consectetur', '!'));


console.log('====================Task 11');

function cutString(str, number) {
	let result = [];

	for(var i = 0 ; i < str.length; i += number) {
		result.push(str.substr(i, number));
	}

	return result;
}
	
console.log(cutString('Lorem-ipsum-dolor',3));


console.log('====================Task 12');

function numberSymbol(str) {
	  return str.split(' ').join('').length;
	}
	
console.log(numberSymbol('Lorem     aaa'));


console.log('====================Task 13');

function sortWord(str) {
	  return str.split('').sort().join('');
	}
	
console.log(sortWord('Lorem'));


console.log('====================Task 14');

function removeDuplicate(str) {
	let array = str.split(', ');
	let result = [];

	for (let i = 0; i < array.length; i++) {
		result.indexOf(array[i]) === -1 ? result.push(array[i]) : {} ;
	}

	return result;
}
	
console.log(removeDuplicate('вишня, груша, слива, груша'));


console.log('====================Task 15');

function firstSymbolToLowerCase(str) {
	array = str.split(' ');

	for (let i = 0; i < array.length; i++) {
		array[i] = array[i].charAt(0).toLowerCase() + array[i].slice(1)
	}
	
	return array.join(' ');
}

console.log(firstSymbolToLowerCase('Lorem ipsum dolor sit amet consectetur'));


console.log('====================Task 16');

function whatType(param) {
	return typeof(param);
}

console.log(whatType('Lorem'));


console.log('====================Task 17');

function lengthStringArray(array) {
	let result = '';

	for (let i = 0; i < array.length; i++) {
		if(array[i].length > result.length) {
			result = array[i];
		}			
	}

	return result;
}

console.log(lengthStringArray(['Lorem', 'Lorem Lorem', 'Lorem Lorem Lorem Lorem Lorem Lorem', 'ss']));


console.log('====================Task 18');

function lengthWordInStr(str) {

	let result = '';
	array = str.split(' ');

	for (let i = 0; i < array.length; i++) {
		if(array[i].length > array.length) {
			result = array[i];
		}			
	}

	return result;
}

console.log(lengthWordInStr('Lorem ipsum dolor sit amet consectetur'));


console.log('====================Task 19');

function numberWordsInStr(str) {
	
	let array = str.split(' ');

	let result = 0;

	for (let i = 0; i <= array.length; i++) {
		result = i;		
	}

	return result;
}

console.log(numberWordsInStr('Lorem ipsum dolor sit amet consectetur'));


console.log('====================Task 20');

function changeDateFormat(date) {
	let array = date.split('-')
	let result = [];

	result.push(array[2]);
	result.push(array[1]);
	result.push(array[0]);

	return result.join('.');

}

console.log(changeDateFormat('31-12-2030'));


console.log('====================Task 21');

function combineArrays(array1, array2) {
	return array1.concat(array2);
}

console.log(combineArrays([1,2,3], [4,5,6]));


console.log('====================Task 22');

function addElementToArray(array, addEl) {
	array.push(addEl);
	return array;
}

console.log(addElementToArray([1,2,3], 42));


console.log('====================Task 23');

function orderArray(array, order) {
	return order === 'normal' ? array : array.reverse();
}

console.log(orderArray([1,2,3], 'normal'));


console.log('====================Task 24');

function removeElementInArray(array, remEl) {
	return array.filter(el => el !== remEl);
}

console.log(removeElementInArray([1,2,3,42], 42));


console.log('====================Task 25');

function howOld(birthday) {

	array = birthday.split('-');
	birthdayYear = array[0];
	birthdayMonth = array[1];
	birthdayDay = array[2];

	const birthdayDate = new Date(birthdayYear, birthdayMonth, birthdayDay);
	let today = new Date();
	
	return Math.floor(((today - birthdayDate) / (24 * 3600 * 365.25 * 1000)) + 0.001);
}

console.log(howOld('1999-06-20'));

//	-----------------------------------------------------

//============ Task 1 ===============

function summa() {

	let numb1 = parseInt(document.getElementsByClassName('numb1')[0].value);
	let numb2 = parseInt(document.getElementsByClassName('numb2')[0].value);
	let numb3 = parseInt(document.getElementsByClassName('numb3')[0].value);

	document.getElementsByClassName('result')[0].value = numb1 + numb2 + numb3;
}

let btn = document.getElementsByClassName('count')[0];
btn.addEventListener('click', summa);


//============ Task 2 ===============

function sumNumb() {

	let numb = document.getElementsByClassName('summ-namb-input')[0].value;
	let array = numb.split('');
	let result = 0;

	for (let i = 0; i < array.length; i++) {
		result += parseInt(array[i])
	}

	document.getElementsByClassName('result2')[0].value = result;
}

let btn2 = document.getElementsByClassName('count2')[0];
btn2.addEventListener('click', sumNumb);


//============ Task 3 ===============

function arithMean() {

	let numb = document.getElementsByClassName('arith-mean-input')[0].value;
	let array = numb.split(',');
	let summa = 0;
	let result = 0;

	for (let i = 0; i < array.length; i++) {
		summa += parseInt(array[i]);
	}
	
	document.getElementsByClassName('result3')[0].value = summa / array.length;;
}

let btn3 = document.getElementsByClassName('arith-mean')[0];
btn3.addEventListener('click', arithMean);


//============ Task 4 ===============

function splitName() {

	let numb = document.getElementsByClassName('full-name')[0].value;

	let array = numb.split(' ');

	let firstName = array[0];
	let lastName = array[1];
	let surname = array[2];

	document.getElementsByClassName('first-name')[0].value = firstName;
	document.getElementsByClassName('last-name')[0].value = lastName;
	document.getElementsByClassName('surname')[0].value = surname;
}

let btn4 = document.getElementsByClassName('split-name')[0];
btn4.addEventListener('click', splitName);


//============ Task 5 ===============

function fixName() {

	let name = document.getElementsByClassName('fix-name-input')[0].value;

	array = name.split(' ');

	for (let i = 0; i < array.length; i++) {
		array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
	}

	document.getElementsByClassName('fix-name-input')[0].value = array.join(' ');
}

let btn5 = document.getElementsByClassName('fix-name')[0];
btn5.addEventListener('click', fixName);


//============ Task 6 ===============

function numbWord() {

	let str = document.getElementsByClassName('numb-word-input')[0].value;

	array = str.split(' ');

	let result = 0;

	for (let i = 0; i <= array.length; i++) {
		result = i;		
	}

	document.getElementsByClassName('result4')[0].value = result;
}

let btn6 = document.getElementsByClassName('numb-word')[0];
btn6.addEventListener('click', numbWord);


//============ Task 7 ===============

function numbSymbol() {

	let str = document.getElementsByClassName('numb-symbol-in-long-word-input')[0].value;
	let len = 0;

	array = str.split(' ');

	for (let i = 0; i < array.length; i++) {
		if(array[i].length > len) {
			len = array[i].length;
		}			
	}

	document.getElementsByClassName('result5')[0].value = len;
}

let btn7 = document.getElementsByClassName('numb-symbol-in-long-word')[0];
btn7.addEventListener('click', numbSymbol);


//============ Task 8 ===============

function whatDay() {

	let date = document.getElementsByClassName('what-day-input')[0].value;

	
	let array = date.split('.');

	year = array[0];
	month = array[1];
	day = array[2];

	let searchDate = new Date(year, month, day);

	searchDate = searchDate.getDate();


	document.getElementsByClassName('result6')[0].value = console.log(searchDate);
}

let btn8 = document.getElementsByClassName('what-day')[0];
btn8.addEventListener('click', whatDay);