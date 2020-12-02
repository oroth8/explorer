import License from "../Character/components/License";
import CharacterContext from "../../context/character/CharacterContext";
import React, { useContext } from "react";
import "./style.css";

const style = {
  img: {
    width: "600px",
    maxWidth: "100%",
    height: "200px",
  },
};

function Play({ questions }) {
  const characterContext = useContext(CharacterContext);
  let charText = "View Character";
  if (characterContext.missing) charText = "Create Character";
  return (
    <div className="row">
      <div className="col-md-6 col-sm-12">
        <div className="row">
          <a href="/viewcharacter">
            <h4>{charText}</h4>
            <License />
          </a>
        </div>
        <div className="row">
          <a href="/earn">
            <h4>Test Your Knowledge and Earn Space Cash!</h4>
            <img
              style={style.img}
              src="../img/questions/denali.jpg"
              alt="test"
            />
          </a>
        </div>
      </div>
      <div className="col-md-6 col-sm-12">
        <div className="row">
          <a href="/level">
            <h4>Explore and Learn </h4>
            <img
              style={style.img}
              src="/img/levelimgs/lvl1.jpg"
              alt="Level Choice"
            />
          </a>
        </div>
        <div className="row">
          <a href="/ship">
            <h4>Manage Ship</h4>
            <img style={style.img} src="/img/avatar.png" alt="Ship" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Play;
