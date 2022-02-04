export default function Card(cardElement) {
  const bookmarkButton = cardElement.querySelector(
    '[data-js="bookmark-button"]'
  );
  const bookmarkIcon = cardElement.querySelector('[data-js="bookmark"]');

  bookmarkButton.addEventListener('click', () => {
    bookmarkIcon.classList.toggle('bookmark__saved');
  });

  // Button for answers

  const answerbutton = cardElement.querySelector('[data-js="answerbutton"]');
  const txtAnswer = cardElement.querySelector('[data-js="answertext"]');

  answerbutton?.addEventListener('click', () => {
    answerbutton.textContent =
      answerbutton.textContent === 'Antwort anzeigen'
        ? 'Antwort verstecken'
        : 'Antwort anzeigen';
    txtAnswer.classList.toggle('card__hide');
  });
}
