const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, default:20 },
  characterImage: String,
  currentYear: Number,
  credits: Number,
  shipIdArray: [Number],
  levelsCompletedArray:[Number],
  userId: Number
});

const Character = mongoose.model("Character", characterSchema);

module.exports = Character;
