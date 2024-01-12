export function createBoard(row, col, vacant) {
    let board = [];
    for (let r = 0; r < row; r++) {
        board[r] = [];
        for (let c = 0; c < col; c++) {
            board[r][c] = vacant;
        }
    }

    return board
}