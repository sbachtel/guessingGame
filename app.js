//Guessing Game, Three questions
//Quetions one
//Do you own an umbrella
//If yes, You are new to the Seattle area
//If No, Good real Seattleites don't use umbrallas
var counter = 0;
var umbrella = "yes";
var sunny = "yes";
var good = "yes";
var answer = "yes";


while(counter < 4){
var userInput = prompt("Do you own an umbrella?");
if(umbrella === userInput){
alert("You are new to the Seattle area");
console.log("true");
counter++;
}else{
alert("Good real Seattleites don't use umbrallas");
console.log("false");
}
//Question two
//Do you like Sunny weather?
//If yes, Hope we have a long summer
//If no, Winter is not that far away

var weather = prompt("Do you like sunny weather?");
if(sunny === weather){
alert("Hope we have a long summer.");
console.log("Winter is over");
counter++;
}else{
alert("Winter is not that far away.");
console.log("You are weird");
}
//question Three
//did I do this assignment right
//if yes, Good
//if no, Damn!

var assignment = prompt("Did I do this assignment right?");
if(good === assignment){
alert("Good");
console.log("true");
counter++;
}else {
alert("Damn!");
console.log("false");
}
//guess a number
//the number is 12
//if to low let them know
//if to high give them a hint
//if they get it right tell them good job.


/*var guessNumber = parseInt(prompt("I am thinking of a number"));
while(counter === 0){

if(guessNumber === 12){
 alert("Good job");
 console.log("You are great");
 counter++;
}else if(guessNumber > 12){
 parseInt(prompt("you are too high, guess again"));
 console.log("it's 1 less that 13")
}else{
 parseInt(prompt("you are too low, guess again"));
 console.log("the answer is 12");
}
}*/

//var counter = 0;
var guessNumber =  0;

while (guessNumber !=12){
guessNumber = parseInt(prompt("I'm thinking of a number"));
if(guessNumber === 12){
alert("Good job");
console.log("You are great");
counter++;
break;
}else if(guessNumber > 12){
console.log("you are too high, guess again")
console.log("it's 1 less that 13")
}else{
console.log("you are too low, guess again")
}
}

//Guessing Game

var playGame = prompt("Would you like to play a game?").toLowerCase();


if (playGame === answer){
alert("Let the games begin.");
console.log("You entered yes");
counter++;
} else {
alert("Maybe Later");
console.log("you entered no");
}
alert("you got " + counter + " right.");
break;
}
