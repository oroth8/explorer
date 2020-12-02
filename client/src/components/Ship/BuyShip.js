import React, { useEffect, useContext, useState } from "react";
import "./style.css";
import {loadShips} from "../utils/API"
import ShipItem from "./ShipItem";
import CharacterContext from "../../context/character/CharacterContext"
import AlertContext from "../../context/alert/alertContext"
export default function BuyShip() { 
  const characterContext = useContext(CharacterContext);
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;
  const [shipArray, setShipArray] = useState([{loading:true}]);
  
  useEffect(()=>{
    loadShips()
    .then(data=>{
        setShipArray(data.data.data);
    })        
  },[]);

  function buyShip(ship){
    console.log(ship);
    let availableCreds=characterContext.data.credits;
    if(ship.cost<=availableCreds){  
      characterContext.buyShip(ship._id);
      characterContext.setCredits(availableCreds-ship.cost);
    }
    else{
       setAlert("Not enough credits!", "danger");
    }    
  }
  function sellShip(ship){        
      let availableCreds=characterContext.data.credits;
      characterContext.sellShip(ship.id);
      characterContext.setCredits(availableCreds+ship.cost);
  }
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
      <div className="col-1">
        Credits: {characterContext.data.credits}
      </div>
      <div className="col-5">
      Ships Owned:
    {
    bought.map(elem=>(
        <ShipItem key={elem.id} data={elem} buyFunction={sellShip}/>
    ))}
    </div>
    <div className="col-6">
    Ships for Sale:
    {
    others.map(elem=>(
        <ShipItem key={elem.id} data={elem}  buyFunction={buyShip}/>
    ))}
    </div>
    </div>
    </div>  
    
      );
  }
  else 
  return (<></>);


}

