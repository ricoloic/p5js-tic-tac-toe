const board = [];

let size;

const Player = {
  x: 'x',
  o: 'o',
};

let player = 'x';

let won = null;

function checkWinState() {
  let win = (
    (board[0][0] !== null && board[0][0] === board[1][0] && board[0][0] === board[2][0]) ||
    (board[0][1] !== null && board[0][1] === board[1][1] && board[0][1] === board[2][1]) ||
    (board[0][2] !== null && board[0][2] === board[1][2] && board[0][2] === board[2][2]) ||
    (board[0][0] !== null && board[0][0] === board[0][1] && board[0][0] === board[0][2]) ||
    (board[1][0] !== null && board[1][0] === board[1][1] && board[1][0] === board[1][2]) ||
    (board[2][0] !== null && board[2][0] === board[2][1] && board[2][0] === board[2][2]) ||
    (board[0][0] !== null && board[0][0] === board[1][1] && board[0][0] === board[2][2]) ||
    (board[2][0] !== null && board[2][0] === board[1][1] && board[2][0] === board[0][2])
  );

  if (win) {
    won = player;
  }
}

function showBoard() {
  background(33);
  strokeWeight(5);
  stroke(255);
  textSize(100);
  textAlign(CENTER);

  if (won) {
    text(`The player ${player} won`, width / 2, height / 2 + 25);
  } else {
    for (let i = 1; i < 3; i++) {
      line(i * size, 0, i * size, height);
      line(0, i * size, width, i * size);
    }

    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 3; y++) {
        if (board[x][y] === null) continue;
        text(
          board[x][y],
          (x) * (size) + (size / 2),
          (y) * (size) + (size / 2) + 25
        );
      }
    }
  }
}

function setup() {
  createCanvas(900, 900);

  size = width / 3;

  for (let x = 0; x < 3; x++) {
    board[x] = [];
    for (let y = 0; y < 3; y++) {
      board[x][y] = null;
    }
  }
  showBoard();
}

function mousePressed() {
  if (won !== null) return;

  const x = floor(mouseX / size);
  const y = floor(mouseY / size);

  if (x > 2 || y > 2) return;

  if (board[x][y] !== null) return;

  board[x][y] = player;
  checkWinState();

  if (won === null) {
    player = player === Player.x ? Player.o : Player.x;
  }

  showBoard();
}

function draw() { }
