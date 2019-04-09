import React from 'react';
import './navbar.css';

export default function NavBar(props) {
    return (
        <nav>
            <ul>
                <li>
                    <a>Home</a>
                </li>
                <li>
                    <a>About</a>
                </li>
                <li>
                    <a>Submit</a>
                </li>
                <li>
                    <a>Log In</a>
                </li>
            </ul>
        </nav>
    )
}