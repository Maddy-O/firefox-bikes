const mongoose = require("mongoose");
require("dotenv").config();
// console.log(process.env.databaseurl);
module.exports = () => {
  return mongoose.connect(process.env.databaseurl);
};

