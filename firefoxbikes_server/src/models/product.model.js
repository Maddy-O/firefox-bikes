const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    rating: { type: String, required: true },
    color: [{ type: String, required: true }],
    image: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, required: true },
    section: { type: String, required: true },
    popular: { type: Boolean, required: true}
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("product", productSchema);
