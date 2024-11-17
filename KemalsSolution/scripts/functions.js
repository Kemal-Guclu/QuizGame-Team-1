// variabler
let correctAnswer = "";
let askedCount = 0;
let correctScore = 0;
let totalQuestions = 10;

window.onload = function () {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");
  console.log(category);
  loadQuestions(category);
};

// function för att välja en Category

function chooseCategory(category) {
  //Navigera till quiz.html och skicka med category som query parameter
  window.location.href = `./quiz.html?category=${category}`;
}

// Function för att hämta quiz category från URL query parameter
async function loadQuestions(category) {
  //Hämta 10 frågor från API för att visa i quiz.html
  let APIUrl = "";
  if (category === "general") {
    APIUrl = "https://opentdb.com/api.php?amount=10&category=9";
    console.log(APIUrl);
  } else if (category === "computers") {
    APIUrl = "https://opentdb.com/api.php?amount=10&category=18";
  } else if (category === "math") {
    APIUrl = "https://opentdb.com/api.php?amount=10&category=19";
  } else if (category === "vehicles") {
    APIUrl = "https://opentdb.com/api.php?amount=10&category=28";
  } else if (category === "pokemon") {
    categoryQuestions = "quizgame.json";
  }
  try {
    const response = await fetch(APIUrl);
    console.log(response);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    console.log(data.results[0]);
    console.log(data.results[0].question);
    console.log(data);
    renderQuizContent(data.results[0]);
  } catch (error) {}
  renderQuizContent(category);
}

function renderQuizContent(data) {
  correctAnswer = data.correct_answer;
  let incorrectAnswers = data.incorrect_answers;
  console.log(incorrectAnswers);
  console.log(correctAnswer);
  let optionsList = incorrectAnswers;
  console.log(optionsList);
  optionsList.splice(
    Math.floor(Math.random() * (optionsList.length + 1)),
    0,
    correctAnswer
  );
  const categoryContainer = document.getElementById("main-container");

  categoryContainer.innerHTML = "";

  switch (data.category) {
    case "General Knowledge":
      console.log(optionsList);
      categoryContainer.innerHTML = `
      <div class="imagecontainer">
        <img src="./images/General-Knowledge.jpg" alt="General knowledge">
      </div>
      <div class="questioncontainer">
          <h3 class="question">${data.question}</h3>
      </div>
        <ul class="answersection">
          </ul>`;
      renderOptionsList(optionsList);
      break;
    case "Science: Computers":
      categoryContainer.innerHTML = `
      <div class="imagecontainer">
        <img src="./images/computer.jpg" alt="Computers">
      </div>
      <div class="questioncontainer">
          <h3 class="question">${data.question}</h3>
      </div>
      <ul class="answersection">
          </ul>`;
      renderOptionsList(optionsList);
      break;
    case "Science: Mathematics":
      categoryContainer.innerHTML = `
      <div class="imagecontainer">
        <img src="./images/Math.webp" alt="Mathematics">
      </div>
      <div class="questioncontainer">
          <h3 class="question">${data.question}</h3>
      </div>
    <ul class="answersection">
          </ul>`;
      renderOptionsList(optionsList);
      break;
    case "Vehicles":
      categoryContainer.innerHTML = `
      <div class="imagecontainer">
        <img src="./images/vehicles.jpg" alt="Vehicles">
      </div>
      <div class="questioncontainer">
          <h3 class="question">${data.question}</h3>
      </div>
      <ul class="answersection">
          </ul>`;
      renderOptionsList(optionsList);
      break;
    case "pokemon":
      categoryContainer.innerHTML = `
      <div class="imagecontainer">
        <img src="./images/pokemon.jpg" alt="Pokemon">
      </div>
      <div class="questioncontainer">
          <h3 class="question">${data.question}</h3>
      </div>
      <ul class="answersection">
          </ul>`;
      renderOptionsList(optionsList);
      break;
  }
}

function renderOptionsList(optionsList) {
  const options = document.querySelector(".answersection");
  options.innerHTML = "";
  optionsList.forEach((option) => {
    const optionElement = document.createElement("li");
    optionElement.classList.add("answercontainer");
    optionElement.innerHTML = `<h4 class="answer" id="answer1">${option}</h4>`;
    options.appendChild(optionElement);
  });
}

function showQuestion(data) {
  //insert the correct answer randomly in the options list
  _question.innerHTML = `${data.question}  <br> <span class="category">${data.category} </span>`;

  selectOption();
}

// quiz.forEach((quiz) => {
//   const quizCard = document.createElement("div");
//   quizCard.innerHTML = `
//     <div class="card" style="width: 18rem;">
//       <img src="${quiz.image}" class="card-img-top" alt="...">
//       <div class="card-body">
//         <h5 class="card-title">${quiz.title}</h5>
//         <p class="card-text">${quiz.description}</p>
//         <a href="./questions.html?quizid=${quiz.id}" class="btn btn-primary">Start Quiz</a>
//       </div>
//     </div>
//     `;
//   quizContainer.appendChild(quizCard);
// });

// const answer1 = document.getElementById("answer1");
// const answer2 = document.getElementById("answer2");
// const answer3 = document.getElementById("answer3");
// const answer4 = document.getElementById("answer4");
// const answwers = document.querySelectorAll(".answercontainer");

// const params = new URLSearchParams(window.location.search);
// const category = params.get("category");
// console.log(category);

let letski = 0;

//fetchar json  filen där vi håller values
// async function quizgamenames() {
//   try {
//     const response = await fetch("./quizgame.json");
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     const data = await response.json();
//     console.log(data);
//     console.log(data.questions.questionone);
//     return data;
//   } catch (error) {}
// }

// // for each för alla
// if (quizid == 1) {
//   answwers.forEach(function (itemss) {
//     itemss.addEventListener("click", async function () {
//       const data = await quizgamenames();

//       //incrementera varje letski för att öka
//       if (letski === 0) {
//         data.questions.forEach((questionData, questionIndex) => {
//           const answerElement = document.getElementById(
//             `answer${questionIndex + 1}`
//           );
//           answerElement.innerHTML =
//             questionData[`question${questionIndex + 1}`].question;
//         });
//         letski = 1;
//       } else if (letski === 1) {
//         data.questions.forEach((questionData, questionIndex) => {
//           const answerElement = document.getElementById(
//             `answer${questionIndex + 1}`
//           );
//           answerElement.innerHTML =
//             questionData[`question${questionIndex + 1}`].value;
//         });
//         letski = 2;
//       } else if (letski === 2) {
//         data.questionsx.forEach((questionData, questionIndex) => {
//           const answerElement = document.getElementById(
//             `answer${questionIndex + 1}`
//           );
//           answerElement.innerHTML =
//             questionData[`question${questionIndex + 1}`].question;
//         });
//         letski = 3;
//       } else if (letski === 3) {
//         data.questionsx.forEach((questionData, questionIndex) => {
//           const answerElement = document.getElementById(
//             `answer${questionIndex + 1}`
//           );
//           answerElement.innerHTML =
//             questionData[`question${questionIndex + 1}`].quesstion;
//         });

//         letski = 3.14159265359;
//       } else if (letski === 3.14159265359) {
//         window.location = "./done.html";
//       }
//     });
//   });
// } else {
//   window.location.href = "./index.html";
// }
