import React from 'react';
import './header.css';

export default function Header(props) {
    return (
        <div>
            <h1 className="header">
                <span className="flip-vertical-right">echo</span>|<span className="slide-in-left">|once</span>
            </h1>
        </div>
    )
}