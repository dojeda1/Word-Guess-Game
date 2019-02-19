// set beginning variables

var wins = 0;
var losses = 0;
var guessesLeft = 10;

document.getElementById("winCount").innerHTML = wins;
document.getElementById("lossCount").innerHTML = losses;
document.getElementById("guessCount").innerHTML = guessesLeft;

var wordList = ["fish", "cat", "zebra", "gorilla"];




console.log(wordList);


// Computer chooses random word and places it in html

var compWord = wordList[Math.floor(Math.random() * wordList.length)];

console.log(compWord);

function getLetters() {
    var wordLetters = [];
    for (var i = 0; i < compWord.length; i++) {

        var arrayLetter = compWord.charAt(i);

        wordLetters.push(arrayLetter);



        document.getElementById("currentWord").innerHTML = document.getElementById("currentWord").innerHTML + "<span id='letter" + i + "'> _ </span>";

        document.getElementById("currentWordHidden").innerHTML = document.getElementById("currentWordHidden").innerHTML + wordLetters[i];
    }

    document.getElementById("currentWordHidden").innerHTML = wordLetters;

    console.log(wordLetters);

}

getLetters();






// only alphabetic keys register


// document.addEventListener("keyup", checkKeyPress);

// function checkKeyPress(key) {

//     var keyPress = event.key.toLowerCase();

//     if (key.keyCode >= "65" && key.keyCode <= "90") {
//         console.log("Player Guess: " + keyPress);

//         for (var i = 0; i < compWord.length; i++) {
//             if (keyPress === wordLetters[i]) {
//                 console.log("the same");
//             }
//         }

//     }
// }