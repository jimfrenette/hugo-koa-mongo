const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
 notice there is no ID. That's because Mongoose will assign
 an ID by default to all schemas

 by default, Mongoose produces a collection name by passing the model name to
 the utils.toCollectionName method.
 This method pluralizes the name Content to Contents.
 Set this option if you need a different name for your collection.
 e.g., `collection: 'Content'`
*/

const ContentSchema = new Schema({
    content: String,
    date: Date,
    section: String,
    summary: String,
    tags: Array
},{ 
    collection: 'Content'
});

const search = mongoose.connection.useDb('search');

module.exports = search.model('Content', ContentSchema);
