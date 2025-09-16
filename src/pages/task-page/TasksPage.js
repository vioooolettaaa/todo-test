import TodoList from "../../entities/task/ui/TodoList/TodoList";
import OpenFormTask from "../../features/task/open-form-task/OpenFormTask";
import FormTask from "../../features/task/add-task/ui/FormTask/FormTask";
import useAppStore from "../../store/app-store";
import useTaskStore from "../../entities/task/model/taskStore";
import TaskGreatingModal from "../../features/task/task-greating-modal/TaskGreatingModal";
import FunIcon from "../../shared/ui/icons/FunIcon";
import { useEffect, useState } from "react";
import { fetchNotReadyTasks } from "../../entities/task/api/task-api";

export default function TasksPage() {
  const newTasks = useTaskStore((state) => state.tasks);
  const redyTasks = useTaskStore((state) => state.redyTasks);
  const showForm = useAppStore((state) => state.showForm);
  const openForm = useAppStore((state) => state.openForm);
  const closeForm = useAppStore((state) => state.closeForm);
  const showSidebar = useAppStore((state) => state.showSidebar);
  const toogleModal = useAppStore((state) => state.toogleModal);
  const setTasks = useTaskStore((state) => state.setTasks);
  const setReadyTasks = useTaskStore((state) => state.setReadyTasks);
  const [error, setError] = useState();

  const getNotReadyTasks = () =>
    fetchNotReadyTasks({
      onSuccess: (data) => setTasks(data),
      onError: (err) => setError(err.message),
    });

  const fetchReadyTasks = () =>
    fetch("http://192.168.50.195:3000/task/ready")
      .then((response) => response.json())
      .then((data) => setReadyTasks(data))
      .catch((err) => setError(err.message));

  useEffect(() => {
    //get запрос
    getNotReadyTasks();
    fetchReadyTasks();
  }, []);

  const deleteTask = (taskId) => {
    fetch("http://192.168.50.195:3000/task/delete", {
      method: "DELETE",
      body: JSON.stringify({ id: taskId }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      fetchNotReadyTasks();
      fetchReadyTasks();
    });
  };

  const addItem = (item) => {
    fetch("http://192.168.50.195:3000/task/add", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(fetchNotReadyTasks);
    // addTasks(item);
    closeForm();
  };

  const toRedyTask = (item) => {
    fetch("http://192.168.50.195:3000/task/add-to-ready", {
      method: "POST",
      body: JSON.stringify({ id: item._id }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      fetchNotReadyTasks();
      fetchReadyTasks();
    });
  };

  if (error) {
    return (
      <div
        className={`main-content-flex ${
          showSidebar && "main-content-flex-padding"
        }`}
      >
        <p>Ошибка загрузки</p>
      </div>
    );
  }

  return (
    <>
      <div
        className={`main-content-flex ${
          showSidebar && "main-content-flex-padding"
        }`}
      >
        <div className="main-header">
          <button className="modal-motovation-button" onClick={toogleModal}>
            <FunIcon />
          </button>
        </div>

        <div className="main-content-align">
          <h1 className="main-title">
            Задачи
            <span className="count-tasks">
              &nbsp;{redyTasks.length}/{newTasks.length}
            </span>
          </h1>
          <TodoList
            tasks={newTasks}
            onDelete={deleteTask}
            onRedy={toRedyTask}
          />

          {!showForm && <OpenFormTask onClick={openForm} />}

          <div
            className={`form-wrapper ${showForm ? "open-show" : "close-show"}`}
          >
            <FormTask onCreate={addItem} onCancel={closeForm} />
          </div>
          <h2 className="main-title-redy">Готово</h2>
          <TodoList tasks={redyTasks} onDelete={deleteTask} isRedy={true} />
        </div>
      </div>
      <TaskGreatingModal redyTasks={redyTasks} />
    </>
  );
}
