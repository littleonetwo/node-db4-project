

const db = require('../data/config');

function getRecipes() {
  return db('recipes');

}

// function getRecipe(recipe_id){
//   return db('recipes').where({id}).first();
// }

function getShoppingList(recipe_id) {
  // return getRecipe(recipe_id)
  return db('recipes as a')
            .join("ingredients as b", "a.recipe_id", "b.recipe_id")
            .join("recipe_ingredients as c", "c.ingredient_id", "b.ingredient_id")
            .where("a.recipe_id", recipe_id)
            .select("a.recipe_name", "b.ingredient_name", "c.ingredient_qty");

}

function getInstructions(recipe_id) {
  // return getRecipe(recipe_id)
  return db('recipes as a')
            .join("steps as b", "a.recipe_id", "b.recipe_id")
            .join("recipe_steps as c", "c.step_id", "b.step_id")
            .where("a.recipe_id", recipe_id)
            .select("a.recipe_name", "b.step_name");

}


module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
}
