const textbox = document.getElementById('textbox');

const letterDelay = 100;      // ms
const animationDelay = 1000;  // ms

const textboxString = 'Website in development.';

let firstPixelatedChar = textboxString.length + 1;
let lastPixelatedChar = textboxString.length + 1;

function setText() {
  textbox.innerHTML = `${textboxString.slice(0, firstPixelatedChar)}<span id="pixelated">${textboxString.slice(firstPixelatedChar, lastPixelatedChar + 1)}</span>${textboxString.slice(lastPixelatedChar + 1, textboxString.length)}`;
}

function assignText() {
  if (firstPixelatedChar === 0 && lastPixelatedChar === textboxString.length) {
    lastPixelatedChar++;
    setText();
    setTimeout(assignText, animationDelay);
  } else if (firstPixelatedChar === 0 && lastPixelatedChar < textboxString.length + 1) {
    lastPixelatedChar++;
    setText();
    setTimeout(assignText, letterDelay);
  } else if (firstPixelatedChar < textboxString.length && lastPixelatedChar === textboxString.length + 1) {
    firstPixelatedChar++;
    setText();
    setTimeout(assignText, letterDelay);
  } else if (firstPixelatedChar === textboxString.length) {
    firstPixelatedChar++;
    setText();
    setTimeout(assignText, animationDelay);
  } else if (firstPixelatedChar === textboxString.length + 1) {
    firstPixelatedChar = 0;
    lastPixelatedChar = 0;
    setText();
    setTimeout(assignText, letterDelay);
  }
}

setTimeout(assignText, letterDelay)