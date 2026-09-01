// Get quiz elements from the HTML
let headline = document.getElementById("headline-1");

let answer1 = document.getElementById("q1-a1");
let answer2 = document.getElementById("q1-a2");
let answer3 = document.getElementById("q1-a3");
let answer4 = document.getElementById("q2-a1");
let answer5 = document.getElementById("q2-a2");
let answer6 = document.getElementById("q2-a3");
let answer7 = document.getElementById("q3-a1");
let answer8 = document.getElementById("q3-a2");
let answer9 = document.getElementById("q3-a3");

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

let feedback = document.getElementById("q1-feedback");
let feedback2 = document.getElementById("q2-feedback");
let feedback3 = document.getElementById("q3-feedback");

let answer10 = document.getElementById("answer-10");
let answer11 = document.getElementById("answer-11");
let feedback4 = document.getElementById("feedback-4");
let knifePrtyClip = new Audio("knife-prty-clip.mp4");
knifePrtyClip.volume = 0.35;

// Track the score and whether each question was answered correctly
let score = 0;
let answeredCorrectly = false;
let answeredCorrectly2 = false;
let answeredCorrectly3 = false;
let answeredBonus = false;

let questionSet = [
  {
    prompt: 'Which band released "The Summoning"?',
    answers: ["Sleep Token", "Deftones", "Bad Omens"],
    correctAnswer: "Sleep Token"
  },
  {
    prompt: 'Which band released "Knife Prty"?',
    answers: ["Sleep Token", "Deftones", "Bad Omens"],
    correctAnswer: "Deftones"
  },
  {
    prompt: 'Which band released "Impose"?',
    answers: ["Deftones", "Bad Omens", "Sleep Token"],
    correctAnswer: "Bad Omens"
  }
];

function checkAnswer(button, question) {
  if (button.value === question.correctAnswer) {
    return "Correct!";
  } else {
    return "Not that one - the answer is " + question.correctAnswer + ".";
  }
}

let number = 0;

questionSet.forEach(function (question) {
  number = number + 1;
  let questionNumber = number;

  let prompt = document.getElementById("q" + number + "-prompt");
  let button1 = document.getElementById("q" + number + "-a1");
  let button2 = document.getElementById("q" + number + "-a2");
  let button3 = document.getElementById("q" + number + "-a3");
  let questionFeedback = document.getElementById(
    "q" + number + "-feedback"
  );

  prompt.textContent = question.prompt;

  button1.textContent = question.answers[0];
  button1.value = question.answers[0];

  button2.textContent = question.answers[1];
  button2.value = question.answers[1];

  button3.textContent = question.answers[2];
  button3.value = question.answers[2];

  function handleAnswer(button) {
    questionFeedback.textContent = checkAnswer(button, question);

    if (button.value === question.correctAnswer) {
      button.classList.add("correct-answer");

      if (questionNumber === 1 && answeredCorrectly === false) {
        score = score + 1;
        answeredCorrectly = true;
      }

      if (questionNumber === 2 && answeredCorrectly2 === false) {
        score = score + 1;
        answeredCorrectly2 = true;
      }

      if (questionNumber === 3 && answeredCorrectly3 === false) {
        score = score + 1;
        answeredCorrectly3 = true;
      }

      scoreText.textContent = "Score: " + score;
    }

    if (questionNumber === 1) {
      questionCard1.style.display = "none";
      questionCard2.style.display = "block";
    }

    if (questionNumber === 2) {
      questionCard2.style.display = "none";
      questionCard3.style.display = "block";
    }

    if (questionNumber === 3) {
      questionCard3.style.display = "none";
      questionCard4.style.display = "block";
      knifePrtyClip.currentTime = 0;
      knifePrtyClip.play();
    }
  }

  button1.addEventListener("click", function () {
    handleAnswer(button1);
  });

  button2.addEventListener("click", function () {
    handleAnswer(button2);
  });

  button3.addEventListener("click", function () {
    handleAnswer(button3);
  });
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