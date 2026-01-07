const button = document.getElementById("actionBtn");
const title = document.getElementById("title");
const text = document.getElementById("text");

let active = false;

button.addEventListener("click", () => {
  active = !active;

  if (active) {
    document.body.style.background = "#d4edda";
    title.textContent = "JavaScript is Working ✅";
    text.textContent = "Everything is connected correctly.";
    button.textContent = "Reset";
  } else {
    document.body.style.background = "#f2f2f2";
    title.textContent = "It Works 🎉";
    text.textContent = "Tap the button to prove JavaScript is alive.";
    button.textContent = "Tap Me";
  }
});