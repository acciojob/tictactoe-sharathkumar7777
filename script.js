const submitBtn = document.getElementById("submit");
const board = document.getElementById("board");
const message = document.querySelector(".message");
const cells = document.querySelectorAll(".cell");

let player1 = "";
let player2 = "";
let currentPlayer = "X";
let gameOver = false;

const winPatterns = [
  ["1","2","3"], ["4","5","6"], ["7","8","9"],
  ["1","4","7"], ["2","5","8"], ["3","6","9"],
  ["1","5","9"], ["3","5","7"]
];

submitBtn.addEventListener("click", () => {
  player1 = document.getElementById("player1").value;
  player2 = document.getElementById("player2").value;

  if (!player1 || !player2) return;

  document.getElementById("playerForm").style.display = "none";
  board.classList.remove("hidden");

  message.textContent = `${player1}, you're up`;
});

cells.forEach(cell => {
  cell.addEventListener("click", () => {
    if (cell.textContent !== "" || gameOver) return;

    cell.textContent = currentPlayer;

    if (checkWin()) {
      const winner = currentPlayer === "X" ? player1 : player2;
      message.textContent = `${winner} congratulations you won!`;
      gameOver = true;
      return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    message.textContent =
      currentPlayer === "X"
        ? `${player1}, you're up`
        : `${player2}, you're up`;
  });
});

function checkWin() {
  return winPatterns.some(pattern =>
    pattern.every(id =>
      document.getElementById(id).textContent === currentPlayer
    )
  );
}
