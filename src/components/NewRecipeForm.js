import React from "react";

const NewRecipeForm = ({ newRecipe, handleNewRecipe, onUpdateForm, hideRecipeForm }) => {
  return (
    <div className='RecipeDetail'>
      <h2>New Recipe</h2>
      <button onClick={hideRecipeForm}>Close</button>
      <form onSubmit={(e) => handleNewRecipe(e, newRecipe)}>
        <label>Title</label>
        <input type='text' name='title' value={newRecipe.title} onChange={(e) => onUpdateForm(e, "new")} />
        <label>Ingredients</label>
        <textarea name='ingredients' value={newRecipe.ingredients} onChange={(e) => onUpdateForm(e, "new")} />
        <label>Instructions</label>
        <textarea name='instructions' value={newRecipe.instructions} onChange={(e) => onUpdateForm(e, "new")} />
        <label>Servings</label>
        <input type='number' name='servings' value={newRecipe.servings} onChange={(e) => onUpdateForm(e, "new")} />
        <button type='submit'>Create New Recipe</button>
      </form>
    </div>
  );
};

export default NewRecipeForm;