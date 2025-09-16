import { create } from 'zustand';

export type Todo = {
  id: string;
  text: string;
  done: boolean;
};

export type TodoStore = {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
};

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  addTodo: (text: string) =>
    set((state) => ({
      todos: [
        ...state.todos,
        { id: Math.random().toString(36).slice(2), text, done: false },
      ],
    })),
  toggleTodo: (id: string) =>
    set((state) => ({
      todos: state.todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    })),
  removeTodo: (id: string) =>
    set((state) => ({ todos: state.todos.filter((t) => t.id !== id) })),
}));
