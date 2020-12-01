import React, { useEffect, useContext, useState } from "react";
import "./style.css";
import Options from "../Options"
import {loadCharacter} from "../utils/API"
import BuyShip from "../Ship/BuyShip"
import AuthContext from "../../context/auth/authContext";
import CharacterContext from "../../context/character/CharacterContext";
import CharacterCreator from "./CharacterCreator"
export default function ViewCharacter(props) { 
  // const [state, dispatch] = useCharacterContext();
  const authContext = useContext(AuthContext);
  const characterContext = useContext(CharacterContext);
 
let userId;

  useEffect(()=>{
    
    if(authContext.user){
      userId=authContext.user._id;      
      characterContext.loadChar(userId);
    }      
    else 
     authContext.loadUser();

  },[authContext.loading]);

let display={display:"TopRight"};

  if(characterContext.missing) return (<CharacterCreator />)
  else if(!characterContext.loaded) return (<>Loading</>);
  else return (
    <>
    <BuyShip />
    <div className="container desk-box">
    <div className="container" id="license">
      <div className="smudge"></div>
        <div className="row">
          <div className="col-5" id="photo">
            <img src={characterContext.data.characterImage} />
          </div>
          <div className="col-7">
          <ul className="stats">
          <li>Name: {characterContext.data.name}</li>
            <li>Age: {characterContext.data.age}</li>
            <li>Born:{characterContext.data.birthYear}</li>
            <li>Ship Class: {characterContext.data.shipIdArray[0]} </li>               
            </ul>
          </div>
        </div>
        <div className="row license-text">
          LICENSE
        </div>
        <div className="row update-text">
          UPDATED {characterContext.currentYear}
        </div>
    </div>
    <a href="/buyShip">Creator</a>
    <Options displayed={display}/>
</div>  
</>
  );
}

