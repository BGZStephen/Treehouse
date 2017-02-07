// 1. created functions
// 2. created variables to hold elements we'll be binding event handlers to
// 3. created a function to cycle through both completd and incompleted ul's and bind event handlers to the corresponding elements

// problem: no current user interatction
// solution: add interactivity to elements with javascript

var taskInput = document.getElementById("new-task");
var addButton = document.getElementsByTagName("button")[0]; // add button
var incompleteTasksHolder = document.getElementById("incomplete-tasks");
var completedTasksHolder = document.getElementById("completed-tasks");

// new task list item
var createNewTaskElement = function(taskString) {
  // create list item
  // when button is pressed
    // create a task and append it to the to do section
      // list item
      // check box
      // value from #new-task input
      // edit button
      // delete button
  var listItem = document.createElement("li");
  var checkbox = document.createElement("input");
  var label = document.createElement("label");
  var editInput = document.createElement("input")
  var editButton = document.createElement("button")
  var deleteButton = document.createElement("button")

  checkbox.type = "checkbox";
  editInput.type = "text";
  editButton.innerText = "Edit"
  editButton.className = "edit"
  deleteButton.innerText = "Delete"
  deleteButton.className = "delete"
  label.innerText = taskString;

  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
  return listItem;
}

// add a new task
var addTask = function() {
  var listItem = createNewTaskElement(taskInput.value);
  // append item to incomplete task holder
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted) // when new item created, bind task events to it
}

// edit an existing task
var editTask = function() {
  console.log("Edit task...")
  // when edit button is pressed
  var listItem = this.parentNode;
  var editInput = listItem.querySelector("input[type='text']")
  var label = listItem.querySelector("label")
  var containsClass = listItem.classList.contains("editMode");

  if(containsClass) {
    label.innerText = editInput.value;
  } else {
    editInput.value = label.innerText;
  }

  listItem.classList.toggle("editMode");
  }

// delete an existing task
var deleteTask = function() {
  console.log("Delete task...")
  // remove parent list item from the ul
  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  ul.removeChild(listItem);
}

// complete a task
var taskCompleted = function() {
  console.log("Task Complete...")
  // append task li to the completed task ul
  var listItem = this.parentNode;
  completedTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskIncomplete) // re-bind task events to items once they've been appended to a new list
}

// mark task as incomplete
var taskIncomplete = function() {
  console.log("Task Incomplete...")
  // check box is unchecked, append to incomplete task ul
  var listItem = this.parentNode;
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted)
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
