const path = require("path");
const {addTask, listTasks} = require("./taskManager");
const {saveTasks, loadTasks} = require("./fileHandler");

const filePath = path.join(__dirname, "tasks.json");

const tasks = loadTasks(filePath);
 
addTask(tasks, "finish study");

listTasks(tasks);
saveTasks(filePath , tasks);
