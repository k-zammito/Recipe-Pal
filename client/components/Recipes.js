import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  createRecipe,
  createIngredient,
  deleteRecipe,
  deleteIngredient,
  clearFetchedRecipes,
} from '../store';
import { v4 as uuidv4 } from 'uuid';
import { unitConversion } from './conversions';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import {
  Container,
  RecipeContainer,
  RecipeListContainer,
  CoverImage,
  RecipeName,
  IngredientsText,
  ViewRecipeText,
  DeleteText,
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
    state.ingredients.filter(
      (ing) =>
        ing.mealplanId === currMealPlan.id && currMealPlan.userId === userId
    )
  );

  const dispatch = useDispatch();

  const recipeTitles = recipes.map((recipe) => recipe.title);

  const defaultPhoto =
    'https://www.cvent.com/sites/default/files/styles/focus_scale_and_crop_800x450/public/migrated_attachments/meal-918638_1280-1.webp?itok=dMJGxEC2';

  // console.log('Fetched recipes', fetchedRecipes);

  const handleDelete = async (recipeId) => {
    const currIngreds = ingredients.filter(
      (ingred) => ingred.mealId === recipeId
    );

    currIngreds.forEach((ingred) => dispatch(deleteIngredient(ingred.id)));
    dispatch(deleteRecipe(recipeId));
  };

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
                img: recipe.image ? recipe.image : defaultPhoto,
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

    fetchedRecipes.length > 0 && dispatch(clearFetchedRecipes(fetchedRecipes));
  }, [fetchedRecipes]);

  return (
    <Container>
      {recipes.length === 0 ? (
        <div className="no-recipes">
          <h2>There are no recipes :(</h2>
        </div>
      ) : (
        <div className="recipe-container">
          <RecipeListContainer>
            {recipes.map((recipe) => {
              return (
                <RecipeContainer key={recipe.id}>
                  <CoverImage src={recipe.img} />
                  <RecipeName>
                    {recipe.title}
                    {/* Serves: {recipe.servings} */}
                  </RecipeName>

                  <Link to="/shoppinglist">
                    <IngredientsText className="card-btn-ingred">
                      ingredients
                    </IngredientsText>
                  </Link>

                  <a href={recipe.url} target="_blank">
                    <ViewRecipeText className="card-btn-view">
                      view recipe
                    </ViewRecipeText>
                  </a>

                  {/* <button
                  onClick={() => handleDelete(recipe.id)}
                  style={{ width: 150 }}
                > */}
                  <DeleteText
                    className="card-btn-delete"
                    onClick={() => handleDelete(recipe.id)}
                    style={{ marginLeft: 13 }}
                  >
                    delete recipe
                  </DeleteText>
                  {/* </button> */}
                </RecipeContainer>
              );
            })}
          </RecipeListContainer>
        </div>
      )}
    </Container>
  );
};

export default Recipes;
