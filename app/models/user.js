const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
});

const User = mongoose.model('User', userSchema);

module.exports = { User };
