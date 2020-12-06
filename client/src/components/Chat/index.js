import React, { useEffect, useContext, useState } from "react";
import "./style.css";
import AuthContext from "../../context/auth/authContext";
import Axios from "axios";

const style={
  back: {
    background: "rgba(0,0,0,0)"
  },
  ul: {
    listStyle: "none",
    marginBottom: "25px"
  }
}


export default function Chat(){
  const authContext = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  //https://stackoverflow.com/questions/63623632/sockets-io-issue-websocket-is-closed-before-the-connection-is-established

  let userId;
  if (authContext.user) {
    userId = authContext.user._id;
  }
 

  function submitMessage(e) {
    e.preventDefault();
    if (e.target.message.value) {
      Axios.post("/api/message/add", { "sender": authContext.user.name, "message": e.target.message.value} )
      .then(getMessages)
      .catch(function (error) {
        console.log(error);
      });
    }
  }
 

function getMessages(){
  Axios.get("/api/message/get").then(function(response){
    let bottom=0;
    if(response.data.length >25){
      bottom=response.data.length-25;
    }
    let top=0;
    if(response.data.length > 0){
      top=response.data.length;
    }
    let newArray=response.data.slice(bottom, top);
    setMessages(newArray);
  })
  .catch(function(error){
    console.log(error);
  })
}

setInterval(getMessages(), 5000);



    return (
      <div className="container" id="menucard" style={style.back}>
        <div className="row mt-4 mb-4 message-screen">
          <ul style={style.ul} className="col-12">
          {messages.map((info, i)=>(
            <li key={i}>{info.sender}: {info.message}</li>
          ))}
          </ul>
        </div>
        <div className="row mt-4 message-input">
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
// return <></>
};
