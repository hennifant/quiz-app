const textareaQuestion = document.querySelector('[data-js="textareaQuestion"]');
const textareaAnswer = document.querySelector('[data-js="textareaAnswer"]');
const outputQuestion = document.querySelector('[data-js="outputQuestion"]');
const outputAnswer = document.querySelector('[data-js="outputAnswer"]');

textareaQuestion.addEventListener('input', () => {
  outputQuestion.value = `${
    200 - textareaQuestion.value.length
  } characters remaining`;
});

textareaAnswer.addEventListener('input', () => {
  outputAnswer.value = `${
    200 - textareaAnswer.value.length
  } characters remaining`;
});
