// 1. created functions
// 2. created variables to hold elements we'll be binding event handlers to
// 3. created a function to cycle through both completd and incompleted ul's and bind event handlers to the corresponding elements

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

var bindTaskEvents = function(taskListItem, checkboxEventHandler) {
  console.log("Bind List Item")
  // for each list item, select it's children
  var checkbox = taskListItem.querySelector("input[type='checkbox']");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");
  // bind the edit task to the edit button
  editButton.onclick = editTask;
  // bind delete task to delete button
  deleteButton.onclick = deleteTask;
  // bind checkBoxEventHandler to checkbox
  checkbox.onchange = checkboxEventHandler;
}

// set the click handler to the addtask button
addButton.onclick = addTask;

for (var i = 0; i< incompleteTasksHolder.children.length; i++) {
  bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}

for (var i = 0; i< completedTasksHolder.children.length; i++) {
  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}
