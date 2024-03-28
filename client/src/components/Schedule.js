import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import axios from "axios";
import "../css/schedule.css"

const localizer = momentLocalizer(moment);

export function Scheduler() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/readscheduledates");
        console.log("Fetched data:", response.data);
        const eventData = response.data.map(item => ({
    
          title: item.Title,
          start: new Date(item.DateStart),
          end: new Date(item.DateEnd),
          description: item.Description,
        }));
        setEvents(eventData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

 


  

  return {

    renderSchedule: (
      <div className='scheduler-container'>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          defaultView='week'
          views={["month", "week", "day"]}
        />
      </div>
    ),
  };
  
}
