import React, { useState, useEffect} from "react";
import { Container, Nav } from "react-bootstrap";
import axios from "axios";
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import dayjs from 'dayjs';
import { NavStable, NavItem, DropdownMenu, DropdownFriend } from "./components/NavStable";
import { DatePickStable } from "./components/DatePickStable";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import ReadComponent from "./components/Read"; 
import Write from "./components/Write";
import { Stable } from './components/Stable';
import { Navbar } from './components/Navbar';
import { Scheduler } from './components/Schedule';
import Login, { UserLogin } from './components/UserLogin';

import "./css/schedule.css";
import "./css/navstable.css";
import "./css/navbar.css";
import "./css/App.css"

function App() {
  const {  renderSchedule } = Scheduler();

  const saveDatesToServer = async (dates) => {
    try {
      // Format the dates in ISODate format
      const isoDateStart = dayjs(dates.dateStart).toISOString();
      const isoDateEnd = dayjs(dates.dateEnd).toISOString();

      // Perform any additional logic if needed
      console.log('Saving dates to server:', isoDateStart, isoDateEnd);
    } catch (error) {
      console.error('Error saving dates:', error);
    }
  };

  return (
    <div className="App">
      
      <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' exact/>
        <Route path='=/Stable' element={<Stable/>}/>
        </Routes>
    </Router>
    <div className='full-window'>
      <div className='background-container'/>
    <div className='left-window'>
     <NavStable>
      {/* You can pass trough an svg file instead of letters. example <NavItem icon={<PlusIcon/>}/>  */}
      <NavItem icon="IC">
        <DropdownMenu/>
      </NavItem>      
     
     </NavStable>
      <div className='second-left-window'>
        <DatePickStable onSave={saveDatesToServer} />

      <p className='second-left-window-text'>
      </p>
      </div>
    </div>

   
     <div className='vertical-divider'/>
     
    <div className="right-window">
    <div className="scheduler">
    {renderSchedule}
    </div>
    <div className='horizontal-divider'></div>
    <div className='second-right-window'>
      <p className='second-window-text'>Add stuff here maybe link?</p>
    </div>
    <div>
      {/* <UserLogin/> */}
    </div>
    </div>
    </div>
    </LocalizationProvider>  
  </div>
);
}

export default App;