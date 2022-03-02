const router = require('express').Router();
const {
  models: { MealPlan, Meal },
} = require('../db');
module.exports = router;

// GET ALL MEALPLANS
router.get('/', async (req, res, next) => {
  try {
    const mealPlans = await MealPlan.findAll({
      include: [Meal],
    });
    res.json(mealPlans);
  } catch (err) {
    next(err);
  }
});

// CREATE A MealPlan
router.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await MealPlan.create(req.body));
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const mealPlan = await MealPlan.findByPk(req.params.id);
    res.send(await mealPlan.update(req.body));
  } catch (error) {
    next(error);
  }
});
