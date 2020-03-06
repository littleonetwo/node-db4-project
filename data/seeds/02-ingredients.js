
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name:'pasta', recipe_id: 3},
        {ingredient_name:'sauce', recipe_id: 3},
        {ingredient_name:'cheese', recipe_id: 1},
        {ingredient_name:'butter', recipe_id: 1},
        {ingredient_name:'macaroni', recipe_id: 1},
        {ingredient_name:'chicken', recipe_id: 2},
      ]);
    });
};
