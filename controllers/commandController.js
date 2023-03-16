const Command = require("../models/commandModel");
const Menu = require("./../models/menuModel");
// require("./../public/chat")

const createCommand = async (req, res, next) => {
  try {
    const { command, response } = req.body;
    const newCommand = await Command.create({
      command,
      response,
    });

    res.status(201).json({
      status: "success",
      message: "Bot command created successfully",
      data: newCommand,
    });
  } catch (error) {
    next(error);
  }
};

const getCommand = async (req, res, next) => {
  try {
    // const {message} = req.body
    // const command = await Command.findOne({ command: message });

    const command = await Command.find();
    res.status(200).json({
      data: command,
    });
  } catch (error) {
    next(error);
  }
};

const createMenu = async (req, res, next) => {
  try {
    const { command, menuName, price } = req.body;
    const newMenu = await Menu.create({
      command,
      menuName,
      price
    });

    res.status(201).json({
      status: "success",
      message: "Menu created successfully",
      data: newMenu,
    });
  } catch (error) {
    next(error);
  }
};

const getMenu = async (req, res, next) => {
  try {
    const menu = await Menu.find();
    res.status(200).json({
      data: menu,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createCommand,
  getCommand,
  createMenu,
  getMenu,
};
