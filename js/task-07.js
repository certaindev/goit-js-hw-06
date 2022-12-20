const sizeControl = document.querySelector('input#font-size-control');
const text = document.querySelector('span#text');

sizeControl.addEventListener('input', e => {
  text.style.fontSize = `${e.currentTarget.value}px`;
});
