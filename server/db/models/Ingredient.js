const Sequelize = require('sequelize');
const db = require('../db');

const { INTEGER, UUID, UUIDV4 } = Sequelize;

const OrderItem = db.define('orderitem', {
  id: {
    type: INTEGER,
    primaryKey: true,
  },
  quantity: {
    type: INTEGER,
    defaultValue: 1,
  },
});

module.exports = OrderItem;
