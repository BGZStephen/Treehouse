$(document).ready(function() {

  var url = "data/employees.json";
  $.getJSON(url, function(response) {
    var statusHTML = "<ul class='bulleted'>";
    $.each(response, function(index, employee) {
        if(employee.inoffice === true) {
          statusHTML += "<li class='in'>"
        } else {
          statusHTML += "<li class='out'>"
        }
        statusHTML += employee.name + "</li>"
    })
    statusHTML += "</ul>"
    $("#employeeList").html(statusHTML);
  });

  var roomsUrl = "data/rooms.json";
  $.getJSON(roomsUrl, function(response) {
    var statusHTML = "<ul class='rooms'>";
    $.each(response, function(index, rooms) {
        if(rooms.available === true) {
          statusHTML += "<li class='empty'>"
        } else {
          statusHTML += "<li class='full'>"
        }
        statusHTML += rooms.room + "</li>"
    })
    statusHTML += "</ul>"
    $("#roomList").html(statusHTML);
  });

}); // end ready
