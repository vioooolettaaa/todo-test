import "./styles.css";
import TaskItem from "../TaskItem/TaskItem";

function TodoList({ tasks, onDelete, isUrgently, onRedy, isRedy }) {
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
              onRedy={() => onRedy(task)}
              isRedy={isRedy}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default TodoList;
