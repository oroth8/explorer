import React, { useState, useEffect } from 'react';
import "./style.css";
import Axios from "axios";




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

  const [locationDetails, setLocationDetails]=useState({
    _id: "",
    name: "",
    description: "",
    imageUrl: ""
  });

  useEffect(()=>{
    Axios.get(`/api/location/${props.location.name}`)  .then(function (response) {
      setLocationDetails({...locationDetails, name: response.data[0].name, description: response.data[0].description, imageUrl: response.data[0].imageUrl});
      console.log(locationDetails);
    })
    .catch(function (error) {
      console.log(error);
    });


  },[props.location.name]);

        return (

      
          <div className="card"  style={displayOptions} onClick={(e)=>{e.stopPropagation();}}>
          {/* <img className="card-img-top" src="..." alt="Card image cap"/> */}
          <div className="card-body">
            <h5> Location</h5>
              <p> {props.location.name} </p>
              <p> {locationDetails.description} </p>
          </div>
          </div>


      
        );
  }



export default Location;