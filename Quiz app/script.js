const questions = [
    {
        question: " In what year did the Great October Socialist Revolution take place?",
        answers: [
            { text: "1917", correct: true },
            { text: "1923", correct: false },
            { text: "1914", correct: false },
            { text: "1920", correct: false }
        ]
    },
    {
        question: "What is the largest lake in the world?",
        answers: [
            { text: "Caspian Sea", correct: false },
            { text: "Baikal", correct: true },
            { text: "CLake Superior", correct: false },
            { text: "Ontario", correct: false }
        ]
    },
    {
        question: "Which planet in the solar system is known as the “Red Planet”?",
        answers: [
            { text: "Mars", correct: true },
            { text: "Earth", correct: false },
            { text: "Cevap 3", correct: false },
            { text: "Jupiter", correct: false }
        ]
    },
    {
        question: "Who wrote the novel “War and Peace”?",
        answers: [
            { text: "Leo Tolstoy", correct: true },
            { text: "Fyodor Dostoevsky", correct: false },
            { text: "Anton Chekhov", correct: false },
            { text: "Ivan Turgenev", correct: false }
        ]
    },
    {
        question: "Which river is the longest in the world?",
        answers: [
            { text: "Amazon", correct: false },
            { text: "Mississippi", correct: false },
            { text: "Nile", correct: true },
            { text: "Yangtze", correct: false }
        ]
    }
];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }
    else {
        startQuiz();
    }
})

startQuiz();

















