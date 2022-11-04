// Cuerpo o principal de la trivia
import { questions } from "./data/questions.js";
import { getJugadores } from "./models/Jugadores.js";
import { Quiz } from "./models/Quiz.js";
import { Temp } from "./models/Temporizador.js";
import { UI } from "./models/Ui.js";

export const ui = new UI();

/**
 *
 * @param {Quiz} quiz 
 * @param {UI} ui 
 */
export function renderPage(quiz, ui) {
  if (quiz.isEnded()) {
    ui.showScores(quiz.score);
  } else {
    Temp(quiz, ui);
    
    document.getElementById("temporizador").style.display = "contents";
    ui.showQuestion(quiz.getQuestionIndex().text);
    ui.showChoices(quiz.getQuestionIndex().choices, (currentChoice) => {
      quiz.guess(currentChoice);
      setTimeout(function () {
        renderPage(quiz, ui);
      }, 1000);
    });
    ui.showProgress(quiz.questionIndex + 1, quiz.questions.length); 
  }
}

export function startQuiz() {
  const quiz = new Quiz(questions); 
  ui.showQuiz();
  renderPage(quiz, ui);
}

function main() {
  getJugadores();
  ui.showHome();
}

main();


function consultarPeliculasSW() {
  const url = "https://swapi.dev/api/films";
  fetch(url)
      .then( response => response.json() )
      .then( result => console.log(result));
}

consultarPeliculasSW()