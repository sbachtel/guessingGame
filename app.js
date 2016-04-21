
var pElOne = document.getElementById("answerOne");
var pElTwo = document.getElementById("answerTwo");
var pElThree = document.getElementById("answerThree");
var pElFour = document.getElementById("answerFour");

var els = [
  pElOne,
  pElTwo,
  pElThree,
  pElFour,
];

var questions = [
  "Do you own an umbrella?",
  "Do you like sunny weather?",
  "Did I do this assignment right?",
  "I'm thinking of a number between 1 and 20",
];

var answers = [
  "yes",
  "no",
  "yes",
  12,
];

var guess = "";
function game(question, answer, element){
  guess = prompt(questions[i]).toLowerCase();
  if(guess === answers[i]){
    element.textContent = "Your correct answer is: " + guess;
  }else {
    element.textContent = "Your incorrect answer was: " + guess;
  }
}
while (guess !=12) {
  guess = parseInt(prompt(questions[3]));
    if(guess === 12){
      alert("Good job");
      break;
    }else if(guess > 12){
       prompt("you are too high, guess again");
    }else{
      prompt("you are too low, guess again");
    }
}

for (var i = 0; i < questions.length; i++) {
  game(questions[i], answers[i], els[i]);
}
