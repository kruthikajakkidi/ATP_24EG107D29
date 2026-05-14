import {
  validateTitle,
  validatePriority,
  validateDueDate
} from './validator.js'

// tasks array
let tasks = []

// function to add task
function addTask(title, priority, dueDate) {

  // validate task data
  if (
    validateTitle(title) !== true ||
    validatePriority(priority) !== true ||
    validateDueDate(dueDate) !== true
  ) {
    return "invalid task"
  }

  // add task object
  tasks.push({
    id: tasks.length + 1,
    title,
    priority,
    dueDate,
    status: "pending"
  })

  return true
}

// function to get all tasks
function getAllTasks() {
  return tasks
}

// function to complete task
function completeTask(taskId) {

  // find task using id
  let element = tasks.find(
    element => element.id == taskId
  )

  // update task status
  if (element) {
    element.status = "completed"
    return true
  }

  return false
}

// export functions
export {
  addTask,
  getAllTasks,
  completeTask
}