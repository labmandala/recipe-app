import React from "react";

const EditRecipeForm = ({ selectedRecipe, handleCancel }) => {
  return (
    <div className='recipe-form'>
      <h2>Edit "{selectedRecipe.title}"</h2>

      <button className='cancel-button' onClick={handleCancel}>Cancel</button>

      <form>
        <label>Title</label>
        <input type='text' name='title' value={selectedRecipe.title} onChange='' required />

        <label>Ingredients</label>
        <textarea name='ingredients' value={selectedRecipe.ingredients} onChange='' required />

        <label>Instructions</label>
        <textarea name='instructions' value={selectedRecipe.instructions}  onChange='' required />

        <label>Description</label>
        <textarea name='description' value={selectedRecipe.description} onChange='' required />

        <label>Image</label>
        <input type='text' name='image_url' value={selectedRecipe.image_url} onChange='' required />

        <label>Servings</label>
        <input type='number' name='servings' value={selectedRecipe.servings} onChange='' required />

        <button type='submit'>Update Recipe</button>
      </form>
    </div>
  );
};

export default EditRecipeForm;