 
	
	// NOTES:
		// --needed-- you will use this code to make sure that the prompted word becomes all lower case so you don't have to have upper and lowe case options--//
		// String.fromCharCode(event.keyCode).toLowerCase();
		// --------- var Variable = {}; equals an empty object array 

 	// -- game visuals -- //

 	var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

	// -- scoreboard -- //
    var wins = 0;
    var losses = 0;
    var lives = 0;


 	// -- prompt player one for a word -- //
 	
 	// ***** UNCOMMENT ME ***** //var wordInput = prompt("Give me a word");
 	// ***** UNCOMMENT ME ***** // var wordInputArray = wordInput.split(""); // this will splice the input word into separate letters. 
 	// ^^ weird results with non-BMP (non-Basic-Multilingual-Plane) character sets.

 	// this will be the button you click (and could be the letter you depress, but I'd rather control it in a manner tha's prettier)
 	var letterGuess = "x";
 		// letterGuess will need to change the class once it's selected, from "letterStatic" to "LetterActivated"

 	// I will have to connect this to the amount of lives you have (so in a sense guesses are equal to lives)
 	var amountOfGuesses = "y";

// variables

	// 


	// -- logic -- //
	// functions

		//split function - to break the word into an array

		// loop
			// if statement to figure out if letterGuess equals a letter in inputWord

	// -- bring to screen -- //

	document.onkeyup = function(event) {

		var scoreboard = "Wins: " + wins + " | " + "Losses: " + losses + "<br />";

        document.querySelector("#scoreboard").innerHTML = scoreboard;
    };