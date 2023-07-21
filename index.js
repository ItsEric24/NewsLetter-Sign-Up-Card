const submitBtn = document.querySelector(".email-btn");
let card1 = document.querySelector(".main");
let card2 = document.querySelector(".main-2");
let emailInput = document.getElementById("email");
let emailText = document.querySelector(".email-text");
let dismissBtn = document.querySelector(".success-btn");
let errorText = document.querySelector(".error-text");
let footer = document.querySelector(".attribution");

function submit() {
  if (emailInput.value !== "") {
    card1.classList.add("hide");
    card2.classList.remove("hide");
    footer.classList.add("hide");
    emailText.innerHTML = emailInput.value;
  } else {
    errorText.innerHTML = "Please provide an email kindly!";
  }
}

function handleChange(){
    errorText.innerHTML = "";
}


function dismiss() {
  card2.classList.add("hide");
  card1.classList.remove("hide");
  footer.classList.remove("hide");
  emailInput.value = "";
  errorText.innerHTML = "";
}

submitBtn.addEventListener("click", submit);
dismissBtn.addEventListener("click", dismiss);
emailInput.addEventListener("click", handleChange);
