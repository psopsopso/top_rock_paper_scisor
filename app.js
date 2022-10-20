const CHOICES = ["Rock", "Paper", "Scissor"]
let user_score = 0
let computer_score = 0

function getComputerChoice() {
    return CHOICES[Math.floor(Math.random()*CHOICES.length)]; 
}

function playRound(playerSelection, computerSelection) {
    let playerSelectionLowerCase = playerSelection.toLowerCase();
    let computerSelectionLowerCase = computerSelection.toLowerCase();
    if (playerSelectionLowerCase === computerSelectionLowerCase) {
        return `Player's : ${playerSelection.toUpperCase()}. Computer's : ${computerSelection.toUpperCase()}. Draw!`;
    }
    else if (playerSelectionLowerCase === "rock" && computerSelectionLowerCase === "scissor") {
        user_score += 1;
        return `Player's : ${playerSelection.toUpperCase()}. Computer's : ${computerSelection.toUpperCase()}. You win!`
    }
    else if (playerSelectionLowerCase === "paper" && computerSelectionLowerCase === "rock") {
        user_score += 1;
        return `Player's : ${playerSelection.toUpperCase()}. Computer's : ${computerSelection.toUpperCase()}. You win!`;
    }
    else if (playerSelectionLowerCase === "scissor" && computerSelectionLowerCase === "paper") {
        user_score += 1;
        return `Player's : ${playerSelection.toUpperCase()}. Computer's : ${computerSelection.toUpperCase()}. You win!`;
    }
    else {
        computer_score += 1;
        return `Player's : ${playerSelection.toUpperCase()}. Computer's : ${computerSelection.toUpperCase()}. You lose!`;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let user_choice = prompt("ROCK, PAPER, SCISSOR! What do you pick ?");
        console.log(playRound(user_choice, getComputerChoice()));
        console.log(`Score : player: ${user_score}. Computer: ${computer_score}.`);
    }
    if (user_score > computer_score) {
        console.log("You win!");
    }
    else if (user_score < computer_score) {
        console.log("You lose!");
    }
    else {
        console.log("It's a draw!");
    }
}

game();
