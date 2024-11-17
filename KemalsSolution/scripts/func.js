const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");
const answwers = document.querySelectorAll(".answercontainer");

const params = new URLSearchParams(window.location.search);
const quizid = params.get("quizid");
console.log(quizid);

let letski = 0;

//fetchar json  filen där vi håller values
async function quizgamenames() {
  try {
    const response = await fetch("./quizgame.json");
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    console.log(data);
    console.log(data.questions.questionone);
    return data;
  } catch (error) {}
}

// for each för alla
if (quizid == 1) {
  answwers.forEach(function (itemss) {
    itemss.addEventListener("click", async function () {
      const data = await quizgamenames();

      //incrementera varje letski för att öka
      if (letski === 0) {
        data.questions.forEach((questionData, questionIndex) => {
          const answerElement = document.getElementById(
            `answer${questionIndex + 1}`
          );
          answerElement.innerHTML =
            questionData[`question${questionIndex + 1}`].question;
        });
        letski = 1;
      } else if (letski === 1) {
        data.questions.forEach((questionData, questionIndex) => {
          const answerElement = document.getElementById(
            `answer${questionIndex + 1}`
          );
          answerElement.innerHTML =
            questionData[`question${questionIndex + 1}`].value;
        });
        letski = 2;
      } else if (letski === 2) {
        data.questionsx.forEach((questionData, questionIndex) => {
          const answerElement = document.getElementById(
            `answer${questionIndex + 1}`
          );
          answerElement.innerHTML =
            questionData[`question${questionIndex + 1}`].question;
        });
        letski = 3;
      } else if (letski === 3) {
        data.questionsx.forEach((questionData, questionIndex) => {
          const answerElement = document.getElementById(
            `answer${questionIndex + 1}`
          );
          answerElement.innerHTML =
            questionData[`question${questionIndex + 1}`].quesstion;
        });

        letski = 3.14159265359;
      } else if (letski === 3.14159265359) {
        window.location = "./done.html";
      }
    });
  });
} else {
  window.location.href = "./index.html";
}

quizgamenames();

//går igenom alla answercontainer och lägger till namn
