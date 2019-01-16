import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css" // Note this is important!

export default function datePicker() {
  const button = document.querySelector('.new-sub-button');
  function handleDatePicker(){
  const date = document.querySelector('.datepicker');
  flatpickr(".datepicker", {
    altInput: true,
    allowInput: true
  });
  }

  button.addEventListener('click', () => {
    setTimeout(handleDatePicker, 500);
  })
}
