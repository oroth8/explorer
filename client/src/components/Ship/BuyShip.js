import React, { useEffect, useContext, useState } from "react";
import "./style.css";
import {loadShips} from "../utils/API"
import ShipItem from "./ShipItem";
import {loadCharacter} from "../utils/API"
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
    
    getCharacter();
    
  },[]);
  
  const getCharacter=userId=>{
    dispatch({type:"LOADING"});
    loadCharacter(0)
    .then(res=>{
      dispatch({type:"UPDATE_CHARACTER", char:res.data})
    })
  };
  if(charState.loaded){
    console.log(charState.data.shipIdArray);
    // let bought=shipArray.filter(ship=>ship._id==="5fc31206388dbcd5aa78646b");
    console.log( charState.data.shipIdArray.indexOf(shipArray[0]._id));
    let bought=shipArray.filter(ship=>{
      if(charState.data.shipIdArray.indexOf(ship._id)!==-1) return true;
      else return false;
    })
    let others=shipArray.filter(ship=>{
      if(charState.data.shipIdArray.indexOf(ship._id)===-1) return true;
      else return false;
    })

  return(
    <div className="container air-field">
      Ships Owned:
    {
    bought.map(elem=>(
        <ShipItem key={elem.id} data={elem} />
    ))}
    Ships for Sale:
    {
    others.map(elem=>(
        <ShipItem key={elem.id} data={elem} />
    ))}
    </div>  
      );
  }
  else return (<></>);


}

