
function completeTask(event) {
    let task = event.target.closest('.task');
    task.classList.toggle('completed');
}

function deleteTask(event) {
    let task = event.target.closest('.task');
    task.remove();
}

function addTask() {
    let taskInput = prompt("Enter a new task:");
    let newTask = document.createElement('div');
    newTask.classList.add('task');
    newTask.dataset.taskId = document.querySelectorAll('.task').length + 1;
    newTask.innerHTML = `
        <span>${taskInput}</span>
        <div>
            <button class="completeTask">Accomplir</button>
            <button class="deleteTask">Supprimer</button>
        </div>
    `;
    document.getElementById('todoList').appendChild(newTask);
    let completeButton = newTask.querySelector('.completeTask');
    let deleteButton = newTask.querySelector('.deleteTask');
    completeButton.addEventListener('click', completeTask);
    deleteButton.addEventListener('click', deleteTask);
}

let addButton = document.getElementById('addButton');
addButton.addEventListener('click', addTask);

let completeButtons = document.querySelectorAll('.completeTask');
completeButtons.forEach(button => button.addEventListener('click', completeTask));

let deleteButtons = document.querySelectorAll('.deleteTask');
deleteButtons.forEach(button => button.addEventListener('click', deleteTask));