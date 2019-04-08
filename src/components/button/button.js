import React, { Component } from 'react';
import './button.css';

class Button extends Component {
    render () {
        return (
            <button onClick={this.props.onClick}>
                >
            </button>
        )
    }
}

export default Button;