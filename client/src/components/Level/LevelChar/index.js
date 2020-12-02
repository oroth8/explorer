import React, { useEffect, useContext, useState } from "react";
import "./style.css";
import AuthContext from "../../../context/auth/authContext";
import CharacterContext from "../../../context/character/CharacterContext";
import CharacterCreate from "../../Character/CharacterCreate";
import License from "../../Character/components/License";
export default function ViewCharacter(props) {
  const authContext = useContext(AuthContext);
  const characterContext = useContext(CharacterContext);

  let userId;

  useEffect(() => {
    authContext.loadUser();

    if (authContext.user) {
      userId = authContext.user._id;
      characterContext.loadChar(userId);
    } else authContext.loadUser();
  }, [authContext.loading]);

  const [displayOptions, setDisplayOptions] = useState({
    position: "fixed",
    top: "10%",
    left: "10%",
    width: "200px",
    maxWidth: "80%",
    zIndex: "2",
    display: "block",
  });

  useEffect(() => {
    if (props.displayed.display === "Character") {
      setDisplayOptions({ ...displayOptions, display: "block" });
    } else {
      setDisplayOptions({ ...displayOptions, display: "none" });
    }
  }, [props.displayed]);

  if(characterContext.missing) return (<div style={displayOptions} onClick={(e)=>{e.stopPropagation();}} ><CharacterCreate /></div>)
  else return (
    <div style={displayOptions} onClick={(e)=>{e.stopPropagation();}} ><License /></div>

  );
}

