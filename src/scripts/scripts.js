const denyButton = document.querySelector('.deny');

function randomizePosition(e) {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const x = gennerateRandomNumber(0, windowWidth);
  const y = gennerateRandomNumber(0, windowHeight);

  e.style.position = 'absolute';
  e.style.left = `${x}px`;
  e.style.top = `${y}px`;
}

function redirectUser() {
  window.location.href = 'https://www.youtube.com/watch?v=BBJa32lCaaY';
}

function gennerateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
