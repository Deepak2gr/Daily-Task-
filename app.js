const addTaskButton = document.getElementById('add-task');
const newTaskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

addTaskButton.addEventListener('click', () => {
	if (newTaskInput.value.trim() !== '') {
		const newTask = document.createElement('li');
		newTask.innerHTML = `
			<input type="checkbox" class="toggle-completed">
			<label>${newTaskInput.value}</label>
			<button class="delete-task">Delete</button>
		`;

		taskList.appendChild(newTask);
		newTaskInput.value = '';
	}
});

taskList.addEventListener('change', (e) => {
	if (e.target.classList.contains('toggle-completed')) {
		e.target.parentNode.classList.toggle('completed');
	}
});

taskList.addEventListener('click', (e) => {
	if (e.target.classList.contains('delete-task')) {
		e.target.parentNode.remove();
	}
});

document.addEventListener('keypress', (e) => {
	if (e.keyCode === 13) {
		if (newTaskInput.value.trim() !== '') {
			const newTask = document.createElement('li');
			newTask.innerHTML = `
				<input type="checkbox" class="toggle-completed">
				<label>${newTaskInput.value}</label>
				<button class="delete-task">Delete</button>
			`;

			taskList.appendChild(newTask);
			newTaskInput.value = '';
		}
	}
});

const clearCompletedButton = document.getElementById('clear-completed');

clearCompletedButton.addEventListener('click', () => {
	const completedTasks = document.querySelectorAll('#task-list li.completed');
	completedTasks.forEach(task => task.remove());
});

const deleteAllButton = document.getElementById('delete-all');

deleteAllButton.addEventListener('click', () => {
	const allTasks = document.querySelectorAll('#task-list li');
	allTasks.forEach(task => task.remove());
});
