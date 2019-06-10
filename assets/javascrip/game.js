var computerChoices = ["m", "j", "k", "l", "t"];
var wins = 0;
var losses = 0;
var ties = 0;
var guessesLeft = 9;


var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var tiesText = document.getElementById("ties-text");
var guessesLeft = document.getElementById("guessesLeft-test");


document.onkeyup = function(event) {
    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    if ((userGuess === "j") || (userGuess === "k") || (userGuess === "l")) {

        if ((userGuess === "j" && computerGuess === "j") ||
          (userGuess === "k" && computerGuess === "k") || 
          (userGuess === "l" && computerGuess === "l")) {
          wins++;
        } else if (userGuess === computerGuess) {
          ties++;
        } else {
          losses++;
        }

        
        directionsText.textContent = "";

        userChoiceText.textContent = "You chose: " + userGuess;
        computerChoiceText.textContent = "The computer chose: " + computerGuess;
        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
        tiesText.textContent = "ties: " + ties;
      }
    };