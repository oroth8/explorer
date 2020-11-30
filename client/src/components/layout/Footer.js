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
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
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
          <div class="col-md-2 mx-auto">
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Map</h5>

            <ul class="list-unstyled">
              <li>
                <a href="#!">Account</a>
              </li>
              <li>
                <a href="#!">Register</a>
              </li>
              <li>
                <a href="#!">Play Now!</a>
              </li>
              <li>
                <a href="#!">Instructions</a>
              </li>
            </ul>
          </div>
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
          <a class="btn-floating btn-fb mx-1">
            <i class="fab fa-facebook-f"> </i>
          </a>
        </li>
        <li class="list-inline-item">
          <a class="btn-floating btn-tw mx-1">
            <i class="fab fa-twitter"> </i>
          </a>
        </li>
        <li class="list-inline-item">
          <a class="btn-floating btn-gplus mx-1">
            <i class="fab fa-google-plus-g"> </i>
          </a>
        </li>
        <li class="list-inline-item">
          <a class="btn-floating btn-li mx-1">
            <i class="fab fa-linkedin-in"> </i>
          </a>
        </li>
        <li class="list-inline-item">
          <a class="btn-floating btn-dribbble mx-1">
            <i class="fab fa-dribbble"> </i>
          </a>
        </li>
      </ul>

      <div class="footer-copyright text-center py-3">© 2020 Copyright:</div>
    </FooterStyle>
  );
};

const FooterStyle = styled.footer`
  h5 {
    color: white;
  }
  i {
    color: white;
  }
`;
export default Footer;
