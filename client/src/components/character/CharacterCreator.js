import React, { useEffect, useState, useContext } from "react";
import "./style.css";
import {getNewCharacterPortrait} from "../utils/API"
import {saveCharacter} from "../utils/API"
import AuthContext from "../../context/auth/authContext";
import {useCharacterContext} from "../../context/character/CharacterContext"
export default function CharacterCreator() {   
  const authContext = useContext(AuthContext);
  const [state, dispatch] = useCharacterContext();
  console.log(state);
   useEffect(()=>{
    if(!state.characterImage) getNewPortrait();
  },[])

  function getNewPortrait(){
    state.characterImage="";
    getNewCharacterPortrait()
    .then(res=>{       
        let charObj={characterImage:res.data.results[0].picture.large}
        dispatch({type:"update", char:charObj})
      }
    );
  }
  function inputHandler(e){
    const {name, value} = e.target;
    if(name==="age"){
      let birth=state.currentYear-value;
      let charObj={age:[name].value, birthYear:birth}
      dispatch({type:"update", char:charObj})
    }
    else {
      dispatch({[name]:value});
    }
  }
  function submitCharacter(e){
    e.preventDefault();
    if(e.target.name.value && e.target.age.value){
      let birth=state.currentYear-e.target.age.value;
      let charObj={name:e.target.name.value, age:e.target.age.value, birthYear:birth}
      dispatch(charObj);
     
      saveCharacter(state)
      .then({
        
      })
    }
    else alert("Need a name!");
  }


  return (
    <div className="row creation-box">
        <div className="col col-lg-4">
          <form onSubmit={submitCharacter}>
            <p><label htmlFor="name">Character Name:</label></p><p><input onChange={inputHandler} type="text" name="name" id="name" defaultValue={state.name}/></p>
            <p><label htmlFor="age">Age:</label></p><p><input type="number" onChange={inputHandler} name="age" maxLength="3" size="3" id="age" defaultValue={state.age}/></p>
            <p><button type="submit">Submit</button></p>
          </form>
        </div>
        <div className="col col-lg-8">
          <div className="col">
            <img src={state.characterImage} alt="Character Portrait"  />
          </div>
          <button id="change-portrait" onClick={getNewPortrait}>Choose new Portrait</button>
        </div>
    </div>
);
}

