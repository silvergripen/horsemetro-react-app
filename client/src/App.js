import React, { useState, useEffect} from "react";
import { Container, Nav } from "react-bootstrap";
import "./css/schedule.css";
import "./css/navstable.css";
import "./css/navbar.css";
import "./css/App.css"
import axios from "axios";
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import ReadComponent from "./components/Read"; 
import Write from "./components/Write";
import { Stable } from './components/Stable';
import { Navbar } from './components/Navbar';
import { Scheduler } from './components/Schedule';
import { NavStable, NavItem, DropdownMenu, DropdownFriend } from "./components/NavStable";

function App() {
  const {  renderSchedule } = Scheduler();
  return (
    <div className="App">
      
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
      <p className='second-left-window-text'>
      </p>
      </div>
    </div>

   
     <div className='vertical-divider'/>
     
    <dic className="right-window">
    <div className="scheduler">
    {renderSchedule}
    </div>
    <div className='horizontal-divider'></div>
    <div className='second-right-window'>
      <p className='second-window-text'>Add stuff here maybe link?</p>
    </div>

    </dic>
    </div>
  </div>
);
}

export default App;