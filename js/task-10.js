function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const amount = document.querySelector('#controls>input');
const boxes = document.querySelector('div#boxes');

btnCreate.addEventListener('click', () => {
  createBoxes(Number.parseInt(amount.value));
});
btnDestroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const boxCollection = [];
  for (let i = 0; i < amount; i++) {
    boxCollection.push(document.createElement('div'));
    boxCollection[i].style.width = `${30 + i * 10}px`;
    boxCollection[i].style.height = `${30 + i * 10}px`;
    boxCollection[i].style.backgroundColor = getRandomHexColor();
  }
  boxes.append(...boxCollection);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}
