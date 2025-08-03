
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");

  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Complete";
  completeBtn.style.marginRight = "10px";
  completeBtn.addEventListener("click", () => {
    taskSpan.classList.toggle("completed");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(taskSpan);
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  input.value = "";
});