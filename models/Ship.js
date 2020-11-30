const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shipSchema = new Schema({
  name: { type: String, required: true },
  cost: { type: Number, default:100 },
  maxLevel:{ type: Number, default:1 },
  topImg:String,
  sideImg:String,
});

const Ship = mongoose.model("Ship", shipSchema);

module.exports = Ship;