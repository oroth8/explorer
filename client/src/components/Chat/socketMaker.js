const io = require("socket.io-client");
const socket=io(`https://${window.location.hostname}:3001`, {transports: ['websocket'], secure:true});

socket.on('USER_MESSAGE',(msg) => {
    if(msg){
      console.log("Received: "+msg);      
      socket.payload=msg;
    //   let temp=messagesString;
    //   setMessages(temp+"\n"+msg);
   }
  });   
  socket.on('LOGIN_MESSAGE',(msg) => {
    if(msg){
      console.log("Received: "+msg);      
      socket.login=msg;
   }
  });   
export default socket;