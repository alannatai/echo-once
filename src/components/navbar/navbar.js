import React, { Component } from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../actions';

const left = [
    {
        path: '/',
        name: 'Home',
        key: 'home'
    },
    {
        path: '/about',
        name: 'About',
        key: 'about'
    },
    {
        path: '/submit',
        name: 'Submit',
        key: 'submit'
    }
];

const right = [
    {
        path: '/signup',
        name: 'Sign Up',
        key: 'signup'
    },
    {
        path: '/login',
        name: 'Log In',
        key: 'login'
    }
];

const navLinksLeft =
    left.map(link => {
        return (<li key={link.key}>
            <NavLink exact to={link.path} className="link" activeStyle={{ color: "pink", fontWeight: "bold" }}>{link.name}</NavLink>
        </li>)
    });

const navLinksRight =
    right.map(link => {
        return (<li key={link.key}>
            <NavLink exact to={link.path} className="link" activeStyle={{ color: "pink", fontWeight: "bold" }}>{link.name}</NavLink>
        </li>)
    });

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.signOut = this.signOut.bind(this);
    }

    signOut() {
        this.props.signOut();
    }

    render() {
        return (
            <nav>
                <ul>
                    { navLinksLeft }
                </ul>
                <ul>
                    { !this.props.isAuth ? navLinksRight : null }
                    { this.props.isAuth ?
                        <li key="signout">
                            <NavLink className="link" onClick={this.signOut} onMouseOver={{ color: "pink", fontWeight: "bold" }}>Sign Out</NavLink>
                        </li> : null }
                </ul>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return {
        isAuth: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps, actions)(NavBar)