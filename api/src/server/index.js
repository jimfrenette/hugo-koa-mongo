const Koa = require('koa');
const indexRoutes = require('./routes/index');
const artistRoutes = require('./routes/chinook/artist');
const albumRoutes = require('./routes/chinook/album');
const trackRoutes = require('./routes/chinook/track');

const app = new Koa();
const PORT = process.env.PORT || 1337;

app.use(indexRoutes.routes());
app.use(artistRoutes.routes());
app.use(albumRoutes.routes());
app.use(trackRoutes.routes());

const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;