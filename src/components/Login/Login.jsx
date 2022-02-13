import React from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

import LoginReduxForm from "./components/LoginForm/LoginForm";

import classes from './LoginContainer.module.css';

export default function Login(props) {
    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={props.login}/>
        </div>
    )
}