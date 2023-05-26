let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;
let gameOver = false;

const buttons = document.querySelectorAll("div.btn-container button");
const pScore = document.querySelector("#p-score");
const cScore = document.querySelector("#c-score");
const outcome = document.querySelector("#result-message");
const gameEnd= document.querySelector("#end-message");
const again = document.querySelector("#play-again");

buttons.forEach(btn => {btn.addEventListener("click", () => {
    if (btn.id == "rock") {
        playerSelection = "Rock";
    } 
    else if (btn.id == "paper") {
        playerSelection = "Paper";
    }
    else if (btn.id == "scissors") {
        playerSelection = "Scissors";
    }
    
    computerSelection = getComputerChoice();
    playRound();

    })
})

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3) + 1;
    let computerChoice;

    switch (number) {
        case 1:
            computerChoice = "Rock";
            break;
        case 2:
            computerChoice = "Paper";
            break;
        case 3:
            computerChoice = "Scissors";
            break;
    }
    return computerChoice;
}

function playRound() {
    if ((playerSelection == "Rock" && computerSelection == "Scissors") || 
        (playerSelection == "Paper" && computerSelection == "Rock") ||
        (playerSelection == "Scissors" && computerSelection == "Paper")) {
        updateScore("player");
    }
    else if (playerSelection == computerSelection) {
        updateScore("tie");
    }
    else {
        updateScore("computer");
    }   
}

function updateScore(winner) {
    if (winner == "player") {
        playerScore ++;
        pScore.textContent = playerScore;
        outcome.textContent = "You won the round! Your " + playerSelection + " beats my " + computerSelection;
    }
    else if (winner == "computer") {
        computerScore ++;
        cScore.textContent = computerScore;
        outcome.textContent = "You lose the round! My " + computerSelection + " beats your " + playerSelection;
    }
    else {
        outcome.textContent = "Tie! We both chose " +  playerSelection + ". Try again!";
    }
    
    if (playerScore == 5) {
        gameEnd.textContent = "You won the game! I'll go cry now...";
    }
    else if (computerScore == 5) {
        gameEnd.textContent = "I won the game! Looks like the best player won!";
    }
    
    if (playerScore == 5 || computerScore == 5) {
        gameOver = true;
    }

    if (gameOver) {
        buttons.forEach(btn => {
            btn.style.pointerEvents = "none";
            })

        again.style.display = "block";

        again.addEventListener("click", () => {
            again.style.display = "none";
            resetGame();
        })
    }
}

function resetGame() {
    again.getElementsByClassName.display = "none";
    playerScore = 0;
    computerScore = 0
    outcome.textContent = "";
    gameEnd.textContent = "";
    gameOver = false;
    pScore.textContent = "0";
    cScore.textContent = "0";
    buttons.forEach(btn => {
        btn.style.pointerEvents = "auto";
        })

}
