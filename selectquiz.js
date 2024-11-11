
document.addEventListener("DOMContentLoaded", (Event) => {

    const card1 = document.getElementById("card1");
    document.addEventListener("click" , card1selected);

});

let quiz = 0

function card1selected () {
    quiz = 1
    redirect ()
}

function redirect () {
    location.href = "questions.html"
}

export default quiz;