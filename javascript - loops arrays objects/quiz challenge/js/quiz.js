// create questions array to hold questions and answers
// create array to hold correct answers and incorrect answers for use later
// create loop to ask questions
  // if correct, store to correct answers array and increase correct answers counter
  // if incorrect, store to incorrect answers array and increase incorrect answers counter

var questions = [
  ["What is the capital city of Italy?", "Rome"],
  ["What is the capital city of Sweden?", "Stockholm"],
  ["What is the capital city of Belgium?", "Brussels"],
  ["What is the capital city of Australia?", "Canberra"],
  ["What is the capital city of Jamaica?", "Kingston"],
  ["What is the capital city of Greece?", "Athens"],
  ["What is the capital city of Wales?", "Cardiff"]
]

var correctAnswers = [];
var incorrectAnswers = [];
var correctAnswerCount = 0;
var incorrectAnswerCount = 0;

function print(message) {
  document.write(message);
}

for (var i=0; i < questions.length; i += 1) {
  var userGuess = prompt(questions[i][0]);
  if (userGuess === questions[i][1]) {
    correctAnswers.push(questions[i][0])
    correctAnswerCount += 1;
  } else {
    incorrectAnswers.push(questions[i][0])
    incorrectAnswerCount += 1;
  }
}

var baseOutput = "<p>You got " + correctAnswerCount + " answers correct</p>";

var correctOutput = "<h2>You got these questions correct: </h2>";
    correctOutput += "<ol>";
    for (var i = 0; i < correctAnswers.length; i += 1) {
    correctOutput += "<li>" + correctAnswers[i] + "</li>";
    }
    correctOutput += "</ol>";

var incorrectOutput = "<h2>You got these questions incorrect: </h2>";
    incorrectOutput += "<ol>";
    for (var i = 0; i < incorrectAnswers.length; i += 1) {
    incorrectOutput += "<li>" + incorrectAnswers[i] + "</li>";
    }
    incorrectOutput += "</ol>";

if (incorrectAnswerCount == 0) {
    var outPutMessage = baseOutput + correctOutput
    print(outPutMessage);
} else if (correctAnswerCount == 0) {
    var outPutMessage = baseOutput + incorrectOutput
    print(outPutMessage);
} else {
    var outPutMessage = baseOutput + correctOutput + incorrectOutput
    print(outPutMessage);
}
