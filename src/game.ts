export class Game {
  board: string[] = Array(9).fill('');
  currentPlayer: 'X' | 'O' = 'X';
  isGameOver: boolean = false;

  makeMove(index: number): boolean {
    if (this.isGameOver || this.board[index] !== '') return false;
    this.board[index] = this.currentPlayer;
    if (this.checkWinner(this.currentPlayer)) {
      this.isGameOver = true;
      return true;
    }
    if (this.board.every(cell => cell !== '')) {
      this.isGameOver = true;
      return true;
    }
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    return true;
  }

  checkWinner(player: string): boolean {
    const wins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    return wins.some(combination =>
      combination.every(i => this.board[i] === player)
    );
  }

  reset(): void {
    this.board = Array(9).fill('');
    this.currentPlayer = 'X';
    this.isGameOver = false;
  }
}