// Capture 3 user inputs, concatenate them and output them as a story

var questions = 3;
var questionsLeft = " [" + questions + " questions left]";

var userName = prompt("Please enter your name" + questionsLeft);
questions -= 1;
questionsLeft = " [" + questions + " questions left]";
var userAnimal = prompt("Please provide a type of animal" + questionsLeft);
questions -= 1;
questionsLeft = " [" + questions + " questions left]";
var userColor = prompt("Please provide a color" + questionsLeft);
document.write("My name is " + userName + " I have a pet " + userAnimal + " who is " + userColor);
