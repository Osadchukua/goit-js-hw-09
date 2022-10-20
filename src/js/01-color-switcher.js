const body = document.querySelectorAll('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

startBtn.addEventListener('click', setBodyBgColor);
stopBtn.addEventListener('click', stopBodyBgColor);

stopBtn.disabled = true;

function setBodyBgColor() {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopBodyBgColor() {
  startBtn.disabled = false;
  stopBtn.disabled = true;
    clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}