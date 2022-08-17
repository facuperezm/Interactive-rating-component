const mainComponent = document.querySelector(".main-component");
const thankyouComponent = document.querySelector(".thank-you");

const submitButton = document.getElementById("submit-btn");
const rate = document.getElementById("rate");
const numbers = document.querySelectorAll(".btn");

submitButton.addEventListener("click", () => {
  thankyouComponent.classList.remove("hidden");
  mainComponent.style.display = "none";
});

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    // console.log(number.innerHTML);
    rate.innerHTML = number.innerHTML;
  });
});
