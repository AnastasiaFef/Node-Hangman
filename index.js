var inquirer = require('inquirer');
var Word = require('./lib/word.js');
var words = require('./lib/words.js');
var emoji = require('node-emoji');

var wins = 0;
var losses = 0;

function Game(){
    this.guesses = 10;
    this.selectedWord = '';
    this.myWord;
    this.albpabet = ['a','b','c','d','e','f','g','h','i','j','k',
    'l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    this.lettersGuessed = [];
};

welcome();

function welcome(){
    console.log('\nWelcome to ', emoji.get(':tangerine:'), emoji.get(':pineapple:'), emoji.get(':green_apple:'), emoji.get(':apple:') ,' themed Hangman Game');
    startGame();
}

function startGame(){
    var newGame = new Game();
    setTimeout(function(){
        newGame.grabRandomWord();
    },1000)   
}

Game.prototype.grabRandomWord = function() {
    var whatsLimit = words.length - 1
    var i = Math.floor(Math.random()*whatsLimit);
    this.selectedWord = words[i];
    this.myWord = new Word(this.selectedWord);
    this.myWord.split(); 
    this.guess();
};

Game.prototype.guess = function(){
    var thiss = this;
    console.log('\n')
    inquirer.prompt([
        {
            type: "input",
            name: 'letter',
            message: 'Type a single letter and hit Enter to guess', 
        }
    ]).then(function(answer){
        var ans = answer.letter.toLowerCase();
        if(thiss.albpabet.indexOf(ans) < 0){
            console.log(emoji.get(':exclamation:'), 'Please enter a letter')
            thiss.guess();
            return;
        }
        else{
            if(thiss.lettersGuessed.indexOf(ans) >= 0){
                console.log(emoji.get(':exclamation:'), 'Please don\'t repeat yourself!');
                thiss.guess();
                return;
            }
            else{
                thiss.lettersGuessed.push(ans);
            }
        }
        var response = thiss.myWord.map(ans);
        var opened = response[0];
        if(opened > 0){
            if(thiss.selectedWord === response[1]){ //MAKE SURE I TAKE SPACE IN COUNT
                console.log('\n',emoji.get(':apple:'), emoji.get(':pineapple:'), emoji.get(':cherries:'), emoji.get(':pear:'), emoji.get(':peach:'), emoji.get(':tangerine:'),'\n' ,emoji.get(':watermelon:'),'You WON', emoji.get(':banana:'), '\n',emoji.get(':green_apple:'),emoji.get(':grapes:'), emoji.get(':melon:'), emoji.get(':peach:'), emoji.get(':pineapple:') , emoji.get(':strawberry:'), '\n');
                wins ++;
                displayStats();
                thiss.whatsNext();
                return;
            }
            console.log(emoji.get('+1'), emoji.get('+1'), emoji.get('+1'), emoji.get('+1'), emoji.get('+1'))
        }
        else{
            thiss.guesses -= 1;
            console.log(emoji.get(':-1:'),'Oops...', emoji.get(':poop:'))
            if(thiss.guesses<1){
                losses += 1;
                console.log('\n',emoji.get(':boom:'),emoji.get(':boom:'),emoji.get(':boom:'),emoji.get(':boom:'),emoji.get(':boom:'),'\n', emoji.get(':boom:') ,'Loser', emoji.get(':boom:'), '\n' ,emoji.get(':boom:'),emoji.get(':boom:'),emoji.get(':boom:'),emoji.get(':boom:'),emoji.get(':boom:'), '\n');
                console.log('Didn\'t you know fruit ', thiss.selectedWord, '???', emoji.get(':anguished:'))
                displayStats();
                thiss.whatsNext();
                return;
            }
        }
        var guessed = '';
        thiss.lettersGuessed.forEach(function(lettr){
            guessed += lettr + ' ';
        })
        console.log('Guesses left: ', thiss.guesses, '\nAlready guessed letters: ', guessed);
        thiss.guess();
    })
};

Game.prototype.whatsNext = function (){
    inquirer.prompt([
        {
            type: 'list',
            name: 'wannaMore',
            message: 'What\'s next?',
            choices: ['Play again', 'Nah, I\'m done...']
        }
    ]).then(function(answer){
        if(answer.wannaMore === 'Play more'){
            startGame();
        }
        else if(answer.wannaMore === 'Nah, I\'m done...'){
            console.log(emoji.get(':poop:'), emoji.get(':poop:'), emoji.get(':poop:'), "Don\'t come back!!!", emoji.get(':poop:'), emoji.get(':poop:'), emoji.get(':poop:'))
            return;
        }
    })
}

function displayStats(){
    console.log('Wins: ', wins, '\nLosses: ', losses, '\n')
}