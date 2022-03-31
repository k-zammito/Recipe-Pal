import axios from 'axios';

const FETCH_RECIPES = 'FETCH_RECIPES';
const CLEAR_FETCHED_RECIPES = 'CLEAR_FETCHED_RECIPES';

const _fetchRecipes = (recipe) => {
  return {
    type: FETCH_RECIPES,
    recipe,
  };
};

const _clearFetchedRecipes = (recipes) => {
  return {
    type: CLEAR_FETCHED_RECIPES,
    recipes,
  };
};

export const fetchRecipes = (tag1, tag2, amount) => {
  return async (dispatch) => {
    const options = {
      method: 'GET',
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random',
      params: { tags: `${tag1},${tag2}`, number: `${amount}` },
      headers: {
        'x-rapidapi-host':
          'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        'x-rapidapi-key': 'fa42fec85fmsh86912e847dbf256p10c532jsnde7e4d22ff94',
      },
    };

    const recipe = (await axios.request(options)).data;
    dispatch(_fetchRecipes(recipe.recipes));
  };
};

export const clearFetchedRecipes = (recipes) => {
  return (dispatch) => {
    const clearedRecipes = recipes.splice(0, recipes.length);
    dispatch(_clearFetchedRecipes(clearedRecipes));
  };
};

export const fetchedRecipes = (state = [], action) => {
  switch (action.type) {
    case FETCH_RECIPES:
      return action.recipe;
    case CLEAR_FETCHED_RECIPES:
      return state.splice(0, state.length);
    default:
      return state;
  }
};
