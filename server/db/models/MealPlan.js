const Sequelize = require('sequelize');
const db = require('../db');

const { UUID, UUIDV4, BOOLEAN } = Sequelize;

const MealPlan = db.define('mealplan', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  isSubmitted: {
    type: BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Product;
