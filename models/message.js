const mongoose = require('mongoose');
const schema = mongoose.Schema({
    chat: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    forum_id: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('message', schema);