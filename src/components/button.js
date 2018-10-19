import React from 'react';

export default ({ children, ...rest }) => {
    return (
        <button {...rest} type='button'>{children}</button>
    );
}