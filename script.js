const container = document.querySelector("#container");
const resetButton = document.querySelector("#resetButton");
const squareArray = [];
const miniSquareArray = [];
let numberOfSquares;

function createSquares(squareCount) {
  for (let i = 0; i < squareCount; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.id = "square-${i}";
    squareArray.push(square);
    container.append(square);
  }
}
function createMiniSquares(squareCount) {
  for (square of squareArray) {
    for (let i = 0; i < squareCount; i++) {
      const miniSquare = document.createElement("div");
      miniSquare.classList.add("miniSquare");
      miniSquare.id = "miniSquare-${i}";
      let shade = 0;
      miniSquare.style.opacity = shade;
      function darkenSquare() {
        if (shade < 1) {
          shade += 0.1;
          miniSquare.style.opacity = shade;
        }
      }
      miniSquare.addEventListener("mouseover", darkenSquare);
      miniSquareArray.push(miniSquare);
      square.append(miniSquare);
    }
  }
}

document.addEventListener("onload", createSquares(16));
document.addEventListener("onload", createMiniSquares(16));

function resetGrid() {
  let numberOfSquares = prompt("Choose number of squares per side (Max 100)");
  const clearAll = document.querySelectorAll(".colorized");
  clearAll.forEach(function (box) {
    box.classList.remove("colorized");
  });
  container.innerHTML = "";
  if (numberOfSquares <= 100) {
    createSquares(numberOfSquares);
    createMiniSquares(numberOfSquares);
  } else {
    alert("Sorry:( Number of squares per side limited to 100.");
    resetGrid();
  }
}
resetButton.addEventListener("click", resetGrid);
