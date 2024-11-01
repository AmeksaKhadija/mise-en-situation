const questions = [];
// console.log(questions);

let count = 0;
const numeroDeQuestion = document.getElementById("numberQuestion");


const questionInput = document.getElementsByClassName('accordion-button');
const answerInput = document.getElementsByClassName('collapseOne');

for (let i = 0; i < questions.length; i++) {
    questionInput[i].innerText = questions[i].questions;
    answerInput[i].innerText = questions[i].answers;
}



function addQuestion() {

    questions.push({ question: question_name.value, answer: answer_name.value });
    count++;
    numeroDeQuestion.innerText = count ;


    accordionExample.appendChild(document.createElement("div")).classList.add("accordion-item");
    const elements = document.getElementsByClassName("accordion-item");

    question_name.value = "";
    answer_name.value = "";

    for (let index = 0; index < questions.length; index++) {
        elements[index].innerHTML = `
             <h2 class="accordion-header">
                 <button class="accordion-button question-label" type="button" data-bs-toggle="collapse"
                     data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                     ${questions[index].questions}
                 </button>
             </h2>
             <div id="collapse${index}" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                 <div class="accordion-body answer-label">
                     <strong>${questions[index].answers}</strong> 
                 </div>
             </div>`;
   }
}



const add_question = document.getElementById('add-question');
add_question.addEventListener("click", addQuestion);