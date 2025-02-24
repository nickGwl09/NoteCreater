document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.className = 'flex justify-between items-center p-2 border-b';
        li.innerHTML = `
            <span>${taskText}</span>
            <div>
                <button class="edit-task bg-yellow-500 text-white p-1 mr-2">Edit</button>
                <button class="delete-task bg-red-500 text-white p-1">Delete</button>
            </div>
        `;
        taskList.appendChild(li);

        const editButton = li.querySelector('.edit-task');
        const deleteButton = li.querySelector('.delete-task');

        editButton.addEventListener('click', () => editTask(li, taskText));
        deleteButton.addEventListener('click', () => deleteTask(li));
    }

    function editTask(li, oldText) {
        const newText = prompt('Edit your task:', oldText);
        if (newText) {
            li.querySelector('span').textContent = newText;
        }
    }

    function deleteTask(li) {
        taskList.removeChild(li);
    }
});
