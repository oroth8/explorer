import React, { useEffect, useContext } from "react";
import "./style.css";
import AuthContext from "../../context/auth/authContext";
import CharacterContext from "../../context/character/CharacterContext";
import GameNav from "../layout/GameNav";
const CharacterCreate = (props) => {
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


      return (
        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-2">
            </div>
            <div className="col-sm-10">
              <h2 className="text-center">Begin your adventure! </h2>
              
              <form className="row mt-4 text-center" onSubmit={props.subFunc}>
                <div className="col-md-6 col-sm-12 text-center">
   
                  <h3> What is your name? </h3>
                  <p>
                  <input
                  onChange={inputHandler}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                /></p>
                </div>
                <div className="col-md-6 col-sm-12 text-center">
                  <h3> How old are you? </h3>
                  <p>
                  <input
                  type="number"
                  onChange={inputHandler}
                  name="age"
                  maxLength="3"
                  size="3"
                  id="age"
                  placeholder="20"
                /></p>
                </div>
                <div className="col-md-6 col-sm-12 text-center">
                  <h3> Choose a picture. </h3>
                <p>
                <img
                  src={characterContext.data.characterImage}
                  alt="Character Portrait"
                /> <br/>
              <button type="button" id="change-portrait" onClick={getNewPortrait}>
                Next
              </button>
              </p>
                </div>
                <div className="col-md-6 col-sm-12 text-center">
                  <h3 className="mb-4"> Ready to start? </h3>
              <button className="mt-4" type="submit">Submit</button>
              </div>
              </form>
  
  
  
  
            </div>
  
  
          </div>
  
  
          <GameNav />
        </div>
      );

};

export default CharacterCreate;
