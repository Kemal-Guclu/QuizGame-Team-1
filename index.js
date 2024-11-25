const questionAnswer = document.getElementById("questionAnswer");
const mainContainer = document.getElementById("maincontainer");
const timerContainer = document.getElementById("timer-container");
const toSlow = document.createElement("div");
toSlow.classList.add("toSlow");


const time = document.getElementById("timer");
let count = 2;

//Funktion som räknar ned tiden som man har per fråga.
const btn = document.createElement("button");
        btn.classList.add("btn");
        btn.id = "btn"
        btn.textContent = "Continue";

        setInterval(function() {

    count--;
    if (count === 0) {

        clearInterval();
        questionAnswer.style.display = "none";
        timerContainer.style.display = "none";

        //Skapar paragrafer som berättar att tiden gick ut.
        const timesUp = document.createElement("p");
        timesUp.classList.add("times-up");
        timesUp.textContent = "Times up! You took too long...";

        const letsContinue = document.createElement("p");
        letsContinue.classList.add("lets-continue");
        letsContinue.textContent = "Press the button to continue";


        toSlow.appendChild(timesUp);
        toSlow.appendChild(letsContinue);
        mainContainer.appendChild(toSlow);

        
        toSlow.append(btn);

     
        //Skapar en knapp för att komma vidare till nästa fråga
        

        
    } else {
        time.innerHTML = count;
    }
    

    

    
    
    


}, 1000);













console.log("hello")