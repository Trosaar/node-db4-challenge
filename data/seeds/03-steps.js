exports.seed = function(knex, Promise) {
  return knex('steps').insert([
    {
      recipe_id: '1',
      step_number: 1,
      step_description: 'add milk'
    },
    {
      recipe_id: '1',
      step_number: 2,
      step_description: 'add eggs'
    },
    {
      recipe_id: '1',
      step_number: 3,
      step_description: 'add flour'
    },
    {
      recipe_id: '2',
      step_number: 1,
      step_description: 'add milk'
    },
    {
      recipe_id: '2',
      step_number: 2,
      step_description: 'add flour'
    },
    {
      recipe_id: '2',
      step_number: 3,
      step_description: 'wisk in egg'
    },
    {
      recipe_id: '2',
      step_number: 4,
      step_description: 'add more milk'
    },
    {
      recipe_id: '3',
      step_number: 1,
      step_description: 'baking pancakes'
    },
    {
      recipe_id: '3',
      step_number: 2,
      step_description: 'baking baking panCAKEs'
    }
  ]);
};
