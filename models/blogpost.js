const mongoose = require("mongoose");

const Schema = mongoose.Schema

const blogpostSchema = new Schema({
    image: {
        type: image,

    },
    title: {
        type: String,
        required: true
    }, 
    body: {
        type: String,
        trim: true,
        minLength: 2,
        maxLength: 120,
        required: true,

    },
    author: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum: ['Life', 'Programming', 'Gaming', 'Travel', 'Miscellanious']
    },
    likes: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Post", blogpostSchema)