// Password Program
// password variable established. guess will be the user's guess at what the password is.
var password = "5"
var guess = prompt("What's the password?")

// if statement checking the similarity between password and guess
if (guess == password) {
  alert("Good job!")
} else {
  alert("Sorry, the password is actually '5'")
};

// Driver's Ed Part 1
// prompt user for age
x = prompt("How old are you?")
age = parseInt(x)

// if statements regarding age
if (age >= 25) {
  alert("You can rent a car.")
};

if (age <= 24 && age >= 21) {
  alert("Please don't drink and drive.")
};

if (age <= 20 && age >= 16) {
  alert("You're eligible for a driver's license.")
};

if (age <= 15 && age >= 0) {
  alert("You can't drive yet, but you'll be able to in a few years.")
};

if (age < 0) {
  alert("You haven't been born yet.")
};

if (isNaN(age) == true) {
  alert("Sorry, but that's not a number")
}

// Driver's Ed part 2
// prompt user for age
y = prompt("How old are you??")
age2 = parseInt(y)

// single if statement regarding age
if (age2 >= 25) {
  alert("You can rent a car.")
} else if (age2 <= 24 && age2 >= 21) {
  alert("Please don't drink and drive.")
} else if (age2 <= 20 && age2 >= 16) {
  alert("You're eligible for a driver's license.")
} else if (age2 <= 15 && age2 >= 0) {
  alert("You can't drive yet, but you'll be able to in a few years.")
} else if (age2 < 0) {
  alert("You haven't been born yet.")
} else if (isNaN(age2) == true) {
  alert("Sorry, but that's not a number")
};

// Triangles
// prompt user for 3 sides of triangle
side1 = prompt("Give me the first side of the triangle")
side2 = prompt("Give me the second side of the triangle")
side3 = prompt("Give me the third side of the triangle")

// Parsing to integers
a = parseInt(side1)
b = parseInt(side2)
c = parseInt(side3)

// If statement determing triangle validity
if (isNaN(a) == true || isNaN(b) == true || isNaN(c) == true) {
  alert("One or more of the sides you gave me were not numbers")
} else if ( (a + b > c) && (b + c > a) && (a + c > b) ) {
  alert("This is a valid triangle")
} else {
  alert("Invalid triangle")
}