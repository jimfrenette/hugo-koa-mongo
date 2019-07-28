const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
    AlbumId: Number,
    Name: String,
    ArtistId: Number
},{ 
    collection: 'Album'
});

const chinook = mongoose.connection.useDb('chinook');

module.exports = chinook.model('Album', AlbumSchema);
