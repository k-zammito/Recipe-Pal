const Sequelize = require('sequelize');
const db = require('../db');

const { STRING, TEXT, INTEGER, ARRAY, BOOLEAN } = Sequelize;

const Meal = db.define('meal', {
  id: {
    type: INTEGER,
    primaryKey: true,
  },
  title: {
    type: STRING,
  },
  cuisine: {
    type: STRING,
  },
  dishType: {
    type: STRING,
  },
  img: {
    type: STRING,
  },
  instructions: {
    type: ARRAY(TEXT),
  },
  readyTime: {
    type: INTEGER,
  },
  servings: {
    type: INTEGER,
  },
  url: {
    type: STRING,
  },
  isVegan: {
    type: BOOLEAN,
  },
  isVegetarian: {
    type: BOOLEAN,
  },
  isGlutenFree: {
    type: BOOLEAN,
  },
  isDairyFree: {
    type: BOOLEAN,
  },
});

module.exports = Meal;
