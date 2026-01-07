const button = document.getElementById("actionBtn");
const output = document.getElementById("output");

button.addEventListener("click", () => {
  output.textContent = "JavaScript is connected and responding.";
});