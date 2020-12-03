// A template for the backend portion was provided to the class by Paul Cwik in order to facilitate an easier deployment to heroku and github.

// Dependencies
const express = require("express");
const routes = require("./routes");
const path = require("path");
const connectDB = require("./config/db");
// const socketIo = require("socket.io")``
// const cors = require("cors");
// Express instance
const app = express();
// app.use(cors);
// connect to db
connectDB();

// Variable Port
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Socket.io



// If our node environment is production we will serve up our static assets from the build folder
if (process.env.NODE_ENV === "production") {
  // The react app is called 'client' and we are accessing the build folder that is initialized in the postbuild scripts.
  app.use(express.static("client/build"));
}

// API and View Routes
app.use(routes);
// Auth routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}
// const http = require('http').Server(app);
// const io = require('socket.io')(http);

// const server = require('http').createServer(app);
// const io = require('socket.io',server,  );


// Start the server
const expressServer=app.listen(PORT, () => {
  if (process.env.NODE_ENV !== "production") {
    console.log(`Server listening at http://localhost:${PORT}`);
  }
});
/// please add comments
const io=require("socket.io")(expressServer, 
  {  cors: {
    origin: "http://localhost:"+3000,
    methods: ["GET", "POST"]
  }}
);

io.on('connection', socket => {
  let counter = 0;
  // setInterval(() => {
  //   socket.emit('hello', ++counter);
  // }, 1000);

  socket.on("socketMsg", msg=>{
    console.log("Server received: "+msg);
    socket.broadcast.emit("serverMsg", "Just received "+msg);    
  })

  
  // socket.onAny((eventName, ...args) => {
  //   socket.emit(eventName, ...args);
    
  // });

    });

// io.on('connection', function(socket){
//   console.log('a user connected');
//   socket.on('disconnect', function(){
//     console.log('User Disconnected');
//   });
//   socket.on('example_message', function(msg){
//     console.log('message: ' + msg);
//   });
// });




// server.listen(3000);
//https://medium.com/@Keithweaver_/using-socket-io-with-a-mern-stack-2a7049f94b85