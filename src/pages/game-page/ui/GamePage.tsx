import Game from "@widgets/game/ui/game/Game";

import "./styles.css";

export default function GamePage() {
  return (
    <>
      <div className="game-content-flex">
        <div className="game-content-align">
          <h1 className="game-title">Крестики-нолики</h1>
          <div className="game-pole">
            <Game />
          </div>
        </div>
      </div>
    </>
  );
}
