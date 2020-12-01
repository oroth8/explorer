// import React, { createContext, useReducer, useContext } from "react";

// const CharacterContext = createContext();
// const { Provider } = CharacterContext;

// const reducer = (state, action) => {
//   console.log('action');
//   console.log(action);
  
//   switch (action.type) {
//   case "UPDATE_CHARACTER":
//     return{
//       ...state,
//       ...action.char,
//       loaded:true
//     }
//   case "LOADING":
//     return{
//       ...state,
//       loaded:false
//     };
//     case "ERROR_NO_CHARACTER":
//       return{
//         ...state,
//         missing:true
//       }
//   case "UPDATE_PORTRAIT":
//     return{
//       ...state,
//       characterImage:action.url,
//       loaded:true
//     };

//   default:
//     throw new Error(`Invalid action type: ${action.type}`);
//   }
// };

// const CharProvider = ({ value = {}, ...props }) => {
//   const [state, dispatch] = useReducer(reducer, value);

//   return <Provider value={[state, dispatch]} {...props} />;
// };




// const useCharacterContext = () => {
//   return useContext(CharacterContext);
// };

// export { CharProvider, useCharacterContext };


import React, { useReducer } from "react";
import CharacterReducer from "./CharacterReducer";
import CharacterContext from "./CharacterContext";
import {loadCharacter} from "../../components/utils/API"

const CharacterState = (props) => {
  const initialState = {
    data:{
      name: "Default",
      age:20,
      currentYear:2021,
      credits:100,
      shipIdArray:[],
      birthYear:2001
    },
    loaded:false
  };
  const [state, dispatch] = useReducer(CharacterReducer, initialState);

  // load character
  const loadChar = (userId) => {  
    console.log("loading");
      
    dispatch({type:"LOADING"})
    loadCharacter(userId)
    .then(res=>{
      if(res.data)      
        dispatch({type:"UPDATE_CHARACTER", char:res.data})
      else dispatch({type:"ERROR_NO_CHARACTER"})
    });
  };

  return (
    <CharacterContext.Provider
      value={{
        data:{
          name: state.data.name,
          age:state.data.age,
          currentYear:state.data.currentYear,
          credits:state.data.credits,
          shipIdArray:state.data.shipIdArray,
          birthYear:state.data.birthYear,
          characterImage:state.data.characterImage
        },
        loadChar,
        loaded:state.loaded
      }}
    >
      {props.children}
    </CharacterContext.Provider>
  );
};

export default CharacterState;

