// import React, { useState } from "react";
// import axios from "axios";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// export function Stable() {
//   const [startDate, setStartDate] = useState(new Date()); // State for start date
//   const [endDate, setEndDate] = useState(new Date()); // State for end date

//   const handleSave = async () => {
//     try {
//       // Make a POST request to save startDate and endDate
//       await axios.post("/saveDates", { startDate, endDate });
//       console.log("Dates saved successfully!");
//     } catch (error) {
//       console.error("Error saving dates:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Stable</h1>
//       <div>
//         <label>Start Date:</label>
//         {/* Use DatePicker for start date */}
//         <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
//       </div>
//       <div>
//         <label>End Date:</label>
//         {/* Use DatePicker for end date */}
//         <DatePicker selected={endDate} onChange={date => setEndDate(date)} />
//       </div>
//       <button onClick={handleSave}>Save Dates</button>
//     </div>
//   );
// }