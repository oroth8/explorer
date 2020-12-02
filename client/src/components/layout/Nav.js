import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import logo from "./Logo.svg";

const Nav = () => {
  const authContext = useContext(AuthContext);
  const { logout, user, loadUser } = authContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  const onLogout = () => {
    logout();
  };

  return (
    <NavStyle>
      <Link to="/">
        <img id="logo" src={logo} alt="aircraft" />
      </Link>
      <ul>
        <li className="instructions">
          <Link to="instructions">Instructions</Link>
        </li>
        <li>
          {!user ? (
            <Link to="login">
              <button>Login</button>
            </Link>
          ) : (
            <button onClick={onLogout}>Logout</button>
          )}
        </li>
      </ul>
    </NavStyle>
  );
};
const NavStyle = styled.nav`
  max-height: 15vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 10;
  .instructions {
    &:hover {
      color: #23d997;
    }
  }
  a {
    color: white;
    text-decoration: none;
    font-size: 2rem;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  @media (max-width: 1300px) {
    flex-direction: row;
    padding: 2rem 1rem;
    #logo {
      display: inline-block;
      margin-top: 1rem;
    }
    ul {
      padding-right: 1rem;
      justify-content: space-around;
      width: 100%;
      margin-top: 1rem;
    }
    li {
      padding: 0;
      color: white;
      font-size: 1.5rem;
      margin-left: 1.5rem;
    }
  }
`;
export default Nav;
