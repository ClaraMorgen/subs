let closeButton = document.getElementById('close-button');
let newSubsContainer = document.getElementById('new-subs');

closeButton.addEventListener("click", (event) => {
  console.log(event);
  newSubsContainer.innerHTML = ''
  // console.log(event.currentTarget);
});
