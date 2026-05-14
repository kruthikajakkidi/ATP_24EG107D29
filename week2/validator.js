export {
  validateTitle,
  validatePriority,
  validateDueDate
}

// validate task title
function validateTitle(title) {

  // check empty title
  if (!title) {
    return "title required"
  }

  // check minimum length
  if (title.length < 3) {
    return "min 3 char required"
  }

  return true
}

// validate priority
function validatePriority(priority) {

  // allowed priorities
  const priorities = ['LOW', 'MEDIUM', 'HIGH']

  // check priority
  let result = priorities.includes(priority)

  if (result == false) {
    return "invalid priority"
  }

  return true
}

// validate due date
function validateDueDate(date) {

  // convert to date object
  let dueDate = new Date(date)
  let today = new Date()

  // check past date
  if (dueDate < today) {
    return "invalid"
  }

  return true
}