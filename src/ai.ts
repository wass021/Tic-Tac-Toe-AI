import { Game } from './game.js';

export class AI {
  makeMove(game: Game): number | null {
    if (game.isGameOver) return null;

    // Filtra posições vazias
    const availableMoves = game.board
      .map((val, i) => (val === '' ? i : null))
      .filter((val) => val !== null) as number[];

    if (availableMoves.length === 0) return null;

    // Escolhe uma jogada aleatória
    const move = availableMoves[Math.floor(Math.random() * availableMoves.length)];
    game.makeMove(move);
    return move;
  }
}