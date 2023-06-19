// The score sheet for each player
const score0 = document.getElementById("score_0");
const score1 = document.getElementById("score_1");

const current0 = document.getElementById('current_0');
const current1 = document.getElementById('current_1');

// Initializing the scores of both players to 0
score0.textContent = 0;
score1.textContent = 0;

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Function to change the player name
function changeNames() {
    const player1Name = prompt("Enter Player 1 Name");
    const player2Name = prompt("Enter Player 2 Name");

    document.querySelector(".player1").textContent = player1Name;
    document.querySelector(".player2").textContent = player2Name;
}

// Function to roll the dice
function rollTheDice() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    document.querySelector(".img1").setAttribute("src", "dice" + randomNumber + ".png");

    if (randomNumber === 1) {
        currentScore = 0;
        document.getElementById(`current_${activePlayer}`).textContent = currentScore;
        switchPlayer();
    } else {
        currentScore += randomNumber;
        document.getElementById(`current_${activePlayer}`).textContent = currentScore;
    }
}

// Function to switch players
function switchPlayer() {
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector(".player1").classList.toggle("player_active");
    document.querySelector(".player2").classList.toggle("player_active");
}

// Function to hold the current score
function hold() {
    scores[activePlayer] += currentScore;
    document.getElementById(`score_${activePlayer}`).textContent = scores[activePlayer];
    currentScore = 0;
    document.getElementById(`current_${activePlayer}`).textContent = currentScore;
    switchPlayer();
}

// Function for a new game
function newGame() {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;

    score0.textContent = 0;
    score1.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;

    document.querySelector("h1").innerHTML = "Let's Play";

    document.querySelector(".player1").classList.add("player_active");
    document.querySelector(".player2").classList.remove("player_active");
}

// Event listener for the "Roll Dice" button
document.querySelector(".butn_roll").addEventListener("click", rollTheDice);

// Event listener for the "Hold" button
document.querySelector(".btn_hold").addEventListener("click", hold);

// Event listener for the "New Game" button
document.querySelector(".butn_newgame").addEventListener("click", newGame);
