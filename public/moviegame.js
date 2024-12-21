const maxGuesses = 4;
let currentGuess = 0;
let todayQuiz = {};
let quizDone = false;
const phraseDisplay = document.getElementById("phrase-display");
const feedback = document.getElementById("feedback");

document.addEventListener("DOMContentLoaded", function () {
  const today = new Date();
  const dayNumber = Math.floor(today / (1000 * 60 * 60 * 24));
  const index = dayNumber % data.length;
  todayQuiz = data[index];

  document.getElementById("hint").innerHTML += todayQuiz.plot;
  document.getElementById("phrase-display").textContent = buildAnswerArea(
    todayQuiz.answer
  );
});

// main guess logic
document.getElementById("guess-button").addEventListener("click", handleGuess);
document
  .getElementById("guess-input")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      handleGuess();
    }
  });

function handleGuess(event) {
  const userGuess = document.getElementById("guess-input").value.toLowerCase();

  if (userGuess == todayQuiz.answer.toLowerCase()) {
    phraseDisplay.textContent = todayQuiz.answer;
    feedback.textContent =
      "Congratulations! You guessed the phrase. Try again tomorrow!";
    feedback.style.color = "green";
    quizDone = true;
    disableInputs();
  } else {
    currentGuess++;
    revealPortion();
    if (currentGuess < maxGuesses) {
      feedback.textContent = `Incorrect guess! You have ${
        maxGuesses - currentGuess
      } guesses left.`;
    } else {
      quizDone = true;
      disableInputs();
      feedback.textContent = `You've lost! The title was: "${todayQuiz.answer}". Try again tomorrow!`;
    }
  }

  document.getElementById("guess-input").value = "";
}

const buildAnswerArea = (phrase) => {
  let answerArea = "";
  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i] == " ") {
      answerArea += " ";
    } else {
      answerArea += "_";
    }
  }

  return answerArea.trim();
};

const disableInputs = () => {
  document.getElementById("guess-button").disabled = true;
  document.getElementById("guess-input").disabled = true;
  document.getElementById("guess-input").placeholder = "Game Over!";
};

function revealPortion() {
  if (currentGuess === 1) {
    let phraseArray = document
      .getElementById("phrase-display")
      .textContent.split("");
    phraseArray[0] = todayQuiz.answer[0];
    phraseArray[phraseArray.length - 1] =
      todayQuiz.answer[todayQuiz.answer.length - 1];
    document.getElementById("phrase-display").textContent =
      phraseArray.join("");
  } else if (currentGuess === 2) {
    let phraseArray = document
      .getElementById("phrase-display")
      .textContent.split("");
    phraseArray[1] = todayQuiz.answer[1];
    phraseArray[phraseArray.length - 2] =
      todayQuiz.answer[todayQuiz.answer.length - 2];
    document.getElementById("phrase-display").textContent =
      phraseArray.join("");
  } else if (currentGuess === 3) {
    let phraseArray = document
      .getElementById("phrase-display")
      .textContent.split("");
    phraseArray[2] = todayQuiz.answer[2];
    document.getElementById("phrase-display").textContent =
      phraseArray.join("");
  } else if (currentGuess === maxGuesses) {
    document.getElementById("phrase-display").textContent = todayQuiz.answer;
  }
}

const data = [
  {
    plot: "Venturing through limitless realities, a brilliant mind traverses extraordinary dimensions, seeking to unravel the fundamental truths of existence amidst chaos.",
    answer: "The Theory of Everything Everywhere All at Once",
  },
  {
    plot: "As the line between perception and reality blurs, a woman’s mysterious disappearance intertwines with self-discovery and the battle against inner turmoil.",
    answer: "Gone Girl Interrupted",
  },
  {
    plot: "As society faces extinction, a guardian partnered with a secretive organization must fend off extraordinary cosmic threats to secure humanity’s future.",
    answer: "Children of Men in Black",
  },
  {
    plot: "Set against landscapes rich with opportunity and danger, individuals vie for precious resources while confronting the moral costs of their relentless ambition.",
    answer: "There Will Be Blood Diamond",
  },
  {
    plot: "In a quest across vast celestial bodies, explorers face a world transformed by intelligent beings, uncovering secrets that challenge the very notion of humanity’s place in the universe.",
    answer: "Treasure Planet of the Apes",
  },
  {
    plot: "In a tale of transformation and redemption, a steadfast creature and a misunderstood figure forge a deep bond through shared adventures, revealing the true essence of resilience in the face of adversity.",
    answer: "Black Beauty and the Beast",
  },
  {
    plot: "Amidst a desolate and treacherous landscape, a relentless pursuit drives individuals towards redemption and retribution, balancing chaos with a search for personal salvation.",
    answer: "Mad Max Fury Road to Perdition",
  },
  {
    plot: "A figure of immense strength finds unexpected alliance and support amidst a community bound by resilience and compassion, discovering the true essence of invulnerability and human connection.",
    answer: "Man of Steel Magnolias",
  },
];
