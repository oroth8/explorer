import React, { useState, useEffect, useContext } from "react";
import "./style.css";
import Level1 from "./Level1";
import Level2 from "./Level2";
import Options from "../Options";
import AuthContext from "../../context/auth/authContext";
// import Character from "../charactCharacter";

// Takes information from employee list and renders it nicely, including a picture (only 2 pictures to choose from, one male one female) give the full name (first middle initial last), email, location and time at company.
function Level() {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  const [displayedModal, setDisplayedModal] = useState({
    display: "Options",
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
      default:
        break;
    }
  };

  return (
    <div onClick={(e) => getLocation(e)} onKeyPress={handleKey} tabIndex="0">
      <Options displayed={displayedModal} />
      {/* <Character displayed={displayedModal}/> */}
      <Level2 displayed={displayedModal} />
      <img style={avatarState} src="./img/avatar.png" alt="Character" />
    </div>
  );
}

export default Level;
