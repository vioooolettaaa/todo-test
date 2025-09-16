import { useEffect, useState } from "react";
import "./styles.css";
import DeleteIcon from "../../shared/ui/icons/DeleteIcon";
import BeatleIcon from "../../shared/ui/icons/BeatleIcon";
import RestartIcon from "../../shared/ui/icons/RestartIcon";
import useAppStore from "../../store/app-store";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {!!value ? value === "X" ? <DeleteIcon /> : <BeatleIcon /> : null}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay, onGameOver, onStatusChange }) {
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;
    const nextSquares = squares.slice();

    nextSquares[i] = xIsNext ? "X" : "Жук";

    onPlay(nextSquares);
  }

  function calculateWinner(squares) {
    const lines = [
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
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  useEffect(() => {
    const winner = calculateWinner(squares);
    let status = winner
      ? "Победитель: " + winner
      : "Следующий ход: " + (xIsNext ? "X" : "Жук");

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

function Grid({ squares, onSquareClick }) {
  return (
    <div className="board">
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => onSquareClick(0)} />
        <Square value={squares[1]} onSquareClick={() => onSquareClick(1)} />
        <Square value={squares[2]} onSquareClick={() => onSquareClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => onSquareClick(3)} />
        <Square value={squares[4]} onSquareClick={() => onSquareClick(4)} />
        <Square value={squares[5]} onSquareClick={() => onSquareClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => onSquareClick(6)} />
        <Square value={squares[7]} onSquareClick={() => onSquareClick(7)} />
        <Square value={squares[8]} onSquareClick={() => onSquareClick(8)} />
      </div>
    </div>
  );
}

function InfoPanel({ status }) {
  return (
    <>
      <div className="info-panel">
        <span className="info-tatle-game">{status}</span>
      </div>
    </>
  );
}

export default function Game() {
  const showModalGame = useAppStore((state) => state.showModalGame);
  const closeModalGame = useAppStore((state) => state.closeModalGame);
  const [isGameOver, setGameOver] = useState(false);

  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [status, setStatus] = useState(null);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  const resetGame = () => {
    setGameOver(false);
    setHistory([Array(9).fill(null)]);
  };

  const jumpTo = (nextMove) => {
    if (nextMove === 0) resetGame();
    setCurrentMove(nextMove);
  };

  const moves = history.map((squares, move) => {
    if (move > 0) {
      return (
        <button
          className="moves-button"
          key={move}
          onClick={() => jumpTo(move)}
        >
          {"Шаг " + move}
        </button>
      );
    } else {
      return null;
    }
  });

  return (
    <>
      <InfoPanel status={status} />
      <div className="main-game-field">
        <Board
          onGameOver={setGameOver}
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
          onStatusChange={setStatus}
        />
        <div className="history-div">
          <p className="history-title">История</p>
          <div className="moves">{moves}</div>
          <div className="button-restart">
            <button className="restart-game" onClick={() => jumpTo(0)}>
              <RestartIcon />
              <span className="button-restart-text">Начать заново</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
