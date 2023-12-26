const mongoose = require("mongoose");

const MenuItemSchema = new mongoose.Schema({
  heading: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MenuHeading",
  },
  name: {
    required: true,
    type: String,
  },
  status: {
    required: true,
    type: Boolean,
  },
});

module.exports = mongoose.model("MenuItem", MenuItemSchema);
