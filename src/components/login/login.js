import React from 'react';
import './login.css';
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';

const Login = ({
    values
}) => (
        <Form>
            <div>
                <Field type="email" name="email" placeholder="Email"/>
            </div>
            <div>
                <Field type="password" name="password" placeholder="Password"/>
            </div>
            <button>Submit</button>
        </Form>
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