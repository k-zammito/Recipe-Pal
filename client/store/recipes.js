import axios from 'axios';


/**
 * ACTION TYPES
 */

const GET_RECIPES = 'GET_RECIPES';
const CREATE_RECIPE = 'CREATE_RECIPE';
const DELETE_RECIPE = 'DELETE_RECIPE';

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

const _deleteRecipe = (id) => {
  return {
    type: DELETE_RECIPE,
    id,
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

export const deleteRecipe = (id) => {
  return async (dispatch) => {
    await axios.delete(`/api/meals/${id}`);
    dispatch(_deleteRecipe(id));
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
    case DELETE_RECIPE:
      return state.filter((recipe) => recipe.id !== action.id);
    default:
      return state;
  }
};
