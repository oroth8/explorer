import React, { useContext } from "react";

import CharacterContext from "../../context/character/CharacterContext";
import "./style.css";

const style={
    black: {
        color: "black"
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

export default function Level(props) { 

    const characterContext = useContext(CharacterContext);
    let img="../../../img/characterPlaceHolder.jpg";
    if(characterContext.data.characterImage) img=characterContext.data.characterImage;
    
return(
    <div className="container" id="menucard">
        <img style={style.backgroundimg} src="./img/space.jpg" alt="Space"/>
    <div className="row">
        <div className="col-12" id="photo">
        <img alt="Character Portrait" src="./img/levelimgs/lvl0.png" />
        </div>
        <div className="col-12 text-center align-middle">
         <h3 className="mt-4" style={style.black}>Explore and Learn </h3>
        </div>
    </div>
    </div>
    )
}