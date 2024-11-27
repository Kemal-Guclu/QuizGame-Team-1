addEventListener ("DOMContentLoaded", (event) => {
    const card1 = document.getElementById("card1");
    const card2 = document.getElementById("card2");
    const card3 = document.getElementById("card3");
    const card4 = document.getElementById("card4");

    card1.addEventListener("click" , redirect);
    card2.addEventListener("click" , redirect);
    card3.addEventListener("click" , redirect);
    card4.addEventListener("click" , redirect);
})

async function redirect(event) {
    window.location.href = "../HTML/questions.html";
}


