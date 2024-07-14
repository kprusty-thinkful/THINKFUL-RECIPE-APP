import React, { useState } from "react";

function RecipeCreate( {createRecipe} ) {

    // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
    // TODO: Add the required input and textarea form elements.
    // TODO: Add the required submit and change handlers.
    const [name, setName] = useState('');
    const [cuisine, setCuisine] = useState('');
    const [photo, setPhoto] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [preparation, setPreparation] = useState('');

    const nameChangeHandler = ({target}) => {
        setName(target.value);
    };

    const cuisineChangeHandler = ({target}) => {
        setCuisine(target.value);
    };

    const photoChangeHandler = ({target}) => {
        setPhoto(target.value);
    };

    const ingredientChangeHandler = ({target}) => {
        setIngredients(target.value);
    };

    const prepChangeHandler = ({target}) => {
        setPreparation(target.value);
    };

    const clearRecipeForm = () => {
        setName(''); setCuisine(''); setPhoto(''); setIngredients(''); setPreparation('');
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const newRecipe = {
            name: name,
            cuisine: cuisine,
            photo: photo,
            ingredients: ingredients,
            preparation: preparation
        };
        createRecipe(newRecipe);
        // clear form after submit
        clearRecipeForm();
    };

    return (
        <form name="create" onSubmit={submitHandler}>
            <table>
                <tbody>
                <tr>
                    <td>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="name"
                            value={name}
                            onChange={nameChangeHandler}
                        />
                    </td>

                    <td>
                        <input
                            id="cuisine"
                            type="text"
                            name="cuisine"
                            placeholder="cuisine"
                            value={cuisine}
                            onChange={cuisineChangeHandler}
                        />
                    </td>

                    <td>
                        <input
                            id="photo"
                            type="url"
                            name="photo"
                            placeholder="photo URL"
                            value={photo}
                            onChange={photoChangeHandler}
                        />
                      </td>

                    <td>
                        <textarea
                            id="ingredients"
                            type="text"
                            name="ingredients"
                            placeholder="ingredients"
                            value={ingredients}
                            onChange={ingredientChangeHandler}
                        />
                    </td>

                    <td>
                        <textarea
                            id="preparation"
                            type="text"
                            name="preparation"
                            placeholder="preparation"
                            value={preparation}
                            onChange={prepChangeHandler}
                        />
                    </td>

                    <td>
                        <button type="submit">Create</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </form>
    );
}

export default RecipeCreate;
