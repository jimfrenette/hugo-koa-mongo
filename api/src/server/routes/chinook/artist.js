const Router = require('koa-router');

const router = new Router();
const BASE_URL = `/api/chinook`;

const Artist = require('../../chinook/artist');

function getArtists() {
    return new Promise((resolve, reject) => {
        var query = Artist.find();
        query.exec((err, results) => {
            if (err) {
                resolve(err);
            } else {
                resolve(results);
            }
        });
    });
}

router.get(BASE_URL + '/artists', async (ctx) => {
    try {
        ctx.body = await getArtists();
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;
