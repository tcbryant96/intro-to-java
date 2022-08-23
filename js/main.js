console.log('Hello world from trevor');
console.log('Hello my name is Brian');

// Basics of JavaScript

/*
    Multiline Comment in JavaScript

    -- Variable Declaration in JS --
    Primitive Data Types: String, Number, Boolean, Undefined, Null
    Objects: Object, Array, Function

    Control Flow
*/

// Variable Declaration
// var myName;

// console.log(myName);

// String Declaration
var myName = 'Brian';

// console.log() is equivalent to python's print() function
console.log(myName);
console.log(typeof myName);

// Strings can be created using '', "", or ``. The tick marks (``) have a special behavior to format the string
// Tick Marks + ${varName} is equiv to f"{}" in python 
console.log("My name is ${myName}");
console.log('My name is ${myName}');
console.log(`My name is ${myName}`); 


// Integer
var myAge = 100;

console.log(myAge);
console.log(typeof myAge);

// Float
var pi = 3.14;

console.log(pi);
console.log(typeof pi);


// Boolean
var boolTrue = true;
console.log(boolTrue);
console.log(typeof boolTrue);

var boolFalse = false;
console.log(boolFalse);
console.log(typeof boolFalse);


// Undefined
var something;

console.log(something);
console.log(typeof something);


// Null
var someNull = null;

console.log(someNull);
console.log(typeof someNull); // A Bug in the code! 


// Object
var myObject = {
    a: 123,
    test: 'Hello World'
}

console.log(myObject);
console.log(typeof myObject);


// Array
var myArr = ['Brian', 'Chicago', 'Coding Temple', 10];

console.log(myArr);
console.log(typeof myArr);


// Function
function abc(){};

console.log(abc);
console.log(typeof abc);



// Accessing Properties from an Object
var person = {
    first: 'Brian',
    last: 'Stanton',
    languages: ['Python', 'JavaScript']
};

console.log(person);

// Bracket Notation
console.log(`My first name is ${person['first']}`);

// Dot Notation
console.log(`My last name is ${person.last}`);

console.log(person.languages);

console.log(`My favorite language is ${person.languages[0]}`)


// Arrays have a "length" property
var myNewArr = ['abc', '123', 'hello world']
console.log(myNewArr, myNewArr.length);

console.clear();

// let - Allows us to declare a variable similar as var *let is block-scoped, var is global-scoped*
let myCity = 'Chicago';
let test;
console.log(test);

if (true){
    var myState = 'Illinois';
    // let myCity = 'Champaign';
    let color = 'Blue'
    console.log(myCity, myState, color);
}

console.log(myCity, myState);


// const - similar to let (block scoped) - 2 differences: 1. Needs a value when declared 2. Cannot be reassigned
const newVariable = 'something';
console.log(newVariable);

const myBirthday = true;
let ageOfPerson = 40;

if (myBirthday){
    const myFavColor = 'Orange';
    ageOfPerson = ageOfPerson + 1; // OK because ageOfPerson declared with let
    console.log(ageOfPerson);
    // myBirthday = false; // Error because myBirtday declared with const -> cannot be reassigned
    console.log(myFavColor);
}
// console.log(myFavColor); // Error: myFavColor not defined

if (myBirthday){
    const myFavColor = 'Blue';
    console.log(myFavColor)
}


const cities = ['Chicago', 'New York', 'Boston', 'Los Angeles']

console.log(cities);

cities[1] = 'San Fancisco';

console.log(cities);

// cities = ['Austin', 'Portland'];

// console.log(cities);

const newPerson = {
    first: 'Abe',
    last: 'Lincoln'
}

console.log(newPerson);

newPerson.first = 'Abraham';

console.log(newPerson);

// newPerson = {
//     first: 'Mary Todd',
//     last: 'Lincoln'
// }

// console.log(newPerson);

// Clear the console for new topic
console.clear()


/*
    Basic Math Operations 
*/

// Addition
let sum = 5 + 5;
console.log(sum);
sum += 5; // sum = sum + 5
console.log(sum);
sum += 5; // sum = sum + 5
console.log(sum);
sum++; // sum += 1 OR sum = sum + 1 
console.log(sum);


// Subtraction
let diff = 10 - 5;
console.log(diff);
diff -= 3; // diff = diff -3
console.log(diff);
diff--; // diff -= 1 OR diff = diff - 1
console.log(diff);


// Multiplication
let prod = 4 * 5;
console.log(prod);
prod *= 2; // prod = prod * 2
console.log(prod);

