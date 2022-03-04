import React from 'react';
import { useSelector } from 'react-redux';

const ShoppingList = () => {
  const userId = useSelector((state) => state.auth.id) || '';
  const currMealPlan = useSelector(
    (state) =>
      state.mealPlans.find((mealPlan) => mealPlan.userId === userId) || {}
  );

  const userMeals = useSelector((state) =>
    state.recipes.filter((meal) => meal.mealplanId === currMealPlan.id)
  );

  const ingredients = useSelector((state) =>
    state.ingredients.filter((ing) => ing.mealplanId === currMealPlan.id)
  );

  // console.log('ING', ingredients);
  // console.log('USER MEALS', userMeals);

  return (
    <div>
      <h2>Shopping List</h2>
      {ingredients.sort().map((ing) => {
        return (
          <div key={ing.id}>
            <span>{ing.amount}</span> <span>{ing.unit}</span>
            {' - '}
            <span style={{ fontWeight: 600 }}>{ing.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ShoppingList;
