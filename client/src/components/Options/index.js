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
function Options(props){

  const [displayOptions, setDisplayOptions]=useState({
    zIndex: "2",
    display: "block"
  });

    useEffect(()=>{
    if(props.displayed.display==="Options"){
      setDisplayOptions({...displayOptions, display: "block"});
    }else{
      setDisplayOptions({...displayOptions, display: "none"});
    };


  },[props.displayed]);

      

        return (

          <div className="row" >
          <div className="card col-lg-4 col-xs-6 mr-auto ml-auto mt-4" style={displayOptions} >
          {/* <img className="card-img-top" src="..." alt="Card image cap"/> */}
          <div className="card-body">
            <h5> Options</h5>
              <ul style={style.list}> 
              {style.options.map((option)=>(
                <li ><a style={style.a} href={option.href}>
                {option.name}
                </a></li>
              ))}
              </ul>
          </div>
          </div>
          </div>

      
        );
  }



export default Options;
