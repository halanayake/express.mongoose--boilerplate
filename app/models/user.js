import mongoose from "mongoose";

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
export default User;
