// var quiz = {
//     question1: ["The condition in an if/else statement is enclosed with ___________.", "quotes", "curly brackets", "parenthesis", "square brackets", 2],

//     question2: ["Commonly used data types DO NOT include:", "strings", "booleans", "numbers", "alerts", 3]
// }

    // question1: {question: "The condition in an if/else statement is enclosed with ___________.", answer1: "quotes", answer2: "curly brackets", answer3: "parenthesis", answer4: "square brackets", correct: 2,},

    // question2: {question: "Commonly used data types DO NOT include:", answer1: "strings", answer2: "booleans", answer3: "numbers", answer4: "alerts", correct: 3,}

// }
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

console.log("Quiz length: " + Object.keys(quiz).length);

var startButton = document.querySelector(".start-button");
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
runquiz();
}

var QI = 0;
function askQuestion() {
    console.log(quiz[0].question);
    var questionTitle = document.getElementById("question-title");
    questionTitle.textContent=quiz[QI].question;

    quiz[QI].answers.forEach(function(answer) {
        var button=document.createElement("button");
    button.textContent = answer;
    button.setAttribute("value", answer);
    button.addEventListener("click", function (e){
        var userSelection=e.target.value;
        if(userSelection === quiz[QI].correct){
            console.log("correct");
            } else {
                console.log("incorrect");
            } QI++
            askQuestion();
    })
    document.getElementById("choices").append(button);
    })
}

// var questions = document.querySelector("h1");
// var answeroptions = document.querySelector("#answerList");

function runquiz() {

    var startScreen = document.getElementById("start-screen");
    startScreen.setAttribute("class", "hide");

    document.getElementById("questions").removeAttribute("class");
    askQuestion()

    // create another div in html for questons just like before
    // queestion class show


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

startButton.addEventListener("click", function () {
    console.log("Start!");
    quiztimer();
    // runquiz();

})
// gameOver()

// function gameOver()
//     var scoreButton = document.querySelector(".score-button");
// scoreButton.addEventListener("click", function () {
//         console.log("Score!");

// var form = document.createElement("initials")
// initials.setAttribute("type","text");