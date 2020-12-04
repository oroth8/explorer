import React, { useContext } from "react";
import "./style.css";
import BuyShip from "../Ship/BuyShip";
import CharacterContext from "../../context/character/CharacterContext";
import CharacterCreate from "./CharacterCreate";
import License from "./components/License";
import GameNav from "../layout/GameNav";

export default function ViewCharacter(props) {
  const characterContext = useContext(CharacterContext);

  // This function is called by CharacterCreate when the user clicks "submit"
  function submitCharacter(e) {
      e.preventDefault();
      characterContext.saveChar(); 
      document.location.href="/viewCharacter";
  }

  // This style is for the license, to give it a bit of flair. However, after we turn it 36degree, the div
  // obscures our ship buttons, so we have to disable pointer events here to allow the user to click on the
  // ships.
  let turnStyle = { transform: "rotate(36deg)", pointerEvents: "none" };
  // If there is no character in the database, the context will return "missing:true". In that case,
  // we should serve up the CharacterCreate component. Otherwise, display the character info page
  if (characterContext.missing) return <CharacterCreate subFunc={submitCharacter}/>;
  // If the character hadn't finished loading yet, just display a black loading screen for a few seconds.
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
