import License from "./MenuLicense";
import Chat from "../Chat"
import Level from "./Level";
import Quiz from "./Quiz";
import CharacterContext from "../../context/character/CharacterContext";
import React, { useContext } from "react";
import "./style.css";
import Wave from "../layout/Wave";
import GameNav from "../layout/GameNav";
import { Link } from "react-router-dom";
import {useState} from "react";



function Play({ questions }) {
  const characterContext = useContext(CharacterContext);
  const [msg, setMsg] = useState("");
  let charText = "View Character";
  if (characterContext.missing) charText = "Create Character";

  return (
    <div>
      <Wave />
      <div className="row mb-4">
        <div className="col-md-6 col-sm-12">
        <Link to="/viewCharacter">
          <a>
            <License />
          </a>
        </Link>
        </div>

        <div className="col-md-6 col-sm-12">
          <Link to="/level">
            <a>
            <Level />
          </a>
          </Link>
        </div>
      </div>

      <div className="row mb-4">
      <div className="col-md-6 col-sm-12">
          <Link to="/earn">
            <a>
            <Quiz />
          </a>
          </Link>
        </div>

       <div className="col-md-6 col-sm-12">
            <a><Chat msg={msg}/></a>
        </div>
      </div>
      <GameNav />
    </div>
  );
}

export default Play;
