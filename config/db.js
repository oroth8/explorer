const mongoose = require("mongoose");
// const db = process.env.mongoURI;
let db;

if (process.env.NODE_ENV !== "production") {
  db = "mongodb+srv://Project3:nasaGame@cluster0.8myrz.mongodb.net/nasagame?retryWrites=true&w=majority";
} else {
  db = process.env.MONGO_URI;
}

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("MongoDB connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
