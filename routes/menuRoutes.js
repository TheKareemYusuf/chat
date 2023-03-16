const commandController = require("../controllers/commandController");
const express = require("express");

const router = express.Router();

router
  .route("/")
  .get(commandController.getMenu)
  .post(commandController.createMenu);

module.exports = router;