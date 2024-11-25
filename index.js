const questionAnswer = document.getElementById("questionAnswer");
const mainContainer = document.getElementById("maincontainer");
const time = document.getElementById("timer");
const timerContainer = document.getElementById("timer-container");
const toSlow = document.createElement("div");
toSlow.classList.add("toSlow");


//Nedräknarens starttid
let count = 500;

//Nedräknings funktion
setInterval(function() {

count--;

    //När nedräknaren når noll, skapas dessa element
    if (count === 0) {
        
        //döljer element
        questionAnswer.style.display = "none";
        timerContainer.style.display = "none";
        imgcnt.style.display = "none";

        //Paragrafer skapas
        const timesUp = document.createElement("p");
        timesUp.classList.add("times-up");
        timesUp.textContent = "Times up! You took too long...";

        const letsContinue = document.createElement("p");
        letsContinue.classList.add("lets-continue");
        letsContinue.textContent = "Try again? or select another category!";

        //En div med 2st knappar skapas
        const timeOutButtons = document.createElement("div");
        timeOutButtons.classList.add("buttons");

        const btnTryAgain = document.createElement("button");
        btnTryAgain.classList.add("btn");
        btnTryAgain.id = "btnTryAgain";
        btnTryAgain.textContent = "Try Again";

        const btnSelectCategory = document.createElement("button");
        btnSelectCategory.classList.add("btn");
        btnSelectCategory.id = "btnSelectCategory";
        btnSelectCategory.innerHTML = "Change category";

        //Lägger till de nyligen skapade objekten i specifik container
        toSlow.append(timesUp);
        toSlow.append(letsContinue);
        toSlow.append(timeOutButtons);
        mainContainer.append(toSlow);
        timeOutButtons.append(btnTryAgain, btnSelectCategory);
        
   
    } else {
        time.innerHTML = count;
    }
    

    //Knapparna som berättar vart man navigeras
    btnTryAgain.addEventListener("click", function() {

        window.location.href = "./questions.html";
    });

    btnSelectCategory.addEventListener("click", function() {
        window.location.href = "./index.html"
    })


}, 1000);