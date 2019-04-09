import React from 'react';
import './header.css';

export default function Header(props) {
    return (
        <div className="header">
            <h1 className="flip-vertical-right">echo</h1><h1>|</h1><h1 className="slide-in-left">|once</h1>
        </div>
    )
}