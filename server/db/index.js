//this is the access point for all things database related!

const db = require('./db');

const User = require('./models/User');
const Meal = require('./models/Meal');
const MealPlan = require('./models/MealPlan');

//associations:

User.hasMany(Meal);
Meal.belongsTo(User);
// Ingredient.belongsTo(Meal);
// Meal.hasMany(Ingredient);

// MealPlan.belongsTo(User);
// Meal.belongsTo(MealPlan);
// MealPlan.hasMany(Meal);

// ShoppingList.belongsTo(User);
// ShoppingList.hasMany(ShoppingIngredient);
// ShoppingIngredient.belongsTo(ShoppingList);
// ShoppingIngredient.bleongsTo(Ingredient);

module.exports = {
  db,
  models: {
    User,
    Meal,
  },
};
