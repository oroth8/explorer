import React, { useContext } from "react";
import CharacterContext from "../../../context/character/CharacterContext";
import "../style.css";

export default function License(props) { 

    const characterContext = useContext(CharacterContext);
    // Placeholder image in case the character doesn't exist yet
    let img="../../../img/characterPlaceHolder.jpg";
    // If the character does exist, then we should use the real image:
    if(characterContext.data.characterImage) img=characterContext.data.characterImage;
    
return(
    <div className="" id="license">
    <div className="smudge"></div>
    <div className="row">
        <div className="col-5" id="photo">
        <img alt="Character Portrait" src={img} />
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
        UPDATED {characterContext.data.currentYear}
    </div>
    </div>
    )
}