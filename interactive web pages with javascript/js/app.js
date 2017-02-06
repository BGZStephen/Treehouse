// problem: no current user interatction
// solution: add interactivity to elements with javascript

var taskInput = document.getElementById("new-task");
var addButton = document.getElementsByTagName("button")[0]; // add button
var incompleteTasksHolder = document.getElementById("incomplete-tasks");
var completedTasksHolder = document.getElementById("completed-tasks");

// add a new task
var addTask = function() {
  console.log("Add task...")
  // when button is pressed
    // create a task and append it to the to do section
      // list item
      // check box
      // value from #new-task input
      // edit button
      // delete button
}

// edit an existing task
var editTask = function() {
  console.log("Edit task...")
  // when edit button is pressed
  // if parent has class edit mode
    // switch from edit mode
    // make label text become input value
  // else
    // switch to edit mode
    // input value becomes label text

  // toggle edit mode
}

// delete an existing task
var deleteTask = function() {
  console.log("Delete task...")
  // when delete button is pressed
    // remove parent list item from the ul
}

// complete a task
var taskCompleted = function() {
  console.log("Task Complete...")
  // when check box is pressed, append task li to the completed task ul
}

// mark task as incomplete
var taskIncomplete = function() {
  console.log("Task Incomplete...")
  // check box is unchecked, append to incomplete task ul
}

// set the click handler to the addtask button
addButton.onclick = addTask;
