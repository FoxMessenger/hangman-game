

window.onload = function() {
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

//======= 
// main game variables
//======= 	

	 var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'] // game visuals 

	 // var word; //prompt("Give me a word");			// this will be the word we'll use each round

	 var guess; // guess
	 var guesses = []; // stores the guesses made
	 var lives; // lives
	 var playAgain;
	 var wins;
	 var listOfLetters = {};

	 var space; // the space between words "-"
	 // var dashReplace = space.replace("-", " ");		// replaces the space character with an actual space
	 // the theme array
	 
	 var theme = [
	     ["gladiator", "john-wick", "jack-reacher", "enter-the-dragon", "the-raid", "the-bourne-identity", "mad-max", "taken"],
	     //action movies
	     ["the-last-airbender", "vampires-suck", "battlefield-earth", "the-room", "fear-dot-com", "daddy-day-camp", "jaws-the-revenge", "fifty-shades-of-grey", ], //terrible movies
	     ["blair-witch-project", "alien", "prometheus", "cabin-in-the-woods", "scream", "poltergeist"], // horror movies
	     ["fences", "moonlight", "shawshank-redemption", "a-beautiful-mind", "good-will-hunting", "cast-away"], //dramas
	     ["superbad", "airplane", "bridesmaids", "monty-python-and-the-holy-grail"] //comedies
	 ];
	 
	 // correct guesses
	 var correctGuesses; 

	 // scoreboard
	 var showLives = document.getElementById("showLives");

	 // adding wins
	 var winsElement = document.getElementById("wins");


//======= 
// initialize game
//======= 
     var game = function() {

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
	     // Reset Game

	     //  document.getElementById('reset').onclick = function() {
	     // 	// correctAnswer.removeChild(correctAnswer);
	     // 	lettersList.removeChild(letters);
	     // 	game();
	     // 	console.log("clicked!");
	     // }

	     // creating the alphabet list
     // selecting the theme

     // selecting a random theme
     var themeSelect = function() {
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

     // selecting a random word
     var themeIs = theme[Math.floor(Math.random() * theme.length)]; // themeIs is equal to the theme variable array, which is passed through an RNG of the theme length. This gives us 1 of 4 options
     var word = themeIs[Math.floor(Math.random() * themeIs.length)]; // the word is then replaced with whatever the RNG word from themeIs (1 of 4), but then ran through and actual word -- actually I'm not sure why this works.
     var word = word.replace("-", " "); // this doesn't work
     console.log(word)


     var myButtons = function() {
         // find the letterBtns class in HTML first
         var buttons = document.getElementsByClassName("letterBtns");

         // then we'll create a list of letters afterwards
         var letters = document.createElement("ul");

         // we want to run through every letter in our alphabet array
         for (var i = 0; i < alphabet.length; i++) {

         	 // this will create teh beginning of our list.
             listOfLetters = document.createElement("li");

             // Add the class alphabet to our letters list
             letters.classList.add("alphabet");

             // Add the class letter to each item created
             listOfLetters.classList.add("letter");

             // port the letter over
             listOfLetters.innerHTML = alphabet[i];
             check();

             buttons[0].appendChild(letters);
             letters.appendChild(listOfLetters);
         }
     }

     // click button
     var check = function() {

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
         } else {
             scoreboard();
         }
     }

		listOfLetters.onclick = function() {
         var guess = (this.innerHTML);
         this.setAttribute("class", "active");
         this.onclick = null; // if the button is already clicked we don't want it setting off again
     }

     // creating the guess list (so many chances for puns)
     var wordGuess = function() {
     	 // this is where we'll store the word
         var wordContainer = document.getElementsByClassName("wordContainer");
         // this is where we'll create the blank tile
         var correctAnswer = document.createElement("ul");

         // Now to run 
         for (var i = 0; i < word.length; i++) {
             correctAnswer.setAttribute("class", "myWord");
             guess = document.createElement("li");
             // guess.setAttribute("class", "guess");
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

//======= 
//scoreboard visual
//======= 
     var scoreboard = function() {
         showLives.innerHTML = "You have " + lives + " lives left";
         winsElement.innerHTML = "Wins: " + wins;
         if (lives < 1) {
             showLives.innerHTML = "Game Over";
         }
         for (var i = 0; i < guesses.length; i++) {
             if (correctGuesses + space === guesses.length) {
                 showLives.innerHTML = "You Win!";
                 wins = +1;
                 winsElement.innerHTML = "Wins: " + wins;
                 console.log(wins);
             }
         }
     }


     // onKey up for quicker answer

     document.onkeyup = function(event) {
         var guess = event.keyCode;

         // guess.setAttribute("class", "active");
         guess.onkeyup = null; // if the button is already clicked we don't want it setting off again

         for (var i = 0; i < word.length; i++) {
             if (word[i] === guess) {
                 guesses[i].innerHTML = guess;

                 correctGuesses += 1;
                 console.log("are have guessed " + correctGuesses + " correctly.");
             }
         }
     }








     game();
};