document.addEventListener('DOMContentLoaded', () => {
    const submitFilter = document.querySelector('#submit-filter');
    const inputTitle = document.querySelector('#filter-title');
    const inputCategory = document.querySelector('#filter-category');

    inputTitle.addEventListener('keyup', e => {
      submitFilter.click();
    });

    inputCategory.addEventListener('change', e => {
      submitFilter.click();
    })
  })
