const container = document.querySelector("#container");
const resetButton = document.querySelector("#resetButton");
const squareArray = [];

function createSquares() {
  for (let i = 0; i < 16; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.id = "square-${i}";
    squareArray.push(square);
    container.append(square);
  }
}

function createMiniSquares() {
  for (square of squareArray) {
    for (let i = 0; i < 16; i++) {
      const miniSquare = document.createElement("div");
      miniSquare.classList.add("miniSquare");
      miniSquare.id = "miniSquare-${i}";
      square.append(miniSquare);
    }
  }
}

resetButton.addEventListener("click", createSquares());
resetButton.addEventListener("click", createMiniSquares());
