import React, {useState} from "react";
import {Link} from "react-router-dom";
import "../css/navbar.css";

export function Navbar(){
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
return(
<nav className="nav">
    <a href="/" className="site-title">Site Name/Logo</a>
    <ul>
        <li className="active">
            <a href="/About">About</a>
        </li>
        <li>
            <a href="/Stable">Stable</a>
        </li>
    </ul>
 
</nav>
);}

