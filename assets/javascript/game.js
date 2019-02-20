// set beginning variables

var wins = 0;
var losses = 0;
var guessesLeft = 10;

document.getElementById("winCount").innerHTML = wins;
document.getElementById("lossCount").innerHTML = losses;
document.getElementById("guessCount").innerHTML = guessesLeft;

var wordList = ["fish", "cat", "zebra", "gorilla"];

var allGuesses = [];


console.log(wordList);


// Computer chooses random word and places it in html

var compWord = wordList[Math.floor(Math.random() * wordList.length)];

console.log(compWord);

function getLetters() {

    var wordLetters = [];

    document.getElementById("currentWord").innerHTML = "";

    for (var i = 0; i < compWord.length; i++) {

        var arrayLetter = compWord.charAt(i);

        wordLetters.push(arrayLetter);



        document.getElementById("currentWord").innerHTML = document.getElementById("currentWord").innerHTML + "<span id='letter" + i + "'> _ </span>";

        document.getElementById("currentWordHidden").innerHTML = document.getElementById("currentWordHidden").innerHTML + wordLetters[i];
    }

    document.getElementById("currentWordHidden").innerHTML = wordLetters;

    console.log(wordLetters[0]);

}

getLetters();





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
                } else {
                    console.log("nope")
                }
            }

            if (correctLetter === false) {

                if (guessesLeft > 1) {
                    guessesLeft--;
                    console.log(guessesLeft);
                    document.getElementById("guessCount").innerHTML = guessesLeft;
                    document.getElementById("guessList").innerHTML = document.getElementById("guessList").innerHTML + keyPress + " ";
                } else {
                    console.log("you lose")
                    guessesLeft = 10;
                    losses++;
                    allGuesses = [];
                    document.getElementById("lossCount").innerHTML = losses;
                    document.getElementById("guessCount").innerHTML = guessesLeft;
                    document.getElementById("guessList").innerHTML = "";

                    document.getElementById("previousLetter").innerHTML = "Wrong! It was <span class='text-danger font-weight-bold text-uppercase'>" + compWord + "</span>.";

                    compWord = wordList[Math.floor(Math.random() * wordList.length)];
                    getLetters();
                    console.log(compWord);
                }
            }
        } else {
            console.log("duplicate letter");
        }
    } else {
        console.log("invalid key");
    }
}