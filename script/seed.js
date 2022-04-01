'use strict';

const {
  db,
  models: { User, MealPlan },
} = require('../server/db');

async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log('db synced!');

  const users = await Promise.all([
    User.create({ username: 'cody', password: '123' }),
    User.create({ username: 'moe', password: '123' }),
    User.create({ username: 'kenny', password: '123' }),
  ]);

  users.forEach((user) => MealPlan.create({ userId: user.id }));

  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);
}

async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

if (module === require.main) {
  runSeed();
}

module.exports = seed;
