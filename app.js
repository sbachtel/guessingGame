
var els = [
  document.getElementById('answerOne'),
  document.getElementById('answerTwo'),
  document.getElementById('answerThree'),
  document.getElementById('answerFour'),
  document.getElementById('answerFive'),
];

var questions = [
  "What is your name?",
  "Would you like to play a game?",
  "What number am I thinking of?",
  "What's your favorite sport?",
  "What's my favorite color?",
];

var answers = [
  "Steve",
  "Yes",
  12,
  "Baseball",
  "Blue",
];

function game(questionAsked, answerInput, element) {
  var guess = prompt(questionAsked);
  if (isNaN(parseInt(guess)) === false) {
    guess = parseInt(guess);
  }
    if(isNaN(guess)){
      if(guess === answerInput){
          element.textContent = "Your answers is correct: " + guess;
      } else if(guess === null) {
          element.textContent = "Please answer the question ";
      } else {
          element.textContent = "Your answer is wrong: " + guess;
      }
    } else {
      if(guess === answers[i]) {
        element.textContent = "You guessed the number correctly." + guess;
      } else {
        element.textContent = "Your number guess is wrong."
      }
    }
}

for (var i = 0; i< questions.length; i++){
  game(questions[i], answers[i], els[i]);
}
