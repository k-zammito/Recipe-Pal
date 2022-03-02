import React from 'react';
import { useSelector } from 'react-redux';

const ShoppingList = () => {
  const userId = useSelector((state) => state.auth.id);
  const recipes = useSelector((state) =>
    state.recipes.filter((recipe) => recipe.userId === userId)
  );
  const ingredients = useSelector((state) => state.ingredients); // USE MEALPLAN ID for this -> indredients belong to mealplan

  console.log(recipes);

  return (
    <div>
      <h1>ShoppingList</h1>
    </div>
  );
};

export default ShoppingList;
