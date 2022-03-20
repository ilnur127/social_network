import React from "react";
import { reduxForm, Field } from "redux-form";

import {required, maxLengthCreator} from '../../../../../utils/validators/validators';
import {Textarea} from '../../../../ui/FormsField/FormsField';

import classes from './NewPostForm.module.css';

const maxLength10 = maxLengthCreator(10)

function NewPostForm({handleSubmit}) {
    return (
        <form onSubmit={handleSubmit}>
            <Field
                component={Textarea}
                name='newPostText'
                placeholder="Enter your text"
                validate={[required, maxLength10]}
            />
            <button>App post</button>
        </form>
    )
}
const NewPostReduxForm = reduxForm({form: 'postForm'})(NewPostForm)
export default NewPostReduxForm