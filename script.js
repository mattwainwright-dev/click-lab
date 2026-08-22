let headline = document.getElementById("headline-1");
console.log(headline);
let answer1 = document.getElementById("answer-1");
let answer2 = document.getElementById("answer-2");
let answer3 = document.getElementById("answer-3");
let hintButton = document.getElementById("hint-button");
let hintText = document.getElementById("hint-text");
let score = 0;
let scoreText = document.getElementById("score-text");
let answeredCorrectly = false;

let feedback = document.getElementById("feedback-1");

answer1.addEventListener("click", function () {
    feedback.textContent = "Correct!";

    if (answeredCorrectly === false) {
    score = score + 1;
    scoreText.textContent = "Score: " + score;
    answeredCorrectly = true;
    }
});

answer2.addEventListener("click", function() {
    feedback.textContent = "Nope — try again!";
});

answer3.addEventListener("click", function() {
    feedback.textContent = "Not this one!";
});

hintButton.addEventListener("click", function () {
    hintText.textContent = "Think about the band that released Take Me Back to Eden.";
});