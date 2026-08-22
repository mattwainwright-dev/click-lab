let headline = document.getElementById("headline-1");
console.log(headline);
let answer1 = document.getElementById("answer-1");
let answer2 = document.getElementById("answer-2");
let answer3 = document.getElementById("answer-3");
let feedback = document.getElementById("feedback-1");

answer1.addEventListener("click", function () {
    feedback.textContent = "Correct!";
});

answer2.addEventListener("click", function() {
    feedback.textContent = "Nope — try again!";
});

answer3.addEventListener("click", function() {
    feedback.textContent = "Not this one!";
});