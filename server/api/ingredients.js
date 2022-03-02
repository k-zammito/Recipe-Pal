const router = require('express').Router();
const {
  models: { Ingredient },
} = require('../db');
module.exports = router;

// GET ALL INGREDIENTS
router.get('/', async (req, res, next) => {
  try {
    const ingredients = await Ingredient.findAll({});
    res.json(ingredients);
  } catch (err) {
    next(err);
  }
});

// CREATE NEW Ingredient
router.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await Ingredient.create(req.body));
  } catch (error) {
    next(error);
  }
});

// DELETE A Ingredient
// router.delete('/:id', async (req, res, next) => {
//   try {
//     const Ingredient = await Ingredient.findByPk(req.params.id);
//     if (!Ingredient) {
//       res.sendStatus(404);
//     } else {
//       await Ingredient.destroy();
//       res.sendStatus(204);
//     }
//   } catch (error) {
//     next(error);
//   }
// });

// UPDATE A Ingredient
// router.put('/:id', async (req, res, next) => {
//   try {
//     const Ingredient = await Ingredient.findByPk(req.params.id);
//     res.send(await Ingredient.update(req.body));
//   } catch (error) {
//     next(error);
//   }
// });
