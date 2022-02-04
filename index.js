import Card from './Card.js';

const allCardElements = document.querySelectorAll('[data-js="card"]');

allCardElements.forEach(cardElement => {
  Card(cardElement);
});
