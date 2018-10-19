import React from 'react';

const Form = ({ children }) => {
    return (
        <form className='form'>
            {children}
        </form>
    );
}

Form.Item = ({ label, children, invalid = false }) => {
    return (
        <div className={`form-item ${invalid ? 'error' : ''}`}>
            <div className='label'><label>{`${label}: `}</label></div>
            <div className='control'>{children}</div>
        </div>
    );
}

export default Form;