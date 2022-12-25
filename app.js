const CHOICES = ["Sword", "Fireball", "Crossbow"]
const playBtn = document.querySelector("#play-btn")
const weaponsContainer = document.querySelector(".weapons-container")
const displayText = document.querySelector("#display-text")
const swordBtn = document.querySelector("#sword-button")
const crossbowBtn = document.querySelector("#crossbow-button")
const fireballBtn = document.querySelector("#fireball-button")
const playersChoiceWeapon = document.querySelector("#players-weapon")
const computersChoiceWeapon = document.querySelector("#computers-weapon")

let user_score = 3
let computer_score = 3

playBtn.addEventListener('click', () => { // Game Begin
    playBtn.style.display = 'none';
    displayText.innerHTML = 'FIGHT !';
    weaponsContainer.style.display = 'block';
});

// Player's buttons event listeners. 

swordBtn.addEventListener('click', () => {
    updatePlayerDisplay("sword");
    playRound("Sword");
});

crossbowBtn.addEventListener('click', () => {
    updatePlayerDisplay("crossbow");
    playRound("Crossbow");
});

fireballBtn.addEventListener('click', () => {    
    updatePlayerDisplay("fireball");
    playRound("Fireball");
});

// Helper functions

function updatePlayerDisplay(choice) {
    displayText.innerHTML = `${choice.toUpperCase()}!`;
    playersChoiceWeapon.src = `sprites/${choice.toLowerCase()}.png`;
}

function updateComputerDisplay(computerChoice) {
    displayText.innerHTML = `${computerChoice.toUpperCase()}!`;
    computersChoiceWeapon.src = `sprites/${computerChoice.toLowerCase()}.png`;
}

function getComputerChoice() {
    return CHOICES[Math.floor(Math.random()*CHOICES.length)]; 
}

// Updating player or computer heart count

function playerWinsRound() {
    hideHeart("computer");
    displayText.innerHTML = "TAKE THAT !";
  }
  
function computerWinsRound() {
    displayText.innerHTML = "OUCH !"
    hideHeart("player");
}

function hideHeart(player) {
    var heartContainers = document.querySelector(`.heart-containers-${player}`);
    var hearts = Array.from(heartContainers.querySelectorAll(".heart-img"));
    var visibleHearts = hearts.filter(heart => heart.style.display !== "none");
    if (visibleHearts.length > 0) {
      visibleHearts[visibleHearts.length - 1].style.display = "none";
    }
  }

// Compute player scores based on their choices

function findRoundWinner(playerSelection,computerChoice) {
    if (playerSelection === computerChoice) {
        displayText.innerHTML = "DRAW !"
    }
    else if (playerSelection === "Sword" && computerChoice === "Fireball") {
        user_score -= 1;
        computerWinsRound();
    }
    else if (playerSelection === "Fireball" && computerChoice === "Crossbow") {
        user_score -= 1;
        computerWinsRound();
    }
    else if (playerSelection === "Crossbow" && computerChoice === "Sword") {
        user_score -= 1;
        computerWinsRound();
    }
    else {
        computer_score -= 1;
        playerWinsRound();
    }
}

function findGameWinner() {
    if (user_score === 0) {
        gameEnd("loss");
    }
    else if (computer_score === 0) {
        gameEnd("win");
    }
}

function gameEnd(outcome) {
    if (outcome === "loss") {
        displayText.innerHTML = "YOU LOSE ;(";
    }
    else {
        displayText.innerHTML = "YOU WIN ^^ !";
    }
    setTimeout(() => location.reload(), 3000);
}

function playRound(playerSelection) {
    let computerChoice = getComputerChoice();
    setTimeout(updateComputerDisplay, 1000, computerChoice);
    setTimeout(findRoundWinner, 2000, playerSelection, computerChoice);
    setTimeout(findGameWinner, 3000);
    console.log(user_score);
    console.log(computer_score);
}