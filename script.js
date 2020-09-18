let gridSize = 16;

function createGrid(size){
    //loop size times to create rows
    //loop size times per row to create columns
    //append to DOM
    const container = document.querySelector("#mainContainer");
    let count = 0;
    for (let i = 0; i < size * size; i++) {
        container.setAttribute("style", "grid-template-columns: " + "auto ".repeat(size));
        let newSquare = document.createElement("div");
        newSquare.setAttribute("id", "gridSquare" + String(count));
        newSquare.classList.toggle("gridSquare");
        newSquare.textContent = String(count++);
        container.appendChild(newSquare);
    }
}

createGrid(16);
let gridSquares = document.querySelectorAll('.gridSquare');
  gridSquares.forEach(gridSquare => gridSquare.addEventListener('mouseover', changeColor)); //each key needs its own event listener

function changeColor(e){
    console.log(e);
    e.srcElement.classList.add("hovered");
}