// problem: no user interaction happens
// solution: add interactivity
var color = $(".selected").css("background-color");
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;

// when clicking on control list items, deselect sibling elementx and then select clicked element
$(".controls").on("click", "li", function() {
  $(this).siblings().removeClass("selected"); // find siblings of clicked color and remove it's selected class, to make way for us to add selected to new color
  $(this).addClass("selected");
  // cache current color here
  color = $(this).css("background-color");
})

// when addbutton pressed, toggle hide on color select
$("#revealColorSelect").click(function() {
  changeColor();
  $("#colorSelect").toggle();
})

function changeColor() {
  // when color sliders change, update new color span
  var r = $("#red").val(); // get rgb values from the corresponding slider values
  var g = $("#green").val();
  var b = $("#blue").val();
  $("#newColor").css("background-color", "rgb(" + r + "," + g + "," + b + ")"); // update newColor background color css with combination of rgb values from sliders
}

$("input[type=range]").on("input", changeColor);

$("#addNewColor").click(function() {
  // append new color span to list of available colors when add color pressed
  // select the new color
  var $newColor = $("<li></li>");
  $newColor.css("background-color", $("#newColor").css("background-color"));
  $(".controls ul").append($newColor);
  $newColor.click() // mimic a click on to the new li we appended to give it a selected class
})

$canvas.mousedown(function(e){
  lastEvent = e;
  mouseDown = true;
}).mousemove(function(e) {
  if (mouseDown) {
  context.beginPath();
  context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
  context.lineTo(e.offsetX, e.offsetY);
  context.strokeStyle = color;
  context.stroke();
  lastEvent = e;
  }
}).mouseup(function() {
  mouseDown = false;
}).mouseleave(function() {
  $canvas.mouseup();
})


// on mouse events on canvas, draw lines
