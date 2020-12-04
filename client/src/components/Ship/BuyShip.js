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
    // First, figure out how many credits the user has
    let availableCreds=characterContext.data.credits;
    // If the ship is cheap enough, let the user buy it
    if(ship.cost<=availableCreds){  
      // If the character's max level is lower than their new ship, then we can increase it!
      let currentMaxLevel=characterContext.data.maxLevel;
      if(ship.maxLevel>currentMaxLevel) currentMaxLevel=ship.maxLevel;    
      // Update the character context, adding the ship to the shipArray, reducing the number of credits,
      // and updating their max level. This will also save the updated info the database
      characterContext.buyShip(ship._id, (availableCreds-ship.cost),currentMaxLevel);
    }
    else{
       setAlert("Not enough credits!", "danger");
    }    
  }
  function sellShip(ship){        
      // First, get the user's maximum level and number of credits.
      let availableCreds=characterContext.data.credits;
      let currentMaxLevel=characterContext.data.maxLevel;
      // Each ship increases the user's level by one. So if we're selling our best ship,
      // our max level should be set to the level beneath it.
      if(ship.maxLevel===currentMaxLevel) currentMaxLevel=(ship.maxLevel-1);
      // Update the character context, adding the ship to the shipArray, reducing the number of credits,
      // and updating their max level. This will also save the updated info the database
      characterContext.sellShip(ship._id, (availableCreds+ship.cost),currentMaxLevel);
  }
  
  // Divide the array into arrays of ships that the character already owns, and ships that are available for purchase.
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
      
      <div className="row row-cols-2">
      {bought.map(elem=>(
          <ShipItem key={elem.id} data={elem} buyFunction={sellShip}/>
      ))}
      </div>
    </div>
    <div className="col-6">
      
    Ships for Sale:
      <div className="row row-cols-2">
        {others.map(elem=>(
            <ShipItem key={elem.id} data={elem}  buyFunction={buyShip}/>
        ))}
      </div>
    </div>
    </div>
    </div>  
      );
  }
  else 
  return (<></>);


}

