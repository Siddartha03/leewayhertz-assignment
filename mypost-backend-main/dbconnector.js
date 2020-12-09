const mongoose = require('mongoose');
require('dotenv').config();

// The mongodb atlas URI
const url = "mongodb+srv://dbfirst:P$siddu123@nodejs-tutorial.1q7og.mongodb.net/datagrokr?retryWrites=true&w=majority"

// Binding global Promise with mongoose Promise
mongoose.Promise = global.Promise;

// Establishing connection if error comes throw it.
const connectDB = () =>
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    })
    .then(() => {
      console.log('MongoDB connection established successfully...'.yellow.bold);
    })
    .catch((err) => {
      console.log(
        `Error in DB connection : ${JSON.stringify(err, undefined, 2)}`.red.bold
      );
      process.exit(1);
    });

// Export connected mongoose
module.exports = connectDB;
