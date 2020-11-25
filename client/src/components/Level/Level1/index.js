import React from "react";
import "./style.css";
import imageMap from "./map.json";
import Location from "./Location"

const style={
  container: {
    position: "relative",
    height: "auto",
    border: "2px solid blue"
  },
  backgroundImage: {
    width: "100%"
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
function Level1(props)  {
  
const [location, setLocation]=React.useState({
  "name":"Earth",
  "id": 0
});

let getLandingSpot=(name, id) =>{
  setLocation({...location, name, id});
};




        return (
          <React.Fragment>
            <Location displayed={props.displayed} location={location}/>
            <div style={style.container}>
          <img src="./img/levelimgs/earthlvl.jpg" style={style.backgroundImage} alt="Level 1"/>
          {imageMap.map((item)=> (
            <div style={item.style} onClick={()=> {
              getLandingSpot(item.name, item.id);
            }}></div>
          ))}
          </div>
          </React.Fragment>
        );
  }



export default Level1;
