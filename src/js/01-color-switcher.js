// console.log()
const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
    bodyEl: document.querySelector('body')
}

const { startBtn, stopBtn, bodyEl } = refs;
let intervalId = null;
stopBtn.disabled = true;
startBtn.addEventListener('click', onStartButtonClick);
stopBtn.addEventListener('click', onStopButtonClick)

function onStartButtonClick() {
    startBtn.disabled = true;
    stopBtn.disabled = false;

    intervalId = setInterval(() => {
        bodyEl.style.backgroundColor = getRandomHexColor()
    }, 1000);
} 
function onStopButtonClick() {
    stopBtn.disabled = true;
    startBtn.disabled = false;
    clearTimeout(intervalId)
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}