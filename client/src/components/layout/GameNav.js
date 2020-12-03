import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

export const GameNav = () => {
  const { pathname } = useLocation();
  return (
    <GameNavStyle>
      <ul className="list-group">
        <li className={pathname === "/" && "active"}>
          <Link to="/">
            <i className="fas fa-home" />
          </Link>
        </li>
        <li className={pathname === "/play" && "active"}>
          <Link to="/play">
            <i className="fas fa-bars" />
          </Link>
        </li>
        <li className={pathname === "/viewCharacter" && "active"}>
          <Link to="/viewCharacter">
            <i className="fas fa-user-plus" />
          </Link>
        </li>
        <li className={pathname === "/level" && "active"}>
          <Link to="/level">
            <i className="fas fa-globe-americas" />
          </Link>
        </li>
        <li className={pathname === "/earn" && "active"}>
          <Link to="/earn">
            <i className="fas fa-money-bill-wave" />
          </Link>
        </li>
      </ul>
    </GameNavStyle>
  );
};

const GameNavStyle = styled.div`
  margin-top: 5rem;
  margin-left: 1rem;
  position: fixed;
  top: 2rem;
  .list-group-item {
    background-color: transparent;
  }
  .active {
    border-color: #23d997;
  }
  .active a {
    color: #23d997;
  }
`;

export default GameNav;
