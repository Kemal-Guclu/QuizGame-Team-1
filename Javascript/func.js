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
        const response = await fetch("../quizgame.json");

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
    



     letski =4
     loadImagesMethod1()
     
  } else if (letski===4) {
    data.questions.forEach((questionData, questionIndex) => {
        const answerElement = document.getElementById(`answer${questionIndex + 1}`);
        answerElement.innerHTML = questionData[`question${questionIndex + 1}`].questionfive;
    
        
        questionmain.innerHTML= data.quizquestions[4].quizq
    });
    letski = 5;
    
}  else if (letski===5) {
    
  window.location = "./done.html"
  

}
  
    })
        
    })

  
    //bildladdare laddar bilder från json och skapar element som sedan tas  bort.
    async function loadImagesMethod1() {
        const container = document.getElementById('imagecontainer');
        const data =  await quizgamenames()
        
        let redericto4 = data.images[3];
        let redericto3 = data.images[2];
        let redericto2 = data.images[1];
        let redirect1 = data.images[0];
        
        if (letski === 0) {
           
            const existingImg = container.querySelector('.imagecontainer');
            if (existingImg) {
                existingImg.remove(); 
            }
        
            const imgElement = document.createElement('img');
            imgElement.src = redericto2.background;
            imgElement.className = 'imagecontainer';
            container.appendChild(imgElement);
        
        } else if (letski === 1) {
      
            const existingImg = container.querySelector('.imagecontainer');
            if (existingImg) {
                existingImg.remove(); 
            }
        
        
            const imgElement = document.createElement('img');
            imgElement.src = redericto2.background;
            imgElement.className = 'imagecontainer';
            container.appendChild(imgElement);
        }else if (letski === 2) {
      
            const existingImg = container.querySelector('.imagecontainer');
            if (existingImg) {
                existingImg.remove(); 
            }
        
        
            const imgElement = document.createElement('img');
            imgElement.src = redericto4.background;
            imgElement.className = 'imagecontainer';
            container.appendChild(imgElement);
        }else if (letski === 3) {
      
            const existingImg = container.querySelector('.imagecontainer');
            if (existingImg) {
                existingImg.remove(); 
            }
        
        
            const imgElement = document.createElement('img');
            imgElement.src = redericto3.background;
            imgElement.className = 'imagecontainer';
            container.appendChild(imgElement);
        }else if (letski === 4) {
      
            const existingImg = container.querySelector('.imagecontainer');
            if (existingImg) {
                existingImg.remove(); 
            }
        
        
            const imgElement = document.createElement('img');
            imgElement.src = redericto3.background;
            imgElement.className = 'imagecontainer';
            container.appendChild(imgElement);
        }else if (letski === 5) {
      
            const existingImg = container.querySelector('.imagecontainer');
            if (existingImg) {
                existingImg.remove(); 
            }
        
        
            const imgElement = document.createElement('img');
            imgElement.src = redericto2.background;
            imgElement.className = 'imagecontainer';
            container.appendChild(imgElement);
        }
        
            
    
           
      }
      const winlos = document.getElementById('winloses');
      const winData = JSON.parse(localStorage.getItem('winData')) || { wins: 0 }; 
      
      function updateWins() {
          winlos.innerHTML = `Wins: ${winData.wins} `; 
          localStorage.setItem('winData', JSON.stringify(winData)); 
      }
      
      async function truefalsey1() {
          const data = await quizgamenames();
          if (letski === 1 && data.answers[0].answer === data.questions[0].question1.question) {
              winData.wins += 1; 
          }
          updateWins();
      }
      
      async function truefalsey2() {
          const data = await quizgamenames();
          if (letski === 4 && data.answers[3].answer === data.questions[1].question2.questionfour) {
              winData.wins += 1; 
          }
          updateWins();
      }
      
      async function truefalsey3() {
          const data = await quizgamenames();
          if (letski === 3 && data.answers[2].answer === data.questions[2].question3.questiontree) {
              winData.wins += 1; 
          }
          updateWins();
      }
      
      async function truefalsey4() {
          const data = await quizgamenames();
          if (letski === 2 && data.answers[1].answer === data.questions[3].question4.questiontwo) {
              winData.wins += 1; 
          }
          updateWins();
      }
      
   
      




quizgamenames()


//går igenom alla answercontainer och lägger till namn 