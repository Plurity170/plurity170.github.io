// Script ready for future JavaScript features
// Keeping this file clean avoids breaking the site
console.log("Portfolio loaded successfully");
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task.text;

li.addEventListener("click", () => {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
});

li.addEventListener("click", () => {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
});

    if (task.completed) {
      li.style.textDecoration = "line-through";
    }

    li.addEventListener("click", () => {
      task.completed = !task.completed;
      saveTasks();
      renderTasks();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.style.marginLeft = "10px";

    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

addTaskBtn.addEventListener("click", () => {
  const text = taskInput.value.trim();
  if (text === "") return;

  tasks.push({ text, completed: false });
  saveTasks();
  renderTasks();

  taskInput.value = "";
});

renderTasks();