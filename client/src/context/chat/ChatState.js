import React, { useReducer } from "react";
import ChatContext from "./chatContext";
import chatReducer from "./chatReducer";

const ChatState = (props) => {
  const initialState = {
    messageState: "" 
  };
  const [state, dispatch] = useReducer(chatReducer, initialState);


  const receivedNewMsg=(msg)=>{
    if(msg){
      // console.log(`Sending ${msg}`);
      dispatch({type:"USER_MESSAGE", payload:msg})
    }
  }
  const login=(user)=>{
    if(user){
      // console.log(`Sending ${user}`);
      dispatch({type:"LOGIN_MESSAGE", payload:user})
    }
  }

  return (
    <ChatContext.Provider
      value={{
        messageState: state.messageState,
        receivedNewMsg,
        login,
      }}
    >
      {props.children}
    </ChatContext.Provider>
  );
};

export default ChatState;
