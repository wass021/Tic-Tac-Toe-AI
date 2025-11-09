import { Game } from './game.js';
import { AI } from './ai.js';

const game = new Game();
const ai = new AI();
const boardElement = document.getElementById('board')!;
const statusElement = document.getElementById('status')!;
const restartButton = document.getElementById('reset')!;

function render() {
  boardElement.innerHTML = '';
  game.board.forEach((cell, index) => {
    const cellElement = document.createElement('div');
    cellElement.classList.add('cell');
    cellElement.textContent = cell;
    cellElement.addEventListener('click', () => handleMove(index));
    boardElement.appendChild(cellElement);
  });

  if (game.isGameOver) {
    const winner = game.checkWinner('X')
      ? 'Você venceu!'
      : game.checkWinner('O')
      ? 'IA venceu!'
      : 'Empate!';
    statusElement.textContent = winner;
  } else {
    statusElement.textContent =
      game.currentPlayer === 'X' ? 'Sua vez!' : 'Vez da IA...';
  }
}

function handleMove(index: number) {
  if (game.currentPlayer === 'X' && !game.isGameOver) {
    if (game.makeMove(index)) {
      render();
      setTimeout(() => {
        if (!game.isGameOver) {
          ai.makeMove(game);
          render();
        }
      }, 500);
    }
  }
}

restartButton.addEventListener('click', () => {
  game.reset();
  render();
});

render();