// Package
const bluebird = require('bluebird');
const mongoose = require('mongoose');

const connStr =  'mongodb://mongo:27017';

const options = {
    dbName: 'chinook',
    useNewUrlParser: true/*,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
    */
};

// Set mongoose Promise to Bluebird
mongoose.Promise = bluebird

// Retry connection
const connectWithRetry = () => {
  console.log('MongoDB connection with retry')
  return mongoose.connect(connStr, options)
}

// Exit application on error
mongoose.connection.on('error', err => {
  console.log(`MongoDB connection error: ${err}`)
  setTimeout(connectWithRetry, 5000)
  // process.exit(-1)
})

mongoose.connection.on('connected', () => {
  console.log('MongoDB is connected')
})

// if (config.env === 'development') {
//   mongoose.set('debug', true)
// }

const connect = () => {
  connectWithRetry()
}

module.exports = connect;