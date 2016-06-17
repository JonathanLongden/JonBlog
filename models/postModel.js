var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogPostSchema = new Schema({

	comment: { 
        type: String     
    },
    date: { 
        type: String
    },
    time: { 
        type: String
    },
    user: [{ type: Schema.Types.ObjectId, ref: 'User' }]


});

module.exports = mongoose.model('blogPost', blogPostSchema );