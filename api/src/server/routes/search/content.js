const Router = require('koa-router');

const router = new Router();
const BASE_URL = `/api/search`;

const Content = require('../../search/content');

function getContent(phrase) {

    // put quotes around search phrase
    phrase = JSON.stringify(phrase);

    return new Promise((resolve, reject) => {
        var query = Content.find({ $text: { $search: phrase } });
        query.exec((err, results) => {
            if (err) return handleError(err);
            resolve(results);
        });
    });

}

router.get(BASE_URL + '/content/:phrase', async (ctx) => {
    try {
        ctx.body = await getContent(ctx.params.phrase);
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;  
