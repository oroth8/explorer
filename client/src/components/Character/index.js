import React, { useState, useEffect } from 'react';
import "./style.css";

const style={
  options: [{ 
    "name": "Main Menu",
    "href": "/"},
    { 
      "name": "Logout",
      "href": "/"}],
      card: {
        zIndex: "2",
        display: "block"
      },
      a: {
        color: "black"
        
      },
      list: {
        listStyle: "none"
      }
}


// Takes information from employee list and renders it nicely, including a picture (only 2 pictures to choose from, one male one female) give the full name (first middle initial last), email, location and time at company.
function Character(props){

  const [displayOptions, setDisplayOptions]=useState({
    position: "fixed",
    top: "40%",
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

 
          <div className="card" style={displayOptions} onClick={(e)=>{e.stopPropagation();}}>
          {/* <img className="card-img-top" src="..." alt="Card image cap"/> */}
          <div className="card-body">
            <h5> Character Name</h5>
            <p> Stuff about the character </p>
              
          </div>
          </div>

      
        );
  }



export default Character;
