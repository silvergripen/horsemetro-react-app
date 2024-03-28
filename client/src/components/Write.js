
import React, { useState } from "react";
import axios from "axios";

function Write() {
    const [inputValue, setInputValue] = useState("");

    const saveData = async () => {
        try {
            await axios.post("http://localhost:5000/writetodatabase", { content: inputValue });
            console.log("Data", inputValue);
            alert("Data saved", inputValue);
        } catch (error) {
            console.log("Error while saving:", error.message);
        }
    };

    return (
        <div>
            <input
                type="string"
                placeholder="Enter something"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={saveData}>Save data to MongoDB</button>
        </div>
    );
}

export default Write;
