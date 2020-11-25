import React, { useState, useEffect } from 'react';
import "./style.css";




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
    if(props.displayed.display==="Location"){
      setDisplayOptions({...displayOptions, display: "block"});
    }else{
      setDisplayOptions({...displayOptions, display: "none"});
    };


  },[props.displayed]);

      

        return (

      
          <div className="card"  style={displayOptions} onClick={(e)=>{e.stopPropagation();}}>
          {/* <img className="card-img-top" src="..." alt="Card image cap"/> */}
          <div className="card-body">
            <h5> Location</h5>
              <p> {props.location.name} </p>
          </div>
          </div>


      
        );
  }



export default Location;