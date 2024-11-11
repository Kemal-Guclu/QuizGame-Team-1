const answer1= document.getElementById('answer1')
const answer2= document.getElementById('answer2')
const answer3= document.getElementById('answer3')
const answer4= document.getElementById('answer4')
const answwers = document.querySelectorAll('.answercontainer')


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
  answwers.forEach( function(itemss){
    itemss.addEventListener('click',async function(){

     const data =  await quizgamenames()
     answer1.innerHTML = data.questions[0].question1.question;
     answer2.innerHTML = data.questions[1].question2.question;
     answer3.innerHTML = data.questions[2].question3.question;
     answer4.innerHTML = data.questions[3].question4.question;

  const answers1 = data.questions[0].question1.value;
 
      	console.log(answers1)

     if(answer3 === 1)
      alert("")


    })
        
    })







quizgamenames()

//går igenom alla answercontainer och lägger till namn 

