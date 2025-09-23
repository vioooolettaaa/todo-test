import './styles.css';
import DeleteIcon from '../../../../../shared/ui/icons/DeleteIcon';
import TaskMarker from '../../../../../shared/ui/icons/TaskMarker';

export function TaskItem({ id, title, description, onDelete, isUrgently, onRedy, isRedy }) {
  return (
    <>
      <div className="task-item">
        {!isRedy && (
          <button className="task-marker" onClick={onRedy}>
            <TaskMarker />
          </button>
        )}

        <div className={`task-description ${isRedy ? 'through-lite' : ''}`}>
          <div className="title">
            <p className={`name-task ${isUrgently ? 'urgently' : ''}`}>{title}</p>
            {isUrgently && <span className="urgently">#</span>}
          </div>
          <p className="description">{description}</p>
        </div>
        <button className="delete-button" type="button" onClick={() => onDelete(id)}>
          <DeleteIcon />
        </button>
      </div>
    </>
  );
}
