import React, { useEffect, useState } from "react";
import "./style.css";
import {getNewCharacterPortrait} from "../utils/API"
import {saveCharacter} from "../utils/API"
export default function CharacterCreator() { 

  const [character, setCharacter] = useState({
    name: "J. Smith",
    age: 23,
    currentYear: 2021,
    credits:0,
    shipIdArray:[1],
    levelsCompletedArray:[],
    userId:0,
    characterImage: "",
  })

  useEffect(()=>{
    if(!character.characterImage) getNewPortrait();
  },[])

  function getNewPortrait(){
    getNewCharacterPortrait()
    .then(res=>{
       setCharacter({...character, characterImage:res.data.results[0].picture.large})
      }
    );
  }
  function inputHandler(e){
    const {name, value} = e.target;
    console.log(name);
    setCharacter({...character,[name]:value})
  }
  function submitCharacter(e){
    e.preventDefault();
    if(e.target.name.value && e.target.name.value){
      setCharacter({...character,name:e.target.name.value, age:e.target.age.value})
     
      saveCharacter(character);
    }
    else alert("Need a name!");
  }



  return (
    <div className="row creation-box">
        <div className="col col-lg-4">
          <form onSubmit={submitCharacter}>
            <p><label htmlFor="name">Character Name:</label></p><p><input onChange={inputHandler} type="text" name="name" id="name"/></p>
            <p><label htmlFor="age">Age:</label></p><p><input type="number" onChange={inputHandler} name="age" maxLength="3" size="3" id="age" defaultValue="23"/></p>
            <p><button type="submit">Submit</button></p>
          </form>
        </div>
        <div className="col col-lg-8">
          <div className="col">
            <img src={character.characterImage} />
          </div>
          <button id="change-portrait" alt="Character Portrait" onClick={getNewPortrait}>Choose new Portrait</button>
        </div>
    </div>
);
}

