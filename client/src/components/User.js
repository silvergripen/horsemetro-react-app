const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:String,
    email: String,
    userName: String,
    password: String,
    FK_CalendarLinkId: Number
})
mongoose.model("User", userSchema)