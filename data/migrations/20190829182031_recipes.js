
exports.up = function(knex) {
  return knex.schema
  .createTable('ingredients', tbl => {
    tbl.increments();
    tbl.string('ingredient_name', 128).notNullable().unique();
    tbl.float('quantity', [2]).notNullable()
    tbl.string('quantity_descrption').notNullable();
  })
  .createTable('recipes', tbl => {
    tbl.increments();
    tbl.string('recipe_name').notNullable().unique();

  })
  .createTable('steps', tbl => {
    tbl.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl.integer('step_number').unsigned().notNullable();
    tbl.string('step_description').notNullable();
    tbl.primary(['recipe_id', 'step_number']);

  })
  .createTable('ingredient_recipes', tbl => {
    tbl.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl.integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredients')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl.primary(['recipe_id', 'ingredient_id']);
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('ingredient_recipes')
  .dropTableIfExists('steps')
  .dropTableIfExists('recipes')
  .dropTableIfExists('ingredients')
};
