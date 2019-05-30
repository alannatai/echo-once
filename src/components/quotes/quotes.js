import React from 'react';
import './quotes.css';

export default function Quote(props) {
    return (
        <div className="quote">
            <h2 className="overlay">
                {
                    props.quote
                        .split('')
                        .map((char, i) =>
                            <span key={props.quote + i}>{char}</span>)
                }
            </h2>
            <h3 className="overlay2" key={props.author}>{props.author}</h3>
        </div>)
}
