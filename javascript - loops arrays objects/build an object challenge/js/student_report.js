// for (var i = 0; i < students.length; i +=1) {
//     var output = "<h2>Student name: " + students[i].name + "</h2>";
//     output += "<p>Track: " + students[i].track + "</p>";
//     output += "<p>Achievements: " + students[i].achievements + "</p>";
//     output += "<p>Points: " + students[i].points + "</p><br>";
//     document.write(output);
// }

var search = prompt("Please enter the name of the student you wish to search for");

for (var i = 0; i < students.length; i += 1) {
  student = students[i];
  if (search === student.name) {
    var output = "<h2>Student name: " + students[i].name + "</h2>";
    output += "<p>Track: " + students[i].track + "</p>";
    output += "<p>Achievements: " + students[i].achievements + "</p>";
    output += "<p>Points: " + students[i].points + "</p><br>";
    document.write(output);
  }
}
