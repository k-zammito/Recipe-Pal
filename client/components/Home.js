import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRecipes } from '../store/fetchRecipes';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const Home = () => {
  const username = useSelector((state) => state.auth.username);

  const dispatch = useDispatch();

  const stateRecipe = useSelector((state) => state.recipes[0]);

  const state = useSelector((state) => state);

  // const [recipe, setRecipe] = useState({});

  // console.log('state from home', state);
  // useEffect(() => {
  //   dispatch(fetchRecipes());
  // }, []);

  // useEffect(() => {
  //   setRecipe(stateRecipe);
  // }, [stateRecipe]);

  //MOVE THIS TO REDUX STORE?
  // const getRecipe = async () => {
  //   try {
  //     const recipe = (
  //       await axios.get(
  //         'https://api.spoonacular.com/recipes/random?apiKey=fa42fec85fmsh86912e847dbf256p10c532jsnde7e4d22ff94'
  //       )
  //     ).data;
  //     setRecipe(recipe);
  //     console.log(recipe);
  //   } catch (er) {
  //     console.log(er);
  //   }
  // };

  const tag1 = '';
  const tag2 = 'dinner';

  // const handleClick = () => {
  //   const handleFetch = () => {
  //     dispatch(fetchRecipes(tag1, tag2));
  //   };
  //   const fetched = handleFetch();
  //   console.log('fetched', fetched);
  // };

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