// Division
let quotient = 40 / 5;
console.log(quotient);
quotient /= 2; // quotient = quotient / 2;
console.log(quotient);


// Exponents
let square = 5 ** 2
console.log(square);
square **= 2; // square = square ** 2
console.log(square);


// Modulo 
let remainder = 19 % 4;
console.log(remainder);
remainder %= 2; // remainder = remainder % 2;
console.log(remainder);


// Floor Division
let floor = Math.floor(10/3)
console.log(floor);

let ceil = Math.ceil(10/3);
console.log(ceil);


let myString = 'My age is ';
let myCoolAge = 45;

let addedString = myString + myCoolAge;
console.log(addedString);
console.log(typeof addedString);


console.log(square);


let quizOne = square + '4';
// undefined, 629, 6254, 625+4
console.log(quizOne);

let quizOneWithParse = square + parseInt('4');
// undefined, 629, 6254, 625+4
console.log(quizOneWithParse);


let quizTwo = square - '4';
// undefined, 621, 6254, 625-4
console.log(quizTwo);


console.clear();

/*
    JavaScript Comparisons
*/

console.log(5 == 5);
console.log(5 == 5.0);
console.log(5 == '5');
console.log(5 === '5');
// == checks for equality while allowing for type conversion 
// === checks for equality does not allow for type conversion

console.log(1 == true);

console.log('10' < 5);

// be careful with type conversions!
let x = '10';
let y = '9';

console.log(x > y); // x and y are both strings, no conversion needed, compares alphabetically!


// When JavaScript compares objects, it looks for REFERENCE ONLY
let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4];

console.log(arr1 == arr2); 
console.log(arr1 === arr2);


let newArr = ['cat', 'dog', 'pig'];

let newerArr = newArr;

console.log(newArr === newerArr);
console.log(newArr === ['cat', 'dog', 'pig']);
console.log(newerArr === ['cat', 'dog', 'pig']);

// Greater Than (>), Greater Than or Equal (>=), Less Than (<), Less Than or Equal (<=)
// Equal allow type conversion (==), Equal no type conversion (===), 
// Not Equal yes conversion (!=), Not Eqaul no conversion (!==)
console.log(5 != '5');
console.log(5 !== '5');
console.clear();


// Control Flow

// if (condition expression){code to execute if true};

let newNumber = 70;
console.log('Begin');

if (newNumber > 65){
    console.log('Senior');
} else if (newNumber > 25){
    console.log('Adult');
} else {
    console.log('Child');
}
console.log('End');


// Ternary Operator - (condition) ? value if true : value if false

let ageGroup = (newNumber > 18) ? 'Adult' : 'Child';
console.log(ageGroup);

let ageGroup2 = (newNumber > 65) ? 'Senior' : (newNumber > 25) ? 'Adult' : 'Child';
console.log(ageGroup2);

// && - and
// || - or
newNumber = 30
if (newNumber > 18 && newNumber < 40){
    console.log('Young Adult');
};

if (newNumber < 18 || newNumber > 65){
    console.log('You get a discount')
}

console.clear()


/* 
    JavaScript Loops
    for, for...in, for...of, while, do while
*/

// Standard For Loop
// for (counter; expression/condition; incrementation/decrementation for counter){code to execute each loop}

console.log('Loop has started');

for(let i = 0; i <= 20; i++){
    console.log(i);
};

console.log('Loop has ended');

let colors = ['red', 'orange', 'yellow', 'green']

for (let i = 0; i < colors.length; i++){
    console.log(i, colors[i])
}

for(let i = 20; i >= 0; i-=2){
    console.log(i);
};



// for...in  -- used to loop over the properties of an object
let teams = {
    mlb: 'White Sox',
    nba: 'Bulls',
    nfl: 'Bears',
    nhl: 'Blackhawks'
}

for (let t in teams){
    console.log(t)
    console.log(teams[t])
};


// for...of  -- used to loop over the elements in an Array
let planets = ['Mercury', 'Mars', 'Earth', 'Venus', 'Jupiter']

for (let p of planets){
    console.log(p);
};

for (let p in planets){
    console.log(p);
    console.log(planets[p])
};


// While loop
// while (condition){code to execute while condition is true}

let num1 = 1;

while (num1 < 10){
    console.log(num1);
    num1++;
}



// Do While Loop.... Do the first portion AT LEAST ONCE
// If the while condition is still true, continue the while loop
// do {code to execute} while (condition)

let k = 1;

do {
    k *= 2;
    console.log(k);
} while (k < 10);

// do {
//     var firstName = prompt('What is your name?')
// } while (firstName !== 'Brian');