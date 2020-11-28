import React, { useEffect, useContext, useState } from "react";
import "./style.css";
import {loadCharacter} from "../utils/API"
// import AuthContext from "../../context/auth/authContext";
import {useCharacterContext} from "../../context/character/CharacterContext"


export default function ViewCharacter(props) { 

  let userId=0;
  const [state, dispatch] = useCharacterContext();

  useEffect(()=>{
    // If we're still using the default values for Charactercontext, then the img will not be 
    // set yet. In that case, we need to load the character
    if(!state.characterImage) loadCharacter(userId)
    .then(data=>{
      if(!data.data); //Go to create a character, do not pass go
      else dispatch({type:"update", char:data.data})
    })
  },[]);


  return (
    <div className="container desk-box">
    <div className="container" id="license">
      <div className="smudge"></div>
        <div className="row">
          <div className="col-5" id="photo">
            <img src={state.characterImage} />
          </div>
          <div className="col-7">
          <ul className="stats">
          <li>Name: {state.name}</li>
            <li>Age: {state.age}</li>
            <li>Born:{state.birthYear}</li>
            <li>Ship Class: {state.shipId} </li>               
            </ul>
          </div>
        </div>
        <div className="row license-text">
          LICENSE
        </div>
        <div className="row update-text">
          UPDATED {state.currentYear}
        </div>
    </div>
</div>  
  );
}

