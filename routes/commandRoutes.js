const commandController = require("../controllers/commandController");
const express = require("express");

const router = express.Router();

router
  .route("/")
  .get(commandController.getCommand)
  .post(commandController.createCommand);

module.exports = router;
