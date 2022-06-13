document.addEventListener("DOMContentLoaded", () => {
  // your code here
  form = document.querySelector('form')

  // add event listener for the submit
  form.addEventListener('submit', e => {
    e.preventDefault()
    // Changed id of text input (index.html) to newTaskDescription to be able to target it
    // Previous id of "new-task-description" produced error of task not defined
    let newTask = e.target.newTaskDescription.value
    let selectedOption = e.target.priority.value
    let dueDate = e.target.due.value
    
    // create li element and add text content + class based on selected option of priority
    let li = document.createElement('li')
    li.textContent = `${newTask}  | Due by: ${dueDate}  | `
    li.className = selectedOption

    // change color attribute based on selected option
    if (li.className === "high"){
      li.style.color ="red";
    } else if (li.className === "medium"){
      li.style.color = "yellow";
    } else if (li.className === "low"){
      li.style.color = "green";
    }

    // create button beside li with click listener to delete entire li item
    let btn = document.createElement('button')
    btn.textContent = 'X'
    btn.addEventListener('click', e => {
      e.target.parentNode.remove()
    })
    li.appendChild(btn)

    // append li to Todos list
    document.querySelector('ul').appendChild(li)

    // TODO: sort the todo items in ascending order
  })
});
