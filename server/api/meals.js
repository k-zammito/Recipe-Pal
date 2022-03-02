const router = require('express').Router();
const {
  models: { Meal },
} = require('../db');
module.exports = router;

// GET ALL MEALS
router.get('/', async (req, res, next) => {
  try {
    const meals = await Meal.findAll({});
    res.json(meals);
  } catch (err) {
    next(err);
  }
});

// CREATE NEW MEAL
router.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await Meal.create(req.body));
  } catch (error) {
    next(error);
  }
});

// DELETE A MEAL
// router.delete('/:id', async (req, res, next) => {
//   try {
//     const meal = await Meal.findByPk(req.params.id);
//     if (!meal) {
//       res.sendStatus(404);
//     } else {
//       await meal.destroy();
//       res.sendStatus(204);
//     }
//   } catch (error) {
//     next(error);
//   }
// });

// UPDATE A MEAL
// router.put('/:id', async (req, res, next) => {
//   try {
//     const meal = await Meal.findByPk(req.params.id);
//     res.send(await meal.update(req.body));
//   } catch (error) {
//     next(error);
//   }
// });
