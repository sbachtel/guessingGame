var els = [
  document.getElementById('answerOne'),
  document.getElementById('answerTwo'),
  document.getElementById('answerThree'),
  document.getElementById('answerFour'),
  document.getElementById('answerFive'),
];

var questions = [
  "Color is a turtle?",
  "Do you like playing games?",
  "I am thinking of a number between 1 and 20?",
  "What is americas pastime?",
  "What color is the state of Kansas Flag?",
];

var answers = [
  "green",
  "yes",
  12,
  "baseball",
  "blue",
];

var counter = 0;

function game(questionAsked, answerInput, element) {
  var guess = prompt(questionAsked).toLowerCase();
  if (isNaN(parseInt(guess)) === false) {
    guess = parseInt(guess);
  }
    if(isNaN(guess)){
      if(guess === answerInput){
          element.textContent = "Your answers is correct: " + guess;
          counter ++;
      } else if(guess === null) {
          element.textContent = "Please answer the question ";
      } else {
          element.textContent = "Your answer is wrong: " + guess;
      }
    } else {
      if(guess === answers[i]) {
        element.textContent = "You guessed the number correctly " + guess;
        counter++
      } else {
        element.textContent = "Your number guess is wrong."
      }

    }
}


for (var i = 0; i< questions.length; i++){
  game(questions[i], answers[i], els[i]);

}
document.getElementById('totalRight').textContent = "You got "+ counter + " right";
