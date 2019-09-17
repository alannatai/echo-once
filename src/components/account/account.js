import React, { Component } from 'react';
import './account.css';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import GoogleLogin from 'react-google-login';

import * as actions from '../../actions';

class Account extends Component {
    async componentDidMount() {
        this.props.checkAuth();
        this.props.getAccountSecret();
    }

    linkFacebook = async res => {
        await this.props.linkFacebook(res.accessToken);
    }

    linkGoogle = async res => {
        await this.props.linkGoogle(res.accessToken);
    }

    unlinkFacebook = async () => {
        await this.props.unlinkFacebook();
    }

    unlinkGoogle = async () => {
        await this.props.unlinkGoogle();
    }

    render() {
        return (
            <div className="account">
                <div>
                    <h3>{this.props.secret}</h3>
                </div>
                <h3 id="account-labels" className="alert alert-info">Link your social media accounts</h3>
                <FacebookLogin
                    appId="220900356921608"
                    fields="name,email,picture"
                    callback={this.linkFacebook}
                    render={renderProps => (
                        <button 
                            className="btn btn-primary" 
                            onClick={renderProps.onClick} 
                            disabled={this.props.account.methods.includes('facebook') ? true : false}>
                                Link Facebook account
                        </button>
                    )}
                />
                <GoogleLogin
                    clientId="678945436199-ktbs3ii6fn79q37hn1hfqbpn0qg0cfd0.apps.googleusercontent.com"
                    render={renderProps => (
                        <button 
                            className="btn btn-danger" 
                            onClick={renderProps.onClick} 
                            disabled={this.props.account.methods.includes('google') ? true : false}>
                                Link Google account
                        </button>
                    )}
                    onSuccess={this.linkGoogle}
                    onFailure={this.linkGoogle}
                />
                <h3 id="account-labels" className="alert alert-info">Unlink your social media accounts</h3>
                <button
                    className="btn btn-primary"
                    onClick={() => this.unlinkFacebook()}
                    disabled={this.props.account.methods.includes('facebook') ? false : true}>
                        Unlink Facebook account
                </button>
                <button 
                    className="btn btn-danger" 
                    onClick={() => this.unlinkGoogle()} 
                    disabled={this.props.account.methods.includes('google') ? false : true}>
                        Unlink Google account
                </button>
            </div>

        )
    }
}

function mapStateToProps(state) {
    console.log('state', state)
    return {
        secret: state.account.accountSecret,
        account: state.account,
        auth: state.auth
    }
}

export default connect(mapStateToProps, actions)(Account);