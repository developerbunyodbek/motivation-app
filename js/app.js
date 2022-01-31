// SELECTORS
const text = document.querySelector(".quote__text");
const author = document.querySelector(".quote__author");
const btn = document.querySelector("#btn");

// FUNCTION
function getQuote() {
  fetch("https://type.fit/api/quotes")
    .then((result) => result.json())
    .then((data) => {
      let index = Math.round(Math.random() * 1643);
      text.textContent = data[index].text;
      author.textContent = data[index].author;
    });

    setTimeout(() => {
      btn.classList.add("active");
    }, 2000);
}

const newQuote = (e) => {
  if (!e.target.matches("button.active")) return;
  getQuote();
  btn.classList.remove("active");
}

window.addEventListener("load", getQuote)
btn.addEventListener("click", newQuote)