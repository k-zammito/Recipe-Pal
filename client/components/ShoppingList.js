import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ListHeader from './ListHeader';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const ShoppingList = () => {
  const userId = useSelector((state) => state.auth.id) || '';
  const currMealPlan = useSelector(
    (state) =>
      state.mealPlans.find((mealPlan) => mealPlan.userId === userId) || {}
  );

  const ingredients = useSelector((state) =>
    state.ingredients.filter(
      (ing) =>
        ing.mealplanId === currMealPlan.id && currMealPlan.userId === userId
    )
  );

  // console.log('USER MEALS', userMeals);

  const aisles = ingredients.map((ing) => ing.aisle);
  const uniqueAisles = [...new Set(aisles)];

  const ingNames = ingredients.map((ing) => ing.name);
  const uniqueIngNames = [...new Set(ingNames)].sort();
  // console.log('UNIQUE INGREDIENTS', uniqueIngNames);
  // console.log('ALL INGREDIENTS', ingredients);

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
  console.log('entries', ingEnt);
  // console.log('ing names', uniqueIngNames);

  const toggleLineThru = (boolen) => {
    if (boolen) {
      return 'line-through';
    }

    if (boolen === false) {
      return '';
    }
  };

  const [checkedState, setCheckedState] = useState(
    new Array(ingEnt.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  console.log('checked state', checkedState);

  useEffect(() => {
    setCheckedState(JSON.parse(window.localStorage.getItem('checkedState')));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('checkedState', JSON.stringify(checkedState));
    // console.log('checked state', checkedState);
  }, [checkedState]);

  const currIngred = (name) => {
    return ingEnt.find((ing) => ing[0] === name);
  };

  // useEffect(() => {
  //   ingEnt.forEach((ing) => ing.push(checkedState.shift()));
  // }, [ingEnt]);

  return (
    <div className="list-container">
      <div className="list-wrapper">
        <div>
          <ListHeader ingredientsLength={uniqueIngNames} />
        </div>
        <div>
          {ingEnt.sort().map((ingred, idx) => (
            <div key={idx} className="list-item">
              <span
                className="list-item-text"
                style={{ textDecoration: toggleLineThru(checkedState[idx]) }}
              >
                {`${ingred[0]} `}
                {ingred.slice(1).map((ing, idx) => (
                  <span key={idx} className="list-item-text">{`(${ing.join(
                    ' '
                  )})`}</span>
                ))}
              </span>
              <FormControlLabel
                control={
                  <Checkbox
                    disableRipple={true}
                    style={{ background: 'none' }}
                    icon={
                      <RadioButtonUncheckedIcon className="button-complete" />
                    }
                    checkedIcon={
                      <CheckCircleIcon className="button-complete" />
                    }
                    checked={!!currIngred(ingred[0])}
                    onChange={() => handleOnChange(idx)}
                  />
                }
              />
            </div>
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
