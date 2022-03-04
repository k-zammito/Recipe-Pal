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

  const aisles = ingredients.map((ing) => ing.aisle);
  const uniqueAisles = [...new Set(aisles)];

  const ingNames = ingredients.map((ing) => ing.name);

  const uniqueIngNames = [...new Set(ingNames)];

  // console.log(uniqueAisles);
  // console.log('ING NAMES', ingNames);
  // console.log('UNIQUE ING NAMES', uniqueIngNames);

  const ingReduce = ingredients.reduce((acc, ing) => {
    if (acc[ing.name] && acc[ing.name][1] === ing.unit) {
      acc[ing.name][0] += ing.amount * 1;
    } else if (acc[ing.name]) {
      acc[ing.name].push(...[ing.amount * 1, ing.unit]);
    } else {
      acc[ing.name] = [ing.amount * 1, ing.unit];
    }
    return acc;
  }, {});

  console.log('ing reduce', ingReduce);

  return (
    <div>
      <h3>Shopping List: ({ingredients.length} items)</h3>
      {uniqueAisles.sort().map((aisle, idx) => {
        return (
          <div key={idx}>
            <h5>Aisle: {aisle === null ? 'Other' : aisle} </h5>
            {ingredients.map((ing) =>
              ing.aisle === aisle ? (
                <div key={ing.id}>
                  - <span>{ing.amount}</span> <span>{ing.unit}</span>
                  {' - '}
                  <span style={{ fontWeight: 600 }}>{ing.name}</span>
                </div>
              ) : (
                ''
              )
            )}
          </div>
        );
      })}

      {/* {ingredients.map((ing) => {
        return (
          <div key={ing.id}>
            <div>
              <span>{ing.amount}</span> <span>{ing.unit}</span>
              {' - '}
              <span style={{ fontWeight: 600 }}>{ing.name}</span>
            </div>
          </div>
        );
      })} */}
    </div>
  );
};

export default ShoppingList;
