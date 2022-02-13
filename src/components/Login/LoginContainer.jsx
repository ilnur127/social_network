import React from "react";
import { connect } from "react-redux";
import { loginThunkCreater} from "../../redux/authReduser";

import Login from './Login'

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {
    login: loginThunkCreater
})(Login)