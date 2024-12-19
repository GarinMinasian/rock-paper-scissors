const userScoreElement = document.getElementById('user-score');
const computerScoreElement = document.getElementById('computer-score');
const resultMessage = document.getElementById('result-message');
const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');

let userScore = 0;
let computerScore = 0;

const choices = ['rock', 'paper', 'scissors'];

document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', (e) => {
        const userChoice = e.target.id;
        const computerChoice = choices[Math.floor(Math.random() * 3)];
        
        userChoiceDisplay.textContent = userChoice;
        computerChoiceDisplay.textContent = computerChoice;
        
        if (userChoice === computerChoice) {
            resultMessage.textContent = "It's a tie!";
        } else if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'scissors' && computerChoice === 'paper') ||
            (userChoice === 'paper' && computerChoice === 'rock')
        ) {
            resultMessage.textContent = "You win!";
            userScore++;
            userScoreElement.textContent = userScore;
        } else {
            resultMessage.textContent = "Computer wins!";
            computerScore++;
            computerScoreElement.textContent = computerScore;
        }
    });
});
