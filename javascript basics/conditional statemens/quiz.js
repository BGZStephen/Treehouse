var answer = prompt("What programming language is the name of a gem?");
if(answer.toLowerCase() === "ruby") {
  document.write("<p>Congratulations," + answer + " is the correct answer!</p>");
} else {
  document.write("<p>Unfortunately " + answer + " is not the correct answer, refresh to try again!");
}
