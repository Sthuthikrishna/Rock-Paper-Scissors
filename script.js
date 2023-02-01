const choices = ['paper', 'scissors', 'rock'];

const buttons = document.querySelectorAll('.pick');
const scoreEl = document.getElementById('score');
const main = document.getElementById('main');
const selection = document.getElementById('selection');
const tryAgain = document.getElementById('tryAgain');

const user_select = document.getElementById('user_select');
const pc_select = document.getElementById('pc_select');
const winner = document.getElementById('winner');


const open = document.getElementById('open');
const close= document.getElementById('close');
const modal = document.getElementById('modal');



let score = 0;
let userChoice = undefined;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        userChoice = button.getAttribute('data-choice');
        
        checkWinner();

    });
});
tryAgain.addEventListener('click', () => {
    main.style.display = 'flex';
        selection.style.display = 'none';
       

});

open.addEventListener('click', () => {
    modal.style.display = 'inline-block';
       

});
close.addEventListener('click', () => {
    modal.style.display = 'none';
       

});



function checkWinner() {
    const computerChoice = picRandomChoice();

    updateSelection(user_select, userChoice);
    updateSelection(pc_select, computerChoice)
    if (userChoice === computerChoice) {
        //draw
        winner.innerText = 'draw';
    }else if ((userChoice === 'paper' && computerChoice ==='rock') || (userChoice === 'rock' && computerChoice === 'scissors') || (userChoice === 'scissors' && computerChoice === 'paper') )
    {
        updateScore();
        winner.innerText = 'win';

    }else {
        winner.innerText = 'lost';

    }
    main.style.display = 'none';
        selection.style.display = 'flex';
       

}

function updateScore() {
    score += 1;
    scoreEl.innerText = score;
}

console.log(picRandomChoice());
function picRandomChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}
function updateSelection(selectionEl, choice) {
    selectionEl.classList.remove('paper-btn');
    selectionEl.classList.remove('scissors-btn');
    selectionEl.classList.remove('rock-btn');

    const img = selectionEl.querySelector('img');
    selectionEl.classList.add(`${choice}-btn`);
    img.src = `images/hand-${choice}.svg`;
    img.alt = choice;

}

