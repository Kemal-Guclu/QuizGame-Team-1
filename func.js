const answer1= document.getElementById('answer1')
const answer2= document.getElementById('answer2')
const answer3= document.getElementById('answer3')
const answer4= document.getElementById('answer4')
const imgcnt = document.getElementById('imagecontainer')
const answwers = document.querySelectorAll('.answer')
const questionmain = document.getElementById('questioncontainer')
let letski =0;
const params = new URLSearchParams(window.location.search);
const quizid = params.get('quizid');
console.log(quizid)
//fetchar json  filen där vi håller values 
async function quizgamenames() {
    try {
        
        const cachedData = localStorage.getItem("quizData");
        if (cachedData) {
         
            const data = JSON.parse(cachedData);
          
            return data; 
        }

        
        console.log("Fetching data from API");
        const response = await fetch("./quizgame.json");

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        localStorage.setItem("quizData", JSON.stringify(data));

       
        return data;
    } catch (error) {
        console.error("Error fetching quiz data:", error);
    }
}




// for each för alla


namesski()
loadImagesMethod1()
    
answer1.addEventListener('click',truefalsey1)
answer2.addEventListener('click',truefalsey2)
answer3.addEventListener('click',truefalsey3)
answer4.addEventListener('click',truefalsey4)

 




//första functionen som laddar in och byterrr ut alla placeholders.
async function namesski() {

  const data = await quizgamenames()
 
    if (letski === 0) {

        
        
       
          
          
        data.questions.forEach((questionData, questionIndex) => {
            const answerElement = document.getElementById(`answer${questionIndex + 1}`);
            answerElement.innerHTML = questionData[`question${questionIndex + 1}`].question;

           
            
            questionmain.innerHTML= data.quizquestions[0].quizq
           
            
        });
        
  
        
        letski = 1;
    
    
}
}

//lyssnare för alla knappar


//byter resten av placeholders åt oss
  answwers.forEach( function(itemss){
    itemss.addEventListener('click',async function(){

     const data =  await quizgamenames()
     loadImagesMethod1()

      //incrementera varje letski för att byta fråga och svarsalternativ
     if (letski===1) {
        
        data.questions.forEach((questionData, questionIndex) => {
            const answerElement = document.getElementById(`answer${questionIndex + 1}`);
            answerElement.innerHTML = questionData[`question${questionIndex + 1}`].questiontwo;

            questionmain.innerHTML= data.quizquestions[1].quizq   

         
         
        });
       
        letski = 2;
        loadImagesMethod1()
        
    } else if (letski===2) {
      data.questions.forEach((questionData, questionIndex) => {
          const answerElement = document.getElementById(`answer${questionIndex + 1}`);
          answerElement.innerHTML = questionData[`question${questionIndex + 1}`].questiontree;
          questionmain.innerHTML= data.quizquestions[2].quizq

          
      });
      letski = 3;
      loadImagesMethod1()
  } else if (letski===3) {
      data.questions.forEach((questionData, questionIndex) => {
          const answerElement = document.getElementById(`answer${questionIndex + 1}`);
          answerElement.innerHTML = questionData[`question${questionIndex + 1}`].questionfour;
         
          questionmain.innerHTML= data.quizquestions[3].quizq
      });
    



      letski = 3.14159265359
  } else if (letski === 3.14159265359) {
    window.location = "./done.html"
  }



  



    })
        
    })
} else {
  window.location.href = "./index.html"
}
  

  







quizgamenames()


//går igenom alla answercontainer och lägger till namn 