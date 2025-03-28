import { create } from "zustand";

interface Recipe {
  id: number;
  title: string;
  ingredients: string;
  instructions: string;
  isEditing: boolean;
}
interface RecipeStore {
  recipes: Recipe[];
  addRecipe: (recipe: Omit<Recipe, "id" | "isEditing">) => void;
  deleteRecipe: (id: number) => void;
  startEditing: (id: number) => void;
  cancelEditing: (id: number) => void;
  updateRecipe: (
    id: number,
    updatedRecipe: Omit<Recipe, "id" | "isEditing">
  ) => void;
}

export const RecipeBookStore = create<RecipeStore>((set) => ({
  recipes: [],
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [
        ...state.recipes,
        { ...recipe, id: Date.now(), isEditing: false },
      ],
    })),
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
  startEditing: (id) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === id ? { ...r, isEditing: true } : r
      ),
    })),
  cancelEditing: (id) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === id ? { ...r, isEditing: false } : r
      ),
    })),
  updateRecipe: (id, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === id ? { ...r, ...updatedRecipe, isEditing: false } : r
      ),
    })),
}));
