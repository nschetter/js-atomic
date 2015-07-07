// 7H
// 7D WITH for loop
// FizzBuzz

var startNum = parseInt(prompt("What number should we start with?"));
var endNum = parseInt(prompt("Where should we end?"));

if (startNum < endNum) {
  for (startNum; startNum <= endNum; startNum += 1) {
    if (startNum % 3 == 0 && startNum % 5 == 0) {
      console.log("FizzBuzz");
    } else if (startNum % 5 == 0) {
      console.log("Buzz");
    } else if (startNum % 3 == 0) {
      console.log("Fizz");
    } else {
      console.log(startNum);
    }
  }
} else {
  for (startNum; startNum >= endNum; startNum -= 1) {
    if (startNum % 3 == 0 && startNum % 5 == 0) {
      console.log("FizzBuzz");
    } else if (startNum % 5 == 0) {
      console.log("Buzz");
    } else if (startNum % 3 == 0) {
      console.log("Fizz");
    } else {
      console.log(startNum);
    }
  }
}