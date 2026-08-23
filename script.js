let headline = document.getElementById("headline-1");
let answer1 = document.getElementById("answer-1");
let answer2 = document.getElementById("answer-2");
let answer3 = document.getElementById("answer-3");
let answer4 = document.getElementById("answer-4");
let answer5 = document.getElementById("answer-5");
let answer6 = document.getElementById("answer-6");
let answer7 = document.getElementById("answer-7");
let answer8 = document.getElementById("answer-8");
let answer9 = document.getElementById("answer-9");
let hintButton = document.getElementById("hint-button");
let hintText = document.getElementById("hint-text");
let score = 0;
let scoreText = document.getElementById("score-text");
let answeredCorrectly = false;
let answeredCorrectly2 = false;
let answeredCorrectly3 = false;

let feedback = document.getElementById("feedback-1");
let feedback2 = document.getElementById("feedback-2");
let feedback3 = document.getElementById("feedback-3");

answer1.addEventListener("click", function () {
    feedback.textContent = "Correct!";
    answer1.classList.add("correct-answer");

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

answer4.addEventListener("click", function() {
    feedback2.textContent = "Not this one!";
});

answer5.addEventListener("click", function() {
    feedback2.textContent = "Correct!";
    answer5.classList.add("correct-answer");

    if (answeredCorrectly2 === false) {
        score = score + 1;
        scoreText.textContent = "Score: " + score;
        answeredCorrectly2 = true;
    }
});

answer6.addEventListener("click", function() {
    feedback2.textContent = "Nope — try again!";
});

answer7.addEventListener("click", function() {
    feedback3.textContent = "Not this one!";
});

answer8.addEventListener("click", function() {
    feedback3.textContent = "Correct!";
    answer8.classList.add("correct-answer");

    if (answeredCorrectly3 === false) {
        score = score + 1;
        scoreText.textContent = "Score: " + score;
        answeredCorrectly3 = true;
    }
});

answer9.addEventListener("click", function() {
    feedback3.textContent = "Nope — try again!";
});

hintButton.addEventListener("click", function () {
    hintText.textContent = "Think about the band that released Take Me Back to Eden.";
});
