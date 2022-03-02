import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRecipes } from '../store/fetchRecipes';
import { Link } from 'react-router-dom';

export const Home = () => {
  const username = useSelector((state) => state.auth.username);

  const dispatch = useDispatch();

  const tag1 = '';
  const tag2 = 'dinner';

  return (
    <div>
      <h1>HOME</h1>
      <h3>Welcome, {username}</h3>
      <Link to="/recipes">
        <button onClick={() => dispatch(fetchRecipes(tag1, tag2))}>
          FETCH RECIPE!
        </button>
      </Link>
    </div>
  );
};

export default Home;
