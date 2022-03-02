const Sequelize = require('sequelize');
const db = require('../db');

const { STRING, TEXT, INTEGER, UUID, UUIDV4, ARRAY, BOOLEAN } = Sequelize;

const Meal = db.define('meal', {
  id: {
    // type: UUID,
    // defaultValue: UUIDV4,
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
    defaultValue:
      'https://www.cvent.com/sites/default/files/styles/focus_scale_and_crop_800x450/public/migrated_attachments/meal-918638_1280-1.webp?itok=dMJGxEC2',
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
