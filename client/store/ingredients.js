import axios from 'axios';

/**
 * ACTION TYPES
 */

const GET_INGREDIENTS = 'GET_INGREDIENTS';
const CREATE_INGREDIENT = 'CREATE_INGREDIENT';

/**
 * ACTION CREATORS
 */

const _getingredients = (ingredients) => {
  return {
    type: GET_INGREDIENTS,
    ingredients,
  };
};

const _createingredient = (ingredient) => {
  return {
    type: CREATE_INGREDIENT,
    ingredient,
  };
};

/**
 * THUNK CREATORS
 */

export const getIngredients = () => {
  return async (dispatch) => {
    const ingredients = (await axios.get('/api/ingredients')).data;
    dispatch(_getingredients(ingredients));
  };
};

export const createIngredient = (ingredient) => {
  return async (dispatch) => {
    const newIngredient = (await axios.post('/api/ingredients', ingredient))
      .data;
    dispatch(_createingredient(newIngredient));
  };
};

/**
 * REDUCER
 */

export const ingredients = (state = [], action) => {
  switch (action.type) {
    case GET_INGREDIENTS:
      return action.ingredients;
    case CREATE_INGREDIENT:
      return [...state, action.ingredient];
    default:
      return state;
  }
};
