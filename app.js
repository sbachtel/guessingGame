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
          els[i].className = 'correct';
          els[i].innerHTML += '<img src = "images/checkCorrect.png"/>';
          counter ++;
      } else if(guess === null) {
          element.textContent = "Please answer the question ";
      } else {
          element.textContent = "Your answer is wrong: " + guess;
          els[i].className = 'incorrect';
          els[i].innerHTML += '<img src = "images/redWrong.png"/>';

      }
    } else {
      if(guess === answers[i]) {
        element.textContent = "You guessed the number correctly " + guess;
        els[i].className = 'correct';
        els[i].innerHTML += '<img src = "images/checkCorrect.png"/>';
        counter++
      } else {
        element.textContent = "Your number guess is wrong."
        els[i].className = 'incorrect';
        els[i].innerHTML += '<img src = "images/redWrong.png"/>';
      }
    }
}


for (var i = 0; i< questions.length; i++){
  game(questions[i], answers[i], els[i]);

}
document.getElementById('totalRight').textContent = "You got "+ counter + " right";
