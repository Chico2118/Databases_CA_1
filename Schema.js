const mongoose = require("mongoose");

const model = new mongoose.Schema({
  Restaurant: {
    Name: {
      type: String,
      required: true,
    },
    City: {
      type: String,
      required: true,
    },
    ItemsArr: {
      type: [Number, "Item ID's"],
    },
  },

  Items: {
    Name: {
      type: String,
      required: true,
    },
    Price: {
      type: Number,
      required: true,
    },
  },
});

module.exports = mongoose.model("Schema", model);
