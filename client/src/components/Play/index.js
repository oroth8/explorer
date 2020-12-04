import License from "./MenuLicense";
import Chat from "../Chat"
import Level from "./Level";
import Quiz from "./Quiz";
import CharacterContext from "../../context/character/CharacterContext";
import React, { useContext } from "react";
import "./style.css";
import Wave from "../layout/Wave";
import GameNav from "../layout/GameNav";

function Play({ questions }) {
  const characterContext = useContext(CharacterContext);
  let charText = "View Character";
  if (characterContext.missing) charText = "Create Character";

  return (
    <div>
      <Wave />
      <div className="row mb-4">
        <div className="col-md-6 col-sm-12">
          <a href="/viewCharacter">
            <License />
          </a>
        </div>

        <div className="col-md-6 col-sm-12">
          <a href="/level">
            <Level />
          </a>
        </div>
      </div>

      <div className="row mb-4">
      <div className="col-md-6 col-sm-12">
          <a href="/earn">
            <Quiz />
          </a>
        </div>

       <div className="col-md-6 col-sm-12">
          <a href="/chat">
            <Chat />
          </a>
        </div>
      </div>
      <GameNav />
    </div>
  );
}

export default Play;
