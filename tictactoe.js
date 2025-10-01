let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
const cells = document.querySelectorAll('.cell');

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        const idx = cell.getAttribute('data-index');
        if (board[idx] === "" && !checkWinner()) {
            board[idx] = currentPlayer;
            cell.textContent = currentPlayer;
            if (checkWinner()) {
                alert(currentPlayer + " wins!");
            } else if (board.every(cell => cell !== "")) {
                alert("Draw!");
            } else {
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        }
    });
});

function checkWinner() {
    const winPatterns = [
        [0,1,2],[3,4,5],[6,7,8], // rows
        [0,3,6],[1,4,7],[2,5,8], // cols
        [0,4,8],[2,4,6]          // diags
    ];
    return winPatterns.some(pattern =>
        pattern.every(idx => board[idx] === currentPlayer)
    );
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    cells.forEach(cell => cell.textContent = "");
    currentPlayer = "X";
}