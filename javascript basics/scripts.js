var secondsPerMin = 60;
var minsPerHour = 60;
var hoursPerDay = 12;
var daysPerWeek = 7;
var weeksPerYear = 52;

var secondsPerDay = secondsPerMin * minsPerHour * hoursPerDay;
document.write("There are " + secondsPerDay + " seconds in a day");

var yearsAlive = 29;
var secondsAlive = secondsPerDay * weeksPerYear * yearsAlive;
document.write("<br><br>I have been alive for " + secondsAlive + " seconds");
