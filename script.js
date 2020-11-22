var playerWins = 0;
var computerWins = 0;
var draws = 0;
var roundsPlayed = 0;

var playerSelection;
var computerSelection;

function printAlert(message) {
    const container = document.querySelector('#container');
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = message;
    container.appendChild(content);    
}


const btnRestart = document.querySelector('#btnRestart');
btnRestart.onclick = () => history.go(0);

const btnRock = document.querySelector('#btnRock');
btnRock.addEventListener('click', () => {
    var message = "you chose rock";
    printAlert(message);
    playerSelection = 'rock';
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
})

const btnPaper = document.querySelector('#btnPaper');
btnPaper.addEventListener('click', () => {
    var message = "you chose paper";
    printAlert(message);
    playerSelection = 'paper';
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection)
})

const btnScissors = document.querySelector('#btnScissors');
btnScissors.addEventListener('click', () => {
    var message = "you chose scissors";
    printAlert(message);
    playerSelection = 'scissors';
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection)
})


function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "rock") {
        var message = "DRAW! Rock vs Rock.";
        printAlert(message);
        draws += 1;
    }
    if (playerSelection == "rock" && computerSelection == "paper") {
        printAlert("You LOSE! Rock loses to Paper.")
        computerWins += 1;
    }
    if (playerSelection == "rock" && computerSelection == "scissors") {
        printAlert("You WIN! Rock beats Scissors")
        playerWins += 1;
    }
    if (playerSelection == "paper" && computerSelection == "rock") {
        printAlert("You WIN! Paper beats Rock.")
        playerWins += 1;
    }
    if (playerSelection == "paper" && computerSelection == "paper"){
        printAlert("DRAW! Paper vs Paper.")
        draws += 1;
    }
    if (playerSelection == "paper" && computerSelection == "scissors") {
        printAlert("You LOSE! Paper loses to Scissors.")
        computerWins += 1;
    }
    if (playerSelection == "scissors" && computerSelection == "rock") {
        printAlert("You LOSE! Scissors loses to Rock.")
        computerWins += 1;
    }
    if (playerSelection == "scissors" && computerSelection == "paper") {
        printAlert("You WIN! Scissors beats Paper.")
        playerWins += 1;
    }
    if (playerSelection == "scissors" && computerSelection == "scissors") {
        printAlert("DRAW! Scissors vs Scissors.")
        draws += 1;
    }
    
    roundsPlayed += 1;

    printAlert(`rounds played: ${roundsPlayed}`);

    if (roundsPlayed == 5) {
        announceResults();
    }
}

function computerPlay() {
    var ranNum = Math.floor(Math.random() * 3);
    if (ranNum == 0) {
        printAlert('computer chose Rock');
        return "rock";
    }

    if (ranNum == 1) {
        printAlert('computer chose Paper');
        return "paper"
    }

    if (ranNum == 2) {
        printAlert('computer chose scissors')
        return "scissors";
    }
}

function announceResults() {
    if (playerWins > computerWins) {
        printAlert(`You win the game. Your points: ${playerWins}. Computer Points: ${computerWins}. Draws: ${draws}.`);
    }
    else if (computerWins > playerWins) {
        printAlert(`You lose the game. Your points: ${playerWins}. Computer Points: ${computerWins}. Draws: ${draws}.`);
    }
    else if (computerWins == playerWins) {
        printAlert(`It's a tie! Your points: ${playerWins}. Computer Points: ${computerWins}. Draws: ${draws}.`);
    }
}