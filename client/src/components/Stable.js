import React, { useState } from "react";
import axios from "axios";

export function Stable() {
    const [content, setContent] = useState(""); // State to hold the content for uploading

    const handleUpload = async () => {
        try {
            // Make a POST request to the endpoint for writing to database
            await axios.post("/writetodatabase", { content });
            console.log("Data uploaded to database successfully!");
    
            // Make a POST request to the endpoint for writing to calendar schedule dates
            await axios.post("/writetocalendarscheduledate", {
                DateStart: new Date(),
                DateEnd: new Date(),
                Title: "Example Title",
                Description: "Example Description"
            });
            console.log("Schedule date uploaded successfully!");
        } catch (error) {
            console.error("Error uploading data:", error);
        }
    };
    
    };

    return (
        <div>
            <h1>Stable</h1>
            <textarea value={content} onChange={e => setContent(e.target.value)}></textarea>
            <button className="crst" onClick={handleUpload}>Create stable</button>
        </div>
    );
