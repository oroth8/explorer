import React, { useState, useContext, useEffect, Fragment } from "react";
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alert/alertContext";
import styled from "styled-components";
import Nav from "../layout/Nav";

const Login = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { loginUser, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
    if (error === "Invalid Credentials") {
      setAlert(error, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert("Please fill in all fields", "danger");
    } else {
      loginUser({
        email,
        password,
      });
    }
  };

  return (
    <Fragment>
      <Nav />
      <LoginStyle className="container">
        <div className="form-container">
          <h1>
            Account <span>Login</span>
          </h1>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="email"></label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={onChange}
                required
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password"></label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={onChange}
                required
                placeholder="Password"
              />
            </div>
            <input type="submit" value="Login" className="btn" />
          </form>
        </div>
      </LoginStyle>
    </Fragment>
  );
};

const LoginStyle = styled.div`
  height: 100%;
  width: 100%;
  margin: auto;
  vertical-align: center;
  text-align: center;
  margin-top: 30rem;
  align-items: center;
  h1 {
    color: white;
  }
  label {
    color: #23d997;
    padding-right: 2rem;
    text-align: right;
  }
  input {
    display: block;
    width: 100%;
    padding: 0.4rem;
    font-size: 1.2rem;
    border: 1px solid #ccc;
  }
`;
export default Login;
