import { addPlayer, showRankings } from "./Jugadores.js";
import { startQuiz } from "../app.js";
import { fisherYatesShuffle } from "../data/data.js";

export class UI {
  constructor() {}

  /**
   *
   * @param {string} text preguntas a renderizar
   */
  showQuestion(text) {
    const questionTitle = document.getElementById("question");
    questionTitle.innerText = text;
  }

  /**
   *
   * @param {string[]} choices las elecciones de las preguntas
   */
  showChoices(choices, callback) {
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";

     fisherYatesShuffle(choices);  

    for (let i = 0; i < choices.length; i++) {
      const button = document.createElement("button");
      button.innerText = choices[i];
      button.className = "button";
      button.id = "btn" + i;
      button.addEventListener("click", () => callback(choices[i])); 

      choicesContainer.append(button);
    }
  }

  /**
   *
   * @param {number} score puntaje total
   */
  showScores(score) {
    //
    const label = document.createElement("label");
    label.for = "formNombre";
    const input = document.createElement("input");
    input.type = "text";
    input.id = "formNombre";
    input.className = "button";
    input.maxLength = "10";
    input.placeholder = "Tu nombre:";

    const addButton = document.createElement("button");
    addButton.className = "button";
    addButton.id = "anadirButton";
    addButton.innerHTML = "Guardar";
    addButton.type = "submit";
    addButton.onclick = function () {
      var valorInput = document.getElementById("formNombre").value;
      addPlayer(valorInput, score);
      showRankings();
    };

    const volverButton = document.createElement("button");
    volverButton.className = "button";
    volverButton.innerHTML = "Inicio";
    volverButton.type = "submit";
    volverButton.id = "btnVolver";
    volverButton.onclick = function () {
      location.reload();
    };

    const totalPuntos = document.createElement("h1");
    totalPuntos.id = "totalPuntos";
    totalPuntos.className = "estiloPuntos";
    totalPuntos.innerHTML = `PUNTOS: `;

    const Puntos = document.createElement("h1");
    Puntos.id = "Puntos";
    Puntos.className = "estiloPuntos";
    Puntos.innerHTML = `${score}`;

    const infoFinal = document.createElement("h2");
    infoFinal.className = "estiloPuntos";
    if (score < 50) {
      infoFinal.innerHTML = "¡UUUUUH!";
    } else if (score > 50 && score < 100) {
      infoFinal.innerHTML = "¡MUY BIEN!";
    } else if (score > 100 && score < 200) {
      infoFinal.innerHTML = "!PERFECTO!";
    } else if (score > 200 && score < 290) {
      infoFinal.innerHTML = "¡EXPERTO!";
    } else if (score > 290) {
      infoFinal.innerHTML = "¡MASTER!";
    }

    const element = document.getElementById("quiz");
    element.innerHTML = "";
    element.append(totalPuntos);
    element.append(Puntos);
    element.append(infoFinal);
    element.append(input);
    element.append(addButton);
    element.append(volverButton);
  }

  /**
   *
   * @param {number} currentIndex el indice actual de la trivia
   * @param {number} total el total de preguntas
   */
  showProgress(currentIndex, total) {
    const element = document.getElementById("progress");
    element.innerHTML = `${currentIndex} de ${total}`;
  }

  showHome() {

    const addLogo = document.createElement("img");
    addLogo.src = "./img/Star-Wars-Logo.png";
    addLogo.id = "logo-starWars";

    const jugarButton = document.createElement("button");
    jugarButton.id = "jugarButton";
    jugarButton.className = "button";
    jugarButton.textContent = "Jugar";
    jugarButton.type = "submit";
    jugarButton.onclick = startQuiz;

    const rankingButton = document.createElement("button");
    rankingButton.id = "rankingButton";
    rankingButton.className = "button";
    rankingButton.textContent = "Ranking";
    rankingButton.type = "submit";
    rankingButton.onclick = function () {
      showRankings();
    };

    const barra = document.createElement("hr");
    barra.id = "barra";
    barra.style.display = "none";

    const element = document.getElementById("quiz");
    element.append(addLogo);
    element.append(barra);
    element.append(jugarButton);
    element.append(rankingButton);
  }

  showQuiz() {
    const element = document.getElementById("quiz");

    element.innerHTML = "";

    const tem = document.createElement("p");
    tem.id = "temporizador";
    element.append(tem);

    const quest = document.createElement("h2");
    quest.id = "question";
    element.append(quest);

    const prog = document.createElement("p");
    prog.id = "progress";
    element.append(prog);

    const choi = document.createElement("div");
    choi.id = "choices";
    element.append(choi);
  }
}
