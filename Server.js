const express = require("express");
const connectDbSchedule = require("./DataSchedule");
const connectDB = require("./Database"); // Import connectDB function
const cors = require("cors");

connectDB(); // Call connectDB function to establish MongoDB connection

const app = express();
app.use(express.json());
app.use(cors());

const DataModel = require("./DataModel");
const CalendarScheduleDate = require("./DataSchedule");

app.get("/readfromserver", async (req, res) => {
    try {
        const data = await DataModel.find();
        res.json(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Server error while fetching data" });
    }
});

app.get("/readscheduledates", async (req, res) => {
    try {
        const scheduleDates = await CalendarScheduleDate.find();
        res.json(scheduleDates);
    } catch (error) {
        console.error("Error fetching schedule dates:", error);
        res.status(500).json({ error: "Server error while fetching schedule dates" });
    }
});
app.post("/writetocalendarscheduledate", async (req, res) => {
    try {
        const { DateStart, DateEnd, Title, Description, FK_UserId } = req.body;
        const newScheduleDate = new CalendarScheduleDate({ DateStart, DateEnd, Title, Description, FK_UserId });
        await newScheduleDate.save();
        res.status(201).json(newScheduleDate);
    } catch (error) {
        console.error("Error saving schedule date:", error);
        res.status(500).json({ error: "Server error while saving schedule date" });
    }
});



app.post("/writetodatabase", async (req, res) => {
    try {
        const { content } = req.body;
        const newData = new DataModel({ content });
        await newData.save();
        res.status(201).json(newData);
    } catch (error) {
        console.error("Error saving data:", error);
        res.status(500).json({ error: "Server error while saving data" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on Port:${PORT}`);
});