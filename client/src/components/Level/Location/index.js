import React, { useState, useEffect } from 'react';
import "./style.css";
import Axios from "axios";

const style={
  locationimg:{
    float: "left",
    width: "150px",
    height: "auto",
    marginRight: "20px",
    marginBottom: "20px",
    marginTop: "40px"
  },
  paragraph: {
    color: "black"
  }, a: {
    color: "blue"
  }
}


// Takes information from employee list and renders it nicely, including a picture (only 2 pictures to choose from, one male one female) give the full name (first middle initial last), email, location and time at company.
function Location(props){

  const [displayOptions, setDisplayOptions]=useState({
    overflow: "scroll",
    position: "fixed",
    top: "10%",
    left: "10%",
    maxWidth: "80%",
    maxHeight: "80vh",
    zIndex: "2",
    display: "block"
  });

  const [locationDetails, setLocationDetails]=useState({
    _id: "",
    name: "",
    description: "",
    imageUrl: ""
  });

    useEffect(()=>{
    if(props.displayed.display==="Location"){
      setDisplayOptions({...displayOptions, display: "block"});
    }else{
      setDisplayOptions({...displayOptions, display: "none"});
    };


  },[props.displayed]);


  useEffect(()=>{
    Axios.get(`/api/location/${props.location.name}`)  .then(function (response) {
      setLocationDetails({...locationDetails, name: response.data[0].name, description: response.data[0].description, imageUrl: response.data[0].imageUrl});
    })
    .catch(function (error) {
      console.log(error);
    });


  },[props.location.name]);

        return (

      
          <div className="card"  style={displayOptions} onClick={(e)=>{e.stopPropagation();}}>
          {/* <img className="card-img-top" src="..." alt="Card image cap"/> */}
          <div className="card-body">

              <h4> <strong>{props.location.name}</strong> </h4>
            <div>
              <img style={style.locationimg} src={locationDetails.imageUrl} />

              <p style={style.paragraph}> {locationDetails.description} </p>

              <a style={style.a} href={`https://en.wikipedia.org/wiki/${props.location.name}`}>From Wikipedia</a>
            </div>  

          </div>
          </div>


      
        );
  }



export default Location;