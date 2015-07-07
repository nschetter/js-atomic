// 7G
// 7C WITH a for loop

var bottles;

for (bottles = 99; bottles > 1; bottles -= 1) {
  console.log(bottles + " bottles of beer on the wall, " + bottles + " bottles of beer.  Take one down, pass it around, " + (bottles - 1) + " bottles of beer on the wall.");
}

if (bottles == 1) {
  console.log (bottles + " bottle of beer on the wall, " + bottles + " bottle of beer. Take one down, pass it around, no more bottles of beer on the wall.");
}