        //         if (keyPress === compFinal) {
        //             console.log("the same");
        //            
        //             
        //             document.getElementById("guessList").innerHTML = "";

        //             document.getElementById("previousLetter").innerHTML = "Correct! It was <span class='text-success font-weight-bold text-uppercase'>" + compFinal + "</span>.";

        //             compLetter = String.fromCharCode(compWord());

        //             compFinal = compLetter.toLowerCase();

        //         } else {

        //             if (guessesLeft > 1) {
        //                 console.log("nope");
        //                 guessesLeft--;
        //                 document.getElementById("guessCount").innerHTML = guessesLeft;
        //                 document.getElementById("guessList").innerHTML = document.getElementById("guessList").innerHTML + keyPress + " ";

        //             } else {
        //                 console.log("you lose")
        //                 guessesLeft = 10;
        //                 losses++;
        //                 document.getElementById("lossCount").innerHTML = losses;
        //                 document.getElementById("guessCount").innerHTML = guessesLeft;
        //                 document.getElementById("guessList").innerHTML = "";

        //                 document.getElementById("previousLetter").innerHTML = "Wrong! It was <span class='text-danger font-weight-bold text-uppercase'>" + compFinal + "</span>.";

        //                 compLetter = String.fromCharCode(compWord());

        //                 compFinal = compLetter.toLowerCase();

        //             }
        //         }

        //     } else {
        //         console.log("invalid key")
        //     }


        // })