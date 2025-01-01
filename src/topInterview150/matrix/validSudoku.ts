export function isValidSudoku(board: string[][]): boolean {
  let rows = Array.from({ length: 9 }, () => new Set());
  let cols = Array.from({ length: 9 }, () => new Set());
  let boxes = Array.from({ length: 9 }, () => new Set());

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board.length; col++) {
      let value = board[row][col];

      if (value === ".") continue;

      let boxIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);

      if (
        rows[row].has(value) ||
        cols[col].has(value) ||
        boxes[boxIndex].has(value)
      )
        return false;

      rows[row].add(value);
      cols[col].add(value);
      boxes[boxIndex].add(value);
    }
  }

  return true;
}
