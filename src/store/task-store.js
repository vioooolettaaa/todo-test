import { create } from 'zustand';

const useTaskStore = create((set) => ({
  tasks: [],
  redyTasks: [],
  archiveTasks: [],

  addTasks: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  deleteItem: (taskId) =>
    set((state) => {
      const newArray = [...state.tasks].filter((task) => task.id != taskId);
      return { tasks: newArray };
    }),

  addToRedyTasks: (redyTask) => set((state) => ({ redyTasks: [...state.redyTasks, redyTask] })),
  deleteRedyItem: (taskId) =>
    set((state) => {
      const newRedyArray = [...state.redyTasks].filter((task) => task.id != taskId);
      return { redyTasks: newRedyArray };
    }),
}));

export default useTaskStore;
