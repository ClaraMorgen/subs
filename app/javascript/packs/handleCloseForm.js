

export default function closeForm(){
  //  First I append the form..
  // Second I listen on the close button once form is displayed
  const closeButton = document.getElementById('close-button');

  function handleClick(){
    if(formContainer.innerHTML !== "") {
     formContainer.innerHTML = "";
    buttonContainer.style.transform =  `translateX(0)`;
     subsList.style.flex = "0 0 100%";
     newSubButton.style.opacity = 1;
    formContainer.style.transform =  `translateX(0)`;
     // formsContainer.classList.remove('new-subs-active')
    }
  }
  closeButton.addEventListener('click', handleClick)
}
