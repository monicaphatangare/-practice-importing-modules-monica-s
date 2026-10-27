function addTask(tasks, task) {
    tasks.push(task);
}

function listTasks(tasks) {
    tasks.forEach(task => console.log(task));
}

module.exports = { addTask, listTasks };