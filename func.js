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
async function quizgamenames() {try {

    const response = await fetch("./quizgame.json")
    if(!response.ok){
        throw new Error(response.status)

    }
    const data = await response.json()
  console.log (data)
  console.log(data.questions.questionone)
  return data
} catch (error) {
    
}


}





// for each för alla


//lyssnare för alla knappar
answer1.addEventListener('click',truefalsey1)
answer2.addEventListener('click',truefalsey2)
answer3.addEventListener('click',truefalsey3)
answer4.addEventListener('click',truefalsey4) 


  answwers.forEach( function(itemss){
    itemss.addEventListener('click',async function(){

     const data =  await quizgamenames()


      //incrementera varje letski för att byta fråga och svarsalternativ
      if (letski === 0) {
        data.questions.forEach((questionData, questionIndex) => {
            const answerElement = document.getElementById(`answer${questionIndex + 1}`);
            answerElement.innerHTML = questionData[`question${questionIndex + 1}`].question;
            
            questionmain.innerHTML= data.quizquestions[0].quizq
           
           
        });
        
        
        
        letski = 1;
        loadImagesMethod1()
           

       

    } else if (letski===1) {
        data.questions.forEach((questionData, questionIndex) => {
            const answerElement = document.getElementById(`answer${questionIndex + 1}`);
            answerElement.innerHTML = questionData[`question${questionIndex + 1}`].value;

            questionmain.innerHTML= data.quizquestions[1].quizq   

         
         
        });
       
        letski = 2;
        loadImagesMethod1()

           
           
      
        
    } else if (letski===2) {
      data.questionsx.forEach((questionData, questionIndex) => {
          const answerElement = document.getElementById(`answer${questionIndex + 1}`);
          answerElement.innerHTML = questionData[`question${questionIndex + 1}`].quesstion;
          questionmain.innerHTML= data.quizquestions[2].quizq

          
      });
      letski = 3;
  } else if (letski===3) {
      data.questionsx.forEach((questionData, questionIndex) => {
          const answerElement = document.getElementById(`answer${questionIndex + 1}`);
          answerElement.innerHTML = questionData[`question${questionIndex + 1}`].question;
         
          
      });
    



      letski = 3.14159265359
  } else if (letski === 3.14159265359) {
    window.location = "./done.html"
  }






    })
        
    })

  
    //bildladdare laddar bilder från json 
    async function loadImagesMethod1() {
        const container = document.getElementById('imagecontainer');
        const data =  await quizgamenames()

        let redericto = data.images[1];
        let redirect = data.images[0];
        
        if (letski === 1) {
           
            const existingImg = container.querySelector('.imagecontainer');
            if (existingImg) {
                existingImg.remove(); 
            }
        
            const imgElement = document.createElement('img');
            imgElement.src = redericto.background;
            imgElement.className = 'imagecontainer';
            container.appendChild(imgElement);
        
        } else if (letski === 2) {
      
            const existingImg = container.querySelector('.imagecontainer');
            if (existingImg) {
                existingImg.remove(); 
            }
        
        
            const imgElement = document.createElement('img');
            imgElement.src = redirect.background;
            imgElement.className = 'imagecontainer';
            container.appendChild(imgElement);
        }
        
            
    
           

      }
      const winlos = document.getElementById('winloses');
      const winsss = []
        const loses = []
      function truefalsey1 (){
       
       
        if(letski ===1) {
            loses.push(1);
        }else if (letski ===2)
            loses.push(1)
       
            winlos.innerHTML = `Wins: ${winsss.length} | Losses: ${loses.length}`;

      }
        


      function truefalsey2 (){
       
        
        if(letski ===1) {
            loses.push(1);
        }else if (letski ===2)
            loses.push(1)
       
            winlos.innerHTML = `Wins: ${winsss.length} | Losses: ${loses.length}`;

      }


       function truefalsey3 (){
       
        
        if(letski ===1) {
            winsss.push(1);
        }else if (letski ===2)
            loses.push(1)
       
            winlos.innerHTML = `Wins: ${winsss.length} | Losses: ${loses.length}`;

      }



       function truefalsey4 (){
       
        
        if(letski ===1) {
            loses.push(1);
        }else if (letski ===2)
            winsss.push(1)
       
            winlos.innerHTML = `Wins: ${winsss.length} | Losses: ${loses.length}`;

      }



     


 





quizgamenames()


//går igenom alla answercontainer och lägger till namn 