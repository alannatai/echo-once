import React from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';

const links = [
    {
        path: '/',
        name: 'Home'
    },
    {
        path: '/about',
        name: 'About'
    },
    {
        path: '/submit',
        name: 'Submit'
    },
    {
        path: '/login',
        name: 'Log In'
    },
];

let navLinks = 
    links.map(link => {
        return (<li>
            <NavLink exact to={link.path} className="link" activeStyle={{color: "pink", fontWeight: "bold"}}>{link.name}</NavLink>
        </li>)
    });

export default function NavBar(props) {    
    return (
        <nav>
            <ul>
                {navLinks}
            </ul>
        </nav>
    )
}