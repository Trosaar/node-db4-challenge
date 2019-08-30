const db = require('../data/db-config.js');

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
}

function getRecipes() {
  return db('recipes')
}

function getShoppingList(recipe_id) {
  return db('ingredients as i')
    .join('ingredient_recipes as ir', 'ir.ingredient_id', 'i.id' )
    .join('recipes as r', 'ir.recipe_id', 'r.id')
    .select('i.ingredient_name', 'i.quantity', 'i.quantity_descrption')
    .where({ recipe_id: recipe_id})
}

function getInstructions(recipe_id) {
  return db('recipes as r')
    .join('steps as s', 's.recipe_id', 'r.id')
    .select('recipe_name', 's.step_number', 's.step_description')
    .where({ id: recipe_id})
}
