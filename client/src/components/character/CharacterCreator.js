import React, { useEffect, useState, useContext } from "react";
import "./style.css";
import {getNewCharacterPortrait, loadCharacter} from "../utils/API"
import {saveCharacter} from "../utils/API"
import AuthContext from "../../context/auth/authContext";
import {useCharacterContext} from "../../context/character/CharacterContext"
import Login from "../auth/Login"
import Options from "../Options"

export default function CharacterCreator() {   
  const authContext = useContext(AuthContext);
  const [state, dispatch] = useCharacterContext();
  const [page, setPage] = useState("loading");

  let userId;
  let submitted=false;
   useEffect(()=>{
    authContext.loadUser()
    .then(()=>{
      if(authContext.isAuthenticated){
        console.log('Logged in');
        setPage("create")
        userId=authContext.user._id;    
        getCurrentCharacter(userId);
        dispatch({type:"LOADING"})
      }
    //  else setPage("login")
      });
    },[authContext.isAuthenticated]);


    function getCurrentCharacter(userId){
      loadCharacter(userId)   
      .then(res=>{
        console.log({res});
        
         if(res.data.data)
           setPage("view")
         else {
          let charObj={name:"Name", age:20}
          dispatch({type:"UPDATE_CHARACTER", char:charObj})
          getNewPortrait(); 
         }
      }); 
    }

  function getNewPortrait(){
    state.characterImage="";
    
    dispatch({type:"LOADING"})
    setPage("loading")
    getNewCharacterPortrait()
    .then(res=>{    
        setPage("create")   
        dispatch({type:"UPDATE_PORTRAIT", url:res.data.results[0].picture.large})
      }
    );
  }




  function inputHandler(e){
    const {name, value} = e.target;
    if(name==="age"){
      let birth=state.currentYear-value;
      let newAge=value;
      let charObj={age:newAge, birthYear:birth}
      console.log({charObj});
      
      dispatch({type:"UPDATE_CHARACTER", char:charObj})
    }
    else {      
      let charObj={name:value}
      dispatch({type:"UPDATE_CHARACTER",char:charObj});
    }
  }
  function submitCharacter(e){
    e.preventDefault();
    if(e.target.name.value && e.target.age.value){
      let birth=state.currentYear-e.target.age.value;
      let charObj={name:e.target.name.value, age:e.target.age.value, birthYear:birth}
           
      saveCharacter(state)
      .then(res=>{
        console.log(res);
        
      })
    }
    else alert("Need a name!");
  }

  let display={display:"TopRight"};


  if(page==="login") return(<Login />);
  else if(page==="loading") return(<>Loading</>);  
  else if(page==="view") return (<>< />);
  else return (
  <div className="container mt-2">
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
    
    <Options displayed={display}/>
  </div>
);
}
