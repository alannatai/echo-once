import React from 'react';
import './login.css';
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';

const Login = ({
    values
}) => (
        <div className='row' id="login">
            <div className='col' id="form">
                <Form>
                    <div>
                        <Field type="email" name="email" placeholder="Email" />
                    </div>
                    <div>
                        <Field type="password" name="password" placeholder="Password" />
                    </div>
                    <button className="btn btn-dark">Log In</button>
                </Form>
            </div>
            <div className='col' id="form">
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
    handleSubmit(values) {
        console.log(values);
    }
})(Login);

export default FormikLogin; 