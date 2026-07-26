const questions = [
    {
        question : "which is the largest animal in the world?",
        answers : [
            {text : "Elephant", correct : false},
            {text : "Blue Whale", correct : true},
            {text : "giraffe", correct : false},
            {text : "Dog", correct : false},
        ]
    },
     {
        question : "which is the smallest continent in the world?",
        answers : [
            {text : "Arctic", correct : false},
            {text : "Asia", correct : false},
            {text : "Australia", correct : true},
            {text : "Africa", correct : false},
        ]
    },
     {
        question : "Which is the largest ocean in the world?",
        answers : [
            {text : "Arctic Ocean", correct : false},
            {text : "Atlantic Ocean", correct : false},
            {text : "Indian Ocean", correct : false},
            {text : "Pacific Ocean", correct : true},
        ]
    },
     {
        question : "which is the largest animal in the world?",
        answers : [
            {text : "Elephant", correct : false},
            {text : "Blue Whale", correct : true},
            {text : "giraffe", correct : false},
            {text : "Dog", correct : false},
        ]
    },
     {
        question : "which is the smallest country in the world?",
        answers : [
            {text : "Vatican City", correct : true},
            {text : "Monaco", correct : false},
            {text : "San Marino", correct : false},
            {text : "Liechtenstein", correct : false},
        ]
    }
];



const   questionElement = document.getElementById("question");
const   answerButtons = document.getElementById("answer-buttons");
const   nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();    
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectanswer);
    });
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild) { 
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectanswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
       selectedBtn.classList.add("correct");
       score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    array.from(answerButtons.children).forEach(button => { 
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;

    }); 
    nextButton.style.display = "block";
}  

function showscore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handlenextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
}else{
    showscore();
    }
}
 

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handlenextButton();
    }
    else{
        startQuiz();
    }
});


    startQuiz();
    