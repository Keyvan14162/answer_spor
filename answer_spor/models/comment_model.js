const mongoose = require("mongoose");
const Schema = mongoose.Schema

const CommentSchema = new mongoose.Schema({
    username: {
        type: String,
        required: false
    },
    comment: {
        type: String,
        required: true

    }
}, {timestamps: true});


module.exports = mongoose.model("comments", CommentSchema)

