const inputBox = document.getElementById("input-box");
const inputBtn = document.getElementById("input-button");

function addTask() {
  const task = inputBox.value.trim();
  if (!task) {
    alert("please write down a task");
    return;
  }

  const li = document.createElement("li");
  const listContainer = document.getElementById("list-container");

  li.innerHTML = `
  <label>
  <input type='checkbox'/>
  <span>${task}</span>
  </label>
  <span class='edit-btn'>Edit</span>
  <span class='delete-btn'>Delete</span>
  `;
  listContainer.appendChild(li);
  inputBox.value = "";
  const checkbox = li.querySelector("input");
  const taskSpan = li.querySelector("span");
  const editBtn = li.querySelector(".edit-btn");
  const deletebtn = li.querySelector(".delete-btn");
  const completedCounter = document.getElementById("completed-counter");
  const uncompletedCounter = document.getElementById("uncompleted-counter");

  // add li class
  checkbox.addEventListener("click", function () {
    li.classList.toggle("completed", checkbox.checked);
    updateCounters()
  });
  editBtn.addEventListener("click", function () {
    const update = prompt("Edit task:", taskSpan.textContent);
    if (update !== null) {
      taskSpan.textContent = update;
      // li.classList.remove('completed');
    }
  });
  function updateCounters() {
    const completedTasks = document.querySelectorAll(".completed").length;
    const uncompletedTasks = document.querySelectorAll("li:not(.completed)").length;
    completedCounter.textContent = completedTasks;
    uncompletedCounter.textContent = uncompletedTasks; 
  }
  deletebtn.addEventListener('click', function () {
    if(confirm('Are you sure deleting the Task?')){
      li.remove()
    }
    updateCounters()
  })
}
