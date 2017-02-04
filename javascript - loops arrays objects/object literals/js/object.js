// impleeobject

var person = {
  name: "Stephen",
  country: "United Kingdom",
  age: 29,
  treehouseStudent: true,
  skills: ["JavaScript", "HTML", "CSS"]
}

function print(message) {
  var div = document.getElementById("output");
  div.innerHTML = message;
}

var message = "<p>Hello, my name is " + person.name + "</p>";
message += "<p>I live in the " + person.country + "</p>";
person.name = "Superman"
message += "<p>But I wish my name was " + person.name + "</p>";
message += "<p>I have " + person.skills.length + " Skills: </p>";
message += person.skills.join(", ") ;
print(message);
