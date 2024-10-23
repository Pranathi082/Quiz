// script.js

// Quiz data containing general knowledge questions, options, and correct answers
const quizData = [
    {
        question: "What is the capital city of France?",
        options: ["Paris", "London", "Rome", "Berlin"],
        answer: 0
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "Thailand", "India"],
        answer: 1
    },
    {
        question: "Who was the first President of the United States?",
        options: ["Abraham Lincoln", "Thomas Jefferson", "George Washington", "John Adams"],
        answer: 2
    },
    {
        question: "Which language is the most spoken worldwide?",
        options: ["English", "Spanish", "Chinese", "Hindi"],
        answer: 2
    },
    {
        question: "In which year did World War II end?",
        options: ["1939", "1942", "1945", "1948"],
        answer: 2
    },
    {
        question: "Which is the largest ocean in the world?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: 3
    },
    {
        question: "Who is the author of the Harry Potter series?",
        options: ["J.K. Rowling", "J.R.R. Tolkien", "George R.R. Martin", "Stephen King"],
        answer: 0
    },
    {
        question: "What is the currency of the United Kingdom?",
        options: ["Euro", "Dollar", "Pound Sterling", "Yen"],
        answer: 2
    },
    {
        question: "Which country hosted the 2016 Summer Olympics?",
        options: ["Brazil", "China", "Russia", "Japan"],
        answer: 0
    },
    {
        question: "What is the tallest mountain in the world?",
        options: ["Mount Kilimanjaro", "Mount Everest", "Mount Fuji", "Mount Elbrus"],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;

// Display the first question
displayQuestion();

// Event listener for the submit button
document.getElementById("submit-btn").addEventListener("click", checkAnswer);

// Event listener for the next button
document.getElementById("next-btn").addEventListener("click", nextQuestion);

// Function to display the current question and options
function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    questionElement.textContent = quizData[currentQuestion].question;

    optionsElement.innerHTML = "";
    quizData[currentQuestion].options.forEach((option, index) => {
        const liElement = document.createElement("li");
        const inputElement = document.createElement("input");
        const labelElement = document.createElement("label");

        inputElement.type = "radio";
        inputElement.name = "option";
        inputElement.value = index;

        labelElement.textContent = option;

        liElement.appendChild(inputElement);
        liElement.appendChild(labelElement);

        optionsElement.appendChild(liElement);
    });
}

// Function to check the selected answer
function checkAnswer() {
    const selectedOption = document.querySelector("input[name='option']:checked");
    if (selectedOption) {
        const selectedAnswer = parseInt(selectedOption.value);
        if (selectedAnswer === quizData[currentQuestion].answer) {
            score++;
        }
        document.getElementById("result").textContent = `Correct answers: ${score} out of ${currentQuestion + 1}`;
    } else {
        alert("Please select an option");
    }
}

// Function to go to the next question
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion >= quizData.length) {
        // Display the final score
        const finalScore = `Final score: ${score} out of ${quizData.length}`;
        document.getElementById("result").textContent = finalScore;
        // Hide the next button and submit button
        document.getElementById("submit-btn").style.display = "none";
        document.getElementById("next-btn").style.display = "none";
        // Display a play again button
        const playAgainButton = document.createElement("button");
        playAgainButton.textContent = "Play Again";
        playAgainButton.onclick = function() {
            location.reload();
        };
        document.body.appendChild(playAgainButton);
    } else {
        displayQuestion();
    }
}
