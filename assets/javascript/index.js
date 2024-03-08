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
        return;
    }
    //second click
    flippedBox = false;
    secondBox = this;
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
    let allMatched = Array.from(smallBoxes).every((smallBoxes) =>
        smallBoxes.classList.contains('flipped')
    );

    if (allMatched) {
        window.alert('Congradulations! You win!');
    }
}