import React, { useEffect, useContext, useState } from "react";
import "./style.css";
import AuthContext from "../../context/auth/authContext";
import ChatContext from "../../context/chat/chatContext";
import socket from "./socketMaker"
const style={
  back: {
    background: "rgba(0,0,0,0)"
  }
}

export default function Chat(){
  const authContext = useContext(AuthContext);
  const chatContext = useContext(ChatContext);

  
//  const [messagesString, setMessages] = useState("");
  
 
  useEffect(() => {
    
    if (authContext.user) { 
      socket.once('connect', () => {
        socket.emit('USER_CONNECTED', authContext.user.name);
      });
    }
    else 
    authContext.loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authContext.loading]);

  function submitMessage(e) {
    e.preventDefault();
    if (e.target.message.value) {
      console.log("Trying to send "+e.target.message.value);      
      socket.emit('TELL_EVERYONE', authContext.user.name+": "+e.target.message.value);
      
      // let temp=messagesString;
      chatContext.receivedNewMsg("\n"+authContext.user.name+": "+e.target.message.value);
      e.target.message.value="";
    }
  }
 socket.on('USER_MESSAGE',(msg) => {
    if(socket.payload){
      // console.log(`Received: ${socket.payload}`);
      chatContext.receivedNewMsg(socket.payload);
      socket.payload="";
    }
}); 

  socket.on('LOGIN_MESSAGE',(msg) => { 
    if(socket.login){
      // console.log(`Login: ${socket.login}`);
      chatContext.login(socket.login);
      socket.payload="";
   }
  });

    return (
      <div className="container" id="menucard" style={style.back}>
        <div className="row mt-4 message-screen">
          <div className="col-12">
          {chatContext.messageState.split("\n").map((elem, i)=>(
            <li key={i}>{elem}</li>
          ))}
          </div>
        </div>
        <div className="row message-input">
          <form onSubmit={submitMessage}>
            <div className="col-9">
              <input type="text" name="message" id="message" />
            </div>
            <div className="col-3">
              <button type="submit" className="message-submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
};