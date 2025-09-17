import { create } from "zustand";

export interface Task {
  _id: string;
  title: string;
  description: string;
  priority: number;
  redy: boolean;
  archive: boolean;
  createdAt: string;
  updatedAt: string;
  urgently: boolean
}

interface TaskStore {
  tasks: Task[];
  redyTasks: Task[];
  archiveTasks: Task[];

  setTasks: (taskList: Task[]) => void;
  setReadyTasks: (taskList: Task[]) => void;
}

const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  redyTasks: [],
  archiveTasks: [],

  setTasks: (taskList) => set({ tasks: taskList }),
  setReadyTasks: (taskList) => set({ redyTasks: taskList }),
}));

export default useTaskStore;
