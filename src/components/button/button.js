import React from 'react';
import './button.css';

export default function Button(props) {
    return (
        <i class="far fa-arrow-alt-circle-right" id="arrow" onClick={props.onClick}></i>
    )
}