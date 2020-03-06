
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: "mac and cheese"},
        {recipe_name: "baked chicken"},
        {recipe_name: "spaghetti"}
      ]);
    });
};
