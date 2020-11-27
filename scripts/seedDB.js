const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/space"
);

// need to fill in our data
const locationSeed = [
  {
    name: "North America",
    description: "The northern half of the supercontinent of America",
    imgageUrl: ""
  }
];

db.Location
  .remove({})
  .then(() => db.Location.collection.insertMany(locationSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
