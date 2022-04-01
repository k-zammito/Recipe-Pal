import axios from 'axios';

const GET_INGREDIENTS = 'GET_INGREDIENTS';
const CREATE_INGREDIENT = 'CREATE_INGREDIENT';
const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
const UPDATE_INGREDIENT = 'UPDATE_INGREDIENT';

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

const _deleteIngredient = (id) => {
  return {
    type: DELETE_INGREDIENT,
    id,
  };
};

const _updateIngredient = (ingredient) => {
  return {
    type: UPDATE_INGREDIENT,
    ingredient,
  };
};

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

export const deleteIngredient = (id) => {
  return async (dispatch) => {
    await axios.delete(`/api/ingredients/${id}`);
    dispatch(_deleteIngredient(id));
  };
};

export const updateIngredient = (ingredient) => {
  return async (dispatch) => {
    ingredient = (
      await axios.put(`/api/ingredients/${ingredient.id}`, ingredient)
    ).data;
    dispatch(_updateIngredient(ingredient));
  };
};

export const ingredients = (state = [], action) => {
  switch (action.type) {
    case GET_INGREDIENTS:
      return action.ingredients;
    case CREATE_INGREDIENT:
      return [...state, action.ingredient];
    case DELETE_INGREDIENT:
      return state.filter((ingredient) => ingredient.id !== action.id);
    case UPDATE_INGREDIENT:
      return state.map((ingredient) =>
        ingredient.id === action.ingredient.id ? action.ingredient : ingredient
      );
    default:
      return state;
  }
};
