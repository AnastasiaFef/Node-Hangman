// The Letter constructor is responsible for displaying either an underscore 
//or the underlying character for each letter in the word

// =============
// * **Letter.js**: Contains a constructor, Letter. This constructor should be able to 
// either display an underlying character or a blank placeholder (such as an underscore), 
// depending on whether or not the user has guessed the letter. That means the constructor 
// should define:
//   * A string value to store the underlying character for the letter
//   * A boolean value that stores whether that letter has been guessed yet
//   * A function that returns the underlying character if the letter has been guessed, 
// or a placeholder (like an underscore) if the letter has not been guessed
//   * A function that takes a character as an argument and checks it against the 
// underlying character, updating the stored boolean value to true if it was guessed 
// correctly
// =============

function Letter(userInput) {
  this.letter = userInput;
  this.opened = false;
  this.alreadyGuessed = false;
};

Letter.prototype.displayLetter = function(){
  if(this.opened){
    return this.letter;
  }
  else{
    return '-';
  };
};

Letter.prototype.checkLetter = function(userInput){
  // if(this.alreadyGuessed){
  //   console.log('Don\'t repeat yourself!');
  // }
  // else{
  //   this.alreadyGuessed = true;
  // }
  if(this.letter === userInput.letter){
    this.opened = true;
    return 1;
  }
  else{
    return 0;
  }
};


// Letter.prototype.checkLetter = function(arrayOfLetters){
//   console.log('arrayOfLetters', arrayOfLetters)
//   arrayOfLetters.forEach(function(singleLetter){
//     console.log(singleLetter.letter , this.Letter.letter)
//     if(singleLetter.letter === this.letter){
//       this.opened = true;
//       console.log("FOUND! ", singleLetter, this.letter)
//     }
//     else{
//       console.log("didn't find letter in word...", singleLetter, this.letter)
//     }
//   });
// }






  // If a character is not a number or a letter, make it visible right away
  // Save the underlying character

  // prototypes are optional
  
  // Returns either an underscore or the underlying character depending on `this.visible`
  //    because we call this function toString, when we call `this.letters.join` in
  //    Word.js, JavaScript automatically uses the value we return here

  
  // Accepts a user's guess
  
    // Otherwise return false
  
  
  module.exports = Letter;