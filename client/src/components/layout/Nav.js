import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import aircraft from "./aircraft.svg";

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
        <img id="logo" src={aircraft} alt="aircraft" />
      </Link>
      <ul>
        <li>
          <Link to="instructions">Instructions</Link>
        </li>
        <li>
          <Link to="options">Options</Link>
        </li>
        <li>
          <Link to="account">My Account</Link>
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
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 10;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 1.5rem;
    color: white;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;
    #logo {
      display: inline-block;
      margin: 2rem;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
    }
    li {
      padding: 0;
      color: white;
      font-size: 1.5rem;
    }
  }
`;
export default Nav;
