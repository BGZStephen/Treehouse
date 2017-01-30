// generate a random nuber
var randomNumber = Math.floor(Math.random() * 6) + 1;

// accept a user input as a guess
var guess = prompt("I'm thinking of a number between 1 and 6, can you guess what it is?")

var correctGuess = false;

// conditional statement to check if the numbers match
if(parseInt(guess) == randomNumber) {
  alert("Correct on the 1st guess! the random number was: " + randomNumber);
} else if(guess < randomNumber) {
    var guessMore = prompt("Unfortunately, your answer is incorrect. The correct number is higher, try again");
    if(parseInt(guessMore) == randomNumber) {
      correctGuess == True; // set correctGuess to true if the answer is correct on the 2nd guess
    }
  } else if(guess > randomNumber) {
      var guessMore = prompt("Unfortunately, your answer is incorrect. The correct number is lower, try again");
      if(parseInt(guessMore) == randomNumber) {
        correctGuess == True; // set correctGuess to true if the answer is correct on the 2nd guess
      }
  }
if(correctGuess) {
  document.write("Correct guess! The number was " + randomNumber) // check if correctGuess is true following
} else {
  document.write("Incorrect second guess. The number was " + randomNumber)
}
