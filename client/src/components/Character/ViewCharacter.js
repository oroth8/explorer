import React, { useEffect, useContext } from "react";
import "./style.css";
import BuyShip from "../Ship/BuyShip";
import AuthContext from "../../context/auth/authContext";
import CharacterContext from "../../context/character/CharacterContext";
import CharacterCreate from "./CharacterCreate";
import License from "./components/License";
import GameNav from "../layout/GameNav";

export default function ViewCharacter(props) {
  const authContext = useContext(AuthContext);
  const characterContext = useContext(CharacterContext);

  // eslint-disable-next-line
  let userId;

  function submitCharacter(e) {
      e.preventDefault();
      characterContext.saveChar(); 
      document.location.href="/viewcharacter";
  }


  let turnStyle = { transform: "rotate(36deg)", pointerEvents: "none" };
  if (characterContext.missing) return <CharacterCreate subFunc={submitCharacter}/>;
  else if (!characterContext.loaded) return <>Loading</>;
  else
    return (
      <>
        <BuyShip />
        <div className="container desk-box">
          <div style={turnStyle}>
            <License />
          </div>
        </div>
        <GameNav />
      </>
    );
}
