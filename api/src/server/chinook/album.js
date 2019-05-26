const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
    AlbumId: Number,
    Name: String,
    ArtistId: Number
},{ 
    collection: 'Album'
});

module.exports = mongoose.model('Album', AlbumSchema);