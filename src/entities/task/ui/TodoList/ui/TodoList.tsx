import type { Task } from '@entities/task/model/taskStore';
import './styles.css';
import { TaskItem } from '@entities/task/ui/TaskItem';

type TodoListProps = {
  tasks: Task[];
  onDelete: (taskId: string) => void;
  isUrgently?: boolean;
  onRedy?: (item: Task) => void;
  isRedy?: boolean;
};

export function TodoList({ tasks, onDelete, isUrgently, onRedy, isRedy }: TodoListProps) {
  return (
    <>
      <div className="todo-main-div">
        <div className="task-items">
          {tasks.map((task) => (
            <TaskItem
              title={task.title}
              description={task.description}
              id={task._id}
              onDelete={onDelete}
              isUrgently={task.urgently}
              onRedy={() => onRedy?.(task)}
              isRedy={isRedy}
            />
          ))}
        </div>
      </div>
    </>
  );
}
