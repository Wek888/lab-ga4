'use strict';
// На следующих занятиях здесь можно добавить обработчики учебных событий.
// Google Tag устанавливается отдельно в head каждой HTML-страницы.
const form = document.querySelector('#contact-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    document.querySelector('#form-status').textContent =
      'Готово! Учебная форма проверена. Данные никуда не отправлены.';
    form.reset();
  });
}

