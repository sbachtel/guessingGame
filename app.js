
var pElOne = document.getElementById("answerOne");
var pElTwo = document.getElementById("answerTwo");
var pElThree = document.getElementById("answerThree");

var els = [
  pElOne,
  pElTwo,
  pElThree,
];

var questions = [
  "Do you own an umbrella?",
  "Do you like sunny weather?",
  "Did I do this assignment right?",
];

var answers = [
  "yes",
  "no",
  "yes",
];

var guess = "";
function game(question, answer, element){
  guess = prompt(questions[i]);
  if(guess === answers[i]){
    element.textContent = "Your correct answer is: " + guess;
  }else {
    element.textContent = "Your incorrect answer was: " + guess;
  }
}

for (var i = 0; i < questions.length; i++) {
  game(questions[i], answers[i], els[i]);
}
