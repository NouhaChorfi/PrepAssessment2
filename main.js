// use the following helper functions in your solution
function each(coll, f) {
	if (Array.isArray(coll)) {
		for (var i = 0; i < coll.length; i++) {
			f(coll[i], i);
		}
	} else {
		for (var key in coll) {
			f(coll[key], key);
		}
	}
}

function filter(array, predicate) {
	var acc = [];
	each(array, function(element, i) {
		if (predicate(element, i)) {
			acc.push(element);
		}
	});
	return acc;
}

function map(array, func) {
	var acc = [];
	each(array, function(element, i) {
		acc.push(func(element, i));
	});
	return acc;
}


  // Remember to relax :)




//=======================================================================
/*                                  Q1                                 */
//=======================================================================
//Depending on data modeling concept that you have learned:
// create a factory function called makeComputer that represents computers,
// what different attributes computers may have? create two computers object from your factory function and save them in one array called computers!
// Note: please write one or two lines here describing your solution.

// The function below return an array of computers' objects

function makeComputer() {
	var computer1= {
		ID: '0033-AA200',
		System: 'Windows10',
		processor: 'Intel Core I5',
		SystemType: '64 bits'
	}
	var computer2= {
		ID: '0896-AV256',
		System: 'Windows10',
		processor: 'Intel Core I7',
		SystemType: '64 bits'
	}
	var computers = [ computer1, computer2 ];

	return computers ;
}

// write function displayComputer that can be used to display one computer.

// The function below returns an Object (computer) selected by its ID - I used Filter because it returns only one element

function displayComputer( computer ) {
	return filter ( makeComputer(),function ( element, i ) {
		return element.ID===computer;
	});
}


//=============================================================================
/*                                  Q2                                       */
//=============================================================================

//Write a function that takes an array of strings as a input,and returns an array 
//of all of those strings, but transformed to upper case. 
//You can use toUpperCase method to convert a string to upper case.
//solve it using the most appropriate helper functions(each,map,filter).
// Note: please write one or two lines here describing your solution.
// var strArr = ['hello', 'world', 'whirled', 'peas'];
// uppercaseAll(strArr); ==> [ 'HELLO', 'WORLD', 'WHIRLED', 'PEAS' ]

// The function below takes an array of Strings as input and returns an array of uppercased strings - i used the map because it's returning a full edited array
function uppercaseAll ( arrayOfStrings ) {
     return map ( arrayOfStrings, function ( element, i ) {
		 return element.toUpperCase();
	 });
 }


//=============================================================================
/*                                  Q3                                       */
//=============================================================================
//write a function that takes array of objects  as an input and returns an array
//with only the countries that have a population higher than 500 million.
//solve it using one of the most appropriate helperthe helpers functions(each,map,filter).
//Here’s the data you’ll work with:

var data = [
{
	country: 'China',
	population: 1409517397,
},
{
	country: 'India',
	population: 1339180127,
},
{
	country: 'USA',
	population: 324459463,
},
{
	country: 'Indonesia',
	population: 263991379,
}
];
// highestPopulation(data); ==> [{country: "China", population: 1409517397},{country: "India", population: 1339180127}]
// Note: please write one or two lines here describing your solution.

// the function select the highest population - i used filter because we need to select the countries according to their population

function highestPopulation( arrayOfObjects ) {
	return filter ( arrayOfObjects, function( element, i ) {
		return element.population >= 500000000;
	})

}



//=============================================================================
/*                              Q4                                           */
//=============================================================================

//Write a function halveAll that takes an array of numbers as a input and returns an array
// of all of those numbers halved (divided by two).
//Note: solve it using the most appropriate helper functions(each,map,filter)
// var numsArray = [2, 6, 20, 8, 14];
// halveAll(numsArray); ==> [ 1, 3, 10, 4, 7 ]
// Note: please write one or two lines here describing your solution.

// This function takes an array of numbers and return an array of halved ones - i had to use map in this case

function halveAll(numbers) {
	return map (numbers, function (element, i){
		return element/2
	});

}

//=============================================================================
/*                                  Q5                                       */
//=============================================================================
//write a function called values that accepts an object as a parameter, and outputs an array of the object's values.
//solve it using one of the most appropriate helpers functions(each,map,filter).
// values({first : 5, second: 'something' , third : 129}) ==> [5, 'something', 129]; 
// Note: please write one or two lines here describing your solution.

// This function is pushing an object values into an array - i had to use each in this case

 function values( obj ) {
	var arrayOfvalues=[];
 	each ( obj, function( element, key ){
		 arrayOfvalues.push( element );
	 })
	 return arrayOfvalues;
 }

 
							//Good Luck :))


