'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'wrong number❌'

 document.querySelector('.number').textContent = 12;

 document.querySelector('.score').textContent= 14;

 console.log(document.querySelector('.guess').value);
 document.querySelector('.guess').value = 22;
*/

let number =Math.trunc( Math.random() * 20) +1;

let score = 20;

let highscore = 0;

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
  const guess = Number(document.querySelector('.guess').value);

console.log(guess, typeof guess);
// when no input
if(!guess){
    // document.querySelector('.message').textContent = 'No number! ⛔'
    displayMessage('No number! ⛔');
}
// when player wins
else if(guess === number){
  // document.querySelector('.message').textContent = '🎊Correct answer🎊'
  displayMessage('🎊Correct answer🎊');

  document.querySelector('.number').textContent = number;

  document.querySelector('body').style.backgroundColor=' #60b347';

  document.querySelector('.number').style.width = '30rem';

  if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  }
  
}
// when guess is wrong
else if(guess !== number) {
  if(score > 1){
    // document.querySelector('.message').textContent = guess > number ? 'Too high!📈' : 'Too Low 📉';
    displayMessage(guess > number ? 'Too high!📈' : 'Too Low 📉');
    score--;
    document.querySelector('.score').textContent= score;
    }else{
      // document.querySelector('.message').textContent = 'You Lost❌';
      displayMessage('You Lost❌');
      document.querySelector('.score').textContent= 0;
    }
}

// when guess is high
// else if(guess > number){
//   if(score > 1){
//   document.querySelector('.message').textContent = 'Too high!📈';
//   score--;
//   document.querySelector('.score').textContent= score;
//   }else{
//     document.querySelector('.message').textContent = 'You Lost❌';
//     document.querySelector('.score').textContent= 0;
//   }

//   // when guess is low
// }else if(guess < number){

//   if(score > 1){
//     document.querySelector('.message').textContent = 'Too Low!📉';
//     score--;
//     document.querySelector('.score').textContent= score;
//     }else{
//       document.querySelector('.message').textContent = 'You Lost❌';
//       document.querySelector('.score').textContent= 0;
//     }
// }
});

// again btn
document.querySelector('.again').addEventListener('click' , function(){

 score = 20;
 number =Math.trunc( Math.random() * 20) +1;

//  document.querySelector('.message').textContent = 'Start guessing...';
displayMessage('Start guessing...');

 document.querySelector('.score').textContent= score;

 document.querySelector('.number').textContent= '?';

 document.querySelector('.guess').value ='';

 document.querySelector('body').style.backgroundColor = '#222';

 document.querySelector('.number').style.width = '15rem';

  
});

