const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, default:20 },
  characterImage: String,
  currentYear:{type: Number, default:2021},
  birthYear: {type:Number, default:2001},
  credits: Number,
  shipIdArray: [String],
  levelsCompletedArray:[Number],
  userId: String
});

const Character = mongoose.model("Character", characterSchema);

module.exports = Character;