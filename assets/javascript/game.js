var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = "";

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

window.onload = function game() {
    randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(randomLetter);
};

document.onkeyup = function letterCheck(event) {
    var userGuess = event.key;
    lettersGuessed = document.getElementById('lettersGuessed');
    var div = document.createElement('div');
    div.textContent = userGuess;
    lettersGuessed.appendChild(div);
    if(userGuess === randomLetter) {
        wins = document.getElementById('wins');
        div = document.createElement('div');
        div.textContent = wins++;
        wins.appendChild(div);
    }
    else {
        guessesLeft = document.getElementById('guessesLeft');
        div = document.createElement('div');
        div.textContent = guessesLeft--;
        guessesLeft.appendChild(div);
    }
};

if(guessesLeft === 0) {
    alert('Game Over');
    losses = document.getElementById('losses');
    var div = document.createElement('div');
    div.textContent = losses++;
    losses.appendChild(div);
    game();
};