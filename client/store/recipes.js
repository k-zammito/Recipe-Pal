import axios from 'axios';

/**
 * ACTION TYPES
 */

const CREATE_RECIPE = 'CREATE_RECIPE';

/**
 * ACTION CREATORS
 */
const _createRecipe = (recipe) => {
  return {
    type: CREATE_RECIPE,
    recipe,
  };
};

/**
 * THUNK CREATORS
 */

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
    case CREATE_RECIPE:
      return [...state, action.recipe];
    default:
      return state;
  }
};
