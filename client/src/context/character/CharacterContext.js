import React, { createContext, useReducer, useContext } from "react";

const CharacterContext = createContext();
const { Provider } = CharacterContext;

const reducer = (state, action) => {
  console.log('action');
  console.log(action);
  
  switch (action.type) {
  case "UPDATE_CHARACTER":
    return{
      ...state,
      ...action.char,
      loaded:true
    }
  case "LOADING":
    return{
      ...state,
      loaded:false
    };
  case "UPDATE_PORTRAIT":
    return{
      ...state,
      characterImage:action.url,
      loaded:true
    };

  default:
    throw new Error(`Invalid action type: ${action.type}`);
  }
};

const CharProvider = ({ value = {}, ...props }) => {
  const [state, dispatch] = useReducer(reducer, value);

  return <Provider value={[state, dispatch]} {...props} />;
};

const useCharacterContext = () => {
  return useContext(CharacterContext);
};

export { CharProvider, useCharacterContext };
