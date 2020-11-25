import React from "react";

// Set up a default object with the same property types as the value that we pass through the Provider.

const CharacterContext = React.createContext({
  name: "J. Smith",
  age: 23,
  currentYear: 2021,
  credits:0,
  shipIdArray:[1],
  levelsCompletedArray:[],
  userId:0,
  characterImage: String,
  levelsCompletedArray:[]
});

export default CharacterContext;
