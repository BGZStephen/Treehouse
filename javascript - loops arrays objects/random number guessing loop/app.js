var numberToGuess = getRandomNumber(10000); // sets a random number for the computeer to guess
var numberOfTries = 0;  // sets a counter fr the number of tries to guess
var computerGuess;

function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

while (computerGuess !== numberToGuess) {
  computerGuess = getRandomNumber(10000);
  numberOfTries += 1;
}

document.write("<p>The number to guess was " + numberToGuess + " it took the computer " + numberOfTries + " to guess it</p>");
