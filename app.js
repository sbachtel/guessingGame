
var counter = 0;
var umbrella = "yes";
var sunny = "yes";
var good = "yes";
var answer = "yes";
var guessNumber =  0;

while(counter < 4){
  var userInput = prompt("Do you own an umbrella?").toLowerCase();
  if(umbrella === userInput){
    alert("You are new to the Seattle area");
    counter++;
  }else{
    alert("Good real Seattleites don't use umbrallas");
}

var weather = prompt("Do you like sunny weather?").toLowerCase();
  if(sunny === weather){
    alert("Hope we have a long summer.");
    counter++;
  }else{
    alert("Winter is not that far away.");
}

var assignment = prompt("Did I do this assignment right?").toLowerCase();
  if(good === assignment){
    alert("Good");
    counter++;
  }else {
    alert("Damn!");
}

while (guessNumber !=12){
  guessNumber = parseInt(prompt("I'm thinking of a number"));
    if(guessNumber === 12){
      alert("Good job");
      counter++;
      break;
    }else if(guessNumber > 12){
      alert("you are too high, guess again")
    }else{
      alert("you are too low, guess again")
    }
}

var playGame = prompt("Did you like playing my game?").toLowerCase();

if (playGame === answer){
  alert("Thanks.");
  counter++;
} else {
  alert("Oh, you hurt my feelings.");
}
  alert("you got " + counter + " right.");
  break;
}
