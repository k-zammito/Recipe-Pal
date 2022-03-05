import React from 'react';
import { useSelector } from 'react-redux';
import MealPlanForm from './MealPlanForm';

export const Home = () => {
  return (
    <div className="home">
      <MealPlanForm />
    </div>
  );
};

export default Home;
