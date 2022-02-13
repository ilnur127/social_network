import React from "react";
import { reduxForm, Field } from "redux-form";

import { required, maxLengthCreator } from "../../../../utils/validators/validators";
import {Textarea} from "../../../ui/FormsField/FormsField";

import classes from './DialogForm.module.css'

const maxLength50 = maxLengthCreator(50)

function DialogForm(props) {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit}>
            <Field
                component={Textarea}
                name='newMessageText'
                placeholder="Enter your message"
                validate={[required, maxLength50]}
            />
            <button>Send</button>
        </form>
    )
}
const DialogReduxForm = reduxForm({form: 'dialogForm'})(DialogForm)
export default DialogReduxForm