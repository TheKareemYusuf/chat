const dotenv = require('dotenv');
const app = require('./app');

const CONFIG = require('./config/config')
const { connetToMongoDB } = require("./db");


connetToMongoDB();

const PORT = CONFIG.PORT || 8000;
app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});