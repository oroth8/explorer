import React, { useState, useEffect } from 'react';
import "./style.css";
import Axios from "axios";

const style={
  locationimg:{
    width: "100%",
    height: "auto"
  },
  paragraph: {
    color: "black"
  },
  list: {
    listStyle: "none"
  }
}


// Takes information from employee list and renders it nicely, including a picture (only 2 pictures to choose from, one male one female) give the full name (first middle initial last), email, location and time at company.
function Location(props){

  const [displayOptions, setDisplayOptions]=useState({
    position: "fixed",
    top: "10%",
    left: "10%",
    maxWidth: "80%",
    zIndex: "2",
    display: "block"
  });

    useEffect(()=>{
    if(props.displayed.display==="Character"){
      setDisplayOptions({...displayOptions, display: "block"});
    }else{
      setDisplayOptions({...displayOptions, display: "none"});
    };


  },[props.displayed]);


        return (

      
          <div className="card"  style={displayOptions} onClick={(e)=>{e.stopPropagation();}}>
          {/* <img className="card-img-top" src="..." alt="Card image cap"/> */}
          <div className="card-body">

              <h4> <strong>Character Name</strong> </h4>
            <div className="row">
              <div className="col-md-6 col-sm-12">
              <img  style={style.locationimg} src="/img/charimg.jpg" />
              </div>
              <div className="col-md-6 col-sm-12"><ul> <li> <strong>Stat 1:</strong> Stat Value</li> <li> <strong>Stat 2:</strong> Stat Value</li><li> <strong>Stat 3:</strong> Stat Value</li></ul>
              </div>
            </div>  

          </div>
          </div>


      
        );
  }



export default Location;