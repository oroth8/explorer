import React, { createContext, useReducer, useContext } from "react";

const CharacterContext = createContext();
const { Provider } = CharacterContext;

const reducer = (state, action) => {
  switch (action.type) {
  case "update":
    console.log(action.char.data);
    return action.char.data;
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
