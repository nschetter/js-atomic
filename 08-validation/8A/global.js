// 8A
// Password

var password = "5"
var input = prompt("What's the password?")

while (input != password) {
  alert("Incorrect. Guess again.")
  input = prompt("What's the password?")
}

alert("You got it!")