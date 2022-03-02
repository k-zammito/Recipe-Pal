import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createRecipe, createIngredient } from '../store';
import { v4 as uuidv4 } from 'uuid';

const Recipes = () => {
  const fetchedRecipes = useSelector((state) => state.fetchedRecipes);
  const userId = useSelector((state) => state.auth.id);
  const currMealPlan = useSelector(
    (state) =>
      state.mealPlans.find((mealPlan) => mealPlan.userId === userId) || {}
  );

  const recipes = useSelector((state) =>
    state.recipes.filter((recipe) => recipe.userId === userId)
  );

  const state = useSelector((state) => state);
  console.log('STATE', state);

  console.log('CURR USER ID', userId);
  console.log('CURR MEAL PLAN', currMealPlan);
  //   console.log('STATE FROM RECIPES ----->', recipes);
  //   console.log('FETCHED RECIPES ----->', fetchedRecipes);

  const dispatch = useDispatch();

  // ADD RECIPES TO DB

  useEffect(() => {
    // NEED TO UPDATE CURRENT MEALPLAN PER USER WITH THE NEW RECIPES / INGREDIENTS

    //ADD SOME LOGIC -> if recipe exists then dont add it ???
    fetchedRecipes.map((recipe) => {
      dispatch(
        createRecipe({
          userId: userId,
          mealplanId: currMealPlan.id,
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
          // instructions: OWN MODEL?
        })
      );
    });
  }, [fetchedRecipes]);

  // ADD FETCHED INGREDIENTS TO DB
  useEffect(() => {
    fetchedRecipes.map((recipe) =>
      recipe.extendedIngredients.map((ingredient) => {
        dispatch(
          createIngredient({
            mealplanId: currMealPlan.id,
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
      {recipes.length === 0 ? (
        <h2>There are no recipes :(</h2>
      ) : (
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
      )}
    </div>
  );
};

export default Recipes;
