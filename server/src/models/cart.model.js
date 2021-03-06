const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    rating: { type: String, required: true },
    color: [{ type: String, required: false }],
    image: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, required: true },
    section: { type: String, required: true },
    popular: { type: Boolean, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("cart", cartSchema);
