addEventListener("DOMContentLoaded", (event) => {
  renderCards();
  card1.addEventListener("click", renderCards);
});

async function redirect(event) {
  window.location.href = "./questions.html?quizid=1";
}
