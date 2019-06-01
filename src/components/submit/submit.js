import React, { Component } from 'react';
import './submit.css';

export default class Submit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: '',
            author: ''
        }
    };

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    };

    submitHandler = e => {
        e.preventDefault();
        console.log(this.state)
    };

    render () {
        const { quote, author } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="quote" value={quote} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="text" name="author" value={author} onChange={this.changeHandler}/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    };
};