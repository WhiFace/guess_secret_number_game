'use strict';




//events

let secretNum = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

 

document.querySelector('.check').addEventListener('click', function(){

    const guess = Number(document.querySelector('.guess').value);
    
    if(!guess)
    {
        displayMessage('No number!');
        
    }
    else if(guess === secretNum)
    {
        displayMessage('Correct Number! 🥰');
        displayScore(secretNum);

        document.querySelector('body').style.backgroundColor = '#60b347'; 
        document.querySelector('.number').style.width = '30rem'


        //high score 
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    } else if(guess !== secretNum)
    {

        if(score > 1){

            displayMessage(guess > secretNum ? 'Too high!' : 'Too low!');

            score--;
            displayScore(score);

        } else {
            displayMessage('You lost the game!');
           displayScore(0);
        }
    } 

});
    
    

document.querySelector('.again').addEventListener('click', function()
{
    score = 20
    secretNum = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.guess').value = '';
    displayMessage('Start guessing...');
    displayScore(score);
    document.querySelector('.number').textContent = '?';

    document.querySelector('body').style.backgroundColor = '#222'; 
    document.querySelector('.number').style.width = '15rem';
    
});



function displayMessage(message){
    document.querySelector('.message').textContent = message;
}

function displayScore(score){
    document.querySelector('.score').textContent = score;
}