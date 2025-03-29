import { create } from "zustand";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
interface TodoStore {
  todos: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
  toggleCompleted: (id: number) => void;
}

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  addTodo: (text: string) =>
    set((state) => ({
      todos: [...state.todos, { id: Date.now(), text, completed: false }],
    })),
  removeTodo: (id: number) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
  toggleCompleted: (id: number) =>
    set((state) => ({
      todos: state.todos.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      ),
    })),
}));
