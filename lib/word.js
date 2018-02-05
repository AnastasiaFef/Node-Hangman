var Letter = require("./Letter");
var words = require('./words.js');

// The Word constructor is responsible for creating an array of Letter objects and determining if the user guessed every Letter correctly
function Word(){
  // word.split - splits word into array of letters
  this.split = function(currentWord){
    var wordArray = currentWord.split(' ');
    console.log(wordArray);
    this.map(wordArray);
  }
  //     .map - instantiate a new `Letter` for each character and return an array
  //            referred to with the instance variable, `letters`
  this.map = function(wordArray){
    var hiddenWord = '';
    for(let i=0; i<wordArray.length; i++){
      var detachedWord = wordArray[i];
      var arrayOfLetters = [];
      detachedWord = detachedWord.split('');
      console.log(detachedWord);
      for(let j=0; j<detachedWord.length; j++){
        arrayOfLetters.push(detachedWord[j]);
        var letter = new Letter;
        hiddenWord += letter.hideIt(detachedWord[j]);
      }
      hiddenWord += ' ';
    }
    console.log(hiddenWord);
    return arrayOfLetters;
  }
}

// prototypes are optional, but will take up less memory than if we defined each method in the constructor as an instance method

// setting the method on the prototype means all instances of Word share this code but when it is called, `this` refers to that particular instance

Word.prototype.compareLetter = function(inputLetter){
  console.log(inputLetter, wordArray)
  // iterate over each letter
  // for(let i=0; this.)
  // return the solution for each to form an array of solved letters
  // create a string from the array of solved letters
}


// setting `toString()` as a method lets us concatenate it like we would a string!

  // Checks to see if any of the letters in the array match the user's guess and updates `foundLetter`

  // Print the word guessed so far--because we set the method for toString,
  //  JavaScript will automatically concatenate this even if we don't call toString

  // return whether we found a letter
 
// Returns true if all letters in the word have been guessed

  // The `every` method returns true if the callback function returns true for every element in the array



module.exports = Word;


// var word = new Word;
// word.randomWord();