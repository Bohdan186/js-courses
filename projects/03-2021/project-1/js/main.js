console.log('Task 1');

function strToArray(str) {
	let result = str.split(' ');
	return result;
}

console.log(strToArray('Lorem ipsum dolor sit amet consectetur'));

console.log('Task 2');

function numbSymbol(str) {
	let result = str.length;
	return result;
}

console.log(numbSymbol('Lorem ipsum dolor sit amet consectetur'));

console.log('Task 3');

function changeSep(str, delimiter) {
	let result = str.split(' ').join(delimiter);
	return result;
}

console.log(changeSep('Lorem ipsum dolor sit amet consectetur', '-'));

console.log('Task 4');

function strToUpperCase(str) {
	let result = str.toUpperCase();
	return result;
}

console.log(strToUpperCase('Lorem ipsum dolor sit amet consectetur'));

console.log('Task 5');

function compareStr(str1, str2) {
	let result = (str1.toUpperCase() === str2.toUpperCase());
	return result;
}

console.log(compareStr('Lorem ipsum dolor sit amet consectetur','Lorem ipsum dolor SIT AMET consectetur'));

console.log('Task 6');

function searchStrInStr(str, searchStr) {
	str = str.toUpperCase();
	searchStr = searchStr.toUpperCase();

	let result = str.split(' ').indexOf(searchStr);

	return result != -1 ? true : false;
}

console.log(searchStrInStr('Lorem ipsum dolor sit amet consectetur', 'ipsuM')); 

// console.log('Task 7');

// function strToCamelCase(str) {

// 	return str.toUpperCase().split(/\s+/).map(word => word[0].toLowerCase() + word.substring(1)).join(" ")

	
// }

// console.log(strToCamelCase('Lorem ipsum dolor')); 


console.log('Task 8');

function toSnakeCase(str, delimiter) {
	let result = str.split(' ').join(delimiter);
	return result;
}

console.log(toSnakeCase('Lorem ipsum dolor sit amet consectetur', '_'));


console.log('Task 9');

function repeatWord(word, number) {
	
	for (let i = 0; i < number; i++) {
		console.log(word);
	}
	
}

console.log(repeatWord('Lorem', 5));


console.log('Task 10');

function partStr(str, symbol) {
	let result = str.substr(0, str.indexOf(symbol));
	return result;
	
}

console.log(partStr('Lorem ipsum dolor sit ! amet consectetur', '!'));

console.log('Task 11');

function cutString(str, number) {
	let result = [];
	  for(var i = 0 ; i < str.length; i += number) {
		result.push(str.substr(i, number));
	  }
	  return result;
	}
	
console.log(cutString('Lorem-ipsum-dolor',3));


console.log('Task 12');

function numberSymbol(str) {
	let result = str.split(' ').join('').length;
	  return result;
	}
	
console.log(numberSymbol('Lorem     aaa'));


console.log('Task 13');

function sortWord(str) {
	let result = str.split('').sort().join('');
	  return result;
	}
	
console.log(sortWord('Lorem'));


console.log('Task 14');

function removeDuplicate(str) {

	let arr = str.split(', ');




	  return result;
}
	
console.log(removeDuplicate('вишня, груша, слива, груша'));
