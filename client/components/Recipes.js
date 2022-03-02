import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createRecipe, fetchRecipes } from '../store';

const Recipes = () => {
  const fetchedRecipes = useSelector((state) => state.fetchedRecipes);
  const state = useSelector((state) => state);
  console.log('STATE FROM RECIPES ----->', state);
  //   console.log('FROM RECIPES ----->', fetchedRecipes);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchedRecipes.map((recipe) => {
      dispatch(
        createRecipe({
          id: recipe.id, // SOLVE FOR DUP. IDS (maybe add UUID instead?)
          title: recipe.title,
          cuisine: recipe.cuisines[0] || null,
          dishType: recipe.dishTypes
            .filter(
              (type) =>
                type === 'breakfast' || type === 'lunch' || type === 'dinner'
            )
            .pop(),
          img: recipe.image,
          // instructions: OWN MODEL?
          // ingredients: OWN MODEL?
          readyTime: recipe.readyInMinutes,
          servings: recipe.servings,
          url: recipe.spoonacularSourceUrl,
          isVegan: recipe.vegan,
          isVegetarian: recipe.vegetarian,
          isGlutenFree: recipe.glutenFree,
          isDairyFree: recipe.dairyFree,
        })
      );
    });
  }, [fetchedRecipes]);

  return (
    <div>
      <h1>Recipes</h1>
      {fetchedRecipes.map((recipe) => {
        return (
          <div
            key={recipe.id}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            {recipe.title}
            <img src={recipe.image} />
          </div>
        );
      })}
    </div>
  );
};

export default Recipes;
