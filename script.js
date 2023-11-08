let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Generate Target Number Function

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

// Compare the Computer and the User guess to the Secret Target Number Function

const compareGuesses = (user, computer, target) => {
    if (Math.abs(user - target) === Math.abs(computer - target)) {
        return true;
    } else if (Math.abs(user - target) < Math.abs(computer - target)) {
        return true;
    } else {
        return false;
    }
};

// Increase the score of the winner

const updateScore = (winner) => {
    if (winner == 'human') {
        humanScore++;
    } else if (winner == 'computer') {
        computerScore++;
    }
};

// Advance Round function to increase the round number

const advanceRound = () => {
    currentRoundNumber++;
};