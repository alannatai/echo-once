import React from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';

export default function NavBar(props) {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink exact to="/" className="link" activeStyle={{color: "pink", fontWeight: "bold"}}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className="link" activeStyle={{color: "pink", fontWeight: "bold"}}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/submit" className="link" activeStyle={{color: "pink", fontWeight: "bold"}}>Submit</NavLink>
                </li>
                <li>
                    <NavLink to="/login" className="link" activeStyle={{color: "pink", fontWeight: "bold"}}>Log In</NavLink>
                </li>
            </ul>
        </nav>
    )
}