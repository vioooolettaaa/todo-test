import { useEffect, useState } from "react";
import "./styles.css";
import { Board } from "../board/Board";
import { InfoPanel } from "../info-panel/InfoPanel";
import { History } from "../history/History";
import type { Squares } from "../square/Square";

export default function Game() {
  const [isGameOver, setGameOver] = useState(false);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [status, setStatus] = useState("");
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove] as Squares[];

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
          onStatusChange={(value) => setStatus(value)}
        />
        <History onClick={() => jumpTo(0)} moves={moves} />
      </div>
    </>
  );
}
