exports.seed = function(knex, Promise) {
  return knex('recipes').insert([
    {
      recipe_name: 'Cake',
    },
    {
      recipe_name: 'Cupcake',
    },
    {
      recipe_name: 'Pancake',
    }
  ]);
};
