const dateSpanElement = document.querySelector("#date");

const now = new Date();

dateSpanElement.textContent = now.toISOString().slice(0, 10);
