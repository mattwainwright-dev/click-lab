// Get quiz elements from the HTML
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

let questionCard1 = document.getElementById("question-card-1");
let questionCard2 = document.getElementById("question-card-2");
let questionCard3 = document.getElementById("question-card-3");
let questionCard4 = document.getElementById("question-card-4");

// Start the quiz with only Question 1 visible
questionCard2.style.display = "none";
questionCard3.style.display = "none";
questionCard4.style.display = "none";

let hintButton = document.getElementById("hint-button");
let hintText = document.getElementById("hint-text");

let scoreText = document.getElementById("score-text");
let startOver = document.getElementById("start-over");

let feedback = document.getElementById("feedback-1");
let feedback2 = document.getElementById("feedback-2");
let feedback3 = document.getElementById("feedback-3");

let answer10 = document.getElementById("answer-10");
let answer11 = document.getElementById("answer-11");
let feedback4 = document.getElementById("feedback-4");
let knifePrtyClip = new Audio("knife-prty-clip.mp4");

// Track the score and whether each question was answered correctly
let score = 0;
let answeredCorrectly = false;
let answeredCorrectly2 = false;
let answeredCorrectly3 = false;
let answeredBonus = false;

// Question 1 answer buttons
answer1.addEventListener("click", function () {
    feedback.textContent = "Correct!";
    answer1.classList.add("correct-answer");

    if (answeredCorrectly === false) {
        score = score + 1;
        scoreText.textContent = "Score: " + score;
        answeredCorrectly = true;
    }

    questionCard1.style.display = "none";
    questionCard2.style.display = "block";
});

answer2.addEventListener("click", function() {
    feedback.textContent = "Nope — try again!";
    questionCard1.style.display = "none";
    questionCard2.style.display = "block";
});

answer3.addEventListener("click", function() {
    feedback.textContent = "Not this one!";
    questionCard1.style.display = "none";
    questionCard2.style.display = "block";
});

// Question 2 answer buttons
answer4.addEventListener("click", function() {
    feedback2.textContent = "Not this one!";
    questionCard2.style.display = "none";
    questionCard3.style.display = "block";
});

answer5.addEventListener("click", function() {
    feedback2.textContent = "Correct!";
    answer5.classList.add("correct-answer");

    if (answeredCorrectly2 === false) {
        score = score + 1;
        scoreText.textContent = "Score: " + score;
        answeredCorrectly2 = true;
    }

    questionCard2.style.display = "none";
    questionCard3.style.display = "block";
});

answer6.addEventListener("click", function() {
    feedback2.textContent = "Nope — try again!";
    questionCard2.style.display = "none";
    questionCard3.style.display = "block";
});

// Question 3 answer buttons
answer7.addEventListener("click", function() {
    feedback3.textContent = "Not this one!";
    questionCard3.style.display = "none";
    questionCard4.style.display = "block";
});

answer8.addEventListener("click", function() {
    feedback3.textContent = "Correct!";
    answer8.classList.add("correct-answer");

    if (answeredCorrectly3 === false) {
        score = score + 1;
        scoreText.textContent = "Score: " + score;
        answeredCorrectly3 = true;
    }
    questionCard3.style.display = "none";
    questionCard4.style.display = "block";
});

answer9.addEventListener("click", function() {
    feedback3.textContent = "Nope — try again!";
   questionCard3.style.display = "none";
   questionCard4.style.display = "block"; 
});

// Bonus True/False question
answer10.addEventListener("click", function() {
    feedback4.textContent = 'Nope! The official title is "Knife Prty."';
    answeredBonus = true;
});

answer11.addEventListener("click", function() {
    feedback4.textContent = 'Correct! The official title is "Knife Prty."';
    answer11.classList.add("correct-answer");

    if (answeredBonus === false) {
        score = score + 1;
        scoreText.textContent = "Score: " + score;
        answeredBonus = true;
        knifePrtyClip.currentTime = 0;
        knifePrtyClip.play();
    }
});

// Show a hint for Question 1
hintButton.addEventListener("click", function () {
    hintText.textContent = "Think about the band that released Take Me Back to Eden.";
});

// Reset the quiz so the user can play again
startOver.addEventListener("click", function() {
    score = 0;
    scoreText.textContent = "Score: " + score;

    answeredCorrectly = false;
    answeredCorrectly2 = false;
    answeredCorrectly3 = false;
    answeredBonus = false;

    feedback.textContent = "";
    feedback2.textContent = "";
    feedback3.textContent = "";
    feedback4.textContent = "";

    answer1.classList.remove("correct-answer");
    answer5.classList.remove("correct-answer");
    answer8.classList.remove("correct-answer");
    answer11.classList.remove("correct-answer");

    questionCard1.style.display = "block";
    questionCard2.style.display = "none";
    questionCard3.style.display = "none";
    questionCard4.style.display = "none";
    knifePrtyClip.pause();
    knifePrtyClip.currentTime = 0;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});