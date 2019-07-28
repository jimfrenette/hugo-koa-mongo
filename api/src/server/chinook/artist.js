const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
 notice there is no ID. That's because Mongoose will assign
 an ID by default to all schemas

 by default, Mongoose produces a collection name by passing the model name to
 the utils.toCollectionName method.
 This method pluralizes the name Artist to Artists.
 Set this option if you need a different name for your collection.
*/

const ArtistSchema = new Schema({
    ArtistId: Number,
    Name: String
},{ 
    collection: 'Artist'
});

const chinook = mongoose.connection.useDb('chinook');

module.exports = chinook.model('Artist', ArtistSchema);
