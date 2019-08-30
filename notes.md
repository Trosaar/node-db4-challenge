Design the **data model** for a _recipe book_ application, then use `Knex migrations and seeding` functionality to build a `SQLite3` database based on the model and seed it with test data.

The requirements for the system, as stated by the client are:

- have a way to manage recipes.
- have a way to manage ingredients.
- a **recipe** could have more than one **ingredient** and the same **ingredient** can be used in multiple recipes. Examples are _"cup of corn flour"_ or _"gram of butter"_.
- when saving the ingredients for a **recipe** capture the quantity required for that **ingredient** as a floating number.
- have a way to save step by step instructions for preparing a recipe.

**Hint**: Before writing any code, write out all desired tables in the data model and determine all relationships between tables.


[recipe_id, recipe_name]

[ingredient_id, ingredient_name, quantity_descrption]

[recipe_id, ingredient_id]

[recipe_id, step_number, step_description]
