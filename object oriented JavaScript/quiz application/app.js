// create an array for the questions, two answers for each question and a correct answer.
// display the question inside the h2 element
// assign answers to both of the buttons
// if statement to check if answers are true on click, then increment the array index and refresh the ui to give new answers / question
// exit question loop when index equals the length of the array and display final score
// array.length / index to output number of questions remaining
// correct / incorrect answer counters to keep track of score

// questions array

var questions = [
  ["What is the capital city of Italy?", "Rome", "Athens", "Rome"],
  ["What is the capital city of England?", "London", "Lisbon", "London"],
  ["What is the capital city of Spain?", "Belfast", "Lisbon", "Lisbon"],
  ["What is the capital city of Greece?", "Athens", "Madeira", "Athens"],
]

var questionIndex = 0;
var correctQuestions = 0;
var incorrectQuestions = 0;
var progressCounter = 1;

var questionElement = document.getElementById("question");
var guess0 = document.getElementById("guess0");
var guess1 = document.getElementById("guess1");
var progress = document.getElementById("progress");
var button0 = document.getElementById("guess0");
var button1 = document.getElementById("guess1");

questionElement.innerHTML = questions[questionIndex][0];
guess0.innerHTML = questions[questionIndex][1];
guess1.innerHTML = questions[questionIndex][2];
progress.innerHTML = "Question " + progressCounter + " of " + questions.length;

button0.onclick = answerQuestion;
button1.onclick = answerQuestion;

function answerQuestion(){
      var answer = this.innerHTML;
      if (answer === questions[questionIndex][3]){
        correctQuestions ++;
      } else {
        incorrectQuestions ++;
      }
      if(progressCounter >= questions.length) {
          questionElement.innerHTML = "Game Over! You answered " + correctQuestions + " question(s) correctly. You got " + incorrectQuestions + " incorrect answers";
          button0.style.display = "none";
          button1.style.display = "none";
          progress.style.display = "none";
        }
      questionIndex ++;
      progressCounter ++;
      questionElement.innerHTML = questions[questionIndex][0];
      guess0.innerHTML = questions[questionIndex][1];
      guess1.innerHTML = questions[questionIndex][2];
      progress.innerHTML = "Question " + progressCounter + " of " + questions.length;
      }
