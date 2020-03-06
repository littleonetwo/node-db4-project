
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {step_name: 'combine butter and macaroni', recipe_id: 1},
        {step_name: 'add cheese and stir', recipe_id: 1},
        {step_name: 'put chicken in the oven and bake for 40 mins', recipe_id: 2},
        {step_name: 'combine sauce and pasta', recipe_id: 3},
      ]);
    });
};
