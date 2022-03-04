//this is the access point for all things database related!
require('dotenv').config();

const db = require('./db');

const User = require('./models/User');
const Meal = require('./models/Meal');
const Ingredient = require('./models/Ingredient');
const MealPlan = require('./models/MealPlan');

//associations:

User.hasMany(MealPlan);
MealPlan.belongsTo(User);
User.hasMany(Meal);
Meal.belongsTo(User);
MealPlan.hasMany(Meal);
Ingredient.belongsTo(MealPlan, { constraints: false });
Ingredient.belongsTo(Meal, { constraints: false });
Meal.hasMany(Ingredient, { constraints: false });
Meal.belongsTo(MealPlan);

module.exports = {
  db,
  models: {
    User,
    MealPlan,
    Meal,
    Ingredient,
  },
};
