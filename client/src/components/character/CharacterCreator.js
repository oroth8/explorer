import React, { useEffect, useState, useContext } from "react";
import "./style.css";
import { getNewCharacterPortrait } from "../utils/API";
import { saveCharacter } from "../utils/API";
import AuthContext from "../../context/auth/authContext";
import { useCharacterContext } from "../../context/character/CharacterContext";
const CharacterCreator = () => {
  const authContext = useContext(AuthContext);
  const [state, dispatch] = useCharacterContext();
  let currentYear = 2021;
  let userId;
  useEffect(() => {
    authContext.loadUser();

    if (authContext.user) {
      userId = authContext.user._id;
      getNewPortrait();
    }
  }, [authContext.loading]);

  function getNewPortrait() {
    state.characterImage = "";
    getNewCharacterPortrait().then((res) => {
      let charObj = { characterImage: res.data.results[0].picture.large };
      dispatch({ type: "UPDATE_CHARACTER", char: charObj });
    });
  }
  function inputHandler(e) {
    const { name, value } = e.target;
    if (name === "age") {
      let birth = currentYear - value;
      let charObj = {
        age: value,
        birthYear: birth,
        currentYear: currentYear,
        userId: authContext.user._id,
      };
      dispatch({ type: "UPDATE_CHARACTER", char: charObj });
    } else {
      let charObj = {
        name: value,
        currentYear: currentYear,
        userId: authContext.user._id,
      };
      dispatch({ type: "UPDATE_CHARACTER", char: charObj });
    }
  }
  function submitCharacter(e) {
    e.preventDefault();
    if (e.target.name.value && e.target.age.value) {
      let birth = currentYear - e.target.age.value;
      let charObj = {
        name: e.target.name.value,
        age: e.target.age.value,
        birthYear: birth,
        currentYear: currentYear,
        userId: authContext.user._id,
      };
      dispatch({ type: "UPDATE_CHARACTER", charObj });

      saveCharacter(state).then((data) => {
        console.log(data);
      });
    } else alert("Need a name!");
  }

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
              defaultValue={state.name}
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
              defaultValue={state.age}
            />
            <p>
              <button type="submit">Submit</button>
            </p>
          </form>
        </div>
        <div className="col col-lg-8">
          <div className="col">
            <img src={state.characterImage} alt="Character Portrait" />
          </div>
          <button id="change-portrait" onClick={getNewPortrait}>
            Choose new Portrait
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharacterCreator;
