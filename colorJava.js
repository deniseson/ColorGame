/**
 * Created by denise.son447 on 11/1/16.
 */
// list of arrays
var color = ["blue", "cyan", "gold", "gray", "green", "magenta", "orange", "red", "white", "yellow"];
//the computer choosing the color randomly based on the array given above
var picker = color [Math.floor((Math.random() * 10))];
//setting the number of guesses equal to 0 before you start the program
var guesses = 0 ;

function guess() {
    //prompts the user to input one of the colors in the given array
    var user_guess = prompt("Choose one of the Colors");
    //every time this screen comes back, you add one guess to the number of guesses
    guesses += 1;
    //this references the function below
    checkguess(user_guess);
}

//Two different option when the user guesses
function checkguess(user_guess) {


    //When they type in the wrong answer numerically
    if(color.indexOf(user_guess) == -1)
    {alert("Sorry I didn't recognize your color.\n\ Please try again.");
     guess();
    }

    // Correct answer typed in
    else {
        if (user_guess === picker) {
            document.getElementById("theHtml").style.backgroundColor = user_guess;
            alert ("Congratulations! You have guessed the color! \n\ "+ "It took you " + guesses + " guesses to finish the game \n\ You can see the colour in the background. " );


        }

        //Alphabetical answer but guess is incorrect. Either higher or lower
        else {
            //Guess is alphabetically correct but is too low
            if( user_guess < picker ) {
                 alert("Sorry, Your guess is incorrect.\n\ Hint: Your color is alphabetically lower than mine.\n\ Please try again.");
            }

            //Guess is alphabetically correct but is too high
            if (user_guess > picker) {
                alert("Your guess is incorrect.\n\ Hint: Your color is alphabetically higher than mine.\n\ Please try again.");
            }
            //the function "guess()" is called again so that the user can eventually input the correct color
            guess()

        }
    }

}