import React from "react";
import { Field } from "redux-form";

import classes from './FormsField.module.css'

function FormControl({input, meta, ...props}) {
    const hasError = meta.error && meta.touched
    return (
        <div className={`${classes.formControl} ${hasError ? classes.error : ''}`}>
            {props.children}
            {hasError ?
                <span>{meta.error}</span>
            : null }
        </div>
    )
}

export function Textarea(props) {
    const {input, meta, ...restProps} = props
    return (
        <FormControl {...props}>
            <textarea {...props.input} {...restProps}/>
        </FormControl>
    )
}

export function Input(props) {
    const {input, meta, ...restProps} = props
    return (
        <FormControl {...props}>
            <input {...props.input} {...restProps}/>
        </FormControl>
    )
}

export const CreateField = (placeholder, name, validaters, component, props, title) => (
    <div>
        {props && props.type && props.type !== 'checkbox' ? <label>{title}</label> : null}
        <Field
            component={component}
            name={name}
            placeholder={placeholder}
            validate={validaters}
            {...props}
        />
        {props && props.type && props.type === 'checkbox' ?<label>{title}</label> : null}
    </div>
)