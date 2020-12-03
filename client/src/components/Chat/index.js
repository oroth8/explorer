import React, { useEffect, useContext, useState } from "react";
import "./style.css";
import AuthContext from "../../context/auth/authContext";
import openSocket from 'socket.io-client';

export default function Chat(){
  const authContext = useContext(AuthContext);
  const [messageArray, setMessages] = useState([]);
  
  const PORT = process.env.PORT || 3001;
  const socket = openSocket('http://localhost:'+PORT);

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
    // e.preventDefault();
    if (e.target.message.value) {
      socket.emit('USER_MESSAGE', authContext.user.name+": "+e.target.message.value);
    }
  }


  //  socket.on('hello', (counter) => {
  //    console.log("counter"+counter);
  //  });


  socket.once('USER_MESSAGE',(msg) => {
    if(msg){
      console.log(msg);
      let temp=messageArray
      temp.push(msg);
      setMessages(temp);
   }
  });   
  socket.once('user_MESSAGE',(msg) => {
    if(msg){
      console.log(msg);
      let temp=messageArray
      temp.push(msg);
      setMessages(temp);
   }
  });


  //  socket.on('serverMsg',(data) => {
  //    console.log("message received from server:"+data);
  //  });
   // socket.onAny((eventName, ...args) => {
   //   console.log(eventName);
     
   // });
   function sendSocketIO() {
     console.log("message sent");
     
     socket.emit('test', 'demo');
   }




    return (
      <div className="container mt-5">
        <div className="row message-screen">
          <div className="col-12">
          {messageArray.map(elem=>(
            <li>{elem}</li>
          ))}
          </div>
        </div>
        <div className="row message-input">
          <div className="col-12">
            <form onSubmit={submitMessage}>
              <input
                type="text"
                name="message"
                id="message"
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
};
