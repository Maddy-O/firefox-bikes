const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const login_singUp_Schema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    phone: { type: Number, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

login_singUp_Schema.pre("save", function (next) {
  if (!this.isModified("password")) return next();

  let hash = bcrypt.hashSync(this.password, 8);
  this.password = hash;
  return next();
});

login_singUp_Schema.methods.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("loginsignup", login_singUp_Schema);
