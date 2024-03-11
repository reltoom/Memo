let smallBoxes = document.querySelectorAll('.small-box');
let flippedBox = false;
let firstBox, secondBox;
let lockBox = false;

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
        window.alert('Congradulations! You win!');
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
//Audio function
function myAudio() {
    var audio = new Audio('../audio/cardflip.mp3');
        audio.play();
}