import React from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';

const links = [
    {
        path: '/',
        name: 'Home',
        key: 'home'
    },
    {
        path: '/about',
        name: 'About',
        key: 'about'
    },
    {
        path: '/submit',
        name: 'Submit',
        key: 'submit'
    },
    {
        path: '/login',
        name: 'Log In',
        key: 'login'
    },
    {
        path: '/signup',
        name: 'Sign Up',
        key: 'signup'
    }
];

let navLinks = 
    links.map(link => {
        return (<li key={link.key}>
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