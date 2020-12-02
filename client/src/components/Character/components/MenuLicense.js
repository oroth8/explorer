import React, { useContext } from "react";

import CharacterContext from "../../../context/character/CharacterContext";
import "../style.css";

const style={
    black: {
        color: "black"
    },
    white:{
        color: "white"
    },
    backgroundimg: {
        position: "absolute",
        left: "-10px",
        top: "-15px",
        width: "110%",
        height: "110%",
        zIndex: 0
    }
}

export default function License(props) { 

    const characterContext = useContext(CharacterContext);
    let img="../../../img/characterPlaceHolder.jpg";
    if(characterContext.data.characterImage) img=characterContext.data.characterImage;

    let charText="View Character";
    if(characterContext.missing) charText="Create Character";
    
return(
    <div className="container" id="license">
        <img style={style.backgroundimg} src="./img/space.jpg" alt="Space"/>
        
    <div className="row">
        <div className="col-5" id="photo">
        <img alt="Character Portrait" src={img} />
        </div>
        <div className="col-2">
            </div>
        <div style={style.white} className="col-5">
        <ul className="stats">
        <li>Name: {characterContext.data.name}</li>
        <li>Age: {characterContext.data.age}</li>
        <li>Born:{characterContext.data.birthYear}</li>
        <li>Ship Class: {characterContext.data.shipIdArray[0]} </li>               
        </ul>
        </div>
    </div>
    <div className="col-12 text-center align-middle">
    
         <h3 className="mt-4" style={style.black}>{charText}</h3>
    </div>
    </div>
    )
}