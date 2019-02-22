$(".magicFade").fadeIn(3000);

// set beginning variables

var wins = 0;
var losses = 0;
var guessesLeft = 4;
var correctLetterCount = 0;

var wordList = ["harry potter", "hermione granger", "ron weasley", "jk rowling", "hagrid", "luna lovegood", "neville longbottom", "draco malfoy", "serverus snape", "quaffle", "bludger", "golden snitch", "butterbeer", "hogwarts", "horcrux", "quidditch", "muggle", "dumbledore", "gryffindor", "hufflepuff", "ravenclaw", "slytherin", "voldemort", "patronus", "tom marvolo riddle", "wand", "magic", "spell", "broomstick", "polyjuice potion", "felix felicis", "sorting hat", "expecto patronum", "windgardium leviosa", "expelliarmus", "avada kedavra", "lumos maxima", "dobby", "owl", "hedwig", "riddikulus", "diagon alley", "mischief managed", "ministry of magic", "azkaban", "honeydukes", "knockturn alley", "hogsmeade", "gringotts bank", "shrieking shack", "the leaky cauldron", "forbidden forest", "wizard", "witch", "goblin", "house elf", "animagus", "werewolf", "dragon", "unicorn", "troll", "restricted section", "invisibility cloak", "order of the phoenix", "spider", "basilisk", "dementor", "liquid death", "deathly hallows", "sorceror's stone", "halfblood prince", "chamber of secrets", "goblet of fire", "centaur", "giant", "ghost", "book", "dungeon", "gillyweed", "wormwood", "devil's snare", "mermaid", "crystal ball", "the boy who lived", "merlin's beard", "whomping willow", "remus lupin", "scabbers", "hippogriff", "mudblood", "elder wand", "resurrection stone", "imperio", "crucio", "death eater", "auror", "dumbledore's army", "howler", "deluminator", "enchantment", "marauder's map", "wizard's chess", "nagini", "sword", "philosopher's stone", "knight bus", "portkey", "vanishing cabinet", "boggart", "sphinx", "dragon heartstring", "fluffy", "parseltongue", "pumpkin juice", "mad eye moody"];

// test array
// var wordList = ["harry potter", "devil's snare", "wand"]

var allGuesses = [];

$("#previousLetter").html("&nbsp;");


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
    $("#winCount").html(wins);

    $("#lossCount").html(losses);
    $("#guessCount").html(guessesLeft);
    $("#guessList").html("&nbsp;");
    $("#currentWord").html("");



    for (var i = 0; i < compWord.length; i++) {

        var currentLetter = compWord.charAt(i);
        console.log(currentLetter);
        var letterKeyCode = compWord.charCodeAt(i);
        console.log(letterKeyCode);

        if (letterKeyCode != "32" && letterKeyCode != "39") {
            $("#currentWord").append("<span class='magicFade' id='letter" + i + "'>_</span>");
            $(".magicFade").fadeIn(2000);
        } else {
            if (letterKeyCode == "32") {
                $("#currentWord").append("<span class='magicFade' id='letter" + i + "'> &nbsp; </span>");
                $(".magicFade").fadeIn(2000);
                correctLetterCount++;
            } else {
                $("#currentWord").append("<span class='magicFade' id='letter" + i + "'> &#39; </span>");
                $(".magicFade").fadeIn(2000);
                correctLetterCount++;
            }

        }

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

                    var thisKey = compWord.charAt(i);


                    $("#letter" + i).fadeOut(1000, function () {
                        $(this).text(thisKey)
                    }).fadeIn(1000);
                    console.log("test " + compWord.charAt(i))

                    correctLetter = true;
                    console.log(correctLetter);
                    correctLetterCount++;
                    console.log("correct count: " + correctLetterCount);


                } else {
                    console.log("not yet...");
                }


            }

            if (correctLetterCount === compWord.length) {

                wins++;
                $("#previousLetter").html("Correct! It was <span class='text-success font-weight-bold text-capitalize'>" + compWord + "</span>.");
                console.log("Woohoo!!");
                resetWord();


            }

            if (correctLetter === false) {

                if (guessesLeft > 1) {

                    guessesLeft--;
                    console.log(guessesLeft);

                    $("#guessCount").html(guessesLeft);
                    $("#guessList").append(keyPress + " ");

                } else {

                    losses++;
                    $("#previousLetter").html("Wrong! It was <span class='text-danger font-weight-bold text-capitalize'>" + compWord + "</span>.");
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