const Koa = require('koa');
const mongoose = require('mongoose');
const indexRoutes = require('./routes/index');
const artistRoutes = require('./routes/chinook/artist');
const albumRoutes = require('./routes/chinook/album');
const contentRoutes = require('./routes/search/content');
const trackRoutes = require('./routes/chinook/track');

/**
 * Koa app */
const app = new Koa();
const PORT = process.env.PORT || 1337;
const server = app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});

/**
 * MongoDB connection */
const connStr =  'mongodb://mongo:27017/default';
mongoose.connect(connStr, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('connected');
});

app.use(indexRoutes.routes());
app.use(artistRoutes.routes());
app.use(albumRoutes.routes());
app.use(contentRoutes.routes());
app.use(trackRoutes.routes());

module.exports = server;
