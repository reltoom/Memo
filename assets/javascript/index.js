let smallBoxes = document.querySelectorAll('.small-box');
let flippedBox = false;
let firstBox, secondBox;
let lockBox = false;
let mute = false;

//Modal
let modal = document.getElementById('myModal');

//Starts a New Game on Window Load
window.onload = startGame();

//Function to Start A Game
function startGame() {
    smallBoxes.forEach((smallBox) => smallBox.addEventListener('click', flip));
    shuffle();
}

//Flipping boxes 
function flip() {
    if (lockBox) return;
    if (this === firstBox) return;
    this.classList.add('flipped');
    //first click
    if (!flippedBox) {
        flippedBox = true;
        firstBox = this;
        myAudio();
        return;
    }
    //second click
    flippedBox = false;
    secondBox = this;
    myAudio();
    doesItMatch();
    playerWin();
}

//Check to See if Flipped Boxes Match
function doesItMatch() {
    let match = firstBox.title === secondBox.title;
    if (match) {
        disableBoxes();
    } else {
        flipBackBoxes();
    }
}

//Stop Clicking of Visible Boxes
function disableBoxes() {
    firstBox.removeEventListener('click', flip);
    secondBox.removeEventListener('click', flip);
}

// Flip Back Boxes to Facedown
function flipBackBoxes() {
    lockBox = true;
    setTimeout(() => {
        firstBox.classList.remove('flipped');
        secondBox.classList.remove('flipped');
        lockBox = false;
    }, 1100);
}

//Shuffle the Location of the Boxes 
function shuffle() {
    smallBoxes.forEach((box) => {
        let randomize = Math.floor(Math.random() * 9);
        box.style.order = randomize;
    });
}

//Check to See if Player Has Won, Matched All Pairs
function playerWin() {
    let allMatched = Array.from(smallBoxes).every((smallBox) =>
        smallBox.classList.contains('flipped')
    );

    if (allMatched) {
        modal.style.display = 'block';
    }
}

//Reset Game to Start Again or Play Again 3 x 3
function resetGame() {
    startGame();
    flippedBox = false;
    lockBox = false;
    smallBoxes.forEach((smallBox) => smallBox.classList.remove('flipped'));
    let extraBox = document.getElementById('extra');
    extraBox.classList.add('flipped');
}

//Reset Game to Start Again or Play Again 4 x 4
function resetGame2() {
    startGame();
    flippedBox = false;
    lockBox = false;
    smallBoxes.forEach((smallBox) => smallBox.classList.remove('flipped'));
}
//Audio function When Clicking on Boxes
function myAudio() {
    var audio = new Audio('assets/audio/cardflip.mp3');
    if (mute === false) {
        audio.play();
        audio.playbackRate = 1.5;
    } else {
        return;
    }
}

//Sound Button Function to Mute and Unmute
function toggleMute() {
    if (mute === false) {
        mute = true;
        let sound = document.getElementById('sound');
        sound.innerHTML = 'Sound Off';
    } else {
        mute = false;
        sound.innerHTML = 'Sound On! ';
    }
}
//Modal Pop Win Message Close
var myWin = document.getElementById('myModal');
myWin.onclick = function () { close(); };
function close() {
    myWin.style.display = 'none';
}
//Player Can Click anywhere on Modal to Close
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};
