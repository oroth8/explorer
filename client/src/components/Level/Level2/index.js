import React from "react";
import "./style.css";
import imageMap from "./map.json";

const style={
  backgroundImage: {
    position: "fixed",
    top: "0",
    width: "100%",
    height: "auto"
  },
  header: {
    backgroundColor: "white",
    color: "black",
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "1"
  }
};


// Takes information from employee list and renders it nicely, including a picture (only 2 pictures to choose from, one male one female) give the full name (first middle initial last), email, location and time at company.
function Level2()  {
  
const [location, setLocation]=React.useState({
  "name":"Earth",
  "id": 0
});

let getLandingSpot=(name, id) =>{
  setLocation({...location, name, id});
};




        return (
          <React.Fragment>
          <img src="./img/levelimgs/solarlvl.jpg" style={style.backgroundImage} alt="Level 2"/>
          <h2 style={style.header}>You are in {location.name}!</h2>
          {imageMap.map((item,index)=> (
            <div style={item.style} onClick={(e)=> {
              getLandingSpot(item.name, item.id);
            }}></div>
          ))}
          </React.Fragment>
        );
  }



export default Level2;
