
function createMemo(){//  Creating 3 x 3 Grid
    let rows = 3;
    let columns = 3;
    let gridArea = document.getElementById('memo-grid');

    // Create the grid dynamically
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < rows; j++) {
        for (let k = 0; k < columns; k++) {
        // Create a grid item element
            let gridBox = document.createElement('div');
            gridBox.className = 'grid-box';
            gridBox.textContent = `${i}${j}${k}`;

        // Append the grid item to the grid container
        gridArea.appendChild(gridBox);
      }
    }
  }
}
















/*

// Creating a table of images  2x3.....Not sure this will work.
let memoBlock = [];

let gameGrid = document.createElement('table');
gameGrid.id = 'game-area';

let gridHtml = `
<thead>
</thead>
<tbody>
</tbody>
`;

gameGrid.innerHTML = gridHtml;
let gridBody = gameGrid.getElementsByTagName('tbody')[0];

let gridBodyHtml = '';
for (let i = 0; i < 3; i++) {
    gridBodyHtml += `
        <tr>
            <td>${i}</td>
            <td>${memoBlock[i]}</td>
        </tr>
    `
}

gridBody.innerHTML = gridBodyHtml;
document.body.appendChild(gameGrid);
*/