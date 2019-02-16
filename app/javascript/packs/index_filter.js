document.addEventListener('DOMContentLoaded', () => {
    const submitFilter = document.querySelector('#submit-filter');
    const inputTitle = document.querySelector('#filter-title');

    inputTitle.addEventListener('keyup', e => {
      submitFilter.click();
    })
  })
