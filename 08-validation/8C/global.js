// 8C

var number = parseInt(prompt("Choose a number between 1 and 8: "));

if (isNaN(number)) {
  alert("A number, please")
} else {
  while (number >= 1 && number <= 8) {
    number = prompt("Nice! Keep giving a number between 1 and 8 until you want to break the loop.")
  }
}

alert("Aw, you broke the loop!")