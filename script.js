/* ---------- DARK MODE ---------- */
const themeToggle = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});

/* ---------- TASK MANAGER ---------- */
const openBtn = document.getElementById("openTaskManager");
const closeBtn = document.getElementById("closeTaskManager");
const taskManager = document.getElementById("taskManager");
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

openBtn.addEventListener("click", () => {
  taskManager.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  taskManager.classList.add("hidden");
});

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✕";
    deleteBtn.onclick = () => {
      tasks.splice(index, 1);
      saveTasks();
    };

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

addTaskBtn.addEventListener("click", () => {
  if (taskInput.value.trim() === "") return;
  tasks.push(taskInput.value.trim());
  taskInput.value = "";
  saveTasks();
});

renderTasks();