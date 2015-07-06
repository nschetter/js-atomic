// Variables
var one = prompt("Give me the first number");
var two = prompt("Give me the second number");
var three = prompt("Give me the third number");

// Parsing as integers
var a = parseInt(one);
var b = parseInt(two);
var c = parseInt(three);

// console.log outputs
console.log( a + " + " + b + " + " + c + " = " + (a + b + c) );
console.log( a + " - " + b + " - " + c + " = " + (a - b - c) );
console.log( a + " * " + b + " * " + c + " = " + (a * b * c) );
console.log( a + " / " + b + " = " + (a / b) );
console.log(a + " incremented by 1 is:");
a++;
console.log(a)
console.log(b + " decremented by 1 is:")
b--;
console.log(b)

// Parsing string and integer combos
var errorNum = parseInt("Error 404");
var numError = parseInt("404 Error");
var mix = parseInt("4error4error")
var commaDollar = parseInt("34,$43")
console.log(errorNum);
console.log(numError);
console.log(mix);
console.log(commaDollar);

// Math Object
var pi = Math.PI;
var squareRoot = Math.sqrt(121);
var absoluteValue = Math.abs(-32);
var powerOf = Math.pow(2,2);
var biggestNum = Math.max(1,2,3,4,900,5,6);
var smallestNum = Math.min(25,66,67,68,100,1);
var from0to1 = Math.random();
console.log("The value of pi is " + pi);
console.log("The square root of 121 is " + squareRoot);
console.log("The absolute value of -32 is " + absoluteValue);
console.log("2 to the power of 2 is " + powerOf);
console.log("The biggest number in this group is " + biggestNum);
console.log("The smallest number in this group is " + smallestNum);
console.log("A number between 0 and 1 is " + from0to1);
