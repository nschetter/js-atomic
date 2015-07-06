//7C
//Implement the 99 Bottles of Beer on the Wall song using a loop. Make sure to account //for having 1 bottle (instead of "1 bottles"). Use a while loop.

// Establish variables
var botNum = 99;
var botString = "bottles";

// Start off the song before the loop
console.log(botNum + " " + botString + " of beer on the wall.");
console.log(botNum + " " + botString + " of beer!");
console.log("Take one down, pass it around.");

// while loop subtracting a bottle with an if statement that prepares for one bottle left
while (botNum > 1){
  if (botNum == 2) {
    botString = "bottle";
  }
  botNum--;
  console.log(botNum + " " + botString + " of beer on the wall.");
  console.log(botNum + " " + botString + " of beer!");
  console.log("Take one down, pass it around.");
}
  
console.log("No bottles left :(")