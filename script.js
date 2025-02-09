const question = [
    {
    questions: "which animal is the largest?",
    answers: [
    {text:"shark", correct: false },
    {text:"Elephat", correct: true },
    {text:"Pussy", correct: false },
    {text:"dog", correct: false },
     ]
    },

    {
    questions: "what is the capital Nigeria?",
    answers: [
    {text:"Enugu", correct: false },
    {text:"Porthacourt", correct: true },
    {text:"Benue", correct: false },
    {text:"Abuja", correct: true },
     ]
    },

    {
    questions: "Who is the current govenor of Enugu?",
    answers: [
    {text:"Peter Mba", correct: true },
    {text:"Ifeanyi Ugwuanyi", correct: false },
    {text:"Sullivan", correct: false },
    {text:"Alex Otti", correct: false },
     ]
    },

    {
    questions: "who is the current President of america?",
    answers: [
    {text:"Donald Trump ", correct: false },
    {text:"Willam Shakespare", correct: true },
    {text:"Ahmed Tinubu", correct: false },
    {text:" Barrack Obama", correct: false },
     ]
    }

];

const questionElement = document.getElementById ("quetion");
const answerButton = document.getElementById ("answerbutton");
const nextButton = document.getElementById ("next-btn");
