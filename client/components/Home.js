import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRecipes } from '../store/fetchRecipes';
import { Link } from 'react-router-dom';
import MealPlanForm from './MealPlanForm';

export const Home = () => {
  const username = useSelector((state) => state.auth.username);

  const dispatch = useDispatch();

  const mealType = 'dinner'; // meal type: breakfast, lunch, dinner, dessert
  const dietType = 'dairy-free'; //diet type: null, vegan, vegetarian, dairy-free, gluten-free
  const amountOfMeals = 1;

  return (
    <div>
      <h1>HOME</h1>
      <h3>Welcome, {username}</h3>
      <div>
        <MealPlanForm />
      </div>
      {/* <Link to="/recipes">
        <button
          onClick={() =>
            dispatch(fetchRecipes(mealType, dietType, amountOfMeals))
          }
        >
          FETCH RECIPE!
        </button>
      </Link> */}
    </div>
  );
};

export default Home;
