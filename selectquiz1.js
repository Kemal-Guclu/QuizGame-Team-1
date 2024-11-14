addEventListener ("DOMContentLoaded", (event) => {
    const card1 = document.getElementById("card1");
    card1.addEventListener("click" , redirect);

})

async function redirect(event) {
    window.location.href = "./questions.html?quizid=1";        
}


