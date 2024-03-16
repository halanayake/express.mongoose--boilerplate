const User = require("../models/user");
const getAllUsers = async (req, res) => {
    let users = await User.find({});
    res.send(users);
}

const saveUser = (req, res) => {
    res.send("Hello, This was a post Request");
}

module.exports = {
    getAllUsers, saveUser
}
