// set beginning variables

var wins = 0;
var losses = 0;
var guessesLeft = 4;
var correctLetterCount = 0;

document.getElementById("winCount").innerHTML = wins;
document.getElementById("lossCount").innerHTML = losses;
document.getElementById("guessCount").innerHTML = guessesLeft;

var wordList = ["fish", "cat", "zebra", "gorilla"];

var allGuesses = [];


console.log(wordList);


// Computer chooses random word and places it in html

var compWord = wordList[Math.floor(Math.random() * wordList.length)];

console.log(compWord);

function resetWord() {
    compWord = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(compWord);
    guessesLeft = 8;
    correctLetterCount = 0;
    allGuesses = [];
    document.getElementById("winCount").innerHTML = wins;
    document.getElementById("lossCount").innerHTML = losses;
    document.getElementById("guessCount").innerHTML = guessesLeft;
    document.getElementById("guessList").innerHTML = "";
    document.getElementById("currentWord").innerHTML = "";

    for (var i = 0; i < compWord.length; i++) {

        document.getElementById("currentWord").innerHTML = document.getElementById("currentWord").innerHTML + "<span id='letter" + i + "'> _ </span>";

    }

}

resetWord();





// only alphabetic keys register


document.addEventListener("keyup", checkKeyPress);

function checkKeyPress(key) {

    var keyPress = event.key.toLowerCase();



    if (key.keyCode >= "65" && key.keyCode <= "90") {
        console.log("Player Guess: " + keyPress);

        if (allGuesses.indexOf(keyPress) === -1) {

            allGuesses.push(keyPress);
            console.log(allGuesses);

            var correctLetter = false;



            for (var i = 0; i < compWord.length; i++) {

                if (keyPress === compWord.charAt(i)) {



                    document.getElementById("letter" + i).innerHTML = compWord.charAt(i);
                    correctLetter = true;
                    console.log(correctLetter);
                    correctLetterCount++;
                    console.log("correct count: " + correctLetterCount);

                    if (correctLetterCount === compWord.length) {

                        wins++;
                        document.getElementById("previousLetter").innerHTML = "Correct! It was <span class='text-success font-weight-bold text-uppercase'>" + compWord + "</span>.";
                        console.log("Woohoo!!");
                        resetWord();

                    }
                } else {
                    console.log("not yet...");
                }
            }

            if (correctLetter === false) {

                if (guessesLeft > 1) {

                    guessesLeft--;
                    console.log(guessesLeft);
                    document.getElementById("guessCount").innerHTML = guessesLeft;
                    document.getElementById("guessList").innerHTML = document.getElementById("guessList").innerHTML + keyPress + " ";

                } else {

                    losses++;
                    document.getElementById("previousLetter").innerHTML = "Wrong! It was <span class='text-danger font-weight-bold text-uppercase'>" + compWord + "</span>.";
                    console.log("you lose");
                    resetWord();

                }
            }
        } else {
            console.log("duplicate letter");
        }
    } else {
        console.log("invalid key");
    }
}