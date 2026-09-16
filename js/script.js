'use strict';
// На следующих занятиях здесь можно добавить обработчики учебных событий.
// Google Tag устанавливается отдельно в head каждой HTML-страницы.
const leadForm = document.querySelector('#lead-form');
if (leadForm) {
  leadForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (typeof gtag === 'function') {
      gtag('event', 'generate_lead', {
        lead_source: 'contact_form'
      });
    }
    document.querySelector('#form-status').textContent =
      'Учебная форма проверена. Данные не отправлены.';
  });
}