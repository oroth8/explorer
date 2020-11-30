import React, { Fragment, useContext, useEffect } from "react";
import Footer from "../components/layout/Footer";
import Jumbotron from "../components/layout/Jumbotron";
import Nav from "../components/layout/Nav";
import AuthContext from "../context/auth/authContext";

const Landing = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Nav />
      <Jumbotron />
      <Footer />
    </Fragment>
  );
};

export default Landing;
