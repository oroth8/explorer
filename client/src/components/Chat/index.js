import React, { useEffect, useContext, useState } from "react";
import "./style.css";
import AuthContext from "../../context/auth/authContext";
import Axios from "axios";
const style={
  back: {
    background: "rgba(0,0,0,0)"
  },
  messScrn: {
    height: "75%"
  }
}
export default function Chat(){
  const authContext = useContext(AuthContext);
  const [messagesString, setMessages] = useState("");
  const [displayMessage, setDisplayMessages]=useState([{data: { 
    sender: "",
     message: "",
    date: ""}}]);
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
      newMessage(e.target.message.value);
    }
  }

  function newMessage(input){
    if (input) {
      Axios.post("/api/message/add", { "sender": authContext.user.name, "message": input} )
      .then(getMessages)
      .catch(function (error) {
        console.log(error);
      });
    }
  }

  function getMessages(){
    
    Axios.get("/api/message/get").then(function(response){
      console.log("ran");
      let newArray=[];
      for(let i=0; i< response.data.length; i++){
        newArray.push(response.data[response.data.length-i-1]);
      }
      setDisplayMessages(newArray);
      scrollDown();
    })
    .catch(function(error){
      console.log(error);
    })
  }

 
  function scrollDown(){
    console.log("scroll");
    let screen = document.getElementById("message-screen");
    screen.scrollTop = screen.scrollHeight;
  }
   
  useEffect(() => {
    getMessages();},[]
    )


  socket.once('USER_MESSAGE',(msg) => {
    if(msg){
      console.log("Received: "+msg);      
      let temp=messagesString;
      setMessages(temp+"\n"+msg);
      getMessages();
   }
  });   
  socket.on('LOGIN_MESSAGE',(msg) => { 
    if(msg){
      let temp=messagesString;
      setMessages(temp+"\n"+msg);
      getMessages();
   }
  });

    return (
      <div className="container" id="menucard" style={style.back}>
        <div className="row mt-4 message-screen" style={style.messScrn} id="message-screen">
          <div className="col-12">
          {displayMessage.map((elem, i)=>(
            <li key={i}>{elem.sender}: {elem.message}</li>
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
