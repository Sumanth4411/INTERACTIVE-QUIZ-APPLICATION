// script.js

let currentQuestionIndex = 0;
let score = 0;

const questions = [
    {
        question: "1.What is the begineer language for web development",
        answers: ["html", "css", "java", "c"],
        correctAnswer: 1
    },
    {
        question: "2.Which language is used for web development?",
        answers: ["Python", "JavaScript", "Java", "C++"],
        correctAnswer: 1
    },
    {
        question: "3.What is the largest planet in our solar system?",
        answers: ["Earth", "Jupiter", "Mars", "Saturn"],
        correctAnswer: 1
    },
    {
        question: "4.Who wrote the play 'Romeo and Juliet'?",
        answers: ["Shakespeare", "Dickens", "Hemingway", "Tolkien"],
        correctAnswer: 0
    },
    {
        question: "5.Which element has the chemical symbol 'O'?",
        answers: ["Oxygen", "Osmium", "Ozone", "Opium"],
        correctAnswer: 0
    },
    {
        question: "6.What is the hardest natural substance on Earth?",
        answers: ["Gold", "Diamond", "Iron", "Platinum"],
        correctAnswer: 1
    },
    {
        question: "7.What is the tallest mountain in the world?",
        answers: ["K2", "Mount Kilimanjaro", "Mount Everest", "Mount Fuji"],
        correctAnswer: 2
    },
    {
        question: "8.Who painted the Mona Lisa?",
        answers: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Claude Monet"],
        correctAnswer: 2
    },
    {
        question: "9.Which country is known as the Land of the Rising Sun?",
        answers: ["China", "South Korea", "India", "Japan"],
        correctAnswer: 3
    },
    {
        question: "10.What is the smallest prime number?",
        answers: ["1", "2", "3", "5"],
        correctAnswer: 1
    },
    {
        question: "11.What is the capital of Japan?",
        answers: ["Seoul", "Beijing", "Tokyo", "Hanoi"],
        correctAnswer: 2
    },
    {
        question: "12.What is the main ingredient in guacamole?",
        answers: ["Tomato", "Avocado", "Onion", "Lime"],
        correctAnswer: 1
    },
    {
        question: "13.Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: 1
    },
    {
        question: "14.In which year did World War II end?",
        answers: ["1940", "1941", "1945", "1950"],
        correctAnswer: 2
    },
    {
        question: "15.Who developed the theory of relativity?",
        answers: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Marie Curie"],
        correctAnswer: 1
    },
    {
        question: "16.What is the chemical symbol for gold?",
        answers: ["Ag", "Au", "Pb", "Fe"],
        correctAnswer: 1
    }
];

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').innerText = question.question;
    
    const answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = '';
    
    question.answers.forEach((answer, index) => {
        const answerDiv = document.createElement('div');
        answerDiv.classList.add('answer');
        answerDiv.innerHTML = `<input type="radio" name="answer" value="${index}" id="answer${index}"> 
                              <label for="answer${index}">${answer}</label>`;
        answersDiv.appendChild(answerDiv);
    });
}

function nextQuestion() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    
    if (selectedAnswer) {
        const answerIndex = parseInt(selectedAnswer.value);
        const currentQuestion = questions[currentQuestionIndex];
        
        if (answerIndex === currentQuestion.correctAnswer) {
            score++;
        }

        document.getElementById('score').innerText = score;
        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            document.getElementById('question-container').innerHTML = `<p>Quiz Over! Your final score is: ${score}</p>`;
            document.getElementById('next-button').style.display = 'none';
        }
    } else {
        alert("Please select an answer!");
    }
}

// Start quiz
displayQuestion();
