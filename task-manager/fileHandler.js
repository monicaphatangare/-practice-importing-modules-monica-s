const fs = require("fs");

function saveTasks(filePath, tasks){
    fs.writeFileSync(filePath, JSON.stringify(tasks));
}

function loadTasks(filePath) {
    try {
        return JSON.parse(fs.readFileSync(filePath, "utf8"));
    } catch {
        return[];
    }
}

module.exports = { saveTasks, loadTasks };