import { Question } from "./Question.js";

export class Quiz {
  questionIndex = 0;
  score = 0;

  /**
   *
   * @param {Question[]} questions
   */
  constructor(questions) {
    this.questions = questions;
  }

  /**
   *
   * @returns {Question} la pregunta encontrada
   */
  getQuestionIndex() {
    return this.questions[this.questionIndex];
  }

  isEnded() {
    return this.questions.length == this.questionIndex;
  }

  /**
   *
   * @param {string} choice texto sin relevancia
   */
  guess(choice) {
    let pos = this.getQuestionIndex().choices.indexOf(choice);

    if (this.getQuestionIndex().correctAnswer(choice)) {
      let points = document.getElementById("temporizador").title;

      if (document.getElementById("temporizador").textContent == "Go!") {
        this.score += 30;
      } else {
        this.score += parseInt(points);
      }
    
      document.querySelectorAll("button")[pos].style.background = "green";

    } else {
      document.querySelectorAll("button")[pos].style.background = "red";

      for (let index = 0; index < this.getQuestionIndex().choices.length; index++) {
        if(this.getQuestionIndex().correctAnswer(this.getQuestionIndex().choices[index])){
        var posCorrectAnswer = index;
        }
      }

      document.querySelectorAll("button")[posCorrectAnswer].style.background = "green";
      
    }

    this.questionIndex++;
  }
}
