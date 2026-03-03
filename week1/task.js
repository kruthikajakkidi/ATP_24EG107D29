
import {validateTitle,validatePriority,validateDueDate} from './validator.js'
let tasks=[]
function addTask(title,priority,dueDate){
if(validateTitle(title)!==true||validatePriority(priority)!==true||validateDueDate(dueDate)!==true){
return "invalid task"
}
tasks.push({id:tasks.length+1,title,priority,dueDate,status:"pending"})
return true
}
function getAllTasks(){
return tasks
}
function completeTask(taskId){
let element=tasks.find(element=>element.id==taskId)
if(element){
element.status="completed"
return true
}
return false
}
export {addTask,getAllTasks,completeTask}
