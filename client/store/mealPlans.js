import axios from 'axios';

/**
 * ACTION TYPES
 */

const GET_MEAL_PLANS = 'GET_MEAL_PLANS';
const CREATE_MEAL_PLAN = 'CREATE_MEAL_PLAN';
const EDIT_MEAL_PLAN = 'EDIT_MEAL_PLAN';

/**
 * ACTION CREATORS
 */

const _getMealPlans = (mealPlans) => {
  return {
    type: GET_MEAL_PLANS,
    mealPlans,
  };
};

const _createMealPlans = (mealPlan) => {
  return {
    type: CREATE_MEAL_PLAN,
    mealPlan,
  };
};

const _editMealPlan = (mealPlan) => ({ type: EDIT_MEAL_PLAN, mealPlan });
/**
 * THUNK CREATORS
 */

export const getMealPlans = () => {
  return async (dispatch) => {
    const mealPlans = (await axios.get('/api/mealplans')).data;
    dispatch(_getMealPlans(mealPlans));
  };
};

export const createMealPlan = (mealPlan) => {
  return async (dispatch) => {
    const newMealPlan = (await axios.post('/api/mealplans', mealPlan)).data;
    dispatch(_createRecipe(newMealPlan));
  };
};

export const editMealPlan = (mealPlan) => {
  return async (dispatch) => {
    mealPlan = (await axios.put(`/api/mealplans/${mealPlan.id}`, mealPlan))
      .data;
    dispatch(_editMealPlan(mealPlan));
  };
};

/**
 * REDUCER
 */

export const mealPlans = (state = [], action) => {
  switch (action.type) {
    case GET_MEAL_PLANS:
      return action.mealPlans;
    case CREATE_MEAL_PLAN:
      return [...state, action.mealPlan];
    case EDIT_MEAL_PLAN:
      return state.map((mealPlan) =>
        mealPlan.id === action.mealPlan.id ? action.mealPlan : mealPlan
      );
    default:
      return state;
  }
};
