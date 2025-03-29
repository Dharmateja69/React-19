import { create } from "zustand";

export type filedtype = "text" | "number" | "textarea" | "date";

export interface FormField {
  id: number;
  type: filedtype;
  value: string;
  description: string;
}

interface FormbuilderStore {
  fields: FormField[];
  addfield: (type: filedtype, description: string) => void;
  removefield: (id: number) => void;
  updatefield: (id: number, value: string) => void;
  restform: () => void;
}

export const useFormbuilder = create<FormbuilderStore>((set) => ({
  fields: [],
  addfield: (type: filedtype, description: string) =>
    set((state) => ({
      fields: [
        ...state.fields,
        {
          id: Date.now(),
          type,
          value: "",
          description,
        },
      ],
    })),
  removefield: (id: number) =>
    set((state) => ({
      fields: state.fields.filter((field) => field.id !== id),
    })),
  updatefield: (id, value) =>
    set((state) => ({
      fields: state.fields.map((field) =>
        field.id === id ? { ...field, value } : field
      ),
    })),
  restform: () =>
    set(() => ({
      fields: [],
    })),
}));
