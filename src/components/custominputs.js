import React, { Component } from 'react';
import '../components/signup/signup.css';

export default class CustomInput extends Component {
    render() {
        const { input: { value, onChange } } = this.props;
        return (
            <div className="form-group">
                {this.props.meta.touched && this.props.meta.error && <p id="error-message">{this.props.meta.error}</p>}
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input
                    name={ this.props.name }
                    id={ this.props.id }
                    placeholder={ this.props.placeholder }
                    className="form-control"
                    type={ this.props.type }
                    value={ value }
                    onChange={ onChange }
                />
            </div>
        );
    };
};