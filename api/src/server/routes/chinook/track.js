const Router = require('koa-router');

const router = new Router();
const BASE_URL = `/api/chinook`;

const Track = require('../../chinook/track');

function getTracks(album) {
    return new Promise((resolve, reject) => {
        var query = Track.find({ 'AlbumId': album });
        query.exec((err, results) => {
            if (err) {
                resolve(err);
            } else {
                resolve(results);
            }
        });
    });
}

router.get(BASE_URL + '/tracks/:album', async (ctx) => {
    try {
        ctx.body = await getTracks(ctx.params.album);
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;
