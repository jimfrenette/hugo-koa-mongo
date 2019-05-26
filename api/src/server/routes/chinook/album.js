const Router = require('koa-router');

const connect = require('../../chinook/connect');

connect();

const router = new Router();
const BASE_URL = `/api/chinook`;

const Album = require('../../chinook/album');

function getAlbums(artist) {
    return new Promise((resolve, reject) => {
        var query = Album.find({ 'ArtistId': artist });
        query.exec((err, results) => {
            if (err) return handleError(err);
            resolve(results);
        });
    });
}

router.get(BASE_URL + '/albums/:artist', async (ctx) => {
    try {
        ctx.body = await getAlbums(ctx.params.artist);
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;