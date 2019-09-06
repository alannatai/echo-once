import React, { Component } from 'react';
import './login.css';
import { reduxForm, Field } from 'redux-form';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { compose } from 'redux';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import GoogleLogin from 'react-google-login';

import * as actions from '../../actions';
import CustomInput from '../custominputs';

const schema = Yup.object().shape({
    email: Yup
        .string()
        .email('Invalid email address')
        .required('Email address is required'),
    password: Yup
        .string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required')
})

const validator = schema => formValues => {
    return schema.validate(formValues, { abortEarly: false })
        .catch((errors) => {
            throw errors.inner.reduce(
                (errors, err) => ({
                    ...errors,
                    [err.path]: err.message
                }),
                {});
        });
};

class Login extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.responseGoogle = this.responseGoogle.bind(this);
        this.responseFacebook = this.responseFacebook.bind(this);
    };

    async onSubmit(formData) {
        await this.props.logIn(formData);
        if (!this.props.errorMessage) {
            this.props.history.push('/');
        };
    };

    async responseFacebook(res) {
        await this.props.oauthFacebook(res.accessToken);
        if (!this.props.errorMessage) {
            this.props.history.push('/');
        };
    };

    async responseGoogle(res) {
        await this.props.oauthGoogle(res.accessToken);
        if (!this.props.errorMessage) {
            this.props.history.push('/');
        };
    };

    render() {
        const { handleSubmit, isAuth } = this.props;
        console.log(this.props);
        return (
            <div id="login">
                {!isAuth && document.referrer === 'http://localhost:3000/submit' ? <div id="submit-warning" className="alert alert-danger">Log in to submit entries</div> : null}
                <div className="row">
                    <div className="col" id="form">
                        <form onSubmit={handleSubmit(this.onSubmit)}>
                            <fieldset>
                                <Field
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    component={CustomInput}
                                />
                            </fieldset>
                            <fieldset>
                                <Field
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    component={CustomInput}
                                />
                            </fieldset>

                            {this.props.errorMessage ?
                                <div className="alert alert-danger">
                                    {this.props.errorMessage}
                                </div> : null}

                            <button type="submit" className="btn btn-dark">Log in</button>
                        </form>
                    </div>

                    <div className="col" id="form">
                        <div className="text-center">
                            <div className="alert alert-info">
                                Log in with third-party services.
                        </div>

                            <FacebookLogin
                                appId="220900356921608"
                                fields="name,email,picture"
                                callback={this.responseFacebook}
                                render={renderProps => (
                                    <button className="btn btn-outline-primary">Log in with Facebook</button>
                                )}
                            />
                            <GoogleLogin
                                clientId="678945436199-ktbs3ii6fn79q37hn1hfqbpn0qg0cfd0.apps.googleusercontent.com"
                                render={renderProps => (
                                    <button className="btn btn-outline-danger">Log in with Google</button>
                                )}
                                onSuccess={this.responseGoogle}
                                onFailure={this.responseGoogle}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

function mapStateToProps(state) {
    return {
        errorMessage: state.auth.errorMessage,
        isAuth: state.auth.isAuthenticated
    };
};

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({
        form: 'login',
        asyncValidate: validator(schema)
    })
)(Login);