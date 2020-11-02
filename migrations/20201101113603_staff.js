
exports.up = function(knex) {
  return knex.schema.createTable("staff", (table) => {
      table.increments(),
      table.text("username").notNullable();
          table.text("password").notNullable();
          table.text("department").notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("staff");
};

