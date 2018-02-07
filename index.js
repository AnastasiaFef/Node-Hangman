var inquirer = require('inquirer');
var Word = require('./lib/word.js');
var words = require('./lib/words.js');

var guesses = 10;
var wins = 0;
var losses = 0;
var selectedWord;
var myWord;

grabRandomWord();

//===============================
// * **index.js**: The file containing the logic for the course of the game, 
// which depends on `Word.js` and:
//   * Randomly selects a word and uses the `Word` constructor to store it
//   * Prompts the user for each guess and keeps track of the user's remaining guesses
//===============================

function grabRandomWord() {
    var whatsLimit = words.length - 1
    var i = Math.floor(Math.random()*whatsLimit);
    console.log(words[i])
    selectedWord = words[i];
    myWord = new Word(selectedWord);
    myWord.split();
    guess();
}

function guess(){
    inquirer.prompt([
        {
            type: "input",
            name: 'letter',
            message: 'Type a single letter and hit Enter to guess'
        }
    ]).then(function(answer){
        var response = myWord.map(answer.letter);
        var opened = response[0];
        console.lod
        if(opened > 0){
            // console.log(selectedWord, response[1])
            if(selectedWord === response[1]){
                console.log('You WON!')
                wins ++;
                //DISPLAY STATS
                whatsNext();
            }
        }
        else{
            guesses -= 1;
            if(guesses<1){
                console.log('Looser');
                //DISPLAY STATS
                whatsNext();
                return;
            }
        }

        console.log('Guesses left: ', guesses)
        //if true, reprint word with guessed letter included
        //if false, decrement number of guesses
        guess();
    })
}


function whatsNext(){
    inquirer.prompt([
        {
            type: 'list',
            name: 'wannaMore',
            message: 'What\'s next?',
            choices: ['Play more', 'Nah, I\'m done...']
        }
    ]).then(function(answer){
        if(answer.wannaMore === 'Play more'){
            guesses = 10;
            selectedWord = '';
            myWord = '';
            grabRandomWord();
        }
        else if(answer.wannaMore === 'Nah, I\'m done...'){
            return;
        }
    })
}




// Game.prototype.play = function(){
    //display board, shows your guesses? maybe not shows guesses left scoreboard
    // this.grabRandomWord();
    //check to see if word is guesses completely, then if so, increment wins and ask if want a new game
    //if guesses <=0 prompt 'you suck' ask if wants new game, increment losses

// };

    // Save a reference for `this` in `self` as `this` will change inside of inquirer
    
  
    // Creates a new Word object using a random word from the array, asks the user for their guess
  
    // Uses inquirer to prompt the user for their guess
  
        // If the user has no guesses remaining after this guess, show them the word, ask if they want to play again
  
          // If the user guessed all letters of the current word corrently, reset guessesLeft to 10 and get the next word
  
  
          // Otherwise prompt the user to guess the next letter
  
  
    // Asks the user if they want to play again after running out of guessesLeft
  
          // If the user says yes to another game, play again, otherwise quit the game
    
  
    // Prompts the user for a letter
  
              // The users guess must be a number or letter
   
          // If the user's guess is in the current word, log that they chose correctly
  
  
            // Otherwise decrement `guessesLeft`, and let the user know how many guesses they have left
  
  
    // Logs goodbye and exits the node app
  

  
//   module.exports = Game;