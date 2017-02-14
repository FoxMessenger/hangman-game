 
	// NOTES:
	
		// --needed-- you will use this code to make sure that the prompted word becomes all lower case so you don't have to have upper and lower case sensitive option -//
		// String.fromCharCode(event.keyCode).toLowerCase();
		
		// --------- var Variable = {}; equals an empty object array 


	// none of my visual code will work if I don't add window.onload. everything returns null 
	
	// I don't understand the Mozilla documention of mixin, thus I don't think I clearly understand window.onload. My best guess is that it loads the DOM with all the elements first and then attempts to load my code.
	// If this is the case, why must is be a function? I feel this might be too complicated of a question to anwer.

	// -- prompt player one for a word -- //

window.onload = function() {

 	var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']	// game visuals 

 	var word = prompt("Give me a word");			// this will be the word we'll use each round

 	var guess;										// guess
	var guesses = [];								// stores the guesses made
    var lives;										// lives

    var correctGuesses;								// correct guesses
	
	// scoreboard
	var showLives = document.getElementById("showLives"); 


	// creating the alphabet list
	var myButtons = function() {
		var buttons = document.getElementsByClassName("letterButton");
		var letters = document.createElement("ul");	
		
		for (var i = 0; i < alphabet.length; i++) {
					
			lettersList = document.createElement("li");
			letters.classList.add("alphabet"); 
					
			lettersList.classList.add("letter");
			lettersList.innerHTML = alphabet[i];
			check();
			
			buttons[0].appendChild(letters); // error: append child is not a function
			letters.appendChild(lettersList);		
					

					
			} 
	}

	// creating the guess list (so many chances for puns)
	var wordGuess = function () {
		var wordContainer = document.getElementsByClassName("wordContainer");
		var correctAnswer = document.createElement("ul");
		
		for (var i = 0; i < word.length; i++) {
					correctAnswer.setAttribute("class", "myWord"); 
					
					guess = document.createElement("li");
					guess.setAttribute("class", "guess");
					guess.innerHTML = "_";

					guesses.push(guess);
					wordContainer[0].appendChild(correctAnswer);
					correctAnswer.appendChild(guess);
		}
	}

	// scoreboard visual
	var scoreboard = function() {
		showLives.innerHTML = "You have " + lives + " lives left";
		console.log('lives are', showLives);

		if (lives < 1) {
			showLives.innerHTML = "GameOver";
		}
		for (var i = 0; i < guesses.length; i++) {
			if (correctGuesses === guesses.length) {
				showLives.innnerHTML = "YouWin";
			}
		}
    }

    // click button
    var check = function() {
    	lettersList.onclick = function() {
    		var guess = (this.innerHTML);
    		this.setAttribute("class", "active");
    		this.onclick = null; //I don't know why this is the case here
    		
    		for (var i = 0; i < word.length; i++) {
    			if (word[i] === guess) {
    				guesses[i].innerHTML = guess;
    				correctGuesses += 1;
    			}
    		}
    		// explain this portion
    		var checkChar = (word.indexOf(guess));
    		if (checkChar === -1) {
    			lives -= 1;
    			scoreboard();
    		}  else {
    			scoreboard();
    		}
    	}
    }


    var game = function() {
    	word = word.replace(/\s/g, "-");
		console.log(word);
		myButtons();

    	guesses = [];
    	lives = 10;
    	correctGuesses = 0;

		wordGuess();
		scoreboard();
    }

    game();

}