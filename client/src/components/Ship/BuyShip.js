import React, { useEffect, useContext, useState } from "react";
import "./style.css";
import {loadShips} from "../utils/API"
import ShipItem from "./ShipItem";
// import AuthContext from "../../context/auth/authContext";
import {useCharacterContext} from "../../context/character/CharacterContext"


export default function BuyShip() { 

  let userId=0;
  const [charState, dispatch] = useCharacterContext();

  const [shipArray, setShipArray] = useState([{loading:true}]);

  useEffect(()=>{
    loadShips()
    .then(data=>{
        setShipArray(data.data.data);
    })
  },[]);
  
  
  return(
    <div className="container air-field">
    {
    shipArray.map(elem=>(
        <ShipItem key={elem.id} data={elem} />
    ))}
    </div>  
);

}

