import { create } from "zustand";

interface Expense {
  id: number;
  description: string;
  amount: number;
}

interface ExpenseStore {
  expenses: Expense[];
  addExpense: (description: string, amount: number) => void;
  removeExpense: (id: number) => void;
  totalAmount: () => number; // Change to a function type
}

export const useExpenses = create<ExpenseStore>((set, get) => ({
  expenses: [],
  addExpense: (description, amount) => {
    set((state) => ({
      expenses: [...state.expenses, { id: Math.random(), description, amount }],
    }));
  },
  removeExpense: (id) => {
    set((state) => ({
      expenses: state.expenses.filter((expense) => expense.id !== id),
    }));
  },
  totalAmount: () => {
    return get().expenses.reduce((total, e) => total + e.amount, 0);
  },
}));
