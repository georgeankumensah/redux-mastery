const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String, // This will be a string that contains a base64 encoded version of the image
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },

});

const PostMessage = mongoose.model('PostMessage', postSchema);

module.exports = PostMessage;