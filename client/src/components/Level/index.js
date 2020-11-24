import React from "react";
import "./style.css";

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
}

// Takes information from employee list and renders it nicely, including a picture (only 2 pictures to choose from, one male one female) give the full name (first middle initial last), email, location and time at company.
function Level()  {


  const [avatarState, setAvatarState]=React.useState({
    position: "fixed",
    top: "20%",
    left: "40%",
    transition: "all .5s",
    width: "5%"
  })

  let getLocation= (e) =>{
    let top=e.pageY+"px";
    let left=e.pageX+"px";
    setAvatarState({...avatarState, top, left});
  }


      
  
        return (
          <React.Fragment>
          <img style={style.backgroundImage} src="./img/levelimgs/earthlvl.jpg" onClick={(e) => {getLocation(e)}}/>

          <img style={avatarState} src="./img/avatar.png"/>
          </React.Fragment>
        );
  }



export default Level;
