const apostrophe = document.querySelector('.apostrophe');
document.getElementById("user_email").addEventListener("keyup", changeEventHandler)
document.getElementById("user_password").addEventListener("keyup", changeEventHandler)

function changeEventHandler(event) {
  apostrophe.classList.toggle("wiggle")
}
