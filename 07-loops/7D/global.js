//7D
//Implement FizzBuzz

var i = 1;
var startNum = parseInt(prompt("What whole number are we starting with?"))
var endNum = parseInt(prompt("What whole number are we ending with?"))

while (startNum < endNum) {
  if ((startNum % 15) == 0) {
    console.log("FizzBuzz")
  } else if ((startNum % 5) == 0) {
    console.log("Buzz")
  } else if ((startNum % 3) == 0) {
    console.log("Fizz")
  } else {
    console.log(startNum)
  }
  startNum += 1
}