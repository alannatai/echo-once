import React from 'react';
import './login.css';
import { reduxForm, Field } from 'redux-form';
import Yup from 'yup';
/*
const Login = ({
    values,
    errors,
    touched,
    isSubmitting
}) => (
        <div className="row" id="login">
            <div className="col" id="form">
                <Form>
                    <div>
                        { touched.email && errors.email && <p>{errors.email}</p> }
                        <Field class="form-control" type="email" name="email" placeholder="Email" />
                    </div>
                    <div>
                        { touched.password && errors.password && <p>{errors.password}</p> }
                        <Field class="form-control" type="password" name="password" placeholder="Password" />
                    </div>
                    <button type="submit" disabled={isSubmitting} className="btn btn-dark">Log In</button>
                </Form>
            </div>
            <div className="col" id="form">
                Facebook Google 
            </div>
        </div> 
    );

const FormikLogin = withFormik({
    mapPropsToValues({ email, password }) {
        return {
            email: email || '',
            password: password || ''
        }
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required')
    }),
    handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
        setTimeout(() => {
            if(values.email === 'oyaida@msn.com') {
                setErrors({ email: 'That email is already taken' })
            } else {
                resetForm()
            }
            setSubmitting(false)
        }, 1000)

})(Login);

export default FormikLogin; */