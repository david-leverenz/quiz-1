var quiz = [{
    question: "The condition in an if/else statement is enclosed with ___________.",
    answers: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    correct: 2,
},
{
    question: "Commonly used data types DO NOT include:",
    answers: ["strings","booleans","numbers","alerts"],
    correct: 3,
}]

var startButton = document.querySelector(".start-button")
var timer = document.querySelector("#timer");
var secondsLeft = 5;

startButton.addEventListener("click", function() {
    console.log("Start!");
    quiztimer();

})

function quiztimer(){
    var timerInterval = setInterval(function() {
secondsLeft--;
timer.textContent = "Time: " + secondsLeft;
if(secondsLeft===0) {
    clearInterval(timerInterval);
    console.log("Timer done!");
}
 }, 1000);
}