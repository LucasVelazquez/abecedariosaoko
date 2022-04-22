const audios = [];
let currentAudio = null;
let advice = new Audio("./src/audio/consejo.ogg");
const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let currentColor = 1;
const colors = ["red", "blue", "green"];

for (let i = 0; i < letters.length; i++) {
  audios[letters[i]] = new Audio(`./src/audio/${letters[i]}.ogg`);
}

function pageLoaded() {
  document.getElementById("loading").style.display = "none";
  const container = document.getElementById("letters-container");

  letters.map((letter, idx) => {
    let btn = document.createElement("button");
    btn.innerHTML = `${letter.toUpperCase()}`;
    btn.onclick = () => playSound(letter);
    btn.className = `letter ${colors[idx % 3]}`;
    container.append(btn);
  });
}

function playSound(letter) {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  currentAudio = audios[letter];
  audios[letter].play();
}

function playAdvice() {
  advice.pause();
  advice.currentTime = 0;
  advice.play();
}

window.addEventListener("load", pageLoaded);

document.onkeydown = function (evt) {
  evt = evt || window.event;
  let keyCode = evt.key.toUpperCase().charCodeAt(0);
  if (keyCode < 65 || keyCode > 90 || keyCode == 75 || keyCode == 76 || keyCode == 76) return false;
  playSound(evt.key.toLowerCase());
};
