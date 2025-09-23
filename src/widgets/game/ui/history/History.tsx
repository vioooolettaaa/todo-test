import RestartIcon from '@shared/ui/icons/RestartIcon';
import './styles.scss';
import type { JSX } from 'react';

type HistoryProps = {
  onClick: () => void;
  moves: (JSX.Element | null)[];
};

export function History({ onClick, moves }: HistoryProps) {
  return (
    <div className="history-div">
      <div className="history_title_moves">
        <p className="history-title">История</p>

        <div className="moves">{moves}</div>
      </div>
      <div className="button-restart">
        <button className="restart-game" onClick={onClick}>
          <RestartIcon />
          <span className="button-restart-text">Начать заново</span>
        </button>
      </div>
    </div>
  );
}
