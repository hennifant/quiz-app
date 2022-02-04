console.clear();

// Filter

const filterForm = document.querySelector('[data-js=filter-form]');

let currentFilter = 'all';

filterForm.addEventListener('change', () => {
  currentFilter = filterForm.elements['tag-filter'].value;
  renderCards();
});

// Create cards

const cardsContainer = document.querySelector('[data-js=cards]');
const form = document.querySelector('[data-js=form]');

let cards = [
  {
    question: 'What is git?',
    answer: 'Git is a tool to work with code.',
    tags: ['html', 'basic', 'web'],
  },
  {
    question: 'What is html?',
    answer: 'HTML is Hypertext Markup Language. Google it.',
    tags: ['css', 'basic', 'web'],
  },
  {
    question: 'What is css?',
    answer: 'Cascading style sheets. Google it.',
    tags: ['git', 'shell'],
  },
];

renderCards();

const allTags = [];

cards.forEach(({ tags }) => {
  tags.forEach(tag => {
    if (!allTags.includes(tag)) {
      allTags.push(tag);
    }
  });
});
console.log(allTags);

form.addEventListener('submit', event => {
  event.preventDefault(); // verhindert ein Neuladen der Seite bei submit

  const questionElement = form.elements.question;
  const answerElement = form.elements.answer;
  const tagsElement = form.elements.tags;

  const newCard = {
    question: questionElement.value,
    answer: answerElement.value,
    tags: tagsElement.value
      .split(',') // trennt die Tags auf beim Komma und macht Strings daraus
      .map(tag => tag.trim()) // erstellt ein Array mit diesen Strings
      .filter(tag => tag.length), // ???
  };
  const filterFieldset = document.querySelector('[data-js="filterFieldset"]');
  console.log(form.fieldset);

  cards = [newCard, ...cards]; // fügt newCard dem leeren Array cards hinzu
  console.log(cards);
  renderCards(); // erstellt aus dem Array HTML Elemente

  form.reset(); // löscht den Inhalt von Form
  questionElement.focus(); // Lenkt den Fokus wieder auf die textarea Question
});

function renderCards() {
  cardsContainer.innerHTML = '';

  cards
    .filter(
      card => card.tags.includes(currentFilter) || currentFilter === 'all'
    )
    .forEach(card => {
      const cardElement = document.createElement('li');
      cardElement.className = 'card';
      cardElement.innerHTML = `
      <p>${card.question}</p>
      <button 
        class="card__bookmark${
          card.isBookmarked ? ' card__bookmark--active' : ''
        }" 
        data-js="bookmark">
      </button>
      <button data-js="card-button">Toggle answer</button>
      <p data-js="answer" hidden>${card.answer}</p>
      <ul role="list" class="card__tag-list">
        ${card.tags.map(tag => `<li class="card__tag">${tag}</li>`).join('')}
      </ul>
    `;
      cardsContainer.append(cardElement);

      // Answer Button
      const answerButton = cardElement.querySelector('[data-js=card-button]');
      const answerElement = cardElement.querySelector('[data-js=answer]');

      answerButton.addEventListener('click', () => {
        answerElement.toggleAttribute('hidden');
      });

      // Bookmark
      const bookmarkElement = cardElement.querySelector('[data-js=bookmark]');
      bookmarkElement.addEventListener('click', () => {
        card.isBookmarked = !card.isBookmarked;
        bookmarkElement.classList.toggle('card__bookmark--active');
      });
    });
}
