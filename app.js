
var pElOne = document.getElementById('answerOne');
var pElTwo = document.getElementById('answerTwo');
var pElThree = document.getElementById('answerThree');

var els = [
  pElOne,
  pElTwo,
  pElThree,
];

var questions = [
  "What is your name?",
  "Would you like to play a game?",
  "What number am I thinking of?",
];

var answers = [
  "Steve",
  "Yes",
  "12",
];

function game(questionAsked, answerInput, element) {
  var guess = prompt(questionAsked);
  if(guess === answerInput){
      element.textContent = "Your answers is correct: " + guess;
  } else if(guess === null) {
      element.textContent = "Please answer the question ";
  } else {
      element.textContent = "Your answer is wrong: " + guess;
  }
}

for (var i = 0; i< questions.length; i++){
  game(questions[i], answers[i], els[i]);
}
