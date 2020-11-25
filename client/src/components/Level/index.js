import React from "react";
import "./style.css";
import Level1 from "./Level1";

const style={
  backgroundImage: {
    position: "fixed",
    top: "0",
    height: "100vh",
    width: "100%"
  },
  avatar: {
    position: "fixed",
    top: "20%",
    left: "40%",
    width: "5%"
  }
};

// Takes information from employee list and renders it nicely, including a picture (only 2 pictures to choose from, one male one female) give the full name (first middle initial last), email, location and time at company.
function Level()  {


  const [avatarState, setAvatarState]=React.useState({
    position: "fixed",
    top: "20%",
    left: "40%",
    transition: "all 1s",
    width: "40px",
    height: "20px"
  });

  let getLocation= (e) =>{
    let top=e.pageY-10+"px";
    let left=e.pageX-20+"px";
    setAvatarState({...avatarState, top, left});


  }


      
  
        return (
          <div onClick={(e) => {getLocation(e)}}>
          <Level1  />

          <img style={avatarState} src="./img/avatar.png"/>
          </div>
        );
  }



export default Level;
