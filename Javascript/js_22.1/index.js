const form = document.getElementById("signup-form");
const formModal = document.getElementById("form-modal");
const confirmBtn = document.getElementById("confirm-btn");
const editBtn = document.getElementById("edit-btn");
const modalMessage = document.getElementById("modal-message");
const userNameInput = document.getElementById("user-name");
const userAgeInput = document.getElementById("user-age");
const userEmailInput = document.getElementById("user-email");
const nameInput = document.getElementById("name-input");
const ageInput = document.getElementById("age-input");
const emailInput = document.getElementById("email-input");

function createMessage(message) {
  const h2 = document.createElement("h2");
  h2.innerText = message;
  return h2;
}

function submitEventHandler(e) {
  console.log("hi");
  e.preventDefault();
  formModal.style.display = "block";
  nameInput.innerHTML = userNameInput.value;
  ageInput.innerHTML = userAgeInput.value;
  emailInput.innerHTML = userEmailInput.value;
}

form.addEventListener("submit", submitEventHandler);

confirmBtn.addEventListener("click", function (e) {
  const newMessage = createMessage(
    "Congratulations! You successfully sent this form"
  );
  modalMessage.appendChild(newMessage);
  setTimeout(function () {
    formModal.style.display = "none";
  }, 3000);
  setTimeout(function () {
    window.location.reload();
  }, 2000);
});

editBtn?.addEventListener("click", function (e) {
  formModal.style.display = "none";
});
