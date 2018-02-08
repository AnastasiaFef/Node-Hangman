var Letter = require("./Letter");
var words = require('./words.js');

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
Word.prototype.split = function(){
  var wordArray = this.word.split(' ');
  var arrayOfLetterObjects = [];
  wordArray.forEach(function(element){
    element.split('').forEach(function(letter){
      var newLetter = new Letter(letter);
      arrayOfLetterObjects.push(newLetter);
    })
  })
  this.lettersArray = arrayOfLetterObjects;
  this.map();
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
  console.log('>>> ',display);
  var justArray = [incrementIfFound, display];
  return justArray;
}

module.exports = Word;
