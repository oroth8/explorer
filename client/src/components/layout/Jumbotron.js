import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const Jumbotron = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">
          {!user ? "Explorer Game" : `Hello ${user.name},`}
        </h1>
        <p className="lead text-dark">This is text about the game</p>
        <hr className="my-4"></hr>
        <p className="text-dark">
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        {!user ? (
          <Link to="register">
            <button className="text-dark">Register</button>
          </Link>
        ) : (
          <Link to="/">
            <button className="text-dark">Play Now!</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Jumbotron;
