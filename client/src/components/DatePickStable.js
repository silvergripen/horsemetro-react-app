import React, { useState } from 'react';
import axios from "axios";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import { DateTimePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

export const DatePickStable = () => {
    const [dateStart, setDateStart] = useState(null);
    const [dateEnd, setDateEnd] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSave = async () => {
        try {
            // Check if all required fields are filled
            if (!dateStart || !dateEnd || !title) {
                console.error('Please fill in all required fields.');
                return;
            }
            
            // Make the POST request with the required fields
            await axios.post('http://localhost:5000/writetocalendarscheduledate', {
                DateStart: dateStart,
                DateEnd: dateEnd,
                Title: title,
                Description: description,
                FK_UserId: "s"
            });
        
            console.log('Dates saved successfully.');
        } catch (error) {
            console.error('Error saving dates:', error.response.data);
        }
    };
    
    

    return (
        <div>
            <DateTimePicker
                type ={Date}
                value={dateStart}
                onChange={(newValue) => setDateStart(newValue)}
                renderInput={(params) => <TextField {...params} />}
                showTimeInput
            />
            <DateTimePicker
                type ={Date}
                value={dateEnd}
                onChange={(newValue) => setDateEnd(newValue)}
                renderInput={(params) => <TextField {...params} />}
                showTimeInput
            />
            <TextField
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                label="Title"
                variant="outlined"
            />
            <TextField
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                label="Description"
                variant="outlined"
            />
            <button onClick={handleSave}>Save</button>
        </div>
    );
};


// function Write() {
//     const [inputValue, setInputValue] = useState("");

//     const saveData = async () => {
//         try {
//             await axios.post("http://localhost:5000/writetodatabase", { content: inputValue });
//             console.log("Data", inputValue);
//             alert("Data saved", inputValue);
//         } catch (error) {
//             console.log("Error while saving:", error.message);
//         }
//     };

//     return (
//         <div>
//             <input
//                 type="string"
//                 placeholder="Enter something"
//                 value={inputValue}
//                 onChange={(e) => setInputValue(e.target.value)}
//             />
//             <button onClick={saveData}>Save data to MongoDB</button>
//         </div>
//     );
// }

// export default Write;
