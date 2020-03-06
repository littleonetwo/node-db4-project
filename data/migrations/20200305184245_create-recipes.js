
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments('recipe_id');
      tbl.string('recipe_name', 64).notNullable();

    })

    .createTable('ingredients', tbl => {
      tbl.increments('ingredient_id');
      tbl.string('ingredient_name', 64).notNullable();
      tbl.integer('recipe_id').unsigned().notNullable().references('recipe_id').inTable('recipes').onUpdate('CASCADE').onDelete('CASCADE');
    })

    .createTable('steps', tbl => {
      tbl.increments('step_id');
      tbl.string('step_name', 128).notNullable();
      tbl.integer('recipe_id').unsigned().notNullable().references('recipe_id').inTable('recipes').onUpdate('CASCADE').onDelete('CASCADE');
    })

    .createTable('recipe_ingredients', tbl => {
      tbl.integer('recipe_id').unsigned().notNullable().references('recipe_id').inTable('recipes');
      tbl.integer('ingredient_id').unsigned().notNullable().references('ingredient_id').inTable('ingredients');
      tbl.float('ingredient_qty').unsigned().notNullable();

      tbl.primary(['recipe_id', 'ingredient_id']);
    })

    .createTable('recipe_steps', tbl => {
      tbl.integer('recipe_id').unsigned().notNullable().references('recipe_id').inTable('recipes');
      tbl.integer('step_id').unsigned().notNullable().references('step_id').inTable('steps');

      tbl.primary(['recipe_id', 'step_id']);
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipe_steps')
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipe')
};
