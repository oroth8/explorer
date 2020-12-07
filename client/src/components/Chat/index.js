import React, { useEffect, useContext, useState } from "react";
import "./style.css";
import AuthContext from "../../context/auth/authContext";
const style={
  back: {
    background: "rgba(0,0,0,0)"
  }
}
export default function Chat(){
  const authContext = useContext(AuthContext);
  const [messagesString, setMessages] = useState("");
  const io = require("socket.io-client");
  const socket = io({transports: ['websocket']});
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
      <div className="container" id="menucard" style={style.back}>
        <div className="row mt-4 message-screen">
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
