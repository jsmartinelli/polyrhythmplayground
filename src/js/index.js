'use strict';

const button = document.getElementById('clickme');
const span = document.getElementById('reportme');

button.addEventListener('click', () => {
  span.innerText = 'A thing happened';
});

