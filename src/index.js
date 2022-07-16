import about from './about.js';
import menu from './menu.js';
import contact from './contact.js';
import './style.css';

about();

document.getElementById('tab-1').addEventListener('click', () => {
  removeContent();
  about();
});

document.getElementById('tab-2').addEventListener('click', () => {
  removeContent();
  menu();
});

document.getElementById('tab-3').addEventListener('click', () => {
  removeContent();
  contact();
});

function removeContent() {
  const main = document.querySelector('.main');
  const content = main.lastElementChild;
  content.remove();
}