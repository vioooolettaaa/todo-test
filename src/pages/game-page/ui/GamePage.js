import useAppStore from "../../../store/app-store";
import Game from "../../../widgets/game/Game";

import "./styles.css";

export default function GamePage() {
  const showSidebar = useAppStore((state) => state.showSidebar);

  return (
    <>
      <div
        className={`game-content-flex ${
          showSidebar && "game-content-flex-padding"
        }`}
      >
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
