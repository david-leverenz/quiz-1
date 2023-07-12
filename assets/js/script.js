// Housekeeping, to make referencing these things easier.
var incorrectFooter = document.getElementById("incorrect-footer");
var inputForm = document.getElementById("inputForm");
var submitButton = document.getElementById("submitButton");
var highScoresEl = document.getElementById("high-scores");
var highScoresList = document.getElementById("high-scores-list");
var hsInitials = document.getElementById("inits");
var hsScore = document.getElementById("score");

//  This is the quiz
var quiz = [{
    question: "The condition in an if/else statement is enclosed with ___________.",
    answers: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    correct: "parenthesis",
},
{
    question: "Commonly used data types DO NOT include:",
    answers: ["strings", "booleans", "numbers", "alerts"],
    correct: "alerts",
},
{
    question: "People who drive slowly do so because:",
    answers: ["they're scared", "they're texting", "they're not paying attention", "they don't care"],
    correct: "they don't care",
},
{
    question: "Routes can be confusing because:",
    answers: ["It's easy to get confused", "You made a dumb mistake", "You cut and pasted", "All of the above"],
    correct: "All of the above",
},
{
    question: "To find a value in an Excel spreadsheet you would use:",
    answers: ["Vlookup", "Instr", "Hlookup", "Party"],
    correct: "Vlookup",
},
{
    question: "The most commonly used password is:",
    answers: ["password", "1234", "birthday", "kid's names"],
    correct: "1234",
},
{
    question: "The Wall is a good album because:",
    answers: ["It is in the key of C", "It is a concept album", "The music is scary", "The subject is scary"],
    correct: "It is in the key of C",
},
{
    question: "My children take advantage of me because:",
    answers: ["I am a tad slow", "They are way smarter than you would think", "They are a-holes", "I love them"],
    correct: "I love them",
},
{
    question: "The best Dorito is:",
    answers: ["Orange", "Blue", "Taco", "All of the above"],
    correct: "Orange",
},
{
    question: "Bootcamp graders are super cool because:",
    answers: ["They forgive little problems", "They understand the pressure", "They have been through it too", "No reason, they are just cool"],
    correct: "No reason, they are just cool",
}]

// This is the button to start the quiz and the timer
var startButton = document.querySelector(".start-button");
var timer = document.querySelector("#timer");
var secondsLeft = 30;

startButton.setAttribute("style", "color:white; font-size: 20px; background-color: purple; border-radius: 10px");

// This function controls the timer
var timerInterval;

function quiztimer() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = "Time: " + secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            gameOver();
        }
    }, 1000);

    // then I run my quiz function

    runquiz();
}

// reset the quiz

var QI = 0;

var correctCount = 0

// Counts the number of correct answers.
function countCorrect() {
    correctCount++;
}

//  This function presents question and answer objects.  It counts the number of correct answers and displays incorrect when you get one wrong.

function askQuestion() {
    incorrectFooter.textContent = "";
    if (QI < quiz.length) {
        var questionTitle = document.getElementById("question-title");
        questionTitle.textContent = quiz[QI].question;
        document.getElementById("choices").innerHTML = ""
        quiz[QI].answers.forEach(function (answer) {
            var button = document.createElement("button");
            button.textContent = answer;
            button.setAttribute("value", answer);
            button.setAttribute("style", "color:white; font-size: 20px; background-color: purple; border-radius: 10px");
            document.getElementById("choices").append(button);
            button.addEventListener("click", function (e) {
                var userSelection = e.target.value;
                if (userSelection === quiz[QI].correct) {
                    console.log("correct");
                    countCorrect();
                } else {
                    secondsLeft -= 3;
                    incorrectFooter.setAttribute("style", "color: grey; font-size: 20px");
                    incorrectFooter.style.alignItems = "center";
                    incorrectFooter.textContent = "Incorrect!";

                } QI++

                setTimeout(askQuestion, 500); // setTimeout is built in
            });
        })
    } else {
        gameOver()
    }

}

// starts the quiz and gets rid of the opening paragraph
function runquiz() {

    var startScreen = document.getElementById("start-screen");
    startScreen.setAttribute("class", "hide");

    document.getElementById("questions").classList.remove("hide"); // add, remove and toggle for classList.
    askQuestion()
}

// start button that calls quiztimer()
startButton.addEventListener("click", function () {
    quiztimer();
})

// This gets the quiz taker's initials and pushes their score to local storage.  It also displays the top 10 scores.
submitButton.setAttribute("style", "color:white; font-size: 20px; background-color: purple; border-radius: 10px");
submitButton.addEventListener("click", function () {

    var initials = inputForm.value;
    var highScoreObj = {
        initials,
        score: correctCount
    }
    var highScores = JSON.parse(localStorage.getItem("highScores")) || []
    highScores.push(highScoreObj);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    document.getElementById("high-scores").classList.remove("hide");
    document.getElementById("game-over").classList.add("hide");
    var listScore = function () {
        
        highScores.sort(function(a, b){return b.score-a.score});
        for (let i = 0; i < 10; i++) {
            var highScore = highScores[i];
            
            highScoresList.innerHTML+=(`<li>${highScore.initials} | ${highScore.score}</li>`);

        }
    }
    listScore();
})

// This function ends the game.
function gameOver() {
    clearInterval(timerInterval);
    var hideQuestion = document.getElementById("questions");
    hideQuestion.setAttribute("class", "hide");
    document.getElementById("game-over").classList.remove("hide");
}

