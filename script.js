document.addEventListener("DOMContentLoaded", () => {
  const test = document.createElement("div");
  test.innerHTML = `
    <h1>JS IS RUNNING</h1>
    <p>If you see this, JavaScript works.</p>
  `;
  document.body.appendChild(test);
});