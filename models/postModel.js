var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogPostSchema = new Schema({

	comment: { 
        type: String, required: true   
    },
    date: { 
        type: String, required: true
    },
    time: { 
        type: String, required: true
    },
    user: [{ type: Schema.Types.ObjectId, ref: 'User' }]


});

module.exports = mongoose.model('blogPost', blogPostSchema );