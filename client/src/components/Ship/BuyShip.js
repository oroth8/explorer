import React, { useEffect, useContext, useState } from "react";
import "./style.css";
import {loadShips} from "../utils/API"
import ShipItem from "./ShipItem";
import CharacterContext from "../../context/character/CharacterContext"

export default function BuyShip() { 
  const characterContext = useContext(CharacterContext);
  const [shipArray, setShipArray] = useState([{loading:true}]);
  
  useEffect(()=>{
    loadShips()
    .then(data=>{
        setShipArray(data.data.data);
    })        
  },[]);

  if(shipArray){
    let bought=shipArray.filter(ship=>{
      if(characterContext.data.shipIdArray.indexOf(ship._id)!==-1) return true;
      else return false;
    })
    let others=shipArray.filter(ship=>{
      if(characterContext.data.shipIdArray.indexOf(ship._id)===-1) return true;
      else return false;
    })

  return(
    <div className="container air-field">
      <div className="row">
        
      <div className="col-6">
      Ships Owned:
    {
    bought.map(elem=>(
        <ShipItem key={elem.id} data={elem} />
    ))}
    </div>
    <div className="col-6">
    Ships for Sale:
    {
    others.map(elem=>(
        <ShipItem key={elem.id} data={elem} />
    ))}
    </div>
    </div>
    </div>  
    
      );
  }
  else 
  return (<></>);


}

