 
	// NOTES:
	
		// --needed-- you will use this code to make sure that the prompted word becomes all lower case so you don't have to have upper and lower case sensitive option -//
		// String.fromCharCode(event.keyCode).toLowerCase();
		
		// --------- var Variable = {}; equals an empty object array 

		// the .getElementByClassName always brings back an error. Which is annoying because I prefer ClassName over id, but that's just preference.

	// none of my visual code will work if I don't add window.onload. everything returns null 
	
	// I don't understand the Mozilla documention of mixin, thus I don't think I clearly understand window.onload. My best guess is that it loads the DOM with all the elements first and then attempts to load my code.
	// If this is the case, why must is be a function? I feel this might be too complicated of a question to anwer.

window.onload = function() {

 	// letterGuess will need to change the class once it's selected, from "letterStatic" to "LetterActivated"
 	var wordInput = prompt("Give me a word");		// this will be the word we'll use each round
 	var letterGuess;								// to count the amount of guesses
	var guesses = [];								// stores the guesses made
    var correctGuesses;								
    var lives;										// lives
    var wordSpaces;									// amount of spaces in the word ( _ )
	
	// scoreboard
	var showLives = document.getElementById("showLives"); 

 	// game visuals 
 	var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

	// creating the alphabet list
	var myButtons = function() {
		buttons = document.getElementById("letterButton");
		letters = document.createElement("ul");		// were going to create our ul now
		for (var counter = 0; counter < alphabet.length; counter++) {
					letters.id = "alphabet"; 
					lettersList = document.createElement("li");
					lettersList.id = "letter";
					lettersList.innerHTML = alphabet[counter];

					buttons.appendChild(letters);

					letters.appendChild(lettersList);		
			} 
	}

	// creating the guess list (so many chances for puns)
	wordGuess = function () {
		wordContainer = document.getElementById("wordContainer");
		correctAnswer = document.createElement("ul");
		for (var counter = 0; counter < wordInput.length; counter++) {
						// correctAnswer.setAttribute("id", "myWord"); 
					guessLetter = document.createElement("li");
						// guessLetter.setAttribute("class", "guess");
					guessLetter.innerHTML = "_";

					guesses.push(guessLetter);

					wordContainer.appendChild(correctAnswer);
					correctAnswer.appendChild(guessLetter);
		}
	}

	//
	scoreboard = function() {

		showLives.innerHTML = "Wins: " + wins + " | " + "Losses: " + losses + "<br />" + "Guesses Left: " + guesses;
		if (lives < 1) {
			showLives.innerHTML = "GameOver";
		}
		for (var counter = 0; counter < guesses.length; counter++) {
			if (correctSpaces + wordSpaces === guesses.length) {
				showLives.interHTML = "YouWin";
			}
		}
    }

    check = function() {
    	list.onclick = function() {
    		var letterGuess = (this.innerHTML);
    		this.setAttribute("class", "letterActive");
    		this.onclick = null; //I don't know why this is the case here
    		for (var counter = 0; counter > wordInput.length; counter++) {
    			guesses[counter].innerHTML = letterGuess;
    			wordSpaces += 1;
    		}
    	}
    	// explain this portion
    	var i = (word.indexOf(letterGuess));
    	if (i === -1) {
    		lives -= 1;
    		scoreboard();
    	} else {
    		scoreboard();
    	}
    }
 	// -- prompt player one for a word -- //
 	
 	// ***** UNCOMMENT ME ***** // var wordInputArray = wordInput.split(""); // this will splice the input word into separate letters. 
 	// ^^ weird results with non-BMP (non-Basic-Multilingual-Plane) character sets.

 	// this will be the button you click (and could be the letter you depress, but I'd rather control it in a manner that's prettier)


	// -- logic -- //
	// functions

		//split function - to break the word into an array

		// loop
			// if statement to figure out if letterGuess equals a letter in inputWord

	// -- bring to screen -- //

	myButtons(); //now to execute the button function
	wordGuess();
}