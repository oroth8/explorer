const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema({
  data:{
    name: { type: String, required: true },
    age: { type: Number, default:20 },
    characterImage: String,
    currentYear:{type: Number, default:2021},
    birthYear: {type:Number, default:2001},
    credits: {type:Number, default:100},
    shipIdArray:{type:[String], default:[]},
    levelsCompletedArray:{type:[Number], default:[]}
  },
  userId: String, 
  loaded:Boolean,
  missing:Boolean 
});

const Character = mongoose.model("Character", characterSchema);

module.exports = Character;
