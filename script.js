"use strict";

let color = "black";

function populateBoard(size) {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size} ,1fr)`;
  board.style.gridTemplateRows = `repeat(${size} ,1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare);

    square.style.backgroundColor = "white";
    board.insertAdjacentElement("beforeend", square);
  }
}

// populateBoard(8);

function changeSize(input) {
  if (input >= 2 && input <= 100) {
    populateBoard(input);
  } else if (input < 2) {
    console.log("Please input a number larger than 2. Not enough squares");
  } else {
    console.log(
      "Please input a larger less than 100. There are too many squares"
    );
  }
}

function colorSquare() {
  if (color === "rainbow") {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else {
    this.style.backgroundColor = color;
  }
}

function changeColor(choice) {
  color = choice;
}

function reset() {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "white"));
}
