import React from "react";

function RecipeList( {recipes, deleteRecipe} ) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked.


    return (
        <div className="recipe-list">
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Cuisine</th>
                    <th>Photo</th>
                    <th>Ingredients</th>
                    <th>Preparation</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {recipes.map((recipe, index) => (
                    <RecipeView
                        deleteRecipe={() =>
                            deleteRecipe(index)}
                        key={index}
                        recipe={recipe} />
                ))}
                </tbody>
            </table>
        </div>
    );
    
}

function RecipeView({ deleteRecipe, recipe }) {

    return (
        <tr>
            <td>{recipe.name}</td>
            <td>{recipe.cuisine}</td>
            <td>
                <img src={recipe.photo || "http://www.nopicavailable.com"} alt={recipe.name} className="scale-down" />
            </td>
            <td className="content_id">
                <p>
                    {recipe.ingredients}
                </p>
            </td>
            <td className="content_id">
                <p>
                    {recipe.preparation}
                </p>
            </td>
            <td>
                <button name="delete" onClick={deleteRecipe}>
                    delete
                </button>
            </td>
        </tr>
    );
}

export default RecipeList;
