//7B
// prompt user for start and end value
i = prompt("Start value?")
endValue = prompt("End value?")

// while loop
if (i > endValue) {
  while (i >= endValue){
    alert(i);
    i--;
  }
} else if (i < endValue) {
  while (i <= endValue){
    alert(i);
    i++;
  }
}