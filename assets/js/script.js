var quiz = {
    question1: ["The condition in an if/else statement is enclosed with ___________.", "quotes", "curly brackets", "parenthesis", "square brackets", 2],

    question2: ["Commonly used data types DO NOT include:", "strings", "booleans", "numbers", "alerts", 3]
}

    // question1: {question: "The condition in an if/else statement is enclosed with ___________.", answer1: "quotes", answer2: "curly brackets", answer3: "parenthesis", answer4: "square brackets", correct: 2,},

    // question2: {question: "Commonly used data types DO NOT include:", answer1: "strings", answer2: "booleans", answer3: "numbers", answer4: "alerts", correct: 3,}

// }
// {
//     question: "Commonly used data types DO NOT include:",
//     answers: ["strings", "booleans", "numbers", "alerts"],
//     correct: 3,
// }

console.log(quiz.question1[0]);

var testArray = ["Question1", "Question2", "Question3"];

console.log("Quiz length: " + Object.keys(quiz).length);

var startButton = document.querySelector(".start-button")
var timer = document.querySelector("#timer");
var secondsLeft = 5;


function quiztimer() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = "Time: " + secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            console.log("Timer done!");
        }
    }, 1000);
}

var questions = document.querySelector("h1")
var answeroptions = document.querySelector("#answerList")

function runquiz() {
    // for (var i = 0; i < testArray.length; i++) {
    //     var quizQuestions = testArray[i];

    //     console.log("I made it into the loop.");

    //     var h1 = document.createElement("h1");
    //     h1.textContent = quizQuestions;

    //     document.body.appendChild(h1);

    //     console.log(h1);
    //     console.log("quiz questions");

    var answerListItems = document.querySelector("#answerList");

        for (var i = 0; i < Object.keys(quiz).length; i++) {
        var quizQuestions = quiz[i];

        console.log("I made it into the loop.");
        
        var h1 = document.createElement("h1");
   
        document.getElementById("questionLine").innerHTML=quiz.question1[0];

        var li = document.createElement("li");

        document.getElementById("answerList").innerHTML=quiz.question1[1];
      

        // li.textContent=quiz.question1[1];
        // li.innerHTML=quiz.question1[2];

        console.log("quiz questions");
    }
}

startButton.addEventListener("click", function () {
    console.log("Start!");
    quiztimer();
    runquiz();

})


