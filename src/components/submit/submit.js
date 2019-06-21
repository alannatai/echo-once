import React, { Component } from 'react';
import './submit.css';
import axios from 'axios';

export default class Submit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            quote: '',
            author: ''
        }
    };

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    };

    submitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:4000/quotes/submit', this.state)
            .then(res => {
                console.log(res.data);
            })
    };

    updateHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:4000/quotes/update', this.state)
            .then(res => {
                console.log(res.data);
            })
    };

    deleteHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:4000/quotes/delete', this.state)
            .then(res => {
                console.log(res.data);
            })
    };

    render() {
        const { id, quote, author } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="quote" value={quote} placeholder="Enter Quote" onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="author" value={author} placeholder="Enter Author" onChange={this.changeHandler} />
                    </div>
                    <button type="submit">Submit</button>
                </form>

                <form onSubmit={this.updateHandler}>
                    <div>
                        <input type="text" name="id" value={id} placeholder="Update Id" onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="quote" value={quote} placeholder="Update Quote" onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="author" value={author} placeholder="Update Author" onChange={this.changeHandler} />
                    </div>
                    <button type="submit">Update</button>
                </form>

                <form onSubmit={this.deleteHandler}>
                    <div>
                        <input type="text" name="id" value={id} placeholder="Delete Id" onChange={this.changeHandler} />
                    </div>
                    <button type="submit">Delete</button>
                </form>
            </div>
        );
    };
};