import { create } from "zustand";

interface List {
  name: string;
  emoji: string;
}
interface Workspace {
  name: string;
  emoji: string;
}
interface Todo {
  name: string;
  list: string;
  workspace: string;
}
interface AppState {
  lists: List[];
  workspaces: Workspace[];
  todos: Todo[];
  editIndex: number | null; //Holds the index of the todo being edited (if any)
  editText: string; //Temporary state to store text while editing a todo
  dropdownIndex: number | null; //Manages which todo’s dropdown menu is currently open
  isListModalOpen: boolean; //Control modal visibility for “Add List” and “Add Workspace”
  isWorkspaceModalOpen: boolean; //Control modal visibility for “Add List” and “Add Workspace”
  selectedList: string; //Tracks what the user selected from dropdowns when adding a todo
  selectedWorkspace: string; //Tracks what the user selected from dropdowns when adding a todo.
  todoText: string; //Input text when the user is writing a new todo
  modalName: string; //Hold input values while creating a new List or Workspace
  modalEmoji: string; //Hold input values while creating a new List or Workspace
  modalType: "List" | "Workspace" | null; //Helps you determine which modal is active
  // Functions
  addList: (name: string, emoji: string) => void;
  addWorkspace: (name: string, emoji: string) => void;
  addTodo: (todo: Todo) => void;
  updateTodo: (id: number, updateTodo: Todo) => void;
  deleteTodo: (id: number) => void;
  // Editing Helpers
  handleEdit: (index: number) => void;
  handleUpdate: (index: number) => void;
  setEditText: (text: string) => void;
  setEditIndex: (index: number | null) => void;
  // Dropdown Toggle
  handleDropdownClick: (index: number) => void;
  //Modal Managment
  openListModal: () => void;
  openWorkspaceModal: () => void;
  closeListModal: () => void;
  closeWorkspaceModal: () => void;
  // Input Handlers for Todo Creation
  setSelectedList: (list: string) => void;
  setSelectedWorkspace: (workspace: string) => void;
  setTodoText: (text: string) => void;
  handleAddTodo: () => void;
  // Modal Input Handlers
  setModalName: (name: string) => void;
  setModalEmoji: (emoji: string) => void;
  setModalType: (type: "List" | "Workspace") => void;
  handleSaveModal: () => void;
}
// Before defining functions, the store initializes default values:
export const UseAppStore = create<AppState>((set) => ({
  lists: [],
  workspaces: [],
  todos: [],
  editIndex: null,
  editText: "",
  dropdownIndex: null,
  isListModalOpen: false,
  isWorkspaceModalOpen: false,
  selectedList: "",
  selectedWorkspace: "",
  todoText: "",
  modalName: "",
  modalEmoji: "",
  modalType: null,
  addList: (name: string, emoji: string) =>
    set((state) => ({
      lists: [...state.lists, { name, emoji }],
    })),
  addWorkspace: (name: string, emoji: string) =>
    set((state) => ({
      workspaces: [...state.workspaces, { name, emoji }],
    })),
  addTodo: (todo: Todo) =>
    set((state) => ({
      todos: [...state.todos, todo],
    })),
  updateTodo: (index, updatedTodo) =>
    set((state) => ({
      todos: state.todos.map((todo, i) => (i === index ? updatedTodo : todo)),
      editIndex: null,
      editText: "",
    })),
  deleteTodo: (id: number) =>
    set((state) => ({
      todos: state.todos.filter((_, i) => i !== id),
      dropdownIndex: null,
    })),
  handleEdit: (index: number) =>
    set((state) => ({
      editIndex: index,
      editText: state.todos[index]?.name || "",
      dropdownIndex: null,
    })),
  handleUpdate: (index: number) =>
    set((state) => {
      if (!state.todos[index]) return state; // Avoid index errors
      const updatedTodo = {
        ...state.todos[index],
        name: state.editText || state.todos[index].name, // Ensure valid text
      };
      const newTodo = [...state.todos];
      newTodo[index] = updatedTodo;
      return {
        todos: newTodo,
        editIndex: null,
        editText: "",
      };
    }),
  handleDropdownClick: (index: number) =>
    set((state) => ({
      dropdownIndex: index === state.dropdownIndex ? null : index,
    })),
  setEditText: (text: string) => set({ editText: text }),
  setEditIndex: (index: number) => set({ editIndex: index }),
  openListModal: () => set({ isListModalOpen: true, modalType: "List" }),
  closeListModal: () =>
    set({ isListModalOpen: false, modalName: "", modalEmoji: "" }),
  openWorkspaceModal: () =>
    set({ isWorkspaceModalOpen: true, modalType: "Workspace" }),
  closeWorkspaceModal: () =>
    set({ isListModalOpen: false, modalName: "", modalEmoji: "" }),
  setSelectedList: (list) => set({ selectedList: list }),
  setSelectedWorkspace: (workspace) => set({ selectedWorkspace: workspace }),
  setTodoText: (text) => set({ todoText: text }),
  handleAddTodo: () =>
    set((state) => {
      const { todoText, selectedList, selectedWorkspace } = state;
      if (todoText.trim() === "") {
        alert("Tod cannot be empty");
        return state;
      }
      const newTodo: Todo = {
        name: todoText,
        list: selectedList,
        workspace: selectedWorkspace,
      };
      return {
        todos: [...state.todos, newTodo],
        todoText: "",
        selectedList: "",
        selectedWorkspace: "",
      };
    }),
  setModalName: (name) => set({ modalName: name }),
  setModalEmoji: (emoji) => set({ modalEmoji: emoji }),
  setModalType: (type) => set({ modalType: type }),
  handleSaveModal: () =>
    set((state) => {
      const { modalName, modalEmoji, modalType } = state;
      if (modalName.trim() === "") return state;
      if (modalType === "List") {
        state.addList(modalName, modalEmoji);
      } else if (modalType === "Workspace") {
        state.addWorkspace(modalName, modalEmoji);
      }
      return {
        modalName: "",
        modalEmoji: "",
        modalType: null,
        isListModalOpen: false,
        isWorkspaceModalOpen: false,
      };
    }),
}));
