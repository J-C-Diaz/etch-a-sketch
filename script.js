let gridSize = 16;
const container = document.querySelector("#mainContainer");

function createGrid(size){
    //loop size times to create rows
    //loop size times per row to create columns
    //append to DOM
    let count = 0;
    for (let i = 0; i < size * size; i++) {
        container.setAttribute("style", "grid-template-columns: " + "auto ".repeat(size));
        let newSquare = document.createElement("div");
        newSquare.setAttribute("id", "gridSquare" + String(count++));
        newSquare.classList.toggle("gridSquare");
        container.appendChild(newSquare);
    }
}

createGrid(gridSize);
let gridSquares = document.querySelectorAll('.gridSquare');
  gridSquares.forEach(gridSquare => gridSquare.addEventListener('mouseover', changeColor)); //each key needs its own event listener

function changeColor(e){
    console.log(e);
    e.srcElement.classList.add("hovered");
}

function resetCanvas(){
    while(container.childElementCount > 0){
        console.log(container.childElementCount);
        container.lastChild.remove();
    }
    gridSize = prompt("Enter a size for your new Canvas", "16");
    createGrid(gridSize);
    let gridSquares = document.querySelectorAll('.gridSquare');
    gridSquares.forEach(gridSquare => gridSquare.addEventListener('mouseover', changeColor)); //each key needs its own event listener
}

let resetButton = document.querySelector('#resetButton');
resetButton.addEventListener("click", resetCanvas);