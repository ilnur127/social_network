import React from "react";
import { Field, reduxForm } from "redux-form";

import { required } from "../../../../utils/validators/validators";
import {Input} from '../../../ui/FormsField/FormsField'

import classes from './LoginForm.module.css';

function LoginForm(props) {
    const {handleSubmit, error} = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    placeholder="login"
                    name='email'
                    component={Input}
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    placeholder="password"
                    name='password'
                    type='password'
                    component={Input}
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    type="checkbox"
                    name='rememberMe'
                    component={Input}
                />
                <label>remember me</label>
            </div>
            {error ?
                <div className={classes.error}>{error}</div>
            : null}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default LoginReduxForm