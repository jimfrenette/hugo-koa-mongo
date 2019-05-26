const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TrackSchema = new Schema({
    TrackId: Number,
    Name: String,
    AlbumId: Number,
    MediaTypeId: Number,
    GenreId: Number,
    Composer: String,
    Milliseconds: Number,
    Bytes: Number,
    UnitPrice: String
},{ 
    collection: 'Track'
});

module.exports = mongoose.model('Track', TrackSchema);