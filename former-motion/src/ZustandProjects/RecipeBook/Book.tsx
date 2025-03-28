import { useState } from "react";
import { RecipeBookStore } from "./Store";

const Book = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);

  const {
    recipes,
    addRecipe,
    deleteRecipe,
    startEditing,
    cancelEditing,
    updateRecipe,
  } = RecipeBookStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !ingredients.trim() || !instructions.trim()) {
      alert("Please fill all fields!");
      return;
    }

    if (editingId !== null) {
      // Update existing recipe
      updateRecipe(editingId, {
        title,
        ingredients,
        instructions,
      });
    } else {
      // Add new recipe
      addRecipe({
        title,
        ingredients,
        instructions,
      });
    }

    resetForm();
  };

  const handleEdit = (id: number) => {
    const recipeToEdit = recipes.find((recipe) => recipe.id === id);
    if (recipeToEdit) {
      setEditingId(id);
      setTitle(recipeToEdit.title);
      setIngredients(recipeToEdit.ingredients);
      setInstructions(recipeToEdit.instructions);
      startEditing(id);
    }
  };

  const handleCancelEdit = () => {
    resetForm();
    if (editingId !== null) {
      cancelEditing(editingId);
      setEditingId(null);
    }
  };

  const resetForm = () => {
    setTitle("");
    setIngredients("");
    setInstructions("");
    setEditingId(null);
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">RecipeBook🍑</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 mb-6 space-y-3"
      >
        <input
          type="text"
          value={title}
          className="w-full p-2 rounded text-black"
          placeholder="Enter title..."
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          value={ingredients}
          className="w-full p-2 rounded text-black"
          placeholder="Enter ingredients..."
          onChange={(e) => setIngredients(e.target.value)}
          required
        />
        <textarea
          placeholder="Enter instructions..."
          value={instructions}
          className="w-full p-2 rounded text-black"
          onChange={(e) => setInstructions(e.target.value)}
          rows={4}
          required
        />
        {editingId !== null ? (
          <div className="flex gap-2">
            <button type="submit" className="bg-orange-500 p-2 rounded w-full">
              Update Recipe
            </button>
            <button
              type="button"
              className="bg-red-500 p-2 rounded w-full"
              onClick={handleCancelEdit}
            >
              Cancel
            </button>
          </div>
        ) : (
          <button type="submit" className="bg-green-500 p-2 rounded w-full">
            Add Recipe
          </button>
        )}
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white/10 p-4 rounded-lg border border-white/20 backdrop-blur-sm"
          >
            <h3 className="text-lg font-semibold text-white mb-2">
              {recipe.title}
            </h3>
            <div className="mb-3">
              <h4 className="text-sm font-medium text-blue-300 mb-1">
                Ingredients
              </h4>
              <p className="text-sm text-blue-100">{recipe.ingredients}</p>
            </div>
            <div className="mb-3">
              <h4 className="text-sm font-medium text-blue-300 mb-1">
                Instructions
              </h4>
              <p className="text-sm text-blue-100">{recipe.instructions}</p>
            </div>
            <div className="flex gap-2 mt-2">
              <button
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1 rounded text-sm transition-colors"
                onClick={() => handleEdit(recipe.id)}
              >
                Edit
              </button>
              <button
                className="bg-rose-600 hover:bg-rose-500 text-white px-3 py-1 rounded text-sm transition-colors"
                onClick={() => deleteRecipe(recipe.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Book;
