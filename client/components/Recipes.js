import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createRecipe, createIngredient, deleteRecipe } from '../store';
import { v4 as uuidv4 } from 'uuid';
import { unitConversion } from './conversions';
import _ from 'lodash';
import {
  Container,
  RecipeContainer,
  RecipeListContainer,
  CoverImage,
  RecipeName,
  IngredientsText,
  ViewRecipeText,
} from './recipeComponent';

const Recipes = () => {
  const fetchedRecipes = useSelector((state) => state.fetchedRecipes);
  const userId = useSelector((state) => state.auth.id) || '';
  const currMealPlan = useSelector(
    (state) =>
      state.mealPlans.find((mealPlan) => mealPlan.userId === userId) || {}
  );

  const recipes = useSelector((state) =>
    state.recipes.filter((recipe) => recipe.userId === userId)
  );

  const ingredients = useSelector((state) =>
    state.ingredients.filter((ing) => ing.mealplanId === currMealPlan.id)
  );
  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  const recipeTitles = recipes.map((recipe) => recipe.title);

  // console.log('REC', recipes);

  //   console.log('STATE', state);

  //   console.log(fetchedRecipes);

  // console.log('TITLES', recipeTitles);
  // console.log('ING', ingredients);

  // ADD RECIPES TO DB
  useEffect(() => {
    async function fetchRecipes() {
      await fetchedRecipes.map((recipe) => {
        recipeTitles.includes(recipe.title)
          ? ''
          : dispatch(
              createRecipe({
                userId: userId,
                mealplanId: currMealPlan.id,
                id: recipe.id,
                title: recipe.title,
                cuisine: recipe.cuisines[0] || null,
                dishType: recipe.dishTypes
                  .filter(
                    (type) =>
                      type === 'dessert' ||
                      type === 'breakfast' ||
                      type === 'lunch' ||
                      type === 'dinner'
                  )
                  .pop(),
                img: recipe.image,
                readyTime: recipe.readyInMinutes,
                servings: recipe.servings,
                url: recipe.sourceUrl,
                isVegan: recipe.vegan,
                isVegetarian: recipe.vegetarian,
                isGlutenFree: recipe.glutenFree,
                isDairyFree: recipe.dairyFree,
                isHealthy: recipe.veryHealthy,
                // instructions: OWN MODEL?
              })
            );
      });
    }
    async function fetchIngredients() {
      await fetchedRecipes.map((recipe) =>
        recipeTitles.includes(recipe.title)
          ? ''
          : recipe.extendedIngredients.map((ingredient) => {
              dispatch(
                createIngredient({
                  mealplanId: currMealPlan.id,
                  mealId: recipe.id,
                  id: uuidv4(),
                  name: ingredient.name.toLowerCase(),
                  amount: ingredient.amount.toFixed(1),
                  unit: unitConversion(ingredient.unit),
                  aisle: ingredient.aisle,
                  additionalInfo: ingredient.meta[0],
                })
              );
            })
      );
    }
    fetchRecipes();
    fetchIngredients();
  }, [fetchedRecipes]);

  return (
    <Container>
      {recipes.length === 0 ? (
        <div className="no-recipes">
          <h2>There are no recipes :(</h2>
        </div>
      ) : (
        <RecipeListContainer>
          {recipes.map((recipe) => {
            return (
              <RecipeContainer key={recipe.id}>
                <CoverImage src={recipe.img} />
                <RecipeName>
                  {recipe.title}
                  {/* Serves: {recipe.servings} */}
                </RecipeName>
                <IngredientsText>ingredients</IngredientsText>
                <ViewRecipeText>
                  <a href={recipe.url} target="_blank"></a>
                  see complete recipe
                </ViewRecipeText>
                {/* <button
                  onClick={() => dispatch(deleteRecipe(recipe.id))}
                  style={{ width: 250 }}
                >
                  delete recipe
                </button> */}
                {/* <button
                  onClick={() => dispatch(deleteRecipe(recipe.id))}
                  style={{ width: 250 }}
                >
                  delete ingredients
                </button> */}
              </RecipeContainer>
            );
          })}
        </RecipeListContainer>
      )}
    </Container>
  );
};

export default Recipes;
