import React, { useEffect, useContext, useState } from "react";
import "./style.css";
import Options from "../Options"
import {loadCharacter} from "../utils/API"
import BuyShip from "../Ship/BuyShip"
import AuthContext from "../../context/auth/authContext";
import {useCharacterContext} from "../../context/character/CharacterContext"
import Login from "../auth/Login"

export default function ViewCharacter(props) { 
  const [state, dispatch] = useCharacterContext();
  const authContext = useContext(AuthContext);
  
    
  //

  // let userId=authContext.user._id;
  // console.log(userId);
let userId;

  useEffect(()=>{
    authContext.loadUser();
    
    console.log(authContext.user);
    if(authContext.user){
      userId=authContext.user._id;      
      getCharacter(userId);
    }      
  },[authContext.loading]);

  const getCharacter=userId=>{
    dispatch({type:"LOADING"});
    loadCharacter(userId)
    .then(res=>{
      console.log(res.data);
      
      dispatch({type:"UPDATE_CHARACTER", char:res.data})
    })
  };

let display={display:"TopRight"};


  if(!state.loaded) return (<></>);
  else 
  return (
    <>
    <BuyShip />
    <div className="container desk-box">
    <div className="container" id="license">
      <div className="smudge"></div>
        <div className="row">
          <div className="col-5" id="photo">
            <img src={state.data.characterImage} />
          </div>
          <div className="col-7">
          <ul className="stats">
          <li>Name: {state.data.name}</li>
            <li>Age: {state.data.age}</li>
            <li>Born:{state.data.birthYear}</li>
            <li>Ship Class: {state.data.shipIdArray[0]} </li>               
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
    <a href="/buyShip">Creator</a>
    <Options displayed={display}/>
</div>  
</>
  );
}

