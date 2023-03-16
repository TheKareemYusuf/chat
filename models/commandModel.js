const mongoose = require('mongoose');

const commandSchema = new mongoose.Schema({
  command: {
    type: String,
    required: true
  },
  response: {
    type: String,
    required: true
  }
});

const Command = mongoose.model('Command', commandSchema);

module.exports = Command;
