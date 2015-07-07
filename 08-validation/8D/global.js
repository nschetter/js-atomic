// 8D

// Triangles
var validity = false

while (validity == false) {
  var a = parseInt(prompt("Give me the first side of the triangle"));
  var b = parseInt(prompt("Give me the second side of the triangle"));
  var c = parseInt(prompt("Give me the third side of the triangle"));
  if (isNaN(a) == true || isNaN(b) == true || isNaN(c) == true) {
    alert("One or more of the sides you gave me were not numbers. Let's try again.")
    validity = false
  } else if ( (a + b > c) && (b + c > a) && (a + c > b) ) {
    alert("This is a valid triangle")
    validity = true
  } else {
    alert("Invalid triangle. Let's try again.")
    validity = false
  }
}