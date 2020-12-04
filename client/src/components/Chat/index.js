import React, { useEffect, useContext, useState } from "react";
import "./style.css";
import AuthContext from "../../context/auth/authContext";
import openSocket from 'socket.io-client';

export default function Chat(){
  const authContext = useContext(AuthContext);
  const [messagesString, setMessages] = useState("");
  //https://stackoverflow.com/questions/63623632/sockets-io-issue-websocket-is-closed-before-the-connection-is-established
  const PORT = process.env.PORT || 3001;
  // const socket = openSocket('http://localhost:'+PORT, {transports: ['websocket']});

const socket = openSocket(`http://${window.location.hostname}:${PORT}`, {transports: ['websocket']});

  let userId;
  useEffect(() => {
    if (authContext.user) {
      userId = authContext.user._id;
 socket.once('connect', () => {
    console.log("CONNECTED");
    socket.emit('USER_CONNECTED', authContext.user.name);
    
   });
    }
    else 
    authContext.loadUser();
  }, [authContext.loading]);


 

  function submitMessage(e) {
    e.preventDefault();
    if (e.target.message.value) {
      console.log("Trying to send "+e.target.message.value);
      
      socket.emit('TELL_EVERYONE', authContext.user.name+": "+e.target.message.value);
      e.target.message.value="";
    }
  }
 

  socket.once('USER_MESSAGE',(msg) => {
    if(msg){
      console.log("Received: "+msg);
      
      let temp=messagesString;
      setMessages(temp+"\n"+msg);
   }
  });   
  socket.on('LOGIN_MESSAGE',(msg) => { 
    if(msg){
      let temp=messagesString;
      setMessages(temp+"\n"+msg);
   }
  });

    return (
      <div className="container" id="menucard">
        <div className="row message-screen">
          <div className="col-12">
          {messagesString.split("\n").map((elem, i)=>(
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
