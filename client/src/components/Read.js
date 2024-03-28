// Read.js
import React, { useState, useEffect } from "react";
import axios from "axios";

function Read() {
    const [serverData, setServerData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/readfromserver");
                setServerData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            {serverData.map((data, index) => (
                <div key={index}>{data.content}</div>
            ))}
        </div>
    );
}

export default Read;
