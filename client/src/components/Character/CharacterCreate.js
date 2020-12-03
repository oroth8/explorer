import React, { useEffect, useContext } from "react";
import "./style.css";
import AuthContext from "../../context/auth/authContext";
import CharacterContext from "../../context/character/CharacterContext";
import GameNav from "../layout/GameNav";
const CharacterCreate = () => {
  const authContext = useContext(AuthContext);
  const characterContext = useContext(CharacterContext);
  let userId;
  useEffect(() => {
    if (authContext.user) {
      userId = authContext.user._id;
      if (characterContext.missing) {
        characterContext.updateUserId(userId);
        characterContext.getPortrait();
        characterContext.setCredits(100);
        characterContext.setCurrentYear(2021);
        characterContext.setMaxLevel(0);
      }
    } else authContext.loadUser();
  }, [authContext.loading]);

  function inputHandler(e) {
    const { name, value } = e.target;
    if (name === "age") {
      characterContext.updateAge(value);
    } else if (name === "name") {
      characterContext.updateName(value);
    }
  }
  // When the user clicked the button, give them a different picture via a simple API call
  function getNewPortrait() {
    characterContext.getPortrait();
  }
  function submitCharacter(e) {
    // e.preventDefault();
    if (e.target.name.value && e.target.age.value) {
      characterContext.saveChar();
    } else alert("Need a name!");
  }
  console.log(characterContext.missing);

  if (!characterContext.loaded && !characterContext.missing)
    return <>LOADING</>;
  else
    return (
      <div className="container mt-5">
        <div className="row creation-box">
          <div className="col col-lg-4">
            <form onSubmit={submitCharacter}>
              <p>
                <label htmlFor="name">Character Name:</label>
              </p>
              <input
                onChange={inputHandler}
                type="text"
                name="name"
                id="name"
                defaultValue={characterContext.data.name}
              />
              <p>
                <label htmlFor="age">Age:</label>
              </p>
              <input
                type="number"
                onChange={inputHandler}
                name="age"
                maxLength="3"
                size="3"
                id="age"
                defaultValue={characterContext.data.age}
              />
              <p>
                <button type="submit">Submit</button>
              </p>
            </form>
          </div>
          <div className="col col-lg-8">
            <div className="col">
              <img
                src={characterContext.data.characterImage}
                alt="Character Portrait"
              />
            </div>
            <button id="change-portrait" onClick={getNewPortrait}>
              Choose new Portrait
            </button>
          </div>
        </div>
        <GameNav />
      </div>
    );
};

export default CharacterCreate;
