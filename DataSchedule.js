const mongoose = require("mongoose");

const CalendarScheduleDateSchema = new mongoose.Schema({
    DateStart: {
        type: Date, 
        required: true
    },
    DateEnd: {
        type: Date, 
        required: true
    },
    Title: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Description: {
        type: String,
    }

});

module.exports = mongoose.model("CalendarScheduleDate", CalendarScheduleDateSchema);
