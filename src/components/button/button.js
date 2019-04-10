import React from 'react';
import './button.css';

export default function Button(props) {
    return (
        <div className="button">
            <i class="far fa-arrow-alt-circle-right" id="arrow" onClick={props.onClick}></i>
        </div>
        
    )
}