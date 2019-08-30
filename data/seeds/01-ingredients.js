exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([
    {
      ingredient_name: 'Milk',
      quantity: 1.5,
      quantity_descrption: 'Cups'
    },
    {
      ingredient_name: 'Egg',
      quantity: '2',
      quantity_descrption: 'Whole'
    },
    {
      ingredient_name: 'Flour',
      quantity: '2',
      quantity_descrption: 'Cups'
    }
  ]);
};
