var mongoose = require("mongoose");

var userSchema = new mongoose.Schema(
  {
    number: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
