// 8B

var myNum = 87;
var userNum = parseInt(prompt("I'm thinking of a number between 1 and 100. Guess what it is: "));

while (userNum != myNum) {
  userNum = prompt("That's not the number. Guess again: ")
}

alert("You guessed it. It was " + myNum)