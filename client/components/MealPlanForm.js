import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRecipes } from '../store/fetchRecipes';
import { Link } from 'react-router-dom';

export default function MealPlanForm() {
  const [values, setValues] = useState({
    mealType: '',
    dietType: '',
    numOfMeals: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const [valid, setValid] = useState(false);

  const handleMealType = (event) => {
    setValues({ ...values, mealType: event.target.value });
  };

  const handleDietType = (event) => {
    setValues({ ...values, dietType: event.target.value });
  };

  const handleNumOfMeals = (event) => {
    setValues({ ...values, numOfMeals: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.mealType && values.dietType && values.numOfMeals) {
      setValid(true);
    }
    setSubmitted(true);
  };

  const mealTypes = ['Breakfast', 'Lunch', 'Dinner', 'Dessert'];
  const dietTypes = [
    'No Preference',
    'Vegetarian',
    'Vegan',
    'Gluten-Free',
    'Dairy-Free',
  ];
  const numOfMeals = [1, 2, 3];

  const dispatch = useDispatch();

  console.log('VALUES', values);

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? (
          <div className="success-message">
            Success! Thank you for registering
          </div>
        ) : null}

        <select
          value={values.mealType}
          onChange={handleMealType}
          className="form-field"
        >
          <option value="">Select A Meal Type</option>
          {mealTypes.map((meal, idx) => {
            return (
              <option key={idx} value={meal.toLowerCase()}>
                {meal}
              </option>
            );
          })}
        </select>

        {submitted && !values.mealType ? (
          <span className="error">Please select a meal type</span>
        ) : null}

        <select
          value={values.dietType}
          onChange={handleDietType}
          className="form-field"
        >
          <option value="">Select A Diet Preference</option>
          {dietTypes.map((diet, idx) => {
            return (
              <option key={idx} value={diet.toLowerCase()}>
                {diet}
              </option>
            );
          })}
        </select>

        {submitted && !values.dietType ? (
          <span className="error">Please select a diet type</span>
        ) : null}

        <select
          value={values.numOfMeals}
          onChange={handleNumOfMeals}
          className="form-field"
        >
          <option value="">Select Number of Meals</option>
          {numOfMeals.map((num, idx) => {
            return (
              <option key={idx} value={num}>
                {num}
              </option>
            );
          })}
        </select>

        {submitted && !values.numOfMeals ? (
          <span className="error">Please select a number of meals</span>
        ) : null}
        <Link to="/recipes">
          <button
            className="form-field"
            type="submit"
            onClick={() =>
              dispatch(
                fetchRecipes(
                  values.mealType,
                  values.dietType === 'no preference' ? null : values.dietType,
                  Number(values.numOfMeals)
                )
              )
            }
          >
            Create Recipe
          </button>
        </Link>
      </form>
    </div>
  );
}
