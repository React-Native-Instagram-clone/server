const mongoose = require("mongoose");

const MenuHeadingSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  status: {
    required: true,
    type: Boolean,
  },
});

module.exports = mongoose.model("MenuHeading", MenuHeadingSchema);
