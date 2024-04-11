const mongoose = require("mongoose");
const { stringify } = require("uuid");

const UserLoginData = new mongoose.Schema({
    UserId: {
        type: String, 
        required: true
    },
    UserName: {
        type: String, 
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Email: {
        type: String
    }
});

module.exports = mongoose.model("UserLoginData", UserLoginData);
