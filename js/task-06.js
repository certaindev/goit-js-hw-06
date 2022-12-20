const input = document.querySelector('input[data-length]');

input.addEventListener('blur', handleInput);

function handleInput(e) {
  if (e.currentTarget.value.length.toString() === e.currentTarget.dataset.length) {
    e.currentTarget.classList.add('valid');
    e.currentTarget.classList.remove('invalid');
  } else {
    e.currentTarget.classList.add('invalid');
    e.currentTarget.classList.remove('valid');
  }
}