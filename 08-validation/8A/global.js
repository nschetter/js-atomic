// 8A
// Password
// while loop

var password = "5"
var input = prompt("What's the password?")

while (input != password) {
  alert("Incorrect. Guess again.")
  input = prompt("What's the password?")
}

alert("You got it!")

// for loop

var input1 = prompt("What's the password?")

for (password; input1 != password; input1 = prompt("Incorrect. Guess again."));

alert("You got it!")