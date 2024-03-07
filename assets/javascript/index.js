






















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
