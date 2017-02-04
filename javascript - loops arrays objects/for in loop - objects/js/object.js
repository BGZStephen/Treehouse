// impleeobject

var person = {
  name: "Stephen",
  country: "United Kingdom",
  age: 29,
  treehouseStudent: true,
  skills: ["JavaScript", "HTML", "CSS"]
}

for (prop in person) {
  document.write(prop + ": " + person[prop] + "<br>");
}
