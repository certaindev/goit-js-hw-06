function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const btn = document.querySelector('button.change-color');
const span = document.querySelector('span.color');

btn.addEventListener('click', handleBtn);

function handleBtn(e) {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  span.textContent = color;
}
