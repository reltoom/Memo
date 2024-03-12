let smallBoxes = document.querySelectorAll('.small-box');
let flippedBox = false;
let firstBox, secondBox;
let lockBox = false;
let mute = false;
//Modal
let modal = document.getElementById('myModal');

window.onload = startGame();


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

//Check to see if flipped boxes match
function doesItMatch() {
    let match = firstBox.title === secondBox.title;
    if (match) {
        disableBoxes();
    } else {
        flipBackBoxes();
    }
}

//Stop clicking of visible boxes
function disableBoxes() {
    firstBox.removeEventListener('click', flip);
    secondBox.removeEventListener('click', flip);
}

// Flip back boxes to face down
function flipBackBoxes() {
    lockBox = true;
    setTimeout(() => {
        firstBox.classList.remove('flipped');
        secondBox.classList.remove('flipped');
        lockBox = false;
    }, 1100);
}

//Shuffle the location of the boxes 
function shuffle() {
    smallBoxes.forEach((box) => {
        let randomize = Math.floor(Math.random() * 9);
        box.style.order = randomize;
    });
}

//Check to see if player has won, matched all pairs
function playerWin() {
    let allMatched = Array.from(smallBoxes).every((smallBox) =>
        smallBox.classList.contains('flipped')
    );

    if (allMatched) {
        modal.style.display = 'block';
    }
}

//Reset game to start again or play again
function resetGame() {
    startGame();
    flippedBox = false;
    lockBox = false;
    smallBoxes.forEach((smallBox) => smallBox.classList.remove('flipped'));
    let extraBox = document.getElementById('extra');
    extraBox.classList.add('flipped');
}

function resetGame2() {
    startGame();
    flippedBox = false;
    lockBox = false;
    smallBoxes.forEach((smallBox) => smallBox.classList.remove('flipped'));
}
//Audio function
function myAudio() {
    var audio = new Audio('assets/audio/cardflip.mp3');
    if (mute === false) {
        audio.play();
        audio.playbackRate = 1.5;
    } else {
        return;
    }
}

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
//Modal close
var myWin = document.getElementById('myModal');
myWin.onclick = function () { close() };
function close() {
    myWin.style.display = 'none';
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
