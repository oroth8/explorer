import React from "react";
import { Link } from "react-router-dom";
import GameNav from "../layout/GameNav";

function Earn(props) {
  console.log(props);
  return (
    <div>
      <p>Level 1</p>
      <div className="row">
        <div className="col-3">
          <Link to="/naquiz">
            <p>North America</p>
          </Link>
        </div>
        <div className="col-3">
          <Link to="/saquiz">
            <p>South America</p>
          </Link>
        </div>
        <div className="col-3">
          <Link to="/euquiz">
            <p>Europe</p>
          </Link>
        </div>
        <div className="col-3">
          <Link to="/asquiz">
            <p>Asia</p>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <Link to="/afquiz">
            <p>Africa</p>
          </Link>
        </div>
        <div className="col-3">
          <Link to="/auquiz">
            <p>Australia</p>
          </Link>
        </div>
        <div className="col-3">
          <Link to="/anquiz">
            <p>Antarctica</p>
          </Link>
        </div>
      </div>
      <p>Level 2</p>
      <div className="row">
        <div className="col-3">
          <Link to="/sunquiz">
            <p>Sun</p>
          </Link>
        </div>
        <div className="col-3">
          <Link to="/merquiz">
            <p>Mercury</p>
          </Link>
        </div>
        <div className="col-3">
          <Link to="/venquiz">
            <p>Venus</p>
          </Link>
        </div>
        <div className="col-3">
          <Link to="/earthquiz">
            <p>Earth</p>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <Link to="/marsquiz">
            <p>Mars</p>
          </Link>
        </div>
        <div className="col-3">
          <Link to="/jupquiz">
            <p>Jupiter</p>
          </Link>
        </div>
        <div className="col-3">
          <Link to="/satquiz">
            <p>Saturn</p>
          </Link>
        </div>
        <div className="col-3">
          <Link to="/urquiz">
            <p>Uranus</p>
          </Link>
        </div>
        <div className="col-3">
          <Link to="/nepquiz">
            <p>Neptune</p>
          </Link>
        </div>
      </div>
      <GameNav />
    </div>
  );
}

export default Earn;
