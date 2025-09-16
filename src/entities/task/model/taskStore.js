import { create } from "zustand";

const useTaskStore = create((set) => ({
  tasks: [],
  redyTasks: [],
  archiveTasks: [],

  setTasks: (taskList) => set({ tasks: taskList }),
  setReadyTasks: (taskList) => set({ redyTasks: taskList }),
}));

export default useTaskStore;
