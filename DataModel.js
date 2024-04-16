// This is just a test.
// It can be ignored
const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
    content: {
        type: mongoose.Schema.Types.Mixed, // Allow storing different types (String, Date, etc.)
        required: true
    }
});

module.exports = mongoose.model("DataModel", DataSchema);