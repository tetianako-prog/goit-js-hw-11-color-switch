const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  start: document.querySelector('[data-action="start"]'),
  stop: document.querySelector('[data-action="stop"]'),
};

refs.start.addEventListener('click', start);
refs.stop.addEventListener('click', stop);

let intervalId = null;

function start() {
  refs.start.disabled = true;
  intervalId = setInterval(changeBodyBackground, 1000);
}

function stop() {
  clearInterval(intervalId);
  refs.start.disabled = false;
}

function changeBodyBackground() {
  document.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
