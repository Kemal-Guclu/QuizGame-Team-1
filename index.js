// https://opentdb.com/api.php?amount=10
// 10 questions

const _question = document.getElementById("question");
const _options = document.querySelector(".quiz-options");
const _correctScore = document.getElementById("correct-score");
const _totalQuestions = document.getElementById("total-questions");
const _checkBtn = document.getElementById("check-answer");
const _playAgainBtn = document.getElementById("play-again");
const _result = document.getElementById("result");

let correctAnswer = "";
let askedCount = 0;
let correctScore = 0;
let totalQuestions = 10;

// event listeners
function eventListeners() {
  _checkBtn.addEventListener("click", checkAnswer);
}
document.addEventListener("DOMContentLoaded", () => {
  loadQuestions();
  eventListeners();
  _totalQuestions.textContent = totalQuestions;
  _correctScore.textContent = correctScore;
});

// Load the questions from the API

async function loadQuestions() {
  const APIUrl = "https://opentdb.com/api.php?amount=10";
  const response = await fetch(APIUrl);
  const data = await response.json();
  //console.log(data.results[0]);

  showQuestion(data.results[0]);
}

function showQuestion(data) {
  correctAnswer = data.correct_answer;
  let incorrectAnswers = data.incorrect_answers;
  let optionsList = incorrectAnswers;
  optionsList.splice(
    Math.floor(Math.random() * (optionsList.length + 1)),
    0,
    correctAnswer
  );
  //insert the correct answer randomly in the options list
  _question.innerHTML = `${data.question}  <br> <span class="category">${data.category} </span>`;
  _options.innerHTML = "";
  optionsList.forEach((option, index) => {
    _options.innerHTML += `<li> ${index + 1}. <span>${option}</span> </li>`;
  });
  selectOption();
}

//options selection
function selectOption() {
  _options.querySelectorAll("li").forEach((option) => {
    option.addEventListener("click", () => {
      if (_options.querySelector(".selected")) {
        const activeOption = _options.querySelector(".selected");
        activeOption.classList.remove("selected");
      }
      option.classList.add("selected");
    });
  });
}

// answer checking
function checkAnswer() {
  _checkBtn.disabled = true;
  if (_options.querySelector(".selected")) {
    let selectedAnswer = _options.querySelector(".selected span").textContent;

    if (selectedAnswer == correctAnswer) {
      console.log(correctAnswer);
      console.log(selectedAnswer);

      correctScore++;
      _correctScore.textContent = correctScore;
      _result.innerHTML = `<p> <i class="fas fa-check"></i> Correct Answer! </p>`;
    } else {
      _result.innerHTML = `<p> <i class="fas fa-times"></i> Incorrect Answer! <small><b> Correct Answer: </b> ${correctAnswer}</small></p>`;

      console.log(correctScore);
    }
  }
}
