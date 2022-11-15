const mongoose = require('mongoose');

connectDB().catch(err => console.log(err));

async function connectDB() {
  await mongoose.connect("mongodb+srv://AryanInterview:Interview@cluster0.7iypdly.mongodb.net/?retryWrites=true&w=majority");
  console.log("We are connected");
  
}

module.exports = connectDB;