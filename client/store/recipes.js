import axios from 'axios';

/**
 * ACTION TYPES
 */

const GET_RECIPES = 'GET_RECIPES';
const CREATE_RECIPE = 'CREATE_RECIPE';

/**
 * ACTION CREATORS
 */

const _getRecipes = (recipes) => {
  return {
    type: GET_RECIPES,
    recipes,
  };
};

const _createRecipe = (recipe) => {
  return {
    type: CREATE_RECIPE,
    recipe,
  };
};

/**
 * THUNK CREATORS
 */

export const getRecipes = () => {
  return async (dispatch) => {
    const recipes = (await axios.get('/api/meals')).data;
    dispatch(_getRecipes(recipes));
  };
};

export const createRecipe = (recipe) => {
  return async (dispatch) => {
    const newRecipe = (await axios.post('/api/meals', recipe)).data;
    dispatch(_createRecipe(newRecipe));
  };
};

/**
 * REDUCER
 */

export const recipes = (state = [], action) => {
  switch (action.type) {
    case GET_RECIPES:
      return action.recipes;
    case CREATE_RECIPE:
      return [...state, action.recipe];
    default:
      return state;
  }
};
