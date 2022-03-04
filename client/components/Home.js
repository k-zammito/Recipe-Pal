import React from 'react';
import { useSelector } from 'react-redux';
import MealPlanForm from './MealPlanForm';

export const Home = () => {
  const username = useSelector((state) => state.auth.username);
  return (
    <div className="home">
      <div>
        <h1>HOME</h1>
        <h3>Welcome, {username}</h3>
        <MealPlanForm />
      </div>
    </div>
  );
};

export default Home;
