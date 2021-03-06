import React, { Component } from 'react';
import './signup.css';
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

class Signup extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.responseGoogle = this.responseGoogle.bind(this);
        this.responseFacebook = this.responseFacebook.bind(this);
    };

    async onSubmit(formData) {
        await this.props.signUp(formData);
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

    showPassword() {
        const passwordField = document.getElementById("password");
        if (passwordField.type === "password") {
            passwordField.type = "text";
        } else {
            passwordField.type = "password";
        }
    };

    render() {
        const { handleSubmit } = this.props;
        return (
            <div className="row" id="signup">
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
                            <input type="checkbox" onClick={this.showPassword} /> Show
                        </fieldset>

                        {this.props.errorMessage ?
                            <div className="alert alert-danger">
                                {this.props.errorMessage}
                            </div> : null}

                        <button type="submit" className="btn btn-dark">Sign up</button>
                    </form>
                </div>

                <div className="col" id="form">
                    <div className="text-center">
                        <div className="alert alert-info">
                            Sign up with third-party services.
                        </div>

                        <FacebookLogin
                            appId="220900356921608"
                            fields="name,email,picture"
                            callback={this.responseFacebook}
                            render={renderProps => (
                                <button className="btn btn-outline-primary" onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign up with Facebook</button>
                            )}
                        />
                        <GoogleLogin
                            clientId="678945436199-ktbs3ii6fn79q37hn1hfqbpn0qg0cfd0.apps.googleusercontent.com"
                            render={renderProps => (
                                <button className="btn btn-outline-danger" onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign up with Google</button>
                            )}
                            onSuccess={this.responseGoogle}
                            onFailure={this.responseGoogle}
                        />
                    </div>
                </div>
            </div>
        );
    };
}

function mapStateToProps(state) {
    return {
        errorMessage: state.auth.errorMessage
    };
};

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({
        form: 'signup',
        asyncValidate: validator(schema)
    })
)(Signup);