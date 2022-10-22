import { renderPage } from "../app.js";

export function Temp(quiz, ui) {
  let timeLeft = 30;

  let elem = document.getElementById("temporizador");
  
  elem.innerHTML = "Go!";

  let timerId = setInterval(countdown, 1000);

  let check = quiz.getQuestionIndex();

  function countdown() {
    if (check != quiz.getQuestionIndex()) {
      timeLeft = 30;
    } else if (timeLeft == -1) {

      for (let index = 0; index < quiz.getQuestionIndex().choices.length; index++) {
        if(quiz.getQuestionIndex().correctAnswer(quiz.getQuestionIndex().choices[index])){
        }
      }
      document.querySelectorAll("button")[posOk].style.background = "green";

      clearTimeout(timerId);
      
      setTimeout(function(){
      elem.style.color = "plum";
      elem.innerHTML = 30;
      quiz.questionIndex++;
      renderPage(quiz, ui);},1000);

    } else {
      elem.innerHTML = timeLeft;
      elem.title = timeLeft;
      timeLeft--;
      if (timeLeft < 3) {
        document.getElementById("temporizador").style.color = "red";
      }
    }
  }
}
