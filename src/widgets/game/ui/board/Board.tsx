import { Grid } from '../grid/Grid';
import { useEffect } from 'react';
import './styles.css';
import type { Squares } from '../square/Square';
import './styles.scss';

type BoardProps = {
  xIsNext: boolean;
  squares: Squares[];
  onPlay: (squares: Squares[]) => void;
  onGameOver: (value: boolean) => void;
  onStatusChange: (value: string) => void;
};

export function Board({ xIsNext, squares, onPlay, onGameOver, onStatusChange }: BoardProps) {
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;
    const nextSquares = squares.slice();

    nextSquares[i] = xIsNext ? 'X' : 'Жук';

    onPlay(nextSquares);
  }

  function calculateWinner(squares) {
    const lines: [number, number, number][] = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (!line) continue;
      const [a, b, c] = line as [number, number, number];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  useEffect(() => {
    const winner = calculateWinner(squares);
    let status = winner ? 'Победитель: ' + winner : 'Следующий ход: ' + (xIsNext ? 'X' : 'Жук');

    onStatusChange(status);

    if (winner) onGameOver(true);
  }, [squares]);

  return (
    <>
      <div className="game-field">
        <Grid squares={squares} onSquareClick={handleClick} />
      </div>
    </>
  );
}
