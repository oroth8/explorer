const io = require("socket.io-client");
let socket;
let heroku=true;
// heroku=false;

if(window.location.hostname==="localhost") heroku=false;

if(heroku) socket=io();   // Heroku version
else socket=io(`http://${window.location.hostname}:3001`, {transports: ['websocket']}); // desktop version



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