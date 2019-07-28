const Koa = require('koa');

const mongoose = require('mongoose');
const connStr =  'mongodb://mongo:27017/default';

const indexRoutes = require('./routes/index');
const artistRoutes = require('./routes/chinook/artist');
const albumRoutes = require('./routes/chinook/album');
const trackRoutes = require('./routes/chinook/track');

const app = new Koa();
const PORT = process.env.PORT || 1337;

/**
 * Koa app */
const server = app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});

/**
 * MongoDB connection */
mongoose.connect(connStr);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('connected');
});

app.use(indexRoutes.routes());
app.use(artistRoutes.routes());
app.use(albumRoutes.routes());
app.use(trackRoutes.routes());

module.exports = server;
