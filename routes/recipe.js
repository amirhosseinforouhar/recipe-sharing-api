const express = require("express");
const router = express.Router();

const controllers = require("../controllers/recipe");

router.get("/recipe", controllers.getAllRecipes);
router.get("/recipe/:id", controllers.getSingleRecipe);
router.post("/recipe", controllers.createRecipe);
router.patch("/recipe/:id", controllers.updateRecipe);
router.delete("/recipe/:id" , controllers.deleteRecipe)
router.post("/comment/:id" , controllers.addComment)


module.exports = router;
