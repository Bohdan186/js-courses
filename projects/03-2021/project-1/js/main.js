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
		result.indexOf(array[i]) === -1 ? result.push(array[i]) : '' ;
	}

	return result;
}
	
console.log(removeDuplicate('вишня, груша, слива, груша'));


console.log('====================Task 15');

function firstSymbolToLowerCase(str) {
	let array = str.split(' ');

	for (let i = 0; i < array.length; i++) {
		array[i] = array[i].charAt(0).toLowerCase() + array[i].slice(1)
	}
	
	return array.join(' ');
}

console.log(firstSymbolToLowerCase('Lorem ipsum dolor sit amet consectetur'));


console.log('====================Task 16');

function whatType(param) {
	return typeof param;
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
	return str.split(' ').length;
}

console.log(numberWordsInStr('Lorem ipsum dolor sit amet consectetur'));


console.log('====================Task 20');

function changeDateFormat(date) {
	return date.split('-').reverse().join('.');
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
	return	order === 'normal' ? array 
			: order === 'reverse' ? array.reverse() 
			: 'Choose how to display the array (normal or reverse)';
}

console.log(orderArray([1,2,3], 'normal'));


console.log('====================Task 24');

function removeElementInArray(array, itemToDelete) {
	return array.filter(function (arrayItems) {
		return arrayItems !== itemToDelete;
	});
}

console.log(removeElementInArray([1,2,3,42], 42));


console.log('====================Task 25');

function howOld(birthday) {
	const birthdayDate = new Date(birthday.split('.').reverse().join('.'));
	let today = new Date();
	let result = today.getYear() - birthdayDate.getYear();

	if (today.getMonth() < birthdayDate.getMonth()) {
		result--;
	}

	return result;
}

console.log(howOld('17.08.1996'));