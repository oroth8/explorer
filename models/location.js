const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: false }
});

const Location = mongoose.model("Location", locationSchema);

module.exports = Location;
