const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://vikrant:vikrant@cluster0.khqot.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
};

module.exports = connect;