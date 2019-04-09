import React, { Component } from 'react';
import './quotes.css';

export default function Quote(props) {
    return (
        <div className="quote">
            <h1 className="overlay">
                {
                    props.quote
                        .split('')
                        .map((char, i) =>
                            <span key={props.quote + i}>{char}</span>)
                }
            </h1>
            <h2 className="overlay2">{props.name}</h2>
        </div>
    )
}
