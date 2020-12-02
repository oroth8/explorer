import React, { useEffect, useContext } from "react";
import "./style.css";
import BuyShip from "../Ship/BuyShip";
import AuthContext from "../../context/auth/authContext";
import CharacterContext from "../../context/character/CharacterContext";
import CharacterCreate from "./CharacterCreate";
import License from "./components/License";

export default function ViewCharacter(props) {
  const authContext = useContext(AuthContext);
  const characterContext = useContext(CharacterContext);

  // eslint-disable-next-line
  let userId;

  useEffect(() => {
    if (authContext.user) {
      userId = authContext.user._id;
      characterContext.loadChar(userId);
    } else authContext.loadUser();
  }, [authContext.loading]);

  if (characterContext.missing) return <CharacterCreate />;
  else if (!characterContext.loaded) return <>Loading</>;
  else
    return (
      <>
        <BuyShip />
        <div className="container desk-box">
          <License />
        </div>
      </>
    );
}
