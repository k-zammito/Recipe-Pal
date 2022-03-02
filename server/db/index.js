//this is the access point for all things database related!

const db = require('./db');

const User = require('./models/User');
const Meal = require('./models/Meal');

//associations:
/* 
User.hasMany(MealPlan);
MealPlan.belongsTo(User);
Meal.belongsTo(MealPlan);
MealPlan.hasMany(Meal);
Ingredient.belongsTo(Meal);
Meal.hasMany(Ingredient);

ShoppingList.belongsTo(User);
ShoppingList.hasMany(ShoppingIngredient);
ShoppingIngredient.belongsTo(ShoppingList);
ShoppingIngredient.bleongsTo(Ingredient);


*/

module.exports = {
  db,
  models: {
    User,
    Meal,
  },
};
