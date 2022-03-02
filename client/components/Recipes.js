import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createRecipe, createIngredient } from '../store';
import { v4 as uuidv4 } from 'uuid';

const Recipes = () => {
  const fetchedRecipes = useSelector((state) => state.fetchedRecipes);
  const userId = useSelector((state) => state.auth.id);

  const recipes = useSelector((state) =>
    state.recipes.filter((recipe) => recipe.userId === userId)
  );

  const state = useSelector((state) => state);

  //   console.log('STATE FROM RECIPES ----->', recipes);
  console.log('FETCHED RECIPES ----->', fetchedRecipes);

  const dispatch = useDispatch();

  useEffect(() => {
    //ADD SOME LOGIC -> if recipe exists then dont add it ???
    fetchedRecipes.map((recipe) => {
      dispatch(
        createRecipe({
          userId: userId,
          id: recipe.id,
          title: recipe.title,
          cuisine: recipe.cuisines[0] || null,
          dishType: recipe.dishTypes
            .filter(
              (type) =>
                type === 'breakfast' || type === 'lunch' || type === 'dinner'
            )
            .pop(),
          img: recipe.image,
          readyTime: recipe.readyInMinutes,
          servings: recipe.servings,
          url: recipe.spoonacularSourceUrl,
          isVegan: recipe.vegan,
          isVegetarian: recipe.vegetarian,
          isGlutenFree: recipe.glutenFree,
          isDairyFree: recipe.dairyFree,
          // ingredients: OWN MODEL?
          // instructions: OWN MODEL?
        })
      );

      //   fetchedRecipes.map((recipe) =>
      //     recipe.extendedIngredients.map((ingredient) => {
      //       dispatch(
      //         createIngredient({
      //           mealId: recipe.id,
      //           id: uuidv4(),
      //           name: ingredient.name,
      //           amount: ingredient.amount,
      //           unit: ingredient.unit,
      //           aisle: ingredient.aisle,
      //           additionalInfo: ingredient.meta[0],
      //         })
      //       );
      //     })
      //   );
    });
  }, [fetchedRecipes]);

  useEffect(() => {
    fetchedRecipes.map((recipe) =>
      recipe.extendedIngredients.map((ingredient) => {
        dispatch(
          createIngredient({
            mealId: recipe.id,
            id: uuidv4(),
            name: ingredient.name,
            amount: ingredient.amount,
            unit: ingredient.unit,
            aisle: ingredient.aisle,
            additionalInfo: ingredient.meta[0],
          })
        );
      })
    );
  }, [fetchedRecipes]);

  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => {
        return (
          <div
            key={recipe.id}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            {recipe.title}
            <img src={recipe.img} style={{ width: 250 }} />
          </div>
        );
      })}
    </div>
  );
};

export default Recipes;
