import React, { Component } from 'react';
import './about.css';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

import * as actions from '../../actions';

class About extends Component {
    async componentDidMount() {
        this.props.getSecret()
    }

    linkFacebook = async res => {
        await this.props.linkFacebook(res.accessToken);
    }

    linkGoogle = async res => {
        await this.props.linkGoogle(res.accessToken);
    }

    render() {
        return (
            <div className="about">
                <div>
                    <h1>Welcome to Echo Once!</h1>
                </div>
                <div>
                    <h3>{this.props.secret}</h3>
                </div>
                <FacebookLogin
                    appId="220900356921608"
                    textButton="Link with Facebook"
                    fields="name,email,picture"
                    callback={this.linkFacebook}
                    cssClass="btn btn-outline-primary"
                />
                <GoogleLogin
                    clientId="678945436199-ktbs3ii6fn79q37hn1hfqbpn0qg0cfd0.apps.googleusercontent.com"
                    render={renderProps => (
                        <button className="btn btn-outline-danger" onClick={renderProps.onClick} disabled={renderProps.disabled}>Link with Google account</button>
                    )}
                    onSuccess={this.linkGoogle}
                    onFailure={this.linkGoogle}  
                />
            </div>

        )
    }
}

function mapStateToProps(state) {
    console.log('state', state)
    return {
        secret: state.submit.secret,
        auth: state.auth
    }
}

export default connect(mapStateToProps, actions)(About);