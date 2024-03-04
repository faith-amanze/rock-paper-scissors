// Function to get computer's choice randomly
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// Function to play a single round
function playRound(playerSelection, computerSelection) {
    // Convert playerSelection to lowercase for case-insensitivity
    playerSelection = playerSelection.toLowerCase();

    // Determine the winner or tie
    if (
        (playerSelection === 'rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'paper' && computerSelection === 'Rock') ||
        (playerSelection === 'scissors' && computerSelection === 'Paper')
    ) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (
        (playerSelection === 'rock' && computerSelection === 'Paper') ||
        (playerSelection === 'paper' && computerSelection === 'Scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'Rock')
    ) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        return 'It\'s a Tie!';
    }
}

// Function to play a five-round game
function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Enter your choice: Rock, Paper, or Scissors');
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));

        // Update scores
        const result = playRound(playerSelection, computerSelection);
        if (result.includes('Win')) {
            playerScore++;
        } else if (result.includes('Lose')) {
            computerScore++;
        }
    }

    // Determine the winner of the game
    if (playerScore > computerScore) {
        console.log('Congratulations! You win the game!');
    } else if (playerScore < computerScore) {
        console.log('Sorry, you lose the game.');
    } else {
        console.log('It\'s a tie game!');
    }
}

// Start the game
playGame();
