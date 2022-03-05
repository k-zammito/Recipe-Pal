import React from 'react';
import { useSelector } from 'react-redux';
import ListHeader from './ListHeader';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const ShoppingList = () => {
  const userId = useSelector((state) => state.auth.id) || '';
  const currMealPlan = useSelector(
    (state) =>
      state.mealPlans.find((mealPlan) => mealPlan.userId === userId) || {}
  );

  // const userMeals = useSelector((state) =>
  //   state.recipes.filter((meal) => meal.mealplanId === currMealPlan.id)
  // );

  const ingredients = useSelector((state) =>
    state.ingredients.filter((ing) => ing.mealplanId === currMealPlan.id)
  );

  // console.log('USER MEALS', userMeals);

  const aisles = ingredients.map((ing) => ing.aisle);
  const uniqueAisles = [...new Set(aisles)];

  const ingNames = ingredients.map((ing) => ing.name);
  const uniqueIngNames = [...new Set(ingNames)];
  // console.log('UNIQUE INGREDIENTS', uniqueIngNames);
  // console.log('INGREDIENTS', ingredients);

  // console.log(uniqueAisles);
  // console.log('ING NAMES', ingNames);

  const measurementCombiner = (arr) => {
    const result = {};
    const nums = arr.slice(1).filter((_, idx) => idx % 2 === 0);
    const units = arr.slice(1).filter((_, idx) => idx % 2 === 1);

    units.forEach((key, i) =>
      result[key] ? (result[key] += nums[i]) : (result[key] = nums[i])
    );

    return Object.entries(result);
  };

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

  const ingEnt = Object.entries(ingReduce);
  // console.log('entries', ingEnt);

  return (
    <div className="list-container">
      <div className="list-wrapper">
        <div>
          <ListHeader ingredientsLength={uniqueIngNames} />
        </div>
        <div>
          {ingEnt.sort().map((ingred, idx) => (
            <li key={idx} className="list-item">
              <span className="list-item-text">{`${ingred[0]} `}</span>
              <span className="list-item-text">
                {ingred.slice(1).map((ing, idx, array) => (
                  <span key={idx} className="list-item-text">{`(${ing.join(
                    ' '
                  )})`}</span>
                ))}
              </span>
              <div>
                {/* <button className="">

                </button> */}
              </div>
            </li>
          ))}
        </div>
      </div>
    </div>

    //LIST RENDERING BELOW ----->
    // <div className="shopping-list">
    //   <h3>Shopping List: ({uniqueIngNames.length} items)</h3>
    //   {/* {uniqueAisles.sort().map((aisle, idx) => {
    //     return (
    //       <div key={idx}>
    //         <h5>Aisle: {aisle === null || aisle === '?' ? 'Other' : aisle} </h5> */}
    //   {ingEnt.sort().map((ingred, idx) => (
    //     <div key={idx}>
    //       <span style={{ fontWeight: 600 }}>{`- ${ingred[0]}, `}</span>
    //       <span>
    //         (
    //         {ingred.slice(1).map((ing, idx, array) => (
    //           <span key={idx}>{ing.join(' ')}</span>
    //         ))}
    //         )
    //       </span>
    //     </div>
    //   ))}
    //   {/* </div>
    //     );
    //   })} */}
    // </div>
  );
};

export default ShoppingList;
