document.addEventListener("DOMContentLoaded", function() {

    let userScore = 0;
    let computerScore = 0;

// Function to update the scores!!
    function updateScores() {
        const userScoreElement = document.querySelector('.b');
        const computerScoreElement = document.querySelector('.b1');
        userScoreElement.textContent = userScore;
        computerScoreElement.textContent = computerScore;
    }

// Function to get the element by click!!
    function handleCircleClick(event) {
        const userChoice = event.target.alt;
        const computerChoice = getComputerChoice();
        const result = determineWinner(userChoice, computerChoice);
        showResult(userChoice, computerChoice, result);
        updateScores();
    }


// Logic to get the random choice from computer side!!
    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }


// 
    function determineWinner(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return "draw";
        } else if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
            userScore++;
            return 'user';
        } else if (
            (userChoice === 'scissors' && computerChoice === 'rock') ||
            (userChoice === 'rock' && computerChoice === 'paper') ||
            (userChoice === 'paper' && computerChoice === 'scissors')
        ) {
            computerScore++;
            return 'computer';
        }
    }


// Function to display the result message
    function showResult(userChoice, computerChoice, result) {
        const resultElement = document.querySelector('.result');
        let message = '';
        if (result === 'draw') {
            message = 'It\'s a draw!';
        } else if (result === 'user') {
            message = 'You win against PC!';
        } else {
            message = 'You lost against PC!'
        }
        resultElement.textContent = message;

        const userChoiceElement = document.querySelector('.user-choice');
    const computerChoiceElement = document.querySelector('.computer-choice');
    userChoiceElement.textContent = userChoice;
    computerChoiceElement.textContent = computerChoice;
    }


    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle =>{
        circle.addEventListener('click', handleCircleClick);
    });
});

