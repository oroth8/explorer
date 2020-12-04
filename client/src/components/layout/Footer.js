import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const Footer = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  return (
    <FooterStyle class="page-footer font-small stylish-color-dark pt-4">
      <div class="container text-center text-md-left">
        <div class="row">
          <div class="col-md-4 mx-auto">
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">About</h5>
            <p>
              This is a MERN stack web game that is designed to take the user on
              an educational journey while interacting with the NASA API to gain
              explorative knowledge. Gain credits as rewards for answering
              correct quiz questions while transversing the universe. Purchase
              and upgrade ships throught your journey.
            </p>
          </div>

          <hr class="clearfix w-100 d-md-none" />
          <div class="col-md-2 mx-auto">
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">
              Developers
            </h5>
            <ul class="list-unstyled">
              <li>
                <a href="https://github.com/jalbert12485">Justin Albert</a>
              </li>
              <li>
                <a href="https://github.com/oroth8">Owen Roth</a>
              </li>
              <li>
                <a href="https://github.com/k1te-m">Kevin Miller</a>
              </li>
              <li>
                <a href="https://github.com/B-Dionysus">Benjamin Dionysus</a>
              </li>
            </ul>
          </div>

          <hr class="clearfix w-100 d-md-none" />

          <div class="col-md-2 mx-auto">
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">
              Project Resources
            </h5>

            <ul class="list-unstyled">
              <li>
                <a href="https://github.com/oroth8/project3">Project Repo</a>
              </li>
            </ul>
          </div>

          <hr class="clearfix w-100 d-md-none" />
        </div>
      </div>
      {!user && <hr />}
      {!user && (
        <ul class="list-unstyled list-inline text-center py-2">
          <li class="list-inline-item">
            <h5 class="mb-1">Create an account for free</h5>
          </li>
          <li class="list-inline-item">
            <Link to="/register">
              <button>Sign Up!</button>
            </Link>
          </li>
        </ul>
      )}

      <hr />

      <ul class="list-unstyled list-inline text-center">
        <li class="list-inline-item">
          <a
            href="https://github.com/oroth8/project3"
            class="btn-floating btn-github mx-1"
          >
            <i class="fab fa-github"> </i>
          </a>
        </li>
      </ul>

      <div class="footer-copyright text-center py-3">© 2020 Copyright</div>
    </FooterStyle>
  );
};

const FooterStyle = styled.footer`
  h5 {
    color: white;
  }
  i {
    color: white;
    &:hover {
      color: #23d997;
    }
  }
  .footer-copyright {
    color: white;
  }
`;
export default Footer;
