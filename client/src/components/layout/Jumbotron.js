import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import styled from "styled-components";
import img from "../img/space.jpg";
import Wave from "./Wave";

const Jumbotron = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  return (
    <Fragment>
      <JumboStyle className="jumbotron jumbotron-fluid">
        <TS className="container">
          <span className="display-4">
            {!user ? "EXPLORER" : `Hello ${user.name},`}
          </span>
          <p className="lead">
            Get ready to explore the world by navigating through NASA related
            questions and fun.
          </p>
          {/* <hr className="my-4"></hr> */}
          <p id="text">Begin your educational journey today...</p>
          {!user ? (
            <Link to="register">
              <button>Register</button>
            </Link>
          ) : (
            <Link to="/play">
              <button>Play Now!</button>
            </Link>
          )}
        </TS>
      </JumboStyle>
    </Fragment>
  );
};

const JumboStyle = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 60rem;
`;
const TS = styled.div`
  span {
    background-color: #212529;
  }
  p {
    color: white;
  }
  button {
    color: white;
  }
  @media only screen and (max-width: 900px) {
    #text,
    button {
      color: #212529;
      font-weight: bold;
    }
  }
`;

export default Jumbotron;
