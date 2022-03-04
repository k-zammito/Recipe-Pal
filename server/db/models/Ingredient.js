const Sequelize = require('sequelize');
const db = require('../db');

const { STRING, DECIMAL, UUID, UUIDV4 } = Sequelize;

const Ingredient = db.define('ingredient', {
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
  name: {
    type: STRING,
  },
  amount: {
    type: DECIMAL,
    defaultValue: 0,
  },
  unit: {
    type: STRING,
  },
  aisle: {
    type: STRING,
  },
  additionalInfo: {
    type: STRING,
  },
});

module.exports = Ingredient;
