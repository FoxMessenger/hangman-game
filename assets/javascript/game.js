 
	// NOTES:

		// needed 	- press any key to get started. // using click letter to play, I hope this is ok
		//			- theme // check
		//			- Wins // check
		//			- You Win // check
		//			- Game Over // check
		//			- play again function // not working -- onclick returns null
		//			- on key up // not working -- used to guess whole word 

		// extra	- play a sound	
	
		// --needed-- you will use this code to make sure that the prompted word becomes all lower case so you don't have to have upper and lower case sensitive option -//
		// String.fromCharCode(event.keyCode).toLowerCase();
		
		// --------- var Variable = {}; equals an empty object array 


	// none of my visual code will work if I don't add window.onload. everything returns null 
	
	// I don't understand the Mozilla documention of mixin, thus I don't think I clearly understand window.onload. My best guess is that it loads the DOM with all the elements first and then attempts to load my code.
	// If this is the case, why must is be a function? I feel this might be too complicated of a question to anwer.

	// -- prompt player one for a word -- //

window.onload = function() {

 	var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']	// game visuals 

 	var word; //prompt("Give me a word");			// this will be the word we'll use each round

 	var guess;										// guess
	var guesses = [];								// stores the guesses made
    var lives;										// lives
    var playAgain;
    var wins;
	var letterList;
    
    var space;										// the space between words "-"
    // var dashReplace = space.replace("-", " ");		// replaces the space character with an actual space
	// the theme array
    var theme = [
    		["gladiator", "john-wick",  "jack-reacher", "enter-the-dragon", "the-raid", "the-bourne-identity", "mad-max", "taken"], //action movies
    		["the-last-airbender", "vampires-suck", "battlefield-earth", "speed-two-cruise-control", "fear-dot-com", "daddy-day-camp", "jaws-the-revenge", "fifty-shades-of-grey",], //terrible movies
    		["blair-witch-project", "alien", "prometheus", "cabin-in-the-woods", "scream", "poltergeist"], // horror movies
    		["fences", "moonlight", "shawshank-redemption", "a-beautiful-mind", "good-will-hunting", "cast-away"], //dramas
    		["superbad", "airplane", "bridesmaids", "monty-python-and-the-holy-grail"] //comedies
    		];	

    var correctGuesses;								// correct guesses
	
	// scoreboard
	var showLives = document.getElementById("showLives");
	
	// adding wins
	var winsElement = document.getElementById("wins");
	
			    


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
			if (word[i] === "-") {
				guess.innerHTML = "-";
				space = 1;
			} else {
				guess.innerHTML = "_";
			}

			guesses.push(guess);
			wordContainer[0].appendChild(correctAnswer);
			correctAnswer.appendChild(guess);
		}
	}

	// scoreboard visual
	var scoreboard = function() {
		showLives.innerHTML = "You have " + lives + " lives left";
		winsElement.innerHTML = "Wins: " + wins;
		if (lives < 1) {
			showLives.innerHTML = "Game Over";
		}
		for (var i = 0; i < guesses.length; i++) {
			if (correctGuesses + space === guesses.length) {
				showLives.innerHTML = "You Win!";
				wins =+ 1;
				winsElement.innerHTML = "Wins: " + wins;
				console.log(wins);
			}
		}
    }


    // onKey up for quicker answer

		document.onkeyup = function (event) {
    		var guess = event.keyCode;
    		console.log(guess);
 
    		guess.setAttribute("class", "active");
    		guess.onkeyup = null; // if the button is already clicked we don't want it setting off again

    		for (var i = 0; i < word.length; i++) {
    			if (word[i] === guess) {
    				guesses[i].innerHTML = guess;

    				correctGuesses += 1;
    				console.log("are have guessed " + correctGuesses + " correctly.");
    			}
    		}
   		 }  
    

    // click button
    var check = function() {
    				
    	lettersList.onclick = function() {
    		var guess = (this.innerHTML);
    		this.setAttribute("class", "active");
    		this.onclick = null; // if the button is already clicked we don't want it setting off again

    		
    		for (var i = 0; i < word.length; i++) {
    			if (word[i] === guess) {
    				guesses[i].innerHTML = guess;

    				correctGuesses += 1;
    				console.log("are have guessed " + correctGuesses + " correctly.");
    			}
    		}
    		// check the charact index of the letter pressed
    		var checkChar = (word.indexOf(guess));
    		if (checkChar === -1) {
    			lives -= 1;
    			scoreboard();
    		}  else {
    			scoreboard();
    		}
    	}
    }

	// selecting the theme
	var themeSelect = function () {
		// decide whether the theme is in array 0-4
		if (themeIs === theme[0]) {
			themeName.innerHTML = "The theme is action movies";
		} else if (themeIs === theme[1]) {
			themeName.innerHTML = "The theme is terrible movies";
		} else if (themeIs === theme[2]) {
			themeName.innerHTML = "The theme is horror flicks";
		} else if (themeIs === theme[3]) {
			themeName.innerHTML = "The theme is drama flicks";
		} else if (themeIs === theme[4]) {
			themeName.innerHTML = "The theme is comedy movies";
		}
	}


    var game = function() {

    	themeIs = theme[Math.floor(Math.random() * theme.length)]; // themeIs is equal to the theme variable array, which is passed through an RNG of the theme length. This gives us 1 of 4 options
    	word = themeIs[Math.floor(Math.random() * themeIs.length)]; // the word is then replaced with whatever the RNG word from themeIs (1 of 4), but then ran through and actual word -- actually I'm not sure why this works.
    	// word = word.replace("-", " "); // this doesn't work
    	console.log(word);


    	guesses = [];
    	lives = 10;
    	correctGuesses = 0;
    	space = 0;
    	wins = 0;

		myButtons();
		themeSelect();
		wordGuess();
		scoreboard();
    }

    game();


	// Reset Game

 //  document.getElementById('reset').onclick = function() {
	// 	// correctAnswer.removeChild(correctAnswer);
	// 	lettersList.removeChild(letters);
	// 	game();
	// 	console.log("clicked!");
	// }

};


