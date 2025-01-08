const maxGuesses = 4;
let currentGuess = 0;
let todayQuiz = {};
let quizDone = false;
const phraseDisplay = document.getElementById("phrase-display");
const feedback = document.getElementById("feedback");

const localStorageKey = 'hasSeenModal';

// starting logic
document.addEventListener("DOMContentLoaded", function () {
  const hasSeenModal = localStorage.getItem(localStorageKey);
  if (!hasSeenModal) {
    openModal();
    localStorage.setItem(localStorageKey, true);
  }

  const today = Date.now() - new Date().getTimezoneOffset() * 60 * 1000; 
  const dayNumber = Math.floor(today / (1000 * 60 * 60 * 24));
  const index = dayNumber % data.length;
  todayQuiz = data[index];

  document.getElementById("hint").innerHTML += ` ${todayQuiz.plot}`;
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
      .textContent.split(" ");
    let answerArray = todayQuiz.answer.split(" ");
    phraseArray[0] = answerArray[0];
    document.getElementById("phrase-display").textContent =
      phraseArray.join(" ");
  } else if (currentGuess === 3) {
    let phraseArray = document
      .getElementById("phrase-display")
      .textContent.split(" ");
    let answerArray = todayQuiz.answer.split(" ");
    phraseArray[phraseArray.length - 1] = answerArray[answerArray.length - 1];
    document.getElementById("phrase-display").textContent =
      phraseArray.join(" ");
  } else if (currentGuess === maxGuesses) {
    document.getElementById("phrase-display").textContent = todayQuiz.answer;
  }
}

// instructions modal
function openModal() {
  const modal = document.getElementById("how-to-play-modal");
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  const modal = document.getElementById("how-to-play-modal");
  modal.style.display = "none";
}

// Event listener for opening the modal
document.getElementById("openModalBtn").addEventListener("click", openModal);

// Event listener for closing the modal
document.getElementById("closeModalBtn").addEventListener("click", closeModal);

// Also close the modal if the user clicks outside of the modal content
window.addEventListener("click", (event) => {
  const modal = document.getElementById("how-to-play-modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

const data = [
  {
    plot: `Venturing through limitless realities, a brilliant mind traverses extraordinary dimensions, seeking to unravel the fundamental truths of existence amidst chaos.`,
    answer: `The Theory of Everything Everywhere All at Once`,
  },
  {
    plot: `In a small town setting, a frustrated man undergoes a profound change when he unexpectedly bonds with an enigmatic individual who reveals a world beyond appearances and challenges him to see life differently.`,
    answer: `American Beauty and the Beast`,
  },
  {
    plot: `Amidst a desolate and treacherous landscape, a relentless pursuit drives individuals towards redemption and retribution, balancing chaos with a search for personal salvation.`,
    answer: `Mad Max Fury Road to Perdition`,
  },
  {
    plot: `As society faces extinction, a guardian partnered with a secretive organization must fend off extraordinary cosmic threats to secure humanity’s future.`,
    answer: `Children of Men in Black`,
  },
  {
    plot: `Set against landscapes rich with opportunity and danger, individuals vie for precious resources while confronting the moral costs of their relentless ambition.`,
    answer: `There Will Be Blood Diamond`,
  },
  {
    plot: `In a tale of transformation and redemption, a steadfast creature and a misunderstood figure forge a deep bond through shared adventures, revealing the true essence of resilience in the face of adversity.`,
    answer: `Black Beauty and the Beast`,
  },
  {
    plot: `As a zombie apocalypse unfurls, a group of charismatic teachers inspires their students to seize the day and break societal norms, all while battling the undead with unorthodox defensive methods and unconventional wisdom.`,
    answer: `Shaun of the Dead Poets Society`,
  },
  {
    plot: `In an unexpected convergence of campus life and ancient martial arts intrigue, a group of unruly misfits inadvertently becomes involved with a mysterious clan, leading them on a journey filled with hidden alliances, humor, and unexpected heroism as they face a looming threat to their world.`,
    answer: `Animal House of Flying Daggers`,
  },
  {
    plot: `During a pivotal season of high school football, an unexpected body swap thrusts a mother and daughter into each other's roles, compelling them to tackle new challenges.`,
    answer: `Freaky Friday Night Lights`,
  },
  {
    plot: `In a tense exploration of identity and justice, a young individual attempting to navigate life while concealing their true identity crosses paths with a pair of rebellious detectives determined to uphold the law, leading to a journey of self-discovery and unexpected alliances.`,
    answer: `Bad Boys Don't Cry`,
  },
  {
    plot: `When chaos erupts in a city as museum exhibits mysteriously come to life each night, a vigilante hero and a bumbling night guard must team up to restore order and prevent an iconic villain from seizing control of history's greatest artifacts.`,
    answer: `The Dark Knight at the Museum`,
  },
  {
    plot: `A seasoned secret agent finds himself trapped in a skyscraper under siege, where he must team up with a resourceful NYPD officer to thwart a global terrorist threat and protect valuable secrets from falling into the wrong hands.`,
    answer: `No Time to Die Hard`,
  },
  {
    plot: `As the line between perception and reality blurs, a woman’s mysterious disappearance intertwines with self-discovery and the battle against inner turmoil.`,
    answer: `Gone Girl Interrupted`,
  },
  {
    plot: `In a quest across vast celestial bodies, explorers face a world transformed by intelligent beings, uncovering secrets that challenge the very notion of humanity’s place in the universe.`,
    answer: `Treasure Planet of the Apes`,
  },
  {
    plot: `A figure of immense strength finds unexpected alliance and support amidst a community bound by resilience and compassion, discovering the true essence of invulnerability and human connection.`,
    answer: `Man of Steel Magnolias`,
  },
];

// some like it hot fuzz