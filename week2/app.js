import {addTask,getAllTasks,completeTask} from './task.js'

addTask("eating","HIGH",'2026-02-27')
addTask("sleep","HIGH",'2026-02-28')
addTask("coding","MEDIUM",'2026-02-28')
addTask("gym","LOW",'2026-02-28')
addTask("reading","HIGH",'2026-02-28')
console.log(getAllTasks())
completeTask(1)
completeTask(2)
console.log(getAllTasks())

