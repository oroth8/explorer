const mongoose = require("mongoose");
const db = require("../models");
const config = require("config");

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
  },
  {
    name: "Africa",
    description: "Continent of Africa",
    imgageUrl: ""
  },
  {
    name: "South America",
    description: "The southern half of the supercontinent of America",
    imgageUrl: ""
  },
  {
    name: "Europe",
    description: "Continent of Europe",
    imgageUrl: ""
  },  {
    name: "Asia",
    description: "Continent of Asia",
    imgageUrl: ""
  },{
    name: "Antartica",
    description: "Continent of Anatartica",
    imgageUrl: ""
  },{
    name: "Australia",
    description: "Continent of Australia",
    imgageUrl: ""
  },{
    name: "Earth",
    description: "The plane we live on",
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
