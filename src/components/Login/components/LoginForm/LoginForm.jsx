import React from "react";
import { reduxForm } from "redux-form";

import { required } from "../../../../utils/validators/validators";
import {CreateField, Input} from '../../../ui/FormsField/FormsField'

import classes from './LoginForm.module.css';

function LoginForm({handleSubmit, error}) {
    return (
        <form onSubmit={handleSubmit}>
            {CreateField("login", "email", [required], Input)}
            {CreateField("password", "password", [required], Input, {type: "password"})}
            {CreateField("", "rememberMe", [required], Input, {type: "checkbox"}, "remember me")}
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