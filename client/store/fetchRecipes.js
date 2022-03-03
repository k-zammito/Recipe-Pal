import axios from 'axios';

/**
 * ACTION TYPES
 */
const FETCH_RECIPES = 'FETCH_RECIPES';

/**
 * ACTION CREATORS
 */
const _fetchRecipes = (recipe) => {
  return {
    type: FETCH_RECIPES,
    recipe,
  };
};

/**
 * THUNK CREATORS
 */
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

/**
 * REDUCER
 */

export const fetchedRecipes = (state = [], action) => {
  switch (action.type) {
    case FETCH_RECIPES:
      return action.recipe;
    default:
      return state;
  }
};
