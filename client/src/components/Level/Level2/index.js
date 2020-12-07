import React from "react";
import "./style.css";
import imageMap from "./map.json";
import Location from "../Location"

const style={
  container: {
    position: "relative",
    height: "auto"
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

function Level2(props)  {
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
          <img src="./img/levelimgs/lvl1.jpg" style={style.backgroundImage} alt="Level 2"/>
          {imageMap.map((item)=> (
            <div style={item.style} onClick={()=> {
              getLandingSpot(item.name, item.id);
            }}></div>
          ))}
          </div>
          <GameNav />
          </React.Fragment>
        );
  }



export default Level2;
