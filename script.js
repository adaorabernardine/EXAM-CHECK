
/
const questions = [
    {
        question: "Which animal is the largest?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Elephant", correct: true },
            { text: "Pussy", correct: false },
            { text: "Dog", correct: false }
        ]
    },
    {
        question: "What is the capital of Nigeria?",
        answers: [
            { text: "Enugu", correct: false },
            { text: "Porthacourt", correct: false },
            { text: "Benue", correct: false },
            { text: "Abuja", correct: true }
        ]
    },
    {
        question: "Who is the current Governor of Enugu?",
        answers: [
            { text: "Peter Mba", correct: true },
            { text: "Ifeanyi Ugwuanyi", correct: false },
            { text: "Sullivan", correct: false },
            { text: "Alex Otti", correct: false }
        ]
    },
    {
        question: "Who is the current President of the USA?",
        answers: [
            { text: "Donald Trump", correct: false },
            { text: "Joe Biden", correct: true },
            { text: "Ahmed Tinubu", correct: false },
            { text: "Barack Obama", correct: false }
        ]
    }
];

// Selecting elements
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answerbutton");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

// Function to start the quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    nextButton.style.display = "none";
    showQuestion();
}

// Function to display a question
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

    // Create answer buttons
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

// Function to reset the answer buttons before the next question
function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// Function to handle answer selection
function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";

    // Apply styles based on correct or incorrect selection
    if (isCorrect) {
        selectedButton.style.backgroundColor = "green";
        score++;
    } else {
        selectedButton.style.backgroundColor = "red";
    }

    // Disable all buttons and highlight the correct answer
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.style.backgroundColor = "green";
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

// Function to display the final score
function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Restart Quiz";
    nextButton.style.display = "block";
    nextButton.addEventListener("click", startQuiz);
}

// Next button event listener
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

// Start the quiz when the script loads
startQuiz();
