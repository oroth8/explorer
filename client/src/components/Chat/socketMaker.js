const io = require("socket.io-client");
let socket;
let heroku=true;
if(heroku) socket=io();   // Heroku version
else socket=io(`http://${window.location.hostname}:3001`, {transports: ['websocket']}); // desktop version
console.log(process.env.PORT);


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