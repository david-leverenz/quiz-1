// var quiz = {
//     question1: ["The condition in an if/else statement is enclosed with ___________.", "quotes", "curly brackets", "parenthesis", "square brackets", 2],

//     question2: ["Commonly used data types DO NOT include:", "strings", "booleans", "numbers", "alerts", 3]
// }

// question1: {question: "The condition in an if/else statement is enclosed with ___________.", answer1: "quotes", answer2: "curly brackets", answer3: "parenthesis", answer4: "square brackets", correct: 2,},

// question2: {question: "Commonly used data types DO NOT include:", answer1: "strings", answer2: "booleans", answer3: "numbers", answer4: "alerts", correct: 3,}

// }

// I struggled with the format of the quiz but believe I got it correct.

// var allButtons = document.querySelectorAll("button");
// allButtons.setAttribute("style", "color:blue; font-size: 30px");

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
// console.log(quiz);

// var testArray = ["Question1", "Question2", "Question3"];

// Just to make sure the quiz is being read properly.

console.log("Quiz length: " + Object.keys(quiz).length);

// timer counts down from 10 for testing purposes

var startButton = document.querySelector(".start-button");
var timer = document.querySelector("#timer");
var secondsLeft = 10;

startButton.setAttribute("style", "color:white; font-size: 20px; background-color: purple; border-radius: 10px");
// button.setAttribute("style", "color:white; font-size: 20px; background-color: purple; border-radius: 10px");

// created this function to start the timer

function quiztimer() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = "Time: " + secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            console.log("Timer done!");
            // gameOver();
        }
    }, 1000);

    // then I run my quiz function

    runquiz();
}

// reset the quiz

var QI = 0;

//  created a function to count correct answers and store that value in local storage

var correctCount = 0

function countCorrect() {
    localStorage.setItem("count", correctCount);;
    correctCount++;
    localStorage.setItem("count", correctCount);
}

//  create a function that loops through each question and answers
// for some reason it is not clearing out the previous question's answers

function askQuestion() {
    if (QI < quiz.length) {
        console.log(quiz[0].question);
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

                console.log(QI, quiz.length);
                if (userSelection === quiz[QI].correct) {
                    console.log("correct");
                    countCorrect();
                } else {
                    console.log("incorrect");
                    // secondsLeft-3;
                    var incorrectFooter = document.getElementById("incorrect-footer");
                    incorrectFooter.setAttribute("style", "color: grey; font-size: 20px");
                    incorrectFooter.style.alignItems = "center";
                    incorrectFooter.textContent = "Incorrect!";

                } QI++

                askQuestion();
            });
         })
         } else {
            console.log("Game Over!");    
            gameOver()
            }
    

        // I was able to display the buttons.


}

// starts the quiz and gets rid of the opening paragraph

function runquiz() {

    var startScreen = document.getElementById("start-screen");
    startScreen.setAttribute("class", "hide");

    document.getElementById("questions").removeAttribute("class");
    askQuestion()

    // create another div in html for questons just like before
    // question class show

    // below are a lot of failed attempts at getting the code working

    // for (var i = 0; i < testArray.length; i++) {
    //     var quizQuestions = testArray[i];

    //     console.log("I made it into the loop.");

    //     var h1 = document.createElement("h1");
    //     h1.textContent = quizQuestions;

    //     document.body.appendChild(h1);

    //     console.log(h1);
    //     console.log("quiz questions");

    // var answerListItems = document.querySelector("#answerList");

    //     for (var i = 0; i < Object.keys(quiz).length; i++) {
    //     var quizQuestions = quiz[i];

    //     console.log("I made it into the loop.");
    //     console.log(quizQuestions);

    //     var h1 = document.createElement("h1");

    // document.getElementById("questionLine").innerHTML=quiz.question1[0];

    // var li = document.createElement("li");

    // document.getElementById("answerList").innerHTML=quiz.question1[1];


    // li.textContent=quiz.question1[1];
    // li.innerHTML=quiz.question1[2];

    // console.log("quiz questions");
    // }
}

// start button that calls quiztimre()

startButton.addEventListener("click", function () {
    console.log("Start!");
    quiztimer();
    // runquiz();

})

// This was going to be the start of my game over function if I had the time to work with it.
// gameOver()

function gameOver() {
    var hideQuestion = document.getElementById("questions");
    hideQuestion.setAttribute("class", "hide");
    document.getElementById("game-over").textContent("Game Over!");
    console.log("It should say game over on the screen");

    // var scoreButton = document.querySelector(".score-button");
    // scoreButton.addEventListener("click", function () {
    //         console.log("Score!");

    // var form = document.createElement("initials")
    // initials.setAttribute("type","text");
}