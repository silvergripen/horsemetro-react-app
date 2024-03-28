import "../css/navstable.css";
import React, { useState } from "react";
import { CSSTransition } from 'react-transition-group';

//Mina css styler vill inte fungera vet inte varför lol

export function NavStable(props){
    return(
        <nav className="navbar">
            <ul className="navbar-nav">{props.children}</ul>
            
        </nav>
    );}
export function NavItem(props){
    const [open, setOpen] = useState(false);
return(
    <li className="nav-item">
        <a href="#" className="icon-button" onClick={()=> setOpen(!open)}>
            {props.icon}
        </a>
        {open && props.children}

    </li>
);}
export function DropdownMenu(){
    // nested component in dropdownmenu component
    const [activeMenu, setActiveMenu] = useState("main"); //setting, animals
    function DropdownItem(props){
        return(
            <a href="#" className="menu-item">
                {/* Incase you want to set an icon on the left side */}
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                {/* incase you want to set an icon on the right side */}
                <span className="icon-right">{props.rightIcon}</span>
            </a>
        )
    }
    return(
        <div className="dropdown">
            {/* used for transition and it is looking to see if the active menu is main */}
            {/* Can just copy paste css transition to make a secton side menu and instead of checking active menu for main we check for something else */}
            {/* and we can change the classes to change menu and we need to be abele to activate it check the video from fireship if needed.*/}
            <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={500} classNames="menu-primary">
                <div>
                    <DropdownItem>My profile</DropdownItem>
                    <DropdownItem
                        leftIcon={"left"}
                        rightIcon={"right"}>
                            Hello
                    </DropdownItem>
                </div>
            </CSSTransition>
        </div>
    );}
export function DropdownFriend(){
    // nested component in dropdownmenu component
    const [activeMenu, setActiveMenu] = useState("main"); //setting, animals
    function DropdownItem(props){
        return(
            <a href="#" className="menu-item">
                {/* Incase you want to set an icon on the left side */}
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                {/* incase you want to set an icon on the right side */}
                <span className="icon-right">{props.rightIcon}</span>
            </a>
        )
    }
    return(
        <div className="dropdown">
            <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={500} classNames="menu-primary">
                <div>
         
                    <DropdownItem
                        leftIcon={"left"}>
                            Hello
                    </DropdownItem>
                </div>
            </CSSTransition>
        </div>
    );}