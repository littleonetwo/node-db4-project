const express = require('express');

const Recipes = require('./recipes-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Recipes.getRecipes()
  .then(recipe => {
    res.json(recipe);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get recipes' });
  });
});

router.get('/:id/ingredients', (req, res) => {
  const { id } = req.params;

  Recipes.getShoppingList(id)
  .then(recipe => {
    if (recipe) {
      res.json(recipe);
    } else {
      res.status(404).json({ message: 'Could not find ingredients with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get recipes' });
  });
});

router.get('/:id/steps', (req, res) => {
  const { id } = req.params;

  Recipes.getInstructions(id)
  .then(recipe => {
    if (recipe) {
      res.json(recipe);
    } else {
      res.status(404).json({ message: 'Could not find Instructions with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get recipes' });
  });
});

module.exports = router;
