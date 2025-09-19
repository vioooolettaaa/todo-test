import { Square } from "../square/Square";
import "./styles.css";
import type { Squares } from "../square/Square";

type GridProps = {
  squares: Squares[];
  onSquareClick: (i: number) => void;
};

export function Grid({ squares, onSquareClick }: GridProps) {
  return (
    <div className="board">
      <div className="board-row">
        <Square
          value={squares[0] ?? null}
          onSquareClick={() => onSquareClick(0)}
        />
        <Square
          value={squares[1] ?? null}
          onSquareClick={() => onSquareClick(1)}
        />
        <Square
          value={squares[2] ?? null}
          onSquareClick={() => onSquareClick(2)}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[3] ?? null}
          onSquareClick={() => onSquareClick(3)}
        />
        <Square
          value={squares[4] ?? null}
          onSquareClick={() => onSquareClick(4)}
        />
        <Square
          value={squares[5] ?? null}
          onSquareClick={() => onSquareClick(5)}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[6] ?? null}
          onSquareClick={() => onSquareClick(6)}
        />
        <Square
          value={squares[7] ?? null}
          onSquareClick={() => onSquareClick(7)}
        />
        <Square
          value={squares[8] ?? null}
          onSquareClick={() => onSquareClick(8)}
        />
      </div>
    </div>
  );
}
