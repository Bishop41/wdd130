const questions = [
    {
        question: "What does the acronym CSS stand for?",
        answers: [
            {text:"Cascading Style Sheets", correct: true},
            {text:"Presentation of Web pages, including colors", correct: false},
            {text:"External style sheets are linked to HTML pages ", correct: false},
            {text:"Property access [ ] on strings", correct: false},
        ]
    },
    {
        question: "How are id and class attributes selected in CSS?",
        answers: [
            {text:"Cascading Style Sheets", correct: false},
            {text:"Presentation of Web pages, including colors", correct: false},
            {text:"External style sheets are linked to HTML pages ", correct: false},
            {text:"An ID attribute is used to identify a specific element, and class is used to identify a group of elements.", correct: true},
        ]
    },
    {
        question: "Which of the following is a valid CSS comment?",
        answers: [
            {text:"Cascading Style Sheets", correct: false},
            {text:"A CSS is used to add explanatory notes to the code or to prevent the browser from interpreting specific parts of the style sheet.", correct: true},
            {text:"External style sheets are linked to HTML pages ", correct: false},
            {text:"", correct: false},
        ]
    },   
    {
        question: "What is the bottom magin given this declaration?",
        answers: [
            {text:"Cascading Style Sheets", correct: false},
            {text:"Presentation of Web pages, including colors", correct: false},
            {text:"External style sheets are linked to HTML pages ", correct: false},
            {text:"This allows to easily make valid fields adopt an appearance that helps the user ", correct: true},
        ]
    }    
    
];

const quationElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIdex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIdex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIdex];
    let questionNo = currentQuestionIndex + 1;
    qustionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });

}

function resetState(){
    nextButton.style.dispay = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }

}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct=== "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classlist.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct==="true"){
            button.classlist.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
} 

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again"
    nextButton.style.display = "block"
}

function handleNextButton(){
    currentQuestionIdex++;
    if(currentQuestionIdex < question.length){
        showQuestion()
    }else{
        showSore();    
    }
}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIdex < questions.length){
        handleNextButton();
    }else{
        startQuiz()

    }

});



startQuiz();








