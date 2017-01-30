// set questions and answers to variables to allow for easy modification later

var questionOne = "Which US state is named on the label of a Jack Daniels bottle?";
var answerOne = "Tennessee";
var questionTwo = "A phlebotomist extracts what from the human body?";
var answerTwo = "Blood";
var questionThree = "What is the female equivalent of polygyny?";
var answerThree = "Polyandry";
var questionFour = "How many feet are there in a fathom?";
var answerFour = "Six";
var questionFive = "Nariyal is the Indian term for which nut?";
var answerFive = "Coconut";

// set correct answers to 0, use as a counter for later

var correctAnswers = 0;

// 5 seperate prompts to  get user answers and check if they are correct, if so, increase correctAnswers counter by 1

var guessOne = prompt(questionOne);
if(guessOne === answerOne) {
  correctAnswers += 1;
}

var guessTwo = prompt(questionTwo);
if(guessTwo === answerTwo) {
  correctAnswers += 1;
}

var guess = prompt(questionThree);
if(guess === answerThree) {
  correctAnswers += 1;
}

var guess = prompt(questionFour);
if(guess === answerFour) {
  correctAnswers += 1;
}

var guess = prompt(questionFive);
if(guess === answerFive) {
  correctAnswers += 1;
}

// output quiz results based on number of correct answers based on correctAnswers

if(correctAnswers == 5) {
  document.write("Congratulations, you scored " + correctAnswers + " points! You've earned a gold trophy!")
} else if(correctAnswers >= 3) {
  document.write("Well done, you scored " + correctAnswers + " points! You've earned a silver trophy!")
} else if(correctAnswers >= 1) {
  document.write("Good job, you scored " + correctAnswers + " points! You've earned a bronze trophy!")
} else {
  document.write("Unfortunately you scored " + correctAnswers + " points, better luck next time!")
}
