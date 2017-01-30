// generate a random nuber
var randomNumber = Math.floor(Math.random() * 6) + 1;

// accept a user input as a guess
var guess = prompt("I'm thinking of a number between 1 and 6, can you guess what it is?")

// conditional statement to check if the numbers match
if(parseInt(guess) == randomNumber) {
  alert("Correct, the random number was: " + randomNumber);
} else {
  document.write("Unfortunately, your answer is incorrect, the correct number was: " + randomNumber + " you guessed: " + guess);
}
