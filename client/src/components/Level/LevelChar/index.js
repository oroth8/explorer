import React, { useEffect, useContext, useState } from "react";
import "./style.css";
import {loadCharacter} from "../../utils/API";
import AuthContext from "../../../context/auth/authContext";
import {useCharacterContext} from "../../../context/character/CharacterContext";
import CharacterCreator from "../../Character/CharacterCreator";
export default function ViewCharacter(props) { 
  const [state, dispatch] = useCharacterContext();
  const authContext = useContext(AuthContext);
  
    
  //

  // let userId=authContext.user._id;
  // console.log(userId);
let userId;

  useEffect(()=>{
    authContext.loadUser();
    
    if(authContext.user){
      userId=authContext.user._id;      
      getCharacter(userId);
    }      
  },[authContext.loading]);

  const getCharacter=userId=>{
    dispatch({type:"LOADING"});
    loadCharacter(userId)
    .then(res=>{
      if(res.data)      
        dispatch({type:"UPDATE_CHARACTER", char:res.data})
      else dispatch({type:"ERROR_NO_CHARACTER"})
    })
  };

  const [displayOptions, setDisplayOptions]=useState({
    position: "fixed",
    top: "10%",
    left: "10%",
    width: "200px",
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



  if(state.missing) return (<CharacterCreator />)
  else if(!state.loaded) return (<>Loading</>);
  else return (
    <div style={displayOptions} className="container" id="license">
      <div className="smudge"></div>
        <div className="row">
          <div className="col-5" id="photo">
            <img src={state.data.characterImage} />
          </div>
          <div className="col-7">
          <ul className="stats">
          <li>Name: {state.data.name}</li>
            <li>Age: {state.data.age}</li>
            <li>Born:{state.data.birthYear}</li>
            <li>Ship Class: {state.data.shipIdArray[0]} </li>               
            </ul>
          </div>
        </div>

    </div>


  );
}








// Takes information from employee list and renders it nicely, including a picture (only 2 pictures to choose from, one male one female) give the full name (first middle initial last), email, location and time at company.
function Location(props){

  const [displayOptions, setDisplayOptions]=useState({
    position: "fixed",
    top: "10%",
    left: "10%",
    width: "80%",
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

      
       
         
          <div style={displayOptions} onClick={(e)=>{e.stopPropagation();}} >
          <ViewCharacter  />
          </div>


      
        );
  }

