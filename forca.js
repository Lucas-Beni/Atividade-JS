const words = [
    { word: "abacaxi", clue: "Fruta tropical" },
    { word: "elefante", clue: "Animal de grande porte com tromba longa" },
    { word: "computador", clue: "Dispositivo eletrônico" },
    { word: "girafa", clue: "Animal alto, com pescoço longo" },
    { word: "chocolate", clue: "Doce feito de cacau" },
    { word: "piano", clue: "Instrumento musical com teclas" },
    { word: "tigre", clue: "Felino selvagem" },
    { word: "esmeralda", clue: "Tipo de pedra preciosa" },
    { word: "navio", clue: "Embarcação no mar" },
    { word: "telefone", clue: "Dispositivo de comunicação" },
    { word: "floresta", clue: "Área com muitas árvores" },
    { word: "quadrado", clue: "Figura geométrica de quatro lados" },
    { word: "foguete", clue: "Veículo espacial" },
    { word: "sorvete", clue: "Doce gelado" },
    { word: "bicicleta", clue: "Veículo de duas rodas" },
    { word: "avião", clue: "Meio de transporte aéreo" },
    { word: "macaco", clue: "Primate arbóreo" },
    { word: "raios", clue: "Descargas elétricas na atmosfera" },
    { word: "montanha", clue: "Elevação natural da terra" },
    { word: "vela", clue: "Objeto para iluminação" },
  ];
  
  export default function getWord() {
    const index = Math.floor(Math.random() * words.length);
    return words[index];
  }

const contentBtns = document.querySelector(".btns");
const contentGuessWord = document.querySelector(".guess-word");
const img = document.querySelector("img");
const contentClue = document.querySelector(".clue");
const btnNew = document.querySelector(".new");
btnNew.onclick = () => init();
let indexImg;

init();

function init() {
  indexImg = 1;
  img.src = `img/forca/img1.png`;

  generateGuessSection();
  generateButtons();
}

function generateGuessSection() {
  contentGuessWord.textContent = "";

  const { word, clue } = getWord();
  const wordWithoutAccent = word
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  Array.from(wordWithoutAccent).forEach((letter) => {
    const span = document.createElement("span");

    span.textContent = "_";
    span.setAttribute("word", letter.toUpperCase());
    contentGuessWord.appendChild(span);
  });

  contentClue.textContent = `Dica: ${clue}`;
}

function wrongAnswer() {
  indexImg++;
  img.src = `img/forca/img${indexImg}.png`;

  if (indexImg === 7) {
    setTimeout(() => {
      alert("Perdeu :/");
      init();
    }, 100);
  }
}

function verifyLetter(letter) {
  const arr = document.querySelectorAll(`[word="${letter}"]`);

  if (!arr.length) wrongAnswer();

  arr.forEach((e) => {
    e.textContent = letter;
  });

  const spans = document.querySelectorAll(`.guess-word span`);
  const won = !Array.from(spans).find((span) => span.textContent === "_");

  if (won) {
    setTimeout(() => {
      alert("Ganhou!!!");
      init();
    }, 100);
  }
}

function generateButtons() {
  contentBtns.textContent = "";

  for (let i = 97; i < 123; i++) {
    const btn = document.createElement("button");
    const letter = String.fromCharCode(i).toUpperCase();
    btn.textContent = letter;

    btn.onclick = () => {
      btn.disabled = true;
      btn.style.backgroundColor = "gray";
      verifyLetter(letter);
    };

    contentBtns.appendChild(btn);
  }
}