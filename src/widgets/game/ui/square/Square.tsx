import DeleteIcon from '@shared/ui/icons/DeleteIcon';
import BeatleIcon from '@shared/ui/icons/BeatleIcon';
import './styles.css';

export type Squares = 'X' | 'Жук' | null;

type SquareProps = {
  value: Squares;
  onSquareClick: () => void;
};

export function Square({ value, onSquareClick }: SquareProps) {
  return (
    <button className="square" onClick={onSquareClick}>
      {!!value ? value === 'X' ? <DeleteIcon /> : <BeatleIcon /> : null}
    </button>
  );
}
