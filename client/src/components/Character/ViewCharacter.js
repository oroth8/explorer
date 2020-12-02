import React, { useEffect, useContext, useState } from "react";
import "./style.css";
import Options from "../Options";
import BuyShip from "../Ship/BuyShip";
import AuthContext from "../../context/auth/authContext";
import CharacterContext from "../../context/character/CharacterContext";
import CharacterCreate from "./CharacterCreate"
import License from "./components/License"

export default function ViewCharacter(props) { 
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

  let turnStyle={transform:'rotate(36deg)', pointerEvents:"none"};
  if(characterContext.missing) return (<CharacterCreate />)
  else if(!characterContext.loaded) return (<>Loading</>);
  else return (
    <> 
    <BuyShip />
    <div className="container desk-box">
      <div style={turnStyle}>
        <License />
      </div>
    </div>  
</>
  );
}
