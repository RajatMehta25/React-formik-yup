import React from 'react'
import { ErrorMessage,useField } from 'formik'
const Textfield = ({label,...props}) => {
    const[field,meta]=useField(props);
    return (
        <div className="">
            <label>{label}</label>
            <input className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'} `} {...field}{...props} autoComplete="off" />
            <ErrorMessage component="div" name={field.name} className="error" />
        </div>
    )
}

export default Textfield
