import React, { useState, useEffect, useContext } from "react";
import "./style.css";
import Level1 from "./Level1";
import Level2 from "./Level2";
import Options from "../Options";
import AuthContext from "../../context/auth/authContext";
import LevelChar from "./LevelChar";
import CharacterContext from "../../context/character/CharacterContext";
const style={
  white: {
    color: "white"
  }
}


// Takes information from employee list and renders it nicely, including a picture (only 2 pictures to choose from, one male one female) give the full name (first middle initial last), email, location and time at company.
function Level() {
  const authContext = useContext(AuthContext);
  const characterContext = useContext(CharacterContext);
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  const [displayedModal, setDisplayedModal]=useState({
    display: "None"
  });

  const [avatarState, setAvatarState] = useState({
    position: "fixed",
    top: "20%",
    left: "40%",
    transition: "all 1s",
    width: "40px",
    height: "20px",
  });

  let getLocation = (e) => {
    let top = e.pageY - 10 + "px";
    let left = e.pageX - 20 + "px";
    setAvatarState({ ...avatarState, top, left });
  };

  let handleKey = (e) => {
    switch (e.key) {
      case "o":
        if (displayedModal.display === "Options") {
          setDisplayedModal({ ...displayedModal, display: "none" });
        } else {
          setDisplayedModal({ ...displayedModal, display: "Options" });
        }
        break;
      case "c":
        if (displayedModal.display === "Character") {
          setDisplayedModal({ ...displayedModal, display: "none" });
        } else {
          setDisplayedModal({ ...displayedModal, display: "Character" });
        }
        break;
      case "l":
        if (displayedModal.display === "Location") {
          setDisplayedModal({ ...displayedModal, display: "none" });
        } else {
          setDisplayedModal({ ...displayedModal, display: "Location" });
        }
        break;
        case "q":
          if (displayedModal.display === "Quiz") {
            setDisplayedModal({ ...displayedModal, display: "none" });
          } else {
            setDisplayedModal({ ...displayedModal, display: "Quiz" });
          }
          break;
      default:
        break;
    }
  }

  const [levelNumber, setLevelNumber] = useState({
    number: 1
  });

  let levelChange= direction => {
    let level=Number(levelNumber.number);
    if(direction==="add"){
      if(level < characterContext.data.maxLevel){
      level=(level+1);
      }
    }else{
      if(level > 1){
      level=(level-1);
      }
    }
    setLevelNumber({...levelNumber, "number": level, name: `Level${level}`});
  }



        return (
            <div onClick={(e) => (getLocation(e))} onKeyPress={handleKey} tabIndex="0">
                          <div className="row">
                    <button className="col-4" onClick={(e)=>{ e.stopPropagation(); levelChange("subtract");}}>Previous Level</button> 
                    <button className="col-4" onClick={(e)=>{ e.stopPropagation();}}><a href="/earn" style={style.white}>Earn Money</a></button> 
                    <button className="col-4" onClick={(e)=>{ e.stopPropagation(); levelChange("add");}}>Next Level</button>
                    </div>

                <Options displayed={displayedModal}/>
                <LevelChar displayed={displayedModal}/>
                  {levelNumber.number===1 && <Level1 displayed={displayedModal} /> }
                  {levelNumber.number===2 && <Level2 displayed={displayedModal} /> }
                <img style={avatarState} src="./img/avatar.png" alt="Character"/> 
            </div>);
  };



export default Level;
