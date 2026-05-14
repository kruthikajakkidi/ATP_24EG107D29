import { addTask, getAllTasks, completeTask } from './task.js'

// add tasks
addTask("eating", "HIGH", '2026-02-27')
addTask("sleep", "HIGH", '2026-02-28')
addTask("coding", "MEDIUM", '2026-02-28')
addTask("gym", "LOW", '2026-02-28')
addTask("reading", "HIGH", '2026-02-28')

// display all tasks
console.log(getAllTasks())

// mark tasks as completed
completeTask(1)
completeTask(2)

// display updated tasks
console.log(getAllTasks())