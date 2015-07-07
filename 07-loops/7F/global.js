// 7F
// 7B WITH a for loop

var startNum = parseInt(prompt("What number should we start with?"));
var endNum = parseInt(prompt("Where should we end?"));
var i = parseInt(prompt("What increment would you like to count by?"));

if (startNum < endNum) {
  for (startNum; startNum <= endNum; startNum += i) {
    console.log(startNum);
  }
} else {
  for (startNum; startNum >= endNum; startNum -= i) {
    console.log(startNum);
  }
}