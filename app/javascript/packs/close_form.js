const closeForm = document.getElementById('close-button');
let newSubsContainer = document.getElementById('new-subs');

closeForm.addEventListener("click", (event) => {
  console.log(event);
  newSubsContainer.innerHTML = ''
  // console.log(event.currentTarget);
});
