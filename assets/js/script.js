var incorrectFooter = document.getElementById("incorrect-footer");
var inputForm = document.getElementById("inputForm");
var submitButton = document.getElementById("submitButton");
var highScoresEl = document.getElementById("high-scores");
var highScoresList = document.getElementById("high-scores-list");
var hsInitials = document.getElementById("inits");
var hsScore = document.getElementById("score");


var quiz = [{
    question: "The condition in an if/else statement is enclosed with ___________.",
    answers: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    correct: "parenthesis",
},
{
    question: "Commonly used data types DO NOT include:",
    answers: ["strings", "booleans", "numbers", "alerts"],
    correct: "alerts",
}]

// Just to make sure the quiz is being read properly.

// console.log("Quiz length: " + Object.keys(quiz).length);

// timer counts down from 10 for testing purposes

var startButton = document.querySelector(".start-button");
var timer = document.querySelector("#timer");
var secondsLeft = 10;

startButton.setAttribute("style", "color:white; font-size: 20px; background-color: purple; border-radius: 10px");

// created this function to start the timer
var timerInterval;

function quiztimer() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = "Time: " + secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            // console.log("Timer done!");
            gameOver();
        }
    }, 1000);

    // then I run my quiz function

    runquiz();
}

// reset the quiz

var QI = 0;


var correctCount = 0

function countCorrect() {
    correctCount++;
}

//  create a function that loops through each question and answers
// for some reason it is not clearing out the previous question's answers

function askQuestion() {
    incorrectFooter.textContent = "";
    if (QI < quiz.length) {
        // console.log(quiz[0].question);
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

                // I was able to console.log the fact that I am getting either right or wrong answers
                // I can also display incorrect at the bottom if the answer is wrong

                // console.log(QI, quiz.length);
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
        // console.log("Game Over!");
        gameOver()
    }

}

// starts the quiz and gets rid of the opening paragraph

function runquiz() {

    var startScreen = document.getElementById("start-screen");
    startScreen.setAttribute("class", "hide");

    document.getElementById("questions").classList.remove("hide"); // add, remove and toggle for classList.
    askQuestion()

    // create another div in html for questons just like before
    // question class show


    // console.log("quiz questions");
    // }
}

// start button that calls quiztimre()

startButton.addEventListener("click", function () {
    // console.log("Start!");
    quiztimer();
    // runquiz();

})

// This was going to be the start of my game over function if I had the time to work with it.
// gameOver()

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
        // highScoresList.innerHTML = ""
        highScores.sort(function(a, b){return b.score-a.score});
        for (let i = 0; i < 10; i++) {
            var highScore = highScores[i];
            
            highScoresList.innerHTML+=(`<li>${highScore.initials} | ${highScore.score}</li>`);
        //    hsInitials.innerHTML=`${highScore.initials}`;
        //    hsScore.innerHTML=`${highScore.score}`;
        }
    }
    listScore();
})

// create a containaer for high scores that is  hidden by default
// thenwhen the button is clicked you hide game over and remove hidden from high scores sectiom
// then call a function that loops through local storage and display the items in desc order
// sort: https://www.w3schools.com/jsref/jsref_sort.asp
// array.sort(compareFunction)






function gameOver() {
    clearInterval(timerInterval);
    var hideQuestion = document.getElementById("questions");
    hideQuestion.setAttribute("class", "hide");
    document.getElementById("game-over").classList.remove("hide");
}

