export class Question {
  /**
   *
   * @param {string} text esto es el texto de la pregunta
   * @param {string[]} choices estas son las opciones de la pregunta
   * @param {string} answer esta es la respuesta a la pregunta
   */

  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }

  /**
   * 
   * @param {string} choice texto para adivinar
   * @returns {boolean} retornar true si la rpta es correcta
   */
  correctAnswer(choice) {
    return choice === this.answer;
  }
}


