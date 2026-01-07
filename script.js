// DARK MODE
const toggleTheme = document.getElementById("toggle-theme");
toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// DEMO TOGGLE
const openDemo = document.getElementById("open-demo");
const closeDemo = document.getElementById("close-demo");
const demo = document.getElementById("demo");

openDemo.addEventListener("click", () => {
  demo.classList.remove("hidden");
});

closeDemo.addEventListener("click", () => {
  demo.classList.add("hidden");
});

// TASK MANAGER
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;
    li.addEventListener("click", () => {
      tasks.splice(index, 1);
      saveTasks();
    });
    taskList.appendChild(li);
  });
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

addTaskBtn.addEventListener("click", () => {
  const task = taskInput.value.trim();
  if (task) {
    tasks.push(task);
    taskInput.value = "";
    saveTasks();
  }
});

renderTasks();