export const data = [
  {
    question: "De que planeta son los Wookies?",
    choices: ["Oba dia", "kashyyyk", "Alderan"],
    answer: "kashyyyk",
  },

  {
    question: "En que planeta Mace Windu mata a Jango Fett?",
    choices: ["Geonosis", "Tatooine", "Kessel"],
    answer: "Geonosis",
  },

  {
    question: "De que maestro Jedi fue aprendiz Dooku?",
    choices: ["Kit Fisto", "Ki-Adi-Mundi", "Yoda"],
    answer: "Yoda",
  },

  {
    question: "Como se llama la nave de Hera Syndulla?",
    choices: ["Espectro", "Halcon", "Fantasma"],
    answer: "Fantasma",
  },

  {
    question: "Como se llamaba la maestra de Kanan Jarrus?",
    choices: [
      "Obi-Wan Kenobi",
      "Depa Billaba",
      "Mace Windu",
    ],
    answer: "Depa Billaba",
  },

  {
    question: "De que planeta es la canciller Mon Mothma?",
    choices: ["Alderan", "tatooine", "Chandrila"],
    answer: "Chandrila",
  },

  {
    question: "Cual es la raza de los habitantes de Endor?",
    choices: ["Ewoks", "Yuzzums", "Todas son correctas"],
    answer: "Todas son correctas",
  },

  {
    question: "Que aprendiz tuvo Darth Vader en Legends?",
    choices: ["Lumiya", "Ashoka", "Starkiller"],
    answer: "Starkiller",
  },

  {
    question: "Cual es el planeta natal de Shiv Palpatine?",
    choices: ["Geonosis", "Chandrilla", "Naboo"],
    answer: "Naboo",
  },

  {
    question: "En Legends, como se llama la esposa de Luke Skywalker?",
    choices: ["Leia", "Maz Kanata", "Mara Jade"],
    answer: "Mara Jade",
  },

  {
    question: "En Legends, cuantos hijos tiene Luke Skywalker?",
    choices: ["2", "1", "3"],
    answer: "1",
  },


  {
    question: "Con que mineral son construidos los sables laser?",
    choices: ["Kyberita", "Kelerio", "Kyber"],
    answer: "Kyber",
  },

  {
    question: "Que pide Jango Fett a los Kaminoanos como recompensa?",
    choices: [
      "Beskar", "Clon no modificado", "Jet pack"],
    answer:
      "Clon no modificado",
  },

  {
    question: "Que personaje fue la mano derecha del supremo Canciller Palpatine?",
    choices: ["Finis Valorum", "Mas Amedda", "Sei Taria"],
    answer: "Mas Amedda",
  },

  {
    question: "Cual es el planeta natal de Ahsoka Tano?",
    choices: ["Sullust", "Crait", "Shili"],
    answer: "Shili",
  },

  {
    question: "El capitan de la legion 501 fue:",
    choices: [
      "Cody",
      "Cincos",
      "Rex",
    ],
    answer: "Rex",
  },

  {
    question: "El masestro de Ezra Bridger fue:",
    choices: ["Luminara Unduli", "Kanan Jarrus", "Ki-Adi-Mundi"],
    answer: "Kanan Jarrus",
  },

  {
    question: "El 'Elegido' segun la profesia es:",
    choices: ["Sipho Diaz", "Anakin Skywalker", "Caleb Dume"],
    answer: "Anakin Skywalker",
  },


  {
    question: "El que invento la regla de dos fue:",
    choices: ["Darht Nihilus", "Darth revan", "Darth Bane"],
    answer: "Darth Bane",
  },
  
];

export function fisherYatesShuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

fisherYatesShuffle(data);
