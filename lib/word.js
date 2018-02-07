var Letter = require("./Letter");
var words = require('./words.js');
var albpabet = ['a','b','c','d','e','f','g','h','i','j','k',
'l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//===================================
// * **Word.js**: Contains a constructor, Word that depends on the Letter constructor. 
// This is used to create an object representing the current word the user is attempting 
// to guess. That means the constructor should define:
//   * An array of `new` Letter objects representing the letters of the underlying word
//   * A function that returns a string representing the word. This should call the 
// function on each letter object (the first function defined in `Letter.js`) that 
// displays the character or an underscore and concatenate those together.
//   * A function that takes a character as an argument and calls the checkLetter function on 
// each letter object (the second function defined in `Letter.js`)
//===================================

// The Word constructor is responsible for creating an array of Letter objects 
// and determining if the user guessed every Letter correctly
function Word(selectedWord){
  this.word = selectedWord;
  this.lettersArray = [];
}

Word.prototype.representWord = function(){
  var display = '';
  lettersArray.forEach(element => {
    display += element.displayLetter(element);
  });
  console.log(display)
}

// word.split - splits word into array of letters
//HERE I CAN DISPLAY INITIAL HIDDEN WORD
Word.prototype.split = function(){
  var wordArray = this.word.split(' ');
  var arrayOfLetterObjects = [];
  wordArray.forEach(function(element){
    element.split('').forEach(function(letter){
      var newLetter = new Letter(letter);
      arrayOfLetterObjects.push(newLetter);
    })
    // arrayOfLetterObjects.push('\xA0')
  })
  this.lettersArray = arrayOfLetterObjects;
}


Word.prototype.map = function(inputLetter){
  var letter = new Letter(inputLetter);
  var userInput = new Letter(inputLetter)
  var display = '';
  var found = 0;
  var incrementIfFound = 0;
  this.lettersArray.forEach(function(wordLetter){
    found = wordLetter.checkLetter(userInput);
    display += wordLetter.displayLetter();
    if(found > 0){
      incrementIfFound ++;
    }
  })
  // letter.checkLetter(this.lettersArray);
  // this.lettersArray.forEach(function(singleLetter){
  //   display =+ singleLetter.displayLetter();
  // })


  //return either found or !found to check if word opened or decrement tries 
  console.log(display);
  var justArray = [incrementIfFound, display];
  return justArray;
}
  //     .map - instantiate a new `Letter` for each character and return an array
  //            referred to with the instance variable, `letters`

// prototypes are optional, but will take up less memory than if we defined each method in the constructor as an instance method

// setting the method on the prototype means all instances of Word share this code but when it is called, `this` refers to that particular instance


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